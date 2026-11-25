// Sayla for Windows and Mac.
// The program opens the real Sayla app in its own window, so every update we publish reaches it automatically.
const { app, BrowserWindow, shell, session, systemPreferences, Menu } = require('electron');
const http = require('http');
const crypto = require('crypto');

const APP_URL = 'https://app.getsayla.com/';
const APP_HOST = new URL(APP_URL).host;
// Compare the exact host (https only). A substring check let 'https://other.site/?app.getsayla.com' through,
// which opened that site inside the Sayla window and gave it the microphone.
const hostOf = (u) => { try { const x = new URL(u); return x.protocol === 'https:' ? x.host : ''; } catch (e) { return ''; } };
const isApp = (u) => hostOf(u) === APP_HOST;
// only web and email links go to the system (never file:, custom protocols or anything else)
const openOutside = (u) => { try { if (['https:', 'http:', 'mailto:'].includes(new URL(u).protocol)) shell.openExternal(u); } catch (e) {} };

// Continue with Google, in the system browser. Google refuses sign-in inside embedded apps ("This browser or app may not
// be secure"), and a Google popup opened in the browser cannot hand the sign-in back to this window (blank page).
// So: a one-off server on 127.0.0.1 waits for a 2-minute single-use code; the browser opens
// app.getsayla.com/entrar-pc.html, signs in there and sends the code back with the random `state` we created.
// Then the app opens /#handoff=<code> (the app asks before logging in). The browser is left without a session.
let loginSrv = null, loginTimer = null;
const stopLogin = () => { clearTimeout(loginTimer); if (loginSrv) { try { loginSrv.close(); } catch (e) {} loginSrv = null; } };
const donePage = (ok) => `<!doctype html><meta charset="utf-8"><title>Sayla</title><body style="margin:0;height:100vh;display:grid;place-items:center;font-family:Segoe UI,-apple-system,sans-serif;color:#1c1c1e;text-align:center"><div><div style="width:64px;height:64px;border-radius:18px;margin:0 auto 16px;background:linear-gradient(135deg,#ff8a3d,#ff4d8d 50%,#8b6cff)"></div><h1 style="font-size:24px;margin:0 0 8px">${ok ? 'Pronto · Done' : 'Este link já não vale · This link expired'}</h1><p style="color:#8e8e93;margin:0">${ok ? 'Volta ao programa da Sayla. Podes fechar este separador.<br>Go back to the Sayla app. You can close this tab.' : 'No programa, carrega outra vez em Continuar com Google.<br>In the app, click Continue with Google again.'}</p></div>`;
function googleInBrowser() {
  stopLogin();
  const state = crypto.randomBytes(16).toString('hex');
  loginSrv = http.createServer((req, res) => {
    const u = new URL(req.url, 'http://127.0.0.1');
    if (u.pathname !== '/sayla-login') { res.writeHead(404); return res.end(); }
    const code = u.searchParams.get('code') || '';
    const good = u.searchParams.get('state') === state && /^[A-Za-z0-9_-]{20,60}$/.test(code);
    res.writeHead(good ? 200 : 400, { 'content-type': 'text/html; charset=utf-8', 'cache-control': 'no-store' });
    res.end(donePage(good));
    if (!good) return;
    stopLogin();
    // a new query string forces a full load: only a #hash change would not reload, and the app reads #handoff on start
    if (win) { win.loadURL(APP_URL + '?pc=' + Date.now() + '#handoff=' + code); if (win.isMinimized()) win.restore(); win.show(); win.focus(); }
  });
  loginSrv.on('error', stopLogin);
  loginSrv.listen(0, '127.0.0.1', () => {
    openOutside(APP_URL + 'entrar-pc?port=' + loginSrv.address().port + '&state=' + state);
    loginTimer = setTimeout(stopLogin, 10 * 60e3); // nobody came back in 10 minutes: stop listening
  });
}
const isGoogleLogin = (u) => hostOf(u) === 'accounts.google.com';

// Only one Sayla window at a time: opening it again brings the existing one to the front.
if (!app.requestSingleInstanceLock()) { app.quit(); }

let win = null;

function createWindow() {
  win = new BrowserWindow({
    width: 1360,
    height: 860,
    minWidth: 1024,
    minHeight: 640,
    title: 'Sayla',
    backgroundColor: '#ffffff',
    show: false,
    autoHideMenuBar: true,
    titleBarStyle: process.platform === 'darwin' ? 'hiddenInset' : 'default',
    trafficLightPosition: { x: 16, y: 18 },
    webPreferences: { contextIsolation: true, nodeIntegration: false, sandbox: true, spellcheck: true }
  });

  // the app recognises the program (and hides its own "Install the app" button)
  win.webContents.setUserAgent(win.webContents.getUserAgent() + ' SaylaDesktop/' + app.getVersion());
  win.loadURL(APP_URL);
  win.once('ready-to-show', () => win.show());

  // no connection: show a friendly page and try again
  win.webContents.on('did-fail-load', (e, code, desc, url, isMain) => {
    if (!isMain || code === -3) return;
    win.loadURL('data:text/html;charset=utf-8,' + encodeURIComponent(`<!doctype html><meta charset="utf-8"><title>Sayla</title>
      <body style="margin:0;height:100vh;display:grid;place-items:center;font-family:Inter,Segoe UI,-apple-system,sans-serif;color:#1c1c1e;text-align:center">
      <div><div style="width:72px;height:72px;border-radius:22px;margin:0 auto 18px;background:linear-gradient(135deg,#ff8a3d,#ff4d8d 50%,#8b6cff)"></div>
      <h1 style="font-size:26px;margin:0 0 8px">No internet connection</h1><p style="color:#8e8e93;margin:0 0 20px">Sayla will open as soon as you're back online.</p>
      <button onclick="location.href='${APP_URL}'" style="font:inherit;font-weight:600;border:0;border-radius:12px;padding:12px 20px;background:#1c1c1e;color:#fff;cursor:pointer">Try again</button></div>
      <script>addEventListener('online',()=>location.href='${APP_URL}')</script>`));
  });
}

// v1.0.3: the same rules for EVERY window and frame (before, only the main window had them, so a window opened by the
// app could navigate anywhere). Links to other sites (WhatsApp, Google, legal pages…) open in the normal browser.
app.on('web-contents-created', (e, contents) => {
  contents.setWindowOpenHandler(({ url }) => {
    if (isApp(url)) return { action: 'allow' };
    if (isGoogleLogin(url)) googleInBrowser(); // the Google button's popup: sign in through the browser instead
    else openOutside(url);
    return { action: 'deny' };
  });
  contents.on('will-navigate', (ev, url) => { if (!isApp(url) && hostOf(url) !== 'accounts.google.com') { ev.preventDefault(); openOutside(url); } });
  // main frame only: iframes (Google button, Cloudflare Turnstile) may redirect inside themselves
  contents.on('will-redirect', (ev, url, inPlace, isMainFrame) => { if (isMainFrame && !isApp(url) && hostOf(url) !== 'accounts.google.com' && !/^data:/.test(url)) { ev.preventDefault(); openOutside(url); } });
  contents.on('will-attach-webview', (ev) => ev.preventDefault()); // no <webview> tags
});

app.on('second-instance', () => { if (win) { if (win.isMinimized()) win.restore(); win.focus(); } });

app.whenReady().then(async () => {
  // microphone for voice notes (Sayla only)
  session.defaultSession.setPermissionRequestHandler((wc, permission, cb) => {
    const ok = ['media', 'notifications', 'clipboard-sanitized-write', 'fullscreen'].includes(permission) && isApp(wc.getURL());
    cb(ok);
  });
  session.defaultSession.setPermissionCheckHandler((wc, permission, origin) => ['media', 'notifications'].includes(permission) && isApp(String(origin)));
  if (process.platform === 'darwin') { try { await systemPreferences.askForMediaAccess('microphone'); } catch (e) {} }

  // simple menu: on Mac it is needed for copy/paste and Cmd+Q; on Windows it stays hidden
  Menu.setApplicationMenu(Menu.buildFromTemplate([
    ...(process.platform === 'darwin' ? [{ role: 'appMenu' }] : []),
    { role: 'editMenu' },
    { label: 'View', submenu: [{ role: 'reload' }, { role: 'resetZoom' }, { role: 'zoomIn' }, { role: 'zoomOut' }, { type: 'separator' }, { role: 'togglefullscreen' }] },
    { role: 'windowMenu' }
  ]));

  createWindow();
  app.on('activate', () => { if (BrowserWindow.getAllWindows().length === 0) createWindow(); });
});

app.on('window-all-closed', () => { if (process.platform !== 'darwin') app.quit(); });

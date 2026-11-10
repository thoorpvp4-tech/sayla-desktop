// Sayla for Windows and Mac.
// The program opens the real Sayla app in its own window, so every update we publish reaches it automatically.
const { app, BrowserWindow, shell, session, systemPreferences, Menu } = require('electron');

const APP_URL = 'https://tablefor.thoorpvp4.workers.dev/';
const APP_HOST = new URL(APP_URL).host;

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

  // links to other sites (WhatsApp, Google, legal pages…) open in the normal browser
  win.webContents.setWindowOpenHandler(({ url }) => { if (!url.includes(APP_HOST)) shell.openExternal(url); return { action: url.includes(APP_HOST) ? 'allow' : 'deny' }; });
  win.webContents.on('will-navigate', (e, url) => { if (!url.includes(APP_HOST) && !url.startsWith('https://accounts.google.com')) { e.preventDefault(); shell.openExternal(url); } });

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

app.on('second-instance', () => { if (win) { if (win.isMinimized()) win.restore(); win.focus(); } });

app.whenReady().then(async () => {
  // microphone for voice notes (Sayla only)
  session.defaultSession.setPermissionRequestHandler((wc, permission, cb) => {
    const ok = ['media', 'notifications', 'clipboard-sanitized-write', 'fullscreen'].includes(permission) && wc.getURL().includes(APP_HOST);
    cb(ok);
  });
  session.defaultSession.setPermissionCheckHandler((wc, permission, origin) => ['media', 'notifications'].includes(permission) && String(origin).includes(APP_HOST));
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

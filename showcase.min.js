(function(){var S=document.querySelector("#desktop .desk-outer");if(!S||document.getElementById("sx-host"))return;var z=document.createElement("div");z.id="sx-host",S.parentNode.insertBefore(z,S);var b=z.attachShadow({mode:"open"});b.innerHTML=`<style>:host{--grad:linear-gradient(120deg,#ff8a3d 0%,#ff4d8d 50%,#8b6cff 100%);--o:#ff8a3d;--p:#ff4d8d;--v:#8b6cff;--teal:#21b8a6;display:block;text-align:center;font-family:Inter,system-ui,-apple-system,sans-serif;-webkit-font-smoothing:antialiased;color:var(--ink,#1c1c1e)}

:root{--ink:#1c1c1e;--ink2:#3a3a3c;--grey:#8e8e93;--line:#e5e5ea;--soft:#f2f2f7;--o:#ff8a3d;--p:#ff4d8d;--v:#8b6cff;--teal:#21b8a6;--grad:linear-gradient(120deg,#ff8a3d 0%,#ff4d8d 50%,#8b6cff 100%)}
*{box-sizing:border-box;margin:0;padding:0}
.grad-text{background-image:var(--grad);-webkit-background-clip:text;background-clip:text;color:transparent}

/* ---------- sec\xE7\xE3o ---------- */
.wrap{max-width:1100px;margin:0 auto;padding:0 24px}
.kicker{font-size:14px;font-weight:700;letter-spacing:.02em;height:20px;transition:opacity .25s,filter .25s}
h2{color:var(--ink,#1c1c1e);font-size:clamp(34px,5vw,56px);line-height:1.05;letter-spacing:-.04em;font-weight:800;margin:10px 0 16px}
h2 .l2{display:inline-block;transition:opacity .25s,filter .25s,transform .3s cubic-bezier(.2,.8,.2,1)}
.lead{font-size:18px;color:var(--ink2,#3a3a3c);max-width:640px;margin:0 auto;min-height:56px;line-height:1.55;transition:opacity .25s,filter .25s}
.swap{opacity:0!important;filter:blur(4px)!important;transform:translateY(4px)}

.tabs{display:inline-flex;gap:6px;margin-top:30px;padding:6px;border-radius:999px;background:var(--soft,#f2f2f7);box-shadow:inset 0 0 0 1px color-mix(in srgb,var(--ink,#1c1c1e) 6%,transparent)}
.tab{position:relative;display:flex;align-items:center;gap:8px;border:0;background:none;color:var(--grey,#8e8e93);font:600 14.5px Inter,system-ui,sans-serif;padding:10px 18px 12px;border-radius:999px;cursor:pointer;overflow:hidden;transition:color .3s,background .3s}
.tab svg{width:17px;height:17px;fill:none;stroke:currentColor;stroke-width:1.9;stroke-linecap:round;stroke-linejoin:round}
.tab:hover{color:var(--ink,#1c1c1e)}
.tab.on{color:var(--ink,#1c1c1e);background:color-mix(in srgb,var(--ink,#1c1c1e) 9%,transparent)}
.tab .bar{position:absolute;left:18px;right:18px;bottom:5px;height:2px;border-radius:2px;background:color-mix(in srgb,var(--ink,#1c1c1e) 12%,transparent);overflow:hidden;opacity:0;transition:opacity .3s}
.tab.on .bar{opacity:1}
.tab .bar i{display:block;height:100%;width:0;background:var(--grad)}

.outer{max-width:1200px;margin:40px auto 0;padding:0 40px}
.stage{position:relative;height:680px}
.scale{position:absolute;left:50%;top:0;width:1120px;height:680px;transform-origin:center top;transform:translateX(-50%)}
.pause{position:absolute;right:14px;bottom:14px;z-index:60;width:36px;height:36px;border-radius:50%;border:0;background:rgba(28,28,30,.75);color:#fff;display:grid;place-items:center;cursor:pointer;backdrop-filter:blur(8px)}
.pause svg{width:14px;height:14px;fill:currentColor;grid-area:1/1}
.pause .pl,.pause.p .pa{display:none}.pause.p .pl{display:block}

/* ---------- janela (igual ao site) ---------- */
.dwin{--ink:#1c1c1e;--ink2:#3a3a3c;--grey:#8e8e93;--line:#e5e5ea;--soft:#f2f2f7;width:1120px;height:680px;border-radius:16px;background:#fff;overflow:hidden;position:relative;color:var(--ink);font-size:13px;box-shadow:0 60px 120px -40px rgba(110,70,200,.42),0 30px 60px -30px rgba(0,0,0,.18),0 0 0 1px rgba(127,127,140,.18);display:flex;flex-direction:column;text-align:left;user-select:none;animation:dwfloat 7s ease-in-out infinite}
@keyframes dwfloat{50%{translate:0 -12px}}
.dwin svg{fill:none;stroke:currentColor;stroke-width:1.8;stroke-linecap:round;stroke-linejoin:round}
.dwin.paused *,.dwin.paused,.dwin.paused ::before,.dwin.paused ::after{animation-play-state:paused!important}
.dw-top{height:44px;flex:0 0 auto;display:flex;align-items:center;gap:14px;padding:0 14px;background:#f6f6f8;border-bottom:1px solid #ececf0;position:relative;z-index:5}
.dw-dots{display:flex;gap:7px}.dw-dots i{width:12px;height:12px;border-radius:50%;background:#ff5f57}.dw-dots i:nth-child(2){background:#febc2e}.dw-dots i:nth-child(3){background:#28c840}
.dw-nav{display:flex;gap:6px;color:#b0b0b6}.dw-nav svg{width:16px;height:16px}
.dw-tab{display:flex;align-items:center;gap:8px;background:#fff;border-radius:8px;padding:5px 12px;font-weight:600;font-size:12.5px;box-shadow:0 1px 2px rgba(0,0,0,.06)}
.ico{width:16px;height:16px;border-radius:4px;background:var(--grad);display:grid;place-items:center;flex:0 0 auto}
.ico svg{width:10px;height:10px;stroke:#fff!important;stroke-width:3!important}
.dw-top-r{margin-left:auto;display:flex;align-items:center;gap:6px}
.dw-av{width:24px;height:24px;border-radius:50%;color:#fff;font-size:11px;font-weight:700;display:grid;place-items:center;border:2px solid #f6f6f8;margin-left:-10px}
.dw-share{margin-left:8px;font-weight:600;font-size:12px;background:var(--ink);color:#fff;padding:5px 12px;border-radius:8px}
.dw-body{flex:1;display:flex;min-height:0}
.dw-side{width:196px;flex:0 0 auto;background:#fafafb;border-right:1px solid #ececf0;padding:14px 12px;display:flex;flex-direction:column;gap:2px;position:relative;z-index:5}
.dw-ws{display:flex;align-items:center;gap:8px;padding:4px 6px 12px;font-size:13.5px}
.dw-ws .ico{width:24px;height:24px;border-radius:7px}.dw-ws .ico svg{width:13px;height:13px}
.dw-sync{margin-left:auto;display:flex;align-items:center;gap:5px;font-size:11px;font-weight:600;color:#0f7f72}
.dw-sync i{width:6px;height:6px;border-radius:50%;background:#28c840;animation:dwsync 1.6s ease-in-out infinite}
@keyframes dwsync{50%{box-shadow:0 0 0 6px rgba(40,200,64,0)}0%,100%{box-shadow:0 0 0 0 rgba(40,200,64,.35)}}
.dw-menu>div{display:flex;align-items:center;gap:10px;padding:7px 8px;border-radius:8px;color:var(--ink2);font-weight:500;transition:background .35s,color .35s}
.dw-menu>div.on{background:#efeff3;color:var(--ink);font-weight:600}
.dw-menu svg{width:17px;height:17px}
.dw-menu em{margin-left:auto;font-style:normal;font-size:11px;font-weight:600;color:var(--grey)}
.dw-lists i{width:9px;height:9px;border-radius:3px;margin:0 4px}
.dw-lbl{font-size:11px;font-weight:700;color:var(--grey);letter-spacing:.04em;padding:16px 8px 4px}
.dw-talk{margin-top:auto;display:flex;align-items:center;gap:10px;background:#fff;border-radius:14px;padding:10px;box-shadow:0 0 0 1px #ececf0,0 8px 20px -12px rgba(60,20,90,.3);transition:transform .15s}
.dw-talk.press{transform:scale(.95)}
.dw-talk b{display:block;font-size:13px}.dw-talk small{color:var(--grey);font-size:11px}
.dw-orb{width:38px;height:38px;border-radius:50%;background:var(--grad);display:grid;place-items:center;color:#fff;flex:0 0 auto;box-shadow:0 6px 16px -4px rgba(255,77,141,.6)}
.dw-orb svg{width:18px;height:18px}
.dw-talk.rec .dw-orb{animation:dwrec 1s ease-in-out infinite}
@keyframes dwrec{50%{box-shadow:0 0 0 8px rgba(255,77,141,.2)}}

/* ---------- p\xE1ginas que se viram ---------- */
.book{flex:1;min-width:0;position:relative;perspective:2200px;perspective-origin:0 50%;background:#fff}
.page{position:absolute;inset:0;background:#fff;display:flex;visibility:hidden;transform-origin:left center;backface-visibility:hidden}
.page.cur{visibility:visible;z-index:1}
.page.next{visibility:visible;z-index:1}
.page.turn{visibility:visible;z-index:3;animation:turn .55s cubic-bezier(.5,0,.3,1) both;box-shadow:0 0 40px rgba(40,20,80,.08)}
.page.turn::after{content:"";position:absolute;inset:0;pointer-events:none;background:linear-gradient(90deg,rgba(255,255,255,0) 55%,rgba(30,20,60,.07));animation:shade .62s cubic-bezier(.65,0,.35,1) both}
.page.next::after{content:"";position:absolute;inset:0;pointer-events:none;background:linear-gradient(90deg,rgba(20,10,40,.06),rgba(20,10,40,0) 50%);animation:shade2 .62s ease both}
@keyframes turn{0%{transform:rotateY(0);opacity:1}35%{opacity:1}100%{transform:rotateY(-58deg);opacity:0}}
@keyframes shade{0%{opacity:0}100%{opacity:1}}
@keyframes under{0%{transform:scale(.985);filter:brightness(.97)}100%{transform:none;filter:none}}
@keyframes shade2{0%{opacity:1}100%{opacity:0}}

/* comuns */
.main{flex:1;min-width:0;position:relative;padding:18px 22px 0;display:flex;flex-direction:column;overflow:hidden}
.head{display:flex;align-items:center;gap:14px;margin-bottom:14px}
.dw-date{font-size:11px;font-weight:700;color:var(--grey);letter-spacing:.05em;text-transform:uppercase}
.dw-h{font-size:26px;font-weight:800;letter-spacing:-.03em;line-height:1.1}
.pill{display:flex;align-items:center;gap:6px;background:#f2f2f7;border-radius:999px;padding:5px 11px 5px 6px;font-weight:600;font-size:12px;margin-top:14px}
.mini-orb{width:16px;height:16px;border-radius:50%;background:var(--grad)}
.seg{margin-left:auto;display:flex;background:#f2f2f7;border-radius:9px;padding:3px;font-size:12px;font-weight:600;color:var(--grey)}
.seg span{padding:5px 12px;border-radius:7px}.seg .on{background:#fff;color:var(--ink);box-shadow:0 1px 2px rgba(0,0,0,.08)}
.search{display:flex;align-items:center;gap:8px;width:190px;border:1px solid #e5e5ea;border-radius:9px;padding:7px 10px;color:var(--grey);font-size:12.5px}
.search svg{width:15px;height:15px}
.btn-dark{display:flex;align-items:center;gap:6px;font-weight:600;font-size:12.5px;color:#fff;background:#1c1c1e;border-radius:10px;padding:8px 13px}
.btn-dark svg{width:15px;height:15px}
.lbl{font-size:11px;font-weight:700;color:var(--grey);letter-spacing:.05em;text-transform:uppercase;margin:16px 0 8px}
.k-o{background:#fff1e6;--k:#ff8a3d}.k-p{background:#ffe9f1;--k:#ff4d8d}.k-v{background:#efebff;--k:#8b6cff}.k-t{background:#e3f6f3;--k:#21b8a6}.k-b{background:#e2edff;--k:#3b82f6}
.dck{width:14px;height:14px;border-radius:50%;border:2px solid var(--k);flex:0 0 auto;display:grid;place-items:center;transition:background .3s}
.dck::after{content:"";width:6px;height:3px;border-left:1.8px solid #fff;border-bottom:1.8px solid #fff;transform:rotate(-45deg) scale(0);margin-top:-1px;transition:transform .3s cubic-bezier(.2,.9,.3,1.6)}
.done .dck{background:var(--k)}.done .dck::after{transform:rotate(-45deg) scale(1)}
.done b,.done>span{color:var(--grey);text-decoration:line-through;text-decoration-color:rgba(142,142,147,.6)}
.tag{margin-left:auto;font-size:9.5px;font-weight:800;letter-spacing:.05em;color:#fff;background:var(--grad);padding:2px 6px;border-radius:999px}
.nw{opacity:0;transform:translateY(-10px) scale(.9)}
.nw.in{opacity:1;transform:none;transition:opacity .5s,transform .6s cubic-bezier(.2,.9,.3,1.3)}

/* barra de voz (estilo das notas) */
.say{display:flex;align-items:center;gap:12px;padding:11px 14px;border-radius:14px;border:1.5px solid transparent;background:linear-gradient(#fff,#fff) padding-box,var(--grad) border-box;box-shadow:0 12px 24px -18px rgba(255,77,141,.7);min-height:46px}
.say .w{display:flex;gap:3px;align-items:center;height:20px;flex:0 0 auto}
.say .w i{display:block;width:3px;border-radius:2px;height:5px;background:#ff4d8d}
.say .w i:nth-child(1){background:#ff8a3d}.say .w i:nth-child(3){background:#c75fd0}.say .w i:nth-child(4){background:#8b6cff}
.say.rec .w i{animation:nnwv 1.1s ease-in-out infinite}.say.rec .w i:nth-child(2){animation-delay:.15s}.say.rec .w i:nth-child(3){animation-delay:.3s}.say.rec .w i:nth-child(4){animation-delay:.45s}
@keyframes nnwv{50%{height:16px}}
.say .q{font-size:13.5px;font-weight:500;color:#8e8e93}
.say.rec .q,.say.fin .q{color:#1c1c1e}
.say .q b{display:inline-block;width:2px;height:15px;background:#ff4d8d;vertical-align:-2px;margin-left:2px;animation:car .8s steps(1) infinite}
@keyframes car{50%{opacity:0}}
.say .st{margin-left:auto;font-size:11.5px;font-weight:700;color:#0f7f72;display:flex;align-items:center;gap:6px;opacity:0;transition:opacity .3s}
.say .st.on{opacity:1}
.say .st i{width:14px;height:14px;border-radius:50%;background:conic-gradient(#ff8a3d,#ff4d8d,#8b6cff,#ff8a3d);animation:spin .8s linear infinite;-webkit-mask:radial-gradient(circle,transparent 4px,#000 4.5px);mask:radial-gradient(circle,transparent 4px,#000 4.5px)}
.say .st.ok i{animation:none;background:#21b8a6;-webkit-mask:none;mask:none;position:relative}
@keyframes spin{100%{transform:rotate(360deg)}}

.toast{position:absolute;right:22px;top:70px;display:flex;align-items:center;gap:10px;background:#fff;border-radius:14px;padding:10px 14px 10px 10px;box-shadow:0 20px 40px -14px rgba(60,20,90,.4),0 0 0 1px rgba(0,0,0,.05);transform:translateY(-12px) scale(.96);opacity:0;transition:.4s cubic-bezier(.2,.9,.3,1.3);z-index:25}
.toast.on{transform:none;opacity:1}
.toast b{display:block;font-size:12.5px}.toast small{font-size:11.5px;color:var(--grey)}
.t-ic{width:30px;height:30px;border-radius:9px;background:#e3f6f3;color:#0f7f72;display:grid;place-items:center;flex:0 0 auto}
.t-ic svg{width:17px;height:17px}
.cursor{position:absolute;left:0;top:0;width:22px;height:22px;z-index:50;pointer-events:none;opacity:0;transition:transform .9s cubic-bezier(.45,0,.2,1),opacity .3s;filter:drop-shadow(0 3px 4px rgba(0,0,0,.3))}
.cursor svg{width:22px;height:22px;fill:#1c1c1e!important;stroke:#fff!important;stroke-width:1.6}
.cursor.click svg{transform:scale(.82);transition:transform .12s}

/* ---------- 1 \xB7 tarefas ---------- */
.panes{display:grid;grid-template-columns:250px 1fr;gap:18px}
.ph{font-size:12px;font-weight:700;color:var(--grey);letter-spacing:.04em;text-transform:uppercase;margin-bottom:10px;display:flex;gap:8px}
.ph span{font-weight:600;text-transform:none;letter-spacing:0;color:#b0b0b6}
.tl{position:relative;height:408px;margin-left:44px;border-left:1px solid #ececf0}
.hr{position:absolute;left:-44px;width:38px;text-align:right;font-size:10.5px;font-weight:600;color:var(--grey);transform:translateY(-6px)}
.ev{position:absolute;left:8px;right:0;border-radius:9px;padding:0 10px;display:flex;align-items:center;gap:8px;font-size:12.5px;overflow:hidden}
.ev b{font-weight:600;white-space:nowrap}.ev small{color:var(--grey);font-size:11px;white-space:nowrap}
.ev.busy{flex-direction:column;align-items:flex-start;justify-content:center;gap:0;background:repeating-linear-gradient(135deg,#f4f4f7 0 6px,#ececf1 6px 12px);color:var(--ink2)}
.now{position:absolute;left:-4px;right:0;height:2px;background:var(--grad);z-index:2}
.now::before{content:"";position:absolute;left:-4px;top:-3px;width:8px;height:8px;border-radius:50%;background:#ff4d8d}
.now span{position:absolute;left:-46px;top:-7px;font-size:10px;font-weight:700;color:#ff4d8d;width:36px;text-align:right}
.cols{display:grid;grid-template-columns:repeat(5,1fr);gap:8px}
.col{background:#fafafb;border-radius:12px;padding:10px 8px;min-height:408px;transition:background .4s,box-shadow .4s}
.col.today{background:#fff;box-shadow:0 0 0 1.5px #ff4d8d}
.col.drop{background:#f4f1ff;box-shadow:0 0 0 1.5px #8b6cff}
.ch{display:flex;align-items:baseline;gap:6px;padding:0 2px}.ch b{font-size:13px}.ch span{font-size:11.5px;color:var(--grey);font-weight:600}
.load{height:5px;border-radius:5px;background:#ececf1;margin:8px 2px 4px;overflow:hidden}
.load i{display:block;height:100%;border-radius:5px;background:linear-gradient(90deg,#21b8a6,#8b6cff);transition:width .8s cubic-bezier(.3,0,.2,1)}
.col.over .load i{background:linear-gradient(90deg,#ff8a3d,#e5484d)}
.lt{font-size:10.5px;font-weight:600;color:var(--grey);padding:0 2px 8px}.col.over .lt{color:#e5484d}
.cards{display:flex;flex-direction:column;gap:6px}
.card{display:flex;gap:7px;align-items:flex-start;border-radius:9px;padding:8px;font-size:12px;font-weight:600;line-height:1.25;position:relative}
.card .dck{margin-top:1px;width:13px;height:13px}
.card small{display:block;font-weight:500;color:var(--grey);font-size:10.5px;margin-top:1px}
.card.lift{z-index:20;box-shadow:0 18px 30px -10px rgba(60,20,90,.4)}
.voice{position:absolute;left:50%;bottom:22px;width:560px;display:flex;align-items:center;gap:12px;background:rgba(20,20,24,.92);backdrop-filter:blur(12px);color:#fff;border-radius:18px;padding:12px 16px 12px 12px;box-shadow:0 24px 50px -16px rgba(0,0,0,.5);transform:translate(-50%,30px);opacity:0;transition:.45s cubic-bezier(.2,.9,.3,1.2);z-index:30}
.voice.on{transform:translate(-50%,0);opacity:1}
.voice .orb{width:34px;height:34px;border-radius:50%;background:var(--grad);flex:0 0 auto;animation:dwrec 1.1s ease-in-out infinite}
.voice.think .orb{background:conic-gradient(#ff8a3d,#ff4d8d,#8b6cff,#ff8a3d);animation:spin .8s linear infinite}
.vw{display:flex;gap:3px;align-items:center;height:24px;flex:0 0 auto}
.vw i{width:3px;border-radius:3px;background:var(--grad);animation:dwv .9s ease-in-out infinite}
.vw i:nth-child(2n){animation-delay:-.3s}.vw i:nth-child(3n){animation-delay:-.6s}
@keyframes dwv{0%,100%{height:5px}50%{height:22px}}
.voice.think .vw,.voice.ok .vw{display:none}
.voice p{font-size:13.5px;line-height:1.4;font-weight:500}

/* ---------- 2 \xB7 notas (igual ao site) ---------- */
.nd-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:10px;align-items:start}
.nd-c{position:relative;overflow:hidden;border-radius:16px;padding:12px 12px 10px;background:linear-gradient(160deg,color-mix(in srgb,var(--t) 45%,#fff),var(--t));box-shadow:inset 0 1px 0 #fff,0 0 0 1px color-mix(in srgb,var(--k) 12%,transparent),0 10px 20px -16px var(--k);transition:transform .4s cubic-bezier(.2,.8,.2,1),box-shadow .4s}
.nd-c::before{content:"";position:absolute;right:-24px;top:-26px;width:76px;height:76px;border-radius:50%;background:var(--k);opacity:.17;filter:blur(14px)}
.nd-c .ic{width:24px;height:24px;border-radius:8px;background:var(--k);display:grid;place-items:center;margin-bottom:8px}
.nd-c .ic svg{width:13px;height:13px;stroke:#fff;stroke-width:2.4}
.nd-c b{display:block;font-size:13.5px;font-weight:800;letter-spacing:-.02em}
.nd-c p{font-size:12px;line-height:1.4;color:#4a4a4f;margin-top:3px}
.nd-c ul{list-style:none;margin-top:5px;display:flex;flex-direction:column;gap:3px}
.nd-c li{font-size:12px;color:#4a4a4f;display:flex;gap:6px;align-items:center}
.nd-c li::before{content:"";width:5px;height:5px;border-radius:50%;background:var(--k);flex:0 0 auto}
.nd-c li.add{animation:ndli .6s cubic-bezier(.2,.8,.2,1) both;font-weight:600;color:#1c1c1e}
@keyframes ndli{0%{opacity:0;transform:translateX(-8px)}}
.nd-c small{display:inline-block;margin-top:8px;font-size:10px;font-weight:700;color:#6b6b70;background:rgba(255,255,255,.7);padding:2px 7px;border-radius:99px}
.nd-c.sel{box-shadow:inset 0 1px 0 #fff,0 0 0 2px var(--k),0 14px 26px -14px var(--k)}
.nd-c.pulse{animation:ndpulse .9s ease}
@keyframes ndpulse{40%{transform:scale(1.04)}}
.nd-new{display:none}.nd-new.in{display:block;animation:ndpop .7s cubic-bezier(.2,.8,.2,1) both}
@keyframes ndpop{0%{opacity:0;transform:translateY(-12px) scale(.88)}60%{transform:scale(1.04)}}
.ed{width:270px;flex:0 0 auto;border-left:1px solid #ececf0;padding:18px 20px;position:relative;overflow:hidden;display:flex;flex-direction:column;background:#fff;transition:opacity .3s}
.ed.sw{opacity:.25}
.ed-glow{position:absolute;inset:-60px -40px auto;height:180px;background:radial-gradient(50% 60% at 50% 40%,var(--k),transparent 70%);opacity:.18}
.ed-top{position:relative;display:flex;justify-content:flex-end}
.saved{display:inline-flex;align-items:center;gap:5px;font-size:11px;font-weight:600;color:#0f7f72}.saved i{width:6px;height:6px;border-radius:50%;background:#21b8a6}
.ed-t{position:relative;font-size:24px;font-weight:800;letter-spacing:-.03em;margin-top:22px}
.ed-b{position:relative;font-size:13.5px;line-height:1.55;color:#3a3a3c;margin-top:10px;white-space:pre-line}
.ed-bar{margin-top:auto;margin-bottom:18px;display:flex;gap:6px;padding:6px;border-radius:14px;background:rgba(244,244,247,.85);box-shadow:0 0 0 1px #ececf0}
.ed-bar span{flex:1;display:flex;align-items:center;justify-content:center;gap:6px;font-size:12px;font-weight:600;color:var(--ink2);padding:7px 0;border-radius:10px}
.ed-bar svg{width:14px;height:14px}.ed-bar .dict{background:#fff;color:#ff4d8d;box-shadow:0 1px 3px rgba(0,0,0,.08)}

/* ---------- 3 \xB7 viagens ---------- */
.tp{display:grid;grid-template-columns:1.25fr 1fr;gap:16px;margin-top:14px;flex:1;min-height:0}
.tp-card{position:relative;overflow:hidden;border-radius:20px;padding:18px 20px;background:linear-gradient(165deg,#fff 30%,#f6f2ff);box-shadow:0 0 0 1px #ececf0,0 24px 40px -30px rgba(139,108,255,.6);opacity:0;transform:translateY(14px) scale(.97);transition:opacity .6s,transform .55s cubic-bezier(.2,.9,.3,1.15);align-self:start}
.tp-card.in{opacity:1;transform:none}
.tp-card::before{content:"";position:absolute;right:-60px;top:-80px;width:260px;height:220px;border-radius:50%;background:radial-gradient(circle,rgba(255,138,61,.22),transparent 70%)}
.city{position:relative;height:118px;margin:-4px -6px 4px}
.city svg{width:100%;height:100%}
.city .dr{stroke:url(#tg);stroke-width:2;fill:none;stroke-linecap:round;stroke-linejoin:round;stroke-dasharray:900;stroke-dashoffset:900}
.tp-card.in .city .dr{animation:draw 1.6s cubic-bezier(.4,0,.2,1) .15s forwards}
.city .dr.d2{animation-delay:.4s!important}.city .dr.d3{animation-delay:.7s!important}
@keyframes draw{to{stroke-dashoffset:0}}
.tp-name{position:relative;font-size:34px;font-weight:800;letter-spacing:-.04em;line-height:1}
.tp-sub{position:relative;display:flex;align-items:center;gap:8px;margin-top:6px;color:var(--grey);font-weight:600;font-size:12.5px}
.tp-sub .av{width:20px;height:20px;border-radius:50%;background:#8b6cff;color:#fff;font-size:10px;font-weight:700;display:grid;place-items:center}
.cd{margin-left:auto;font-size:11px;font-weight:800;color:#fff;background:var(--grad);padding:3px 9px;border-radius:99px}
.days{position:relative;display:grid;grid-template-columns:repeat(3,1fr);gap:8px;margin-top:16px}
.day{background:#fff;border-radius:14px;padding:10px 11px;box-shadow:0 0 0 1px #ececf0;opacity:0;transform:translateY(8px);transition:opacity .45s,transform .55s cubic-bezier(.2,.9,.3,1.3)}
.day.in{opacity:1;transform:none}
.day .dh{display:flex;align-items:center;justify-content:space-between;font-weight:700;font-size:12.5px}
.day .dh span{color:var(--grey);font-weight:600;font-size:11px}
.wx{display:flex;align-items:center;gap:7px;margin:8px 0 7px;font-size:20px;font-weight:800;letter-spacing:-.03em}
.wx svg{width:24px;height:24px}
.wx.sun svg{stroke:#ff8a3d}.wx.cl svg{stroke:#8b6cff}
.day .it{font-size:11px;color:#4a4a4f;display:flex;align-items:center;gap:5px;margin-top:3px;font-weight:500}
.day .it::before{content:"";width:5px;height:5px;border-radius:50%;background:var(--k);flex:0 0 auto}
.side-col{display:flex;flex-direction:column;gap:12px;min-height:0}
.panel{background:#fff;border-radius:18px;padding:14px;box-shadow:0 0 0 1px #ececf0}
.panel-h{display:flex;align-items:center;gap:8px;font-weight:800;font-size:14px;letter-spacing:-.02em;margin-bottom:10px}
.panel-h .sq{width:24px;height:24px;border-radius:8px;display:grid;place-items:center}
.panel-h .sq svg{width:13px;height:13px;stroke-width:2.2}
.panel-h em{margin-left:auto;font-style:normal;font-size:11.5px;font-weight:700;color:var(--grey)}
.row{display:flex;align-items:center;gap:9px;padding:8px 9px;border-radius:10px;font-size:12.5px;font-weight:600;margin-top:5px}
.row small{margin-left:auto;color:var(--grey);font-size:11px;font-weight:600}
.pack{display:grid;grid-template-columns:1fr 1fr;gap:6px}
.pk{display:flex;align-items:center;gap:8px;padding:7px 9px;border-radius:10px;background:#f7f7f9;font-size:12px;font-weight:600;transition:background .3s}
.pk.done{background:#e3f6f3}
.pk.done span{color:var(--grey);text-decoration:line-through}
.pbar{height:6px;border-radius:6px;background:#ececf1;margin-top:10px;overflow:hidden}
.pbar i{display:block;height:100%;width:0;background:linear-gradient(90deg,#21b8a6,#8b6cff);border-radius:6px;transition:width .5s cubic-bezier(.3,0,.2,1)}

/* ---------- 4 \xB7 dinheiro ---------- */
.mn{display:grid;grid-template-columns:1fr 1.05fr;gap:16px;margin-top:14px}
.big{position:relative;overflow:hidden;border-radius:20px;padding:18px 20px;background:linear-gradient(165deg,#fff 35%,#fff4ec);box-shadow:0 0 0 1px #ececf0,0 24px 40px -30px rgba(255,138,61,.6)}
.big::before{content:"";position:absolute;left:-60px;bottom:-90px;width:260px;height:220px;border-radius:50%;background:radial-gradient(circle,rgba(255,77,141,.16),transparent 70%)}
.amt{position:relative;display:flex;align-items:baseline;gap:8px;margin-top:6px}
.amt b{font-size:44px;font-weight:800;letter-spacing:-.05em;font-variant-numeric:tabular-nums}
.amt span{color:var(--grey);font-weight:600;font-size:13px}
.bud{position:relative;height:8px;border-radius:8px;background:#ececf1;margin-top:12px;overflow:hidden}
.bud i{display:block;height:100%;border-radius:8px;background:var(--grad);transition:width .9s cubic-bezier(.3,0,.2,1)}
.bud-l{position:relative;display:flex;justify-content:space-between;font-size:11px;font-weight:600;color:var(--grey);margin-top:6px}
.bars{position:relative;display:grid;grid-template-columns:repeat(7,1fr);gap:8px;align-items:end;height:118px;margin-top:20px}
.bars div{display:flex;flex-direction:column;align-items:center;gap:6px;height:100%;justify-content:flex-end}
.bars i{display:block;width:100%;border-radius:7px;background:#ececf3;transition:height .8s cubic-bezier(.3,0,.2,1)}
.bars .t i{background:var(--grad)}
.bars span{font-size:10.5px;font-weight:700;color:var(--grey)}.bars .t span{color:#ff4d8d}
.cats{position:relative;display:flex;flex-wrap:wrap;gap:6px;margin-top:16px}
.cat{display:flex;align-items:center;gap:6px;padding:6px 10px;border-radius:99px;background:#f7f7f9;font-size:11.5px;font-weight:600;transition:background .4s}
.cat i{width:7px;height:7px;border-radius:50%}
.cat em{font-style:normal;color:var(--grey)}
.cat.hl{background:#fff1e6}
.ex{display:flex;align-items:center;gap:11px;padding:9px 10px;border-radius:12px;margin-top:4px;transition:background .5s}
.ex .sq{width:32px;height:32px;border-radius:10px;display:grid;place-items:center;flex:0 0 auto}
.ex .sq svg{width:16px;height:16px;stroke-width:2}
.ex b{display:block;font-size:13px;font-weight:700}
.ex small{font-size:11px;color:var(--grey);font-weight:500}
.ex .v{margin-left:auto;text-align:right;font-weight:800;font-size:13.5px;font-variant-numeric:tabular-nums}
.ex .v small{display:block;font-weight:600}
.ex.hi{background:#faf8ff}
.split{display:inline-flex;align-items:center;gap:4px;margin-top:3px;font-size:10.5px;font-weight:700;color:#0f7f72;background:#e3f6f3;padding:2px 7px;border-radius:99px}
.mn .nw{max-height:0;margin-top:0;padding-top:0;padding-bottom:0;overflow:hidden}
.mn .nw.in{max-height:70px;margin-top:4px;padding-top:9px;padding-bottom:9px;transition:opacity .5s,transform .6s cubic-bezier(.2,.9,.3,1.3),max-height .5s,padding .5s,margin .5s}
.rcpt{position:absolute;right:40px;top:150px;width:150px;background:#fff;border-radius:6px;padding:14px 12px 16px;box-shadow:0 24px 50px -16px rgba(60,20,90,.45),0 0 0 1px #ececf0;z-index:30;opacity:0;transform:translateY(20px) rotate(4deg) scale(.9);transition:opacity .5s,transform .7s cubic-bezier(.2,.9,.3,1.2);overflow:hidden;font-size:10px;color:#4a4a4f}
.rcpt.on{opacity:1;transform:rotate(3deg)}
.rcpt.away{opacity:0;transform:translate(-120px,140px) scale(.3) rotate(0);transition:opacity .5s .15s,transform .6s cubic-bezier(.5,0,.3,1)}
.rcpt b{display:block;text-align:center;font-size:11px;letter-spacing:.08em;color:#1c1c1e;margin-bottom:8px}
.rcpt p{display:flex;justify-content:space-between;line-height:1.7;border-bottom:1px dashed #e5e5ea}
.rcpt p:last-of-type{border:0;font-weight:800;color:#1c1c1e;margin-top:3px}
.rcpt .scan{position:absolute;left:0;right:0;top:-10%;height:30px;background:linear-gradient(180deg,transparent,rgba(255,77,141,.25),transparent);border-bottom:2px solid #ff4d8d}
.rcpt.on .scan{animation:scan 1s ease-in-out .25s 1 both}
@keyframes scan{100%{top:105%}}

@media (max-width:700px){.outer{padding:0 12px;margin-top:28px}.tab{padding:9px 12px 11px;font-size:13px}.tab svg{display:none}.lead{font-size:16px}}
@media (prefers-reduced-motion:reduce){.dwin{animation:none}}
</style>
  <div class="wrap">
    <div class="kicker grad-text" id="kicker">Now on Windows and Mac</div>
    <h2>Say it.<br><span class="l2 grad-text" id="l2">It's planned.</span></h2>
    <p class="lead" id="lead"></p>
    <div class="tabs" id="tabs" role="tablist">
      <button class="tab" data-i="0" role="tab"><svg viewBox="0 0 24 24"><rect x="4" y="5" width="16" height="15" rx="3"/><path d="M4 10h16M9 3v4M15 3v4"/></svg>Tasks<span class="bar"><i></i></span></button>
      <button class="tab" data-i="1" role="tab"><svg viewBox="0 0 24 24"><path d="M7 3h7l5 5v11a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z"/><path d="M14 3v5h5M9 13h6M9 17h4"/></svg>Notes<span class="bar"><i></i></span></button>
      <button class="tab" data-i="2" role="tab"><svg viewBox="0 0 24 24"><path d="M21 3L3 10.5l7.5 3L14 21z"/><path d="M10.5 13.5L21 3"/></svg>Trips<span class="bar"><i></i></span></button>
      <button class="tab" data-i="3" role="tab"><svg viewBox="0 0 24 24"><rect x="3" y="6" width="18" height="14" rx="3"/><path d="M3 10h18M16 15h2"/><path d="M6 6l9-3 1 3"/></svg>Money<span class="bar"><i></i></span></button>
    </div>
  </div>

  <div class="outer">
    <div class="stage" id="stage">
      <div class="scale" id="scale">
        <div class="dwin" id="win" role="img" aria-label="Preview of Sayla on a computer: tasks, notes, trips and money, one after the other">
          <div class="dw-top">
            <span class="dw-dots"><i></i><i></i><i></i></span>
            <span class="dw-nav"><svg viewBox="0 0 24 24"><path d="M15 5l-7 7 7 7"/></svg><svg viewBox="0 0 24 24"><path d="M9 5l7 7-7 7"/></svg></span>
            <span class="dw-tab"><span class="ico"><svg viewBox="0 0 24 24"><path d="M5 12.5l4.5 4.5L19 7.5"/></svg></span><span id="wtitle">Sayla \xB7 Today</span></span>
            <span class="dw-top-r"><span class="dw-av" style="background:#ff8a3d">A</span><span class="dw-av" style="background:#8b6cff">M</span><span class="dw-share">Share</span></span>
          </div>
          <div class="dw-body">
            <aside class="dw-side">
              <div class="dw-ws"><span class="ico"><svg viewBox="0 0 24 24"><path d="M5 12.5l4.5 4.5L19 7.5"/></svg></span><b>My week</b><span class="dw-sync"><i></i>Synced</span></div>
              <div class="dw-menu" id="menu">
                <div data-m="0"><svg viewBox="0 0 24 24"><rect x="4" y="5" width="16" height="15" rx="3"/><path d="M4 10h16M9 3v4M15 3v4"/></svg>Today<em id="mToday">8</em></div>
                <div><svg viewBox="0 0 24 24"><path d="M6 20V10M12 20V4M18 20v-7"/></svg>Week</div>
                <div data-m="1"><svg viewBox="0 0 24 24"><path d="M7 3h7l5 5v11a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z"/><path d="M14 3v5h5M9 13h6M9 17h4"/></svg>Notes<em id="mNotes">5</em></div>
                <div data-m="2"><svg viewBox="0 0 24 24"><path d="M21 3L3 10.5l7.5 3L14 21z"/><path d="M10.5 13.5L21 3"/></svg>Trips<em id="mTrips">1</em></div>
                <div data-m="3"><svg viewBox="0 0 24 24"><rect x="3" y="6" width="18" height="14" rx="3"/><path d="M3 10h18M16 15h2"/></svg>Money</div>
                <div><svg viewBox="0 0 24 24"><circle cx="9" cy="8" r="3"/><circle cx="16" cy="9" r="2.5"/><path d="M3 19c.8-3 3.2-5 6-5s5.2 2 6 5M14.5 14.5c2.6-.4 5 1.2 6 4"/></svg>Pacts</div>
                <div><svg viewBox="0 0 24 24"><path d="M4 11l8-6 8 6v8a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1z"/><path d="M10 20v-5h4v5"/></svg>Shared house</div>
              </div>
              <div class="dw-lbl">Lists</div>
              <div class="dw-menu dw-lists">
                <div><i style="background:#8b6cff"></i>Work<em>12</em></div>
                <div><i style="background:#ff8a3d"></i>Errands<em>5</em></div>
                <div><i style="background:#21b8a6"></i>Health<em>3</em></div>
                <div><i style="background:#ff4d8d"></i>Personal<em>4</em></div>
              </div>
              <div class="dw-talk" id="talk"><span class="dw-orb"><svg viewBox="0 0 24 24"><rect x="9" y="3" width="6" height="11" rx="3"/><path d="M5 11a7 7 0 0 0 14 0M12 18v3"/></svg></span><div><b>Hold to talk</b><small>or press Space</small></div></div>
            </aside>
            <div class="book" id="book">
              <div class="page" id="p0"></div>
              <div class="page" id="p1"></div>
              <div class="page" id="p2"></div>
              <div class="page" id="p3"></div>
            </div>
          </div>
          <div class="cursor" id="cursor"><svg viewBox="0 0 24 24"><path d="M5 3l14 8-6 1.6L10 19z"/></svg></div>
        </div>
      </div>
      <button class="pause" id="pause" aria-label="Pause"><svg class="pa" viewBox="0 0 24 24"><rect x="6" y="5" width="4" height="14" rx="1"/><rect x="14" y="5" width="4" height="14" rx="1"/></svg><svg class="pl" viewBox="0 0 24 24"><path d="M7 4.5v15l13-7.5z"/></svg></button>
    </div>
  </div>
<svg width="0" height="0" style="position:absolute"><defs><linearGradient id="tg" x1="0" x2="1"><stop offset="0" stop-color="#ff8a3d"/><stop offset=".5" stop-color="#ff4d8d"/><stop offset="1" stop-color="#8b6cff"/></linearGradient></defs></svg>`;var V=document.createElement("style");V.textContent="#desktop>.wrap.center:not(.desk-cta),#desktop .desk-outer,#notes{display:none!important}#desktop .desk-cta{margin-top:56px}",document.head.appendChild(V);const r={mic:'<svg viewBox="0 0 24 24"><rect x="9" y="3" width="6" height="11" rx="3"/><path d="M5 11a7 7 0 0 0 14 0M12 18v3"/></svg>',list:'<svg viewBox="0 0 24 24"><path d="M10 6h10M10 12h10M10 18h10"/><circle cx="5" cy="6" r="1"/><circle cx="5" cy="12" r="1"/><circle cx="5" cy="18" r="1"/></svg>',doc:'<svg viewBox="0 0 24 24"><path d="M7 3h7l5 5v11a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z"/><path d="M9 13h6M9 17h4"/></svg>',search:'<svg viewBox="0 0 24 24"><circle cx="11" cy="11" r="6.5"/><path d="M16 16l4 4"/></svg>',plus:'<svg viewBox="0 0 24 24"><path d="M12 5v14M5 12h14"/></svg>',ok:'<svg viewBox="0 0 24 24"><path d="M5 12.5l4.5 4.5L19 7.5"/></svg>',sun:'<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></svg>',cloud:'<svg viewBox="0 0 24 24"><path d="M7 18h10a4 4 0 0 0 .5-8 6 6 0 0 0-11.4 1.5A3.3 3.3 0 0 0 7 18z"/></svg>',bag:'<svg viewBox="0 0 24 24"><rect x="4" y="7" width="16" height="13" rx="3"/><path d="M9 7V5a3 3 0 0 1 6 0v2"/></svg>',flag:'<svg viewBox="0 0 24 24"><path d="M5 21V4M5 4h11l-2 4 2 4H5"/></svg>',food:'<svg viewBox="0 0 24 24"><path d="M7 3v8a2 2 0 0 0 4 0V3M9 11v10M17 3c-2 2-2 6 0 8v10"/></svg>',cart:'<svg viewBox="0 0 24 24"><path d="M3 4h2l2.4 11h10.2L20 7H6.2"/><circle cx="9" cy="19.5" r="1.3"/><circle cx="17" cy="19.5" r="1.3"/></svg>',bus:'<svg viewBox="0 0 24 24"><rect x="5" y="3" width="14" height="15" rx="3"/><path d="M5 11h14M8 18v3M16 18v3"/></svg>',home:'<svg viewBox="0 0 24 24"><path d="M4 11l8-6 8 6v8a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1z"/></svg>',cam:'<svg viewBox="0 0 24 24"><path d="M4 8h3l2-3h6l2 3h3v11H4z"/><circle cx="12" cy="13" r="3.5"/></svg>'},$=a=>`<div class="say" data-say><span class="w"><i></i><i></i><i></i><i></i></span><span class="q">${a}</span><span class="st"><i></i><span>Sayla is listening</span></span></div>`,K=[()=>`<div class="main">
 <div class="head"><div><div class="dw-date">Tuesday, November 10</div><div class="dw-h">Your day</div></div>
  <span class="pill"><span class="mini-orb"></span><span id="tDone">3 of 6 done</span></span>
  <div class="seg"><span class="on">Day</span><span>Week</span><span>Month</span></div>
  <div class="search">${r.search}Ask Sayla anything</div></div>
 <div class="panes">
  <div><div class="ph">Today</div>
   <div class="tl">
    <div class="hr" style="top:0">9 AM</div><div class="hr" style="top:68px">11 AM</div><div class="hr" style="top:136px">1 PM</div><div class="hr" style="top:204px">3 PM</div><div class="hr" style="top:272px">5 PM</div><div class="hr" style="top:340px">7 PM</div>
    <div class="ev busy" style="top:0;height:117px"><b>Work</b><small>9:00 \u2013 12:30 \xB7 busy</small></div>
    <div class="ev k-p done" style="top:119px;height:32px"><i class="dck"></i><b>Lunch with Ana</b><small>1h</small></div>
    <div class="ev busy" style="top:153px;height:117px"><b>Work</b><small>1:30 \u2013 5:00 \xB7 busy</small></div>
    <div class="now" style="top:175px"><span>2:10</span></div>
    <div class="ev k-o nw" id="tDent" style="top:272px;height:26px"><i class="dck"></i><b>Call the dentist</b><span class="tag">NEW</span></div>
    <div class="ev k-o" style="top:300px;height:24px"><i class="dck"></i><b>Mail the package</b><small>30 min</small></div>
    <div class="ev k-t nw" id="tGym" style="top:326px;height:34px"><i class="dck"></i><b>Gym</b><small>1h</small><span class="tag">NEW</span></div>
    <div class="ev k-p" style="top:366px;height:26px"><i class="dck"></i><b>Reply to mum</b><small>it's been 3 days</small></div>
   </div></div>
  <div><div class="ph">This week <span>Nov 9 \u2013 13</span></div>
   <div class="cols">
    <div class="col"><div class="ch"><b>Mon</b><span>9</span></div><div class="load"><i style="width:57%"></i></div><div class="lt">4h / 7h</div>
     <div class="cards"><div class="card k-v done"><i class="dck"></i><span>Team sync<small>1h</small></span></div><div class="card k-t"><i class="dck"></i><span>Gym<small>1h</small></span></div><div class="card k-o"><i class="dck"></i><span>Groceries<small>45 min</small></span></div></div></div>
    <div class="col today over" id="cTue"><div class="ch"><b>Tue</b><span>10</span></div><div class="load"><i style="width:100%"></i></div><div class="lt">7.5h / 7h</div>
     <div class="cards"><div class="card k-v"><i class="dck"></i><span>Client call<small>1h</small></span></div><div class="card k-o done"><i class="dck"></i><span>Pay the rent<small>10 min</small></span></div><div class="card k-v" id="cPrep"><i class="dck"></i><span>Prep the slides<small>1h</small></span></div></div></div>
    <div class="col" id="cWed"><div class="ch"><b>Wed</b><span>11</span></div><div class="load"><i style="width:43%"></i></div><div class="lt">3h / 7h</div>
     <div class="cards"><div class="card k-p"><i class="dck"></i><span>Spanish class<small>1h</small></span></div><div class="card k-o"><i class="dck"></i><span>Laundry<small>30 min</small></span></div></div></div>
    <div class="col" id="cThu"><div class="ch"><b>Thu</b><span>12</span></div><div class="load"><i style="width:57%"></i></div><div class="lt">4h / 7h</div>
     <div class="cards"><div class="card k-v"><i class="dck"></i><span>Team lunch<small>1h</small></span></div><div class="card k-v nw" id="cPitch"><i class="dck"></i><span>Finish the pitch deck<small>2h \xB7 by Thursday</small></span></div></div></div>
    <div class="col"><div class="ch"><b>Fri</b><span>13</span></div><div class="load"><i style="width:29%"></i></div><div class="lt">2h / 7h</div>
     <div class="cards"><div class="card k-t"><i class="dck"></i><span>Call grandma<small>20 min</small></span></div><div class="card k-p"><i class="dck"></i><span>Movie night<small>2h</small></span></div></div></div>
   </div></div>
 </div>
 <div class="voice" id="tVoice"><span class="orb"></span><div class="vw"><i></i><i></i><i></i><i></i><i></i><i></i><i></i></div><p id="tVt"></p></div>
 <div class="toast" id="tToast"><span class="t-ic">${r.ok}</span><div><b>Tuesday fits again</b><small>Moved \u201CPrep the slides\u201D to Wednesday</small></div></div>
</div>`,()=>`<div class="main" style="padding-bottom:18px">
 <div class="head"><div><div class="dw-date">Notepad</div><div class="dw-h">Notes<span class="grad-text">.</span></div></div>
  <div class="search" style="margin-left:auto;background:#f4f4f7;border:0">${r.search}Search notes</div>
  <div class="btn-dark">${r.plus}New note</div></div>
 ${$("Tell Sayla a note\u2026")}
 <div class="lbl">Pinned</div>
 <div class="nd-grid">
  <div class="nd-c" style="--k:#21b8a6;--t:#dcf6ef"><div class="ic">${r.mic}</div><b>Gate code</b><p>The gate code is 4521.</p><small>9:12</small></div>
  <div class="nd-c" id="nShop" style="--k:#ff8a3d;--t:#ffeedd"><div class="ic">${r.list}</div><b>Shopping</b><ul id="nList"><li>Milk</li><li>Bread</li><li>Eggs</li></ul><small>Yesterday</small></div>
 </div>
 <div class="lbl">Recent</div>
 <div class="nd-grid">
  <div class="nd-c nd-new" id="nWork" style="--k:#8b6cff;--t:#ece7ff"><div class="ic">${r.mic}</div><b>Work</b><p>Hand in the file tomorrow at 5pm.</p><small>Now</small></div>
  <div class="nd-c" style="--k:#ff4d8d;--t:#ffe3ee"><div class="ic">${r.list}</div><b>Gift ideas</b><ul><li>Cookbook for Mum</li><li>Headphones</li></ul><small>Sun</small></div>
  <div class="nd-c" style="--k:#3b82f6;--t:#e2edff"><div class="ic">${r.doc}</div><b>Meeting with Ana</b><p>Proposal by Friday. Send the prices first.</p><small>Mon</small></div>
  <div class="nd-c" id="nBook" style="--k:#e3a008;--t:#fff4d6"><div class="ic">${r.doc}</div><b>Book ideas</b><p>Atomic Habits, Project Hail Mary.</p><small>Oct 28</small></div>
 </div>
</div>
<div class="ed" id="nEd" style="--k:#21b8a6">
 <div class="ed-glow"></div><div class="ed-top"><span class="saved"><i></i>Saved</span></div>
 <div class="ed-t" id="nEdT">Gate code</div><div class="ed-b" id="nEdB">The gate code is 4521.</div>
 <div class="ed-bar"><span>${r.list}List</span><span class="dict">${r.mic}Dictate</span><span>Done</span></div>
</div>`,()=>`<div class="main">
 <div class="head"><div><div class="dw-date">Trips</div><div class="dw-h">Where to next<span class="grad-text">?</span></div></div>
  <div class="seg"><span class="on">Upcoming</span><span>Past</span></div>
  <div class="btn-dark">${r.plus}New trip</div></div>
 ${$("Tell Sayla where you\u2019re going\u2026")}
 <div class="tp">
  <div class="tp-card" id="trCard">
   <div class="city"><svg viewBox="0 0 520 118" preserveAspectRatio="xMidYMax meet">
    <path class="dr" d="M0 92 L520 92"/>
    <path class="dr d2" d="M150 108V22M330 108V22M150 22h-6M330 22h6"/>
    <path class="dr d2" d="M0 66 Q75 22 150 22 Q240 96 330 22 Q445 22 520 66"/>
    <path class="dr d3" d="M180 37V92M210 54V92M240 61V92M270 54V92M300 37V92M60 42V92M100 28V92M370 26V92M410 32V92M460 45V92"/>
    <path class="dr d3" d="M470 92v-18h10v-8h12v26M440 92v-12h14v12M500 92v-24l8-6 8 6v24"/>
    <circle class="dr d3" cx="420" cy="-0" r="0"/>
    <circle class="dr" cx="455" cy="22" r="11"/>
   </svg></div>
   <div class="tp-name">Lisbon</div>
   <div class="tp-sub">Fri 20 \u2013 Sun 22 Nov \xB7 3 days <span class="av">M</span>with Marco<span class="cd">in 8 days</span></div>
   <div class="days">
    <div class="day"><div class="dh">Fri<span>Nov 20</span></div><div class="wx sun">${r.sun}22\xB0</div><div class="it k-v">Train 9:10</div><div class="it k-o">Time Out Market</div></div>
    <div class="day"><div class="dh">Sat<span>Nov 21</span></div><div class="wx cl">${r.cloud}19\xB0</div><div class="it k-p">Bel\xE9m</div><div class="it k-t">Dinner 8 PM</div></div>
    <div class="day"><div class="dh">Sun<span>Nov 22</span></div><div class="wx sun">${r.sun}21\xB0</div><div class="it k-o">Check out 11:00</div><div class="it k-v">Train home 6 PM</div></div>
   </div>
  </div>
  <div class="side-col">
   <div class="panel"><div class="panel-h"><span class="sq" style="background:#efebff;color:#8b6cff">${r.flag}</span>Before you go<em id="trBn">0</em></div>
    <div class="row k-v nw" id="b1"><i class="dck"></i>Book the train<small>Mon</small></div>
    <div class="row k-o nw" id="b2"><i class="dck"></i>Book a place to stay<small>Mon</small></div>
    <div class="row k-t nw" id="b3"><i class="dck"></i>Check in online<small>Thu</small></div>
   </div>
   <div class="panel"><div class="panel-h"><span class="sq" style="background:#e3f6f3;color:#21b8a6">${r.bag}</span>Packing<em id="trPk">0 of 8</em></div>
    <div class="pack" id="pack">${["ID card","Charger","Sunglasses","Rain jacket","Toothbrush","Headphones","Comfy shoes","Camera"].map(a=>`<div class="pk k-t"><i class="dck"></i><span>${a}</span></div>`).join("")}</div>
    <div class="pbar"><i id="pbar"></i></div>
   </div>
  </div>
 </div>
</div>`,()=>`<div class="main">
 <div class="head"><div><div class="dw-date">Money</div><div class="dw-h">This week<span class="grad-text">.</span></div></div>
  <div class="seg"><span class="on">Week</span><span>Month</span></div>
  <div class="btn-dark">${r.cam}Scan receipt</div></div>
 ${$("Tell Sayla what you spent\u2026")}
 <div class="mn">
  <div class="big">
   <div class="dw-date" style="position:relative">Spent this week</div>
   <div class="amt"><b id="mAmt">$162</b><span>of $300</span></div>
   <div class="bud"><i id="mBud" style="width:54%"></i></div>
   <div class="bud-l"><span id="mLeft">$138 left</span><span>4 days to go</span></div>
   <div class="bars">${[["M",52],["T",30],["W",72],["T",18],["F",0],["S",0],["S",0]].map((a,s)=>`<div class="${s==3?"t":""}"><i style="height:${a[1]}%" ${s==3?'id="mBar"':""}></i><span>${a[0]}</span></div>`).join("")}</div>
   <div class="cats"><span class="cat" id="cFood"><i style="background:#ff8a3d"></i>Food <em id="mFood">$58</em></span><span class="cat" id="cGro"><i style="background:#21b8a6"></i>Groceries <em id="mGro">$46</em></span><span class="cat"><i style="background:#8b6cff"></i>Transport <em>$34</em></span><span class="cat"><i style="background:#ff4d8d"></i>Fun <em>$24</em></span></div>
  </div>
  <div class="panel" style="padding:12px 10px">
   <div class="panel-h" style="padding:2px 4px">Latest<em>Today</em></div>
   <div class="ex nw" id="eRc"><span class="sq" style="background:#e3f6f3;color:#21b8a6">${r.cart}</span><div><b>Groceries</b><small>From your receipt \xB7 6 items</small></div><div class="v">$31.40<small style="color:#21b8a6">Scanned</small></div></div>
   <div class="ex nw" id="eDin"><span class="sq" style="background:#fff1e6;color:#ff8a3d">${r.food}</span><div><b>Dinner with Ana</b><br><span class="split">Split \xB7 Ana owes you $12</span></div><div class="v">$12<small>of $24</small></div></div>
   <div class="ex"><span class="sq" style="background:#efebff;color:#8b6cff">${r.bus}</span><div><b>Metro card</b><small>Transport \xB7 8:40</small></div><div class="v">$20</div></div>
   <div class="ex"><span class="sq" style="background:#ffe9f1;color:#ff4d8d">${r.food}</span><div><b>Coffee with Marco</b><small>Food \xB7 Yesterday</small></div><div class="v">$7.50</div></div>
   <div class="ex"><span class="sq" style="background:#e2edff;color:#3b82f6">${r.home}</span><div><b>Electricity bill</b><small>Home \xB7 paid Mon</small></div><div class="v">$46</div></div>
  </div>
 </div>
 <div class="rcpt" id="mRc"><div class="scan"></div><b>RECEIPT</b><p><span>Milk</span><span>1.89</span></p><p><span>Bread</span><span>2.40</span></p><p><span>Eggs x12</span><span>4.10</span></p><p><span>Chicken</span><span>9.80</span></p><p><span>Apples</span><span>3.21</span></p><p><span>Coffee</span><span>10.00</span></p><p><span>TOTAL</span><span>31.40</span></p></div>
 <div class="toast" id="mToast"><span class="t-ic">${r.ok}</span><div><b>Receipt read</b><small>Groceries \xB7 $31.40 added</small></div></div>
</div>`],C=[{k:"Now on Windows and Mac",l2:"It's planned.",lead:"Talk through everything on your mind. Sayla pulls out the tasks and fits them into your week. Drag them around, it rebalances.",t:"Sayla \xB7 Today",dur:9900},{k:"Notes you can talk to",l2:"It's noted.",lead:"A notepad right next to your day. Type it, or just tell Sayla from any screen. She knows a note from a to-do.",t:"Sayla \xB7 Notes",dur:8800},{k:"Trips",l2:"It's packed.",lead:"Say where you're going. Sayla plans what to do before you leave, each day of the trip, the packing list and the weather.",t:"Sayla \xB7 Trips",dur:9300},{k:"Money",l2:"It's tracked.",lead:"Say what you spent or snap the receipt. Split it with friends and keep an eye on your budget, without a spreadsheet.",t:"Sayla \xB7 Money",dur:8100}];let g=0,W=performance.now(),v=!1,L=0,m=[],y=-1,A=0,f=1;function F(a){const s=Math.min(a-W,100);if(W=a,!v){g+=s;for(const t of m.slice())g>=t.at&&(m.splice(m.indexOf(t),1),t.my===L?t.res():t.rej("x"));if(y>=0){const t=Math.min(1,(g-A)/C[y].dur);b.querySelectorAll(".tab .bar i")[y].style.width=t*100+"%"}}requestAnimationFrame(F)}requestAnimationFrame(F);const e=(a,s)=>new Promise((t,n)=>{if(s!==L)return n("x");m.push({at:g+a,res:t,rej:n,my:s})}),i=(a,s=b)=>s.querySelector(a);async function G(a,s,t,n=19){a.innerHTML="<b></b>";for(let d=1;d<=s.length;d++)await e(n,t),a.innerHTML=s.slice(0,d)+"<b></b>";await e(120,t),a.textContent=s}async function T(a,s,t,n){const d=i("[data-say]",a),l=i(".q",d),o=i(".st",d),c=i("#talk");c.classList.add("press","rec"),d.classList.add("rec"),o.classList.add("on"),o.classList.remove("ok"),i("span",o).textContent="Listening",await e(200,t),c.classList.remove("press"),await G(l,"\u201C"+s+"\u201D",t),d.classList.remove("rec"),d.classList.add("fin"),c.classList.remove("rec"),i("span",o).textContent="Thinking",await e(450,t),o.classList.add("ok"),i("i",o).innerHTML="",i("span",o).textContent=n}function u(a,s,t,n,d){const l=g,o=()=>{const c=Math.min(1,(g-l)/n),h=1-Math.pow(1-c,3);a.textContent=d(s+(t-s)*h),c<1&&requestAnimationFrame(o)};o()}const w=a=>"$"+(Math.round(a*100)/100).toFixed(a%1?2:0).replace(/\.00$/,""),D=i("#win"),x=i("#cursor");function P(a){const s=a.getBoundingClientRect(),t=D.getBoundingClientRect();return{x:(s.left-t.left)/f,y:(s.top-t.top)/f,w:s.width/f,h:s.height/f}}function k(a,s,t=!0){x.style.opacity=t?1:0,x.style.transform=`translate(${a}px,${s}px)`}const Z=[async(a,s)=>{const t=i("#tVoice",a),n=i("#tVt",a),d=i("#talk");await e(450,s),d.classList.add("press","rec"),t.classList.add("on"),await e(200,s),d.classList.remove("press"),await G(n,"\u201CCall the dentist, gym after work, and I need to finish the pitch deck by Thursday\u201D",s,17),d.classList.remove("rec"),t.classList.add("think"),n.textContent="Planning your week\u2026",await e(550,s),t.classList.remove("think"),t.classList.add("ok"),n.innerHTML="<b>Got 3 tasks.</b> Added to today and Thursday.";for(const aa of["#tDent","#tGym","#cPitch"])i(aa,a).classList.add("in"),await e(260,s);i("#mToday").textContent="10",i("#tDone",a).textContent="3 of 8 done";const l=i("#cThu",a);i(".load i",l).style.width="86%",i(".lt",l).textContent="6h / 7h",await e(450,s),t.classList.remove("on");const o=i("#cPrep",a),c=i("#cWed",a),h=i("#cTue",a);let p=P(o);k(p.x+p.w*.6,p.y+p.h+40),await e(80,s),k(p.x+p.w*.55,p.y+p.h*.5),await e(700,s),x.classList.add("click"),o.classList.add("lift"),o.style.transition="transform .25s",o.style.transform="scale(1.05) rotate(-3deg)",await e(300,s),x.classList.remove("click");const M=o.getBoundingClientRect();c.classList.add("drop");const Q=i(".cards",c),B=document.createElement("div");B.style.height=M.height/f+"px",Q.appendChild(B);const X=B.getBoundingClientRect(),U=(X.left-M.left)/f,J=(X.top-M.top)/f;o.style.transition="transform .65s cubic-bezier(.45,0,.2,1)",o.style.transform=`translate(${U}px,${J}px) scale(1.05) rotate(2deg)`,k(p.x+p.w*.55+U,p.y+p.h*.5+J),await e(680,s),B.remove(),o.style.transition="none",o.style.transform="",Q.appendChild(o),o.style.transform="scale(1.05) rotate(2deg)",o.offsetWidth,o.style.transition="transform .3s cubic-bezier(.2,.9,.3,1.4)",o.style.transform="",o.classList.remove("lift"),c.classList.remove("drop"),h.classList.remove("over"),i(".load i",h).style.width="93%",i(".lt",h).textContent="6.5h / 7h",i(".load i",c).style.width="57%",i(".lt",c).textContent="4h / 7h",i("#tToast",a).classList.add("on"),await e(500,s);const N=i("#tDent",a);p=P(i(".dck",N)),k(p.x+3,p.y+3),await e(700,s),x.classList.add("click"),N.classList.add("done"),i(".tag",N).style.opacity=0,i("#tDone",a).textContent="4 of 8 done",await e(250,s),x.classList.remove("click"),await e(500,s),x.style.opacity=0,i("#tToast",a).classList.remove("on")},async(a,s)=>{const t=i("#nEd",a),n=i("#nEdT",a),d=i("#nEdB",a),l=async(h,p,M)=>{t.classList.add("sw"),await e(300,s),t.style.setProperty("--k",h),n.textContent=p,d.textContent=M,t.classList.remove("sw")};await e(450,s),await T(a,"Make a note called Work: hand in the file tomorrow at 5",s,"New note"),i("#nWork",a).classList.add("in"),i("#nBook",a).style.display="none",i("#mNotes").textContent="6",await l("#8b6cff","Work","Hand in the file tomorrow at 5pm."),await e(1e3,s);const o=i("[data-say]",a);o.classList.remove("fin"),i(".st",o).classList.remove("on","ok"),i(".st i",o).innerHTML="",i(".q",o).textContent="",await T(a,"Add batteries to my shopping note",s,"Added to Shopping"),i("#nShop",a).classList.add("pulse","sel"),i("#nList",a).insertAdjacentHTML("beforeend",'<li class="add">Batteries</li>'),await l("#ff8a3d","Shopping",`\u2022 Milk
\u2022 Bread
\u2022 Eggs
\u2022 Batteries`),await e(1300,s)},async(a,s)=>{await e(450,s),await T(a,"Weekend in Lisbon with Marco, Friday to Sunday",s,"Trip planned"),i("#trCard",a).classList.add("in"),i("#mTrips").textContent="2",await e(450,s);for(const l of a.querySelectorAll(".day"))l.classList.add("in"),await e(150,s);await e(150,s);let t=0;for(const l of["#b1","#b2","#b3"])i(l,a).classList.add("in"),i("#trBn",a).textContent=++t,await e(200,s);await e(250,s);const n=[...a.querySelectorAll(".pk")];let d=0;for(const l of[0,1,2,4,5]){const o=P(i(".dck",n[l]));k(o.x+3,o.y+3),await e(l?380:650,s),x.classList.add("click"),n[l].classList.add("done"),d++,i("#trPk",a).textContent=d+" of 8",i("#pbar",a).style.width=d/8*100+"%",await e(120,s),x.classList.remove("click")}await e(400,s),x.style.opacity=0,await e(500,s)},async(a,s)=>{await e(450,s),await T(a,"Spent 24 on dinner with Ana, split it",s,"Split with Ana"),i("#eDin",a).classList.add("in","hi"),i("#cFood",a).classList.add("hl"),u(i("#mAmt",a),162,174,900,w),u(i("#mFood",a),58,70,900,w),u(i("#mLeft",a),138,126,900,n=>w(n)+" left"),i("#mBud",a).style.width="58%",i("#mBar",a).style.height="34%",await e(1300,s);const t=i("#mRc",a);t.classList.add("on"),await e(1500,s),t.classList.add("away"),await e(450,s),i("#eDin",a).classList.remove("hi"),i("#cFood",a).classList.remove("hl"),i("#eRc",a).classList.add("in","hi"),i("#cGro",a).classList.add("hl"),i("#mToast",a).classList.add("on"),u(i("#mAmt",a),174,205.4,900,w),u(i("#mGro",a),46,77.4,900,w),u(i("#mLeft",a),126,94.6,900,n=>w(n)+" left"),i("#mBud",a).style.width="68%",i("#mBar",a).style.height="58%",await e(1500,s),i("#mToast",a).classList.remove("on")}],q=[0,1,2,3].map(a=>i("#p"+a)),E=(a,s,t)=>{a.classList.add("swap"),setTimeout(()=>{t?a.innerHTML=s:a.textContent=s,a.classList.remove("swap")},220)};function j(a,s){const t=C[a];s?(i("#kicker").textContent=t.k,i("#l2").textContent=t.l2,i("#lead").textContent=t.lead):(E(i("#kicker"),t.k),E(i("#l2"),t.l2),E(i("#lead"),t.lead)),i("#wtitle").textContent=t.t,b.querySelectorAll(".tab").forEach((n,d)=>{n.classList.toggle("on",d===a),n.setAttribute("aria-selected",d===a),i(".bar i",n).style.width=d<a?"100%":"0%"}),b.querySelectorAll("#menu [data-m]").forEach(n=>n.classList.toggle("on",+n.dataset.m===a))}function _(){i("#mToday").textContent="8",i("#mNotes").textContent="5",i("#mTrips").textContent="1",i("#talk").classList.remove("rec","press"),x.style.opacity=0}async function H(a){const s=++L;m.forEach(d=>d.rej("x")),m=[];const t=y;y=a,A=g,_();const n=q[a];if(n.innerHTML=K[a](),q.forEach(d=>{d.className="page"}),t<0)n.classList.add("cur"),j(a,!0);else{const d=q[t];d!==n?(d.classList.add("turn"),n.classList.add("next")):n.classList.add("cur"),j(a,!1),setTimeout(()=>{L===s&&(d.classList.remove("turn"),n.classList.remove("next"),n.classList.add("cur"))},550)}try{await Z[a](n,s);const d=C[a].dur-(g-A);d>0&&await e(d,s),H((a+1)%4)}catch{}}b.querySelectorAll(".tab").forEach(a=>a.onclick=()=>{v&&I(),H(+a.dataset.i)});function I(){v=!v,i("#pause").classList.toggle("p",v),D.classList.toggle("paused",v),i("#pause").setAttribute("aria-label",v?"Play":"Pause")}i("#pause").onclick=I;function R(){const a=i("#stage").clientWidth;f=Math.min(1,a/1120),i("#scale").style.transform=`translateX(-50%) scale(${f})`,i("#stage").style.height=680*f+"px"}addEventListener("resize",R),R();let Y=!1;const O=new IntersectionObserver(a=>{a.some(s=>s.isIntersecting)&&!Y&&(Y=!0,O.disconnect(),(document.fonts?document.fonts.ready:Promise.resolve()).then(()=>H(0)))},{threshold:.25});O.observe(z)})();

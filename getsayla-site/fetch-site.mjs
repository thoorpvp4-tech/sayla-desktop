// Descarrega o site getsayla.com tal como está no ar para ./public, junta a secção nova (showcase.js)
// à página inicial e confirma que não falta nada. Depois: npx wrangler@4 deploy
import { mkdir, writeFile, copyFile } from "node:fs/promises";
import { dirname, join } from "node:path";

const ORIGIN = "https://getsayla.com";
// caminho no site -> ficheiro em ./public
const PAGES = ["about", "account", "changelog", "compare", "family", "login", "pricing", "privacy", "say", "students", "teams", "terms", "waitlist", "404"];
const FILES = [
  "/robots.txt", "/sitemap.xml", "/favicon.ico",
  "/site.css", "/site.js", "/demo.js", "/desk.js", "/auth.js", "/upsell.css", "/upsell.js",
  "/assets/apple-touch-icon.png", "/assets/favicon-32.png", "/assets/qr-app.svg",
  "/assets/sayla-icon-192.png", "/assets/sayla-icon-512.png",
  "/assets/og-family.png", "/assets/og-home.png", "/assets/og-pricing.png",
  "/assets/og-students.png", "/assets/og-teams.png", "/assets/og-waitlist.png",
];
const list = [["/", "index.html"], ...PAGES.map((p) => ["/" + p, p + ".html"]), ...FILES.map((f) => [f, f.slice(1)])];

let fails = 0;
for (const [path, file] of list) {
  const res = await fetch(ORIGIN + path + (path.includes("?") ? "&" : "?") + "fresh=" + Date.now(), { redirect: "manual" });
  if (res.status !== 200) { console.log("FALHOU", path, res.status); fails++; continue; }
  let buf = Buffer.from(await res.arrayBuffer());
  if (file === "index.html") {
    let html = buf.toString("utf8");
    if (!html.includes("/showcase.js")) html = html.replace(/<\/body>/i, '<script src="/showcase.js?v=1" defer></script>\n</body>');
    if (!html.includes("/showcase.js")) { console.log("FALHOU: não encontrei </body> no index.html"); fails++; }
    buf = Buffer.from(html, "utf8");
  }
  const out = join("public", file);
  await mkdir(dirname(out), { recursive: true });
  await writeFile(out, buf);
  console.log("ok", path, "->", out, buf.length, "bytes");
}
await copyFile("showcase.txt", "public/showcase.js");
console.log("ok showcase.js");
if (fails) { console.log(`\n${fails} ficheiro(s) falharam. NÃO publiques; manda isto ao Claude.`); process.exit(1); }
console.log(`\nTudo certo: ${list.length + 1} ficheiros em ./public. Agora: npx -y wrangler@4 deploy`);

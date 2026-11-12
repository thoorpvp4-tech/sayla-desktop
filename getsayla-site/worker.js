// getsayla.com: site estático (ficheiros já carregados no Cloudflare) + API da lista de espera, demo e Pro.
// Reconstruído a 12 nov 2026 a partir da versão 55 publicada (a pasta original não estava no GitHub).
// Novo: a secção do Mac com Tarefas, Notas, Viagens e Dinheiro (showcase.txt) é juntada à página inicial.
import SHOWCASE_JS from "./showcase.txt";

const json = (data, status = 200) =>
  new Response(JSON.stringify(data), {
    status,
    headers: { "content-type": "application/json; charset=utf-8", "cache-control": "no-store" },
  });

const EMAIL_RE = /^[^\s@]{1,64}@[^\s@]{1,190}\.[a-z]{2,24}$/i;

async function getCount(env) {
  return parseInt((await env.WAITLIST.get("meta:count")) || "0", 10);
}

async function joinWaitlist(request, env) {
  let body;
  try { body = await request.json(); } catch { return json({ ok: false, error: "bad_request" }, 400); }
  if (body.website) return json({ ok: true, position: await getCount(env) });
  const email = String(body.email || "").trim().toLowerCase();
  if (!EMAIL_RE.test(email) || email.length > 254) return json({ ok: false, error: "invalid_email" }, 400);
  const ip = request.headers.get("cf-connecting-ip") || "unknown";
  const rlKey = "rl:" + ip;
  const hits = parseInt((await env.WAITLIST.get(rlKey)) || "0", 10);
  if (hits >= 5) return json({ ok: false, error: "too_many" }, 429);
  await env.WAITLIST.put(rlKey, String(hits + 1), { expirationTtl: 600 });
  const key = "email:" + email;
  const existing = await env.WAITLIST.get(key, "json");
  if (existing) {
    if (!existing.code) {
      existing.code = await newCode(env);
      existing.refs = existing.refs || 0;
      await env.WAITLIST.put(key, JSON.stringify(existing));
      await env.WAITLIST.put("ref:" + existing.code, email);
    }
    return json({ ok: true, already: true, ...standing(existing) });
  }
  const position = (await getCount(env)) + 1;
  const code = await newCode(env);
  await env.WAITLIST.put("meta:count", String(position));
  let referredBy = null;
  const ref = String(body.ref || "").toLowerCase().replace(/[^a-z0-9]/g, "").slice(0, 8);
  if (ref) {
    const refEmail = await env.WAITLIST.get("ref:" + ref);
    if (refEmail && refEmail !== email) {
      const r = await env.WAITLIST.get("email:" + refEmail, "json");
      if (r) {
        r.refs = (r.refs || 0) + 1;
        await env.WAITLIST.put("email:" + refEmail, JSON.stringify(r));
        referredBy = ref;
      }
    }
  }
  const entry = {
    email,
    position,
    code,
    refs: 0,
    referredBy,
    source: String(body.source || "").slice(0, 40),
    student: !!body.student,
    lang: String(request.headers.get("accept-language") || "").slice(0, 20),
    country: (request.cf && request.cf.country) || "",
    at: new Date().toISOString(),
  };
  await env.WAITLIST.put(key, JSON.stringify(entry));
  await env.WAITLIST.put("ref:" + code, email);
  return json({ ok: true, ...standing(entry) });
}

const JUMP = 5;
function standing(e) {
  const refs = e.refs || 0;
  return { position: Math.max(1, e.position - refs * JUMP), joined: e.position, refs, code: e.code };
}

async function newCode(env) {
  const abc = "abcdefghjkmnpqrstuvwxyz23456789";
  for (let i = 0; i < 5; i++) {
    const bytes = crypto.getRandomValues(new Uint8Array(6));
    const c = [...bytes].map((b) => abc[b % abc.length]).join("");
    if (!(await env.WAITLIST.get("ref:" + c))) return c;
  }
  return Date.now().toString(36).slice(-6);
}

async function myStanding(url, env) {
  const code = (url.searchParams.get("code") || "").toLowerCase().replace(/[^a-z0-9]/g, "").slice(0, 8);
  if (!code) return null;
  const email = await env.WAITLIST.get("ref:" + code);
  if (!email) return null;
  const e = await env.WAITLIST.get("email:" + email, "json");
  return e ? standing(e) : null;
}

const DEMO_DAILY_CAP = 150;
const DEMO_PER_IP_HOUR = 8;
const DEMO_PROMPT = `You turn what a person says about their day into a to-do plan.
Return ONLY JSON: {"tasks":[{"title":string,"day":string|null,"time":string|null,"after":string|null,"minutes":number,"type":string}],"busy":[{"title":string,"day":string|null,"start":string,"end":string}]}
Rules:
- "tasks": things they need to do. Natural short title (2-6 words) in the same language as the input, starting with a verb and keeping names and articles, e.g. "Call the dentist", "Buy a gift for Ana", "Go to the gym". No trailing period.
- "busy": blocks when they are NOT free (work, classes, shifts), e.g. "I work 9 to 5" -> {"title":"Work","start":"09:00","end":"17:00"}.
- "day": "today", "tomorrow", a weekday in English lowercase ("friday"), or null if not said.
- "time": exact time "HH:MM" 24h only if they said one; else null. "after": "HH:MM" if they said after/when they get home.
- "minutes": realistic duration (calls 15, errands 30, gym 60, studying 90).
- "type": one of errand, work, health, personal, study, home.
- Ignore filler words, stories and things already done. Max 8 tasks.`;

async function demoPlan(request, env) {
  let body;
  try { body = await request.json(); } catch { return json({ ok: false, error: "bad_request" }, 400); }
  const text = String(body.text || "").trim().slice(0, 600);
  if (text.length < 4) return json({ ok: false, error: "too_short" }, 400);
  const ip = request.headers.get("cf-connecting-ip") || "unknown";
  const day = new Date().toISOString().slice(0, 10);
  const [ipHits, dayHits] = await Promise.all([
    env.WAITLIST.get("rl-demo:" + ip).then((v) => parseInt(v || "0", 10)),
    env.WAITLIST.get("demo:" + day).then((v) => parseInt(v || "0", 10)),
  ]);
  if (ipHits >= DEMO_PER_IP_HOUR || dayHits >= DEMO_DAILY_CAP) return json({ ok: false, error: "limit" }, 429);
  await Promise.all([
    env.WAITLIST.put("rl-demo:" + ip, String(ipHits + 1), { expirationTtl: 3600 }),
    env.WAITLIST.put("demo:" + day, String(dayHits + 1), { expirationTtl: 172800 }),
  ]);
  try {
    const out = await env.AI.run("@cf/meta/llama-3.3-70b-instruct-fp8-fast", {
      messages: [{ role: "system", content: DEMO_PROMPT }, { role: "user", content: text }],
      max_tokens: 700,
      temperature: 0.2,
    });
    let raw = out && (out.response ?? out.result ?? out);
    let data = typeof raw === "string" ? JSON.parse((raw.match(/\{[\s\S]*\}/) || ["{}"])[0]) : raw;
    const clean = (s) => String(s || "").slice(0, 60);
    const hhmm = (s) => (/^\d{1,2}:\d{2}$/.test(String(s || "")) ? String(s).padStart(5, "0") : null);
    const tasks = (Array.isArray(data.tasks) ? data.tasks : []).slice(0, 8).map((t) => ({
      title: clean(t.title),
      day: t.day ? clean(t.day).toLowerCase() : null,
      time: hhmm(t.time),
      after: hhmm(t.after),
      minutes: Math.min(Math.max(parseInt(t.minutes, 10) || 30, 5), 240),
      type: clean(t.type || "personal").toLowerCase(),
    })).filter((t) => t.title);
    const busy = (Array.isArray(data.busy) ? data.busy : []).slice(0, 4).map((b) => ({
      title: clean(b.title || "Busy"),
      day: b.day ? clean(b.day).toLowerCase() : null,
      start: hhmm(b.start),
      end: hhmm(b.end),
    })).filter((b) => b.start && b.end);
    return json({ ok: true, tasks, busy, ai: true });
  } catch (e) {
    return json({ ok: false, error: "ai_failed" }, 502);
  }
}

// Vídeos: o Safari do iPhone precisa de respostas por partes (206) para os tocar
async function serveVideo(request, env) {
  const res = await env.ASSETS.fetch(new Request(request.url, { method: "GET" }));
  if (!res.ok) return res;
  const buf = await res.arrayBuffer();
  const size = buf.byteLength;
  const base = { "content-type": "video/mp4", "accept-ranges": "bytes", "cache-control": "public, max-age=86400" };
  const range = request.headers.get("range");
  const m = range && /bytes=(\d*)-(\d*)/.exec(range);
  if (!m) {
    return new Response(request.method === "HEAD" ? null : buf, { status: 200, headers: { ...base, "content-length": String(size) } });
  }
  let start = m[1] === "" ? size - Number(m[2]) : Number(m[1]);
  let end = m[1] !== "" && m[2] !== "" ? Number(m[2]) : size - 1;
  if (isNaN(start) || start < 0) start = 0;
  if (end >= size) end = size - 1;
  if (start > end || start >= size) {
    return new Response(null, { status: 416, headers: { ...base, "content-range": `bytes */${size}` } });
  }
  return new Response(request.method === "HEAD" ? null : buf.slice(start, end + 1), {
    status: 206,
    headers: { ...base, "content-range": `bytes ${start}-${end}/${size}`, "content-length": String(end - start + 1) },
  });
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    // Secção do Mac (Tarefas, Notas, Viagens e Dinheiro): o script e a página inicial com ele
    if (url.pathname === "/showcase.js") {
      return new Response(SHOWCASE_JS, {
        headers: { "content-type": "application/javascript; charset=utf-8", "cache-control": "public, max-age=300" },
      });
    }
    if (url.pathname === "/" || url.pathname === "/index.html") {
      const res = await env.ASSETS.fetch(request);
      if (!(res.headers.get("content-type") || "").includes("text/html")) return res;
      return new HTMLRewriter()
        .on("body", { element(e) { e.append('<script src="/showcase.js?v=1" defer></script>', { html: true }); } })
        .transform(res);
    }

    if (url.pathname === "/api/waitlist") {
      if (request.method === "POST") return joinWaitlist(request, env);
      if (request.method === "GET") {
        if (url.searchParams.get("code")) {
          const s = await myStanding(url, env);
          return s ? json({ ok: true, ...s }) : json({ ok: false, error: "not_found" }, 404);
        }
        return json({ ok: true, count: await getCount(env) });
      }
      return json({ ok: false, error: "method_not_allowed" }, 405);
    }

    if (url.pathname === "/api/demo") {
      if (request.method === "POST") return demoPlan(request, env);
      return json({ ok: false, error: "method_not_allowed" }, 405);
    }

    // "Notify me when Pro launches": KV, chave pro:<email>
    if (url.pathname === "/api/pro-interest") {
      if (request.method !== "POST") return json({ ok: false, error: "method_not_allowed" }, 405);
      let body;
      try { body = await request.json(); } catch { return json({ ok: false, error: "bad_request" }, 400); }
      const email = String(body.email || "").trim().toLowerCase();
      if (!EMAIL_RE.test(email) || email.length > 254) return json({ ok: false, error: "invalid_email" }, 400);
      const ip = request.headers.get("cf-connecting-ip") || "unknown";
      const rl = "rlp:" + ip, hits = parseInt((await env.WAITLIST.get(rl)) || "0", 10);
      if (hits >= 10) return json({ ok: false, error: "too_many" }, 429);
      await env.WAITLIST.put(rl, String(hits + 1), { expirationTtl: 600 });
      const plan = body.plan === "monthly" ? "monthly" : "yearly";
      await env.WAITLIST.put("pro:" + email, JSON.stringify({ email, plan, at: new Date().toISOString() }));
      return json({ ok: true });
    }

    if (url.pathname.endsWith(".mp4")) return serveVideo(request, env);
    return env.ASSETS.fetch(request);
  },
};

// Bot detection + per-IP daily rate limiting for the paid search endpoints.
//
// If Upstash Redis is configured (UPSTASH_REDIS_REST_URL +
// UPSTASH_REDIS_REST_TOKEN) the daily counter is shared across every
// serverless instance, giving a hard limit. Otherwise it falls back to a
// best-effort in-memory counter (per-instance, resets on cold start) so the
// protection still works with zero setup.

const DAILY_LIMIT = parseInt(process.env.SEARCH_DAILY_LIMIT, 10) || 50;

// User-Agent substrings that indicate automated/scripted clients. Real
// browsers send a normal "Mozilla/5.0 ..." UA, so these only catch bots.
const BOT_UA =
  /bot|crawl|spider|slurp|curl|wget|python-requests|python-urllib|scrapy|httpclient|libwww|java\/|go-http|okhttp|axios\/|node-fetch|got\/|headless|phantomjs|puppeteer|playwright|selenium/i;

const UPSTASH_URL = process.env.UPSTASH_REDIS_REST_URL;
const UPSTASH_TOKEN = process.env.UPSTASH_REDIS_REST_TOKEN;

const memory = new Map(); // key -> { count, resetAt }

function getIp(req) {
  const fwd = req.headers['x-forwarded-for'];
  if (fwd) return fwd.split(',')[0].trim();
  return (
    req.headers['x-real-ip'] ||
    (req.socket && req.socket.remoteAddress) ||
    'unknown'
  );
}

function isBot(req) {
  const ua = (req.headers['user-agent'] || '').trim();
  if (!ua) return true; // missing UA is almost always a script
  return BOT_UA.test(ua);
}

async function upstash(command) {
  const path = command.map(encodeURIComponent).join('/');
  const res = await fetch(`${UPSTASH_URL}/${path}`, {
    headers: { Authorization: `Bearer ${UPSTASH_TOKEN}` },
  });
  if (!res.ok) throw new Error(`Upstash ${res.status}`);
  const json = await res.json();
  return json.result;
}

async function incrementDailyCount(ip) {
  const day = new Date().toISOString().slice(0, 10); // YYYY-MM-DD (UTC)
  const key = `rl:${ip}:${day}`;

  if (UPSTASH_URL && UPSTASH_TOKEN) {
    try {
      const count = await upstash(['INCR', key]);
      if (count === 1) await upstash(['EXPIRE', key, '86400']);
      return count;
    } catch (e) {
      // Upstash unavailable — fall through to the in-memory counter.
    }
  }

  const now = Date.now();
  const entry = memory.get(key);
  if (!entry || now > entry.resetAt) {
    const resetAt = new Date(`${day}T23:59:59Z`).getTime();
    memory.set(key, { count: 1, resetAt });
    return 1;
  }
  entry.count += 1;
  return entry.count;
}

// Returns { allowed: true } or { allowed: false, status, message }.
export default async function checkRateLimit(req) {
  if (isBot(req)) {
    return {
      allowed: false,
      status: 403,
      message: 'Automated access is not allowed.',
    };
  }

  const ip = getIp(req);
  const count = await incrementDailyCount(ip);
  if (count > DAILY_LIMIT) {
    return {
      allowed: false,
      status: 429,
      message: `Daily search limit reached (${DAILY_LIMIT} per day). Please try again tomorrow.`,
    };
  }

  return { allowed: true };
}

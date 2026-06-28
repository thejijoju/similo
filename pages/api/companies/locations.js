import Anthropic from '@anthropic-ai/sdk';
import { blockBots } from '@/helpers/rateLimit';

const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });
const cache = new Map();
const CACHE_TTL = 24 * 60 * 60 * 1000; // 1 day — locations don't change

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', ['GET']);
    return res
      .status(405)
      .json({ message: `Method ${req.method} not allowed` });
  }

  const bot = blockBots(req);
  if (!bot.allowed) {
    return res
      .status(bot.status)
      .json({ status: 'fail', message: bot.message });
  }

  const q = (req.query.suggestLocation || '').trim();
  if (!q) {
    return res.json({ status: 'success', data: { locations: [] } });
  }

  const cacheKey = q.toLowerCase();
  const cached = cache.get(cacheKey);
  if (cached && Date.now() - cached.timestamp < CACHE_TTL) {
    return res.json({ status: 'success', data: { locations: cached.data } });
  }

  try {
    const prompt = `A user is typing a location into a company-search filter. Their input so far is: "${q}".
Return up to 6 real, relevant location suggestions that match or complete this input. Include a mix of granularities where sensible: city/town, region or state, country, continent, and "Worldwide". Small towns and villages are valid (e.g. "Genthod, Geneva, Switzerland"). Order from most specific to broadest.

Return ONLY a JSON array. Each item: {"label": "Human readable, comma separated", "value": "same words but pipe-separated, no commas"}.
Example for "paris": [{"label":"Paris, France","value":"Paris|France"},{"label":"Île-de-France, France","value":"Île-de-France|France"},{"label":"France","value":"France"},{"label":"Europe","value":"Europe"}]
No markdown, no code fences, no extra text.`;

    const message = await client.messages.create({
      model: 'claude-haiku-4-5-20251001',
      max_tokens: 512,
      messages: [{ role: 'user', content: prompt }],
    });

    const raw = message.content[0].text
      .trim()
      .replace(/^```json?\n?/, '')
      .replace(/\n?```$/, '');
    const parsed = JSON.parse(raw);

    const locations = (Array.isArray(parsed) ? parsed : [])
      .filter((l) => l && l.label && l.value)
      .map((l) => ({
        label: l.label,
        value: String(l.value).replace(/,/g, '|'),
      }))
      .slice(0, 6);

    cache.set(cacheKey, { data: locations, timestamp: Date.now() });
    return res.json({ status: 'success', data: { locations } });
  } catch (error) {
    console.error('Location suggestion error:', error);
    return res.json({ status: 'success', data: { locations: [] } });
  }
}

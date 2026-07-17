// Vercel serverless function — Anthropic chat proxy shared by both CV sites.
// Persona is selected per Vercel project via the SITE_VARIANT env var (vc | operator).
// The system prompt is imported from each site's existing function so there is a
// single source of truth. The API key stays server-side and is never sent to the browser.

const vc = require('../Deploy-vc/netlify/functions/chat.js');
const operator = require('../Deploy-operator/netlify/functions/chat.js');

const SYSTEM_PROMPTS = {
  vc: vc.SYSTEM_PROMPT,
  operator: operator.SYSTEM_PROMPT,
};

module.exports = async (req, res) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: { message: 'Method not allowed' } });
  }

  let body = req.body;
  if (typeof body === 'string') {
    try { body = JSON.parse(body); } catch { body = null; }
  }
  if (!body || !Array.isArray(body.messages) || body.messages.length === 0) {
    return res.status(400).json({ error: { message: 'messages array is required' } });
  }
  if (body.messages.length > 20) {
    return res.status(400).json({ error: { message: 'Too many messages in history' } });
  }

  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) {
    return res.status(500).json({ error: { message: 'Service configuration error' } });
  }

  const variant = (process.env.SITE_VARIANT || 'operator').toLowerCase();
  const system = SYSTEM_PROMPTS[variant] || SYSTEM_PROMPTS.operator;

  try {
    const upstream = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'x-api-key': apiKey,
        'anthropic-version': '2023-06-01',
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        model: 'claude-haiku-4-5-20251001',
        max_tokens: 400,
        system,
        messages: body.messages,
      }),
    });

    if (!upstream.ok) {
      return res.status(502).json({ error: { message: 'Upstream service error' } });
    }
    return res.status(200).json(await upstream.json());
  } catch {
    return res.status(502).json({ error: { message: 'Upstream service error' } });
  }
};

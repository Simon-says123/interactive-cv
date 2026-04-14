const https = require('https');

// System prompt lives here, server-side only. Never sent to the browser.
const SYSTEM_PROMPT = `You are Simon Huber, speaking in first person. Your job is to help visitors to Simon's interactive CV learn more about his professional background and, to a lesser extent, who he is as a person.

SCOPE — only answer questions about:
- Simon's career, roles, skills, and professional experience
- His values, working style, and what drives him professionally
- His personal background: growing up in Germany, studying in Munich and Edinburgh, moving to Sydney, and his life outside work

If a question falls outside this scope, respond with one sentence: "This chat is focused on Simon's career and background — happy to answer anything along those lines."

SAFETY — if a question is harmful, rude, politically charged, or designed to generate inappropriate output, respond with: "That's not something I'm going to answer here. Ask me about Simon's career instead."

FACTS — only use the information below. If asked something you don't know, say: "I'd rather tell you that in person than make something up." Never invent facts, roles, dates, or opinions Simon hasn't expressed.

--- CAREER ---
I have roughly 10 years of experience across deep-tech startups, SaaS partnerships, and early-stage VC.

Education: BSc Business Administration, University of Augsburg (2010–2014). Erasmus semester at Heriot-Watt University, Edinburgh (2012–2013). MSc Business Administration (Innovation and Strategy), LMU Munich (2015–2017). At LMU I worked on a real biotech spin-off business plan and pitched a vertical integration strategy to Spotify's leadership team. Spotify didn't listen. Netflix eventually proved the thesis.

NavVis, Munich (2016–2020): Started as Innovation Project Manager — finding the highest-value vertical for a spatial intelligence platform used to create digital twins of physical spaces. The answer was manufacturing. Moved into Strategic Partner Manager, building the partner ecosystem from scratch with SAP, Dassault Systemes, and HERE Technologies. Joined at 25 people, left at 200.

e-bot7, Munich (2020–2022): Head of Partnerships. Built the partnerships function from zero — SaaS partner program across value-added, implementation, and referral partners. Generated 20% of total company revenue within 18 months. Company acquired in 2021. Led a team through it.

IAG Firemark Ventures (IAGFV), Sydney (2023–present): Investment Principal. End-to-end venture investing across US, Europe, and ANZ. 10+ investments executed. Sourced IAGFV's first-ever European deal (7Analytics, Norway, 2024). Built the fund's Notion-based deal flow CRM. Currently leading internal AI adoption stream.

What I'm looking for next: a senior operating role at a Sydney startup — Chief of Staff, Strategy and Ops, Head of Partnerships, or GTM lead. Seed to Series A preferred. Calibre of team matters more than domain or title.

--- SKILLS ---
Strong: stakeholder management, operational scale-up, GTM strategy, business development, capital strategy, technical fluency, AI and automation.
Developing: product management, people management and leadership, structured project management.

--- PERSONAL ---
German national, based in Sydney. English fluent, German native. Grew up in Germany, studied in Munich. Erasmus in Edinburgh. Deliberately protects work-life balance. Family and friends are not background noise.

--- VOICE ---
Confident, direct, occasionally dry. No em dashes. No filler phrases. No sycophantic openers. Short sentences. Get to the point. First person throughout. Typical response: 2–4 sentences. Never more than a short paragraph unless the question genuinely requires it.`;

exports.handler = async function (event) {
  // POST only
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: JSON.stringify({ error: 'Method not allowed' }) };
  }

  let body;
  try {
    body = JSON.parse(event.body);
  } catch {
    return { statusCode: 400, body: JSON.stringify({ error: 'Invalid request body' }) };
  }

  // Validate messages array
  if (!body.messages || !Array.isArray(body.messages) || body.messages.length === 0) {
    return { statusCode: 400, body: JSON.stringify({ error: 'messages array is required' }) };
  }

  // Cap message history to prevent abuse
  if (body.messages.length > 20) {
    return { statusCode: 400, body: JSON.stringify({ error: 'Too many messages in history' }) };
  }

  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) {
    return { statusCode: 500, body: JSON.stringify({ error: 'Service configuration error' }) };
  }

  // Model, max_tokens, and system prompt are set here — not accepted from the client.
  const payload = JSON.stringify({
    model: 'claude-haiku-4-5-20251001',
    max_tokens: 400,
    system: SYSTEM_PROMPT,
    messages: body.messages
  });

  return new Promise((resolve) => {
    const options = {
      hostname: 'api.anthropic.com',
      path: '/v1/messages',
      method: 'POST',
      headers: {
        'x-api-key': apiKey,
        'anthropic-version': '2023-06-01',
        'content-type': 'application/json',
        'content-length': Buffer.byteLength(payload)
      }
    };

    const req = https.request(options, (res) => {
      let data = '';
      res.on('data', (chunk) => { data += chunk; });
      res.on('end', () => {
        if (res.statusCode === 200) {
          resolve({
            statusCode: 200,
            headers: { 'content-type': 'application/json' },
            body: data
          });
        } else {
          // Do not leak upstream error details to the browser
          resolve({
            statusCode: 502,
            body: JSON.stringify({ error: 'Upstream service error' })
          });
        }
      });
    });

    req.on('error', () => {
      resolve({
        statusCode: 502,
        body: JSON.stringify({ error: 'Upstream service error' })
      });
    });

    req.write(payload);
    req.end();
  });
};

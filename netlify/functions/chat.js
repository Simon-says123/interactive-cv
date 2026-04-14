const https = require('https');

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

  const payload = JSON.stringify({
    model: body.model || 'claude-opus-4-6',
    max_tokens: Math.min(body.max_tokens || 512, 1024), // hard cap at 1024
    system: body.system || '',
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

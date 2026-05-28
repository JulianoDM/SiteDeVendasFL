// ═══════ META CAPI PROXY — flstudiointeligente.online ═══════
// Recebe ViewContent e InitiateCheckout do browser e repassa ao Meta CAPI.
// Capture de IP e User-Agent é feito server-side (mais confiável que browser).
// O event_id deve ser o mesmo que o browser pixel usa (deduplicação).

const API_VERSION  = 'v21.0';
const PIXEL_ID     = process.env.META_PIXEL_ID;
const ACCESS_TOKEN = process.env.META_CAPI_TOKEN;

const VALID_EVENTS = new Set(['ViewContent', 'InitiateCheckout']);

module.exports = async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin',  'https://flstudiointeligente.online');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST')   return res.status(405).end();

  if (!ACCESS_TOKEN || !PIXEL_ID) {
    return res.status(200).json({ ok: false, reason: 'not_configured' });
  }

  const { event_name, event_id, event_source_url, fbc, fbp } = req.body || {};

  if (!VALID_EVENTS.has(event_name)) {
    return res.status(400).json({ error: 'invalid_event' });
  }

  // IP: pegar primeiro IP real da cadeia de proxies (Vercel Edge)
  const ip = ((req.headers['x-forwarded-for'] || '') + '').split(',')[0].trim()
    || req.socket?.remoteAddress
    || '';
  const ua = req.headers['user-agent'] || '';

  const userData = { client_ip_address: ip, client_user_agent: ua };
  if (fbc) userData.fbc = fbc;
  if (fbp) userData.fbp = fbp;

  const payload = {
    data: [{
      event_name,
      event_time      : Math.floor(Date.now() / 1000),
      event_id        : event_id || `${event_name}_${Date.now()}`,
      action_source   : 'website',
      event_source_url: event_source_url || 'https://flstudiointeligente.online/',
      user_data       : userData,
    }],
  };

  try {
    const apiRes = await fetch(
      `https://graph.facebook.com/${API_VERSION}/${PIXEL_ID}/events?access_token=${ACCESS_TOKEN}`,
      { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) }
    );
    if (!apiRes.ok) {
      const err = await apiRes.json().catch(() => ({}));
      console.error(JSON.stringify({ level: 'error', endpoint: 'capi', err }));
    }
  } catch (err) {
    console.error(JSON.stringify({ level: 'error', endpoint: 'capi', message: String(err) }));
  }

  // Sempre 200 pro browser — não expor erros internos
  return res.status(200).json({ ok: true });
};

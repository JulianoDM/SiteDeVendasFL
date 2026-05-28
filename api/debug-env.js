// TEMPORÁRIO — debug env vars. REMOVER APÓS DIAGNÓSTICO.
module.exports = (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  return res.status(200).json({
    has_pixel  : !!process.env.META_PIXEL_ID,
    has_token  : !!process.env.META_CAPI_TOKEN,
    pixel_len  : (process.env.META_PIXEL_ID || '').length,
    token_len  : (process.env.META_CAPI_TOKEN || '').length,
    node_env   : process.env.NODE_ENV,
    vercel_env : process.env.VERCEL_ENV,
    all_keys   : Object.keys(process.env).filter(k => k.startsWith('META')),
  });
};

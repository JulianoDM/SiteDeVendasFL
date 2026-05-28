// TEMPORÁRIO — debug env vars. REMOVER APÓS DIAGNÓSTICO.
module.exports = (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  const allKeys = Object.keys(process.env).sort();
  return res.status(200).json({
    has_pixel      : !!process.env.META_PIXEL_ID,
    has_token      : !!process.env.META_CAPI_TOKEN,
    pixel_len      : (process.env.META_PIXEL_ID || '').length,
    token_len      : (process.env.META_CAPI_TOKEN || '').length,
    node_env       : process.env.NODE_ENV,
    vercel_env     : process.env.VERCEL_ENV,
    vercel_dep_id  : process.env.VERCEL_DEPLOYMENT_ID,
    vercel_proj_id : process.env.VERCEL_PROJECT_ID,
    vercel_proj    : process.env.VERCEL_PROJECT_NAME,
    vercel_url     : process.env.VERCEL_URL,
    all_keys       : allKeys,
  });
};

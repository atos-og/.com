const deploymentHost = process.env.VERCEL_PROJECT_PRODUCTION_URL || process.env.VERCEL_URL;
export const SITE_ORIGIN = (process.env.NEXT_PUBLIC_SITE_ORIGIN || (deploymentHost ? 'https://' + deploymentHost : 'http://localhost:3000')).replace(/\/$/, '');

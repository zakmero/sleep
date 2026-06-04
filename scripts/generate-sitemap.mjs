import fs from 'node:fs';
import path from 'node:path';

const siteUrl = 'https://smartadulting.com';
const rootDir = process.cwd();
const publicDir = path.join(rootDir, 'public');
const postsPath = path.join(publicDir, 'posts.json');
const sitemapPath = path.join(publicDir, 'sitemap.xml');

const staticRoutes = [
  '/',
  '/blog',
  '/start',
  '/quiz',
  '/audit',
  '/offer',
  '/landing',
  '/thank-you',
];

const today = new Date().toISOString().slice(0, 10);

const toAbsoluteUrl = (route) => `${siteUrl}${route}`;

const createUrlEntry = (loc, lastmod, changefreq = 'weekly', priority = '0.7') => `  <url>
    <loc>${loc}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;

const readPosts = () => {
  try {
    const raw = fs.readFileSync(postsPath, 'utf8');
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
};

const staticEntries = staticRoutes.map((route) => createUrlEntry(
  toAbsoluteUrl(route),
  today,
  route === '/' ? 'daily' : 'weekly',
  route === '/' ? '1.0' : '0.8'
));

const postEntries = readPosts()
  .filter((post) => post && typeof post.slug === 'string' && post.slug.trim())
  .map((post) => {
    const safeSlug = post.slug.trim();
    const publishedAt = typeof post.publishedAt === 'string' && post.publishedAt
      ? post.publishedAt
      : today;
    return createUrlEntry(
      toAbsoluteUrl(`/blog/${safeSlug}`),
      publishedAt,
      'monthly',
      '0.9'
    );
  });

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${[...staticEntries, ...postEntries].join('\n')}
</urlset>
`;

fs.writeFileSync(sitemapPath, xml, 'utf8');
console.log(`Generated sitemap: ${path.relative(rootDir, sitemapPath)}`);

import fs from 'node:fs';
import path from 'node:path';

const rootDir = process.cwd();
const distDir = path.join(rootDir, 'dist');
const indexPath = path.join(distDir, 'index.html');
const postsPath = path.join(rootDir, 'public', 'posts.json');

const staticRoutes = [
  '/blog',
  '/start',
  '/quiz',
  '/audit',
  '/offer',
  '/landing',
  '/thank-you',
];

const normalizeRoute = (route) => route.replace(/^\/+|\/+$/g, '');

const readPosts = () => {
  try {
    const raw = fs.readFileSync(postsPath, 'utf8');
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
};

if (!fs.existsSync(indexPath)) {
  throw new Error('dist/index.html was not found. Run vite build first.');
}

const indexHtml = fs.readFileSync(indexPath, 'utf8');
const blogPostRoutes = readPosts()
  .filter((post) => post && typeof post.slug === 'string' && post.slug.trim())
  .map((post) => `/blog/${post.slug.trim()}`);

const routesToGenerate = [...new Set([...staticRoutes, ...blogPostRoutes])];

routesToGenerate.forEach((route) => {
  const safeRoute = normalizeRoute(route);
  if (!safeRoute) {
    return;
  }

  const targetDir = path.join(distDir, safeRoute);
  fs.mkdirSync(targetDir, { recursive: true });
  fs.writeFileSync(path.join(targetDir, 'index.html'), indexHtml, 'utf8');
});

console.log(`Generated static route shells for ${routesToGenerate.length} routes.`);

import { execFileSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';

const rootDir = process.cwd();
const postsPath = path.join(rootDir, 'public', 'posts.json');

const parsePosts = (raw, source) => {
  const parsed = JSON.parse(raw.replace(/^\uFEFF/, ''));
  if (!Array.isArray(parsed)) {
    throw new Error(`${source} posts.json is not an array.`);
  }
  return parsed.filter((post) => post && typeof post.slug === 'string' && post.slug.trim());
};

const readLocalPosts = () => {
  if (!fs.existsSync(postsPath)) {
    return { posts: [], raw: '' };
  }
  const raw = fs.readFileSync(postsPath, 'utf8');
  return { posts: parsePosts(raw, 'Local'), raw };
};

const readLivePosts = () => {
  try {
    execFileSync('git', ['fetch', 'origin', 'gh-pages', '--quiet'], { stdio: 'ignore' });
    const raw = execFileSync('git', ['show', 'origin/gh-pages:posts.json'], { encoding: 'utf8' });
    return parsePosts(raw, 'Live');
  } catch (error) {
    console.warn(`Could not sync live posts before deploy: ${error.message}`);
    return [];
  }
};

const sortByDateDesc = (posts) => posts.sort(
  (first, second) => new Date(second.publishedAt || 0) - new Date(first.publishedAt || 0)
);

const { posts: localPosts, raw: localRaw } = readLocalPosts();
const livePosts = readLivePosts();
const mergedBySlug = new Map();

localPosts.forEach((post) => {
  mergedBySlug.set(post.slug.trim(), post);
});

let restoredCount = 0;
livePosts.forEach((post) => {
  const slug = post.slug.trim();
  if (!mergedBySlug.has(slug)) {
    restoredCount += 1;
    mergedBySlug.set(slug, post);
  }
});

const mergedPosts = sortByDateDesc([...mergedBySlug.values()]);
const normalizedRaw = `${JSON.stringify(mergedPosts, null, 2)}\n`;

if (restoredCount > 0 || localRaw !== normalizedRaw) {
  fs.writeFileSync(postsPath, normalizedRaw, 'utf8');
}

console.log(`Synced live posts: restored ${restoredCount} missing post${restoredCount === 1 ? '' : 's'}.`);

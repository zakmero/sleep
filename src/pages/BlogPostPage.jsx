import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import SeoMeta from '../components/SeoMeta';
import { fetchBlogPosts } from '../data/blogApi';

const SITE_URL = 'https://smartadulting.com';

const normalizeText = (value) => value.replace(/\s+/g, ' ').trim().toLowerCase();

const stripDuplicateLeadingHeading = (htmlContent, title) => {
  if (!htmlContent || !title) {
    return htmlContent;
  }

  try {
    const container = document.createElement('div');
    container.innerHTML = htmlContent.trim();
    const firstElement = container.firstElementChild;
    const headingTags = ['H1', 'H2', 'H3'];

    if (
      firstElement
      && headingTags.includes(firstElement.tagName)
      && normalizeText(firstElement.textContent || '') === normalizeText(title)
    ) {
      firstElement.remove();
    }

    const lists = [...container.querySelectorAll('ul, ol')];
    lists.forEach((listElement) => {
      const listItems = [...listElement.querySelectorAll('li')]
        .map((item) => item.textContent?.trim())
        .filter(Boolean);

      if (!listItems.length) {
        listElement.remove();
        return;
      }

      const paragraph = document.createElement('p');
      paragraph.textContent = listItems.join(', ');
      listElement.replaceWith(paragraph);
    });

    return container.innerHTML;
  } catch {
    return htmlContent;
  }
};

const BlogPostPage = () => {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const controller = new AbortController();

    const loadPost = async () => {
      try {
        const posts = await fetchBlogPosts(controller.signal);
        const foundPost = posts.find((candidate) => candidate.slug === slug);
        setPost(foundPost || null);
      } finally {
        setIsLoading(false);
      }
    };

    loadPost();

    return () => controller.abort();
  }, [slug]);

  if (isLoading) {
    return (
      <div className="blog-post-page">
        <div className="blog-inner glass-card">
          <h1 className="hero-title">Loading...</h1>
          <p className="hero-subtitle">Fetching article content.</p>
        </div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="blog-post-page">
        <div className="blog-inner glass-card">
          <SeoMeta
            title="Post Not Found | Smart Adulting Blog"
            description="The blog post you requested could not be found."
            keywords="smart adulting blog"
            canonicalPath="/blog"
          />
          <h1 className="hero-title">Post Not Found</h1>
          <p className="hero-subtitle">The article may have been moved or the link may be incorrect.</p>
          <Link to="/blog" className="cta-button primary-btn">Back to Blog</Link>
        </div>
      </div>
    );
  }

  const contentToRender = stripDuplicateLeadingHeading(post.content, post.title);
  const canonicalPath = `/blog/${post.slug}`;
  const canonicalUrl = `${SITE_URL}${canonicalPath}`;
  const articleDescription = post.metaDescription || post.excerpt || 'Read this article on Smart Adulting.';
  const articleImage = post.featuredImage || '/site-logo-nav.png';
  const imageUrl = articleImage.startsWith('http') ? articleImage : `${SITE_URL}${articleImage}`;
  const articlePublishedAt = post.publishedAt ? `${post.publishedAt}T00:00:00Z` : '';
  const articleStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: articleDescription,
    datePublished: articlePublishedAt || undefined,
    dateModified: articlePublishedAt || undefined,
    mainEntityOfPage: canonicalUrl,
    url: canonicalUrl,
    image: [imageUrl],
    publisher: {
      '@type': 'Organization',
      name: 'Smart Adulting',
      logo: {
        '@type': 'ImageObject',
        url: `${SITE_URL}/site-logo.png`,
      },
    },
  };

  return (
    <div className="blog-post-page">
      <SeoMeta
        title={post.metaTitle || `${post.title} | Smart Adulting Blog`}
        description={articleDescription}
        keywords={post.keyword || 'smart adulting blog'}
        canonicalPath={canonicalPath}
        imagePath={articleImage}
        type="article"
        articlePublishedTime={articlePublishedAt}
        articleModifiedTime={articlePublishedAt}
        structuredData={articleStructuredData}
      />

      <article className="blog-inner">
        <Link to="/blog" className="back-link">{'<-'} Back to Blog</Link>

        {post.featuredImage && (
          <img src={post.featuredImage} alt={post.title} className="blog-featured-image" />
        )}

        <div className="post-meta">
          <span className="post-category">{post.category || 'Blog'}</span>
          <time className="post-date" dateTime={post.publishedAt || ''}>
            {new Date(post.publishedAt || Date.now()).toLocaleDateString('en-US', {
              month: 'long',
              day: 'numeric',
              year: 'numeric',
            })}
          </time>
        </div>

        <h1 className="hero-title blog-post-title">{post.title}</h1>
        <div className="post-content" dangerouslySetInnerHTML={{ __html: contentToRender }} />

        <div className="blog-cta glass-card">
          <h3>Need a Complete Sleep System?</h3>
          <p>Explore the full system here</p>
          <a
            href="https://smartadulting.gumroad.com/l/Coresleeparchitecture"
            className="cta-button primary-btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            Core Sleep Architecture
          </a>
        </div>
      </article>
    </div>
  );
};

export default BlogPostPage;

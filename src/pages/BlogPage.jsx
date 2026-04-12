
import React from 'react';
import { Link } from 'react-router-dom';

const BlogPage = () => {
    const posts = [
        {
            id: 1,
            title: "The Dopamine Reset: Escaping the Digital Loop",
            excerpt: "How social media is rewiring your brain and the exact 30-day protocol to reclaim your focus.",
            date: "Feb 16, 2026",
            category: "Mindset"
        },
        {
            id: 2,
            title: "The Comfort Trap: Why You're Stagnating",
            excerpt: "Why modern comfort is killing your drive and how to introduce 'productive friction' back into your life.",
            date: "Feb 15, 2026",
            category: "Addiction"
        },
        {
            id: 3,
            title: "Biological Optimization: Sleep & Diet",
            excerpt: "Advanced tactics to ensure your body isn't the bottleneck for your mental performance.",
            date: "Feb 10, 2026",
            category: "Health"
        },
        {
            id: 4,
            title: "The 90-Minute Focus Rule",
            excerpt: "Understanding ultradian rhythms to maximize your cognitive output and build deep work habits.",
            date: "Feb 05, 2026",
            category: "Habits"
        },
        {
            id: 5,
            title: "Extreme Responsibility",
            excerpt: "The psychological shift from victimhood to ownership that changes everything.",
            date: "Feb 01, 2026",
            category: "Discipline"
        }
    ];

    return (
        <div className="blog-page">
            <header className="blog-header">
                <h1 className="hero-title">Knowledge Base</h1>
                <p className="hero-subtitle">Tactical advice for the modern human. No fluff, just results.</p>
            </header>

            <div className="blog-container centered-blog">
                <div className="blog-main-grid">
                    {posts.map(post => (
                        <article key={post.id} className="blog-post-card glass-card wide-card">
                            <div className="post-meta">
                                <span className="post-category">{post.category}</span>
                                <span className="post-date">{post.date}</span>
                            </div>
                            <h2>{post.title}</h2>
                            <p>{post.excerpt}</p>
                            <Link to={`/blog/${post.id}`} className="read-more">Learn More →</Link>
                        </article>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default BlogPage;

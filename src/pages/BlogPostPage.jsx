
import React from 'react';
import { useParams, Link } from 'react-router-dom';

const BlogPostPage = () => {
    const { id } = useParams();

    // Mock post data 
    const post = {
        title: "The Dopamine Reset: Escaping the Digital Loop",
        date: "Feb 16, 2026",
        category: "Mindset",
        content: `
            <p>Modern society is designed to keep you in a state of constant, low-level stimulation. From the infinite scroll of social media to the engineered flavors of processed food, your dopamine system is being hijacked.</p>
            <p>Smart Adulting requires you to take back control of your neurochemistry. When you are constantly chasing the next 'hit', you lose the ability to focus on long-term goals - like building wealth or mastering your health.</p>
            <h3>The 30-Day Protocol</h3>
            <ul>
                <li><strong>Digital Fasting:</strong> No social media for the first 2 hours of your day. This preserves your 'focus equity'.</li>
                <li><strong>Friction Points:</strong> Uninstall apps that consume more than 30 minutes of your day. Force yourself to use the desktop version.</li>
                <li><strong>Cold Exposure:</strong> A 2-minute cold shower every morning to reset your baseline dopamine.</li>
            </ul>
            <p>By removing these artificial highs, you allow your brain to find joy in 'boring' but productive work.</p>
        `
    };

    return (
        <div className="blog-post-page">
            <article className="blog-inner">
                <Link to="/blog" className="back-link">← Back to Knowledge Base</Link>
                <div className="post-meta">
                    <span className="post-category">{post.category}</span>
                    <span className="post-date">{post.date}</span>
                </div>
                <h1 className="hero-title">{post.title}</h1>
                <div className="post-content" dangerouslySetInnerHTML={{ __html: post.content }}></div>

                <div className="blog-cta glass-card">
                    <h3>Ready to take extreme responsibility?</h3>
                    <p>Take the 3-minute Life Audit to see where you stand in Health, Wealth, and Mindset.</p>
                    <Link to="/quiz" className="cta-button primary-btn">Start My Audit</Link>
                </div>
            </article>
        </div>
    );
};

export default BlogPostPage;

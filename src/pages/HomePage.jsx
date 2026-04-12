import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
    return (
        <div className="home-page">
            {/* HERO SECTION */}
            <section className="hero-section">
                <div className="hero-content">
                    <h1 className="hero-title">Performance Architecture <br />for the Modern Brain.</h1>
                    <p className="hero-subtitle">
                        Simple systems to restore sleep, focus, and daily output in a digital world.
                    </p>
                    <div className="hero-btns">
                        <Link to="/audit" className="cta-button primary-btn" style={{ maxWidth: '300px' }}>Diagnose Your Shutdown</Link>
                    </div>
                </div>
                <div className="hero-image-container">
                    <img src="/hero-avatar.png" alt="Performance Strategy" className="hero-character-img" />
                </div>
            </section>

            {/* ... Environmental Framing Section and Core Philosophy ... */}
            <section className="manifesto-section glass-card wide-card">
                <div className="manifesto-content">
                    <h2 className="vsl-headline">The Default State is Cognitive Decline.</h2>
                    <p className="hero-subtitle">
                        Your environment is hostile to peak output. Operating at capacity requires structural intervention.
                    </p>
                    <ul className="benefits-list">
                        <li>Systemic overstimulation fractures focus.</li>
                        <li>Digital friction drains processing power.</li>
                        <li>Passive recovery fails to restore cognitive bandwidth.</li>
                    </ul>
                    <div className="manifesto-cta" style={{ marginTop: '2.5rem', display: 'flex', justifyContent: 'center' }}>
                        <Link to="/landing" className="cta-button primary-btn pulse-anim" style={{ maxWidth: '400px', display: 'flex', flexDirection: 'column', alignItems: 'center', textDecoration: 'none', textAlign: 'center', padding: '1rem 1.5rem' }}>
                            <span style={{ fontSize: '1.2rem', fontWeight: '800', letterSpacing: '0.01em' }}>Core Sleep Architecture</span>
                            <span style={{ fontSize: '0.85rem', opacity: 0.9, fontWeight: '500', marginTop: '4px', textTransform: 'none' }}>Fall asleep in minutes. Wake up earlier with total clarity.</span>
                        </Link>
                    </div>
                </div>
            </section>

            <section className="science-section">
                <h2 className="section-title">The Engineering Parameters</h2>
                <div className="science-grid">
                    <div className="science-card glass-card">
                        <span className="icon">⚙️</span>
                        <h4>System Over State</h4>
                        <p>Willpower is an unreliable variable. We build rigid frameworks that dictate performance.</p>
                    </div>
                    <div className="science-grid-spacer" style={{ display: 'none' }}></div>
                    <div className="science-card glass-card">
                        <span className="icon">⚡</span>
                        <h4>Energy Allocation</h4>
                        <p>Input determines output. Protocol design centers on ruthless biological efficiency.</p>
                    </div>
                    <div className="science-card glass-card">
                        <span className="icon">🛡️</span>
                        <h4>Bandwidth Preservation</h4>
                        <p>Attention is capital. We implement structural defenses against environmental noise.</p>
                    </div>
                </div>
            </section>

            {/* Founder Section */}
            <section className="authority-section" style={{ padding: '6rem 2rem' }}>
                <div className="author-image-container">
                    <img src="/founder-avatar.png" alt="The Architect" className="author-img" />
                </div>
                <div className="authority-content">
                    <h2 style={{ color: 'var(--text-light)', marginBottom: '0.5rem', fontSize: '2.8rem' }}>The Architect.</h2>
                    
                    <div className="authority-text" style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
                        <p style={{ fontSize: '1.3rem', color: 'var(--text-light)', marginBottom: '1.5rem', fontWeight: '500' }}>
                            I build operational infrastructure for individuals who cannot afford cognitive failure.
                        </p>
                        
                        <blockquote style={{ borderLeft: '4px solid var(--primary-color)', paddingLeft: '1.5rem', margin: '2rem 0', fontStyle: 'italic', color: 'var(--text-light)', fontSize: '1.2rem', background: 'rgba(255,255,255,0.03)', padding: '1.5rem', borderRadius: '0 8px 8px 0' }}>
                            "Performance is not a mindset. It is an engineered result."
                        </blockquote>

                        <p>
                            I build practical systems for people who work in digital environments. I tested productivity trends. Most didn’t last.
                        </p>
                        
                        <p style={{ marginBottom: '1rem', color: 'var(--text-light)' }}>So I went back to basics:</p>
                        
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '2.5rem' }}>
                            <div style={{ background: 'rgba(255,255,255,0.05)', padding: '1rem', borderRadius: '8px', border: '1px solid var(--glass-border)', display: 'flex', alignItems: 'center', gap: '0.8rem', transition: 'transform 0.2s', cursor: 'default' }} onMouseOver={(e) => e.currentTarget.style.transform='translateY(-2px)'} onMouseOut={(e) => e.currentTarget.style.transform='translateY(0)'}>
                                <span style={{ color: 'var(--secondary-color)', fontSize: '1.2rem' }}>🌙</span>
                                <span style={{ color: 'var(--text-light)', fontWeight: '600' }}>Sleep rhythm</span>
                            </div>
                            <div style={{ background: 'rgba(255,255,255,0.05)', padding: '1rem', borderRadius: '8px', border: '1px solid var(--glass-border)', display: 'flex', alignItems: 'center', gap: '0.8rem', transition: 'transform 0.2s', cursor: 'default' }} onMouseOver={(e) => e.currentTarget.style.transform='translateY(-2px)'} onMouseOut={(e) => e.currentTarget.style.transform='translateY(0)'}>
                                <span style={{ color: 'var(--secondary-color)', fontSize: '1.2rem' }}>☀️</span>
                                <span style={{ color: 'var(--text-light)', fontWeight: '600' }}>Light exposure</span>
                            </div>
                            <div style={{ background: 'rgba(255,255,255,0.05)', padding: '1rem', borderRadius: '8px', border: '1px solid var(--glass-border)', display: 'flex', alignItems: 'center', gap: '0.8rem', transition: 'transform 0.2s', cursor: 'default' }} onMouseOver={(e) => e.currentTarget.style.transform='translateY(-2px)'} onMouseOut={(e) => e.currentTarget.style.transform='translateY(0)'}>
                                <span style={{ color: 'var(--secondary-color)', fontSize: '1.2rem' }}>🧠</span>
                                <span style={{ color: 'var(--text-light)', fontWeight: '600' }}>Cognitive load</span>
                            </div>
                            <div style={{ background: 'rgba(255,255,255,0.05)', padding: '1rem', borderRadius: '8px', border: '1px solid var(--glass-border)', display: 'flex', alignItems: 'center', gap: '0.8rem', transition: 'transform 0.2s', cursor: 'default' }} onMouseOver={(e) => e.currentTarget.style.transform='translateY(-2px)'} onMouseOut={(e) => e.currentTarget.style.transform='translateY(0)'}>
                                <span style={{ color: 'var(--secondary-color)', fontSize: '1.2rem' }}>🔄</span>
                                <span style={{ color: 'var(--text-light)', fontWeight: '600' }}>Behavior design</span>
                            </div>
                        </div>

                        <p>
                            Smart Adulting translates that into systems you can actually follow.
                        </p>
                        
                        <div style={{ marginTop: '3rem', padding: '2.5rem 2rem', background: 'linear-gradient(135deg, rgba(78, 152, 90, 0.1) 0%, rgba(0, 0, 0, 0.5) 100%)', border: '1px solid rgba(78, 152, 90, 0.3)', borderRadius: '12px', textAlign: 'center', boxShadow: '0 8px 32px rgba(0,0,0,0.2)' }}>
                            <h3 style={{ fontSize: '1.5rem', color: '#fff', marginBottom: '0.8rem', fontWeight: '500' }}>Performance is not motivation.</h3>
                            <h3 style={{ fontSize: '2rem', color: 'var(--primary-color)', textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: '800' }}>It’s structure.</h3>
                        </div>
                    </div>
                </div>
            </section>

            {/* Strong positioning line before footer */}
            <section style={{ textAlign: 'center', padding: '6rem 2rem', opacity: 0.8 }}>
                <h2 style={{ fontSize: '1.5rem', fontWeight: '400', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                    Adaptation requires engineering.
                </h2>
            </section>
        </div>
    );
};

export default HomePage;

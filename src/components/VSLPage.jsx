import React, { lazy, Suspense } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const VSLPage = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const isLandingRoute = location.pathname === '/landing';
    const email = localStorage.getItem('user_email');
    const quizReport = localStorage.getItem('quiz_result_text');
    const quizTitle = localStorage.getItem('quiz_result_title');
    
    // Parse Score for Graph
    const rawScore = parseInt(localStorage.getItem('quiz_score') || '0', 10);
    const scoreOutOf10 = Math.round((rawScore / 80) * 10) || 5;
    const circumference = 2 * Math.PI * 35;
    const strokeDashoffset = circumference - (scoreOutOf10 / 10) * circumference;

    const handleBuy = () => {
        localStorage.setItem('user_choice', 'buy_offer');
        window.location.href = "https://smartadulting.gumroad.com/l/dzxwgk";
    };

    // Shared Header Block
    const renderHeadline = () => {
        return (
            <>
                {quizReport && !isLandingRoute && (
                    <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                        <h3 style={{ color: '#fca658', fontSize: '1.8rem', marginBottom: '0.8rem' }}>{quizTitle}</h3>
                        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1.2rem' }}>
                            <div style={{ position: 'relative', width: '80px', height: '80px', filter: 'drop-shadow(0 4px 8px rgba(251, 146, 60, 0.3))' }}>
                                <svg width="80" height="80" viewBox="0 0 100 100" style={{ transform: 'rotate(-90deg)' }}>
                                    <circle cx="50" cy="50" r="35" stroke="rgba(251, 146, 60, 0.15)" strokeWidth="8" fill="none" />
                                    <circle cx="50" cy="50" r="35" stroke="#fca658" strokeWidth="8" fill="none" strokeDasharray={circumference} strokeDashoffset={strokeDashoffset} strokeLinecap="round" />
                                </svg>
                                <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                                    <span style={{ color: '#fca658', fontSize: '1.2rem', fontWeight: '800' }}>{scoreOutOf10}</span>
                                    <span style={{ color: '#fca658', opacity: 0.8, fontSize: '0.6rem', fontWeight: 'bold' }}>/ 10</span>
                                </div>
                            </div>
                        </div>
                        <p style={{ fontSize: '1rem', textAlign: 'center', opacity: 0.9, marginBottom: '2rem' }}>{quizReport}</p>
                        <hr style={{ borderColor: 'rgba(255,255,255,0.1)', margin: '1.5rem 0' }} />
                    </div>
                )}

                <div style={{ textAlign: 'center', marginBottom: '2.5rem', marginTop: '1rem' }}>
                    <h2 className="vsl-headline" style={{ fontSize: isLandingRoute ? 'clamp(2.05rem, 7vw, 2.5rem)' : '2.5rem', marginBottom: '1.5rem', lineHeight: '1.3', color: '#fff', fontWeight: '800', letterSpacing: '-0.02em', maxWidth: '900px', margin: '0 auto 1.5rem auto' }}>
                        Fall asleep in under <span style={{ position: 'relative', display: 'inline-flex', justifyContent: 'center' }}>
                            <span style={{ position: 'relative', zIndex: 1 }}>15 minutes</span>
                            <div style={{ position: 'absolute', left: '0', bottom: '-24px', width: '100%', height: '40px', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center', pointerEvents: 'none', zIndex: 0 }}>
                                <img src="./underline-thin.png" alt="marker" style={{ width: '95%', height: 'auto', filter: 'invert(65%) sepia(85%) saturate(3015%) hue-rotate(345deg) brightness(101%) contrast(97%) drop-shadow(0 2px 4px rgba(251, 146, 60, 0.4))' }} />
                            </div>
                        </span> <br />
                        and wake up earlier without <span style={{ color: '#fca658' }}>fighting your mind.</span>
                    </h2>
                    <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)', maxWidth: '650px', margin: '0 auto', lineHeight: '1.6' }}>
                        So you can finally feel rested, and stop dragging through your days.
                    </p>
                </div>
            </>
        );
    };

    return (
        <div className="fullscreen-container bg-dark-gradient">
            <div className="content-box glass-card wide-card" style={{ padding: '2rem' }}>
                {renderHeadline()}

                <div style={{
                    background: '#fca658',
                    color: '#000',
                    padding: '0.4rem 1rem',
                    textAlign: 'center',
                    fontWeight: '700',
                    fontSize: '0.85rem',
                    marginBottom: '4px',
                    borderRadius: '6px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px',
                    width: 'fit-content',
                    margin: '0 auto 4px auto'
                }}>
                    <svg width="18" height="14" viewBox="0 0 28 20" fill="none" style={{ flexShrink: 0, color: '#000' }}>
                        <rect width="28" height="20" rx="4" fill="currentColor" />
                        <path d="M11 6L18 10L11 14V6Z" fill="#fca658" />
                    </svg>
                    <span style={{ lineHeight: '1' }}>Watch This short video Below To Discover How this system works!</span>
                </div>

                <div className="video-placeholder" style={{ padding: 0, overflow: 'hidden', background: '#000', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)' }}>
                    <iframe src="https://player.vimeo.com/video/1181905188?title=0&byline=0&portrait=0" width="100%" height="100%" frameBorder="0" allow="autoplay; fullscreen" title="VSL Video"></iframe>
                </div>
                <p style={{ textAlign: 'center', marginTop: '-1rem', marginBottom: '3rem', opacity: 0.5, fontSize: '0.8rem' }}>few minutes</p>

                <div className="offer-details">
                    <h2 style={{ marginBottom: '2rem' }}>Inside Core Sleep Architecture</h2>
                    <div className="module-list" style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '3rem' }}>
                        {[
                            { title: "Core Sleep Architecture Manual", desc: "The complete system to fall asleep in under 15min." },
                            { title: "Rescue Protocol", desc: "Simplified 10-page deployment plan for tonight." },
                            { title: "Wake Control", desc: "A protocol to eliminate snooze loops and lock in your wake-up time." }
                        ].map((m, i) => (
                            <div key={i} className="module-item" style={{ background: 'rgba(255,255,255,0.02)', padding: '1rem', borderRadius: '8px', borderLeft: '3px solid #fca658', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#fca658' }}></div>
                                <div><h3 style={{ fontSize: '1.1rem', margin: 0, color: '#fff' }}>{m.title}</h3><p style={{ margin: 0, color: 'var(--text-muted)', fontSize: '0.9rem' }}>{m.desc}</p></div>
                            </div>
                        ))}
                    </div>

                    <h2 style={{ marginBottom: '1.5rem', color: '#fca658' }}>Bonus Content</h2>
                    <div className="module-list" style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2.5rem' }}>
                        {[
                            { title: "Bonus 1: Recovery Drink", desc: "A simple nightly drink to improve sleep quality and stabilize morning energy." },
                            { title: "Bonus 2: Performance Tracker", desc: "PDF + Notion tracker to measure and maintain sleep consistency." }
                        ].map((b, i) => (
                            <div key={i} className="module-item" style={{ background: 'rgba(255,255,255,0.02)', padding: '1rem', borderRadius: '8px', borderLeft: '3px solid rgba(255,255,255,0.2)' }}>
                                <h3 style={{ fontSize: '1.1rem', margin: 0, color: '#fff' }}>{b.title}</h3>
                                <p style={{ margin: 0, color: 'var(--text-muted)', fontSize: '0.9rem' }}>{b.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div style={{ textAlign: 'center' }}>
                    <button onClick={handleBuy} className="cta-button primary-btn pulse-anim" style={{ padding: '1.2rem 2.5rem', fontSize: '1.2rem' }}>
                        Install Core Sleep Architecture
                    </button>
                    <p style={{ marginTop: '1rem', opacity: 0.5, fontSize: '0.8rem' }}>Secure Checkout via Gumroad</p>
                </div>

                <div style={{ marginTop: '2rem', borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '1.5rem' }}>
                    <p style={{ fontSize: '0.65rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.1em', textAlign: 'center', marginBottom: '1.5rem' }}>Research-Backed Methods From</p>
                    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1.5rem', opacity: 0.4 }}>
                        {['nih', 'harvard', 'oxford', 'stanford'].map(l => (
                            <img key={l} src={`./${l}.png`} alt={l} style={{ height: l === 'harvard' ? '28px' : '22px' }} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VSLPage;

import React from 'react';
import { useSearchParams } from 'react-router-dom';

const ThankYouPage = () => {
    const [searchParams] = useSearchParams();
    const status = searchParams.get('status');
    const email = localStorage.getItem('user_email');

    return (
        <div className="fullscreen-container bg-dark-gradient">
            <div className="content-box glass-card">
                <h1 className="hero-title" style={{ fontSize: '2.5rem' }}>Deployment Confirmed.</h1>
                <p className="hero-subtitle">
                    {status === 'buyer'
                        ? 'Protocol access keys sent. Check your secure inbox for instructions.'
                        : 'System blueprints dispatched. Check your inbox for immediate access.'}
                </p>
                <div className="summary-box" style={{ background: 'rgba(255, 255, 255, 0.05)', padding: '1.5rem', borderRadius: '12px', marginTop: '2rem' }}>
                    <p style={{ marginBottom: '0.5rem' }}>ID: <strong>{email}</strong></p>
                    <p>Authorization: <span className={`status-badge ${status}`} style={{ background: status === 'buyer' ? 'rgba(78, 152, 90, 0.2)' : 'rgba(255, 255, 255, 0.1)', color: status === 'buyer' ? '#4ade80' : '#fff' }}>{status === 'buyer' ? 'Total Access' : 'Baseline Access'}</span></p>
                </div>
            </div>
        </div>
    );
};

export default ThankYouPage;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SqueezePage = () => {
    const [email, setEmail] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (email) {
            localStorage.setItem('user_email', email);
            navigate('/offer');
        }
    };

    return (
        <div className="fullscreen-container bg-dark-gradient">
            <div className="content-box glass-card">
                <h1 className="hero-title" style={{ fontSize: '2.5rem' }}>Operational Clarity Starts Here.</h1>
                <p className="hero-subtitle">Access the structural blueprints for biological efficiency and sustained cognitive output.</p>

                <form onSubmit={handleSubmit} className="squeeze-form">
                    <input
                        type="email"
                        placeholder="Enter your email address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="email-input"
                    />
                    <button type="submit" className="cta-button primary-btn">
                        Deploy System
                    </button>
                </form>
                <p className="privacy-text" style={{ marginTop: '1.5rem', opacity: 0.5 }}>Diagnostic data secured. No marketing fluff.</p>
            </div>
        </div>
    );
};

export default SqueezePage;

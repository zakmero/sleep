
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-section">
                    <h3 className="footer-logo">Smart Adulting</h3>
                    <p>The manual for modern responsibility. Master your mindset, habits, and health.</p>
                </div>
                <div className="footer-section">
                    <h4>Quick Links</h4>
                    <Link to="/">Home</Link>
                    <Link to="/blog">Blog</Link>
                </div>
                <div className="footer-section">
                    <h4>Legal</h4>
                    <Link to="/privacy">Privacy Policy</Link>
                    <Link to="/terms">Terms of Service</Link>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} SmartAdulting. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;

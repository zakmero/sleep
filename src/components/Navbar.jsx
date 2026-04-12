
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const quizzes = [
        { id: 'sleep', title: 'The Sleep Audit', desc: 'Sync your circadian and metabolic health.' }
    ];

    return (
        <nav className="navbar">
            <div className="nav-container">
                <Link to="/" className="nav-logo">
                    Smart Adulting
                </Link>

                <div className="quiz-dropdown-container header-quiz">
                    <button
                        className="quiz-dropdown-btn"
                        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    >
                        Assessments {isDropdownOpen ? '▴' : '▾'}
                    </button>

                    {isDropdownOpen && (
                        <div className="quiz-dropdown-menu">
                            {quizzes.map(quiz => (
                                <Link key={quiz.id} to="/quiz" className="quiz-item" onClick={() => setIsDropdownOpen(false)}>
                                    <div className="quiz-item-header">
                                        <strong>{quiz.title}</strong>
                                    </div>
                                    <span className="quiz-desc">{quiz.desc}</span>
                                </Link>
                            ))}
                            <div className="menu-footer">
                                <span>Diagnostic Suite v1.2</span>
                            </div>
                        </div>
                    )}
                </div>

                <div className="nav-links">
                    <Link to="/" className="nav-link">Home</Link>
                    <Link to="/blog" className="nav-link">Blog</Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;

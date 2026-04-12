
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const questions = [
    {
        id: 1,
        question: "How many hours of actual sleep do you get on average?",
        options: [
            { text: "7.5 - 9 hours", score: 10 },
            { text: "6 - 7 hours", score: 7 },
            { text: "5 - 6 hours", score: 4 },
            { text: "Less than 5 hours", score: 1 }
        ]
    },
    {
        id: 2,
        question: "How long does it usually take you to fall asleep?",
        options: [
            { text: "Under 15 minutes", score: 10 },
            { text: "15 - 30 minutes", score: 7 },
            { text: "30 - 60 minutes", score: 4 },
            { text: "Over an hour", score: 1 }
        ]
    },
    {
        id: 3,
        question: "How often do you wake up during the night?",
        options: [
            { text: "Rarely/Never", score: 10 },
            { text: "Once, but fall back quickly", score: 7 },
            { text: "2-3 times", score: 4 },
            { text: "Frequently/Struggle to return to sleep", score: 1 }
        ]
    },
    {
        id: 4,
        question: "How refreshed do you feel upon waking up?",
        options: [
            { text: "Fully energized", score: 10 },
            { text: "Somewhat rested", score: 7 },
            { text: "Slightly groggy", score: 4 },
            { text: "Exhausted/Need caffeine immediately", score: 1 }
        ]
    },
    {
        id: 5,
        question: "How consistent is your sleep/wake schedule (even on weekends)?",
        options: [
            { text: "Highly consistent (+/- 30 min)", score: 10 },
            { text: "Mostly consistent (+/- 1 hour)", score: 7 },
            { text: "Varies significantly", score: 4 },
            { text: "Total chaos", score: 1 }
        ]
    },
    {
        id: 6,
        question: "How much blue light exposure (screens) do you have 1 hour before bed?",
        options: [
            { text: "None/Blue light blockers", score: 10 },
            { text: "Minimal (Phone for 5-10 min)", score: 7 },
            { text: "Moderate (TV or Social Media)", score: 4 },
            { text: "High (Working or Gaming until bed)", score: 1 }
        ]
    },
    {
        id: 7,
        question: "Do you experience midday energy crashes?",
        options: [
            { text: "Never/Rarely", score: 10 },
            { text: "Occasionally (after heavy lunch)", score: 7 },
            { text: "Often (Daily occurrence)", score: 4 },
            { text: "Always (Chronic afternoon fatigue)", score: 1 }
        ]
    },
    {
        id: 8,
        question: "Do you use caffeine or stimulants to function during the day?",
        options: [
            { text: "Rarely/None", score: 10 },
            { text: "1 - 2 cups in the morning", score: 7 },
            { text: "Multiple cups throughout the day", score: 4 },
            { text: "Dependent on caffeine to stay awake", score: 1 }
        ]
    }
];

const generateReport = (score) => {
    if (score >= 65) {
        return {
            title: "The Optimized Sleeper",
            text: "Your circadian alignment is strong, but high-level cognitive performance is highly fragile. One failed night of unstructured sleep can crash your momentum and ruin everything. Our protocol will show you how to completely bulletproof your architecture so that biological failure is no longer a risk."
        };
    } else if (score >= 40) {
        return {
            title: "The Fragmented Performer",
            text: "You are surviving, but not thriving. Your sleep is functional, but lack of consistency and environmental design is draining your daily drive. You are leaving 30-40% of your performance on the table."
        };
    } else {
        return {
            title: "The Biological Crisis",
            text: "Your current core sleep architecture is in a state of emergency. Chronic fatigue and circadian disruption are destroying your focus and long-term health. You need an immediate structural reset of your evening systems."
        };
    }
};

const QuizPage = () => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [totalScore, setTotalScore] = useState(0);
    const [showEmailCapture, setShowEmailCapture] = useState(false);
    const [email, setEmail] = useState('');
    const navigate = useNavigate();

    const handleAnswer = (score) => {
        const newScore = totalScore + score;
        setTotalScore(newScore);

        if (currentQuestion < questions.length - 1) {
            setCurrentQuestion(currentQuestion + 1);
        } else {
            setShowEmailCapture(true);
        }
    };

    const handleEmailSubmit = (e) => {
        e.preventDefault();
        if (email) {
            const result = generateReport(totalScore);
            localStorage.setItem('user_email', email);
            localStorage.setItem('quiz_score', totalScore);
            localStorage.setItem('quiz_result_text', result.text);
            localStorage.setItem('quiz_result_title', result.title);
            navigate('/offer');
        }
    };

    const progress = ((currentQuestion + 1) / questions.length) * 100;

    if (showEmailCapture) {
        return (
            <div className="fullscreen-container bg-dark-gradient">
                <div className="content-box glass-card wide-card">
                    <h2 className="vsl-headline" style={{ fontSize: '2rem' }}>Sleep Audit Complete...</h2>
                    <div className="progress-bar-container">
                        <div className="progress-bar" style={{ width: '100%' }}></div>
                    </div>
                    <p style={{ marginBottom: '2rem', fontSize: '1.1rem', color: '#94a3b8' }}>We have analyzed your core sleep architecture and circadian markers.</p>

                    <div className="email-capture-box" style={{ marginTop: 0, padding: '2rem' }}>
                        <h3 style={{ color: '#fbbf24' }}>Get Your Biological Score</h3>
                        <p>Enter your email below to unlock your sleep audit results and your personalized recovery protocol.</p>
                        <form onSubmit={handleEmailSubmit} className="squeeze-form">
                            <input
                                type="email"
                                placeholder="Enter your email address"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                className="email-input"
                            />
                            <button type="submit" className="cta-button primary-btn pulse-anim">
                                Unlock My Score
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="fullscreen-container bg-dark-gradient">
            <div className="content-box glass-card wide-card quiz-card">
                <div className="progress-bar-container">
                    <div className="progress-bar" style={{ width: `${progress}%` }}></div>
                </div>

                <h2 className="quiz-question">
                    {questions[currentQuestion].question}
                </h2>

                <div className="quiz-options">
                    {questions[currentQuestion].options.map((option, index) => (
                        <button
                            key={index}
                            onClick={() => handleAnswer(option.score)}
                            className="quiz-option-btn"
                        >
                            {option.text}
                        </button>
                    ))}
                </div>

                <p className="question-counter">
                    Metric {currentQuestion + 1} of {questions.length}
                </p>
            </div>
        </div>
    );
};

export default QuizPage;

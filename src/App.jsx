
import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './components/MainLayout';
import './index.css';

// Lazy load components for performance
const HomePage = lazy(() => import('./pages/HomePage'));
const BlogPage = lazy(() => import('./pages/BlogPage'));
const BlogPostPage = lazy(() => import('./pages/BlogPostPage'));
const SqueezePage = lazy(() => import('./components/SqueezePage'));
const VSLPage = lazy(() => import('./components/VSLPage'));
const ThankYouPage = lazy(() => import('./components/ThankYouPage'));
const QuizPage = lazy(() => import('./components/QuizPage'));

// Subtle loader for code-splitting transitions
const PageLoader = () => (
  <div style={{ height: '100vh', background: '#0a0a0b', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
    <div style={{ width: '30px', height: '1px', background: '#fb923c', animation: 'pulse 1.5s infinite' }}></div>
  </div>
);

function App() {
  return (
    <Router basename={import.meta.env.BASE_URL}>
      <div className="App">
        <Suspense fallback={<PageLoader />}>
          <Routes>
            {/* Main Website Routes */}
            <Route path="/" element={<MainLayout><HomePage /></MainLayout>} />
            <Route path="/blog" element={<MainLayout><BlogPage /></MainLayout>} />
            <Route path="/blog/:id" element={<MainLayout><BlogPostPage /></MainLayout>} />

            {/* Funnel Routes */}
            <Route path="/start" element={<SqueezePage />} />
            <Route path="/quiz" element={<QuizPage />} />
            <Route path="/audit" element={<QuizPage />} />
            <Route path="/offer" element={<VSLPage />} />
            <Route path="/landing" element={<VSLPage />} />
            <Route path="/thank-you" element={<ThankYouPage />} />
          </Routes>
        </Suspense>
      </div>
    </Router>
  );
}

export default App;

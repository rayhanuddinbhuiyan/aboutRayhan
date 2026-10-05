import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Mail, Code2, Sparkles, Terminal, BookOpen, Award } from 'lucide-react';
import { GithubIcon as Github, LinkedinIcon as Linkedin } from './Icons';
import { portfolioData } from '../data/portfolioData';

export const Hero = () => {
  const { personal } = portfolioData;

  return (
    <section id="home" className="section hero-section">
      <div className="ambient-glow-1"></div>
      <div className="ambient-glow-2"></div>

      <div className="container hero-grid">
        {/* Left Column: Intro Content */}
        <motion.div 
          className="hero-content"
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Status Badge */}
          <div className="hero-status-pill">
            <span className="pulse-dot"></span>
            <span>{personal.status}</span>
            <span className="cgpa-tag">CGPA: {personal.cgpa}</span>
          </div>

          <h1 className="hero-greeting">
            Hi, I'm <br />
            <span className="gradient-text hero-name">{personal.name}</span>
          </h1>

          <div className="hero-role-wrapper">
            <span className="role-prefix">I build solutions as a </span>
            <span className="role-title">{personal.role}</span>
          </div>

          <p className="hero-bio">
            {personal.bio} Passionate about software development, AI, machine learning, data science, and modern web architectures.
          </p>

          {/* Key Quick Badges */}
          <div className="hero-badges">
            <div className="hero-badge-item">
              <BookOpen size={16} className="badge-icon" />
              <span>{personal.university}</span>
            </div>
            <div className="hero-badge-item">
              <Award size={16} className="badge-icon" />
              <span>IEEE ICCIT Author</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="hero-actions">
            <a href="#projects" className="btn btn-primary">
              <span>View My Projects</span>
              <ArrowRight size={18} />
            </a>
            <a href="#contact" className="btn btn-secondary">
              <Mail size={18} />
              <span>Contact Me</span>
            </a>
          </div>

          {/* Social Links */}
          <div className="hero-socials">
            <span className="socials-label">Connect:</span>
            <a 
              href={personal.github} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="social-btn"
              aria-label="GitHub Profile"
            >
              <Github size={18} />
            </a>
            <a 
              href={personal.linkedin} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="social-btn"
              aria-label="LinkedIn Profile"
            >
              <Linkedin size={18} />
            </a>
            <a 
              href={`mailto:${personal.email}`} 
              className="social-btn"
              aria-label="Send Email"
            >
              <Mail size={18} />
            </a>
          </div>
        </motion.div>

        {/* Right Column: Code Card Visual Element */}
        <motion.div 
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          <div className="code-window glass-card">
            <div className="code-window-header">
              <div className="window-dots">
                <span className="dot dot-red"></span>
                <span className="dot dot-yellow"></span>
                <span className="dot dot-green"></span>
              </div>
              <div className="window-title">
                <Terminal size={14} />
                <span>developer_profile.json</span>
              </div>
            </div>

            <div className="code-content">
              <pre>
                <code>
                  <span className="syn-keyword">const</span> <span className="syn-def">engineer</span> = &#123;<br />
                  &nbsp;&nbsp;<span className="syn-prop">name</span>: <span className="syn-str">"{personal.name}"</span>,<br />
                  &nbsp;&nbsp;<span className="syn-prop">degree</span>: <span className="syn-str">"{personal.degree}"</span>,<br />
                  &nbsp;&nbsp;<span className="syn-prop">university</span>: <span className="syn-str">"{personal.university}"</span>,<br />
                  &nbsp;&nbsp;<span className="syn-prop">cgpa</span>: <span className="syn-num">3.84</span>,<br />
                  &nbsp;&nbsp;<span className="syn-prop">research</span>: [<span className="syn-str">"IEEE 28th ICCIT Conference Paper"</span>],<br />
                  &nbsp;&nbsp;<span className="syn-prop">domains</span>: [<br />
                  &nbsp;&nbsp;&nbsp;&nbsp;<span className="syn-str">"Software Engineering"</span>,<br />
                  &nbsp;&nbsp;&nbsp;&nbsp;<span className="syn-str">"Web Development"</span>,<br />
                  &nbsp;&nbsp;&nbsp;&nbsp;<span className="syn-str">"AI & Machine Learning"</span>,<br />
                  &nbsp;&nbsp;&nbsp;&nbsp;<span className="syn-str">"Data Science & NLP"</span><br />
                  &nbsp;&nbsp;],<br />
                  &nbsp;&nbsp;<span className="syn-prop">readyToHire</span>: <span className="syn-bool">true</span><br />
                  &#125;;
                </code>
              </pre>
            </div>

            {/* Floating Info Tag */}
            <div className="floating-stat-card glass-card">
              <div className="stat-icon">
                <Code2 size={20} />
              </div>
              <div>
                <div className="stat-value">3.84 / 4.00</div>
                <div className="stat-label">Academic CGPA</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <style>{`
        .hero-section {
          min-height: 90vh;
          display: flex;
          align-items: center;
          padding-top: 100px;
          padding-bottom: 4rem;
        }

        .hero-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 3.5rem;
          align-items: center;
        }

        @media (min-width: 992px) {
          .hero-grid {
            grid-template-columns: 1.15fr 0.85fr;
          }
        }

        .hero-status-pill {
          display: inline-flex;
          align-items: center;
          gap: 0.6rem;
          padding: 0.4rem 1rem;
          border-radius: var(--radius-full);
          background: rgba(6, 182, 212, 0.08);
          border: 1px solid rgba(6, 182, 212, 0.25);
          font-size: 0.85rem;
          font-weight: 500;
          color: var(--text-main);
          margin-bottom: 1.5rem;
        }

        .pulse-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #10b981;
          box-shadow: 0 0 10px #10b981;
        }

        .cgpa-tag {
          padding: 0.15rem 0.5rem;
          border-radius: 4px;
          background: rgba(59, 130, 246, 0.2);
          color: var(--accent-cyan-light);
          font-weight: 700;
          font-size: 0.78rem;
        }

        .hero-greeting {
          font-size: 2.5rem;
          font-weight: 800;
          letter-spacing: -0.02em;
          margin-bottom: 1rem;
        }

        @media (min-width: 768px) {
          .hero-greeting {
            font-size: 3.5rem;
          }
        }

        .hero-name {
          font-size: 2.8rem;
          line-height: 1.15;
        }

        @media (min-width: 768px) {
          .hero-name {
            font-size: 4rem;
          }
        }

        .hero-role-wrapper {
          font-size: 1.15rem;
          font-weight: 600;
          color: var(--accent-cyan-light);
          margin-bottom: 1.25rem;
        }

        .role-title {
          color: var(--text-bright);
        }

        .hero-bio {
          color: var(--text-muted);
          font-size: 1.1rem;
          max-width: 580px;
          margin-bottom: 1.75rem;
          line-height: 1.7;
        }

        .hero-badges {
          display: flex;
          flex-wrap: wrap;
          gap: 1rem;
          margin-bottom: 2rem;
        }

        .hero-badge-item {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.4rem 0.85rem;
          border-radius: var(--radius-sm);
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid var(--border-subtle);
          font-size: 0.85rem;
          color: var(--text-main);
        }

        .badge-icon {
          color: var(--accent-cyan);
        }

        .hero-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 1rem;
          margin-bottom: 2rem;
        }

        .hero-socials {
          display: flex;
          align-items: center;
          gap: 0.85rem;
        }

        .socials-label {
          font-size: 0.85rem;
          color: var(--text-subtle);
          font-weight: 600;
        }

        .social-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          border-radius: 10px;
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid var(--border-subtle);
          color: var(--text-muted);
          transition: var(--transition-fast);
        }

        .social-btn:hover {
          color: var(--accent-cyan-light);
          background: rgba(6, 182, 212, 0.12);
          border-color: var(--accent-cyan);
          transform: translateY(-2px);
        }

        /* Code Window Styling */
        .code-window {
          position: relative;
          background: #0d1117;
          border-radius: var(--radius-md);
          overflow: hidden;
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .code-window-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0.75rem 1.25rem;
          background: rgba(255, 255, 255, 0.03);
          border-bottom: 1px solid var(--border-subtle);
        }

        .window-dots {
          display: flex;
          gap: 6px;
        }

        .dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
        }
        .dot-red { background: #ef4444; }
        .dot-yellow { background: #f59e0b; }
        .dot-green { background: #10b981; }

        .window-title {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          font-family: var(--font-mono);
          font-size: 0.8rem;
          color: var(--text-subtle);
        }

        .code-content {
          padding: 1.5rem;
          font-family: var(--font-mono);
          font-size: 0.85rem;
          line-height: 1.7;
          overflow-x: auto;
        }

        .syn-keyword { color: #f43f5e; font-weight: 600; }
        .syn-def { color: #38bdf8; }
        .syn-prop { color: #a78bfa; }
        .syn-str { color: #34d399; }
        .syn-num { color: #fbbf24; }
        .syn-bool { color: #fb7185; }

        .floating-stat-card {
          position: absolute;
          bottom: 20px;
          right: 20px;
          display: flex;
          align-items: center;
          gap: 0.85rem;
          padding: 0.75rem 1.1rem;
          background: rgba(15, 23, 42, 0.9);
          border: 1px solid rgba(6, 182, 212, 0.3);
          backdrop-filter: blur(10px);
        }

        .stat-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 38px;
          height: 38px;
          border-radius: 8px;
          background: rgba(6, 182, 212, 0.15);
          color: var(--accent-cyan);
        }

        .stat-value {
          font-weight: 800;
          font-size: 1.1rem;
          color: var(--text-bright);
        }

        .stat-label {
          font-size: 0.75rem;
          color: var(--text-muted);
        }
      `}</style>
    </section>
  );
};

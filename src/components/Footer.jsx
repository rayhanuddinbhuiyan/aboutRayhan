import React from 'react';
import { ArrowUp, Mail, Code2, Heart } from 'lucide-react';
import { GithubIcon as Github, LinkedinIcon as Linkedin } from './Icons';
import { portfolioData } from '../data/portfolioData';

export const Footer = () => {
  const { personal } = portfolioData;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer-container">
      <div className="container footer-content">
        <div className="footer-top">
          {/* Brand Info */}
          <div className="footer-brand">
            <div className="footer-logo">
              <Code2 size={24} className="logo-icon-svg" />
              <span>Rayhan<span className="accent-text">.bhuiyan</span></span>
            </div>
            <p className="footer-tagline">
              Computer Science & Engineering Student at Southeast University. Building high-performance software and AI systems.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="footer-nav">
            <h4>Quick Links</h4>
            <div className="footer-links-grid">
              <a href="#home">Home</a>
              <a href="#about">About Me</a>
              <a href="#education">Education</a>
              <a href="#skills">Skills</a>
              <a href="#projects">Projects</a>
              <a href="#activities">Activities</a>
              <a href="#contact">Contact</a>
            </div>
          </div>

          {/* Socials & Top Scroll */}
          <div className="footer-social-col">
            <h4>Connect</h4>
            <div className="social-links-row">
              <a 
                href={personal.github} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="footer-social-link"
                aria-label="GitHub Profile"
              >
                <Github size={18} />
              </a>
              <a 
                href={personal.linkedin} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="footer-social-link"
                aria-label="LinkedIn Profile"
              >
                <Linkedin size={18} />
              </a>
              <a 
                href={`mailto:${personal.email}`} 
                className="footer-social-link"
                aria-label="Email"
              >
                <Mail size={18} />
              </a>
            </div>

            <button onClick={scrollToTop} className="back-to-top-btn">
              <span>Back to top</span>
              <ArrowUp size={16} />
            </button>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="copyright-text">
            © 2026 {personal.name}. All Rights Reserved.
          </p>
          <p className="dev-credit">
            Designed & Developed with React.js & Modern CSS
          </p>
        </div>
      </div>

      <style>{`
        .footer-container {
          background: #06080e;
          border-top: 1px solid var(--border-subtle);
          padding: 4rem 0 2rem 0;
          color: var(--text-muted);
        }

        .footer-content {
          display: flex;
          flex-direction: column;
          gap: 3rem;
        }

        .footer-top {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2.5rem;
        }

        @media (min-width: 768px) {
          .footer-top {
            grid-template-columns: 1.5fr 1fr 1fr;
          }
        }

        .footer-logo {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          font-size: 1.35rem;
          font-weight: 800;
          color: var(--text-bright);
          margin-bottom: 0.85rem;
        }

        .logo-icon-svg {
          color: var(--accent-cyan);
        }

        .accent-text {
          color: var(--accent-cyan);
        }

        .footer-tagline {
          font-size: 0.95rem;
          color: var(--text-subtle);
          line-height: 1.6;
          max-width: 380px;
        }

        .footer-nav h4, .footer-social-col h4 {
          font-size: 1rem;
          font-weight: 700;
          color: var(--text-bright);
          margin-bottom: 1.1rem;
        }

        .footer-links-grid {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          font-size: 0.9rem;
        }

        .footer-links-grid a:hover {
          color: var(--accent-cyan-light);
        }

        .social-links-row {
          display: flex;
          gap: 0.75rem;
          margin-bottom: 1.5rem;
        }

        .footer-social-link {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 38px;
          height: 38px;
          border-radius: 10px;
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid var(--border-subtle);
          color: var(--text-muted);
          transition: var(--transition-fast);
        }

        .footer-social-link:hover {
          color: var(--accent-cyan-light);
          background: rgba(6, 182, 212, 0.12);
          border-color: var(--accent-cyan);
          transform: translateY(-2px);
        }

        .back-to-top-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.5rem 1rem;
          border-radius: var(--radius-sm);
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid var(--border-subtle);
          color: var(--text-main);
          font-size: 0.85rem;
          font-weight: 600;
          transition: var(--transition-fast);
        }

        .back-to-top-btn:hover {
          background: rgba(6, 182, 212, 0.12);
          border-color: var(--accent-cyan);
          color: var(--accent-cyan-light);
        }

        .footer-bottom {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
          align-items: center;
          justify-content: space-between;
          padding-top: 2rem;
          border-top: 1px solid rgba(255, 255, 255, 0.05);
          font-size: 0.88rem;
          color: var(--text-subtle);
        }

        @media (min-width: 640px) {
          .footer-bottom {
            flex-direction: row;
          }
        }
      `}</style>
    </footer>
  );
};

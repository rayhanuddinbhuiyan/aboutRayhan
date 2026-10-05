import React from 'react';
import { ArrowUp, Mail, Code2 } from 'lucide-react';
import { GithubIcon as Github, LinkedinIcon as Linkedin, WhatsappIcon as Whatsapp } from './Icons';
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
              Computer Science & Engineering Student at Southeast University. Building scalable software, NLP research, and healthcare AI systems.
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

          {/* Socials & Top Scroll - Priority: Mail -> LinkedIn -> GitHub -> WhatsApp */}
          <div className="footer-social-col">
            <h4>Connect</h4>
            <div className="social-links-row">
              <a 
                href={`mailto:${personal.email}`} 
                className="footer-social-link"
                aria-label="Email"
              >
                <Mail size={18} />
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
                href={personal.github} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="footer-social-link"
                aria-label="GitHub Profile"
              >
                <Github size={18} />
              </a>
              <a 
                href={personal.whatsapp} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="footer-social-link"
                aria-label="WhatsApp"
              >
                <Whatsapp size={18} />
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
            Designed & Developed with React.js & Pure CSS
          </p>
        </div>
      </div>

      <style>{`
        .footer-container {
          background: var(--bg-secondary);
          border-top: 1px solid var(--border-subtle);
          padding: 4rem 0 2rem 0;
          color: var(--text-muted);
          transition: var(--transition-smooth);
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
          color: var(--accent-primary);
        }

        .accent-text {
          color: var(--accent-primary);
        }

        .footer-tagline {
          font-size: 0.95rem;
          color: var(--text-muted);
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

        .footer-links-grid a {
          color: var(--text-muted);
          font-weight: 500;
          transition: var(--transition-fast);
        }

        .footer-links-grid a:hover {
          color: var(--accent-primary);
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
          width: 40px;
          height: 40px;
          border-radius: 10px;
          background: var(--bg-card);
          border: 1px solid var(--border-subtle);
          color: var(--text-bright);
          transition: var(--transition-fast);
        }

        .footer-social-link:hover {
          color: var(--accent-primary);
          background: var(--accent-light);
          border-color: var(--accent-primary);
          transform: translateY(-2px);
        }

        .back-to-top-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.6rem 1.1rem;
          border-radius: var(--radius-sm);
          background: var(--bg-card);
          border: 1px solid var(--border-subtle);
          color: var(--text-bright);
          font-size: 0.88rem;
          font-weight: 600;
          transition: var(--transition-fast);
        }

        .back-to-top-btn:hover {
          background: var(--accent-light);
          border-color: var(--accent-primary);
          color: var(--accent-primary);
        }

        .footer-bottom {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
          align-items: center;
          justify-content: space-between;
          padding-top: 2rem;
          border-top: 1px solid var(--border-subtle);
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


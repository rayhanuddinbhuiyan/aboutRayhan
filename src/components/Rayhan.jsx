import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Mail, Code2, Sparkles, Terminal, BookOpen, Award, CheckCircle2 } from 'lucide-react';
import { GithubIcon as Github, LinkedinIcon as Linkedin } from './Icons';
import { portfolioData } from '../data/portfolioData';
import profileImg from '../assets/profile.jpg';

export const Rayhan = () => {
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
            <span>{personal.availability}</span>
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
            {personal.bio}
          </p>

          {/* Key Quick Badges */}
          <div className="hero-badges">
            <div className="hero-badge-item">
              <BookOpen size={16} className="badge-icon" />
              <span>{personal.university}</span>
            </div>
            <div className="hero-badge-item">
              <Award size={16} className="badge-icon" />
              <span>IEEE Published Author</span>
            </div>
            <div className="hero-badge-item">
              <Sparkles size={16} className="badge-icon" />
              <span>NLP & Healthcare CV Research</span>
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
              href={`mailto:${personal.email}`} 
              className="social-btn"
              aria-label="Send Email"
            >
              <Mail size={18} />
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
              href={personal.github} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="social-btn"
              aria-label="GitHub Profile"
            >
              <Github size={18} />
            </a>
          </div>
        </motion.div>

        {/* Right Column: Profile Picture Visual Element */}
        <motion.div 
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          <div className="profile-image-card-wrapper">
            <div className="profile-image-container glass-card">
              <img 
                src={profileImg} 
                alt={personal.name} 
                className="profile-img"
              />
              <div className="profile-image-overlay"></div>
            </div>

            {/* Floating Info Tag 1: CGPA */}
            <div className="floating-stat-card stat-card-top">
              <div className="stat-icon">
                <Code2 size={20} />
              </div>
              <div>
                <div className="stat-value">{personal.cgpa}</div>
                <div className="stat-label">BSc CSE CGPA</div>
              </div>
            </div>

            {/* Floating Info Tag 2: Research */}
            <div className="floating-stat-card stat-card-bottom">
              <div className="stat-icon icon-purple">
                <Award size={20} />
              </div>
              <div>
                <div className="stat-value">IEEE Published</div>
                <div className="stat-label">28th ICCIT Author</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <style>{`
        .hero-section {
          min-height: auto;
          display: flex;
          align-items: center;
          padding-top: 90px;
          padding-bottom: 3rem;
        }

        @media (min-width: 992px) {
          .hero-section {
            min-height: 90vh;
            padding-top: 100px;
            padding-bottom: 4rem;
          }
        }

        .hero-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2.5rem;
          align-items: center;
        }

        @media (min-width: 992px) {
          .hero-grid {
            grid-template-columns: 1.15fr 0.85fr;
            gap: 3.5rem;
          }
        }

        .hero-status-pill {
          display: inline-flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 0.5rem;
          padding: 0.4rem 0.85rem;
          border-radius: var(--radius-full);
          background: var(--accent-light);
          border: 1px solid var(--border-subtle);
          font-size: 0.82rem;
          font-weight: 500;
          color: var(--text-main);
          margin-bottom: 1.25rem;
          max-width: 100%;
        }

        .pulse-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #10b981;
          box-shadow: 0 0 10px #10b981;
          flex-shrink: 0;
        }

        .cgpa-tag {
          padding: 0.15rem 0.5rem;
          border-radius: 4px;
          background: var(--accent-light);
          border: 1px solid var(--border-subtle);
          color: var(--accent-primary);
          font-weight: 700;
          font-size: 0.78rem;
        }

        .hero-greeting {
          font-size: clamp(2rem, 7vw, 3.5rem);
          font-weight: 800;
          letter-spacing: -0.02em;
          margin-bottom: 0.75rem;
          line-height: 1.15;
        }

        .hero-name {
          font-size: clamp(2.2rem, 8.5vw, 4rem);
          line-height: 1.1;
        }

        .hero-role-wrapper {
          font-size: clamp(1rem, 4vw, 1.15rem);
          font-weight: 600;
          color: var(--accent-primary);
          margin-bottom: 1rem;
        }

        .role-title {
          color: var(--text-bright);
        }

        .hero-bio {
          color: var(--text-muted);
          font-size: 1rem;
          max-width: 580px;
          margin-bottom: 1.5rem;
          line-height: 1.6;
        }

        @media (min-width: 768px) {
          .hero-bio {
            font-size: 1.1rem;
            line-height: 1.7;
          }
        }

        .hero-badges {
          display: flex;
          flex-wrap: wrap;
          gap: 0.6rem;
          margin-bottom: 1.75rem;
        }

        .hero-badge-item {
          display: flex;
          align-items: center;
          gap: 0.45rem;
          padding: 0.35rem 0.75rem;
          border-radius: var(--radius-sm);
          background: var(--bg-card);
          border: 1px solid var(--border-subtle);
          font-size: 0.82rem;
          color: var(--text-main);
          font-weight: 500;
        }

        .badge-icon {
          color: var(--accent-primary);
          flex-shrink: 0;
        }

        .hero-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 0.85rem;
          margin-bottom: 1.75rem;
        }

        @media (max-width: 480px) {
          .hero-actions .btn {
            width: 100%;
          }
        }

        .hero-socials {
          display: flex;
          align-items: center;
          gap: 0.75rem;
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
          background: var(--bg-card);
          border: 1px solid var(--border-subtle);
          color: var(--text-bright);
          transition: var(--transition-fast);
        }

        .social-btn:hover {
          color: var(--accent-primary);
          background: var(--accent-light);
          border-color: var(--accent-primary);
          transform: translateY(-2px);
        }

        /* Profile Image Styling */
        .profile-image-card-wrapper {
          position: relative;
          max-width: 420px;
          width: 100%;
          margin: 0 auto;
        }

        .profile-image-container {
          position: relative;
          border-radius: 20px;
          overflow: hidden;
          padding: 6px;
          background: linear-gradient(135deg, var(--border-subtle), var(--accent-light));
          box-shadow: var(--shadow-card);
          border: 1px solid var(--border-subtle);
        }

        .profile-img {
          width: 100%;
          height: 440px;
          object-fit: cover;
          object-position: center 20%;
          border-radius: 16px;
          display: block;
          transition: transform 0.5s ease;
        }

        @media (max-width: 768px) {
          .profile-img {
            height: 360px;
          }
        }

        @media (max-width: 480px) {
          .profile-img {
            height: 310px;
          }
        }

        .profile-image-container:hover .profile-img {
          transform: scale(1.03);
        }

        .floating-stat-card {
          position: absolute;
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding: 0.65rem 0.95rem;
          background: var(--bg-card);
          border: 1px solid var(--border-subtle);
          backdrop-filter: blur(14px);
          -webkit-backdrop-filter: blur(14px);
          border-radius: 14px;
          box-shadow: var(--shadow-card), 0 8px 24px rgba(0, 0, 0, 0.12);
          z-index: 10;
        }

        .stat-card-top {
          top: 20px;
          left: -15px;
        }

        .stat-card-bottom {
          bottom: 20px;
          right: -15px;
        }

        @media (max-width: 640px) {
          .stat-card-top {
            top: 12px;
            left: 10px;
            padding: 0.45rem 0.75rem;
          }
          .stat-card-bottom {
            bottom: 12px;
            right: 10px;
            padding: 0.45rem 0.75rem;
          }
        }

        .stat-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 36px;
          height: 36px;
          border-radius: 10px;
          background: var(--accent-light);
          color: var(--accent-primary);
          flex-shrink: 0;
        }

        .stat-icon.icon-purple {
          background: var(--accent-light);
          color: var(--accent-primary);
        }

        .stat-value {
          font-weight: 800;
          font-size: 0.98rem;
          color: var(--text-bright);
        }

        .stat-label {
          font-size: 0.72rem;
          color: var(--text-muted);
          font-weight: 600;
        }
      `}</style>
    </section>
  );
};

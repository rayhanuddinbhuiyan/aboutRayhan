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
            <div className="floating-stat-card stat-card-top glass-card">
              <div className="stat-icon">
                <Code2 size={20} />
              </div>
              <div>
                <div className="stat-value">3.84 / 4.00</div>
                <div className="stat-label">BSc CSE CGPA</div>
              </div>
            </div>

            {/* Floating Info Tag 2: Research */}
            <div className="floating-stat-card stat-card-bottom glass-card">
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

        /* Profile Image Styling */
        .profile-image-card-wrapper {
          position: relative;
          max-width: 420px;
          margin: 0 auto;
        }

        .profile-image-container {
          position: relative;
          border-radius: 24px;
          overflow: hidden;
          padding: 8px;
          background: linear-gradient(135deg, rgba(6, 182, 212, 0.3), rgba(99, 102, 241, 0.2));
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.6), 0 0 30px rgba(6, 182, 212, 0.2);
          border: 1px solid rgba(6, 182, 212, 0.4);
        }

        .profile-img {
          width: 100%;
          height: 480px;
          object-fit: cover;
          object-position: center 20%;
          border-radius: 18px;
          display: block;
          transition: transform 0.5s ease;
        }

        .profile-image-container:hover .profile-img {
          transform: scale(1.03);
        }

        .floating-stat-card {
          position: absolute;
          display: flex;
          align-items: center;
          gap: 0.85rem;
          padding: 0.75rem 1.1rem;
          background: rgba(10, 13, 20, 0.88);
          border: 1px solid rgba(6, 182, 212, 0.35);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border-radius: 14px;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.5);
          z-index: 10;
        }

        .stat-card-top {
          top: 25px;
          left: -20px;
        }

        .stat-card-bottom {
          bottom: 25px;
          right: -20px;
        }

        @media (max-width: 576px) {
          .stat-card-top { left: 10px; }
          .stat-card-bottom { right: 10px; }
        }

        .stat-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 38px;
          height: 38px;
          border-radius: 10px;
          background: rgba(6, 182, 212, 0.15);
          color: var(--accent-cyan);
        }

        .stat-icon.icon-purple {
          background: rgba(99, 102, 241, 0.15);
          color: #a78bfa;
        }

        .stat-value {
          font-weight: 800;
          font-size: 1.05rem;
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

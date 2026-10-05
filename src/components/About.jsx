import React from 'react';
import { motion } from 'framer-motion';
import { User, Code2, Globe, Brain, Database, Eye, MessageSquareText, CheckCircle2, GraduationCap } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const About = () => {
  const { personal, interests } = portfolioData;

  const iconMap = {
    "Software Engineering": Code2,
    "Web Development": Globe,
    "Artificial Intelligence": Brain,
    "Machine Learning & Data Science": Database,
    "Computer Vision": Eye,
    "Natural Language Processing": MessageSquareText
  };

  return (
    <section id="about" className="section about-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-subtitle">
            <User size={16} />
            <span>About Me</span>
          </div>
          <h2 className="section-title">
            Engineering Code & <span className="gradient-text">Intelligent Systems</span>
          </h2>
          <p className="section-description">
            A comprehensive overview of my academic background, technical focus areas, and development philosophy.
          </p>
        </div>

        <div className="about-grid">
          {/* Left Column: Bio & Core Values */}
          <motion.div 
            className="about-bio-card glass-card"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="card-header">
              <GraduationCap size={24} className="accent-icon" />
              <h3>Academic & Professional Overview</h3>
            </div>

            <p className="about-text">
              {personal.aboutDetailed}
            </p>

            <p className="about-text">
              My engineering approach prioritizes robust software architecture, clean code practices, and the integration of modern machine learning algorithms to solve complex data challenges.
            </p>

            <div className="about-highlights">
              <div className="highlight-item">
                <CheckCircle2 size={18} className="check-icon" />
                <span>Final semester CSE student at Southeast University</span>
              </div>
              <div className="highlight-item">
                <CheckCircle2 size={18} className="check-icon" />
                <span>Strong CGPA standing of 3.84 out of 4.00</span>
              </div>
              <div className="highlight-item">
                <CheckCircle2 size={18} className="check-icon" />
                <span>Published IEEE 28th ICCIT Conference Paper Author</span>
              </div>
              <div className="highlight-item">
                <CheckCircle2 size={18} className="check-icon" />
                <span>Proven project experience in Java, React, Python & ML</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Interests Grid */}
          <motion.div 
            className="interests-grid"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {interests.map((item, index) => {
              const IconComponent = iconMap[item.title] || Code2;
              return (
                <div key={index} className="interest-card glass-card">
                  <div className="interest-icon">
                    <IconComponent size={22} />
                  </div>
                  <h4 className="interest-title">{item.title}</h4>
                  <p className="interest-desc">{item.desc}</p>
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>

      <style>{`
        .about-section {
          background: linear-gradient(180deg, var(--bg-primary) 0%, var(--bg-secondary) 100%);
        }

        .about-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.5rem;
          align-items: stretch;
        }

        @media (min-width: 992px) {
          .about-grid {
            grid-template-columns: 1fr 1fr;
            gap: 2rem;
          }
        }

        .about-bio-card {
          padding: 1.5rem;
          display: flex;
          flex-direction: column;
          gap: 1.1rem;
        }

        @media (min-width: 640px) {
          .about-bio-card {
            padding: 2.25rem;
            gap: 1.25rem;
          }
        }

        .card-header {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin-bottom: 0.25rem;
        }

        .card-header h3 {
          font-size: 1.25rem;
          font-weight: 700;
        }

        @media (min-width: 768px) {
          .card-header h3 {
            font-size: 1.35rem;
          }
        }

        .accent-icon {
          color: var(--accent-primary);
          flex-shrink: 0;
        }

        .about-text {
          color: var(--text-muted);
          font-size: 0.98rem;
          line-height: 1.6;
        }

        @media (min-width: 768px) {
          .about-text {
            font-size: 1.05rem;
            line-height: 1.7;
          }
        }

        .about-highlights {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
          margin-top: 0.5rem;
          padding-top: 1rem;
          border-top: 1px solid var(--border-subtle);
        }

        .highlight-item {
          display: flex;
          align-items: flex-start;
          gap: 0.65rem;
          font-size: 0.9rem;
          color: var(--text-main);
          font-weight: 500;
        }

        .check-icon {
          color: var(--accent-primary);
          flex-shrink: 0;
          margin-top: 2px;
        }

        .interests-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1rem;
        }

        @media (min-width: 480px) {
          .interests-grid {
            grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
            gap: 1.25rem;
          }
        }

        .interest-card {
          padding: 1.25rem;
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .interest-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 42px;
          height: 42px;
          border-radius: 12px;
          background: var(--accent-light);
          border: 1px solid var(--border-subtle);
          color: var(--accent-primary);
        }

        .interest-title {
          font-size: 1rem;
          font-weight: 700;
          color: var(--text-bright);
        }

        .interest-desc {
          font-size: 0.85rem;
          color: var(--text-muted);
          line-height: 1.5;
        }
      `}</style>
    </section>
  );
};

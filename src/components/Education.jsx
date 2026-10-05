import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, MapPin, Calendar, BookOpen, CheckCircle } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const Education = () => {
  const { education } = portfolioData;

  return (
    <section id="education" className="section education-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-subtitle">
            <GraduationCap size={16} />
            <span>Academic Qualifications</span>
          </div>
          <h2 className="section-title">
            Educational <span className="gradient-text">Background</span>
          </h2>
          <p className="section-description">
            My formal computer science and engineering education background at Southeast University.
          </p>
        </div>

        <div className="education-timeline">
          {education.map((item, idx) => (
            <motion.div 
              key={item.id}
              className="education-card glass-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
            >
              <div className="card-badge">
                <GraduationCap size={28} />
              </div>

              <div className="education-main-content">
                <div className="education-top-bar">
                  <div>
                    <h3 className="degree-title">{item.degree}</h3>
                    <div className="institution-name">{item.institution}</div>
                  </div>
                  <div className="cgpa-pill">
                    <Award size={16} />
                    <span>CGPA: {item.cgpa}</span>
                  </div>
                </div>

                <div className="education-meta">
                  <div className="meta-item">
                    <Calendar size={15} />
                    <span>{item.status}</span>
                  </div>
                  <div className="meta-item">
                    <MapPin size={15} />
                    <span>{item.location}</span>
                  </div>
                </div>

                <p className="education-desc">{item.description}</p>

                <div className="education-highlights-box">
                  <h4 className="highlights-title">
                    <BookOpen size={16} /> Key Achievements & Focus
                  </h4>
                  <ul className="highlights-list">
                    {item.highlights.map((h, i) => (
                      <li key={i}>
                        <CheckCircle size={15} className="list-icon" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        .education-section {
          background: var(--bg-primary);
        }

        .education-timeline {
          max-width: 900px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }

        .education-card {
          position: relative;
          padding: 2.25rem;
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        @media (min-width: 768px) {
          .education-card {
            flex-direction: row;
            align-items: flex-start;
          }
        }

        .card-badge {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 58px;
          height: 58px;
          border-radius: 16px;
          background: linear-gradient(135deg, rgba(6, 182, 212, 0.2), rgba(59, 130, 246, 0.2));
          border: 1px solid rgba(6, 182, 212, 0.4);
          color: var(--accent-cyan-light);
          flex-shrink: 0;
        }

        .education-main-content {
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .education-top-bar {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        @media (min-width: 640px) {
          .education-top-bar {
            flex-direction: row;
            justify-content: space-between;
            align-items: flex-start;
          }
        }

        .degree-title {
          font-size: 1.45rem;
          font-weight: 800;
          color: var(--text-bright);
        }

        .institution-name {
          font-size: 1.1rem;
          font-weight: 600;
          color: var(--accent-cyan-light);
        }

        .cgpa-pill {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.45rem 0.9rem;
          border-radius: var(--radius-full);
          background: rgba(16, 185, 129, 0.12);
          border: 1px solid rgba(16, 185, 129, 0.3);
          color: #34d399;
          font-weight: 700;
          font-size: 0.9rem;
          align-self: flex-start;
        }

        .education-meta {
          display: flex;
          flex-wrap: wrap;
          gap: 1.25rem;
          font-size: 0.88rem;
          color: var(--text-subtle);
        }

        .meta-item {
          display: flex;
          align-items: center;
          gap: 0.4rem;
        }

        .education-desc {
          color: var(--text-muted);
          font-size: 1.02rem;
          line-height: 1.6;
        }

        .education-highlights-box {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-sm);
          padding: 1.25rem;
          margin-top: 0.5rem;
        }

        .highlights-title {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.95rem;
          font-weight: 700;
          color: var(--text-bright);
          margin-bottom: 0.75rem;
        }

        .highlights-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.6rem;
        }

        .highlights-list li {
          display: flex;
          align-items: flex-start;
          gap: 0.6rem;
          font-size: 0.92rem;
          color: var(--text-muted);
        }

        .list-icon {
          color: var(--accent-cyan);
          margin-top: 3px;
          flex-shrink: 0;
        }
      `}</style>
    </section>
  );
};

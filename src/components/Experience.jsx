import React from 'react';
import { motion } from 'framer-motion';
import { Award, FileText, Calendar, CheckCircle2, BookOpen, Layers, ExternalLink } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const Experience = () => {
  const { activities } = portfolioData;

  return (
    <section id="activities" className="section experience-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-subtitle">
            <Award size={16} />
            <span>Research & Milestones</span>
          </div>
          <h2 className="section-title">
            Academic Activities & <span className="gradient-text">Research</span>
          </h2>
          <p className="section-description">
            Conference participation, research achievements, and academic leadership initiatives.
          </p>
        </div>

        <div className="activities-timeline">
          {activities.map((item, idx) => (
            <motion.div
              key={item.id}
              className="activity-card glass-card"
              initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
            >
              <div className="activity-icon-col">
                <div className="activity-badge">
                  {item.type === "Research Paper" ? <FileText size={24} /> : <BookOpen size={24} />}
                </div>
              </div>

              <div className="activity-content">
                <div className="activity-header">
                  <div>
                    <span className="type-tag">{item.type}</span>
                    <h3 className="activity-title">{item.title}</h3>
                    <div className="activity-org">{item.organization}</div>
                  </div>
                  <div className="status-badge">{item.status}</div>
                </div>

                <p className="activity-desc">{item.description}</p>

                <div className="activity-highlights">
                  {item.highlights.map((point, pIdx) => (
                    <div key={pIdx} className="point-item">
                      <CheckCircle2 size={16} className="point-icon" />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>

                {item.paperUrl && (
                  <div style={{ marginTop: '1rem' }}>
                    <a
                      href={item.paperUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-secondary"
                      style={{ fontSize: '0.85rem', padding: '0.5rem 1rem' }}
                    >
                      <ExternalLink size={16} />
                      <span>View Published IEEE Xplore Paper</span>
                    </a>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        .experience-section {
          background: linear-gradient(180deg, var(--bg-primary) 0%, var(--bg-secondary) 100%);
        }

        .activities-timeline {
          max-width: 950px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .activity-card {
          padding: 1.25rem;
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        @media (min-width: 640px) {
          .activity-card {
            padding: 2rem;
            gap: 1.5rem;
          }
        }

        @media (min-width: 768px) {
          .activity-card {
            flex-direction: row;
            align-items: flex-start;
          }
        }

        .activity-icon-col {
          flex-shrink: 0;
        }

        .activity-badge {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 48px;
          height: 48px;
          border-radius: 14px;
          background: var(--accent-light);
          border: 1px solid var(--border-subtle);
          color: var(--accent-primary);
        }

        .activity-content {
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 0.85rem;
        }

        .activity-header {
          display: flex;
          flex-direction: column;
          gap: 0.6rem;
        }

        @media (min-width: 640px) {
          .activity-header {
            flex-direction: row;
            justify-content: space-between;
            align-items: flex-start;
          }
        }

        .type-tag {
          font-size: 0.72rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          color: var(--accent-primary);
        }

        .activity-title {
          font-size: clamp(1.15rem, 4vw, 1.35rem);
          font-weight: 800;
          color: var(--text-bright);
        }

        .activity-org {
          font-size: 0.95rem;
          color: var(--text-muted);
          font-weight: 500;
        }

        .status-badge {
          display: inline-flex;
          align-items: center;
          padding: 0.35rem 0.8rem;
          border-radius: var(--radius-full);
          background: var(--accent-light);
          border: 1px solid var(--border-subtle);
          color: var(--accent-primary);
          font-size: 0.8rem;
          font-weight: 700;
          align-self: flex-start;
        }

        .activity-desc {
          color: var(--text-muted);
          font-size: 0.95rem;
          line-height: 1.6;
        }

        .activity-highlights {
          display: flex;
          flex-direction: column;
          gap: 0.55rem;
          padding-top: 0.85rem;
          border-top: 1px solid var(--border-subtle);
        }

        .point-item {
          display: flex;
          align-items: flex-start;
          gap: 0.55rem;
          font-size: 0.88rem;
          color: var(--text-main);
        }

        .point-icon {
          color: var(--accent-primary);
          margin-top: 3px;
          flex-shrink: 0;
        }
      `}</style>
    </section>
  );
};

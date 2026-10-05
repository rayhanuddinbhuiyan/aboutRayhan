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
          gap: 2rem;
        }

        .activity-card {
          padding: 2.25rem;
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
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
          width: 56px;
          height: 56px;
          border-radius: 16px;
          background: linear-gradient(135deg, rgba(99, 102, 241, 0.2), rgba(6, 182, 212, 0.2));
          border: 1px solid rgba(99, 102, 241, 0.4);
          color: var(--accent-indigo);
        }

        .activity-content {
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .activity-header {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        @media (min-width: 640px) {
          .activity-header {
            flex-direction: row;
            justify-content: space-between;
            align-items: flex-start;
          }
        }

        .type-tag {
          font-size: 0.75rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          color: var(--accent-cyan);
        }

        .activity-title {
          font-size: 1.35rem;
          font-weight: 800;
          color: var(--text-bright);
        }

        .activity-org {
          font-size: 1.02rem;
          color: var(--text-muted);
          font-weight: 500;
        }

        .status-badge {
          display: inline-flex;
          align-items: center;
          padding: 0.35rem 0.85rem;
          border-radius: var(--radius-full);
          background: rgba(6, 182, 212, 0.12);
          border: 1px solid rgba(6, 182, 212, 0.3);
          color: var(--accent-cyan-light);
          font-size: 0.82rem;
          font-weight: 700;
          align-self: flex-start;
        }

        .activity-desc {
          color: var(--text-muted);
          font-size: 1rem;
          line-height: 1.6;
        }

        .activity-highlights {
          display: flex;
          flex-direction: column;
          gap: 0.6rem;
          padding-top: 1rem;
          border-top: 1px solid var(--border-subtle);
        }

        .point-item {
          display: flex;
          align-items: flex-start;
          gap: 0.6rem;
          font-size: 0.92rem;
          color: var(--text-main);
        }

        .point-icon {
          color: var(--accent-cyan);
          margin-top: 3px;
          flex-shrink: 0;
        }
      `}</style>
    </section>
  );
};

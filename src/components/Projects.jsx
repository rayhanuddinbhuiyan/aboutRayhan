import React from 'react';
import { motion } from 'framer-motion';
import { FolderGit2, ExternalLink, Code2, Sparkles, CheckCircle2 } from 'lucide-react';
import { GithubIcon as Github } from './Icons';
import { portfolioData } from '../data/portfolioData';

export const Projects = () => {
  const { projects } = portfolioData;

  return (
    <section id="projects" className="section projects-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-subtitle">
            <FolderGit2 size={16} />
            <span>Featured Work</span>
          </div>
          <h2 className="section-title">
            Software & <span className="gradient-text">Research Projects</span>
          </h2>
          <p className="section-description">
            Selected software development projects demonstrating my capabilities in Java, React, Python, Machine Learning, and database design.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="project-card glass-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <div className="project-card-header">
                <div className="project-category">{project.category}</div>
                <div className="project-icon">
                  <Code2 size={22} />
                </div>
              </div>

              <h3 className="project-title">{project.title}</h3>
              <p className="project-desc">{project.description}</p>

              {/* Technologies Badges */}
              <div className="tech-stack-list">
                {project.technologies.map((tech, i) => (
                  <span key={i} className="tech-badge">
                    {tech}
                  </span>
                ))}
              </div>

              {/* Key Features */}
              <div className="features-container">
                <div className="features-title">Key Functionality:</div>
                <ul className="features-list">
                  {project.features.map((feat, fIdx) => (
                    <li key={fIdx}>
                      <CheckCircle2 size={14} className="feat-icon" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Project Card Footer / Action Links */}
              <div className="project-actions">
                {project.repoUrl ? (
                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-secondary project-btn"
                  >
                    <Github size={16} />
                    <span>View Repository</span>
                  </a>
                ) : (
                  <span className="repo-placeholder">Repository Private</span>
                )}

                {project.demoUrl ? (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary project-btn"
                  >
                    <ExternalLink size={16} />
                    <span>Live Demo</span>
                  </a>
                ) : (
                  <button className="btn btn-secondary project-btn disabled" disabled>
                    <Sparkles size={16} />
                    <span>Source Ready</span>
                  </button>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        .projects-section {
          background: var(--bg-primary);
        }

        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
          gap: 2rem;
        }

        .project-card {
          padding: 2rem;
          display: flex;
          flex-direction: column;
          height: 100%;
        }

        .project-card-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 1rem;
        }

        .project-category {
          padding: 0.3rem 0.75rem;
          border-radius: var(--radius-full);
          background: rgba(6, 182, 212, 0.1);
          border: 1px solid rgba(6, 182, 212, 0.25);
          color: var(--accent-cyan);
          font-size: 0.78rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .project-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          border-radius: 10px;
          background: rgba(255, 255, 255, 0.04);
          color: var(--text-bright);
        }

        .project-title {
          font-size: 1.35rem;
          font-weight: 800;
          color: var(--text-bright);
          margin-bottom: 0.75rem;
        }

        .project-desc {
          font-size: 0.95rem;
          color: var(--text-muted);
          line-height: 1.6;
          margin-bottom: 1.25rem;
        }

        .tech-stack-list {
          display: flex;
          flex-wrap: wrap;
          gap: 0.45rem;
          margin-bottom: 1.5rem;
        }

        .tech-badge {
          padding: 0.25rem 0.6rem;
          border-radius: var(--radius-sm);
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid var(--border-subtle);
          font-size: 0.78rem;
          font-weight: 600;
          color: var(--text-main);
          font-family: var(--font-mono);
        }

        .features-container {
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-sm);
          padding: 1rem;
          margin-bottom: 1.5rem;
          margin-top: auto;
        }

        .features-title {
          font-size: 0.82rem;
          font-weight: 700;
          color: var(--text-subtle);
          text-transform: uppercase;
          letter-spacing: 0.05em;
          margin-bottom: 0.5rem;
        }

        .features-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.45rem;
        }

        .features-list li {
          display: flex;
          align-items: flex-start;
          gap: 0.5rem;
          font-size: 0.85rem;
          color: var(--text-muted);
        }

        .feat-icon {
          color: var(--accent-cyan);
          margin-top: 2px;
          flex-shrink: 0;
        }

        .project-actions {
          display: flex;
          gap: 0.75rem;
        }

        .project-btn {
          flex: 1;
          padding: 0.65rem 0.85rem;
          font-size: 0.85rem;
        }

        .project-btn.disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }
      `}</style>
    </section>
  );
};

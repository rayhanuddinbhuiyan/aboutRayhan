import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Wrench, Code2, FileCode, Terminal, Cpu, Layers, Layout, Server, 
  Database, Table, Brain, Sparkles, Eye, MessageSquareText, 
  GitBranch, Code, Cloud, Zap, Globe, CheckCircle2 
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const Skills = () => {
  const { skills } = portfolioData;
  const [activeTab, setActiveTab] = useState('all');

  const iconMap = {
    Code2, FileCode, Terminal, Cpu, Layers, Layout, Server,
    Database, Table, Brain, Sparkles, Eye, MessageSquareText,
    GitBranch, Code, Cloud, Zap, Globe
  };

  const categories = [
    { id: 'all', label: 'All Technologies' },
    { id: 'programming', label: 'Programming' },
    { id: 'web', label: 'Web Engineering' },
    { id: 'database', label: 'Database Systems' },
    { id: 'aiMl', label: 'AI & Data Science' },
    { id: 'tools', label: 'Tools & DevOps' }
  ];

  const categoryMap = {
    programming: { title: "Programming Languages", data: skills.programming },
    web: { title: "Web Development Frameworks", data: skills.web },
    database: { title: "Database Systems", data: skills.database },
    aiMl: { title: "AI & Machine Learning", data: skills.aiMl },
    tools: { title: "Tools & Technologies", data: skills.tools }
  };

  const getFilteredCategories = () => {
    if (activeTab === 'all') {
      return Object.keys(categoryMap);
    }
    return [activeTab];
  };

  return (
    <section id="skills" className="section skills-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-subtitle">
            <Wrench size={16} />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="section-title">
            Skills & <span className="gradient-text">Technologies</span>
          </h2>
          <p className="section-description">
            Core technologies, programming languages, and development tools I work with.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="skills-tabs">
          {categories.map((cat) => (
            <button
              key={cat.id}
              className={`tab-btn ${activeTab === cat.id ? 'active' : ''}`}
              onClick={() => setActiveTab(cat.id)}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Skill Category Cards */}
        <div className="skills-grid">
          {getFilteredCategories().map((catKey) => {
            const cat = categoryMap[catKey];
            return (
              <motion.div 
                key={catKey}
                className="skill-category-card glass-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h3 className="category-title">{cat.title}</h3>

                <div className="skill-items-list">
                  {cat.data.map((skill, idx) => {
                    const IconComp = iconMap[skill.icon] || Code2;
                    return (
                      <div key={idx} className="skill-item">
                        <div className="skill-icon-wrapper">
                          <IconComp size={20} />
                        </div>
                        <div className="skill-details">
                          <div className="skill-name">{skill.name}</div>
                          <div className="skill-level">{skill.level}</div>
                        </div>
                        <CheckCircle2 size={16} className="skill-check" />
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      <style>{`
        .skills-section {
          background: linear-gradient(180deg, var(--bg-secondary) 0%, var(--bg-primary) 100%);
        }

        .skills-tabs {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 0.6rem;
          margin-bottom: 2.5rem;
        }

        .tab-btn {
          padding: 0.55rem 1.2rem;
          border-radius: var(--radius-full);
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid var(--border-subtle);
          color: var(--text-muted);
          font-size: 0.9rem;
          font-weight: 500;
          transition: var(--transition-fast);
        }

        .tab-btn:hover {
          color: var(--text-bright);
          border-color: rgba(6, 182, 212, 0.3);
        }

        .tab-btn.active {
          background: linear-gradient(135deg, rgba(6, 182, 212, 0.2), rgba(59, 130, 246, 0.2));
          border-color: var(--accent-cyan);
          color: var(--accent-cyan-light);
          font-weight: 600;
        }

        .skills-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
          gap: 1.75rem;
        }

        .skill-category-card {
          padding: 1.75rem;
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }

        .category-title {
          font-size: 1.2rem;
          font-weight: 700;
          color: var(--text-bright);
          padding-bottom: 0.75rem;
          border-bottom: 1px solid var(--border-subtle);
        }

        .skill-items-list {
          display: flex;
          flex-direction: column;
          gap: 0.85rem;
        }

        .skill-item {
          display: flex;
          align-items: center;
          gap: 0.85rem;
          padding: 0.65rem 0.85rem;
          border-radius: var(--radius-sm);
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.04);
          transition: var(--transition-fast);
        }

        .skill-item:hover {
          background: rgba(6, 182, 212, 0.08);
          border-color: rgba(6, 182, 212, 0.25);
          transform: translateX(3px);
        }

        .skill-icon-wrapper {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 36px;
          height: 36px;
          border-radius: 8px;
          background: rgba(6, 182, 212, 0.12);
          color: var(--accent-cyan);
          flex-shrink: 0;
        }

        .skill-details {
          flex: 1;
        }

        .skill-name {
          font-weight: 600;
          font-size: 0.95rem;
          color: var(--text-bright);
        }

        .skill-level {
          font-size: 0.78rem;
          color: var(--text-subtle);
        }

        .skill-check {
          color: var(--accent-cyan);
          opacity: 0.7;
        }
      `}</style>
    </section>
  );
};

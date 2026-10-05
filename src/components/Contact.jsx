import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Send, CheckCircle2, AlertCircle, Sparkles, Phone } from 'lucide-react';
import { GithubIcon as Github, LinkedinIcon as Linkedin } from './Icons';
import { portfolioData } from '../data/portfolioData';

export const Contact = () => {
  const { personal } = portfolioData;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [status, setStatus] = useState({
    submitting: false,
    submitted: false,
    error: null
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus({ submitting: false, submitted: false, error: 'Please fill in all required fields.' });
      return;
    }

    setStatus({ submitting: true, submitted: false, error: null });

    // Simulate submission delay
    setTimeout(() => {
      setStatus({
        submitting: false,
        submitted: true,
        error: null
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 800);
  };

  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-subtitle">
            <Mail size={16} />
            <span>Get In Touch</span>
          </div>
          <h2 className="section-title">
            Let's Build Something <span className="gradient-text">Great Together</span>
          </h2>
          <p className="section-description">
            Feel free to reach out for software engineering opportunities, research collaborations, or technical inquiries.
          </p>
        </div>

        <div className="contact-grid">
          {/* Left Column: Direct Contact Info */}
          <motion.div
            className="contact-info-col"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="info-card glass-card">
              <h3>Contact Details</h3>
              <p className="info-intro">
                I am actively seeking software engineering positions, capstone research opportunities, and technical projects.
              </p>

              <div className="contact-links-list">
                <a href={`tel:${personal.phone}`} className="contact-item">
                  <div className="item-icon">
                    <Phone size={20} />
                  </div>
                  <div>
                    <div className="item-label">Phone</div>
                    <div className="item-value">{personal.phone}</div>
                  </div>
                </a>

                <a href={`mailto:${personal.email}`} className="contact-item">
                  <div className="item-icon">
                    <Mail size={20} />
                  </div>
                  <div>
                    <div className="item-label">Email</div>
                    <div className="item-value">{personal.email}</div>
                  </div>
                </a>

                <a href={personal.github} target="_blank" rel="noopener noreferrer" className="contact-item">
                  <div className="item-icon">
                    <Github size={20} />
                  </div>
                  <div>
                    <div className="item-label">GitHub Repository</div>
                    <div className="item-value">github.com/rayhanuddinbhuiyan</div>
                  </div>
                </a>

                <a href={personal.linkedin} target="_blank" rel="noopener noreferrer" className="contact-item">
                  <div className="item-icon">
                    <Linkedin size={20} />
                  </div>
                  <div>
                    <div className="item-label">LinkedIn Profile</div>
                    <div className="item-value">bd.linkedin.com/in/rayhan-uddin-bhuiyan-683174376</div>
                  </div>
                </a>

                <div className="contact-item">
                  <div className="item-icon">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <div className="item-label">Location</div>
                    <div className="item-value">{personal.location}</div>
                  </div>
                </div>
              </div>

              <div className="availability-box">
                <Sparkles size={18} className="avail-icon" />
                <span>{personal.availability}</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Contact Form UI */}
          <motion.div
            className="contact-form-col"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="form-card glass-card">
              <h3>Send Me a Message</h3>

              {status.submitted ? (
                <div className="success-message">
                  <CheckCircle2 size={42} className="success-icon" />
                  <h4>Message Sent Successfully!</h4>
                  <p>
                    Thank you for reaching out, {personal.shortName} will get back to you shortly.
                  </p>
                  <button
                    className="btn btn-secondary"
                    onClick={() => setStatus({ submitting: false, submitted: false, error: null })}
                    style={{ marginTop: '1rem' }}
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="contact-form">
                  {status.error && (
                    <div className="error-alert">
                      <AlertCircle size={18} />
                      <span>{status.error}</span>
                    </div>
                  )}

                  <div className="form-group">
                    <label htmlFor="name">Your Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="e.g. John Doe"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email">Your Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="e.g. john@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="subject">Subject</label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      placeholder="e.g. Software Engineering Opportunity"
                      value={formData.subject}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="message">Message *</label>
                    <textarea
                      id="message"
                      name="message"
                      rows="4"
                      placeholder="Type your message here..."
                      value={formData.message}
                      onChange={handleChange}
                      required
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="btn btn-primary submit-btn"
                    disabled={status.submitting}
                  >
                    {status.submitting ? (
                      <span>Sending...</span>
                    ) : (
                      <>
                        <Send size={18} />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>

                  <div className="form-note">
                    * Note: This form interface validates input locally. Email service backend can be integrated via EmailJS or Web3Forms.
                  </div>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        .contact-section {
          background: var(--bg-secondary);
        }

        .contact-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2rem;
        }

        @media (min-width: 992px) {
          .contact-grid {
            grid-template-columns: 0.9fr 1.1fr;
          }
        }

        .info-card, .form-card {
          padding: 2.25rem;
          height: 100%;
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }

        .info-card h3, .form-card h3 {
          font-size: 1.45rem;
          font-weight: 800;
          color: var(--text-bright);
        }

        .info-intro {
          color: var(--text-muted);
          font-size: 1rem;
          line-height: 1.6;
        }

        .contact-links-list {
          display: flex;
          flex-direction: column;
          gap: 1.1rem;
          margin-top: 0.5rem;
        }

        .contact-item {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 0.85rem 1rem;
          border-radius: var(--radius-sm);
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid var(--border-subtle);
          transition: var(--transition-fast);
        }

        .contact-item:hover {
          background: rgba(6, 182, 212, 0.08);
          border-color: rgba(6, 182, 212, 0.3);
          transform: translateX(4px);
        }

        .item-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 42px;
          height: 42px;
          border-radius: 10px;
          background: rgba(6, 182, 212, 0.12);
          color: var(--accent-cyan);
          flex-shrink: 0;
        }

        .item-label {
          font-size: 0.78rem;
          color: var(--text-subtle);
          font-weight: 600;
          text-transform: uppercase;
        }

        .item-value {
          font-size: 0.95rem;
          font-weight: 600;
          color: var(--text-bright);
        }

        .availability-box {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding: 0.85rem 1.1rem;
          border-radius: var(--radius-sm);
          background: rgba(16, 185, 129, 0.1);
          border: 1px solid rgba(16, 185, 129, 0.3);
          color: #34d399;
          font-size: 0.88rem;
          font-weight: 600;
          margin-top: auto;
        }

        .avail-icon {
          flex-shrink: 0;
        }

        .contact-form {
          display: flex;
          flex-direction: column;
          gap: 1.1rem;
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
        }

        .form-group label {
          font-size: 0.88rem;
          font-weight: 600;
          color: var(--text-main);
        }

        .form-group input, .form-group textarea {
          width: 100%;
          padding: 0.75rem 1rem;
          border-radius: var(--radius-sm);
          background: rgba(10, 13, 20, 0.6);
          border: 1px solid var(--border-subtle);
          color: var(--text-bright);
          font-family: inherit;
          font-size: 0.95rem;
          transition: var(--transition-fast);
        }

        .form-group input:focus, .form-group textarea:focus {
          outline: none;
          border-color: var(--accent-cyan);
          box-shadow: 0 0 12px rgba(6, 182, 212, 0.25);
        }

        .submit-btn {
          width: 100%;
          margin-top: 0.5rem;
        }

        .form-note {
          font-size: 0.78rem;
          color: var(--text-subtle);
          text-align: center;
          line-height: 1.4;
        }

        .error-alert {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          padding: 0.75rem;
          border-radius: var(--radius-sm);
          background: rgba(239, 68, 68, 0.15);
          border: 1px solid rgba(239, 68, 68, 0.4);
          color: #fca5a5;
          font-size: 0.88rem;
        }

        .success-message {
          text-align: center;
          padding: 2.5rem 1rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1rem;
        }

        .success-icon {
          color: #10b981;
        }

        .success-message h4 {
          font-size: 1.35rem;
        }

        .success-message p {
          color: var(--text-muted);
          max-width: 400px;
        }
      `}</style>
    </section>
  );
};

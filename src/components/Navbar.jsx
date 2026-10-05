import React, { useState, useEffect } from 'react';
import { Menu, X, Code2, Sparkles, User, GraduationCap, Wrench, FolderGit2, Award, Mail } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navLinks = [
    { id: 'home', label: 'Home', icon: Sparkles },
    { id: 'about', label: 'About', icon: User },
    { id: 'education', label: 'Education', icon: GraduationCap },
    { id: 'skills', label: 'Skills', icon: Wrench },
    { id: 'projects', label: 'Projects', icon: FolderGit2 },
    { id: 'activities', label: 'Activities', icon: Award },
    { id: 'contact', label: 'Contact', icon: Mail }
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Active section highlight based on scroll position
      const sections = navLinks.map(link => document.getElementById(link.id));
      const scrollPosition = window.scrollY + 120;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navLinks[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (id) => {
    setActiveSection(id);
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`navbar-header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container navbar-container">
        {/* Logo / Name */}
        <a 
          href="#home" 
          className="navbar-logo"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick('home');
          }}
        >
          <span className="logo-icon"><Code2 size={22} /></span>
          <span className="logo-text">Rayhan<span className="logo-accent">.bhuiyan</span></span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="desktop-nav" aria-label="Main navigation">
          {navLinks.map((link) => {
            const Icon = link.icon;
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={`#${link.id}`}
                className={`nav-link ${isActive ? 'active' : ''}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.id);
                }}
              >
                <Icon size={15} className="link-icon" />
                {link.label}
              </a>
            );
          })}
        </nav>

        {/* CTA Button */}
        <div className="navbar-action">
          <a 
            href="#contact" 
            className="btn btn-primary nav-cta"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('contact');
            }}
          >
            Hire Me
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          className="mobile-toggle-btn"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? "Close menu" : "Open navigation menu"}
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Navigation Drawer */}
      <div className={`mobile-nav-drawer ${mobileMenuOpen ? 'open' : ''}`}>
        <nav className="mobile-nav-list">
          {navLinks.map((link) => {
            const Icon = link.icon;
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={`#${link.id}`}
                className={`mobile-nav-link ${isActive ? 'active' : ''}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.id);
                }}
              >
                <Icon size={18} />
                <span>{link.label}</span>
              </a>
            );
          })}
          <div className="mobile-drawer-footer">
            <a 
              href="#contact" 
              className="btn btn-primary"
              style={{ width: '100%', marginTop: '1rem' }}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('contact');
              }}
            >
              Get In Touch
            </a>
          </div>
        </nav>
      </div>

      <style>{`
        .navbar-header {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          height: 76px;
          display: flex;
          align-items: center;
          transition: all 0.3s ease;
          background: transparent;
        }

        .navbar-header.scrolled {
          height: 68px;
          background: var(--bg-nav);
          backdrop-filter: blur(14px);
          -webkit-backdrop-filter: blur(14px);
          border-bottom: 1px solid var(--border-subtle);
          box-shadow: 0 4px 20px rgba(0,0,0,0.4);
        }

        .navbar-container {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
        }

        .navbar-logo {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          font-size: 1.25rem;
          font-weight: 800;
          color: var(--text-bright);
        }

        .logo-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 36px;
          height: 36px;
          border-radius: 10px;
          background: linear-gradient(135deg, rgba(6, 182, 212, 0.2), rgba(59, 130, 246, 0.2));
          border: 1px solid rgba(6, 182, 212, 0.4);
          color: var(--accent-cyan-light);
        }

        .logo-accent {
          color: var(--accent-cyan);
          font-weight: 500;
        }

        .desktop-nav {
          display: none;
          align-items: center;
          gap: 0.3rem;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid var(--border-subtle);
          padding: 0.35rem 0.6rem;
          border-radius: var(--radius-full);
        }

        @media (min-width: 992px) {
          .desktop-nav {
            display: flex;
          }
        }

        .nav-link {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          padding: 0.45rem 0.85rem;
          font-size: 0.88rem;
          font-weight: 500;
          color: var(--text-muted);
          border-radius: var(--radius-full);
          transition: var(--transition-fast);
        }

        .nav-link:hover {
          color: var(--text-bright);
          background: rgba(255, 255, 255, 0.06);
        }

        .nav-link.active {
          color: #040914;
          background: var(--accent-cyan-light);
          font-weight: 600;
        }

        .nav-link.active .link-icon {
          color: #040914;
        }

        .navbar-action {
          display: none;
        }

        @media (min-width: 768px) {
          .navbar-action {
            display: block;
          }
        }

        .nav-cta {
          padding: 0.55rem 1.25rem;
          font-size: 0.88rem;
        }

        .mobile-toggle-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--text-bright);
          padding: 0.4rem;
          border-radius: 8px;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid var(--border-subtle);
        }

        @media (min-width: 992px) {
          .mobile-toggle-btn {
            display: none;
          }
        }

        .mobile-nav-drawer {
          position: fixed;
          top: 68px;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(10, 13, 20, 0.96);
          backdrop-filter: blur(20px);
          z-index: 999;
          transform: translateY(-100%);
          opacity: 0;
          visibility: hidden;
          transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1);
          padding: 1.5rem;
        }

        .mobile-nav-drawer.open {
          transform: translateY(0);
          opacity: 1;
          visibility: visible;
        }

        .mobile-nav-list {
          display: flex;
          flex-direction: column;
          gap: 0.6rem;
        }

        .mobile-nav-link {
          display: flex;
          align-items: center;
          gap: 0.85rem;
          padding: 0.85rem 1.1rem;
          border-radius: var(--radius-md);
          color: var(--text-main);
          font-weight: 500;
          font-size: 1.05rem;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid var(--border-subtle);
        }

        .mobile-nav-link.active {
          background: rgba(6, 182, 212, 0.15);
          border-color: var(--accent-cyan);
          color: var(--accent-cyan-light);
          font-weight: 600;
        }
      `}</style>
    </header>
  );
};

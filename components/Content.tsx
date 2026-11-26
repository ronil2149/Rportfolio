'use client';

import { useState } from 'react';
import { ProjectsFilter } from './ProjectsFilter';
import { PROJECTS } from '@/lib/projectsData';

const sforceRepositoryUrl = PROJECTS.find((project) => project.id === 'sforceservices')?.githubUrl;

export function Content() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText('ronilghoghari2149@gmail.com');
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    } catch {
      // Fallback
      window.location.href = 'mailto:ronilghoghari2149@gmail.com';
    }
  };

  return (
    <main>
      <section id="hero">
        <h1 className="drop">
          <span>Ronil</span>
          <em>Ghoghari</em>
        </h1>

        <p className="hero-note">
          Full-stack developer in Toronto with 3+ years of experience building and supporting web applications — from diagnosing browser-side rendering glitches in React down to tracing REST endpoints and SQL database records. Shipped production systems across TypeScript, React, Next.js, Node.js, Java, and SQL.
        </p>

        <div className="hero-actions">
          <a
            href="/Ronil_dev.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="hero-btn hero-btn--primary"
          >
            <span>View Resume</span>
            <span className="hero-btn-arrow">↗</span>
          </a>
          <a href="#contact" className="hero-btn hero-btn--secondary">
            <span>Hire Me</span>
            <span className="hero-btn-arrow">↓</span>
          </a>
          <button
            type="button"
            onClick={handleCopyEmail}
            className={`hero-btn hero-btn--copy ${copied ? 'hero-btn--copied' : ''}`}
            aria-label="Copy email address to clipboard"
          >
            {copied ? (
              <>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                <span>Email Copied!</span>
              </>
            ) : (
              <>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                  <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                </svg>
                <span>Copy Email</span>
              </>
            )}
          </button>
        </div>

        <ul className="hero-meta">
          <li>
            <span className="badge">Status</span>
            <b>Available Immediately</b> · Full-Stack / Frontend Developer · Toronto, ON.
          </li>
          <li>
            <span className="badge">Experience</span>
            Web &amp; Frontend Support Developer at{' '}
            <a className="badge-link" href="#experience" title="View Work Experience proof">
              <b>Ambrosia Natural Foods</b>
            </a>{' '}
            (Toronto, ON).
          </li>
          <li>
            <span className="badge">Live Apps</span>
            Shipped{' '}
            <a className="badge-link" href="#live-apps" title="View LabelCropper">
              <b>LabelCropper</b>
            </a>{' '}
            (50K+ monthly visits),{' '}
            <a className="badge-link" href="#live-apps" title="View RevKit">
              <b>RevKit</b>
            </a>{' '}
            (1,023+ indexed tools), and{' '}
            <a className="badge-link" href="#live-apps" title="View Videlto">
              <b>Videlto</b>
            </a>{' '}
            (Commercial Ad Studio).
          </li>
          <li>
            <span className="badge">Education</span>
            <a className="badge-link" href="#humber" title="View Humber College IT Solutions projects">
              Postgraduate in IT Solutions (Humber College, Toronto)
            </a>{' '}
            •{' '}
            <a className="badge-link" href="#btech" title="View B.Tech Computer Engineering projects">
              B.Tech in Computer Engineering (Uka Tarsadia University)
            </a>
            .
          </li>
        </ul>

        <div className="hero-contact">
          <a href="tel:+14378307427">+1 (437) 830-7427</a>
          <span className="hero-contact-loc">Toronto, ON</span>
          <a href="https://github.com/ronil2149" target="_blank" rel="noopener noreferrer">
            GitHub ↗
          </a>
          <a href="https://www.linkedin.com/in/ronil-ghoghari" target="_blank" rel="noopener noreferrer">
            LinkedIn ↗
          </a>
        </div>
        <p className="cue">scroll — explore verifiable projects below</p>
      </section>

      <section id="work">
        {/* Invisible anchor elements for direct deep-linking */}
        <div id="live-apps" tabIndex={-1} style={{ position: 'relative', top: '-1rem' }} />
        <div id="humber" tabIndex={-1} style={{ position: 'relative', top: '-1rem' }} />
        <div id="btech" tabIndex={-1} style={{ position: 'relative', top: '-1rem' }} />

        <h2>Things I have built</h2>
        <p className="lede">
          Every project below is real code you can test and inspect. Filter by category or jump directly to live deployments and GitHub repositories.
        </p>

        {/* Interactive Filterable Projects Grid */}
        <ProjectsFilter />

      </section>

      {/* Scannable Work Experience Snapshot for Recruiters */}
      <section id="experience" className="experience-snapshot-section">
        <div className="section-header-split">
          <div>
            <h2>Work Experience Snapshot</h2>
            <p className="lede">
              Three years of hands-on experience keeping production web applications fast, reliable, and bug-free.
            </p>
          </div>
        </div>

        <div className="experience-timeline">
          {/* Ambrosia Natural Foods */}
          <article className="experience-item">
            <div className="experience-item-header">
              <div>
                <span className="experience-company-badge">Toronto, ON</span>
                <h3 className="experience-role">Web &amp; Frontend Support Developer</h3>
                <h4 className="experience-company">Ambrosia Natural Foods</h4>
              </div>
              <span className="experience-period">May 2025 – Jun 2026</span>
            </div>
            <ul className="experience-bullets">
              <li>
                Resolved 150+ production issues on the customer storefront, fixing JavaScript runtime errors, broken cart state, and CSS layout defects using Chrome DevTools.
              </li>
              <li>
                Traced full-stack data discrepancies by inspecting browser network calls, testing REST endpoints in Postman, and querying SQL database records directly.
              </li>
              <li>
                Documented troubleshooting procedures into team runbooks that reduced repeat escalations and brought checkout pages into Ontario AODA compliance.
              </li>
            </ul>
          </article>

          {/* Uplers */}
          <article className="experience-item">
            <div className="experience-item-header">
              <div>
                <span className="experience-company-badge">Remote</span>
                <h3 className="experience-role">Web &amp; Email Developer</h3>
                <h4 className="experience-company">Uplers</h4>
              </div>
              <span className="experience-period">Feb 2022 – Jun 2023</span>
            </div>
            <ul className="experience-bullets">
              <li>
                Built responsive marketing landing pages and modular UI components from Figma designs using JavaScript, HTML5, CSS3, and Bootstrap.
              </li>
              <li>
                Developed cross-client HTML email templates tested across 30+ email clients, resolving Outlook rendering inconsistencies.
              </li>
            </ul>
          </article>

          {/* SForce Services */}
          <article className="experience-item">
            <div className="experience-item-header">
              <div>
                <span className="experience-company-badge">Surat, India</span>
                <h3 className="experience-role">Full-Stack Developer</h3>
                <h4 className="experience-company">SForce Services</h4>
              </div>
              <span className="experience-period">Jul 2021 – Jan 2022</span>
            </div>
            <ul className="experience-bullets">
              <li>
                Built recruitment portals and candidate onboarding workflows with JavaScript, Bootstrap, and Node.js REST APIs.
              </li>
              <li>
                Automated candidate stage tracking and document handling across 20+ corporate clients, saving 15+ hours of manual paperwork each week.
              </li>
            </ul>
            {sforceRepositoryUrl && (
              <div className="project-links">
                <a className="code-link" href={sforceRepositoryUrl} target="_blank" rel="noopener noreferrer">
                  GitHub repository ↗
                </a>
              </div>
            )}
          </article>

          {/* K.M. Soft */}
          <article className="experience-item">
            <div className="experience-item-header">
              <div>
                <span className="experience-company-badge">Gujarat, India</span>
                <h3 className="experience-role">Full-Stack Developer</h3>
                <h4 className="experience-company">K.M. Soft</h4>
              </div>
              <span className="experience-period">Jan 2021 – Jun 2021</span>
            </div>
            <ul className="experience-bullets">
              <li>
                Created reusable Angular components with reactive forms and RxJS observable pipelines.
              </li>
              <li>
                Developed Node.js and Express REST APIs connecting core platform workflows to MongoDB, optimizing frequent database queries by 30%.
              </li>
            </ul>
          </article>
        </div>
      </section>

      <section id="kit">
        <h2>Technical Toolkit</h2>
        <p className="lede">
          Core technologies, frameworks, databases, and diagnostics tools I deploy day-to-day.
        </p>
        <dl className="kit">
          <div>
            <dt>Languages</dt>
            <dd>TypeScript, JavaScript (ES6+), Java 17, SQL (PostgreSQL, MySQL), Python, HTML5, CSS3/SCSS</dd>
          </div>
          <div>
            <dt>Frontend</dt>
            <dd>React 18/19, Next.js (App Router), Angular, Redux Toolkit, Tailwind CSS, Bootstrap, Web Workers</dd>
          </div>
          <div>
            <dt>Backend &amp; APIs</dt>
            <dd>Node.js, Express.js, Java Servlets, RESTful APIs, JWT / Session Auth, JDBC, DAO Pattern, Maven</dd>
          </div>
          <div>
            <dt>Databases &amp; Big Data</dt>
            <dd>PostgreSQL, MySQL, MongoDB, Supabase, Redis, Neo4j, Apache Spark, HDFS, Hive</dd>
          </div>
          <div>
            <dt>DevOps, Cloud &amp; CI/CD</dt>
            <dd>Docker, Git, GitHub Actions CI/CD, AWS (S3, EC2), Apache Tomcat, Cloudflare, Vercel, Render</dd>
          </div>
          <div>
            <dt>Testing &amp; Diagnostics</dt>
            <dd>Postman, Chrome DevTools Network Triage, Jest, Playwright, Cypress, Lighthouse, Root-Cause Analysis, SQL Auditing</dd>
          </div>
          <div>
            <dt>Standards &amp; Accessibility</dt>
            <dd>Ontario AODA Compliance, WCAG 2.1 AA, Core Web Vitals, Semantic HTML5, Cross-Browser Compatibility</dd>
          </div>
          <div>
            <dt>Methodology &amp; Workflow</dt>
            <dd>Agile / Scrum, GitHub PRs &amp; Code Reviews, Incident Runbooks, Live Production Defect Triage</dd>
          </div>
        </dl>
      </section>

      <section id="contact">
        <h2>Say hello</h2>
        <p className="lede">
          I am actively interviewing for Full-Stack, Frontend, and Software Developer roles in Toronto, ON.
        </p>

        {/* Fixed Spacing & Clear Label */}
        <div className="contact-status">
          <span className="contact-status-label">Work Authorization:</span>
          <b className="contact-status-value">Open Work Permit (PGWP)</b>
          <span className="contact-status-desc">— eligible to work full-time across Canada with no employer sponsorship required.</span>
        </div>

        <div className="contact-primary-row">
          <a className="big" href="mailto:ronilghoghari2149@gmail.com">
            ronilghoghari2149@gmail.com
          </a>
          <button
            type="button"
            onClick={handleCopyEmail}
            className={`contact-copy-btn ${copied ? 'contact-copy-btn--copied' : ''}`}
            aria-label="Copy email address"
          >
            {copied ? (
              <>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                <span>Copied!</span>
              </>
            ) : (
              <>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                  <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                </svg>
                <span>Copy Email</span>
              </>
            )}
          </button>
        </div>

        <div className="contact-phone">
          <a href="tel:+14378307427">+1 (437) 830-7427</a>
          <span>•</span>
          <span>Toronto, ON</span>
        </div>

        <ul className="links">
          <li>
            <a href="https://github.com/ronil2149" target="_blank" rel="noopener noreferrer">
              GitHub ↗
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/ronil-ghoghari" target="_blank" rel="noopener noreferrer">
              LinkedIn ↗
            </a>
          </li>
          <li>
            <a href="/Ronil_dev.pdf" target="_blank" rel="noopener noreferrer">
              Resume (PDF) ↗
            </a>
          </li>
          <li>
            <a href="#live-apps">Live Apps</a>
          </li>
          <li>
            <a href="#experience">Work Experience</a>
          </li>
          <li>
            <a href="#humber">Humber College</a>
          </li>
          <li>
            <a href="#btech">B.Tech Engineering</a>
          </li>
        </ul>
      </section>
    </main>
  );
}

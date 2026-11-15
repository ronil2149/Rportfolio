import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Software & Web Development — Ronil Ghoghari',
  description: 'Full-stack, backend, frontend and web development projects by Ronil Ghoghari.',
  openGraph: {
    title: 'Ronil Ghoghari — Full-stack developer, Toronto',
    description: 'Full-stack developer in Toronto. Java, Node, React and SQL. I build web applications and find out why they break.',
    type: 'website',
    locale: 'en_CA',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ronil Ghoghari',
    description: 'Full-stack developer in Toronto. Java, Node, React and SQL. I build web applications and find out why they break.',
  },
  robots: { index: true, follow: true },
};

export default function SoftwareProjectsPage() {
  return (
    <main className="project-page">
      <section id="work" className="project-page-section">
        <div className="project-page-nav">
          <Link className="project-back" href="/#work">
            ← Back to All Portfolio Projects
          </Link>
          <span>5 selected projects</span>
        </div>
        <header className="project-page-hero">
          <div className="project-page-eyebrow">
            <span>01</span>
            <span>Deep Dive Hub</span>
          </div>
          <h1 className="project-page-title">Software &amp; Web Development</h1>
          <p className="project-page-description">
            Full-stack applications, APIs, database-backed architectures, frontend interfaces, and containerized cloud deployments.
          </p>
        </header>

        <div className="strata project-page-projects">
          {/* Label Cropper */}
          <article className="seam project-card">
            <div className="project-card-header">
              <span className="category-badge category-badge--live-apps">Production Live App</span>
              <h3>
                <a href="https://lablecropper.com/" target="_blank" rel="noopener noreferrer">
                  LabelCropper — High-Volume Thermal Shipping Label Processor
                </a>
              </h3>
              <p className="stack">React 19 · TypeScript · Node.js · Express.js · Supabase Auth · Web Workers · PDF-Lib · WCAG 2.1 AA</p>
              <div className="project-preview-frame">
                <img
                  src="/images/projects/labelcropper.svg"
                  alt="LabelCropper Interface Preview"
                  className="project-preview-img"
                  loading="lazy"
                />
              </div>
              <div className="project-links">
                <a className="live" href="https://lablecropper.com/" target="_blank" rel="noopener noreferrer">
                  Open running app →
                </a>
                <a className="code-link" href="https://github.com/PrayxisTechnologies/LABLECROPPER" target="_blank" rel="noopener noreferrer">
                  GitHub repository ↗
                </a>
              </div>
            </div>
            <div className="project-card-details">
              <div className="project-detail-section">
                <span className="detail-label">Problem:</span>
                <p>
                  E-commerce sellers on Meesho, Flipkart, and Amazon receive mixed A4 PDF manifests containing tax invoices and thermal shipping labels. Manually cropping and filtering thermal 4x6 labels was slow (3–5 minutes per batch) and risked exposing customer PII (addresses, phone numbers, GSTIN) to third-party cloud servers.
                </p>
              </div>
              <div className="project-detail-section">
                <span className="detail-label">Architecture &amp; Trade-offs:</span>
                <p>
                  Offloaded 100% of PDF parsing, invoice stripping, and barcode isolation to browser Web Workers via PDF-Lib. Customer shipping data never touches server infrastructure, eliminating server compute bills entirely while protecting merchant compliance.
                </p>
              </div>
              <div className="project-detail-section project-detail-section--result">
                <span className="detail-label">Quantified Result:</span>
                <p>
                  <strong>Processes 50,000+ monthly visits; reduced batch processing latency by 40% (under 2s for 50 pages); $0 server compute bills; 90+ Lighthouse score.</strong>
                </p>
              </div>
            </div>
          </article>

          {/* RevKit */}
          <article className="seam project-card">
            <div className="project-card-header">
              <span className="category-badge category-badge--live-apps">Production Live App</span>
              <h3>
                <a href="https://revkit.online/" target="_blank" rel="noopener noreferrer">
                  RevKit — Reverse Engineering &amp; Security Tools Directory
                </a>
              </h3>
              <p className="stack">TypeScript · HTML5 · CSS3 · GitHub REST API · GitHub Actions CI/CD · Edge CDN</p>
              <div className="project-preview-frame">
                <img
                  src="/images/projects/revkit.svg"
                  alt="RevKit Directory Interface Preview"
                  className="project-preview-img"
                  loading="lazy"
                />
              </div>
              <div className="project-links">
                <a className="live" href="https://revkit.online/" target="_blank" rel="noopener noreferrer">
                  Open running app →
                </a>
                <a className="code-link" href="https://github.com/ronil2149" target="_blank" rel="noopener noreferrer">
                  GitHub profile ↗
                </a>
              </div>
            </div>
            <div className="project-card-details">
              <div className="project-detail-section">
                <span className="detail-label">Problem:</span>
                <p>
                  Reverse engineers and security researchers lacked a centralized, high-signal discovery platform for decompilers, debuggers, and binary analysis frameworks, relying instead on stale awesome-lists and forum threads.
                </p>
              </div>
              <div className="project-detail-section">
                <span className="detail-label">Architecture &amp; Trade-offs:</span>
                <p>
                  Built as a zero-database, static edge-delivered web platform. Automated GitHub Actions cron workflows index repositories, stars, and release metadata into a normalized JSON index, powering instant client-side filtering without database latency.
                </p>
              </div>
              <div className="project-detail-section project-detail-section--result">
                <span className="detail-label">Quantified Result:</span>
                <p>
                  <strong>Curates 1,023+ indexed tools across 13 categories; 100% automated CI/CD synchronization; sub-100ms global cold load; 100/100 Core Web Vitals.</strong>
                </p>
              </div>
            </div>
          </article>

          {/* Device Protection Portal */}
          <article className="seam project-card">
            <div className="project-card-header">
              <span className="category-badge category-badge--humber">Humber College Capstone</span>
              <h3>
                <a href="https://github.com/ronil2149/j2ee-device-protection-project" target="_blank" rel="noopener noreferrer">
                  Device Protection Portal — Hardware Warranty &amp; Claims Management
                </a>
              </h3>
              <p className="stack">Java 17 · J2EE Servlets · JSP/JSTL · JDBC · MySQL · Apache Tomcat · Docker · Render · Maven</p>
              <div className="project-preview-frame">
                <img
                  src="/images/projects/device-protection.svg"
                  alt="Device Protection Portal Architecture Preview"
                  className="project-preview-img"
                  loading="lazy"
                />
              </div>
              <div className="project-links">
                <a className="live" href="https://j2ee-device-protection-project.onrender.com" target="_blank" rel="noopener noreferrer">
                  Open running app →
                </a>
                <a className="code-link" href="https://github.com/ronil2149/j2ee-device-protection-project" target="_blank" rel="noopener noreferrer">
                  GitHub repository ↗
                </a>
              </div>
            </div>
            <div className="project-card-details">
              <div className="project-detail-section">
                <span className="detail-label">Problem:</span>
                <p>
                  Hardware warranty providers need secure, multi-tenant workflows for customers to register devices and submit repair claims, while adjusters audit evidence and generate compliance reports.
                </p>
              </div>
              <div className="project-detail-section">
                <span className="detail-label">Architecture &amp; Trade-offs:</span>
                <p>
                  Built with Servlet MVC and a DAO persistence layer over JDBC with connection pooling. Used PreparedStatements to prevent SQL injection and Servlet Authentication Filters for Role-Based Access Control (RBAC). Packaged as a multi-stage Docker container deployed on Render.
                </p>
              </div>
              <div className="project-detail-section project-detail-section--result">
                <span className="detail-label">Quantified Result:</span>
                <p>
                  <strong>End-to-end device warranty registration and claim workflow; zero runtime container memory leaks under load testing; 100% reproducible Docker deployment.</strong>
                </p>
              </div>
            </div>
          </article>

          {/* RentHub */}
          <article className="seam project-card">
            <div className="project-card-header">
              <span className="category-badge category-badge--humber">Humber College Project</span>
              <h3>
                <a href="https://github.com/ronil2149/Rent_hub" target="_blank" rel="noopener noreferrer">
                  RentHub — Peer-to-Peer Rental Marketplace
                </a>
              </h3>
              <p className="stack">TypeScript · Next.js · React · Node.js · Express · MongoDB · JWT · Tailwind CSS</p>
              <div className="project-links">
                <a className="code-link" href="https://github.com/ronil2149/Rent_hub" target="_blank" rel="noopener noreferrer">
                  GitHub repository ↗
                </a>
              </div>
            </div>
            <div className="project-card-details">
              <div className="project-detail-section">
                <span className="detail-label">Problem:</span>
                <p>
                  Equipment rental marketplaces suffer from inventory race conditions, double-booking overlapping dates, and untrusted peer-to-peer user communications.
                </p>
              </div>
              <div className="project-detail-section">
                <span className="detail-label">Architecture &amp; Trade-offs:</span>
                <p>
                  Engineered rental availability scheduling algorithms with date-range overlap validation that prevents conflicting bookings. Built stateless JWT authentication with secure HTTP-only cookies and role-aware middleware for user and admin privileges.
                </p>
              </div>
              <div className="project-detail-section project-detail-section--result">
                <span className="detail-label">Quantified Result:</span>
                <p>
                  <strong>Zero double-booking concurrency bugs during stress testing; sub-200ms API response times for catalog search and booking requests.</strong>
                </p>
              </div>
            </div>
          </article>

          {/* Angular SPA */}
          <article className="seam project-card">
            <div className="project-card-header">
              <span className="category-badge category-badge--humber">Humber College Project</span>
              <h3>
                <a href="https://github.com/ronil2149/angular_assignment" target="_blank" rel="noopener noreferrer">
                  Angular 19 SPA — Reactive Forms &amp; RxJS State
                </a>
              </h3>
              <p className="stack">Angular 19 · TypeScript · RxJS · HttpClient · Reactive Forms · Vercel</p>
              <div className="project-links">
                <a className="live" href="https://angular-assignment-umber.vercel.app" target="_blank" rel="noopener noreferrer">
                  Open running app →
                </a>
                <a className="code-link" href="https://github.com/ronil2149/angular_assignment" target="_blank" rel="noopener noreferrer">
                  GitHub repository ↗
                </a>
              </div>
            </div>
            <div className="project-card-details">
              <div className="project-detail-section">
                <span className="detail-label">Problem:</span>
                <p>
                  Demonstrating enterprise-grade reactive form validation and observable stream handling in modern Angular with standalone routed components.
                </p>
              </div>
              <div className="project-detail-section">
                <span className="detail-label">Architecture &amp; Trade-offs:</span>
                <p>
                  Utilized Angular standalone components with RxJS observable pipelines for asynchronous data streams and declarative form validation schemas with clean error boundaries.
                </p>
              </div>
              <div className="project-detail-section project-detail-section--result">
                <span className="detail-label">Quantified Result:</span>
                <p>
                  <strong>100% typed data flows, zero runtime memory leaks from unhandled subscriptions, instant edge deployment on Vercel.</strong>
                </p>
              </div>
            </div>
          </article>
        </div>

        <footer className="project-page-footer">
          <Link className="project-footer-back" href="/#work">
            ← Back to All Portfolio Projects
          </Link>
          <Link className="project-footer-next" href="/projects/data-ai">
            <span>Next category</span>
            <strong>Data, AI &amp; Analytics Hub →</strong>
          </Link>
        </footer>
      </section>
    </main>
  );
}

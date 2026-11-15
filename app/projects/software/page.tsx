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
            Full-stack web applications, REST APIs, database persistence layers, and containerized deployments.
          </p>
        </header>

        <div className="strata project-page-projects">
          {/* 1. Label Cropper */}
          <article className="seam project-card">
            <div className="project-card-header">
              <span className="category-badge category-badge--live-apps">Production Live App</span>
              <h3>
                <a href="https://lablecropper.com/" target="_blank" rel="noopener noreferrer">
                  LabelCropper — High-Volume Shipping Label Processor
                </a>
              </h3>
              <p className="stack">React 19 · TypeScript · Node.js · Express.js · Supabase Auth · Web Workers · PDF-Lib</p>
              <div className="project-links">
                <a className="live" href="https://lablecropper.com/" target="_blank" rel="noopener noreferrer">
                  Open running app →
                </a>
                <a className="code-link" href="https://github.com/PrayxisTechnologies/LABLECROPPER" target="_blank" rel="noopener noreferrer">
                  GitHub repository ↗
                </a>
              </div>
            </div>
            <div className="project-card-body">
              <p className="project-summary">
                A browser-based shipping label formatter used by 50,000+ monthly e-commerce sellers on Meesho, Flipkart, and Amazon.
              </p>
              <ul className="project-bullets">
                <li>Moved all PDF parsing, invoice stripping, and barcode isolation into client-side Web Workers using PDF-Lib.</li>
                <li>Protected merchant privacy by keeping all customer shipping addresses and GST details directly in the browser—saving 100% on cloud compute bills.</li>
                <li>Cut batch processing time by 40% (under 2s for 50 pages) while keeping Lighthouse scores above 90.</li>
              </ul>
            </div>
          </article>

          {/* 2. RevKit */}
          <article className="seam project-card">
            <div className="project-card-header">
              <span className="category-badge category-badge--live-apps">Production Live App</span>
              <h3>
                <a href="https://revkit.online/" target="_blank" rel="noopener noreferrer">
                  RevKit — Reverse Engineering &amp; Security Tools Directory
                </a>
              </h3>
              <p className="stack">TypeScript · HTML5 · CSS3 · GitHub REST API · GitHub Actions CI/CD · Edge CDN</p>
              <div className="project-links">
                <a className="live" href="https://revkit.online/" target="_blank" rel="noopener noreferrer">
                  Open running app →
                </a>
                <span className="code-link code-link--private">
                  Private Commercial Repo · Case Study
                </span>
              </div>
            </div>
            <div className="project-card-body">
              <p className="project-summary">
                A curated discovery platform indexing 1,023+ reverse-engineering tools, decompilers, and debuggers for security researchers.
              </p>
              <ul className="project-bullets">
                <li>Replaced static GitHub awesome-lists with an automated CI pipeline that checks stars, tags, and commits weekly.</li>
                <li>Built a client-side search engine that filters across 13 security categories in under 50ms with zero database latency.</li>
                <li>Hosted statically on an edge CDN for sub-100ms global cold loads and a perfect 100/100 Core Web Vitals score.</li>
              </ul>
            </div>
          </article>

          {/* 3. Videlto (Replaces Angular 19 SPA) */}
          <article className="seam project-card">
            <div className="project-card-header">
              <span className="category-badge category-badge--live-apps">Production Live App</span>
              <h3>
                <a href="https://videlto.online/" target="_blank" rel="noopener noreferrer">
                  Videlto — Commercial Video Ad Studio
                </a>
              </h3>
              <p className="stack">Next.js (App Router) · React · TypeScript · Tailwind CSS · Cloudflare CDN · Render</p>
              <div className="project-links">
                <a className="live" href="https://videlto.online/" target="_blank" rel="noopener noreferrer">
                  Open running app →
                </a>
                <span className="code-link code-link--private">
                  Private Commercial Repo · Case Study
                </span>
              </div>
            </div>
            <div className="project-card-body">
              <p className="project-summary">
                A full-stack video studio platform turning static DTC e-commerce product photos into 9:16 vertical motion video ads for TikTok, Instagram Reels, and YouTube Shorts.
              </p>
              <ul className="project-bullets">
                <li>Transforms static catalog photography into launch-ready 9:16 vertical video creative in under 10 seconds.</li>
                <li>Decoupled video composition from web requests using an asynchronous worker queue, allowing client previews to stream reliably without HTTP timeouts.</li>
                <li>Cached rendered media assets at the edge using Cloudflare CDN, maintaining sub-150ms TTFB worldwide with authentic product fidelity.</li>
              </ul>
            </div>
          </article>

          {/* 4. RentHub */}
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
            <div className="project-card-body">
              <p className="project-summary">
                A peer-to-peer equipment rental web app for booking cameras, audio gear, and tools without scheduling conflicts.
              </p>
              <ul className="project-bullets">
                <li>Engineered date-range overlap validation in MongoDB to prevent double-booking when users reserve the same item.</li>
                <li>Implemented stateless JWT authentication stored in HTTP-only cookies with role-based routing for renters and owners.</li>
                <li>Maintained sub-200ms catalog search and reservation response times during stress tests.</li>
              </ul>
            </div>
          </article>

          {/* 5. Device Protection Portal (Moved to bottom with cold start notice & screenshot) */}
          <article className="seam project-card">
            <div className="project-card-header">
              <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '0.5rem', marginBottom: '0.35rem' }}>
                <span className="category-badge category-badge--humber">Humber College Capstone</span>
                <span className="render-cold-start-badge">Hosted on Render free tier — ~40s cold start</span>
              </div>
              <h3>
                <a href="https://j2ee-device-protection-project.onrender.com" target="_blank" rel="noopener noreferrer">
                  Device Protection Portal — Hardware Warranty &amp; Claims Management
                </a>
              </h3>
              <p className="stack">Java 17 · J2EE Servlets · JSP/JSTL · JDBC · MySQL · Apache Tomcat · Docker · Render · Maven</p>
              <div className="project-links">
                <a className="live" href="https://j2ee-device-protection-project.onrender.com" target="_blank" rel="noopener noreferrer">
                  Open running app →
                </a>
                <a className="code-link" href="https://github.com/ronil2149/j2ee-device-protection-project" target="_blank" rel="noopener noreferrer">
                  GitHub repository ↗
                </a>
              </div>
            </div>
            <div className="project-card-body">
              <div className="project-preview-frame">
                <img
                  src="/images/device-protection-ui.png"
                  alt="Device Protection Portal Live Interface"
                  className="project-preview-img"
                  loading="lazy"
                />
              </div>
              <p className="project-summary">
                An enterprise hardware warranty portal where customers register covered devices and adjusters audit repair claims.
              </p>
              <ul className="project-bullets">
                <li>Implemented a Java Servlet MVC architecture with a DAO persistence layer over JDBC and MySQL connection pooling.</li>
                <li>Used PreparedStatements to block SQL injection and added Servlet Filters for role-based authentication between customers and admins.</li>
                <li>Packaged into a multi-stage Docker container deployed on Render with zero memory leaks during concurrent load testing.</li>
              </ul>
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

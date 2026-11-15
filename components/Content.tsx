import Link from 'next/link';
import { ProjectsFilter } from './ProjectsFilter';

export function Content() {
  return (
    <main>
      <section id="hero">
        <h1 className="drop">
          <span>Ronil</span>
          <em>Ghoghari</em>
        </h1>
        <p className="hero-note">
          Full-stack developer in Toronto. I build web applications and track down why they break — from an unexpected render glitch in React down to the database record that caused it. Five years shipping code across TypeScript, React, Next.js, Node.js, Java, and SQL.
        </p>
        <ul className="hero-meta">
          <li>
            <span className="badge">Work Permit</span>
            <b>Open Work Permit (PGWP)</b> — eligible to work full-time in Canada, no visa sponsorship needed.
          </li>
          <li>
            <span className="badge">Current / Recent</span>
            Web &amp; Frontend Support Developer at{' '}
            <a className="badge-link" href="#experience" title="View Work Experience proof">
              <b>Ambrosia Natural Foods</b>
            </a>{' '}
            (Toronto, ON).
          </li>
          <li>
            <span className="badge">Live Production Apps</span>
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
          <a href="mailto:ronilghoghari2149@gmail.com">ronilghoghari2149@gmail.com</a>
          <a href="tel:+14378307427">+1 (437) 830-7427</a>
          <a href="https://github.com/ronil2149" target="_blank" rel="noopener noreferrer">
            GitHub ↗
          </a>
          <a href="https://www.linkedin.com/in/ronil-ghoghari" target="_blank" rel="noopener noreferrer">
            LinkedIn ↗
          </a>
          <a href="/Ronil_dev.pdf" target="_blank" rel="noopener noreferrer">
            Resume (PDF) ↗
          </a>
        </div>
        <p className="cue">scroll — explore verifiable projects below</p>
      </section>

      <section id="work">
        {/* Invisible anchor elements for direct deep-linking */}
        <div id="live-apps" tabIndex={-1} style={{ position: 'relative', top: '-1rem' }} />
        <div id="experience" tabIndex={-1} style={{ position: 'relative', top: '-1rem' }} />
        <div id="humber" tabIndex={-1} style={{ position: 'relative', top: '-1rem' }} />
        <div id="btech" tabIndex={-1} style={{ position: 'relative', top: '-1rem' }} />

        <h2>Things I have built and can show you</h2>
        <p className="lede">
          Every project below is real code you can test and inspect. Filter by category or jump directly to live deployments and GitHub repositories.
        </p>

        {/* Interactive Filterable Projects Grid */}
        <ProjectsFilter />

        {/* Specialized Hub Links for backward compatibility */}
        <div className="project-hubs" style={{ marginTop: '3.5rem' }}>
          <Link className="project-hub" href="/projects/software">
            <div className="project-hub-number">01</div>
            <div className="project-hub-content">
              <h3>Software &amp; Web Development Hub</h3>
              <p>
                In-depth breakdown of full-stack architectures, API design, database schemas, and containerized deployments.
              </p>
              <div className="project-hub-meta">
                <span>View deep dive →</span>
              </div>
            </div>
          </Link>
          <Link className="project-hub" href="/projects/data-ai">
            <div className="project-hub-number">02</div>
            <div className="project-hub-content">
              <h3>Data, AI &amp; Analytics Hub</h3>
              <p>
                Machine learning models, Neo4j knowledge graphs, distributed Spark/HDFS data pipelines, and Tableau BI dashboards.
              </p>
              <div className="project-hub-meta">
                <span>View deep dive →</span>
              </div>
            </div>
          </Link>
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
            <dd>Postman, Chrome DevTools Network Triage, Jest, Lighthouse, Root-Cause Analysis, SQL Auditing</dd>
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
        <div className="contact-status" style={{ marginBottom: '1.5rem' }}>
          <span className="badge">Work Authorization</span>
          <b>Open Work Permit (PGWP)</b> — eligible to work full-time across Canada with no employer sponsorship required.
        </div>
        <div>
          <a className="big" href="mailto:ronilghoghari2149@gmail.com">
            ronilghoghari2149@gmail.com
          </a>
          <div className="contact-phone">
            <a href="tel:+14378307427">+1 (437) 830-7427</a>
            <span>•</span>
            <span>Toronto, ON</span>
          </div>
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
              Resume ↗
            </a>
          </li>
          <li>
            <a href="#live-apps">Live Apps (/#live-apps)</a>
          </li>
          <li>
            <a href="#experience">Work Experience (/#experience)</a>
          </li>
          <li>
            <a href="#humber">Humber College (/#humber)</a>
          </li>
          <li>
            <a href="#btech">B.Tech Engineering (/#btech)</a>
          </li>
        </ul>
      </section>
    </main>
  );
}

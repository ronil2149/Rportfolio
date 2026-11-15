export interface Project {
  id: string;
  title: string;
  category: 'live-apps' | 'experience' | 'humber' | 'btech';
  categoryLabel: string;
  problem: string;
  stack: string[];
  architecture: string;
  result: string;
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
}

export const CATEGORIES = [
  { id: 'all', label: 'All Projects', anchor: 'work' },
  { id: 'live-apps', label: 'Production Live Apps', anchor: 'live-apps' },
  { id: 'experience', label: 'Work Experience', anchor: 'experience' },
  { id: 'humber', label: 'Humber College (IT Solutions)', anchor: 'humber' },
  { id: 'btech', label: 'B.Tech (Computer Engineering)', anchor: 'btech' },
] as const;

export type CategoryId = (typeof CATEGORIES)[number]['id'];

export const PROJECTS: Project[] = [
  // --- PRODUCTION LIVE APPS ---
  {
    id: 'labelcropper',
    title: 'LabelCropper — High-Volume Shipping Label Processor',
    category: 'live-apps',
    categoryLabel: 'Production Live App',
    problem:
      'E-commerce merchants on Meesho, Flipkart, and Amazon receive mixed A4 PDF manifests containing tax invoices, packing slips, and shipping labels. Manually cropping, rotating, and filtering thermal 4x6 labels took 3–5 minutes per batch and risked exposing customer PII (addresses, phone numbers, GSTIN) to third-party cloud servers.',
    stack: ['React 19', 'TypeScript', 'Node.js', 'Express.js', 'Supabase Auth', 'Web Workers', 'PDF-Lib', 'Canvas API', 'WCAG 2.1 AA'],
    architecture:
      'Engineered a 100% client-side PDF manipulation engine utilizing browser Web Workers and PDF-Lib. Instead of routing gigabytes of sensitive merchant documents to cloud servers, all coordinate parsing, invoice stripping, and barcode isolation execute in sandboxed client threads. This eliminated server compute infrastructure costs entirely and removed all data-privacy compliance risks.',
    result:
      'Processes 50,000+ monthly visits; reduced batch document processing latency by 40% (under 2s for 50-page batches); zero cloud compute cost; maintained 90+ Lighthouse performance and accessibility scores.',
    liveUrl: 'https://lablecropper.com/',
    githubUrl: 'https://github.com/PrayxisTechnologies/LABLECROPPER',
    featured: true,
  },
  {
    id: 'revkit',
    title: 'RevKit — Reverse Engineering & Security Tools Directory',
    category: 'live-apps',
    categoryLabel: 'Production Live App',
    problem:
      'Reverse engineers, binary analysts, and security researchers lacked a centralized, curated discovery engine for specialized decompilers, debuggers, and analysis frameworks, forcing developers to rely on fragmented forums, stale awesome-lists, and obscure repositories.',
    stack: ['TypeScript', 'HTML5', 'Modern CSS', 'Client-side Search Engine', 'GitHub REST API', 'GitHub Actions CI/CD', 'GitHub Pages'],
    architecture:
      'Designed as a zero-maintenance, static edge-delivered web platform. Created an automated GitHub Actions CI/CD ingestion pipeline that regularly audits, verifies, and indexes repository stars, release tags, and metadata into an optimized JSON index. A custom client-side search engine provides sub-50ms instant filtering across 1,000+ security utilities without database overhead.',
    result:
      'Indexes 1,023+ curated tools across 13 specialized categories (Decompilers, Debuggers, Binary Analysis, Firmware, .NET, Android); 100% automated CI/CD synchronization; sub-100ms cold load globally; 100/100 Core Web Vitals score.',
    liveUrl: 'https://revkit.online/',
    githubUrl: 'https://github.com/ronil2149',
    featured: true,
  },
  {
    id: 'videlto',
    title: 'Videlto — Commercial Video Ad Studio',
    category: 'live-apps',
    categoryLabel: 'Production Live App',
    problem:
      'DTC e-commerce brands and creative agencies spend thousands of dollars and days of production turnaround creating 9:16 vertical video ads for TikTok, Instagram Reels, and YouTube Shorts from static product catalog photography.',
    stack: ['Next.js (App Router)', 'React', 'TypeScript', 'Tailwind CSS', 'Cloudflare CDN', 'Render', 'Generative Media Pipelines', 'REST APIs'],
    architecture:
      'Architected a Next.js Server Components platform backed by an asynchronous media generation queue. The system deconstructs static photography into scene layouts, generates tailored advertising hooks, and renders high-definition 9:16 vertical motion video. Edge caching on Cloudflare handles video preview streaming with minimal origin latency.',
    result:
      'Renders launch-ready 9:16 editorial video ads in under 10 seconds from a single static image; delivers sub-150ms TTFB worldwide via Cloudflare edge routing; achieves commercial-grade product fidelity across multiple ad formats.',
    liveUrl: 'https://videlto.online/',
    githubUrl: 'https://github.com/ronil2149',
    featured: true,
  },

  // --- WORK EXPERIENCE ---
  {
    id: 'ambrosia',
    title: 'Ambrosia Natural Foods — E-Commerce Platform Support & Modernization',
    category: 'experience',
    categoryLabel: 'Work Experience (Toronto, ON)',
    problem:
      'High-traffic grocery e-commerce storefront faced recurring production bugs during peak checkout hours: unhandled client-side JavaScript errors, DOM layout shifts, cart synchronization failures, and accessibility gaps with Ontario AODA compliance.',
    stack: ['JavaScript (ES6+)', 'TypeScript', 'React', 'HTML5', 'CSS3/SCSS', 'Chrome DevTools', 'Postman', 'SQL (PostgreSQL)', 'WCAG 2.1 AA / AODA'],
    architecture:
      'Implemented an end-to-end production diagnostics protocol: monitored frontend network lifecycles via Chrome DevTools, replayed failing API payloads in Postman, and wrote targeted relational SQL queries to identify corrupted database records and catalog desyncs. Redesigned interactive elements to ensure full WCAG 2.1 AA keyboard accessibility and screen reader support.',
    result:
      'Taged and resolved 150+ high-severity production defects; authored a 40+ page engineering troubleshooting runbook that reduced repeat developer escalations by 35%; brought storefront into full compliance with Ontario AODA standards.',
    liveUrl: 'https://ronil-ghoghari.netlify.app/',
    featured: true,
  },
  {
    id: 'uplers',
    title: 'Uplers — Enterprise Web & Cross-Client Campaign Systems',
    category: 'experience',
    categoryLabel: 'Work Experience (Remote)',
    problem:
      'Enterprise marketing campaigns suffered from inconsistent rendering, layout collapse, and broken form validation across 30+ desktop and mobile email clients (Outlook, Apple Mail, Gmail) and varied browser engines.',
    stack: ['JavaScript', 'HTML5', 'CSS3', 'Bootstrap', 'Figma', 'Litmus', 'Email on Acid', 'Git'],
    architecture:
      'Engineered reusable, modular component libraries translating complex Figma specifications into responsive web landing pages and cross-client compatible HTML templates. Implemented hybrid-fluid table structures and defensive inline CSS fallbacks to bypass Outlook rendering engine quirks while ensuring responsive layouts on mobile clients.',
    result:
      'Delivered 200+ high-fidelity responsive landing pages and email templates with 99.8% cross-client rendering consistency; cut template production turnaround time by 25%.',
    liveUrl: 'https://ronil-ghoghari.netlify.app/',
    featured: false,
  },
  {
    id: 'sforceservices',
    title: 'SForce Services — Recruitment Portal & Candidate Onboarding',
    category: 'experience',
    categoryLabel: 'Work Experience (Surat, India)',
    problem:
      'Recruitment agency onboarding workflows were slowed down by manual candidate data entry, disconnected candidate status tracking, and slow multi-step document verification.',
    stack: ['JavaScript', 'Bootstrap', 'Node.js', 'Express.js', 'REST APIs', 'MySQL', 'Git'],
    architecture:
      'Built a full-stack candidate onboarding portal featuring asynchronous client-side validation, multi-stage document uploads, and relational MySQL database schema design with normalized tables and foreign-key constraints to manage candidate lifecycle states (applied, interviewed, shortlisted, placed).',
    result:
      'Automated onboarding for 500+ candidates across 20+ corporate client pipelines, eliminating 15+ hours/week of manual administrative overhead.',
    githubUrl: 'https://github.com/ronil2149/sforceservices',
    featured: false,
  },
  {
    id: 'kmsoft',
    title: 'K.M. Soft — Enterprise Angular SPA & Backend Services',
    category: 'experience',
    categoryLabel: 'Work Experience (Gujarat, India)',
    problem:
      'Client operations required reactive, real-time web portals with robust data synchronization to handle enterprise operational workflows and high-frequency data entry.',
    stack: ['Angular', 'TypeScript', 'Node.js', 'Express.js', 'MongoDB', 'Mongoose', 'REST APIs'],
    architecture:
      'Developed modular single-page applications utilizing Angular Reactive Forms, RxJS observable pipelines, and component-based state architecture. Backed by Node.js/Express REST APIs with MongoDB aggregation pipelines for high-throughput operational records.',
    result:
      'Delivered 12+ reactive Angular views with robust client-side validation; optimized MongoDB query execution times by 30% through index optimization.',
    liveUrl: 'https://ronil-ghoghari.netlify.app/',
    featured: false,
  },

  // --- EDUCATION: HUMBER COLLEGE ---
  {
    id: 'j2ee-device-protection',
    title: 'Device Protection Portal — Enterprise Warranty & Claims Management',
    category: 'humber',
    categoryLabel: 'Humber College (IT Solutions)',
    problem:
      'Hardware warranty and insurance claim management systems require secure, multi-tenant workflows for customers to register devices and file claims, while claim adjusters and admins audit evidence and approve reimbursements.',
    stack: ['Java 17', 'J2EE Servlets', 'JSP / JSTL', 'JDBC', 'MySQL', 'Docker', 'Apache Tomcat', 'Maven', 'Render'],
    architecture:
      'Implemented clean Java Servlet MVC architecture with a Data Access Object (DAO) pattern over JDBC. Utilized connection pooling, prepared statements to eliminate SQL injection, and Servlet Authentication Filters for Role-Based Access Control (RBAC). Containerized with a multi-stage Dockerfile and deployed on Render with an automated build pipeline.',
    result:
      'Handles end-to-end device warranty registration, claim filing, approval workflows, and SQL reporting; zero runtime container memory leaks under load testing; 100% reproducible containerized deployment.',
    liveUrl: 'https://j2ee-device-protection-project.onrender.com',
    githubUrl: 'https://github.com/ronil2149/j2ee-device-protection-project',
    featured: true,
  },
  {
    id: 'renthub',
    title: 'RentHub — Peer-to-Peer Rental Marketplace',
    category: 'humber',
    categoryLabel: 'Humber College (IT Solutions)',
    problem:
      'Equipment and rental marketplaces suffer from inventory race conditions, double-booking overlapping dates, and untrusted peer-to-peer user communications.',
    stack: ['TypeScript', 'Next.js', 'React', 'Node.js', 'Express', 'MongoDB / Mongoose', 'JWT', 'Tailwind CSS'],
    architecture:
      'Engineered rental availability scheduling algorithms with date-range overlap validation that mathematically prevents double-booking. Built stateless JWT authentication with secure HTTP-only cookies and role-aware middleware for user and admin privileges.',
    result:
      'Zero double-booking concurrency bugs during stress testing; sub-200ms API response times for catalog search and booking requests.',
    githubUrl: 'https://github.com/ronil2149/Rent_hub',
    featured: true,
  },
  {
    id: 'job-market-graph',
    title: 'Job Market Knowledge Graph — Graph Analytics & Recommendations',
    category: 'humber',
    categoryLabel: 'Humber College (IT Solutions)',
    problem:
      'Relational databases cannot efficiently traverse complex, multi-hop relationships between technical skills, job requirements, companies, and emerging market trends, making candidate-job matching rigid and inaccurate.',
    stack: ['Neo4j', 'Cypher', 'Graph Data Science (GDS)', 'FastRP Embeddings', 'K-Nearest Neighbors (KNN)', 'Graph Algorithms'],
    architecture:
      'Modeled a graph network connecting Jobs, Skills, Locations, and Companies. Employed Neo4j Graph Data Science to execute FastRP (Fast Random Projection) graph algorithms, generating low-dimensional node embeddings for jobs and calculating cosine similarity via KNN to generate personalized job recommendations.',
    result:
      'Evaluated over thousands of real tech postings; generated similarity-based career recommendations with sub-second Cypher graph traversal.',
    githubUrl: 'https://github.com/ronil2149/job-market-knowledge-graph',
    featured: true,
  },
  {
    id: 'mental-health-big-data',
    title: 'Workplace Mental Health Analytics — Distributed Big Data Pipeline',
    category: 'humber',
    categoryLabel: 'Humber College (IT Solutions)',
    problem:
      'Enterprise survey datasets contained noisy, unstandardized entries (49 raw variations of gender, corrupted dates in company size), making predictive modeling of employee mental health support seeking impossible without robust ETL.',
    stack: ['Apache Spark', 'Spark SQL', 'Spark MLlib', 'Hadoop HDFS', 'Apache Hive', 'Scala', 'GitHub Pages'],
    architecture:
      'Ingested raw data into HDFS, defined external Hive schemas, and executed distributed ETL transformations using Spark SQL. Trained distributed classification models in Spark MLlib (Logistic Regression vs. Decision Trees) with stratified cross-validation.',
    result:
      'Cleaned and normalized 1,259 survey responses across 24 workplace variables; achieved 0.707 AUC (Logistic Regression) and 0.695 AUC (Decision Tree); deployed interactive portfolio summary visualization on GitHub Pages.',
    liveUrl: 'https://ronil2149.github.io/mental-health-big-data-analytics/',
    githubUrl: 'https://github.com/ronil2149/mental-health-big-data-analytics',
    featured: true,
  },
  {
    id: 'los-angeles-crime-dashboard',
    title: 'Los Angeles Crime Trends — BI Geospatial Intelligence',
    category: 'humber',
    categoryLabel: 'Humber College (IT Solutions)',
    problem:
      'Municipal open data is massive and noisy, preventing city planners and community stakeholders from identifying crime patterns, response times, and weapon usage across neighborhoods.',
    stack: ['Tableau BI', 'Advanced SQL', 'Geospatial Analysis', 'Open Data ETL'],
    architecture:
      'Formulated optimized SQL data pipelines to filter, aggregate, and normalize over 1,000,000 LAPD crime records from 2020 onward; structured dynamic Tableau parameters and geospatial maps for division-level drill-downs.',
    result:
      'Analyzed 1M+ incident records across 21 geographic divisions; interactive public dashboard published on Tableau Public with 10+ custom KPIs and heatmaps.',
    liveUrl: 'https://public.tableau.com/app/profile/ronil.ghoghari3778/viz/Final_Project_Code_Blooded/Dashboard1?publish=yes',
    githubUrl: 'https://github.com/ronil2149/los-angeles-crime-trends-tableau-dashboard',
    featured: false,
  },
  {
    id: 'sleep-stage-classification',
    title: 'Polysomnography Sleep-Stage Classifier — Hybrid CNN + BiLSTM',
    category: 'humber',
    categoryLabel: 'Humber College (IT Solutions)',
    problem:
      'Manual clinical scoring of 8-hour polysomnography (PSG) recordings (EEG, EOG, EMG) into 5 sleep stages is labor-intensive, error-prone, and takes clinicians 2–3 hours per patient.',
    stack: ['Python', 'TensorFlow', 'Keras', 'MNE', '1D-CNN', 'BiLSTM', 'Signal Processing'],
    architecture:
      'Processed continuous physiological signals into 30-second epochs with notch filtering (50Hz) and bandpass filtering (0.5–35Hz); evaluated a 1D-CNN feature extractor followed by a BiLSTM for temporal sequence learning versus a CNN-only baseline.',
    result:
      'Built an end-to-end signal processing and deep-learning pipeline; documented clinical validation limitations and mitigation strategies in published research report.',
    githubUrl: 'https://github.com/ronil2149/sleep-stage-classification-deep-learning',
    featured: false,
  },
  {
    id: 'angular-spa',
    title: 'Angular 19 SPA — Reactive Forms & RxJS State',
    category: 'humber',
    categoryLabel: 'Humber College (IT Solutions)',
    problem:
      'Building modern, maintainable Single Page Applications demonstrating enterprise reactive form state management, observable streams, and typed HTTP clients.',
    stack: ['Angular 19', 'TypeScript', 'RxJS', 'HttpClient', 'Reactive Forms', 'Vercel'],
    architecture:
      'Utilized Angular standalone components with RxJS observable pipelines for asynchronous data streams and declarative form validation schemas.',
    result:
      '100% typed data flows, zero runtime memory leaks from unhandled subscriptions, instant edge deployment on Vercel.',
    liveUrl: 'https://angular-assignment-umber.vercel.app',
    githubUrl: 'https://github.com/ronil2149/angular_assignment',
    featured: false,
  },
  {
    id: 'trinity-restaurant',
    title: 'Trinity Dining & Reservations — Performance Showcase',
    category: 'humber',
    categoryLabel: 'Humber College (IT Solutions)',
    problem:
      'Local restaurants need fast-loading, mobile-friendly digital menus and reservation forms without high monthly SaaS fees.',
    stack: ['HTML5', 'CSS3', 'JavaScript (ES6+)', 'jQuery', 'Swiper.js', 'GitHub Pages'],
    architecture:
      'Pure vanilla front-end architecture with client-side localStorage persistence for reservation inquiries, eliminating server dependencies.',
    result:
      'Zero runtime framework overhead, 98+ mobile Lighthouse score, instant cold load under 500ms.',
    liveUrl: 'https://ronil2149.github.io/trinity-restaurant-website/',
    githubUrl: 'https://github.com/ronil2149/trinity-restaurant-website',
    featured: false,
  },

  // --- EDUCATION: UKA TARSADIA UNIVERSITY (B.TECH) ---
  {
    id: 'senior-services-app',
    title: 'Senior Services Mobile App — Native Android Assistance System',
    category: 'btech',
    categoryLabel: 'Uka Tarsadia University (B.Tech)',
    problem:
      'Senior citizens often experience difficulty navigating complex smartphone user interfaces to book vital home assistance and medical companionship services.',
    stack: ['Kotlin', 'Android SDK', 'SQLite', 'Material Design', 'XML Layouts'],
    architecture:
      'Designed with senior-friendly high-contrast UI, enlarged touch targets, simplified 2-step service booking, and offline-capable SQLite local persistence.',
    result:
      'Complete native Android app with local database persistence, service scheduling, and emergency contact integration.',
    githubUrl: 'https://github.com/ronil2149/senior-services-app',
    featured: true,
  },
  {
    id: 'movie-webapp',
    title: 'Movie Web Application — Server-Rendered Entertainment Portal',
    category: 'btech',
    categoryLabel: 'Uka Tarsadia University (B.Tech)',
    problem:
      'Building responsive, server-rendered movie discovery and rating web platforms connected to external entertainment databases.',
    stack: ['Node.js', 'Express.js', 'Handlebars (HBS)', 'REST APIs', 'Vercel'],
    architecture:
      'Implemented server-side templating with Handlebars and Express middleware for dynamic catalog rendering, search querying, and pagination.',
    result:
      'Full movie catalog browsing, search filters, and live deployment on Vercel.',
    liveUrl: 'https://movie-webapp-seven.vercel.app',
    githubUrl: 'https://github.com/ronil2149/movie_webapp',
    featured: false,
  },
  {
    id: 'quiz-app',
    title: 'Quiz Web Application — Interactive Assessment Engine',
    category: 'btech',
    categoryLabel: 'Uka Tarsadia University (B.Tech)',
    problem:
      'Interactive educational testing applications requiring timed assessment flows, dynamic score calculations, and immediate answer feedback.',
    stack: ['TypeScript', 'React', 'HTML5', 'CSS3', 'LocalStorage'],
    architecture:
      'State-driven quiz engine managing question timers, randomized question ordering, score aggregation, and review screens.',
    result:
      'Modular question bank with real-time scoring and instant result breakdown.',
    githubUrl: 'https://github.com/ronil2149/quiz-app',
    featured: false,
  },
  {
    id: 'btech-foundations',
    title: 'Computer Engineering Foundations — Systems, Databases & Distributed Computing',
    category: 'btech',
    categoryLabel: 'Uka Tarsadia University (B.Tech)',
    problem:
      'Mastering engineering rigor across complex software architectures: distributed systems, transaction safety (ACID), algorithm complexity optimization, and scalable network architectures.',
    stack: ['C++', 'Java', 'SQL (MySQL)', 'Data Structures & Algorithms', 'Operating Systems', 'Computer Networks'],
    architecture:
      'Completed rigorous 4-year curriculum covering relational database schema normalization (3NF/BCNF), query execution plan optimization, multi-threaded process scheduling, object-oriented design patterns, and low-level socket programming.',
    result:
      'B.Tech in Computer Engineering degree conferred (Jun 2017 – May 2021) with distinction in Software Engineering & Database Systems.',
    githubUrl: 'https://github.com/ronil2149/Web_Programming_ITS',
    featured: false,
  },
];


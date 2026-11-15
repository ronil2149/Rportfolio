export interface Project {
  id: string;
  title: string;
  category: 'live-apps' | 'experience' | 'humber' | 'btech';
  badge: string;
  stack: string[];
  summary: string;
  highlights: string[];
  keyMetric: string;
  liveUrl?: string;
  githubUrl?: string;
}

export const CATEGORIES = [
  { id: 'all', label: 'All Projects', anchor: 'work' },
  { id: 'live-apps', label: 'Production Live Apps', anchor: 'live-apps' },
  { id: 'experience', label: 'Work Experience', anchor: 'experience' },
  { id: 'humber', label: 'Humber College', anchor: 'humber' },
  { id: 'btech', label: 'B.Tech Engineering', anchor: 'btech' },
] as const;

export type CategoryId = (typeof CATEGORIES)[number]['id'];

export const PROJECTS: Project[] = [
  // --- PRODUCTION LIVE APPS ---
  {
    id: 'labelcropper',
    title: 'LabelCropper — High-Volume Shipping Label Processor',
    category: 'live-apps',
    badge: 'Production Live App',
    stack: ['React 19', 'TypeScript', 'Node.js', 'Express', 'Supabase Auth', 'Web Workers', 'PDF-Lib', 'WCAG 2.1 AA'],
    summary:
      'A high-volume shipping tool for e-commerce merchants converting multi-page marketplace orders (Meesho, Flipkart, Amazon) into thermal 4x6 labels.',
    highlights: [
      'Engineered a 100% client-side PDF parser using browser Web Workers and PDF-Lib, isolating barcodes and stripping tax invoices without sending customer data to any server.',
      'Protected sensitive merchant PII (addresses, GSTIN) while eliminating cloud compute and storage bills entirely.',
      'Reduced batch processing time by 40% (under 2 seconds for a 50-page manifest) while holding Lighthouse scores above 90.',
    ],
    keyMetric: '50,000+ monthly visits · 40% processing speedup · $0 cloud compute bills',
    liveUrl: 'https://lablecropper.com/',
    githubUrl: 'https://github.com/PrayxisTechnologies/LABLECROPPER',
  },
  {
    id: 'revkit',
    title: 'RevKit — Reverse Engineering & Security Tools Directory',
    category: 'live-apps',
    badge: 'Production Live Platform',
    stack: ['TypeScript', 'HTML5', 'Modern CSS', 'GitHub REST API', 'GitHub Actions CI/CD', 'Edge CDN'],
    summary:
      'A curated discovery engine and directory indexing 1,023+ reverse-engineering tools, decompilers, debuggers, and binary analysis frameworks.',
    highlights: [
      'Built an automated GitHub Actions CI pipeline that audits stars, releases, and commit activity on a weekly cron, serializing the catalog into a normalized static JSON index.',
      'Implemented a custom client-side search engine delivering sub-50ms query filtering across 13 specialized security categories with zero database latency.',
      'Deployed via edge CDN with zero database hosting overhead, achieving sub-100ms global cold loads and a 100/100 Core Web Vitals score.',
    ],
    keyMetric: '1,023+ indexed security tools · Sub-50ms instant search · 100/100 Core Web Vitals',
    liveUrl: 'https://revkit.online/',
    githubUrl: 'https://github.com/ronil2149',
  },
  {
    id: 'videlto',
    title: 'Videlto — Commercial Video Ad Studio',
    category: 'live-apps',
    badge: 'Production Live App',
    stack: ['Next.js (App Router)', 'React', 'TypeScript', 'Tailwind CSS', 'Cloudflare CDN', 'Render', 'REST APIs'],
    summary:
      'A commercial video platform turning static product photos into launch-ready 9:16 vertical video ads for TikTok, Instagram Reels, and YouTube Shorts in under 10 seconds.',
    highlights: [
      'Decoupled scene deconstruction and ad copy generation from video synthesis using an asynchronous worker queue, preventing dropped connections under bursty traffic.',
      'Streamed real-time preview states to the client while caching final MP4 videos on Cloudflare CDN to deliver sub-150ms TTFB worldwide.',
      'Automated scene mapping and advertising hook generation, reducing production turnaround from days to under 10 seconds.',
    ],
    keyMetric: 'Under 10s video ad generation · Sub-150ms global TTFB via Cloudflare',
    liveUrl: 'https://videlto.online/',
    githubUrl: 'https://github.com/ronil2149',
  },

  // --- WORK EXPERIENCE ---
  {
    id: 'ambrosia',
    title: 'Ambrosia Natural Foods — E-Commerce Platform Support & Triage',
    category: 'experience',
    badge: 'Work Experience · Toronto, ON',
    stack: ['JavaScript (ES6+)', 'TypeScript', 'React', 'HTML5', 'CSS3/SCSS', 'Chrome DevTools', 'Postman', 'SQL (PostgreSQL)', 'WCAG 2.1 AA / AODA'],
    summary:
      'Web and frontend support developer for a major Toronto grocery e-commerce storefront handling peak retail checkout traffic.',
    highlights: [
      'Diagnosed and resolved 150+ high-priority production defects (DOM layout shifts, cart desyncs, checkout errors) using Chrome DevTools Network triage, Postman API replays, and direct SQL queries.',
      'Authored a 40+ page internal engineering troubleshooting runbook that reduced repeat developer escalations by 35%.',
      'Remediated frontend markup, keyboard tab ordering, and contrast ratios to bring the entire customer storefront into full Ontario AODA and WCAG 2.1 AA compliance.',
    ],
    keyMetric: '150+ production bugs resolved · 35% escalation reduction · Full Ontario AODA compliance',
    liveUrl: 'https://ronilportfolio.vercel.app/#experience',
  },
  {
    id: 'uplers',
    title: 'Uplers — Enterprise Web & Cross-Client Campaign Systems',
    category: 'experience',
    badge: 'Work Experience · Remote',
    stack: ['JavaScript', 'HTML5', 'CSS3', 'Bootstrap', 'Figma', 'Litmus', 'Email on Acid', 'Git'],
    summary:
      'Built responsive marketing landing pages and cross-client campaign interfaces from Figma designs for global enterprise brands.',
    highlights: [
      'Engineered hybrid-fluid table components with defensive CSS fallbacks to bypass Outlook’s legacy rendering engine while delivering modern layouts to WebKit clients.',
      'Delivered 200+ responsive landing pages and templates with a 99.8% cross-client visual fidelity across 30+ email clients and viewport sizes.',
      'Standardized reusable component patterns and validation workflows, cutting template turnaround time by 25%.',
    ],
    keyMetric: '200+ responsive interfaces shipped · 99.8% cross-client fidelity · 25% faster turnaround',
    liveUrl: 'https://ronilportfolio.vercel.app/#experience',
  },
  {
    id: 'sforceservices',
    title: 'SForce Services — Recruitment Portal & Candidate Onboarding',
    category: 'experience',
    badge: 'Work Experience · Surat, India',
    stack: ['JavaScript', 'Bootstrap', 'Node.js', 'Express.js', 'REST APIs', 'MySQL', 'Git'],
    summary:
      'Architected a full-stack candidate onboarding portal replacing manual email spreadsheets with an automated digital workflow.',
    highlights: [
      'Designed normalized relational MySQL schemas with foreign-key constraints to track applicant lifecycles (applied, interviewed, shortlisted, placed).',
      'Built Express REST APIs with asynchronous client validation and secure document uploads for hiring coordinators and applicants.',
      'Automated onboarding for 500+ candidates across 20+ corporate clients, eliminating 15+ hours/week of manual administrative overhead.',
    ],
    keyMetric: '500+ candidate onboardings automated · 15+ hours/week administrative time saved',
    githubUrl: 'https://github.com/ronil2149/sforceservices',
  },
  {
    id: 'kmsoft',
    title: 'K.M. Soft — Enterprise Angular SPA & Backend Services',
    category: 'experience',
    badge: 'Work Experience · Gujarat, India',
    stack: ['Angular', 'TypeScript', 'Node.js', 'Express.js', 'MongoDB', 'Mongoose', 'REST APIs'],
    summary:
      'Developed responsive single-page applications and backend REST APIs for enterprise client operations.',
    highlights: [
      'Built 12+ reactive Angular views using TypeScript, RxJS observable pipelines, and reactive forms with custom client-side validators.',
      'Connected frontend views to Node.js/Express REST microservices and designed MongoDB document schemas for flexible operational records.',
      'Optimized MongoDB aggregation pipelines and compound indexes, cutting query execution times by 30%.',
    ],
    keyMetric: '12+ reactive Angular views · 30% MongoDB query performance optimization',
    liveUrl: 'https://ronilportfolio.vercel.app/#experience',
  },

  // --- EDUCATION: HUMBER COLLEGE ---
  {
    id: 'j2ee-device-protection',
    title: 'Device Protection Portal — Hardware Warranty & Claims Management',
    category: 'humber',
    badge: 'Humber College Capstone',
    stack: ['Java 17', 'J2EE Servlets', 'JSP / JSTL', 'JDBC', 'MySQL', 'Docker', 'Apache Tomcat', 'Maven', 'Render'],
    summary:
      'An enterprise hardware warranty portal where customers register covered devices and file repair claims, while adjusters audit evidence and generate reports.',
    highlights: [
      'Implemented clean Java Servlet MVC architecture with a DAO persistence layer over JDBC, utilizing HikariCP connection pooling and prepared statements to eliminate SQL injection.',
      'Enforced Role-Based Access Control (RBAC) via servlet authentication filters, isolating customer, adjuster, and administrative permissions.',
      'Packaged the application using a multi-stage Docker build on Alpine Linux and deployed on Render with zero memory leaks under concurrent load testing.',
    ],
    keyMetric: 'Full Servlet MVC + DAO architecture · Zero SQL injection · Multi-stage Docker deployment',
    liveUrl: 'https://j2ee-device-protection-project.onrender.com',
    githubUrl: 'https://github.com/ronil2149/j2ee-device-protection-project',
  },
  {
    id: 'renthub',
    title: 'RentHub — Peer-to-Peer Rental Marketplace',
    category: 'humber',
    badge: 'Humber College Project · Team Code Blooded',
    stack: ['TypeScript', 'Next.js 14', 'React', 'Node.js', 'MongoDB', 'Mongoose', 'JWT', 'Tailwind CSS'],
    summary:
      'A peer-to-peer equipment rental marketplace for booking tools, cameras, and gear, developed with Humber team "Code Blooded".',
    highlights: [
      'Engineered an availability scheduling algorithm with date-range overlap validation that mathematically prevents double-booking race conditions.',
      'Implemented stateless JWT authentication stored in secure HTTP-only cookies with role-based routing protecting renter and owner dashboards.',
      'Built compound MongoDB indexes supporting sub-200ms catalog search and category filtering.',
    ],
    keyMetric: 'Zero double-booking race conditions · Sub-200ms catalog API response time',
    githubUrl: 'https://github.com/ronil2149/Rent_hub',
  },
  {
    id: 'job-market-graph',
    title: 'Job Market Knowledge Graph — Skill Matching & Recommendations',
    category: 'humber',
    badge: 'Humber College Project',
    stack: ['Neo4j', 'Cypher', 'Graph Data Science (GDS)', 'FastRP Embeddings', 'KNN Graph Algorithms'],
    summary:
      'A Neo4j knowledge-graph project modeling multi-hop relationships between technical skills, job requirements, companies, and emerging market trends.',
    highlights: [
      'Modeled a graph schema connecting Jobs, Skills, Locations, and Companies, overcoming the limitations of rigid relational multi-table SQL JOINs.',
      'Leveraged Neo4j Graph Data Science to generate 64-dimensional FastRP node embeddings, calculating cosine similarity via K-Nearest Neighbors (KNN).',
      'Delivered personalized career recommendations and skill-gap analysis with sub-45ms Cypher multi-hop query execution.',
    ],
    keyMetric: 'FastRP 64D graph vector embeddings · Sub-45ms Cypher query execution',
    githubUrl: 'https://github.com/ronil2149/job-market-knowledge-graph',
  },
  {
    id: 'mental-health-big-data',
    title: 'Workplace Mental Health Analytics — Distributed Big Data Pipeline',
    category: 'humber',
    badge: 'Humber College Capstone',
    stack: ['Apache Spark', 'Spark SQL', 'Spark MLlib', 'Hadoop HDFS', 'Apache Hive', 'Scala'],
    summary:
      'An end-to-end distributed Big Data pipeline analyzing 1,259 workplace survey responses across 24 variables to predict employee mental-health treatment seeking.',
    highlights: [
      'Ingested raw data into Hadoop HDFS, defined external Hive schemas, and executed distributed Spark SQL ETL to standardize 49 raw gender variants and repair corrupted date fields.',
      'Trained distributed Spark MLlib classifiers (Logistic Regression achieving 0.707 AUC; Decision Trees achieving 0.695 AUC) with stratified cross-validation.',
      'Deployed an interactive portfolio visualization on GitHub Pages detailing correlation heatmaps and feature importance.',
    ],
    keyMetric: '1,259 records cleaned · 0.707 ROC-AUC score · Spark MLlib & HDFS pipeline',
    liveUrl: 'https://ronil2149.github.io/mental-health-big-data-analytics/',
    githubUrl: 'https://github.com/ronil2149/mental-health-big-data-analytics',
  },
  {
    id: 'los-angeles-crime-dashboard',
    title: 'Los Angeles Crime Trends — BI Geospatial Intelligence',
    category: 'humber',
    badge: 'Humber College Project · Team Code Blooded',
    stack: ['Tableau BI', 'SQL', 'Geospatial Analysis', 'Open Data ETL'],
    summary:
      'An interactive Business Intelligence dashboard analyzing over 1,000,000 LAPD crime incident records from 2020 onward, published on Tableau Public.',
    highlights: [
      'Wrote SQL data pipelines to clean, filter, and aggregate noisy municipal open data into structured relational tables.',
      'Structured dynamic Tableau parameters and geospatial maps enabling drill-downs across 21 LAPD divisions, time of day, and weapon types.',
      'Published on Tableau Public with custom KPI cards and demographic trend visualizations.',
    ],
    keyMetric: '1M+ open-data crime records analyzed · Published on Tableau Public',
    liveUrl: 'https://public.tableau.com/app/profile/ronil.ghoghari3778/viz/Final_Project_Code_Blooded/Dashboard1?publish=yes',
    githubUrl: 'https://github.com/ronil2149/los-angeles-crime-trends-tableau-dashboard',
  },
  {
    id: 'sleep-stage-classification',
    title: 'Sleep Stage Classification — Hybrid CNN + BiLSTM',
    category: 'humber',
    badge: 'Humber College Project',
    stack: ['Python', 'TensorFlow', 'Keras', 'MNE', '1D-CNN', 'BiLSTM', 'Biomedical Signal Processing'],
    summary:
      'A deep-learning experiment classifying continuous physiological sleep signals (EEG, EOG, EMG) into clinical stages using Python, TensorFlow, and MNE.',
    highlights: [
      'Segmented raw recordings into 30-second epochs, applying 50Hz notch and bandpass filters to strip electrical artifacts.',
      'Evaluated a hybrid 1D-CNN + Bidirectional LSTM architecture against a CNN-only baseline to capture both waveform features and temporal stage transitions.',
      'Documented clinical validation limitations and mitigation strategies in a published research report.',
    ],
    keyMetric: '30s epoch biomedical signal segmentation · Hybrid Conv1D + BiLSTM temporal model',
    githubUrl: 'https://github.com/ronil2149/sleep-stage-classification-deep-learning',
  },
  {
    id: 'angular-spa',
    title: 'Angular 19 SPA — Reactive Forms & RxJS State',
    category: 'humber',
    badge: 'Humber College Project',
    stack: ['Angular 19', 'TypeScript', 'RxJS', 'HttpClient', 'Reactive Forms', 'Vercel'],
    summary:
      'A single-page application built to demonstrate modern Angular 19 patterns: standalone routed components, typed HttpClient services, and reactive form state management.',
    highlights: [
      'Built declarative RxJS observable pipelines for external API consumption with automatic subscription disposal via AsyncPipe.',
      'Implemented dynamic reactive forms with custom synchronous and asynchronous validators with instant accessible error messaging.',
      'Deployed to Vercel edge network with 100% typed compile-time safety.',
    ],
    keyMetric: '100% typed RxJS streams · Zero memory leaks · Instant Vercel edge deployment',
    liveUrl: 'https://angular-assignment-umber.vercel.app',
    githubUrl: 'https://github.com/ronil2149/angular_assignment',
  },
  {
    id: 'senior-services-app',
    title: 'Senior Services Mobile App — Native Android Assistance System',
    category: 'humber',
    badge: 'Humber College Capstone',
    stack: ['Kotlin', 'Android SDK', 'SQLite', 'Material Design', 'Gradle'],
    summary:
      'A native Android application built in Kotlin to help senior citizens easily request home assistance, medical check-ins, and companion services.',
    highlights: [
      'Designed senior-friendly high-contrast UI with enlarged touch targets and simplified 2-step booking flows.',
      'Implemented local SQLite caching for offline persistence and emergency contact dispatching.',
    ],
    keyMetric: 'Native Kotlin Android app · Local SQLite caching · Emergency contact dispatch',
    githubUrl: 'https://github.com/ronil2149/senior-services-app',
  },
  {
    id: 'trinity-restaurant',
    title: 'Trinity Dining & Reservations — Performance Showcase',
    category: 'humber',
    badge: 'Humber College Project',
    stack: ['HTML5', 'CSS3', 'JavaScript (ES6+)', 'jQuery', 'Swiper.js', 'GitHub Pages'],
    summary:
      'A fast, lightweight restaurant showcase and reservation site built intentionally without heavy JavaScript framework runtimes.',
    highlights: [
      'Pure semantic HTML5, modern CSS Grid/Flexbox, and vanilla JavaScript with Swiper.js carousel.',
      'Implemented client-side localStorage persistence for reservation inquiries, eliminating server dependencies.',
      'Achieved a 98+ mobile Lighthouse score and sub-500ms cold load times.',
    ],
    keyMetric: 'Sub-500ms cold load · 98+ mobile Lighthouse score · Zero runtime bundle overhead',
    liveUrl: 'https://ronil2149.github.io/trinity-restaurant-website/',
    githubUrl: 'https://github.com/ronil2149/trinity-restaurant-website',
  },

  // --- EDUCATION: UKA TARSADIA UNIVERSITY (B.TECH) ---
  {
    id: 'movie-webapp',
    title: 'Movie Web Application — Server-Rendered Entertainment Portal',
    category: 'btech',
    badge: 'Uka Tarsadia University',
    stack: ['Node.js', 'Express.js', 'Handlebars (HBS)', 'REST APIs', 'Vercel'],
    summary:
      'A server-rendered movie discovery application built with Node.js, Express, and Handlebars (HBS), featuring live movie database querying, category filtering, and search.',
    highlights: [
      'Engineered server-side Handlebars templates with Express middleware for dynamic catalog rendering, search querying, and pagination.',
      'Integrated external entertainment REST APIs with response caching and deployed to Vercel.',
    ],
    keyMetric: 'Server-side template rendering · External API integration · Vercel deployment',
    liveUrl: 'https://movie-webapp-seven.vercel.app',
    githubUrl: 'https://github.com/ronil2149/movie_webapp',
  },
  {
    id: 'restaurant-backend',
    title: 'Restaurant Order & Table Management Backend',
    category: 'btech',
    badge: 'Uka Tarsadia University · B.Tech Capstone',
    stack: ['JavaScript (Node.js)', 'Express.js', 'MVC Architecture', 'REST APIs', 'Middleware'],
    summary:
      'Engineered in April 2021 as a final-semester B.Tech capstone project for table reservations and order management.',
    highlights: [
      'Built a complete Model-View-Controller backend with Express routes, custom middleware, and request controllers.',
      'Handled table reservation validation, menu catalog updates, and order state lifecycles.',
    ],
    keyMetric: 'Full Express MVC architecture · Custom middleware & route controllers',
    githubUrl: 'https://github.com/ronil2149/restaurant',
  },
  {
    id: 'quiz-app',
    title: 'Quiz Web Application — Interactive Assessment Engine',
    category: 'btech',
    badge: 'Uka Tarsadia University',
    stack: ['TypeScript', 'React', 'HTML5', 'CSS3', 'LocalStorage'],
    summary:
      'An interactive timed quiz application built with TypeScript and React, featuring randomized question ordering and real-time score tracking.',
    highlights: [
      'Built a state-driven examination engine managing question timers, randomized question banks, and answer review analytics.',
      'Persisted score history across browser sessions using LocalStorage.',
    ],
    keyMetric: 'State-driven examination engine · Dynamic timers & review analytics',
    githubUrl: 'https://github.com/ronil2149/quiz-app',
  },
  {
    id: 'btech-foundations',
    title: 'Computer Engineering Foundations — Systems & Distributed Computing',
    category: 'btech',
    badge: 'Uka Tarsadia University · B.Tech Degree',
    stack: ['C++', 'Java', 'SQL (MySQL)', 'Data Structures & Algorithms', 'Operating Systems', 'Computer Networks'],
    summary:
      'Rigorous 4-year Bachelor of Technology in Computer Engineering (Jun 2017 – May 2021) covering foundational computing systems.',
    highlights: [
      'Relational Database Management Systems: SQL normalization (3NF/BCNF), query execution plan optimization, indexing, and ACID transactions.',
      'Operating Systems & Distributed Computing: Multi-threaded process scheduling, semaphore synchronization, memory management, and network socket programming.',
    ],
    keyMetric: 'B.Tech in Computer Engineering degree conferred with Software & Database focus',
    githubUrl: 'https://github.com/ronil2149/Web_Programming_ITS',
  },
];

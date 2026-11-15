export interface Project {
  id: string;
  title: string;
  category: 'live-apps' | 'experience' | 'humber' | 'btech';
  badge: string;
  stack: string[];
  description: string[];
  keyMetric?: string;
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
    badge: 'Live App · 50K+ Monthly Visits',
    stack: ['React 19', 'TypeScript', 'Node.js', 'Express', 'Supabase Auth', 'Web Workers', 'PDF-Lib', 'WCAG 2.1 AA'],
    description: [
      'A production tool built for e-commerce sellers converting multi-page marketplace orders (Meesho, Flipkart, Amazon) into thermal 4x6 labels, currently processing 50K+ monthly visits. Built as a monorepo with React and an Express backend with Supabase auth.',
      'The hardest architectural challenge was processing large PDFs without blowing up server costs or violating privacy. Instead of uploading merchant files to cloud servers, I offloaded all coordinate extraction, invoice stripping, and barcode isolation to browser Web Workers using PDF-Lib and Canvas API.',
      'Customer shipping addresses and GST numbers never touch a server, batch processing time dropped by 40% (under 2 seconds for a 50-page manifest), and server compute costs remain at $0 while keeping Lighthouse scores above 90.',
    ],
    keyMetric: '50,000+ monthly visits · 40% latency reduction · $0 server compute bills',
    liveUrl: 'https://lablecropper.com/',
    githubUrl: 'https://github.com/PrayxisTechnologies/LABLECROPPER',
  },
  {
    id: 'revkit',
    title: 'RevKit — Reverse Engineering & Security Tools Directory',
    category: 'live-apps',
    badge: 'Live Platform · 1,023+ Tools',
    stack: ['TypeScript', 'HTML5', 'Modern CSS', 'GitHub REST API', 'GitHub Actions CI/CD', 'Edge CDN'],
    description: [
      'A curated discovery engine and directory indexing 1,023+ reverse-engineering tools, decompilers, debuggers, and binary analysis frameworks across 13 specialized domains (Android RE, .NET, Firmware, Decompilers, Debuggers).',
      'Most curated lists on GitHub are static markdowns that slowly rot with dead links. I built RevKit on a zero-database Jamstack architecture powered by an automated GitHub Actions CI pipeline that audits stars, release tags, and commit activity on a weekly cron, serializing the catalog into a static, normalized JSON index.',
      'A custom client-side search engine delivers sub-50ms instant query filtering across 1,000+ utilities with zero database latency, sub-100ms cold loads globally via edge CDN, and a 100/100 Core Web Vitals score.',
    ],
    keyMetric: '1,023+ indexed security utilities · 100% automated CI sync · 100/100 Core Web Vitals',
    liveUrl: 'https://revkit.online/',
    githubUrl: 'https://github.com/ronil2149',
  },
  {
    id: 'videlto',
    title: 'Videlto — Commercial Video Ad Studio',
    category: 'live-apps',
    badge: 'Live App · AI Media Engine',
    stack: ['Next.js (App Router)', 'React', 'TypeScript', 'Tailwind CSS', 'Cloudflare CDN', 'Render', 'REST APIs'],
    description: [
      'A commercial video platform that converts static DTC product photography into launch-ready 9:16 vertical video ads for TikTok, Instagram Reels, and YouTube Shorts in under 10 seconds.',
      'Built with Next.js Server Components and deployed across Render and Cloudflare CDN. The hardest technical hurdle was handling bursty video synthesis without dropping HTTP connections. I decoupled scene deconstruction and ad-hook copywriting from the video rendering pipeline using an asynchronous worker queue, streaming preview states back to the client while caching final MP4s at the edge.',
      'Delivers sub-150ms TTFB globally with authentic product fidelity across multiple social ad formats.',
    ],
    keyMetric: 'Sub-10s automated video ad generation · Sub-150ms global TTFB via Cloudflare',
    liveUrl: 'https://videlto.online/',
    githubUrl: 'https://github.com/ronil2149',
  },

  // --- WORK EXPERIENCE ---
  {
    id: 'ambrosia',
    title: 'Ambrosia Natural Foods — E-Commerce Platform Support & Triage',
    category: 'experience',
    badge: 'Experience · Toronto, ON',
    stack: ['JavaScript (ES6+)', 'TypeScript', 'React', 'HTML5', 'CSS3/SCSS', 'Chrome DevTools', 'Postman', 'SQL (PostgreSQL)', 'WCAG 2.1 AA / AODA'],
    description: [
      'Web and frontend support developer for a major Toronto grocery e-commerce storefront. When checkout glitches, cart state bugs, or third-party plugin conflicts happen during peak retail hours, they come straight to my desk.',
      'My day-to-day is rapid root-cause diagnosis: catching unhandled JavaScript errors in Chrome DevTools Network triage, replaying broken REST payloads in Postman, and querying the database directly with SQL to trace the exact corrupted row or bad catalog sync that caused the failure.',
      'Resolved 150+ high-priority production defects, authored our 40+ page internal engineering troubleshooting runbook to cut repeat escalations by 35%, and brought our entire checkout UI into compliance with Ontario’s AODA and WCAG 2.1 AA accessibility standards.',
    ],
    keyMetric: '150+ production bugs resolved · 35% escalation reduction · Full Ontario AODA compliance',
    liveUrl: 'https://ronilportfolio.vercel.app/',
  },
  {
    id: 'uplers',
    title: 'Uplers — Enterprise Web & Cross-Client Campaign Systems',
    category: 'experience',
    badge: 'Experience · Remote',
    stack: ['JavaScript', 'HTML5', 'CSS3', 'Bootstrap', 'Figma', 'Litmus', 'Email on Acid', 'Git'],
    description: [
      'Built responsive marketing landing pages and high-volume email campaign interfaces from Figma designs for global enterprise clients.',
      'The primary technical challenge was overcoming Outlook’s legacy Word-based rendering engine while maintaining pixel-perfect layouts on modern WebKit browsers. I developed modular, reusable hybrid-fluid table components with defensive CSS fallbacks.',
      'Delivered 200+ responsive landing pages and templates with a 99.8% cross-client rendering consistency across 30+ email clients and viewport sizes, cutting turnaround time by 25%.',
    ],
    keyMetric: '200+ responsive interfaces shipped · 99.8% cross-client visual fidelity',
    liveUrl: 'https://ronilportfolio.vercel.app/',
  },
  {
    id: 'sforceservices',
    title: 'SForce Services — Recruitment Portal & Candidate Onboarding',
    category: 'experience',
    badge: 'Experience · Surat, India',
    stack: ['JavaScript', 'Bootstrap', 'Node.js', 'Express.js', 'REST APIs', 'MySQL', 'Git'],
    description: [
      'Developed a centralized candidate onboarding and tracking platform for a recruitment agency, replacing fragmented email spreadsheets with a structured digital pipeline.',
      'Designed normalized MySQL database schemas with foreign-key integrity to track candidate states (applied, interviewed, shortlisted, placed) and built Express REST APIs with asynchronous client validation and document verification.',
      'Automated onboarding for 500+ candidates across 20+ corporate clients, saving more than 15 hours per week of manual administrative paperwork.',
    ],
    keyMetric: '500+ candidate onboardings automated · 15+ hours/week saved',
    githubUrl: 'https://github.com/ronil2149/sforceservices',
  },
  {
    id: 'kmsoft',
    title: 'K.M. Soft — Enterprise Angular SPA & Backend Services',
    category: 'experience',
    badge: 'Experience · Gujarat, India',
    stack: ['Angular', 'TypeScript', 'Node.js', 'Express.js', 'MongoDB', 'Mongoose', 'REST APIs'],
    description: [
      'Built reactive single-page application views in Angular integrated with Node.js/Express backend services and MongoDB.',
      'Engineered reusable component hierarchies with RxJS observable pipelines for asynchronous data streams and dynamic form validation.',
      'Wrote optimized MongoDB aggregation queries and indexed collections, improving query execution times by 30% for high-frequency operational records.',
    ],
    keyMetric: '12+ reactive Angular views · 30% database query speedup',
    liveUrl: 'https://ronilportfolio.vercel.app/',
  },

  // --- EDUCATION: HUMBER COLLEGE ---
  {
    id: 'j2ee-device-protection',
    title: 'Device Protection Portal — Hardware Warranty & Claims Management',
    category: 'humber',
    badge: 'Humber College Capstone',
    stack: ['Java 17', 'J2EE Servlets', 'JSP / JSTL', 'JDBC', 'MySQL', 'Docker', 'Apache Tomcat', 'Maven', 'Render'],
    description: [
      'An enterprise hardware warranty portal where customers register covered devices and file repair claims, while adjusters and admins audit evidence, approve payouts, and generate liability reports.',
      'Built with a clean Java Servlet MVC architecture and a DAO persistence layer over JDBC. To handle concurrent claim submissions reliably, I used connection pooling, prepared statements to eliminate SQL injection, and servlet authentication filters for Role-Based Access Control (RBAC).',
      'Containerized with a multi-stage Docker build on Alpine Linux and deployed on Render with zero memory leaks under concurrent load testing.',
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
    description: [
      'A peer-to-peer equipment rental marketplace for booking tools, cameras, and gear, developed as part of Humber team "Code Blooded".',
      'The hardest engineering challenge was availability scheduling: preventing race conditions and double-booking when two users attempt to reserve the same item for overlapping dates. I implemented date-range overlap validation at the database query layer combined with atomic MongoDB update operations.',
      'User authentication is handled via stateless JWTs stored in secure HTTP-only cookies, with role-based routing protecting renter and owner dashboards.',
    ],
    keyMetric: 'Zero double-booking concurrency bugs · Sub-200ms catalog API response time',
    githubUrl: 'https://github.com/ronil2149/Rent_hub',
  },
  {
    id: 'job-market-graph',
    title: 'Job Market Knowledge Graph — Skill Matching & Recommendations',
    category: 'humber',
    badge: 'Humber College Project',
    stack: ['Neo4j', 'Cypher', 'Graph Data Science (GDS)', 'FastRP Embeddings', 'KNN Graph Algorithms'],
    description: [
      'A Neo4j knowledge-graph project modeling multi-hop relationships between technical skills, job requirements, companies, and emerging market trends.',
      'Relational databases struggle with indirect skill connections because multi-table SQL JOINs become slow and rigid at scale. In Neo4j, I modeled a graph schema connecting Jobs, Skills, Locations, and Companies, then ran Graph Data Science (GDS) algorithms—specifically FastRP node embeddings and K-Nearest Neighbors (KNN)—to calculate cosine similarity.',
      'Delivers personalized job recommendations and skill-gap analysis with sub-second Cypher query traversal.',
    ],
    keyMetric: 'FastRP 64D graph vector embeddings · Sub-45ms Cypher multi-hop query execution',
    githubUrl: 'https://github.com/ronil2149/job-market-knowledge-graph',
  },
  {
    id: 'mental-health-big-data',
    title: 'Workplace Mental Health Analytics — Distributed Big Data Pipeline',
    category: 'humber',
    badge: 'Humber College Capstone',
    stack: ['Apache Spark', 'Spark SQL', 'Spark MLlib', 'Hadoop HDFS', 'Apache Hive', 'Scala'],
    description: [
      'An end-to-end distributed Big Data pipeline analyzing 1,259 workplace mental-health survey responses across 24 variables to predict treatment-seeking behavior in the tech industry.',
      'The raw data was messy—containing 49 unformatted variants for gender and company sizes corrupted into date formats. I ingested the raw data into Hadoop HDFS, defined external Hive schemas, and ran Spark SQL transformations in memory.',
      'Trained Spark MLlib Logistic Regression (0.707 AUC) and Decision Tree (0.695 AUC) models to uncover the workplace factors that most strongly correlate with employees seeking mental health support.',
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
    description: [
      'An interactive Business Intelligence dashboard analyzing over 1,000,000 LAPD crime incident records from 2020 onward, published on Tableau Public.',
      'I wrote the SQL data pipelines to clean, filter, and aggregate noisy municipal open data, structuring dynamic Tableau parameters and geospatial maps so users can drill down into crime density by division, time of day, and weapon type.',
      'Provides actionable intelligence across 21 LAPD geographic divisions with dynamic KPI cards.',
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
    description: [
      'A deep-learning experiment classifying continuous physiological sleep signals (EEG, EOG, EMG) into clinical stages using Python, TensorFlow, and MNE.',
      'I segmented raw recordings into 30-second epochs, applied 50Hz notch and bandpass filters to strip electrical artifacts, and evaluated a hybrid 1D-CNN + Bidirectional LSTM architecture against a CNN-only baseline to capture both local waveform features and temporal transitions.',
      'Documented the full signal processing pipeline and clinical validation limitations in a published research report.',
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
    description: [
      'A single-page application built to explore modern Angular 19 patterns: standalone routed components, typed HttpClient services, and reactive form state management.',
      'Features declarative RxJS observable pipelines for API data fetching with automatic subscription cleanup via AsyncPipe, paired with dynamic reactive forms enforcing real-time validation rules and deployed on Vercel.',
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
    description: [
      'A native Android application built in Kotlin to help senior citizens easily request home assistance, medical check-ins, and companion services.',
      'Designed with senior-friendly high-contrast UI, large touch targets, simplified 2-step booking flows, and local SQLite caching for offline persistence.',
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
    description: [
      'A fast, lightweight restaurant showcase and reservation site built intentionally without heavy JavaScript framework runtimes.',
      'Pure semantic HTML5, modern CSS Grid/Flexbox, and vanilla JavaScript with Swiper.js and localStorage persistence for reservation inquiries. Near-instant cold loads under 500ms and a 98+ mobile Lighthouse score.',
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
    description: [
      'A server-rendered movie discovery application built with Node.js, Express, and Handlebars (HBS), featuring live movie database querying, category filtering, search, and deployment on Vercel.',
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
    description: [
      'Completed in April 2021 during the final semester of my Bachelor of Technology degree in Computer Engineering.',
      'Engineered a complete Model-View-Controller backend with Express routes, middleware, and request controllers handling table reservations, menu catalog updates, and order workflows.',
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
    description: [
      'An interactive timed quiz application built with TypeScript and React, featuring randomized question ordering, real-time score tracking, countdown timers, and answer review summaries.',
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
    description: [
      'Rigorous 4-year Bachelor of Technology in Computer Engineering (Jun 2017 – May 2021) covering core software engineering principles.',
      'Deep foundations in relational database schema normalization (3NF/BCNF), query execution plan optimization, multi-threaded process scheduling, object-oriented design patterns, and network socket programming.',
    ],
    keyMetric: 'B.Tech in Computer Engineering degree conferred with Software & Database focus',
    githubUrl: 'https://github.com/ronil2149/Web_Programming_ITS',
  },
];

export interface Project {
  id: string;
  title: string;
  category: 'live-apps' | 'experience' | 'humber' | 'btech';
  badge: string;
  stack: string[];
  summary: string;
  highlights: string[];
  liveUrl?: string;
  githubUrl?: string;
  githubLabel?: string;
}

export const CATEGORIES = [
  { id: 'live-apps', label: 'Production Live Apps', anchor: 'live-apps' },
  { id: 'experience', label: 'Work Experience', anchor: 'experience' },
  { id: 'humber', label: 'Humber College', anchor: 'humber' },
  { id: 'btech', label: 'B.Tech Engineering', anchor: 'btech' },
  { id: 'all', label: 'All Projects', anchor: 'work' },
] as const;

export type CategoryId = (typeof CATEGORIES)[number]['id'];

export const PROJECTS: Project[] = [
  // --- PRODUCTION LIVE APPS ---
  {
    id: 'labelcropper',
    title: 'LabelCropper — High-Volume Shipping Label Processor',
    category: 'live-apps',
    badge: 'Live App · 50K+ Monthly Visits',
    stack: ['React 19', 'TypeScript', 'Node.js', 'Express', 'Supabase Auth', 'Web Workers', 'PDF-Lib'],
    summary: 'A browser-based shipping label formatter used by 50,000+ monthly e-commerce sellers on Meesho, Flipkart, and Amazon.',
    highlights: [
      'Moved all PDF parsing, invoice stripping, and 4x6 label cropping client-side into Web Workers using PDF-Lib.',
      'Kept customer shipping data and GST details entirely in the browser, eliminating server compute bills and privacy risks.',
      'Cut batch processing time by 40% (under 2s for 50 pages) while keeping a 90+ Lighthouse score.',
    ],
    liveUrl: 'https://lablecropper.com/',
    githubUrl: 'https://github.com/PrayxisTechnologies/LABLECROPPER',
    githubLabel: 'GitHub repository ↗',
  },
  {
    id: 'revkit',
    title: 'RevKit — Reverse Engineering & Security Tools Directory',
    category: 'live-apps',
    badge: 'Live Platform · 1,023+ Tools',
    stack: ['TypeScript', 'HTML5', 'Modern CSS', 'GitHub REST API', 'GitHub Actions CI/CD', 'Edge CDN'],
    summary: 'A curated directory indexing 1,023+ reverse-engineering tools, decompilers, and debuggers for security researchers.',
    highlights: [
      'Replaced static GitHub awesome-lists with an automated CI pipeline that checks stars, tags, and commits weekly.',
      'Built a client-side search engine that filters across 13 security categories in under 50ms with zero database round-trips.',
      'Hosted statically on an edge CDN for sub-100ms cold loads and a perfect 100/100 Core Web Vitals score.',
    ],
    liveUrl: 'https://revkit.online/',
    githubLabel: 'Private Commercial Repo · Case Study',
  },
  {
    id: 'videlto',
    title: 'Videlto — Commercial Video Ad Studio',
    category: 'live-apps',
    badge: 'Live App · Video Engine',
    stack: ['Next.js (App Router)', 'React', 'TypeScript', 'Tailwind CSS', 'Cloudflare CDN', 'Render'],
    summary: 'A video studio web app that turns static e-commerce product photos into 9:16 vertical video ads for TikTok and Instagram Reels.',
    highlights: [
      'Built the full-stack web app with Next.js App Router, React, and an asynchronous rendering pipeline.',
      'Decoupled video composition from web requests using worker queues so user previews stream without timeout errors.',
      'Cached rendered assets on Cloudflare CDN to keep global TTFB under 150ms.',
    ],
    liveUrl: 'https://videlto.online/',
    githubLabel: 'Private Commercial Repo · Case Study',
  },

  // --- WORK EXPERIENCE ---
  {
    id: 'ambrosia',
    title: 'Ambrosia Natural Foods — E-Commerce Platform Support & Triage',
    category: 'experience',
    badge: 'Experience · Toronto, ON',
    stack: ['JavaScript (ES6+)', 'TypeScript', 'React', 'HTML5', 'CSS3', 'Chrome DevTools', 'Postman', 'SQL', 'AODA'],
    summary: 'Supported customer-facing storefront operations and resolved production defects for a major Toronto grocery retailer.',
    highlights: [
      'Fixed 150+ live production issues across checkout flows, cart state, and UI rendering using Chrome DevTools.',
      'Traced data mismatches across browser network requests, Postman API calls, and SQL database queries.',
      'Wrote internal troubleshooting runbooks that cut repeat escalations by 35% and brought the site into Ontario AODA compliance.',
    ],
    liveUrl: 'https://ronilportfolio.vercel.app/',
  },
  {
    id: 'uplers',
    title: 'Uplers — Enterprise Web & Cross-Client Campaign Systems',
    category: 'experience',
    badge: 'Experience · Remote',
    stack: ['JavaScript', 'HTML5', 'CSS3', 'Bootstrap', 'Figma', 'Litmus', 'Git'],
    summary: 'Developed responsive landing pages and cross-client email campaign interfaces for enterprise agency clients.',
    highlights: [
      'Built modular UI components and marketing pages from Figma designs using JavaScript, HTML5, CSS3, and Bootstrap.',
      'Tested across 30+ email clients and viewport sizes, fixing Outlook rendering bugs to achieve 99.8% cross-client consistency.',
      'Created reusable template patterns that reduced production turnaround times by 25%.',
    ],
    liveUrl: 'https://ronilportfolio.vercel.app/',
  },
  {
    id: 'sforceservices',
    title: 'SForce Services — Recruitment Portal & Candidate Onboarding',
    category: 'experience',
    badge: 'Experience · Surat, India',
    stack: ['JavaScript', 'Bootstrap', 'Node.js', 'Express.js', 'REST APIs', 'MySQL', 'Git'],
    summary: 'A candidate onboarding and tracking portal built to replace fragmented spreadsheets for a recruitment agency.',
    highlights: [
      'Built an Express and MySQL backend with normalized tables tracking candidate stages from application to placement.',
      'Created responsive recruiter dashboards with client-side form validation and status-change triggers.',
      'Automated onboarding for 500+ candidates across 20 corporate clients, saving 15+ hours of weekly manual work.',
    ],
    githubUrl: 'https://github.com/ronil2149/sforceservices',
  },
  {
    id: 'kmsoft',
    title: 'K.M. Soft — Enterprise Angular SPA & Backend Services',
    category: 'experience',
    badge: 'Experience · Gujarat, India',
    stack: ['Angular', 'TypeScript', 'Node.js', 'Express.js', 'MongoDB', 'Mongoose', 'REST APIs'],
    summary: 'Built single-page application features and backend microservices for an enterprise operations platform.',
    highlights: [
      'Created reusable Angular components with reactive forms and RxJS observable streams.',
      'Developed Node.js and Express REST APIs connecting business workflows to MongoDB.',
      'Added compound database indexes and optimized queries, speeding up common data lookups by 30%.',
    ],
    liveUrl: 'https://ronilportfolio.vercel.app/',
  },

  // --- EDUCATION: HUMBER COLLEGE ---
  {
    id: 'j2ee-device-protection',
    title: 'Device Protection Portal — Hardware Warranty & Claims Management',
    category: 'humber',
    badge: 'Humber College Capstone',
    stack: ['Java 17', 'J2EE Servlets', 'JSP / JSTL', 'JDBC', 'MySQL', 'Docker', 'Apache Tomcat', 'Maven', 'Render'],
    summary: 'An enterprise hardware warranty portal where customers register devices and adjusters review repair claims.',
    highlights: [
      'Implemented a Java Servlet MVC architecture with a DAO persistence layer over JDBC and MySQL.',
      'Added connection pooling, prepared statements to block SQL injection, and servlet filters for role-based access control.',
      'Packaged as a lightweight multi-stage Docker container deployed on Render with zero memory leaks under load.',
    ],
    liveUrl: 'https://j2ee-device-protection-project.onrender.com',
    githubUrl: 'https://github.com/ronil2149/j2ee-device-protection-project',
  },
  {
    id: 'renthub',
    title: 'RentHub — Peer-to-Peer Rental Marketplace',
    category: 'humber',
    badge: 'Humber College Project',
    stack: ['TypeScript', 'Next.js 14', 'React', 'Node.js', 'MongoDB', 'Mongoose', 'JWT', 'Tailwind CSS'],
    summary: 'A peer-to-peer equipment rental web app for booking cameras, audio gear, and tools without scheduling conflicts.',
    highlights: [
      'Engineered date-range overlap validation in MongoDB to prevent double-booking when users reserve the same item.',
      'Implemented stateless JWT authentication stored in HTTP-only cookies with role-based routing.',
      'Maintained sub-200ms catalog search and reservation response times during stress tests.',
    ],
    githubUrl: 'https://github.com/ronil2149/Rent_hub',
  },
  {
    id: 'job-market-graph',
    title: 'Job Market Knowledge Graph — Skill Matching & Recommendations',
    category: 'humber',
    badge: 'Humber College Project',
    stack: ['Neo4j', 'Cypher', 'Graph Data Science (GDS)', 'FastRP Embeddings', 'KNN Graph Algorithms'],
    summary: 'A Neo4j knowledge graph connecting skills, job requirements, and companies to discover hidden career pathways.',
    highlights: [
      'Replaced slow multi-table relational SQL JOINs with a native graph schema in Neo4j and Cypher.',
      'Generated 64-dimensional FastRP node embeddings and used K-Nearest Neighbors to match candidates to relevant jobs.',
      'Executed multi-hop skill-gap queries in under 45ms across thousands of tech postings.',
    ],
    githubUrl: 'https://github.com/ronil2149/job-market-knowledge-graph',
  },
  {
    id: 'mental-health-big-data',
    title: 'Workplace Mental Health Analytics — Distributed Big Data Pipeline',
    category: 'humber',
    badge: 'Humber College Capstone',
    stack: ['Apache Spark', 'Spark SQL', 'Spark MLlib', 'Hadoop HDFS', 'Apache Hive', 'Scala'],
    summary: 'A distributed Big Data analytics pipeline that predicts workplace mental health treatment-seeking trends in tech.',
    highlights: [
      'Ingested 1,259 messy survey responses into Hadoop HDFS and cleaned corrupted columns using Spark SQL.',
      'Trained Spark MLlib Logistic Regression (0.707 AUC) and Decision Tree (0.695 AUC) models to identify key workplace factors.',
      'Built an interactive visualization web dashboard hosted on GitHub Pages to showcase insights.',
    ],
    liveUrl: 'https://ronil2149.github.io/mental-health-big-data-analytics/',
    githubUrl: 'https://github.com/ronil2149/mental-health-big-data-analytics',
  },
  {
    id: 'los-angeles-crime-dashboard',
    title: 'Los Angeles Crime Trends — BI Geospatial Intelligence',
    category: 'humber',
    badge: 'Humber College Project',
    stack: ['Tableau BI', 'SQL', 'Geospatial Analysis', 'Open Data ETL'],
    summary: 'An interactive business intelligence dashboard analyzing over 1,000,000 LAPD crime incidents from 2020 onward.',
    highlights: [
      'Wrote SQL queries to clean, aggregate, and normalize raw open municipal records across 21 LAPD divisions.',
      'Built dynamic Tableau maps and parameters letting users filter crime incidents by neighborhood, weapon, and time of day.',
      'Published publicly on Tableau Public with responsive KPI metric cards.',
    ],
    liveUrl: 'https://public.tableau.com/app/profile/ronil.ghoghari3778/viz/Final_Project_Code_Blooded/Dashboard1?publish=yes',
    githubUrl: 'https://github.com/ronil2149/los-angeles-crime-trends-tableau-dashboard',
  },
  {
    id: 'sleep-stage-classification',
    title: 'Sleep Stage Classification — Hybrid CNN + BiLSTM',
    category: 'humber',
    badge: 'Humber College Project',
    stack: ['Python', 'TensorFlow', 'Keras', 'MNE', '1D-CNN', 'BiLSTM', 'Biomedical Signal Processing'],
    summary: 'A deep learning biomedical signal pipeline classifying continuous sleep recordings (EEG, EOG, EMG) into clinical stages.',
    highlights: [
      'Segmented raw physiological signals into 30-second epochs and applied 50Hz notch and bandpass filters using MNE.',
      'Built a hybrid 1D-CNN + Bidirectional LSTM in TensorFlow to capture both local waveform shape and temporal transitions.',
      'Evaluated model performance against clinical sleep annotations and published findings in a research report.',
    ],
    githubUrl: 'https://github.com/ronil2149/sleep-stage-classification-deep-learning',
  },
  {
    id: 'angular-spa',
    title: 'Angular 19 SPA — Reactive Forms & RxJS State',
    category: 'humber',
    badge: 'Humber College Project',
    stack: ['Angular 19', 'TypeScript', 'RxJS', 'HttpClient', 'Reactive Forms', 'Vercel'],
    summary: 'A modern Angular 19 single-page application demonstrating standalone components and reactive state streams.',
    highlights: [
      'Implemented standalone routed components with typed HttpClient services and AsyncPipe subscription management.',
      'Built dynamic reactive forms with real-time validation and clean error handling.',
      'Deployed directly to Vercel edge with fast initial render times and zero unhandled subscriptions.',
    ],
    liveUrl: 'https://angular-assignment-umber.vercel.app',
    githubUrl: 'https://github.com/ronil2149/angular_assignment',
  },
  {
    id: 'senior-services-app',
    title: 'Senior Services Mobile App — Native Android Assistance System',
    category: 'humber',
    badge: 'Humber College Capstone',
    stack: ['Kotlin', 'Android SDK', 'SQLite', 'Material Design', 'Gradle'],
    summary: 'A native Android assistance application designed to help senior citizens request home and medical check-in services.',
    highlights: [
      'Built in Kotlin with high-contrast Material Design components, large touch targets, and a simple 2-step booking flow.',
      'Implemented local SQLite database caching so elderly users can access emergency contact information offline.',
      'Tested touch accessibility and battery performance across real Android devices.',
    ],
    githubUrl: 'https://github.com/ronil2149/senior-services-app',
  },
  {
    id: 'trinity-restaurant',
    title: 'Trinity Dining & Reservations — Performance Showcase',
    category: 'humber',
    badge: 'Humber College Project',
    stack: ['HTML5', 'CSS3', 'JavaScript (ES6+)', 'jQuery', 'Swiper.js', 'GitHub Pages'],
    summary: 'A fast, lightweight restaurant showcase and reservation site built without heavy JavaScript frameworks.',
    highlights: [
      'Built with pure semantic HTML5, modern CSS Grid/Flexbox, and vanilla JavaScript.',
      'Integrated Swiper.js for menu galleries and localStorage to retain reservation inquiries across sessions.',
      'Achieved sub-500ms cold loads and a 98+ mobile Lighthouse score with zero runtime bundle overhead.',
    ],
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
    summary: 'A server-rendered movie discovery portal built with Node.js, Express, and Handlebars templates.',
    highlights: [
      'Integrated external movie database REST APIs with server-side caching for fast page delivery.',
      'Built genre filtering, search, and dynamic layout templates using Handlebars (HBS).',
      'Deployed on Vercel with responsive mobile and desktop layouts.',
    ],
    liveUrl: 'https://movie-webapp-seven.vercel.app',
    githubUrl: 'https://github.com/ronil2149/movie_webapp',
  },
  {
    id: 'restaurant-backend',
    title: 'Restaurant Order & Table Management Backend',
    category: 'btech',
    badge: 'Uka Tarsadia University · B.Tech Capstone',
    stack: ['JavaScript (Node.js)', 'Express.js', 'MVC Architecture', 'REST APIs', 'Middleware'],
    summary: 'A complete RESTful backend for managing restaurant table reservations, menus, and order workflows.',
    highlights: [
      'Structured with Express MVC architecture, separation of concerns, and reusable request middleware.',
      'Handled input sanitization, error propagation, and route controllers for table booking operations.',
      'Completed as my B.Tech Computer Engineering capstone in April 2021.',
    ],
    githubUrl: 'https://github.com/ronil2149/restaurant',
  },
  {
    id: 'quiz-app',
    title: 'Quiz Web Application — Interactive Assessment Engine',
    category: 'btech',
    badge: 'Uka Tarsadia University',
    stack: ['TypeScript', 'React', 'HTML5', 'CSS3', 'LocalStorage'],
    summary: 'An interactive timed assessment web app built with React and TypeScript.',
    highlights: [
      'Built state-driven question progression, randomized answer ordering, and real-time countdown timers.',
      'Stored exam state in localStorage to prevent data loss on accidental page refreshes.',
      'Provided instant score summaries and answer reviews upon quiz completion.',
    ],
    githubUrl: 'https://github.com/ronil2149/quiz-app',
  },
  {
    id: 'btech-foundations',
    title: 'Computer Engineering Foundations — Systems & Distributed Computing',
    category: 'btech',
    badge: 'Uka Tarsadia University · B.Tech Degree',
    stack: ['C++', 'Java', 'SQL (MySQL)', 'Data Structures & Algorithms', 'Operating Systems', 'Networks'],
    summary: 'Undergraduate degree in Computer Engineering (Jun 2017 – May 2021) focusing on software systems and databases.',
    highlights: [
      'Studied relational database schema normalization (3NF/BCNF), indexing strategies, and SQL query plans.',
      'Built core foundations in data structures, algorithms, operating system process scheduling, and socket programming.',
      'Completed coursework and labs in C++, Java, MySQL, and full-stack web development.',
    ],
    githubUrl: 'https://github.com/ronil2149/Web_Programming_ITS',
  },
];

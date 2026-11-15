import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Data, AI & Analytics — Ronil Ghoghari',
  description: 'Machine learning, graph databases, big data pipelines, and analytics projects by Ronil Ghoghari.',
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

export default function DataAiProjectsPage() {
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
            <span>02</span>
            <span>Deep Dive Hub</span>
          </div>
          <h1 className="project-page-title">Data, AI &amp; Analytics</h1>
          <p className="project-page-description">
            Knowledge graphs, distributed big data pipelines, machine learning models, and interactive business intelligence.
          </p>
        </header>

        <div className="strata project-page-projects">
          {/* Job Market Knowledge Graph */}
          <article className="seam project-card">
            <div className="project-card-header">
              <span className="category-badge category-badge--humber">Humber College Project</span>
              <h3>
                <a href="https://github.com/ronil2149/job-market-knowledge-graph" target="_blank" rel="noopener noreferrer">
                  Job Market Knowledge Graph — Skill Matching &amp; Recommendations
                </a>
              </h3>
              <p className="stack">Neo4j · Cypher · Graph Data Science (GDS) · FastRP Node Embeddings · KNN</p>
              <div className="project-links">
                <a className="code-link" href="https://github.com/ronil2149/job-market-knowledge-graph" target="_blank" rel="noopener noreferrer">
                  GitHub repository ↗
                </a>
              </div>
            </div>
            <div className="project-card-body">
              <p className="project-summary">
                A Neo4j knowledge graph connecting skills, job requirements, and companies to discover hidden career pathways.
              </p>
              <ul className="project-bullets">
                <li>Replaced slow multi-table relational SQL JOINs with a native graph schema in Neo4j and Cypher.</li>
                <li>Generated 64-dimensional FastRP node embeddings and used K-Nearest Neighbors to match candidates to relevant jobs.</li>
                <li>Executed multi-hop skill-gap queries in under 45ms across thousands of real tech postings.</li>
              </ul>
            </div>
          </article>

          {/* Workplace Mental Health */}
          <article className="seam project-card">
            <div className="project-card-header">
              <span className="category-badge category-badge--humber">Humber College Capstone</span>
              <h3>
                <a href="https://github.com/ronil2149/mental-health-big-data-analytics" target="_blank" rel="noopener noreferrer">
                  Workplace Mental Health Analytics — Distributed Big Data Pipeline
                </a>
              </h3>
              <p className="stack">Hadoop HDFS · Apache Hive · Apache Spark · Spark SQL · Spark MLlib · Scala · GitHub Pages</p>
              <div className="project-links">
                <a className="live" href="https://ronil2149.github.io/mental-health-big-data-analytics/" target="_blank" rel="noopener noreferrer">
                  View portfolio visualization →
                </a>
                <a className="code-link" href="https://github.com/ronil2149/mental-health-big-data-analytics" target="_blank" rel="noopener noreferrer">
                  GitHub repository ↗
                </a>
              </div>
            </div>
            <div className="project-card-body">
              <p className="project-summary">
                A distributed Big Data analytics pipeline that predicts workplace mental health treatment-seeking trends in tech.
              </p>
              <ul className="project-bullets">
                <li>Ingested 1,259 messy survey responses into Hadoop HDFS and cleaned corrupted columns using Spark SQL.</li>
                <li>Trained Spark MLlib Logistic Regression (0.707 AUC) and Decision Tree (0.695 AUC) models to identify key workplace factors.</li>
                <li>Built an interactive visualization web dashboard hosted on GitHub Pages to showcase insights.</li>
              </ul>
            </div>
          </article>

          {/* Sleep Stage Classification */}
          <article className="seam project-card">
            <div className="project-card-header">
              <span className="category-badge category-badge--humber">Humber College Project</span>
              <h3>
                <a href="https://github.com/ronil2149/sleep-stage-classification-deep-learning" target="_blank" rel="noopener noreferrer">
                  Sleep Stage Classification — Hybrid CNN + BiLSTM
                </a>
              </h3>
              <p className="stack">Python · TensorFlow · Keras · MNE · 1D-CNN · BiLSTM · Signal Processing</p>
              <div className="project-links">
                <a className="code-link" href="https://github.com/ronil2149/sleep-stage-classification-deep-learning" target="_blank" rel="noopener noreferrer">
                  GitHub repository ↗
                </a>
              </div>
            </div>
            <div className="project-card-body">
              <p className="project-summary">
                A deep learning biomedical signal pipeline classifying continuous sleep recordings (EEG, EOG, EMG) into clinical stages.
              </p>
              <ul className="project-bullets">
                <li>Segmented raw physiological signals into 30-second epochs and applied 50Hz notch and bandpass filters using MNE.</li>
                <li>Built a hybrid 1D-CNN + Bidirectional LSTM in TensorFlow to capture both local waveform shape and temporal transitions.</li>
                <li>Evaluated model performance against clinical sleep annotations and published findings in a research report.</li>
              </ul>
            </div>
          </article>

          {/* Los Angeles Crime Trends */}
          <article className="seam project-card">
            <div className="project-card-header">
              <span className="category-badge category-badge--humber">Humber College Project</span>
              <h3>
                <a href="https://github.com/ronil2149/los-angeles-crime-trends-tableau-dashboard" target="_blank" rel="noopener noreferrer">
                  Los Angeles Crime Trends — BI Geospatial Intelligence
                </a>
              </h3>
              <p className="stack">Tableau BI · Advanced SQL · Geospatial Analysis · Open Data ETL</p>
              <div className="project-links">
                <a className="live" href="https://public.tableau.com/app/profile/ronil.ghoghari3778/viz/Final_Project_Code_Blooded/Dashboard1?publish=yes" target="_blank" rel="noopener noreferrer">
                  Explore live dashboard →
                </a>
                <a className="code-link" href="https://github.com/ronil2149/los-angeles-crime-trends-tableau-dashboard" target="_blank" rel="noopener noreferrer">
                  GitHub case study ↗
                </a>
              </div>
            </div>
            <div className="project-card-body">
              <p className="project-summary">
                An interactive business intelligence dashboard analyzing over 1,000,000 LAPD crime incidents from 2020 onward.
              </p>
              <ul className="project-bullets">
                <li>Wrote SQL queries to clean, aggregate, and normalize raw open municipal records across 21 LAPD divisions.</li>
                <li>Built dynamic Tableau maps and parameters letting users filter crime incidents by neighborhood, weapon, and time of day.</li>
                <li>Published publicly on Tableau Public with responsive KPI metric cards.</li>
              </ul>
            </div>
          </article>

          {/* Spotify Analytics */}
          <article className="seam project-card">
            <div className="project-card-header">
              <span className="category-badge category-badge--humber">Humber College Project</span>
              <h3>
                <a href="https://github.com/ronil2149/spotify-tracks-analytics-dashboard" target="_blank" rel="noopener noreferrer">
                  Spotify Tracks Analytics Dashboard — Interactive Audio Feature Explorer
                </a>
              </h3>
              <p className="stack">R · Shiny · dplyr · ggplot2 · Exploratory Data Analysis (EDA) · Audio Analytics</p>
              <div className="project-links">
                <a className="code-link" href="https://github.com/ronil2149/spotify-tracks-analytics-dashboard" target="_blank" rel="noopener noreferrer">
                  GitHub repository ↗
                </a>
              </div>
            </div>
            <div className="project-card-body">
              <p className="project-summary">
                An interactive audio analysis dashboard exploring track features and acoustic correlations across 114,000 songs.
              </p>
              <ul className="project-bullets">
                <li>Built an R Shiny application with dynamic multi-variable filtering over danceability, energy, and acousticness.</li>
                <li>Used dplyr pipelines for fast data aggregation and ggplot2 for clear audio feature distribution charts.</li>
                <li>Delivered sub-second reactive updates across genre and popularity queries.</li>
              </ul>
            </div>
          </article>
        </div>

        <footer className="project-page-footer">
          <Link className="project-footer-back" href="/#work">
            ← Back to All Portfolio Projects
          </Link>
          <Link className="project-footer-next" href="/projects/software">
            <span>Next category</span>
            <strong>Software &amp; Web Development Hub →</strong>
          </Link>
        </footer>
      </section>
    </main>
  );
}

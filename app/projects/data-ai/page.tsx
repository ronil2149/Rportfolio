import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Data, AI & Analytics — Ronil Ghoghari',
  description: 'Machine learning, big data, graph analytics, BI and data visualization projects by Ronil Ghoghari.',
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
            Knowledge graphs, distributed big data pipelines, machine learning classifiers, and interactive business intelligence.
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
            <div className="project-card-details">
              <div className="project-detail-section">
                <span className="detail-label">Problem:</span>
                <p>
                  Relational databases cannot efficiently traverse complex, multi-hop relationships between technical skills, job requirements, companies, and emerging market trends, making candidate-job matching rigid and inaccurate.
                </p>
              </div>
              <div className="project-detail-section">
                <span className="detail-label">Architecture &amp; Trade-offs:</span>
                <p>
                  Modeled a graph network connecting Jobs, Skills, Locations, and Companies. Employed Neo4j Graph Data Science to execute FastRP (Fast Random Projection) graph algorithms, generating low-dimensional node embeddings for jobs and calculating cosine similarity via KNN to generate personalized job recommendations.
                </p>
              </div>
              <div className="project-detail-section project-detail-section--result">
                <span className="detail-label">Quantified Result:</span>
                <p>
                  <strong>Evaluated over thousands of real tech postings; generated similarity-based career recommendations with sub-second Cypher graph traversal.</strong>
                </p>
              </div>
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
            <div className="project-card-details">
              <div className="project-detail-section">
                <span className="detail-label">Problem:</span>
                <p>
                  Enterprise survey datasets contained noisy, unstandardized entries (49 raw variations of gender, corrupted dates in company size), making predictive modeling of employee mental health support seeking impossible without robust ETL.
                </p>
              </div>
              <div className="project-detail-section">
                <span className="detail-label">Architecture &amp; Trade-offs:</span>
                <p>
                  Ingested raw data into HDFS, defined external Hive schemas, and executed distributed ETL transformations using Spark SQL. Trained distributed classification models in Spark MLlib (Logistic Regression vs. Decision Trees) with stratified cross-validation.
                </p>
              </div>
              <div className="project-detail-section project-detail-section--result">
                <span className="detail-label">Quantified Result:</span>
                <p>
                  <strong>Cleaned and normalized 1,259 survey responses across 24 workplace variables; achieved 0.707 AUC (Logistic Regression) and 0.695 AUC (Decision Tree); deployed interactive portfolio summary visualization on GitHub Pages.</strong>
                </p>
              </div>
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
            <div className="project-card-details">
              <div className="project-detail-section">
                <span className="detail-label">Problem:</span>
                <p>
                  Manual clinical scoring of 8-hour polysomnography (PSG) recordings (EEG, EOG, EMG) into 5 sleep stages is labor-intensive, error-prone, and takes clinicians 2–3 hours per patient.
                </p>
              </div>
              <div className="project-detail-section">
                <span className="detail-label">Architecture &amp; Trade-offs:</span>
                <p>
                  Processed continuous physiological signals into 30-second epochs with notch filtering (50Hz) and bandpass filtering (0.5–35Hz); evaluated a 1D-CNN feature extractor followed by a BiLSTM for temporal sequence learning versus a CNN-only baseline.
                </p>
              </div>
              <div className="project-detail-section project-detail-section--result">
                <span className="detail-label">Quantified Result:</span>
                <p>
                  <strong>Built an end-to-end signal processing and deep-learning pipeline; documented clinical validation limitations and mitigation strategies in published research report.</strong>
                </p>
              </div>
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
            <div className="project-card-details">
              <div className="project-detail-section">
                <span className="detail-label">Problem:</span>
                <p>
                  Municipal open data is massive and noisy, preventing city planners and community stakeholders from identifying crime patterns, response times, and weapon usage across neighborhoods.
                </p>
              </div>
              <div className="project-detail-section">
                <span className="detail-label">Architecture &amp; Trade-offs:</span>
                <p>
                  Formulated optimized SQL data pipelines to filter, aggregate, and normalize over 1,000,000 LAPD crime records from 2020 onward; structured dynamic Tableau parameters and geospatial maps for division-level drill-downs.
                </p>
              </div>
              <div className="project-detail-section project-detail-section--result">
                <span className="detail-label">Quantified Result:</span>
                <p>
                  <strong>Analyzed 1M+ incident records across 21 geographic divisions; interactive public dashboard published on Tableau Public with 10+ custom KPIs and heatmaps.</strong>
                </p>
              </div>
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
            <div className="project-card-details">
              <div className="project-detail-section">
                <span className="detail-label">Problem:</span>
                <p>
                  Music curators and listeners struggle to analyze multidimensional audio metrics (danceability, acousticness, tempo, valence) across thousands of songs without dynamic filtering and correlation visualizations.
                </p>
              </div>
              <div className="project-detail-section">
                <span className="detail-label">Architecture &amp; Trade-offs:</span>
                <p>
                  Engineered an R Shiny interactive dashboard powered by dplyr data pipelines and ggplot2 visualizations over a 114,000-track Spotify dataset with dynamic multi-variable filtering.
                </p>
              </div>
              <div className="project-detail-section project-detail-section--result">
                <span className="detail-label">Quantified Result:</span>
                <p>
                  <strong>Normalized and parsed 114,000 track records with sub-second reactive filter updates across genre, popularity, and acoustic property views.</strong>
                </p>
              </div>
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

'use client';

import React, { useState, useEffect, useTransition } from 'react';
import { CATEGORIES, PROJECTS, CategoryId, Project } from '@/lib/projectsData';

export function ProjectsFilter() {
  const [activeCategory, setActiveCategory] = useState<CategoryId>('live-apps');
  const [, startTransition] = useTransition();

  useEffect(() => {
    function syncFromUrl() {
      const hash = window.location.hash.replace('#', '').toLowerCase();
      const params = new URLSearchParams(window.location.search);
      const catParam = params.get('category')?.toLowerCase();
      const target = catParam || hash;

      if (target === 'live-apps' || target === 'live' || target === 'apps') {
        setActiveCategory('live-apps');
      } else if (target === 'experience' || target === 'work-experience' || target === 'jobs') {
        setActiveCategory('experience');
      } else if (target === 'humber' || target === 'humber-college' || target === 'it-solutions') {
        setActiveCategory('humber');
      } else if (target === 'btech' || target === 'b-tech' || target === 'university') {
        setActiveCategory('btech');
      } else if (target === 'work' || target === 'all' || target === 'projects') {
        setActiveCategory('all');
      }
    }

    syncFromUrl();
    window.addEventListener('hashchange', syncFromUrl);
    window.addEventListener('popstate', syncFromUrl);
    return () => {
      window.removeEventListener('hashchange', syncFromUrl);
      window.removeEventListener('popstate', syncFromUrl);
    };
  }, []);

  const handleSelectCategory = (categoryId: CategoryId) => {
    startTransition(() => {
      setActiveCategory(categoryId);
      const catObj = CATEGORIES.find((c) => c.id === categoryId);
      const anchor = catObj ? catObj.anchor : 'work';
      window.history.replaceState(null, '', `#${anchor}`);
    });
  };

  const filteredProjects = activeCategory === 'all'
    ? PROJECTS
    : PROJECTS.filter((p) => p.category === activeCategory);

  return (
    <div className="projects-filter-wrapper" id="projects-filter">
      {/* Category Filter Pills */}
      <div className="filter-nav" role="tablist" aria-label="Filter projects by category">
        {CATEGORIES.map((cat) => {
          const count = cat.id === 'all'
            ? PROJECTS.length
            : PROJECTS.filter((p) => p.category === cat.id).length;
          const isActive = activeCategory === cat.id;

          return (
            <button
              key={cat.id}
              role="tab"
              aria-selected={isActive}
              aria-controls={`panel-${cat.id}`}
              id={`tab-${cat.id}`}
              className={`filter-btn ${isActive ? 'filter-btn--active' : ''}`}
              onClick={() => handleSelectCategory(cat.id)}
            >
              <span>{cat.label}</span>
              <span className="filter-btn-count">{count}</span>
            </button>
          );
        })}
      </div>

      {/* Projects List */}
      <div
        className="strata project-cards-grid"
        role="tabpanel"
        id={`panel-${activeCategory}`}
        aria-labelledby={`tab-${activeCategory}`}
      >
        {filteredProjects.map((project: Project) => (
          <article key={project.id} className="seam project-card" id={project.id}>
            <div className="project-card-header">
              <span className={`project-badge project-badge--${project.category}`}>
                {project.badge}
              </span>
              <h3>
                {project.liveUrl ? (
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                    {project.title}
                  </a>
                ) : project.githubUrl ? (
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    {project.title}
                  </a>
                ) : (
                  <span>{project.title}</span>
                )}
              </h3>
              <p className="stack">{project.stack.join(' · ')}</p>

              <div className="project-links">
                {project.liveUrl && (
                  <a className="live" href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                    Open running app →
                  </a>
                )}
                {project.githubUrl && (
                  <a className="code-link" href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    GitHub repository ↗
                  </a>
                )}
              </div>
            </div>

            <div className="project-card-body">
              {project.previewImage && (
                <div className="project-preview-frame">
                  <img
                    src={project.previewImage}
                    alt={`${project.title} preview`}
                    loading="lazy"
                    className="project-preview-img"
                  />
                </div>
              )}

              {project.description.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}

              {project.keyMetric && (
                <div className="project-key-metric">
                  <span className="metric-dot" aria-hidden="true" />
                  <span>{project.keyMetric}</span>
                </div>
              )}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

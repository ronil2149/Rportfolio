'use client';

import React, { useState, useEffect, useTransition } from 'react';
import { CATEGORIES, PROJECTS, CategoryId, Project } from '@/lib/projectsData';

type ProjectCategoryId = Exclude<CategoryId, 'experience' | 'all'>;

const PROJECT_CATEGORIES = CATEGORIES.filter(
  (category) => category.id !== 'experience' && category.id !== 'all'
);
const PORTFOLIO_PROJECTS = PROJECTS.filter((project) => project.category !== 'experience');

export function ProjectsFilter() {
  const [activeCategory, setActiveCategory] = useState<ProjectCategoryId>('live-apps');
  const [, startTransition] = useTransition();

  useEffect(() => {
    function syncFromUrl() {
      const hash = window.location.hash.replace('#', '').toLowerCase();
      const params = new URLSearchParams(window.location.search);
      const catParam = params.get('category')?.toLowerCase();
      const target = catParam || hash;

      if (
        target === 'live-apps' || target === 'live' || target === 'apps' ||
        target === 'work' || target === 'all' || target === 'projects'
      ) {
        setActiveCategory('live-apps');
      } else if (target === 'humber' || target === 'humber-college' || target === 'it-solutions') {
        setActiveCategory('humber');
      } else if (target === 'btech' || target === 'b-tech' || target === 'university') {
        setActiveCategory('btech');
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

  const handleSelectCategory = (categoryId: ProjectCategoryId) => {
    startTransition(() => {
      setActiveCategory(categoryId);
      const catObj = PROJECT_CATEGORIES.find((c) => c.id === categoryId);
      const anchor = catObj ? catObj.anchor : 'work';
      const url = new URL(window.location.href);
      url.searchParams.delete('category');
      url.hash = anchor;
      window.history.replaceState(null, '', `${url.pathname}${url.search}${url.hash}`);
    });
  };

  const filteredProjects = PORTFOLIO_PROJECTS.filter((p) => p.category === activeCategory);

  return (
    <div className="projects-filter-wrapper" id="projects-filter">
      {/* Category Filter Pills */}
      <div className="filter-nav" role="tablist" aria-label="Filter projects by category">
        {PROJECT_CATEGORIES.map((cat) => {
          const count = PORTFOLIO_PROJECTS.filter((p) => p.category === cat.id).length;
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

              {(project.liveUrl || project.githubUrl || project.githubLabel) && (
                <div className="project-links">
                  {project.liveUrl && (
                    <a className="live" href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      {project.liveLabel || 'Open running app →'}
                    </a>
                  )}
                  {project.githubLabel && !project.githubUrl ? (
                    <span className="code-link code-link--private">
                      {project.githubLabel}
                    </span>
                  ) : project.githubUrl ? (
                    <a className="code-link" href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      {project.githubLabel || (project.githubUrl.endsWith('/ronil2149') ? 'GitHub profile ↗' : 'GitHub repository ↗')}
                    </a>
                  ) : null}
                </div>
              )}
            </div>

            <div className="project-card-body">
              <p className="project-summary">{project.summary}</p>

              <ul className="project-bullets">
                {project.highlights.map((highlight, idx) => (
                  <li key={idx}>{highlight}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

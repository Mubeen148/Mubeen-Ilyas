import { useState } from 'react';
import { ArrowRight, ArrowUpRight, Lock } from 'lucide-react';
import {
  PROJECT_FILTERS,
  PROJECTS,
  type ProjectCaseStudy,
  type ProjectCategory,
} from '../data/projects';

interface ProjectsProps {
  onSelectProject: (project: ProjectCaseStudy) => void;
}

export function Projects({ onSelectProject }: ProjectsProps) {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('all');

  const filtered =
    activeCategory === 'all'
      ? PROJECTS
      : PROJECTS.filter((project) => project.category === activeCategory);

  const featuredProjects = filtered.filter((project) => project.featured);
  const additionalProjects = filtered.filter((project) => !project.featured);

  return (
    <section
      id="work"
      className="border-b border-[var(--border)] py-16 sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col gap-6 border-b border-[var(--border)] pb-8 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.14em] text-[var(--ink-muted)]">
              01 / Selected Work
            </p>
            <h2 className="font-serif-display mt-2 text-3xl tracking-tight text-[var(--ink)] sm:text-4xl">
              Systems, Platforms &amp; Case Studies
            </h2>
            <p className="mt-2.5 max-w-2xl text-sm leading-relaxed text-[var(--ink-secondary)]">
              A curated selection of multi-tenant products, client platforms,
              automation middleware, and open-source repositories. Client work is
              presented as sanitized architectural case studies.
            </p>
          </div>

          <div
            role="tablist"
            aria-label="Filter projects by domain"
            className="flex flex-wrap gap-1.5"
          >
            {PROJECT_FILTERS.map((filter) => {
              const isSelected = activeCategory === filter.id;
              return (
                <button
                  key={filter.id}
                  type="button"
                  role="tab"
                  aria-selected={isSelected}
                  onClick={() => setActiveCategory(filter.id)}
                  className={`rounded-md px-3 py-1.5 text-xs font-medium transition-colors ${
                    isSelected
                      ? 'bg-[var(--ink)] text-[var(--bg)]'
                      : 'border border-[var(--border)] bg-[var(--surface)] text-[var(--ink-secondary)] hover:border-[var(--border-strong)] hover:text-[var(--ink)]'
                  }`}
                >
                  {filter.label}
                </button>
              );
            })}
          </div>
        </div>

        {featuredProjects.length > 0 && (
          <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-2">
            {featuredProjects.map((project) => (
              <article
                key={project.id}
                className="flex flex-col justify-between rounded-lg border border-[var(--border)] bg-[var(--surface)] p-6 transition-colors hover:border-[var(--border-strong)] sm:p-7"
              >
                <div>
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="inline-flex items-center gap-1.5 rounded border border-[var(--border)] bg-[var(--surface-subtle)] px-2.5 py-0.5 font-mono text-[11px] text-[var(--ink-secondary)]">
                      {project.visibility !== 'Open Source' && (
                        <Lock className="h-3 w-3" aria-hidden="true" />
                      )}
                      {project.visibility}
                    </span>
                    <span className="font-mono text-[11px] uppercase tracking-[0.1em] text-[var(--ink-muted)]">
                      {project.category.replace('-', ' & ')}
                    </span>
                  </div>

                  <h3 className="mt-4 text-xl font-semibold tracking-tight text-[var(--ink)]">
                    {project.title}
                  </h3>
                  <p className="mt-1 text-xs font-medium text-[var(--accent)]">
                    {project.subtitle}
                  </p>

                  <p className="mt-3 text-sm leading-relaxed text-[var(--ink-secondary)]">
                    {project.summary}
                  </p>

                  <ul className="mt-4 space-y-2 border-t border-[var(--border)] pt-4">
                    {project.architectureHighlights.map((highlight, idx) => (
                      <li
                        key={idx}
                        className="flex gap-2.5 text-xs leading-relaxed text-[var(--ink-secondary)]"
                      >
                        <span
                          aria-hidden="true"
                          className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-[var(--accent)]"
                        />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 pt-4">
                  <div className="flex flex-wrap gap-1.5">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded border border-[var(--border)] bg-[var(--bg)] px-2 py-0.5 font-mono text-[11px] text-[var(--ink-secondary)]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="mt-5 flex flex-wrap items-center justify-between gap-3 border-t border-[var(--border)] pt-4">
                    <button
                      type="button"
                      onClick={() => onSelectProject(project)}
                      className="inline-flex items-center gap-1.5 text-sm font-medium text-[var(--ink)] transition-colors hover:text-[var(--accent)]"
                    >
                      <span>Read Case Study</span>
                      <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </button>

                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 font-mono text-xs text-[var(--ink-secondary)] transition-colors hover:text-[var(--ink)]"
                      >
                        <span>GitHub</span>
                        <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                      </a>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}

        {additionalProjects.length > 0 && (
          <div className={featuredProjects.length > 0 ? 'mt-14' : 'mt-10'}>
            <h3 className="font-mono text-xs uppercase tracking-[0.14em] text-[var(--ink-muted)]">
              Additional Projects &amp; Public Repositories
            </h3>

            <div className="mt-4 divide-y divide-[var(--border)] rounded-lg border border-[var(--border)] bg-[var(--surface)]">
              {additionalProjects.map((project) => (
                <div
                  key={project.id}
                  className="flex flex-col gap-4 p-5 sm:flex-row sm:items-center sm:justify-between sm:px-6"
                >
                  <div className="max-w-2xl space-y-1.5">
                    <div className="flex flex-wrap items-center gap-2.5">
                      <h4 className="text-base font-semibold text-[var(--ink)]">
                        {project.title}
                      </h4>
                      <span className="inline-flex items-center gap-1 rounded border border-[var(--border)] bg-[var(--surface-subtle)] px-2 py-0.5 font-mono text-[11px] text-[var(--ink-secondary)]">
                        {project.visibility !== 'Open Source' && (
                          <Lock className="h-2.5 w-2.5" aria-hidden="true" />
                        )}
                        {project.visibility}
                      </span>
                    </div>

                    <p className="text-sm leading-relaxed text-[var(--ink-secondary)]">
                      {project.summary}
                    </p>

                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {project.stack.map((tech) => (
                        <span
                          key={tech}
                          className="rounded border border-[var(--border)] bg-[var(--bg)] px-2 py-0.5 font-mono text-[11px] text-[var(--ink-secondary)]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex shrink-0 flex-wrap items-center gap-4">
                    <button
                      type="button"
                      onClick={() => onSelectProject(project)}
                      className="inline-flex items-center gap-1 text-sm font-medium text-[var(--ink)] transition-colors hover:text-[var(--accent)]"
                    >
                      <span>Details</span>
                      <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                    </button>

                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 font-mono text-xs text-[var(--accent)] transition-colors hover:text-[var(--accent-hover)]"
                      >
                        <span>GitHub</span>
                        <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                      </a>
                    )}

                    {project.secondaryGithubUrl && (
                      <a
                        href={project.secondaryGithubUrl.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 font-mono text-xs text-[var(--accent)] transition-colors hover:text-[var(--accent-hover)]"
                      >
                        <span>{project.secondaryGithubUrl.label}</span>
                        <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

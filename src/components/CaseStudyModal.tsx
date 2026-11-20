import { useEffect } from 'react';
import { ArrowUpRight, Lock, X } from 'lucide-react';
import type { ProjectCaseStudy } from '../data/projects';

interface CaseStudyModalProps {
  project: ProjectCaseStudy | null;
  onClose: () => void;
}

export function CaseStudyModal({ project, onClose }: CaseStudyModalProps) {
  useEffect(() => {
    if (!project) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="case-study-title"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/55 p-4 backdrop-blur-[2px]"
      onClick={onClose}
    >
      <div
        className="max-h-[88vh] w-full max-w-2xl overflow-y-auto rounded-lg border border-[var(--border-strong)] bg-[var(--surface)] p-6 shadow-xl sm:p-8"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-4 border-b border-[var(--border)] pb-5">
          <div>
            <span className="inline-flex items-center gap-1.5 rounded border border-[var(--border)] bg-[var(--surface-subtle)] px-2.5 py-0.5 font-mono text-[11px] text-[var(--ink-secondary)]">
              {project.visibility !== 'Open Source' && (
                <Lock className="h-3 w-3" aria-hidden="true" />
              )}
              {project.visibility}
            </span>
            <h2
              id="case-study-title"
              className="font-serif-display mt-3 text-2xl text-[var(--ink)] sm:text-3xl"
            >
              {project.title}
            </h2>
            <p className="mt-1 text-sm font-medium text-[var(--accent)]">
              {project.subtitle}
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close case study"
            className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-md border border-[var(--border)] bg-[var(--bg)] text-[var(--ink-secondary)] transition-colors hover:border-[var(--border-strong)] hover:text-[var(--ink)]"
          >
            <X className="h-4 w-4" aria-hidden="true" />
          </button>
        </div>

        <div className="mt-6 space-y-6">
          <div>
            <h3 className="font-mono text-[11px] uppercase tracking-[0.12em] text-[var(--ink-muted)]">
              Overview
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-[var(--ink-secondary)]">
              {project.summary}
            </p>
          </div>

          <div>
            <h3 className="font-mono text-[11px] uppercase tracking-[0.12em] text-[var(--ink-muted)]">
              Problem Solved
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-[var(--ink-secondary)]">
              {project.problem}
            </p>
          </div>

          <div>
            <h3 className="font-mono text-[11px] uppercase tracking-[0.12em] text-[var(--ink-muted)]">
              Architecture &amp; Engineering Highlights
            </h3>
            <ul className="mt-2.5 space-y-2.5">
              {project.architectureHighlights.map((item, idx) => (
                <li
                  key={idx}
                  className="flex gap-2.5 text-sm leading-relaxed text-[var(--ink-secondary)]"
                >
                  <span
                    aria-hidden="true"
                    className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent)]"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-mono text-[11px] uppercase tracking-[0.12em] text-[var(--ink-muted)]">
              Outcome
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-[var(--ink)]">
              {project.impact}
            </p>
          </div>

          <div>
            <h3 className="font-mono text-[11px] uppercase tracking-[0.12em] text-[var(--ink-muted)]">
              Tech Stack
            </h3>
            <div className="mt-2.5 flex flex-wrap gap-1.5">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="rounded border border-[var(--border)] bg-[var(--bg)] px-2.5 py-1 font-mono text-xs text-[var(--ink-secondary)]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-[var(--border)] pt-5">
          {project.githubUrl ? (
            <div className="flex flex-wrap items-center gap-4">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-md bg-[var(--accent)] px-4 py-2 text-xs font-medium text-white transition-colors hover:bg-[var(--accent-hover)] dark:text-[#0E1612]"
              >
                <span>View Public Repository</span>
                <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
              </a>

              {project.secondaryGithubUrl && (
                <a
                  href={project.secondaryGithubUrl.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-md border border-[var(--border-strong)] bg-[var(--bg)] px-4 py-2 text-xs font-medium text-[var(--ink)] transition-colors hover:border-[var(--ink)]"
                >
                  <span>{project.secondaryGithubUrl.label}</span>
                  <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                </a>
              )}
            </div>
          ) : (
            <p className="flex items-center gap-2 text-xs text-[var(--ink-muted)]">
              <Lock className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
              <span>
                Private repository. Architecture details are sanitized to protect
                client confidentiality.
              </span>
            </p>
          )}

          <button
            type="button"
            onClick={onClose}
            className="rounded-md border border-[var(--border)] px-3.5 py-1.5 text-xs font-medium text-[var(--ink-secondary)] transition-colors hover:border-[var(--border-strong)] hover:text-[var(--ink)]"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

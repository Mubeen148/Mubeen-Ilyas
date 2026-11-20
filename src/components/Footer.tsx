import { ArrowUp } from 'lucide-react';
import { PROFILE } from '../data/profile';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[var(--border)] py-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 text-xs text-[var(--ink-muted)] sm:flex-row sm:items-center sm:justify-between">
        <div className="space-y-1">
          <p className="text-[var(--ink-secondary)]">
            &copy; {year} {PROFILE.name}. All rights reserved.
          </p>
          <p>
            Client engagements are shown as sanitized architectural case studies;
            public repositories are linked directly.
          </p>
        </div>

        <a
          href="#top"
          className="inline-flex items-center gap-1.5 font-mono text-xs text-[var(--ink-secondary)] transition-colors hover:text-[var(--ink)]"
        >
          <span>Back to top</span>
          <ArrowUp className="h-3.5 w-3.5" aria-hidden="true" />
        </a>
      </div>
    </footer>
  );
}

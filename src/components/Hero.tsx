import { ArrowDownRight, ArrowUpRight } from 'lucide-react';
import { PROFILE } from '../data/profile';

export function Hero() {
  return (
    <section
      id="top"
      className="border-b border-[var(--border)] pt-16 pb-14 sm:pt-24 sm:pb-20"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-3xl">
          <p className="font-mono text-xs uppercase tracking-[0.14em] text-[var(--accent)]">
            {PROFILE.role}
          </p>

          <h1 className="font-serif-display mt-5 text-4xl leading-[1.12] font-normal tracking-[-0.02em] text-[var(--ink)] sm:text-5xl lg:text-[3.45rem]">
            {PROFILE.headline}
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-relaxed text-[var(--ink-secondary)] sm:text-lg">
            {PROFILE.subheadline}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3.5">
            <a
              href="#work"
              className="inline-flex items-center gap-2 rounded-md bg-[var(--accent)] px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-[var(--accent-hover)] dark:text-[#0E1612]"
            >
              <span>View Selected Work</span>
              <ArrowDownRight className="h-4 w-4" aria-hidden="true" />
            </a>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-md border border-[var(--border-strong)] bg-[var(--surface)] px-5 py-2.5 text-sm font-medium text-[var(--ink)] transition-colors hover:border-[var(--ink)]"
            >
              Contact
            </a>

            <a
              href={PROFILE.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-2 py-2 text-sm text-[var(--ink-secondary)] transition-colors hover:text-[var(--ink)]"
            >
              <span>GitHub (@{PROFILE.handle})</span>
              <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
            </a>
          </div>
        </div>

        <dl className="mt-14 grid grid-cols-1 gap-6 border-t border-[var(--border)] pt-8 sm:grid-cols-2 lg:grid-cols-4">
          {PROFILE.snapshot.map((item) => (
            <div key={item.label} className="space-y-1.5">
              <dt className="font-mono text-[11px] uppercase tracking-[0.12em] text-[var(--ink-muted)]">
                {item.label}
              </dt>
              <dd className="text-sm leading-snug text-[var(--ink)]">
                {item.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

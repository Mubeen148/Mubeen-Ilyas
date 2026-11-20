import { PROFILE } from '../data/profile';

export function About() {
  return (
    <section
      id="about"
      className="border-b border-[var(--border)] py-16 sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="font-mono text-xs uppercase tracking-[0.14em] text-[var(--ink-muted)]">
              02 / About &amp; Approach
            </p>
            <h2 className="font-serif-display mt-2 text-3xl tracking-tight text-[var(--ink)] sm:text-4xl">
              Practical architecture across product, backend, and automation.
            </h2>

            <div className="mt-6 space-y-4 text-sm leading-relaxed text-[var(--ink-secondary)] sm:text-base">
              {PROFILE.aboutParagraphs.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="divide-y divide-[var(--border)] rounded-lg border border-[var(--border)] bg-[var(--surface)]">
              {PROFILE.principles.map((principle) => (
                <div key={principle.number} className="p-6 sm:p-7">
                  <div className="flex items-baseline gap-4">
                    <span className="font-mono text-xs font-medium text-[var(--accent)]">
                      {principle.number}
                    </span>
                    <div>
                      <h3 className="text-base font-semibold text-[var(--ink)]">
                        {principle.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-[var(--ink-secondary)]">
                        {principle.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

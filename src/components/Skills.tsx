import { SKILL_CATEGORIES } from '../data/skills';

export function Skills() {
  return (
    <section
      id="stack"
      className="border-b border-[var(--border)] py-16 sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <p className="font-mono text-xs uppercase tracking-[0.14em] text-[var(--ink-muted)]">
            03 / Technical Stack
          </p>
          <h2 className="font-serif-display mt-2 text-3xl tracking-tight text-[var(--ink)] sm:text-4xl">
            Production tooling across the stack.
          </h2>
          <p className="mt-2.5 text-sm leading-relaxed text-[var(--ink-secondary)]">
            Technologies verified directly in active and delivered repositories—from
            relational data modeling and API security to workflow automation and
            applied NLP.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {SKILL_CATEGORIES.map((category) => (
            <div
              key={category.title}
              className="rounded-lg border border-[var(--border)] bg-[var(--surface)] p-6"
            >
              <h3 className="text-base font-semibold text-[var(--ink)]">
                {category.title}
              </h3>
              <p className="mt-1 text-xs leading-relaxed text-[var(--ink-muted)]">
                {category.description}
              </p>

              <ul className="mt-4 flex flex-wrap gap-1.5 border-t border-[var(--border)] pt-4">
                {category.items.map((item) => (
                  <li
                    key={item}
                    className="rounded border border-[var(--border)] bg-[var(--bg)] px-2.5 py-1 font-mono text-[11px] text-[var(--ink-secondary)]"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

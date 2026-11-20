import { useState } from 'react';
import { ArrowUpRight, Check, Copy, FileText, Mail } from 'lucide-react';
import { PROFILE } from '../data/profile';

export function ExperienceContact() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(PROFILE.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard API may be unavailable in restricted contexts
    }
  };

  const hasLinkedIn = Boolean(PROFILE.linkedinUrl.trim());
  const hasResume = Boolean(PROFILE.resumeUrl.trim());

  return (
    <>
      <section
        id="experience"
        className="border-b border-[var(--border)] py-16 sm:py-24"
      >
        <div className="mx-auto max-w-6xl px-6">
          <div className="max-w-2xl">
            <p className="font-mono text-xs uppercase tracking-[0.14em] text-[var(--ink-muted)]">
              04 / Experience &amp; Capabilities
            </p>
            <h2 className="font-serif-display mt-2 text-3xl tracking-tight text-[var(--ink)] sm:text-4xl">
              Roles, leadership &amp; engineering services.
            </h2>
          </div>

          <div className="mt-10 divide-y divide-[var(--border)] rounded-lg border border-[var(--border)] bg-[var(--surface)]">
            {PROFILE.experience.map((item) => (
              <div
                key={item.organization}
                className="grid grid-cols-1 gap-4 p-6 sm:p-8 lg:grid-cols-12"
              >
                <div className="lg:col-span-4">
                  <p className="font-mono text-xs uppercase tracking-[0.1em] text-[var(--accent)]">
                    {item.period}
                  </p>
                  <h3 className="mt-1.5 text-lg font-semibold text-[var(--ink)]">
                    {item.role}
                  </h3>
                  <p className="mt-0.5 text-sm text-[var(--ink-secondary)]">
                    {item.organization}
                  </p>
                </div>

                <div className="space-y-3 lg:col-span-8">
                  <p className="text-sm leading-relaxed text-[var(--ink)]">
                    {item.summary}
                  </p>
                  <ul className="space-y-2">
                    {item.highlights.map((highlight, idx) => (
                      <li
                        key={idx}
                        className="flex gap-2.5 text-sm leading-relaxed text-[var(--ink-secondary)]"
                      >
                        <span
                          aria-hidden="true"
                          className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[var(--accent)]"
                        />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
            {PROFILE.services.map((service) => (
              <div
                key={service.title}
                className="rounded-lg border border-[var(--border)] bg-[var(--surface)] p-6"
              >
                <h3 className="text-base font-semibold text-[var(--ink)]">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--ink-secondary)]">
                  {service.description}
                </p>

                <ul className="mt-4 space-y-1.5 border-t border-[var(--border)] pt-4">
                  {service.deliverables.map((deliverable) => (
                    <li
                      key={deliverable}
                      className="font-mono text-xs text-[var(--ink-secondary)]"
                    >
                      — {deliverable}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="rounded-lg border border-[var(--border)] bg-[var(--surface)] p-8 sm:p-12">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-center">
              <div className="lg:col-span-7">
                <p className="font-mono text-xs uppercase tracking-[0.14em] text-[var(--ink-muted)]">
                  05 / Contact
                </p>
                <h2 className="font-serif-display mt-2 text-3xl tracking-tight text-[var(--ink)] sm:text-4xl">
                  Available for engineering leadership, SaaS builds, and workflow
                  automation.
                </h2>
                <p className="mt-3 max-w-xl text-sm leading-relaxed text-[var(--ink-secondary)] sm:text-base">
                  Reach out directly by email or connect on GitHub to discuss
                  full-stack product architecture, internal platforms, or custom API
                  integrations.
                </p>

                <div className="mt-7 flex flex-wrap items-center gap-3">
                  <a
                    href={`mailto:${PROFILE.email}`}
                    className="inline-flex items-center gap-2 rounded-md bg-[var(--accent)] px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-[var(--accent-hover)] dark:text-[#0E1612]"
                  >
                    <Mail className="h-4 w-4" aria-hidden="true" />
                    <span>{PROFILE.email}</span>
                  </a>

                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className="inline-flex items-center gap-2 rounded-md border border-[var(--border-strong)] bg-[var(--bg)] px-4 py-2.5 text-sm font-medium text-[var(--ink)] transition-colors hover:border-[var(--ink)]"
                  >
                    {copied ? (
                      <>
                        <Check className="h-4 w-4 text-[var(--accent)]" aria-hidden="true" />
                        <span>Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="h-4 w-4" aria-hidden="true" />
                        <span>Copy Email</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              <div className="space-y-3 border-t border-[var(--border)] pt-6 lg:col-span-5 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-10">
                <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-[var(--ink-muted)]">
                  Profiles &amp; Links
                </p>

                <div className="divide-y divide-[var(--border)] rounded-md border border-[var(--border)] bg-[var(--bg)]">
                  <a
                    href={PROFILE.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between px-4 py-3 text-sm text-[var(--ink)] transition-colors hover:text-[var(--accent)]"
                  >
                    <span>GitHub (@{PROFILE.handle})</span>
                    <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                  </a>

                  {hasLinkedIn ? (
                    <a
                      href={PROFILE.linkedinUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between px-4 py-3 text-sm text-[var(--ink)] transition-colors hover:text-[var(--accent)]"
                    >
                      <span>LinkedIn</span>
                      <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                    </a>
                  ) : (
                    <div className="flex items-center justify-between px-4 py-3 text-sm text-[var(--ink-muted)]">
                      <span>LinkedIn</span>
                      <span className="font-mono text-[11px]">Link pending</span>
                    </div>
                  )}

                  {hasResume && (
                    <a
                      href={PROFILE.resumeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between px-4 py-3 text-sm text-[var(--ink)] transition-colors hover:text-[var(--accent)]"
                    >
                      <span className="inline-flex items-center gap-2">
                        <FileText className="h-4 w-4" aria-hidden="true" />
                        Resume / CV
                      </span>
                      <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

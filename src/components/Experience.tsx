import { useLanguage } from "../i18n/LanguageContext";
import { Section } from "./layout/Section";
import { SectionHeading } from "./layout/SectionHeading";

/**
 * Seção Experiência — timeline vertical com histórico profissional.
 */
export function Experience() {
  const { t } = useLanguage();

  return (
    <Section id="experiencia">
      <SectionHeading title={t.experience.title} />

      <div className="relative space-y-8 before:absolute before:left-[7px] before:top-2 before:h-[calc(100%-16px)] before:w-px before:bg-border sm:before:left-[11px]">
        {t.experience.jobs.map((job, index) => (
          <article key={job.company} className="relative pl-8 sm:pl-12">
            <div className="absolute left-0 top-2 h-4 w-4 rounded-full border-2 border-accent bg-surface sm:h-5 sm:w-5" />

            <div className="rounded-xl border border-border bg-surface-card p-6 transition-all hover:border-accent/20">
              <div className="mb-4 flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-white">{job.company}</h3>
                  <p className="text-sm text-accent-light">{job.role}</p>
                </div>
                <time className="mt-1 shrink-0 font-mono text-xs text-zinc-500 sm:mt-0">
                  {job.period}
                </time>
              </div>

              <ul className="space-y-2">
                {job.highlights.map((item) => (
                  <li key={item} className="flex gap-3 text-sm leading-relaxed text-zinc-400">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-zinc-600" />
                    {item}
                  </li>
                ))}
              </ul>

              {index === 0 && (
                <span className="mt-4 inline-block rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent-light">
                  {t.experience.current}
                </span>
              )}
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}

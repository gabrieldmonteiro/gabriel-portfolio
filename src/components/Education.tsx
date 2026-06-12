import { useLanguage } from "../i18n/LanguageContext";
import { Section } from "./layout/Section";
import { SectionHeading } from "./layout/SectionHeading";

/**
 * Seção Formação — educação, certificações e idiomas.
 */
export function Education() {
  const { t } = useLanguage();

  return (
    <Section id="formacao">
      <SectionHeading title={t.education.title} />

      <div className="grid gap-12 lg:grid-cols-2">
        {/* Educação */}
        <div>
          <h3 className="mb-6 font-mono text-xs uppercase tracking-wider text-zinc-500">
            {t.education.educationLabel}
          </h3>
          <div className="space-y-4">
            {t.education.items.map((item) => (
              <div
                key={item.degree}
                className="rounded-xl border border-border bg-surface-card p-5 transition-all hover:border-accent/20"
              >
                <div className="mb-1 flex flex-wrap items-start justify-between gap-2">
                  <h4 className="font-medium text-white">{item.degree}</h4>
                  <span className="shrink-0 font-mono text-xs text-zinc-500">{item.period}</span>
                </div>
                <p className="text-sm text-zinc-400">{item.institution}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-10">
          {/* Certificações */}
          <div>
            <h3 className="mb-6 font-mono text-xs uppercase tracking-wider text-zinc-500">
              {t.education.certificationsLabel}
            </h3>
            <div className="rounded-xl border border-border bg-surface-card p-5">
              {t.education.certifications.map((cert) => (
                <p key={cert} className="text-sm leading-relaxed text-zinc-400">
                  {cert}
                </p>
              ))}
            </div>
          </div>

          {/* Idiomas */}
          <div>
            <h3 className="mb-6 font-mono text-xs uppercase tracking-wider text-zinc-500">
              {t.education.languagesLabel}
            </h3>
            <div className="space-y-3">
              {t.education.languages.map((lang) => (
                <div
                  key={lang.name}
                  className="rounded-xl border border-border bg-surface-card p-5"
                >
                  <div className="mb-1 flex items-center justify-between">
                    <span className="font-medium text-white">{lang.name}</span>
                    <span className="font-mono text-xs text-accent-light">{lang.level}</span>
                  </div>
                  {lang.note && <p className="text-xs text-zinc-500">{lang.note}</p>}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

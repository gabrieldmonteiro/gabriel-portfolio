import { useLanguage } from "../i18n/LanguageContext";
import { Section } from "./layout/Section";
import { SectionHeading } from "./layout/SectionHeading";

/**
 * Seção Sobre — resumo profissional e destaques em card lateral.
 */
export function About() {
  const { t } = useLanguage();

  return (
    <Section id="sobre">
      <SectionHeading title={t.about.title} />

      <div className="grid gap-12 lg:grid-cols-5">
        {/* Resumo */}
        <div className="lg:col-span-3">
          <p className="text-lg leading-relaxed text-zinc-400">{t.hero.summary}</p>
        </div>

        {/* Destaques */}
        <div className="lg:col-span-2">
          <div className="rounded-xl border border-border bg-surface-card p-6">
            <h3 className="mb-4 font-mono text-xs uppercase tracking-wider text-accent-light">
              {t.about.highlights}
            </h3>
            <ul className="space-y-3 text-sm text-zinc-400">
              {t.about.items.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Section>
  );
}

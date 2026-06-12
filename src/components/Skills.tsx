import { useLanguage } from "../i18n/LanguageContext";
import { Section } from "./layout/Section";
import { SectionHeading } from "./layout/SectionHeading";

/**
 * Seção Habilidades — grid de categorias técnicas.
 * Conteúdo editável em `src/i18n/translations/`.
 */
export function Skills() {
  const { t } = useLanguage();

  return (
    <Section id="habilidades">
      <SectionHeading title={t.skills.title} />

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {t.skills.groups.map((group) => (
          <div
            key={group.category}
            className="group rounded-xl border border-border bg-surface-card p-6 transition-all hover:border-accent/30 hover:shadow-lg hover:shadow-accent-glow"
          >
            <h3 className="mb-4 font-mono text-xs uppercase tracking-wider text-accent-light">
              {group.category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="rounded-md bg-surface-elevated px-2.5 py-1 text-xs text-zinc-400 transition-colors group-hover:text-zinc-300"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

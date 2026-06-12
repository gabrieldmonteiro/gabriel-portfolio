import { profile } from "../data/profile";
import { EmailIcon, GitHubIcon, LinkedInIcon } from "./icons/Icons";
import { useLanguage } from "../i18n/LanguageContext";
import { Section } from "./layout/Section";
import { SectionHeading } from "./layout/SectionHeading";

/**
 * Seção Contato — email e links para redes profissionais.
 */
export function Contact() {
  const { t } = useLanguage();

  return (
    <Section id="contato">
      <SectionHeading title={t.contact.title} />

      <div className="rounded-2xl border border-border bg-gradient-to-br from-surface-card to-surface-elevated p-8 sm:p-12">
        <p className="mb-8 max-w-xl text-lg text-zinc-400">{t.contact.description}</p>

        <div className="flex flex-col gap-4 sm:flex-row sm:flex-wrap">
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-accent px-6 py-3 text-sm font-medium text-white transition-all hover:bg-accent-light hover:shadow-lg hover:shadow-accent/25"
          >
            <EmailIcon />
            {profile.email}
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-lg border border-border px-6 py-3 text-sm font-medium text-zinc-300 transition-all hover:border-zinc-600 hover:text-white"
          >
            <LinkedInIcon />
            LinkedIn
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-lg border border-border px-6 py-3 text-sm font-medium text-zinc-300 transition-all hover:border-zinc-600 hover:text-white"
          >
            <GitHubIcon />
            GitHub
          </a>
        </div>
      </div>
    </Section>
  );
}

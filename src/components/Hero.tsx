import { profile } from "../data/profile";
import { ASSETS } from "../constants/assets";
import { GitHubIcon, LinkedInIcon, LocationIcon } from "./icons/Icons";
import { useLanguage } from "../i18n/LanguageContext";

/**
 * Seção Hero — primeira dobra da home.
 * Apresentação principal, CTAs e logo pessoal.
 */
export function Hero() {
  const { t } = useLanguage();

  return (
    <section className="relative flex min-h-screen items-center overflow-hidden px-6 pt-20">
      {/* Fundo decorativo */}
      <div className="pointer-events-none absolute inset-0">
        <div className="animate-pulse-glow absolute -top-40 left-1/2 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-accent/20 blur-[120px]" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      </div>

      <div className="relative mx-auto grid max-w-6xl animate-fade-in-up items-center gap-12 lg:grid-cols-[1fr_auto]">
        {/* Texto e CTAs */}
        <div>
          <p className="mb-4 font-mono text-sm text-accent-light">{t.hero.greeting}</p>

          <h1 className="mb-4 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            {profile.name}
          </h1>

          <p className="mb-2 text-xl font-medium text-zinc-300 sm:text-2xl">{t.hero.title}</p>
          <p className="mb-8 font-mono text-sm text-zinc-500">{t.hero.subtitle}</p>
          <p className="mb-10 max-w-2xl text-base leading-relaxed text-zinc-400">{t.hero.summary}</p>

          <div className="flex flex-wrap items-center gap-4">
            <a
              href="#contato"
              className="rounded-lg bg-accent px-6 py-3 text-sm font-medium text-white transition-all hover:bg-accent-light hover:shadow-lg hover:shadow-accent/25"
            >
              {t.hero.ctaContact}
            </a>
            <a
              href="#experiencia"
              className="rounded-lg border border-border px-6 py-3 text-sm font-medium text-zinc-300 transition-all hover:border-zinc-600 hover:text-white"
            >
              {t.hero.ctaExperience}
            </a>
          </div>

          {/* Links sociais e localização */}
          <div className="mt-12 flex flex-wrap gap-6 text-sm text-zinc-500">
            <span className="flex items-center gap-2">
              <LocationIcon />
              {t.hero.location}
            </span>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 transition-colors hover:text-accent-light"
            >
              <LinkedInIcon />
              LinkedIn
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 transition-colors hover:text-accent-light"
            >
              <GitHubIcon />
              GitHub
            </a>
          </div>
        </div>

        {/* Logo */}
        <div className="relative mx-auto flex shrink-0 justify-center lg:mx-0 lg:justify-end">
          <div className="absolute inset-0 scale-90 rounded-full bg-accent/15 blur-3xl" />
          <img
            src={ASSETS.logo}
            alt={t.hero.logoAlt}
            className="relative h-52 w-52 object-contain sm:h-64 sm:w-64 lg:h-80 lg:w-80"
          />
        </div>
      </div>
    </section>
  );
}

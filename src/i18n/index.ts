/**
 * Configuração central de i18n — locales, traduções e links da navbar.
 */
import type { Locale, Translations } from "./types";
import { en } from "./translations/en";
import { pt } from "./translations/pt";

export const translations: Record<Locale, Translations> = { pt, en };

export const defaultLocale: Locale = "pt";

/** Links da navbar: `href` + chave de tradução em `t.nav`. */
export const navLinks = [
  { href: "#sobre", key: "about" as const },
  { href: "#habilidades", key: "skills" as const },
  { href: "/projects", key: "projects" as const },
  { href: "#experiencia", key: "experience" as const },
  { href: "#formacao", key: "education" as const },
  { href: "#contato", key: "contact" as const },
];

export type { Locale, Translations };

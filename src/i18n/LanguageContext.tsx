import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { defaultLocale, translations, type Locale, type Translations } from "./index";

const STORAGE_KEY = "portfolio-locale";

interface LanguageContextValue {
  locale: Locale;
  t: Translations;
  toggleLocale: () => void;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

/** Lê preferência salva ou usa o idioma padrão (PT). */
function getInitialLocale(): Locale {
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored === "pt" || stored === "en") return stored;
  return defaultLocale;
}

/**
 * Provider de internacionalização.
 * Responsável por: traduções, persistência, `<html lang>` e meta tags.
 */
export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>(getInitialLocale);
  const t = translations[locale];

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, locale);
    document.documentElement.lang = locale === "pt" ? "pt-BR" : "en-US";
    document.title = t.meta.title;

    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", t.meta.description);
  }, [locale, t.meta.title, t.meta.description]);

  const toggleLocale = () => {
    setLocale((current) => (current === "pt" ? "en" : "pt"));
  };

  return (
    <LanguageContext.Provider value={{ locale, t, toggleLocale }}>
      {children}
    </LanguageContext.Provider>
  );
}

/** Hook de acesso às traduções — deve ser usado dentro de LanguageProvider. */
export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return context;
}

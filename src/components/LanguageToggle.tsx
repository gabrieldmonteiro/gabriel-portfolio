import { ASSETS } from "../constants/assets";
import { useLanguage } from "../i18n/LanguageContext";

/**
 * Seletor de idioma (PT ↔ EN).
 * Exibe a bandeira do idioma atual; ao clicar, alterna e persiste no localStorage.
 */
export function LanguageToggle({ className = "" }: { className?: string }) {
  const { locale, toggleLocale, t } = useLanguage();
  const isPt = locale === "pt";

  return (
    <button
      type="button"
      onClick={toggleLocale}
      className={`inline-flex h-6 w-8 shrink-0 items-center justify-center overflow-hidden rounded border border-border transition-colors hover:border-zinc-600 hover:bg-surface-elevated ${className}`}
      aria-label={isPt ? t.language.switchToEn : t.language.switchToPt}
      title={isPt ? t.language.switchToEn : t.language.switchToPt}
    >
      <img
        src={isPt ? ASSETS.flags.br : ASSETS.flags.us}
        alt={isPt ? "Português (Brasil)" : "English (US)"}
        className="h-full w-full object-cover"
      />
    </button>
  );
}

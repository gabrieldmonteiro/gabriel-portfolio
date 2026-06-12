import { profile } from "../data/profile";
import { useLanguage } from "../i18n/LanguageContext";

/**
 * Rodapé global — copyright e stack do projeto.
 */
export function Footer() {
  const year = new Date().getFullYear();
  const { t } = useLanguage();

  return (
    <footer className="border-t border-border px-6 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="font-mono text-xs text-zinc-500">
          © {year} {profile.name}. {t.footer.rights}
        </p>
        <p className="font-mono text-xs text-zinc-600">{t.footer.builtWith}</p>
      </div>
    </footer>
  );
}

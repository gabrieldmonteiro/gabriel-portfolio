import { Link } from "react-router-dom";
import { useLanguage } from "../i18n/LanguageContext";

/**
 * Página 404 — exibida para rotas não mapeadas (ex.: /qualquer-coisa).
 */
export function NotFoundPage() {
  const { t } = useLanguage();

  return (
    <div className="flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center px-6 pt-28 pb-24 text-center">
      <p className="mb-2 font-mono text-sm text-accent-light">{t.notFound.code}</p>
      <h1 className="mb-4 text-3xl font-bold text-white sm:text-4xl">{t.notFound.title}</h1>
      <p className="mb-8 max-w-md text-zinc-400">{t.notFound.description}</p>
      <Link
        to="/"
        className="rounded-lg bg-accent px-6 py-3 text-sm font-medium text-white transition-all hover:bg-accent-light hover:shadow-lg hover:shadow-accent/25"
      >
        {t.notFound.backHome}
      </Link>
    </div>
  );
}

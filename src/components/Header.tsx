import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { navLinks } from "../i18n";
import { useLanguage } from "../i18n/LanguageContext";
import { LanguageToggle } from "./LanguageToggle";
import { NavLink } from "./layout/NavLink";

/**
 * Navbar fixa com layout em 3 colunas:
 * - Esquerda: logo
 * - Centro: links de navegação
 * - Direita: seletor de idioma (+ menu mobile)
 */
export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { t } = useLanguage();
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  const showSolidBackground = scrolled || location.pathname !== "/";

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        showSolidBackground
          ? "border-b border-border bg-surface/80 backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      {/* Barra principal — desktop */}
      <nav className="mx-auto grid h-16 max-w-6xl grid-cols-[1fr_auto_1fr] items-center px-6">
        <Link
          to="/"
          className="inline-flex items-center justify-self-start font-mono text-sm font-medium leading-none text-accent-light transition-colors hover:text-white"
        >
          GDM<span className="text-zinc-500">.</span>
        </Link>

        <div className="hidden items-center justify-center gap-6 lg:gap-8 md:flex">
          {navLinks.map((link) => (
            <NavLink key={link.href} href={link.href} label={t.nav[link.key]} />
          ))}
        </div>

        <div className="flex items-center justify-end gap-3 justify-self-end">
          <LanguageToggle className="hidden md:inline-flex" />
          <MobileMenuButton isOpen={menuOpen} onToggle={() => setMenuOpen((open) => !open)} />
        </div>
      </nav>

      {/* Menu colapsável — mobile */}
      {menuOpen && (
        <div className="border-b border-border bg-surface-elevated px-6 py-4 md:hidden">
          <div className="flex flex-col items-center gap-4">
            {navLinks.map((link) => (
              <NavLink key={link.href} href={link.href} label={t.nav[link.key]} />
            ))}
            <LanguageToggle />
          </div>
        </div>
      )}
    </header>
  );
}

function MobileMenuButton({ isOpen, onToggle }: { isOpen: boolean; onToggle: () => void }) {
  return (
    <button
      type="button"
      className="inline-flex h-9 w-9 items-center justify-center md:hidden"
      onClick={onToggle}
      aria-label="Menu"
      aria-expanded={isOpen}
    >
      <span className="relative block h-3.5 w-6">
        <span
          className={`absolute left-0 block h-0.5 w-6 bg-zinc-300 transition-transform ${isOpen ? "top-1.5 rotate-45" : "top-0"}`}
        />
        <span
          className={`absolute left-0 top-1.5 block h-0.5 w-6 bg-zinc-300 transition-opacity ${isOpen ? "opacity-0" : ""}`}
        />
        <span
          className={`absolute left-0 block h-0.5 w-6 bg-zinc-300 transition-transform ${isOpen ? "top-1.5 -rotate-45" : "top-3"}`}
        />
      </span>
    </button>
  );
}

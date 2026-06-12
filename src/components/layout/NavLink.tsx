import { Link, useLocation } from "react-router-dom";

interface NavLinkProps {
  href: string;
  label: string;
}

/**
 * Link de navegação que suporta rotas internas (React Router)
 * e âncoras da home (#sobre, #contato, etc.).
 */
export function NavLink({ href, label }: NavLinkProps) {
  const location = useLocation();
  const isHome = location.pathname === "/";
  const isRoute = href.startsWith("/");
  const resolvedHref = isRoute || isHome ? href : `/${href}`;
  const className =
    "inline-flex items-center text-sm leading-none text-zinc-400 transition-colors hover:text-white";

  if (isRoute) {
    return (
      <Link to={href} className={className}>
        {label}
      </Link>
    );
  }

  return (
    <a href={resolvedHref} className={className}>
      {label}
    </a>
  );
}

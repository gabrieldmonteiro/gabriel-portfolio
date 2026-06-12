import type { ReactNode } from "react";

interface SectionProps {
  /** ID usado pelos links de âncora da navbar (ex.: #sobre). */
  id?: string;
  children: ReactNode;
  className?: string;
}

/**
 * Wrapper padrão das seções internas da home.
 * Garante padding, largura máxima e borda superior consistentes.
 */
export function Section({ id, children, className = "" }: SectionProps) {
  return (
    <section id={id} className={`border-t border-border px-6 py-24 ${className}`}>
      <div className="mx-auto max-w-6xl">{children}</div>
    </section>
  );
}

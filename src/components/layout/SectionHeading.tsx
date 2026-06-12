interface SectionHeadingProps {
  title: string;
}

/**
 * Título de seção com linha decorativa.
 * Reutilizado em About, Skills, Experience, Education e Contact.
 */
export function SectionHeading({ title }: SectionHeadingProps) {
  return (
    <div className="mb-12 flex items-center gap-4">
      <h2 className="text-2xl font-bold text-white sm:text-3xl">{title}</h2>
      <div className="h-px flex-1 bg-border" />
    </div>
  );
}

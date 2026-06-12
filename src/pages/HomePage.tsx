import { Hero } from "../components/Hero";
import { About } from "../components/About";
import { Skills } from "../components/Skills";
import { Experience } from "../components/Experience";
import { Education } from "../components/Education";
import { Contact } from "../components/Contact";

/**
 * Página inicial — composição das seções do portfólio.
 * Cada seção é um componente isolado para facilitar manutenção.
 */
export function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Education />
      <Contact />
    </>
  );
}

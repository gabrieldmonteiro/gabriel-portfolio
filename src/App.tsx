import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { HomePage } from "./pages/HomePage";
import { ProjectsPage } from "./pages/ProjectsPage";
import { NotFoundPage } from "./pages/NotFoundPage";
import { LanguageProvider } from "./i18n/LanguageContext";

/**
 * Raiz da aplicação.
 * - LanguageProvider: i18n global (PT/EN)
 * - BrowserRouter: rotas `/`, `/projects` e fallback 404 (`*`)
 */
function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </LanguageProvider>
  );
}

export default App;

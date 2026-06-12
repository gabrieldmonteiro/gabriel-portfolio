import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { HomePage } from "./pages/HomePage";
import { ProjectsPage } from "./pages/ProjectsPage";
import { LanguageProvider } from "./i18n/LanguageContext";

/**
 * Raiz da aplicação.
 * - LanguageProvider: i18n global (PT/EN)
 * - BrowserRouter: rotas `/` e `/projects`
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
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </LanguageProvider>
  );
}

export default App;

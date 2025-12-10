import Header from "./components/Header";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import FloatingActions from "./components/FloatingActions";
import RulesModal from "./components/RulesModal";

// App layout and routes
// App component
export default function App() {
  const [rulesOpen, setRulesOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-900 text-white relative">

      {/* Foreground content */}
      <div className="relative z-10">
        <Header />
        <main className="mx-auto max-w-7xl px-4 py-8">
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </main>
        <footer
          className="mt-3 border-t border-gray-800 py-6 text-sm text-gray-400
                     flex justify-center items-center space-x-2"
        >
          <div className="flex items-center gap-x-2">
            © {new Date().getFullYear()} Santa Gaming. All rights reserved.
            <span>•</span>
          </div>
          <a
            href="https://www.facebook.com/profile.php?id=61581907344873"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-brand hover:text-brand-dark"
          >
            <svg
              className="h-6 w-6"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M22 12.06C22 6.49 17.52 2 12 2S2 6.49 2 12.06c0 4.99 3.66 9.13 8.44 9.94v-7.03H7.9V12.06h2.54V9.8c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.23.19 2.23.19v2.46h-1.25c-1.24 0-1.62.77-1.62 1.56v1.94h2.76l-.44 2.91h-2.32v7.03C18.34 21.19 22 17.05 22 12.06z"></path>
            </svg>
          </a>
        </footer>

        <FloatingActions
          fbHref="https://www.facebook.com/profile.php?id=61581907344873"
          onOpenRules={() => setRulesOpen(true)}
        />
        <RulesModal open={rulesOpen} onClose={() => setRulesOpen(false)} />
      </div>
    </div>
  );
}

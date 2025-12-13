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

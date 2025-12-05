import { Link } from "react-router-dom";
import "./FacebookButton.css";

export default function Header() {
  return (
    <header className="bg-gray-950 border-b border-gray-800">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
        <Link to="/" className="flex items-center gap-3">
          <img
            src="/Mainlogo.png"
            alt="Santa Gaming"
            className="h-10 w-10 rounded-lg object-contain"
          />
          <div>
            <div className="text-xl font-semibold">Santa Gaming</div>
            <div className="text-xs text-gray-400">Deposit & play many games</div>
          </div>
        </Link>
        <a
          href="https://www.facebook.com/profile.php?id=61581907344873"
          target="_blank"
          rel="noreferrer"
          className="fb-animated-btn relative overflow-hidden inline-flex items-center gap-2 rounded-md bg-brand px-4 py-2 text-sm font-medium text-white"
        >
          <span className="fb-shiny-text">Facebook Page</span>
          <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M14 3h7v7h-2V6.41l-9.29 9.3-1.42-1.42 9.3-9.29H14V3z"></path>
            <path d="M5 5h5V3H3v7h2V5zM19 19h-5v2h7v-7h-2v5zM5 19v-5H3v7h7v-2H5z"></path>
          </svg>
        </a>
      </div>
    </header>
  );
}
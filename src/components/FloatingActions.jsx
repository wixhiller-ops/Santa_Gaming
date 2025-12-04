import PropTypes from "prop-types";

export default function FloatingActions({ fbHref, onOpenRules }) {
  return (
    <div className="fixed right-6 bottom-6 z-50 flex flex-col gap-3">
      {/* Facebook floating button (unchanged) */}
      <a
        href={fbHref}
        target="_blank"
        rel="noreferrer"
        className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-brand text-white shadow-lg shadow-brand/30 hover:bg-brand-dark transition"
        aria-label="Open Facebook Page"
        title="Open Facebook Page"
      >
        <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M22 12.06C22 6.49 17.52 2 12 2S2 6.49 2 12.06c0 4.99 3.66 9.13 8.44 9.94v-7.03h-2.54V12.06h2.54V9.8c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.23.19 2.23.19v2.46h-1.25c-1.24 0-1.62.77-1.62 1.56v1.94h2.76l-.44 2.91h-2.32v7.03C18.34 21.19 22 17.05 22 12.06z"></path>
        </svg>
      </a>

      {/* Rules button with hover label */}
      <div className="relative group">
        <button
          type="button"
          onClick={onOpenRules}
          className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-gray-700 bg-gray-900/80 text-white shadow hover:border-brand/60 transition"
          aria-label="Open Rules"
          title="Open Rules"
        >
          <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M7 4h10a2 2 0 0 1 2 2v13l-3.5-2-3.5 2-3.5-2-3.5 2V6a2 2 0 0 1 2-2z"></path>
          </svg>
        </button>
        <span
          className="pointer-events-none absolute right-full mr-2 top-1/2 -translate-y-1/2 rounded-md bg-gray-800 px-2 py-1 text-xs text-white opacity-0 group-hover:opacity-100 transition"
        >
          Rules
        </span>
      </div>
    </div>
  );
}

FloatingActions.propTypes = {
  fbHref: PropTypes.string.isRequired,
  onOpenRules: PropTypes.func.isRequired,
};
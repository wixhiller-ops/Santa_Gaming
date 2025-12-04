/* eslint-disable react-hooks/rules-of-hooks */
import PropTypes from "prop-types";
import { useRef, useEffect } from "react";

export default function RulesModal({ open, onClose }) {
  const panelRef = useRef(null);

  // Close on Escape
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [onClose]);

  // Scroll lock while modal is open (cleanup always runs)
  useEffect(() => {
    const html = document.documentElement;
    const body = document.body;
    const prevOverflowHtml = html.style.overflow;
    const prevOverflowBody = body.style.overflow;
    const prevPaddingRight = body.style.paddingRight;
    const scrollBarWidth = window.innerWidth - html.clientWidth;

    if (open) {
      html.style.overflow = "hidden";
      body.style.overflow = "hidden";
      if (scrollBarWidth > 0) {
        body.style.paddingRight = `${scrollBarWidth}px`;
      }
    }

    return () => {
      html.style.overflow = prevOverflowHtml;
      body.style.overflow = prevOverflowBody;
      body.style.paddingRight = prevPaddingRight;
    };
  }, [open]);

  // Only render markup after hooks so cleanup can run
  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="rules-title"
    >
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />
      <div
        ref={panelRef}
        className="relative w-full max-w-lg overflow-hidden rounded-2xl border border-brand/40 bg-gray-900/90 shadow-2xl shadow-black/40 ring-1 ring-white/10"
      >
        <div className="relative px-6 pt-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-brand/20 text-brand">
                {/* book/rules icon */}
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M7 4h10a2 2 0 0 1 2 2v13l-3.5-2-3.5 2-3.5-2-3.5 2V6a2 2 0 0 1 2-2z"></path>
                </svg>
              </span>
              <h2 id="rules-title" className="text-xl font-bold">
                Santa Gaming Rules
              </h2>
            </div>
            <button
              onClick={onClose}
              className="rounded-md border border-gray-700 px-2 py-1 text-xs hover:border-brand/60"
              aria-label="Close"
            >
              Close
            </button>
          </div>

          <div className="mt-4">
            <div className="rounded-xl border border-gray-800 bg-gray-900/70 p-4">
              <ul className="space-y-3 text-gray-200">
                <li className="flex items-start gap-3">
                  <span className="text-brand">•</span>
                  <span>
                    No maximum or minimum limit of cash-in or cash-out
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-brand">•</span>
                  <span>
                    For FP, you can cashout up to 20% of your total winnings
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-brand">•</span>
                  <span>
                    For referral bonus, $5 bonus and can cashout 50% of total
                    winnings
                  </span>
                </li>
              </ul>
            </div>

            <div className="mt-5 flex items-center justify-between border-t border-gray-800 pt-4"></div>
          </div>
        </div>
        <div className="pointer-events-none absolute -top-20 -right-20 h-40 w-40 rounded-full bg-brand/10 blur-2xl" />
      </div>
    </div>
  );
}

RulesModal.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

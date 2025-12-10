import games from "../data/games";
import GameCard from "../components/GameCard";

import cashapp from "../assets/logos/Cashapp.png";
import applepay from "../assets/logos/Applepay.png";
import debitcredit from "../assets/logos/Debit_credit cards.png";
import chime from "../assets/logos/chime.jpg";
import ShinyText from "../components/ShinyText";

export default function Home() {
  return (
    <>
      <section className="mb-10">
        <div className="relative overflow-hidden rounded-2xl border border-brand/30 bg-gray-900/60 p-8">
          <div className="absolute inset-0 pointer-events-none opacity-20">
            <div className="h-full w-full bg-[radial-gradient(circle_at_20%_30%,rgba(244,63,94,.3),transparent_45%),radial-gradient(circle_at_80%_70%,rgba(190,18,60,.25),transparent_45%)]" />
          </div>

          <div className="relative flex flex-col items-center text-center">
            <img
              src="/Mainlogo.png"
              alt="Santa Gaming"
              className="h-20 w-20 rounded-xl object-contain mb-4"
            />
            <h1 className="text-4xl font-extrabold leading-tight">
              <span className="cyber-santa-text">Santa Gaming</span>
            </h1>

            <ShinyText
              text="Deposit and play your favorite skill games. Choose from the list
              below."
              disabled={false}
              speed={3}
              className="mt-3 max-w-2xl text-white custom-class"
            />

            <div className="mt-6">
              <a
                href="https://www.facebook.com/profile.php?id=61581907344873"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-md bg-brand px-5 py-2.5 text-sm font-semibold hover:bg-brand-dark transition shadow-md shadow-brand/20"
              >
                Contact our Facebook page to deposit & play
                <svg
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M14 3h7v7h-2V6.41l-9.29 9.3-1.42-1.42 9.3-9.29H14V3z"></path>
                </svg>
              </a>
            </div>
          </div>

          <div className="relative mt-8">
            <h3 className="text-sm font-semibold text-gray-300 text-center">
              Supported Payments
            </h3>
            <div className="mt-4 payment-bar mx-auto">
              <div className="payment-track"> <a
                href="https://app.chime.com/link/qr?u=Maxwell-Reymer"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={chime}
                  alt="Chime"
                  className="h-12 rounded-xl w-auto opacity-95 hover:scale-105 hover:rounded-xl transition-transform"
                />
              </a>
                {/* <img
                  src={cashapp}
                  alt="Cash App"
                  className="h-12 w-auto opacity-95"
                /> */}
                <a
                  href="https://buy.stripe.com/3cIeVf83U03S78728NeQM00"
                  target="_blank"
                  rel="noreferrer"
                > <img
                    src={applepay}
                    alt="Apple Pay"
                    className="h-12 w-auto opacity-95 hover:scale-105 transition-transform"
                  /></a>
                <a
                  href="https://buy.stripe.com/3cIeVf83U03S78728NeQM00"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src={debitcredit}
                    alt="Debit/Credit Cards"
                    className="h-12 w-auto opacity-95 hover:scale-105 transition-transform"
                  />
                </a>

              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <h2 className="sr-only">Games</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {games.map((game) => (
            <GameCard key={game.slug} game={game} />
          ))}
        </div>
      </section>
    </>
  );
}

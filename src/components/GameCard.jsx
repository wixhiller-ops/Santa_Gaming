import { Link } from "react-router-dom";

export default function GameCard({ game }) {
  return game.url ? (
    <a
      href={game.url}
      target="_blank"
      rel="noreferrer"
      className="group rounded-xl border border-gray-800 bg-gray-900/50 overflow-hidden hover:border-brand/60 hover:shadow-lg hover:shadow-brand/20 transition"
    >
      <div className="aspect-[16/9] bg-gray-800">
        <img
          src={game.image}
          alt={game.name}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
          loading="lazy"
        />
      </div>
      <div className="p-4">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold">{game.name}</h3>
          <span className="rounded-md bg-brand/20 px-2 py-1 text-xs text-brand">Play</span>
        </div>
        {game.tagline && (
          <p className="mt-1 text-sm text-gray-400">{game.tagline}</p>
        )}
      </div>
    </a>
  ) : (
    <Link
      to={`/games/${game.slug}`}
      className="group rounded-xl border border-gray-800 bg-gray-900/50 overflow-hidden hover:border-brand/60 hover:shadow-lg hover:shadow-brand/20 transition"
    >
      <div className="aspect-[16/9] bg-gray-800">
        <img
          src={game.image}
          alt={game.name}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
          loading="lazy"
        />
      </div>
      <div className="p-4">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold">{game.name}</h3>
          <span className="rounded-md bg-brand/20 px-2 py-1 text-xs text-brand">Details</span>
        </div>
        {game.tagline && (
          <p className="mt-1 text-sm text-gray-400">{game.tagline}</p>
        )}
      </div>
    </Link>
  );
}
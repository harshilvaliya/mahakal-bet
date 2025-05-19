import hotSlot from "../../assets/hot-slot.jfif";
import lightingRoulette from "../../assets/lightning-roulette.webp";
import aviator from "../../assets/aviator.webp";
import sevenUpNdown from "../../assets/7up&down.webp";

type Game = {
  title: string;
  image: string;
  category: string;
};

const GameCard = ({ game, index }: { game: Game; index: number }) => (
  <div className="bg-gray-800 rounded-md overflow-hidden cursor-pointer relative group hover:shadow-xl transition-all duration-300">
    <img
      src={game.image}
      alt={game.title}
      className="w-full h-40 sm:h-48 object-cover transition-transform group-hover:scale-105 duration-300"
      loading="lazy"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
    <div className="absolute bottom-0 left-0 right-0 p-3 text-center">
      <h3 className="text-white text-sm sm:text-base font-medium truncate">
        {game.title}
      </h3>
    </div>
    {index === 0 && (
      <div className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
        HOT
      </div>
    )}
  </div>
);

const casinoGames: Game[] = [
  {
    title: "Hot Slot 777",
    image: hotSlot,
    category: "slots",
  },
  {
    title: "Lightning Roulette",
    image: lightingRoulette,
    category: "live",
  },
  {
    title: "Aviator",
    image: aviator,
    category: "crash",
  },
  {
    title: "7 UP DOWN",
    image: sevenUpNdown,
    category: "cards",
  },
];

const CasinoGames = () => (
  <section>
    <h2 className="text-lg font-bold mb-3 text-white flex items-center gap-2">
      Top Casino Picks
      <span className="text-xs font-normal text-gray-400">(4)</span>
    </h2>
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
      {casinoGames.map((game, index) => (
        <GameCard key={index} game={game} index={index} />
      ))}
    </div>
  </section>
);

export default CasinoGames;
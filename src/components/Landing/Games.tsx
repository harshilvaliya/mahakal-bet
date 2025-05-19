import React from "react";

import favIcon from "../../assets/fav-star.svg";
import liveCasinoIcon from "../../assets/casino.svg";
import crashGamesIcon from "../../assets/crash-games.svg";
import slotIcon from "../../assets/slot.svg";
import instantWinIcon from "../../assets/instant-win.svg";
import tableGameIcon from "../../assets/table-game.svg";
import gameShowsIcon from "../../assets/game-shows.svg";
import rouletteIcon from "../../assets/roulette.svg";
import topGamesIcon from "../../assets/top-games.svg";
import virtualSportsIcon from "../../assets/virtual-sport.svg";

interface GameCategory {
  id: string;
  name: string;
  icon?: string;
  isMore?: boolean;
}

const GAME_CATEGORIES: GameCategory[] = [
  { id: "fav", name: "Fav", icon: favIcon },
  { id: "live-casino", name: "Live Casino", icon: liveCasinoIcon },
  { id: "crash-games", name: "Crash Games", icon: crashGamesIcon },
  { id: "slot", name: "Slot", icon: slotIcon },
  { id: "instant-win", name: "Instant Win", icon: instantWinIcon },
  { id: "table-game", name: "Table Game", icon: tableGameIcon },
  { id: "game-shows", name: "Game Shows", icon: gameShowsIcon },
  { id: "roulette", name: "Roulette", icon: rouletteIcon },
  { id: "top-games", name: "Top Games", icon: topGamesIcon },
  { id: "virtual-sports", name: "Virtual Sports", icon: virtualSportsIcon },
  { id: "more", name: "...many\nmore", isMore: true },
];

interface GameCategoryCardProps {
  category: GameCategory;
}

const GameCategoryCard: React.FC<GameCategoryCardProps> = ({ category }) => (
  <div 
    className="px-3 md:px-6 py-2 md:py-4 bg-blue-01 text-center rounded-lg md:min-w-28 flex flex-col items-center justify-center hover:bg-blue-02 transition-colors cursor-pointer"
    role="button"
    tabIndex={0}
    aria-label={`Select ${category.name} category`}
  >
    {category.icon && (
      <img
        src={category.icon}
        alt={`${category.name} icon`}
        loading="lazy"
        width={32}
        height={32}
        className="w-8 h-8 object-cover mb-2"
      />
    )}
    <p className={`text-lg md:text-[22px] leading-[32px] font-semibold mb-0 ${category.isMore ? 'text-secondary-400' : 'text-light'}`}>
      {category.name.split('\n').map((line, i) => (
        <React.Fragment key={i}>
          {i > 0 && <br className="md:block hidden" />}
          {line}
        </React.Fragment>
      ))}
    </p>
  </div>
);

const Games: React.FC = () => {
  return (
    <section 
      className="pt-[127px] md:pt-[171px] px-3 pb-10 md:pb-[120px] relative bg-secondary-100"
      aria-labelledby="games-title"
    >
      <div className="max-w-[1096px] mx-auto">
        <div className="text-center">
          <h2 
            id="games-title"
            className="text-3xl md:text-[42px] leading-[44px] font-semibold text-light md:mb-2"
          >
            Thousands of{" "}
            <span className="text-primary-600">Exciting Games</span>
          </h2>
          <h3 className="text-2xl md:text-[42px] leading-[44px] font-semibold text-light">
            Countless ways to strike it big
          </h3>
        </div>

        <div 
          className="flex flex-wrap justify-center gap-4 mt-4 md:mt-8"
          role="list"
          aria-label="Game categories"
        >
          {GAME_CATEGORIES.map(category => (
            <GameCategoryCard 
              key={category.id} 
              category={category} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Games;

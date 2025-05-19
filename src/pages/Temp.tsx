import { Bell, MessageCircle, User } from "lucide-react";
import { useState, useEffect, useCallback, memo } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import mahakalLogo from "../assets/mahakal-logo-white.png";

// casino
import hotSlot from "../assets/hot-slot.jfif";
import lightingRoulette from "../assets/lightning-roulette.webp";
import aviator from "../assets/aviator.webp";
import sevenUpNdown from "../assets/7up&down.webp";

// banners
import banner1 from "../assets/swiper-banner-1.jfif";
import banner2 from "../assets/swiper-banner-2.jfif";
import banner3 from "../assets/swiper-banner-3.jfif";
import banner4 from "../assets/swiper-banner-4.jfif";
import banner5 from "../assets/swiper-banner-5.jfif";

// sites
import skyExch from "../assets/skyexch.jfif";
import skyFair from "../assets/skyfair.jfif";
import sky247 from "../assets/sky247.jfif";
import future9 from "../assets/future9.png";
import radheExchange from "../assets/radhe-exchange.jfif";
import mazaplay from "../assets/mazaplay.jfif";
import betBarter from "../assets/betBarter.jfif";
import cricketBook from "../assets/cricketBook.jfif";

type Site = {
  name: string;
  url: string;
  logo: string;
  status: string;
  statusColor: string;
};

type Game = {
  title: string;
  image: string;
  category: string;
};

// Memoized components for better performance
const MemoizedSiteCard = memo(({ site }: { site: (typeof allSites)[0] }) => (
  <div className="flex items-center justify-between p-4 hover:bg-gray-800 transition-colors">
    <div className="flex items-center gap-3">
      <div className="relative">
        <img
          src={site.logo}
          alt={site.name}
          className="w-10 h-10 rounded-full bg-gray-800"
          loading="lazy"
        />
        <div className="absolute -top-1 -right-1 px-1.5 py-0.5 bg-green-500 text-white text-[8px] rounded-sm font-medium">
          ONLINE
        </div>
      </div>
      <div>
        <h4 className="font-medium text-white">{site.name}</h4>
        <p className="text-xs text-gray-400">{site.url}</p>
      </div>
    </div>
    <a
      href="/sign-up"
      className="bg-teal-600 hover:bg-teal-700 px-4 py-1.5 rounded text-sm font-medium transition-colors"
    >
      Create
    </a>
  </div>
));

const MemoizedGameCard = memo(
  ({ game, index }: { game: (typeof casinoGames)[0]; index: number }) => (
    <div className="bg-gray-800 rounded-md overflow-hidden cursor-pointer relative group">
      <img
        src={game.image}
        alt={game.title}
        className="w-full h-20 object-cover transition-transform group-hover:scale-105"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
      <div className="absolute bottom-0 left-0 right-0 p-1 text-center">
        <h3 className="text-white text-xs font-medium truncate">
          {game.title}
        </h3>
      </div>
      {index === 0 && (
        <div className="absolute top-1 left-1 bg-red-500 text-white text-[10px] px-1 py-0.5 rounded">
          HOT
        </div>
      )}
    </div>
  )
);

// Memoized components with proper typing
const MemoizedSiteCard = memo(({ site }: { site: Site }) => (
  <div className="flex items-center justify-between p-4 hover:bg-gray-800 transition-colors">
    <div className="flex items-center gap-3">
      <div className="relative">
        <img
          src={site.logo}
          alt={site.name}
          className="w-10 h-10 rounded-full bg-gray-800"
          loading="lazy"
        />
        <div className="absolute -top-1 -right-1 px-1.5 py-0.5 bg-green-500 text-white text-[8px] rounded-sm font-medium">
          ONLINE
        </div>
      </div>
      <div>
        <h4 className="font-medium text-white">{site.name}</h4>
        <p className="text-xs text-gray-400">{site.url}</p>
      </div>
    </div>
    <a
      href="/sign-up"
      className="bg-teal-600 hover:bg-teal-700 px-4 py-1.5 rounded text-sm font-medium transition-colors"
    >
      Create
    </a>
  </div>
));

const MemoizedGameCard = memo(
  ({ game, index }: { game: Game; index: number }) => (
    <div className="bg-gray-800 rounded-md overflow-hidden cursor-pointer relative group">
      <img
        src={game.image}
        alt={game.title}
        className="w-full h-20 object-cover transition-transform group-hover:scale-105"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
      <div className="absolute bottom-0 left-0 right-0 p-1 text-center">
        <h3 className="text-white text-xs font-medium truncate">
          {game.title}
        </h3>
      </div>
      {index === 0 && (
        <div className="absolute top-1 left-1 bg-red-500 text-white text-[10px] px-1 py-0.5 rounded">
          HOT
        </div>
      )}
    </div>
  )
);

const BetExcHomepage: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTab] = useState("all"); // Removed unused setActiveTab

  const casinoGames = [
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

  const allSites = [
    {
      name: "Sky Exch",
      url: "https://www.skyexch.com",
      logo: skyExch,
      status: "working",
      statusColor: "bg-green-500",
    },
    {
      name: "Sky Fair",
      url: "https://skyfair-live-exchange.com",
      logo: skyFair,
      status: "working",
      statusColor: "bg-green-500",
    },
    {
      name: "Sky 247",
      url: "https://www.sky247.in",
      logo: sky247,
      status: "working",
      statusColor: "bg-green-500",
    },
    {
      name: "Future9",
      url: "https://future9.live",
      logo: future9,
      status: "working",
      statusColor: "bg-green-500",
    },
    {
      name: "Radhe Exchange",
      url: "https://radheexchange.live",
      logo: radheExchange,
      status: "working",
      statusColor: "bg-green-500",
    },
    {
      name: "Mazaplay",
      url: "https://mazaplay.mazaplay.land",
      logo: mazaplay,
      status: "working",
      statusColor: "bg-green-500",
    },
    {
      name: "Bet Starter",
      url: "https://betstarter.live",
      logo: betBarter,
      status: "working",
      statusColor: "bg-green-500",
    },
    {
      name: "Cricket Book",
      url: "https://cricketbook.live",
      logo: cricketBook,
      status: "working",
      statusColor: "bg-green-500",
    },
  ];

  const notifications = [
    "Punjab vs Rajasthan On",
    "Afghanistan A vs Ireland A",
    "Bangladesh vs W",
  ];

  // Filter sites based on active tab
  const filteredSites =
    activeTab === "all" ? allSites : allSites.filter((_, index) => index < 4);

  // Handle scroll behavior
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [mobileMenuOpen]);

  // Memoized handlers
  const toggleMobileMenu = useCallback(() => {
    setMobileMenuOpen((prev) => !prev);
  }, []);

  // Optimized scroll behavior
  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [mobileMenuOpen]);

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <header className="sticky top-0 z-50 bg-gray-800 border-b border-gray-700 shadow-lg backdrop-blur-sm bg-opacity-90">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-3">
            <div className="flex items-center">
              <img
                src={mahakalLogo}
                alt="Mahakal Logo"
                loading="lazy"
                width={200}
                height={200}
                className="w-24 sm:w-28 h-auto"
              />
            </div>

            {/* Desktop navigation */}
            <div className="hidden md:flex items-center gap-6">
              <Bell className="w-6 h-6 text-gray-400 hover:text-white cursor-pointer transition-colors" />
              <MessageCircle className="w-6 h-6 text-gray-400 hover:text-white cursor-pointer transition-colors" />
              <User className="w-6 h-6 text-gray-400 hover:text-white cursor-pointer transition-colors" />
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-6 space-y-6">
        <section className="relative">
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={0}
            slidesPerView={1}
            pagination={{
              clickable: true,
              bulletClass: "swiper-pagination-bullet !bg-white !opacity-50",
              bulletActiveClass:
                "swiper-pagination-bullet-active !bg-white !opacity-100",
            }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            loop={true}
            className="rounded-lg overflow-hidden shadow-xl"
          >
            {[banner1, banner2, banner3, banner4, banner5].map(
              (banner, index) => (
                <SwiperSlide key={index}>
                  <img
                    src={banner}
                    alt={`Banner ${index + 1}`}
                    className="w-full h-48 object-cover"
                    loading={index === 0 ? "eager" : "lazy"}
                  />
                </SwiperSlide>
              )
            )}
          </Swiper>
        </section>

        <section className="bg-red-900 py-2 rounded-[3px] overflow-hidden shadow-md">
          <div className="flex items-center overflow-hidden">
            <div className="flex-shrink-0 flex items-center bg-white bg-opacity-20 rounded-full p-1 mx-2">
              <span className="text-white text-xs font-medium">🏏</span>
            </div>
            <div className="marquee relative overflow-hidden w-full">
              <div className="marquee-content flex gap-5 animate-marquee">
                {notifications.map((notification, index) => (
                  <span
                    key={index}
                    className="text-white text-sm whitespace-nowrap bg-red-400 px-2 py-1 rounded-3xl"
                  >
                    {notification}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-lg font-bold mb-3 text-white flex items-center gap-2">
            Top Casino Picks
            <span className="text-xs font-normal text-gray-400">(4)</span>
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            {casinoGames.map((game, index) => (
              <MemoizedGameCard key={index} game={game} index={index} />
            ))}
          </div>
        </section>

        <section className="bg-gray-900 rounded-lg overflow-hidden shadow-lg">
          <div className="flex justify-between items-center p-4 border-b border-gray-800">
            <div className="flex gap-4">
              <button className="text-white font-medium hover:text-teal-400 transition-colors">
                All Sites
              </button>
            </div>
          </div>
          <div className="divide-y divide-gray-800">
            {filteredSites.map((site, index) => (
              <MemoizedSiteCard key={index} site={site} />
            ))}
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 mt-auto py-6 border-t border-gray-700">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <img
                src={mahakalLogo}
                alt="Mahakal Logo"
                className="w-24 h-auto"
              />
            </div>
            <div className="text-center md:text-right text-gray-400 text-sm">
              <p>© 2023 BetExc. All rights reserved.</p>
              <p className="mt-1">18+ | Gamble Responsibly</p>
            </div>
          </div>
        </div>
      </footer>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(100%); }
          100% { transform: translateX(-100%); }
        }
        .animate-marquee {
          animation: marquee 20s linear infinite;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .swiper-pagination {
          bottom: 10px !important;
        }
        .swiper-pagination-bullet {
          width: 8px !important;
          height: 8px !important;
          margin: 0 4px !important;
        }
      `}</style>
    </div>
  );
};

export default BetExcHomepage;

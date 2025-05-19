import skyExch from "../../assets/skyexch.jfif";
import skyFair from "../../assets/skyfair.jfif";
import sky247 from "../../assets/sky247.jfif";
import future9 from "../../assets/future9.png";
import radheExchange from "../../assets/radhe-exchange.jfif";
import mazaplay from "../../assets/mazaplay.jfif";
import betBarter from "../../assets/betBarter.jfif";
import cricketBook from "../../assets/cricketBook.jfif";

type Site = {
  name: string;
  url: string;
  logo: string;
  status: string;
  statusColor: string;
};

const SiteCard = ({ site }: { site: Site }) => (
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
          {site.status.toUpperCase()}
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
);

const allSites: Site[] = [
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

const SitesList = () => {
  const filteredSites = allSites;

  return (
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
          <SiteCard key={index} site={site} />
        ))}
      </div>
    </section>
  );
};

export default SitesList;
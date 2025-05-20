import { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

type Links = {
  url: string;
  userId: string;
  agent: string;
  name: string;
  logo: string;
};

interface ApiResponse {
  status: string;
  data: {
    code: string;
    links: Array<{
      site: string;
      userid: string;
    }>;
    agent: string;
    created_at: string;
    updated_at: string;
    inuserid: number;
  };
  sites: Array<{
    site: string;
    name: string;
    logo: string;
  }>;
}

const SiteCard = ({ site, nav }: { site: Links; nav: any }) => (
  <div className="flex items-center justify-between p-4 hover:bg-gray-800 transition-colors">
    <div className="flex items-center gap-3">
      <div className="relative">
        <img
          src={site.logo}
          alt={site.name}
          className="w-10 h-10 rounded-full object-contain bg-black"
        />
        <div className="absolute -top-1 -right-1 px-1.5 py-0.5 bg-green-500 text-white text-[8px] rounded-sm font-medium">
          Trending
        </div>
      </div>
      <div>
        <h4 className="font-medium text-white">{site.name}</h4>
        <p className="text-xs text-gray-400">{site.url}</p>
      </div>
    </div>
    <div
      onClick={() => nav(`/sign-up?refer=${site.userId}&agent=${site.agent}`, { state: site })}
      // to={`/sign-up?refer=${site.userId}&agent=${site.agent}`}
      className="bg-teal-600 hover:bg-teal-700 px-4 py-1.5 rounded text-sm font-medium transition-colors"
    >
      Create
    </div>
  </div>
);

const SitesList = ({ id }: { id: string }) => {
  const [sites, setSites] = useState<Links[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const nav = useNavigate();

  useEffect(() => {
    const fetchSites = async () => {
      try {
        const response = await fetch(
          `https://webapi.9xxbet.com/api/v1/admin/getlinkcode?id=${id}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch sites");
        }
        const result: ApiResponse = await response.json();

        const formattedSites = result.data.links.map((link, index) => ({
          url: link.site.trim(),
          userId: link.userid,
          agent: result.data.agent,
          name: result.sites[index].name,
          logo: result.sites[index].logo,
        }));

        setSites(formattedSites);
      } catch (err) {
        setError(err instanceof Error ? err.message : "An error occurred");
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchSites();
    }
  }, [id]);

  if (loading) {
    return <div className="text-center py-8">Loading...</div>;
  }

  if (error) {
    return <div className="text-center py-8 text-red-500">{error}</div>;
  }

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
        {sites.map((site, index) => (
          <SiteCard key={index} site={site} nav={nav} />
        ))}
      </div>
    </section>
  );
};

export default SitesList;

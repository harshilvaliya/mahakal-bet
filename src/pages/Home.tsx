import { useParams } from "react-router-dom";
import Header from "../components/Home/Header";
import BannerSlider from "../components/Home/BannerSlider";
import NotificationBar from "../components/Home/NotificationBar";
import CasinoGames from "../components/Home/CasinoGames";
import SitesList from "../components/Home/SitesList";
import Footer from "../components/Common/Footer";

const Home = () => {
  const { id } = useParams();
  console.log(id);

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Header />
      <main className="container mx-auto px-4 py-6 space-y-8 max-w-7xl">
        <BannerSlider />
        <NotificationBar />
        <CasinoGames />
        <SitesList id={id!} />
      </main>
      <Footer />

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

export default Home;

import { Bell, MessageCircle, User } from "lucide-react";
import mahakalLogo from "../../assets/mahakal-logo-white.png";

const Header = () => (
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
);

export default Header;
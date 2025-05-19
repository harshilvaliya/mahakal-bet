import mahakalLogo from "../../assets/mahakal-logo-white.png";
import whatsApp from "../../assets/whatsApp-icon.png";
import telegram from "../../assets/telegram-icon.png";
import message from "../../assets/message-icon.png";
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

        <div className="flex items-center gap-2 md:gap-6">
          <img src={whatsApp} className="w-8 h-8 cursor-pointer" />
          <img src={telegram} className="w-8 h-8  cursor-pointer" />
          <img src={message} className="w-8 h-8  cursor-pointer" />
        </div>
      </div>
    </div>
  </header>
);

export default Header;

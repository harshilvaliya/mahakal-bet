import React, { useState } from "react";
import mahakalLogo from "../assets/mahakal-logo-white.png";
import { NavLink } from "react-router-dom";

interface NavLink {
  href: string;
  label: string;
  isButton?: boolean;
}

const NAV_LINKS: NavLink[] = [
  { href: "#features", label: "Features" },
  { href: "#why", label: "Why?" },
  { href: "#faqs", label: "FAQs" },
  { href: "#contact", label: "Contact" },
  { href: "/sign-up", label: "Sign Up", isButton: true },
];

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="sticky top-0 left-0 right-0 z-50 bg-secondary-100 text-light">
      <div className="container mx-auto flex items-center justify-between py-4 px-3 md:px-4 xl:px-[60px]">
        <a
          href="/"
          className="text-2xl font-bold hover:text-primary-600 transition-colors"
          aria-label="Mahakaal - Home"
        >
          <img
            src={mahakalLogo}
            alt="Mahakal Logo"
            loading="lazy"
            width={200}
            height={200}
            className="w-28 h-auto mx-auto md:mx-0"
          />
        </a>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-light hover:text-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-600"
          onClick={toggleMenu}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isMenuOpen ? (
              <path d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        {/* Desktop Navigation */}
        <nav
          className="hidden md:flex items-center gap-12"
          aria-label="Main navigation"
        >
          {NAV_LINKS.map(({ href, label, isButton }) =>
            isButton ? (
              <NavLink
                key={href}
                to={href}
                className="relative text-light text-lg font-bold py-3 px-4 md:px-12 rounded-xl bg-primary-400 hover:bg-primary-600 transition-colors border-transparent cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary-600 focus:ring-offset-2 focus:ring-offset-secondary-100"
                role="button"
              >
                {label}
              </NavLink>
            ) : (
              <NavLink
                key={href}
                to={href}
                className="text-lg hover:text-primary-600 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-600 rounded-md"
              >
                {label}
              </NavLink>
            )
          )}
        </nav>

        {/* Mobile Navigation */}
        <nav
          id="mobile-menu"
          className={`${
            isMenuOpen ? "flex" : "hidden"
          } absolute top-full left-0 right-0 bg-secondary-100 flex-col items-center py-4 border-t border-secondary-200 md:hidden`}
          aria-label="Mobile navigation"
        >
          {NAV_LINKS.map(({ href, label, isButton }) => (
            <NavLink
              key={href}
              to={href}
              className={`w-full text-center py-3 px-4 ${
                isButton
                  ? "bg-primary-400 hover:bg-primary-600 font-bold mx-4 rounded-xl"
                  : "hover:bg-secondary-200"
              } transition-colors`}
              onClick={isButton ? undefined : toggleMenu}
              role={isButton ? "button" : undefined}
            >
              {label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;

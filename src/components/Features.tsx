import React from "react";

import featureMobile1 from "../assets/fet-mobile-1.webp.png";
import featureMobile2 from "../assets/fet-mobile-2.webp";
import featureMobile3 from "../assets/fet-mobile-3.webp";

interface Feature {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  imageAlt: string;
}

const FEATURES: Feature[] = [
  {
    id: "id-management",
    title: "Get Secure & Hassle-Free Betting IDs Management",
    subtitle: "Fast, Reliable, & Ready in Seconds!",
    description:
      "Easily create, manage, deposit, and withdraw from your betting IDs across multiple platforms. Plus, securely add and save manual IDs to keep all your credentials in one place.",
    image: featureMobile1,
    imageAlt:
      "Secure betting ID management interface showing multiple platform integration",
  },
  {
    id: "casino-games",
    title: "Experience Non-Stop Thrills with Casino Games & Live Betting!",
    subtitle: "Exciting, Rewarding, Trusted.",
    description:
      "Explore thrilling casino games and live betting on Mahakal. Enjoy slots, roulette, blackjack, and more, plus Mahakal Originals. With top-tier graphics, fair play, and big rewards, the excitement never stops! 🚀",
    image: featureMobile2,
    imageAlt: "Casino games interface showcasing various gaming options",
  },
  {
    id: "sports-betting",
    title: "Bet on the biggest events across sports and beyond",
    subtitle: "Live, Competitive, Unmatched Odds.",
    description:
      "Wager on the biggest sports events with live betting, competitive odds, and real-time action. From football to esports, experience unmatched excitement and maximize your wins!",
    image: featureMobile3,
    imageAlt: "Sports betting interface displaying live odds and events",
  },
];

interface FeatureCardProps {
  feature: Feature;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ feature }) => (
  <div
    className="flex flex-col lg:flex-row gap-5 justify-center lg:justify-between items-start border-2 border-secondary-300 bg-secondary-200 rounded-[32px] lg:pl-20 mb-8 last:mb-0"
    role="article"
  >
    <div className="flex-grow max-w-[568px] py-5 px-5 lg:px-0 lg:py-[50px]">
      <h3 className="text-3xl md:text-[36px] leading-[44px] font-semibold mb-4 text-light">
        {feature.title}
      </h3>
      <p className="text-xl md:text-2xl text-primary-600 mb-6 md:mb-8">
        {feature.subtitle}
      </p>
      <p className="text-lg md:text-2xl text-neutralGray-800">
        {feature.description}
      </p>
    </div>
    <div className="w-full lg:w-[536px]">
      <img
        src={feature.image}
        alt={feature.imageAlt}
        loading="lazy"
        width={600}
        height={600}
        className="w-full lg:w-[536px] mx-auto lg:h-[500px] object-cover rounded-[24px]"
      />
    </div>
  </div>
);

const Features: React.FC = () => {
  return (
    <section
      id="features-section"
      className="py-12 md:pt-20 md:pb-28 px-4 bg-SectionGradient"
      aria-labelledby="features-title"
    >
      <div className="max-w-[1320px] mx-auto">
        <h2
          id="features-title"
          className="text-3xl md:text-[42px] text-light text-center mb-6 md:mb-10"
        >
          Features
        </h2>

        {FEATURES.map((feature) => (
          <FeatureCard key={feature.id} feature={feature} />
        ))}
      </div>
    </section>
  );
};

export default Features;

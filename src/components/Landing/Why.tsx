import React from "react";

import icon1 from "../../assets/secure.5ea4a16e.svg";
import icon2 from "../../assets/instant-id.b661c2ea.svg";
import icon3 from "../../assets/multiple-platforms.89b49131.svg";
import icon4 from "../../assets/fast-withdrawals.f25acab9.svg";
import icon5 from "../../assets/24-7-support.1473b509.svg";

interface FeatureCardProps {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  index: number;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  title,
  description,
  imageAlt,
  imageSrc,
  index,
}) => (
  <div
    data-index={index}
    className="w-full sm:w-1/2 lg:w-1/3 xl:w-1/5 p-2 sm:p-3"
  >
    <div className="h-full rounded-xl bg-secondary-100 text-left p-4 sm:p-6 transition-transform duration-300 hover:transform hover:scale-105">
      <div className="flex items-center justify-center sm:justify-start mb-4">
        <img
          src={imageSrc}
          alt={imageAlt}
          loading="lazy"
          className="w-12 h-12 sm:w-14 sm:h-14"
          style={{ color: "transparent" }}
        />
      </div>
      <h3 className="text-lg sm:text-xl font-semibold text-light mb-2 sm:mb-3 text-center sm:text-left">
        {title}
      </h3>
      <p className="text-base sm:text-lg text-neutralGray-800 text-center sm:text-left">
        {description}
      </p>
    </div>
  </div>
);

const Why: React.FC = () => {
  const features = [
    {
      title: "Secure & Reliable",
      description:
        "Enjoy a safe betting experience with verified accounts and encrypted transactions.",
      imageSrc: icon1,
      imageAlt: "Secure & Reliable",
    },
    {
      title: "Instant Betting IDs",
      description:
        "Get your betting ID in minutes and start playing right away. No delays, no hassle!",
      imageSrc: icon2,
      imageAlt: "Instant Betting IDs",
    },
    {
      title: "Multiple Platforms Supported",
      description:
        "Access the most popular betting platforms, all in one place.",
      imageSrc: icon3,
      imageAlt: "Multiple Platforms Supported",
    },
    {
      title: "Fast Withdrawals",
      description:
        "Withdraw your winnings quickly with hassle-free transactions and multiple payment options.",
      imageSrc: icon4,
      imageAlt: "Fast Withdrawals",
    },
    {
      title: "24/7 Support",
      description:
        "Our dedicated team is available anytime to assist you with your queries.",
      imageSrc: icon5,
      imageAlt: "24/7 Support",
    },
  ];

  return (
    <section
      id="why-choose-section"
      className="py-8 sm:py-12 md:py-20 px-4 bg-secondary-0 shape-grid overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-[42px] mb-6 sm:mb-8 md:mb-10 text-light font-semibold text-center">
          <span className="text-primary-600">Why</span> Choose Mahakal?
        </h2>
        <div className="-mx-2 sm:-mx-3">
          <div className="flex flex-wrap justify-center">
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                index={index}
                title={feature.title}
                description={feature.description}
                imageSrc={feature.imageSrc}
                imageAlt={feature.imageAlt}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Why;

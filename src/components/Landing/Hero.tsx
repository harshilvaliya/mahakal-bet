import React from "react";
import mobile1 from "../../assets/hero-mobile-1.webp.png";
import mobile2 from "../../assets/hero-mobile-2.webp";

const Hero: React.FC = () => {
  return (
    <section className="relative bg-secondary-0 pt-10 lg:pb-16 xl:py-10 px-4 -mb-[50px]">
      <div className="max-w-[1320px] mx-auto">
        <div className="lg:grid lg:grid-cols-2 gap-2 items-center">
          <div className="lg:text-left text-center px-3 lg:px-0">
            <h1 className="text-[32px] leading-10 lg:text-[45px] lg:leading-none xl:text-[56px] xl:leading-[64px] text-neutralGray-900  lg:pl-0 lg:pr-2 mb-4 lg:mb-6">
              Your Ultimate Destination for{" "}
              <span className="text-(--primary)"> Casino </span> &
              <span className="text-(--primary)"> Sports </span> Betting!
            </h1>
            <p className="text-xl lg:text-2xl xl:text-3xl text-neutralGray-900 mb-6 lg:mb-10">
              Play casino games, bet on live sports, and get instant betting
              IDs—all in one secure platform.
            </p>
            <div className="flex items-center justify-center lg:justify-start gap-4">
              
              <a
                href="http://"
                className="bg-transparent hover:!bg-primary-600 text-light transition-all text-lg lg:text-xl font-bold border border-primary-600 rounded-xl cursor-pointer py-[7px] lg:py-[15px] px-4 lg:px-8"
              >
                Sign Up
              </a>
            </div>
            <p className="text-lg text-neutralGray-500 mt-4">
              *For 18+ and above only
            </p>
          </div>
          <div className="mt-4 lg:mt-0 relative">
            <div className="banner-imaage1">
              <img
                src={mobile1}
                alt="mob-1"
                loading="lazy"
                width={498}
                height={671}
                className="w-full h-full animate-bounce"
                style={{ color: "transparent" }}
              />
            </div>
            <div className="banner-imaage2">
              <img
                src={mobile2}
                alt="mob-2"
                loading="lazy"
                width={498}
                height={671}
                className="w-full h-full animate-bounce"
                style={{ color: "transparent" }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

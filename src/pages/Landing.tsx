import React from "react";
import Header from "../components/Common/Header";
import Hero from "../components/Landing/Hero";
import Features from "../components/Landing/Features";
import CtaBanner from "../components/Landing/CtaBanner";
import FAQs from "../components/Landing/FAQs";
import Footer from "../components/Common/Footer";
import Games from "../components/Landing/Games";
import Why from "../components/Landing/Why";

const Landing: React.FC = () => {
  return (
    <div className="font-sans">
      <Header />
      <Hero />
      <Games />
      <Features />
      <Why />
      <FAQs />
      <CtaBanner />
      <Footer />
    </div>
  );
};

export default Landing;

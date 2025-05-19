import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Features from "../components/Features";
import CtaBanner from "../components/CtaBanner";
import FAQs from "../components/FAQs";
import Footer from "../components/Footer";
import Games from "../components/Games";
import Why from "../components/Why";

const Home: React.FC = () => {
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

export default Home;

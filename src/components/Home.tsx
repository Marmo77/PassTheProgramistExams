import React from "react";
import Hero from "./Home/Hero";
import Offer from "./Home/Offer";
import Support from "./Home/Support";
import Faq from "./Home/Faq";

const Home = () => {
  return (
    <section className="max-w-6xl gap-8 mx-auto flex flex-col justify-center items-center my-12">
      <Hero />
      <Support />
      <Offer />
      <Faq />
    </section>
  );
};

export default Home;

import React from "react";
import Hero from "./Home/Hero";
import Offer from "./Home/Offer";

const Home = () => {
  return (
    <section className="max-w-6xl gap-12 mx-auto flex flex-col justify-center items-center my-12">
      <Hero />
      <Offer />
    </section>
  );
};

export default Home;

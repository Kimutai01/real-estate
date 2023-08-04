import React from "react";
import Hero from "../components/Homepage/Hero";
import About from "../components/Homepage/About";
import Description from "../components/Homepage/Description";
import Recent from "../components/Homepage/Recent";
import Started from "../components/Homepage/Started";

const Home = () => {
  return (
    <div>
      <Hero />
      <About />
      <Description />
      <Recent />
      <Started />
    </div>
  );
};

export default Home;

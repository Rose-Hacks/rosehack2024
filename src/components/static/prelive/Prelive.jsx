"use client";
import Welcome from "../Welcome";
import About from "../about/About";
import Landing from "./Landing";
import Footer from "./Footer";
import { ParallaxProvider } from "react-scroll-parallax";

const Prelive = () => {
  return (
    <div className="w-full bg-blur">
      <ParallaxProvider>
        <Landing />
        <About />
        <Welcome />
        <Footer />
      </ParallaxProvider>
    </div>
  );
};

export default Prelive;

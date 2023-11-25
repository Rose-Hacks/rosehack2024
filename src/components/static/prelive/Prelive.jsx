"use client";
import Welcome from "../Welcome";
import About from "../about/About";
import Landing from "./Landing";
import Footer from "./Footer";
import Volunteer from "./getInvolved/Volunteer";
import Mentor from "./getInvolved/Mentor";
import { ParallaxProvider } from "react-scroll-parallax";
import FAQ from "./FAQ";

const Prelive = () => {
  return (
    <div className="w-full bg-blur">
      <ParallaxProvider>
        <Landing />
        <About />
        <Welcome />
        <Mentor />
        <Volunteer />
        <FAQ />
        <Footer />
      </ParallaxProvider>
    </div>
  );
};

export default Prelive;

"use client";
import Welcome from "../Welcome";
import About from "../about/About";
import Landing from "./Landing";
import Footer from "./Footer";
import GetInvolved from "./getInvolved/GetInvolved";
import FAQ from "./FAQ";
import Team from "./Team";

const Prelive = () => {
  return (
    <div className="w-full flex justify-center items-center flex-col">
      <Landing />
      <About />
      <Welcome />
      <GetInvolved />
      <Team />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Prelive;

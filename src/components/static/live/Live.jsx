"use client";
import Welcome from "../Welcome";
import About from "../about/About";
import Landing from "./Landing";
import Footer from "./Footer";
import GetInvolved from "./getInvolved/GetInvolved";
import FAQ from "./FAQ";
import Boards from "./board/Boards";
import Committees from "./Committees";
import Judges from "./judges/Judges";

const Live = () => {
  return (
    <div className="w-full flex justify-center items-center flex-col">
      <Landing />
      <About />
      <Welcome />
      <GetInvolved />
      <Boards />
      <Committees />
      <Judges />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Live;

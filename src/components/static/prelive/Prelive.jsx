import Welcome from "../Welcome";
import About from "../about/About";
import Landing from "./Landing";
import Footer from "./Footer";

const Prelive = () => {
  return (
    <div className="w-full bg-blur">
      <Landing />
      <About />
      <Welcome />
      <Footer />
    </div>
  );
};

export default Prelive;

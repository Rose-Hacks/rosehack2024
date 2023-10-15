import Link from "next/link";
import Countdown from "../Countdown";

const Content = () => {
  return (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white">
      <p className="w-full text-center font-nasalization text-3xl md:text-5xl ">
        ROSEHACK 2024
      </p>
      <p className="w-full text-center font-nasalization text-2xl md:text-4xl">
        COMING SOON
      </p>
      <p className="w-full text-center font-nasalization text-2xl md:text-4xl">
        January 13-14
      </p>
      <Countdown />
      <Link
        href="https://forms.gle/Pr8HMgaLWunGjWVv6"
        target="_blank"
        className="relative text-base md:text-xl bg-black/80 m-[0.5px] hover:bg-gradient-to-r from-hackathon-pink-200 to-hackathon-blue rounded-full py-1 text-center w-full px-4 "
      >
        interest form
      </Link>
      <Link
        target="_blank"
        href="https://crowdfunding.ucr.edu/o/university-of-california-riverside/i/ucrcrowdfunding/s/winc-fy24"
        className="relative text-base md:text-lg bg-black/80 m-[0.5px]  hover:bg-gradient-to-r from-hackathon-pink-200 to-hackathon-blue rounded-full py-1 text-center w-full px-4 "
      >
        donate now
      </Link>
    </div>
  );
};

export default Content;

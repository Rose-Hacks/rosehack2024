import Link from "../Link";
import Countdown from "../Countdown";

const Content = () => {
  return (
    <div className="absolute top-1/2 -translate-y-1/2 text-white w-full flex flex-col items-center">
      <p className="w-full text-center font-advent text-4xl md:text-5xl drop-shadow-pink-200">
        ROSEHACK 2024
      </p>
      <p className="w-full text-center font-advent text-3xl md:text-4xl drop-shadow-blue">
        COMING SOON
      </p>
      <div className="w-9/12 md:w-fit backdrop-blur-md rounded-3xl my-5">
        <p className="font-orbitron text-center mb-0 p-2 border-[1px] rounded-t-3xl border-white/20 w-full text-lg md:text-2xl text-white bg-gradient-to-r from-white/20 to-white/0">
          January 20 - 21
        </p>
        <div className="p-3 border-t-0 border-[1px] rounded-b-3xl border-white/20 w-full text-white bg-gradient-to-b from-black/50 to-black/0 font-orbitron flex flex-col items-center">
          <Countdown />
          <div className="my-3 flex flex-col md:flex-row w-full gap-3">
            <Link
              link="https://forms.gle/Pr8HMgaLWunGjWVv6"
              text="interest form"
              fromColor="from-rosehack-pink-200"
              toColor="to-rosehack-blue"
            />
            <Link
              link="https://crowdfunding.ucr.edu/o/university-of-california-riverside/i/ucrcrowdfunding/s/winc-fy24"
              text="donate"
              fromColor="from-rosehack-pink-200"
              toColor="to-rosehack-blue"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;

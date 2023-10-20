import Link from "next/link";
const CUstomLink = ({ text, link }) => {
  return (
    <Link
      target="_blank"
      href={link}
      className="no-underline hover:-translate-y-0.5 duration-300 text-white relative bg-gradient-to-r from-rosehack-pink-200 to-rosehack-blue min-w-1/2 rounded-full"
    >
      <div className="absolute bg-gradient-to-r from-rosehack-pink-200 to-rosehack-blue w-full h-full rounded-full blur-sm" />
      <p className="relative text-base md:text-xl bg-black/80 m-[0.5px]  hover:bg-gradient-to-r from-rosehack-pink-200 to-rosehack-blue rounded-full py-1 text-center w-full px-4 duration-300">
        {text}
      </p>
    </Link>
  );
};

export default CUstomLink;

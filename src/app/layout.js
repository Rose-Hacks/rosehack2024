/* eslint-disable camelcase */
/* eslint-disable new-cap */
"use client";
import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { SessionProvider } from "next-auth/react";
import { Toaster } from "react-hot-toast";
import { Orbitron, Montserrat, Advent_Pro, Poppins } from "next/font/google";

const orbitron = Orbitron({ subsets: ["latin"], variable: "--font-orbitron" });
const advent = Advent_Pro({
  subsets: ["latin"],
  variable: "--font-advent",
  weight: ["600"],
});

const montserrat = Montserrat({
  weight: ["variable"],
  subsets: ["latin"],
  variable: "--font-montserrat",
});

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
});

export default function RootLayout({ children, session }) {
  return (
    <html lang="en" className="h-full">
      <body
        className={`${orbitron.variable} ${montserrat.variable} ${advent.variable} ${poppins.variable} bg-black flex flex-col lg:flex-row h-full pt-0`}
      >
        <SessionProvider
          session={session}
          refetchInterval={5 * 60}
          className="h-full"
        >
          <div className="flex w-full">
            <Toaster />
            {children}
          </div>
        </SessionProvider>
      </body>
    </html>
  );
}

/* eslint-disable new-cap */
"use client";
import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { SessionProvider } from "next-auth/react";
import { Toaster } from "react-hot-toast";
import { Orbitron, Montserrat, Righteous, Poppins } from "next/font/google";

const orbitron = Orbitron({ subsets: ["latin"], variable: "--font-orbitron" });
const righteous = Righteous({
  subsets: ["latin"],
  variable: "--font-righteous",
  weight: ["400"],
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
      <SessionProvider
        session={session}
        refetchInterval={5 * 60}
        className="h-full"
      >
        <body
          className={`${orbitron.variable} ${montserrat.variable} ${righteous.variable} ${poppins.variable} bg-black flex flex-col lg:flex-row h-full pt-0`}
        >
          <Toaster />
          {children}
        </body>
      </SessionProvider>
    </html>
  );
}

/* eslint-disable new-cap */
"use client";
import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { SessionProvider } from "next-auth/react";
import { Toaster } from "react-hot-toast";
import { Orbitron, Montserrat } from "next/font/google";

const orbitron = Orbitron({ subsets: ["latin"], variable: "--font-orbitron" });
const montserrat = Montserrat({
  weight: ["variable"],
  subsets: ["latin"],
  variable: "--font-montserrat",
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
          className={`${orbitron.variable} ${montserrat.variable} bg-black`}
        >
          <Toaster />
          {children}
        </body>
      </SessionProvider>
    </html>
  );
}

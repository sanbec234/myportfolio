import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import StarsCanvas from "@/components/main/StarsBackground";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  // metadataBase: new URL(
  //   "https://developer-portfolio-Snehan-memons-projects.vercel.app"
  // ),
  title: "Snehan's Portfolio",
  description: "Developer Portfolio By Snehan",
  keywords: ["Developer", "Portfolio", "Developer Portflio", "Snehan"],
  openGraph: {
    title: "Snehan",
    description: "Junior Computer Science Student",
    images: "/OpenGraph.jpg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-[#111] overflow-y-scroll overflow-x-hidden`}
      >
        <StarsCanvas />
        <Navbar />
        {children}
      </body>
    </html>
  );
}

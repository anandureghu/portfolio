import type { Metadata } from "next";
import { Fredoka, Fustat, Handlee, Miss_Fajardose } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import BodyGradients from "@/components/body-gradients";

const missFajardose = Miss_Fajardose({
  variable: "--font-sign",
  subsets: ["latin"],
  weight: "400",
});

// highlight font
const handlee = Handlee({
  variable: "--font-highlight",
  weight: ["400"],
  subsets: ["latin"],
});

// body font
const fredoka = Fredoka({
  variable: "--font-body",
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

// secondary font
const fustat = Fustat({
  variable: "--font-secondary",
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "anandureghu",
  description:
    "A wizard who loves design and code. I tell stories through my designs and illustrations - Anandu Reghu",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-gray-950 text-slate-200">
      <body
        className={`relative ${fredoka.variable} ${handlee.variable} ${fustat.variable} ${missFajardose.variable} antialiased font-body app-container mx-auto `}
      >
        <BodyGradients />
        <Navbar />
        {children}
      </body>
    </html>
  );
}

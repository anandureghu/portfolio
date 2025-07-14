import type { Metadata } from "next";
import { Fahkwang, Fredoka, Fustat, Miss_Fajardose } from "next/font/google";
import "./globals.css";

const missFajardose = Miss_Fajardose({
  variable: "--font-sign",
  subsets: ["latin"],
  weight: "400",
});

// highlight font
const fahkwang = Fahkwang({
  variable: "--font-highlight",
  weight: ["200", "300", "400", "500", "600", "700"],
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
    <html lang="en">
      <body
        className={`${fredoka.variable} ${fahkwang.variable} ${fustat.variable} ${missFajardose.variable} antialiased font-body`}
      >
        {children}
      </body>
    </html>
  );
}

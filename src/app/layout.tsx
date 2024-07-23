import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import FloatingNav from "./components/navbar/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Anandu Reghu",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const navItems = [
    { name: "Home", link: "/" },
    { name: "About", link: "#about" },
    { name: "Projects", link: "#projects" },
    { name: "Contact", link: "#contact" },
  ];
  return (
    <html lang="en">
      <body className={`${inter.className} dark`}>
        <FloatingNav navItems={navItems} />
        {children}
      </body>
    </html>
  );
}

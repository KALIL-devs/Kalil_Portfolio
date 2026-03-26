import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kalil | Fullstack Developer",
  description: "Portfolio of Kalil, a Fullstack Developer specializing in React, Next.js, and scalable web application development. I build fast, robust web applications from start to finish.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} scroll-smooth`}>
      <body className="min-h-screen flex flex-col font-sans bg-white text-zinc-900 relative">
        <div className="fixed inset-0 z-[-1] h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:2rem_2rem]"></div>
        <Navbar />
        <main className="flex-grow pt-8">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

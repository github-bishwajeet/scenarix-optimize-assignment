import type { Metadata } from "next";
import { Inter } from "next/font/google"; // Only import Inter for global use
import "./globals.css";
import AppBar from "./components/AppBar";

// Initialize Inter font for global use
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "MagicMoments - AI Art Generator for Creatives",
  description:
    "Transform your ideas into stunning illustrations and logos with our AI-powered art generator",
  keywords: [
    "AI art",
    "illustration",
    "logo design",
    "creative tools",
    "AI generator",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        // Only apply the globally used font (Inter)
        className={`${inter.variable} min-h-screen bg-white dark:bg-gray-900`}
      >
        <AppBar />
        <main className="flex min-h-screen flex-col ">{children}</main>
      </body>
    </html>
  );
}
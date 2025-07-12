"use client";

import Link from "next/link";
import React, { useState, useEffect } from "react";

export default function AppBar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out
        ${scrolled ? "backdrop-blur-lg bg-white/30 dark:bg-gray-800/30 shadow-md" : "bg-transparent"}`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link
            href="/"
            className="text-xl font-bold text-gray-900 dark:text-white"
          >
            Magic Moments
          </Link>

          <div className="flex items-center space-x-8">
            <Link
              href="/"
              className="text-gray-700 hover:text-gray-900 dark:text-gray-200 dark:hover:text-white transition-colors"
            >
              Home
            </Link>
            <Link
              href="/gallery"
              className="text-gray-700 hover:text-gray-900 dark:text-gray-200 dark:hover:text-white transition-colors"
            >
              Gallery
            </Link>
            <Link
              href="/blog"
              className="text-gray-700 hover:text-gray-900 dark:text-gray-200 dark:hover:text-white transition-colors"
            >
              Blog
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

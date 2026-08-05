"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Coins, Menu, X, LogIn, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "How it Works", href: "#how-it-works" },
    { name: "Earning Model", href: "#earning-model" },
    { name: "Withdraw", href: "#withdraw" },
    { name: "FAQ", href: "#faq" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 h-[var(--header-height)] flex items-center ${
        isScrolled ? "glass shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 bg-primary rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform">
            <Coins className="text-white w-6 h-6" />
          </div>
          <span className="text-xl font-black tracking-apple text-foreground">
            My Kuber
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-[14px] font-bold text-muted hover:text-foreground transition-colors tracking-tight"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-8">
          <Link
            href="/login"
            className="text-[14px] font-bold text-muted hover:text-foreground transition-colors"
          >
            Login
          </Link>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="bg-foreground text-background px-6 py-3 rounded-full text-sm font-bold transition-all shadow-xl"
          >
            Join Free
          </motion.button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-foreground p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-full left-0 right-0 bg-white border-b border-border shadow-2xl md:hidden overflow-hidden"
          >
            <div className="flex flex-col p-8 gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-lg font-bold text-muted hover:text-foreground flex items-center justify-between"
                >
                  {link.name}
                  <ChevronRight size={18} className="text-border" />
                </Link>
              ))}
              <div className="h-px bg-border my-2" />
              <div className="flex flex-col gap-4">
                <Link
                  href="/login"
                  className="text-lg font-black text-foreground flex items-center gap-3"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <LogIn size={20} />
                  Login
                </Link>
                <button className="bg-foreground text-background p-5 rounded-3xl font-black text-center text-lg">
                  Get Started
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
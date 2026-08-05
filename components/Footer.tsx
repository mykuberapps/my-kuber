"use client";

import React from "react";
import Link from "next/link";
import { Coins, Globe, MessageSquare, Share2, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-white pt-32 pb-12 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-4 gap-20 mb-24">
          
          {/* Brand Info */}
          <div className="flex flex-col gap-8 col-span-2">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="w-10 h-10 bg-primary rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform">
                <Coins className="text-white w-6 h-6" />
              </div>
              <span className="text-xl font-black tracking-apple text-foreground">
                My Kuber
              </span>
            </Link>
            <p className="text-muted text-xl font-medium leading-tight max-w-sm">
              The world's first ad-reward platform built for the next generation of digital entertainment.
            </p>
            <div className="flex gap-6">
              <Link href="#" className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center hover:bg-primary/10 transition-colors group">
                <Globe className="w-5 h-5 text-muted group-hover:text-primary" />
              </Link>
              <Link href="#" className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center hover:bg-primary/10 transition-colors group">
                <MessageSquare className="w-5 h-5 text-muted group-hover:text-primary" />
              </Link>
              <Link href="#" className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center hover:bg-primary/10 transition-colors group">
                <Share2 className="w-5 h-5 text-muted group-hover:text-primary" />
              </Link>
            </div>
          </div>

          <div className="flex flex-col gap-8">
            <h4 className="text-[12px] font-black uppercase tracking-[0.3em] text-foreground/40">Platform</h4>
            <div className="flex flex-col gap-5">
              <Link href="#how-it-works" className="text-lg font-bold text-muted hover:text-foreground transition-colors">How it Works</Link>
              <Link href="#earning-model" className="text-lg font-bold text-muted hover:text-foreground transition-colors">Earning Model</Link>
              <Link href="#catalog" className="text-lg font-bold text-muted hover:text-foreground transition-colors">Catalog Preview</Link>
              <Link href="#withdraw" className="text-lg font-bold text-muted hover:text-foreground transition-colors">Live Leaderboard</Link>
            </div>
          </div>

          {/* Terms & Legal */}
          <div className="flex flex-col gap-8">
            <h4 className="text-[12px] font-black uppercase tracking-[0.3em] text-foreground/40">Transparency</h4>
            <div className="flex flex-col gap-5">
              <Link href="#" className="text-lg font-bold text-muted hover:text-foreground transition-colors">Privacy Policy</Link>
              <Link href="#" className="text-lg font-bold text-muted hover:text-foreground transition-colors">Terms of Service</Link>
              <Link href="#" className="text-lg font-bold text-muted hover:text-foreground transition-colors">Cookie Policy</Link>
              <Link href="#" className="text-lg font-bold text-muted hover:text-foreground transition-colors">Payment Security</Link>
            </div>
          </div>

        </div>

        <div className="pt-12 border-t border-border flex flex-col md:flex-row items-center justify-between gap-8">
          <p className="text-sm font-bold text-muted">
            &copy; {new Date().getFullYear()} My Kuber Entertainment. All rights reserved.
          </p>
          <div className="flex items-center gap-8 text-sm font-bold text-muted">
            <div className="flex items-center gap-2">
              <MapPin size={14} />
              <span>Mumbai, India</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail size={14} />
              <span>support@mykuber.in</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

"use client";

import React from "react";
import { motion } from "framer-motion";
import { Play, ChevronRight, ShieldCheck, Users, Award } from "lucide-react";
import RecentlyPaidTicker from "./RecentlyPaidTicker";

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex flex-col items-center justify-center pt-32 pb-20 overflow-hidden bg-background">
      {/* Top Ticker Integration */}
      <div className="absolute top-[var(--header-height)] left-0 w-full z-20">
        <RecentlyPaidTicker />
      </div>

      {/* Abstract Background Visuals using Tailwind only */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/20 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-accent/5 blur-[120px] rounded-full" />
      </div>

      <div className="container mx-auto px-6 relative z-10 pt-16">
        <div className="flex flex-col items-center text-center max-w-5xl mx-auto gap-8 md:gap-12">
          
          {/* Big Copy Headline - Using Tailwind tracking and leading utilities */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col gap-6"
          >
            <h1 className="text-5xl sm:text-6xl md:text-[110px] font-black tracking-apple leading-[0.9] text-foreground">
              Entertainment <br />
              that <span className="text-primary italic">pays you.</span>
            </h1>
            
            <p className="text-lg sm:text-xl md:text-3xl text-muted font-medium max-w-3xl mx-auto leading-tight tracking-tight">
              Binge-watch your favorite web series and earn real money <br className="hidden md:block" />
              for every second you spend on the app.
            </p>
          </motion.div>

          {/* Action Suite */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="flex flex-col items-center gap-8 w-full"
          >
            <div className="flex flex-wrap items-center justify-center gap-6">
              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="bg-foreground text-background px-10 py-5 rounded-full text-lg font-bold shadow-2xl flex items-center gap-3 group"
              >
                Join Now Free
                <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center gap-3 text-foreground font-bold hover:text-primary transition-colors py-4 px-6 rounded-full border border-transparent hover:border-border"
              >
                <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center">
                   <Play size={16} fill="currentColor" className="ml-0.5 text-primary" />
                </div>
                How it works
              </motion.button>
            </div>

            {/* Trust Markers */}
            <div className="flex flex-wrap items-center justify-center gap-10 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
               <div className="flex items-center gap-2">
                 <ShieldCheck size={20} />
                 <span className="text-[12px] font-black uppercase tracking-widest leading-none">Bank Verified</span>
               </div>
               <div className="flex items-center gap-2">
                 <Users size={20} />
                 <span className="text-[12px] font-black uppercase tracking-widest leading-none">1M+ Community</span>
               </div>
               <div className="flex items-center gap-2">
                 <Award size={20} />
                 <span className="text-[12px] font-black uppercase tracking-widest leading-none">#1 Earning App</span>
               </div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Subtle Bottom Fade */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-background to-transparent pointer-events-none" />
    </section>
  );
};

export default Hero;

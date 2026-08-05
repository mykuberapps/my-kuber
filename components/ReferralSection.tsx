"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Copy, Share2, Users, Check, ArrowRight } from "lucide-react";

const ReferralSection = () => {
  const [copied, setCopied] = useState(false);
  const referralLink = "mykuber.in/join/AK789";

  const handleCopy = () => {
    navigator.clipboard.writeText(referralLink);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="referral" className="py-40 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto bg-white rounded-[48px] shadow-apple border border-border overflow-hidden lg:flex items-stretch">
          
          {/* Content Side */}
          <div className="lg:w-1/2 p-8 md:p-12 lg:p-20 flex flex-col justify-center gap-8 md:gap-10">
            <div className="flex flex-col gap-6">
              <div className="w-14 h-14 md:w-16 md:h-16 bg-primary/10 rounded-2xl flex items-center justify-center">
                <Users className="text-primary w-6 h-6 md:w-8 md:h-8" />
              </div>
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-4xl md:text-5xl lg:text-7xl font-black tracking-apple text-foreground leading-tight"
              >
                Invite Friends, <br />
                Earn Faster.
              </motion.h2>
              <p className="text-lg md:text-xl text-muted font-medium leading-relaxed">
                Growth is better together. Share the magic of My Kuber and unlock a passive income stream.
              </p>
            </div>

            <div className="flex flex-col gap-4 p-6 md:p-8 bg-secondary rounded-[24px] md:rounded-[32px] border border-border">
              <p className="text-xl md:text-2xl font-black text-foreground">
                You get <span className="text-primary italic">10%</span> of every ad your friend watches.
              </p>
              <p className="text-muted font-bold text-[10px] md:text-sm uppercase tracking-widest">Lifetime Earnings • No Cap</p>
            </div>
          </div>

          {/* Action Side */}
          <div className="lg:w-1/2 bg-zinc-50 p-8 md:p-12 lg:p-20 border-l border-border flex flex-col justify-center gap-10 md:gap-12">
            <div className="flex flex-col gap-6">
              <label className="text-[10px] md:text-sm font-black uppercase tracking-[0.2em] text-muted ml-2">Your Invitation Link</label>
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-primary/0 rounded-[24px] blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
                <div className="relative flex items-center bg-white border-2 border-border p-1.5 md:p-2 pl-4 md:pl-6 rounded-[20px] md:rounded-[24px] shadow-sm">
                  <span className="flex-grow font-bold text-foreground overflow-hidden text-ellipsis whitespace-nowrap mr-2 md:mr-4 text-xs md:text-base">
                    {referralLink}
                  </span>
                  <button 
                    onClick={handleCopy}
                    className="flex items-center gap-2 bg-foreground text-background px-4 md:px-6 py-3 md:py-4 rounded-[14px] md:rounded-[18px] font-black text-[10px] md:text-sm hover:scale-105 transition-all shadow-lg active:scale-95"
                  >
                    {copied ? <Check size={14} /> : <Copy size={14} />}
                    {copied ? "Copied" : "Copy"}
                  </button>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-6 md:gap-8">
              <div className="flex items-center gap-3 md:gap-4">
                 <div className="w-10 h-10 md:w-12 md:h-12 bg-white rounded-full flex items-center justify-center shadow-sm border border-border flex-shrink-0">
                   <Share2 size={16} className="text-primary" />
                 </div>
                 <p className="font-bold text-foreground text-sm md:text-base leading-tight">Share instantly on WhatsApp, Telegram, or Twitter</p>
              </div>
              
              <button className="w-full bg-primary text-white py-5 md:py-6 rounded-[20px] md:rounded-[24px] font-black text-lg md:text-xl shadow-2xl hover:shadow-primary/20 hover:scale-[1.02] transition-all flex items-center justify-center gap-3">
                Send Invitation
                <ArrowRight className="w-5 h-5 md:w-6 md:h-6" />
              </button>
            </div>

            <div className="flex justify-center gap-4 mt-4">
               {[1,2,3].map(i => (
                 <div key={i} className="w-2 h-2 rounded-full bg-border" />
               ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ReferralSection;

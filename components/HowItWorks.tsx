"use client";

import React from "react";
import { motion } from "framer-motion";
import { Download, Tv, Wallet, ArrowRight } from "lucide-react";

const steps = [
  {
    id: 1,
    title: "Download the App",
    description: "Install My Kuber today and claim your instant $0.50 welcome bonus.",
    icon: <Download className="w-7 h-7 text-primary" />,
    badge: "$0.50 Bonus",
    stepNum: "01",
  },
  {
    id: 2,
    title: "Watch Web Series",
    description: "Enjoy exclusive series. Rewarded ads play naturally between episodes.",
    icon: <Tv className="w-7 h-7 text-primary" />,
    badge: "Native Ads",
    stepNum: "02",
  },
  {
    id: 3,
    title: "Earn & Withdraw",
    description: "Convert your binge-time into real cash. Withdraw to UPI, PayPal, or Paytm.",
    icon: <Wallet className="w-7 h-7 text-primary" />,
    badge: "Instant Cashout",
    stepNum: "03",
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-40 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16 md:mb-24 gap-4">
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary font-black uppercase tracking-[0.3em] text-[10px] md:text-[12px]"
          >
            The Process
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-7xl font-black tracking-apple text-foreground leading-[1.1]"
          >
            Start earning in <br />
            three simple steps.
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 md:gap-12 lg:gap-16">
          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1, ease: [0.4, 0, 0.2, 1] }}
              className="relative p-8 md:p-12 flex flex-col justify-between overflow-hidden group bg-white rounded-apple border border-border shadow-apple hover:shadow-apple-hover transition-all duration-500 hover:-translate-y-1"
            >
              {/* Giant Background Number */}
              <div className="absolute -top-10 -right-6 text-[160px] font-black text-black/[0.03] italic pointer-events-none group-hover:text-primary/5 transition-colors">
                {step.stepNum}
              </div>

              <div className="relative z-10">
                <div className="w-16 h-16 bg-secondary rounded-[24px] flex items-center justify-center mb-10 shadow-sm border border-border">
                   {step.icon}
                </div>

                <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-primary/5 border border-primary/10 mb-8">
                  <span className="text-[11px] font-black uppercase tracking-widest text-primary">{step.badge}</span>
                </div>

                <h3 className="text-3xl font-black tracking-tight text-foreground mb-4">
                  {step.title}
                </h3>
                
                <p className="text-muted leading-relaxed text-xl font-medium pr-4">
                  {step.description}
                </p>
              </div>

              {step.id === 3 && (
                <div className="flex items-center gap-6 mt-12 pt-10 border-t border-border opacity-60">
                    <span className="text-[12px] font-black text-muted uppercase tracking-widest">UPI</span>
                    <span className="text-[12px] font-black text-muted uppercase tracking-widest">PayPal</span>
                    <span className="text-[12px] font-black text-muted uppercase tracking-widest">Paytm</span>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        <motion.div 
           initial={{ opacity: 0 }}
           whileInView={{ opacity: 1 }}
           viewport={{ once: true }}
           transition={{ delay: 0.5 }}
           className="mt-24 flex justify-center"
        >
          <button className="group flex items-center gap-3 text-foreground font-black text-xl hover:text-primary transition-all">
            <span className="border-b-2 border-foreground/10 group-hover:border-primary transition-colors">Explore our full guide</span>
            <ArrowRight size={24} className="group-hover:translate-x-2 transition-transform" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;

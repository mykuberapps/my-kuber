"use client";

import React from "react";
import { motion } from "framer-motion";
import { Coins, Flame, Users, Calendar, ArrowUpRight, ShieldCheck } from "lucide-react";

const models = [
  {
    title: "Per Ad Rate",
    value: "$0.01",
    subValue: "₹0.10 Per Ad",
    description: "Earn guaranteed rewards for every short advertisement you watch between episodes.",
    icon: <Coins className="w-6 h-6 text-primary" />,
    color: "bg-amber-50",
  },
  {
    title: "Daily Bonus",
    value: "Free Coins",
    subValue: "Login Daily",
    description: "Stack your earnings just by opening the app every day. Consecutive streaks earn more.",
    icon: <Calendar className="w-6 h-6 text-blue-500" />,
    color: "bg-blue-50",
  },
  {
    title: "Referral System",
    value: "10% Bonus",
    subValue: "Lifetime Earnings",
    description: "Invite friends and earn a 10% commission on everything they earn, forever.",
    icon: <Users className="w-6 h-6 text-green-500" />,
    color: "bg-green-50",
  },
  {
    title: "Watch Time",
    value: "Series Bonus",
    subValue: "Premium Rewards",
    description: "Complete entire web series to unlock milestone bonuses and exclusive multipliers.",
    icon: <Flame className="w-6 h-6 text-red-500" />,
    color: "bg-red-50",
  },
];

const EarningModel = () => {
  return (
    <section id="earn" className="py-40 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 md:mb-24">
          <div className="max-w-2xl">
            <motion.div 
               initial={{ opacity: 0, x: -20 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               className="inline-flex items-center gap-2 px-3 py-1 bg-secondary rounded-full border border-border mb-6"
            >
              <ShieldCheck size={14} className="text-primary" />
              <span className="text-[11px] font-black uppercase tracking-widest text-foreground/60">Verified Earning Model</span>
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-7xl font-black tracking-apple text-foreground leading-[1.1]"
            >
              Transparent rewards. <br />
              <span className="text-muted">No hidden rules.</span>
            </motion.h2>
          </div>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-lg md:text-xl text-muted font-medium max-w-sm leading-tight"
          >
            We believe in fair pay for your time. Here is exactly how your balance grows.
          </motion.p>
        </div>

        {/* Model Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {models.map((model, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="group relative p-8 md:p-10 bg-white rounded-apple border border-border shadow-apple hover:shadow-apple-hover transition-all duration-500 flex flex-col justify-between"
            >
              <div>
                <div className={`w-14 h-14 ${model.color} rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500`}>
                  {model.icon}
                </div>
                
                <h3 className="text-[13px] font-black uppercase tracking-[0.2em] text-muted mb-4">
                  {model.title}
                </h3>
                
                <div className="mb-6">
                  <p className="text-4xl font-black tracking-apple text-foreground mb-1">
                    {model.value}
                  </p>
                  <p className="text-sm font-bold text-primary flex items-center gap-1">
                    {model.subValue}
                    <ArrowUpRight size={14} />
                  </p>
                </div>

                <p className="text-muted text-lg font-medium leading-relaxed pr-2">
                  {model.description}
                </p>
              </div>

              {/* Decorative Accent */}
              <div className="absolute top-6 right-8 opacity-0 group-hover:opacity-20 transition-opacity">
                <ArrowUpRight size={32} className="text-muted" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust Footer */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-24 p-10 bg-secondary rounded-[32px] border border-border flex flex-col md:flex-row items-center justify-between gap-8"
        >
          <div className="flex items-center gap-6 text-center md:text-left">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-sm border border-black/5">
              <ShieldCheck size={32} className="text-primary" />
            </div>
            <div>
              <p className="text-xl font-black text-foreground tracking-tight">100% Payout Guarantee</p>
              <p className="text-muted font-medium">All earnings are real-time and withdrawable 24/7.</p>
            </div>
          </div>
          <button className="bg-foreground text-background px-10 py-5 rounded-full text-lg font-black shadow-xl hover:scale-105 transition-transform">
            Start Earning Today
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default EarningModel;

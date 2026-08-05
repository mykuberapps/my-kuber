"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ShieldCheck, Trophy, ArrowUpRight, CheckCircle2, ChevronRight, Wallet } from "lucide-react";

const recentWithdrawals = [
  { id: 1, user: "Ajeet_99", amount: "₹850", status: "Paid", method: "Paytm", time: "2 mins ago" },
  { id: 2, user: "Rahul_K", amount: "₹1,200", status: "Paid", method: "GPay", time: "5 mins ago" },
  { id: 3, user: "Sonia_M", amount: "$15.00", status: "Paid", method: "PayPal", time: "12 mins ago" },
  { id: 4, user: "Vicky_R", amount: "₹450", status: "Paid", method: "UPI", time: "18 mins ago" },
];

const receipts = [
  { id: 1, name: "Paytm Receipt", image: "/images/receipt-paytm.png" },
  { id: 2, name: "Google Pay Receipt", image: "/images/receipt-gpay.png" },
  { id: 3, name: "PayPal Receipt", image: "/images/receipt-paypal.png" },
];

const WithdrawalProof = () => {
  return (
    <section id="withdraw" className="py-40 bg-secondary overflow-hidden">
      <div className="container mx-auto px-6">
        
        {/* Header & Leaderboard */}
        <div className="grid lg:grid-cols-2 gap-16 md:gap-20 mb-16 md:mb-24 items-center">
          <div className="flex flex-col gap-6 md:gap-8 text-center lg:text-left">
            <motion.div 
               initial={{ opacity: 0, x: -20 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               className="inline-flex items-center gap-2 px-3 md:px-4 py-1.5 md:py-2 bg-white rounded-full border border-border shadow-sm w-fit mx-auto lg:mx-0"
            >
              <Trophy size={14} className="text-primary fill-primary/20 md:size-[16px]" />
              <span className="text-[10px] md:text-[12px] font-black uppercase tracking-widest text-foreground">Top Earner Today: ₹1,240</span>
            </motion.div>

            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-7xl font-black tracking-apple text-foreground leading-[1.1]"
            >
              Yes, we <span className="text-primary italic">actually</span> pay.
            </motion.h2>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex items-center gap-4 bg-primary text-white p-5 md:p-6 rounded-[24px] md:rounded-apple shadow-2xl w-fit mx-auto lg:mx-0"
            >
              <div className="w-10 h-10 md:w-12 md:h-12 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                <Wallet className="w-5 h-5 md:w-6 md:h-6" />
              </div>
              <div className="text-left">
                <p className="text-lg md:text-2xl font-black tracking-tight leading-none">$1 Minimum Withdrawal</p>
                <p className="text-white/80 font-bold mt-1 text-[10px] md:text-sm">Lowest in the industry. Withdraw anytime.</p>
              </div>
            </motion.div>
          </div>

          {/* Quick Stats / Recent Activity */}
          <div className="flex flex-col gap-4">
            {recentWithdrawals.map((item, idx) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-4 md:p-5 rounded-2xl border border-border flex items-center justify-between group cursor-default hover:shadow-lg transition-all"
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-green-50 rounded-full flex items-center justify-center">
                    <CheckCircle2 size={20} className="text-green-500" />
                  </div>
                  <div>
                    <p className="font-black text-foreground">{item.user}</p>
                    <p className="text-xs text-muted font-bold uppercase tracking-widest">{item.method} • {item.time}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-lg font-black text-foreground">{item.amount}</p>
                  <span className="text-[10px] py-1 px-2 bg-green-100 text-green-700 rounded-md font-black uppercase tracking-tighter">SUCCESS</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Receipt Showcase Carousel (Horizontal) */}
        <div className="flex flex-col gap-12">
          <div className="flex flex-col items-center text-center gap-4">
            <h3 className="text-3xl font-black tracking-tight text-foreground">Verified Payment Receipts</h3>
            <p className="text-muted font-medium max-w-xl text-lg">Browse real success screens from our community of earners.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {receipts.map((receipt, idx) => (
              <motion.div
                key={receipt.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="relative aspect-[9/16] rounded-[32px] overflow-hidden border-4 border-white shadow-2xl group"
              >
                <Image 
                  src={receipt.image} 
                  alt={receipt.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-x-0 bottom-0 p-8 bg-gradient-to-t from-black/80 to-transparent">
                  <p className="text-white font-black text-xl">{receipt.name}</p>
                  <p className="text-white/60 text-sm font-bold uppercase tracking-widest mt-1">Verified Transaction</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Security Trust Badges */}
        <div className="mt-24 grid grid-cols-2 lg:grid-cols-4 gap-12 items-center opacity-40 hover:opacity-80 transition-opacity duration-500">
           <div className="flex flex-col items-center gap-4">
             <ShieldCheck size={40} />
             <span className="text-xs font-black uppercase tracking-[0.2em] text-center">Encrypted<br/>Payments</span>
           </div>
           <div className="flex flex-col items-center gap-4">
             <CheckCircle2 size={40} />
             <span className="text-xs font-black uppercase tracking-[0.2em] text-center">Verified<br/>Direct Pay</span>
           </div>
           <div className="flex flex-col items-center gap-4">
             <ArrowUpRight size={40} />
             <span className="text-xs font-black uppercase tracking-[0.2em] text-center">Instant<br/>Cashing Out</span>
           </div>
           <div className="flex flex-col items-center gap-4">
             <Trophy size={40} />
             <span className="text-xs font-black uppercase tracking-[0.2em] text-center">Zero Fees<br/>Withdrawal</span>
           </div>
        </div>

      </div>
    </section>
  );
};

export default WithdrawalProof;

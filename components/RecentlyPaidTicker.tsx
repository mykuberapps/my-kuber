"use client";

import React from "react";
import { motion } from "framer-motion";
import { DollarSign, CheckCircle2 } from "lucide-react";

const paidUsers = [
  { name: "Nawed", amount: "12.50", method: "UPI" },
  { name: "Rahul", amount: "5.00", method: "Paytm" },
  { name: "Priya", amount: "25.00", method: "PayPal" },
  { name: "Amit", amount: "8.20", method: "UPI" },
  { name: "Sneha", amount: "15.00", method: "UPI" },
  { name: "Vikram", amount: "30.00", method: "PayPal" },
  { name: "Ananya", amount: "10.00", method: "GPay" },
  { name: "Kunal", amount: "20.00", method: "UPI" },
];

const RecentlyPaidTicker = () => {
  // Duplicate the array to create a seamless infinite loop
  const displayUsers = [...paidUsers, ...paidUsers];

  return (
    <div className="w-full bg-secondary/50 border-y border-border py-2 overflow-hidden select-none">
      <motion.div
        animate={{
          x: [0, -1000], // Adjust based on content width
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear",
        }}
        className="flex whitespace-nowrap gap-8 items-center"
      >
        {displayUsers.map((user, index) => (
          <div
            key={index}
            className="flex items-center gap-2 px-3 py-1 bg-white rounded-full border border-border shadow-sm"
          >
            <div className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center">
              <CheckCircle2 size={12} className="text-white" />
            </div>
            <p className="text-[12px] font-bold tracking-tight text-foreground/80">
              <span className="text-foreground">{user.name}</span> withdrew{" "}
              <span className="text-primary">${user.amount}</span> via{" "}
              <span className="opacity-60">{user.method}</span>
            </p>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default RecentlyPaidTicker;

"use client";

import React from "react";
import { motion } from "framer-motion";
import { Zap, Download, RefreshCcw, Headset } from "lucide-react";

const features = [
  {
    title: "Low Data Usage",
    description: "Our advanced compression technology lets you watch more for less data.",
    icon: <Zap className="w-8 h-8 text-primary" />,
  },
  {
    title: "Watch Offline",
    description: "Download your favorite episodes and watch them anytime, anywhere without internet.",
    icon: <Download className="w-8 h-8 text-primary" />,
  },
  {
    title: "New Episodes Weekly",
    description: "Fresh content drops every week. There's always something new to discover.",
    icon: <RefreshCcw className="w-8 h-8 text-primary" />,
  },
  {
    title: "24/7 Support",
    description: "Need help? Our dedicated support team is available around the clock.",
    icon: <Headset className="w-8 h-8 text-primary" />,
  },
];

const FeaturesList = () => {
  return (
    <section id="features" className="py-40 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-16">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="flex flex-col items-start gap-5 md:gap-6"
            >
              <div className="w-14 h-14 md:w-16 md:h-16 bg-secondary rounded-[20px] md:rounded-[24px] flex items-center justify-center shadow-sm border border-border">
                <div className="scale-90 md:scale-100">{feature.icon}</div>
              </div>
              <div className="flex flex-col gap-3">
                <h3 className="text-xl md:text-2xl font-black tracking-apple text-foreground">
                  {feature.title}
                </h3>
                <p className="text-muted text-base md:text-lg font-medium leading-tight">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesList;

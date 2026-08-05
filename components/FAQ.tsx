"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle, MessageCircle } from "lucide-react";

const faqs = [
  {
    question: "Is this real?",
    answer: "Absolutely! Advertisers pay us to show you their web series and ads. We simply share a portion of that revenue with you for your time. It's a win-win for everyone.",
  },
  {
    question: "How do I withdraw?",
    answer: "You can withdraw your earnings directly to your UPI ID, Bank Account, or even via Crypto (USDT). We support all major Indian payment apps like Paytm, PhonePe, and Google Pay.",
  },
  {
    question: "When do I get paid?",
    answer: "Most withdrawals are processed instantly. In some cases, it can take up to 24 hours depending on the bank's processing time. You'll get an alert in the app for every successful transfer.",
  },
  {
    question: "Is there a limit?",
    answer: "There are no limits! You can watch as many episodes and ads as you want. The more you watch, the more you earn. Your time is literally money on My Kuber.",
  },
  {
    question: "Why do I see ads?",
    answer: "Ads are our main source of revenue. By watching them, you're helping us bring you premium web series for free, and that's how we're able to pay you for your binge-watching time.",
  },
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-40 bg-zinc-50 overflow-hidden">
      <div className="container mx-auto px-6">
        
        {/* Header Area */}
        <div className="grid lg:grid-cols-2 gap-16 md:gap-20 items-start">
          
          <div className="flex flex-col gap-6 md:gap-8 lg:sticky lg:top-32 text-center lg:text-left">
            <div className="w-14 h-14 md:w-16 md:h-16 bg-white rounded-2xl flex items-center justify-center shadow-sm border border-border mx-auto lg:mx-0">
               <HelpCircle className="text-primary w-6 h-6 md:w-8 md:h-8" />
            </div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl lg:text-7xl font-black tracking-apple text-foreground leading-tight"
            >
              Common <br />
              Questions.
            </motion.h2>
            <p className="text-lg md:text-xl text-muted font-medium max-w-sm mx-auto lg:mx-0">
              Everything you need to know about starting your earning journey with My Kuber.
            </p>
            <div className="h-px bg-border my-2 md:my-4" />
            <div className="flex items-center gap-3 md:gap-4 justify-center lg:justify-start">
               <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <MessageCircle size={16} className="text-primary" />
               </div>
               <p className="font-bold text-foreground text-sm md:text-base">Still have questions? <span className="text-primary underline cursor-pointer">Chat with support</span></p>
            </div> 
          </div>

          {/* Accordion List */}
          <div className="flex flex-col gap-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`rounded-[32px] border transition-all duration-500 overflow-hidden ${
                  activeIndex === index 
                  ? "bg-white border-primary/20 shadow-xl" 
                  : "bg-white border-border shadow-sm hover:border-black/10 hover:shadow-md"
                }`}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full text-left p-8 flex items-center justify-between"
                >
                  <span className={`text-xl font-black transition-colors ${activeIndex === index ? "text-primary" : "text-foreground"}`}>
                    {faq.question}
                  </span>
                  <div className={`w-8 h-8 rounded-full bg-secondary flex items-center justify-center transition-transform duration-500 ${activeIndex === index ? "rotate-180" : ""}`}>
                     <ChevronDown size={18} className="text-muted" />
                  </div>
                </button>
                
                <AnimatePresence>
                  {activeIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.5, ease: [0.04, 0.62, 0.23, 0.98] }}
                    >
                      <div className="px-8 pb-10">
                        <p className="text-lg font-medium text-muted leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};

export default FAQ;

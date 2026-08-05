"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Play, Flame, Star, Zap, ChevronRight } from "lucide-react";

const posters = [
  {
    title: "The Hidden Truth",
    genre: "Thriller",
    image: "/images/poster-thriller.png",
    tag: "Trending",
  },
  {
    title: "Summer in Mumbai",
    genre: "Romance",
    image: "/images/poster-romance.png",
    tag: "Must Watch",
  },
  {
    title: "The Roommates",
    genre: "Comedy",
    image: "/images/poster-comedy.png",
    tag: "Exclusive",
  },
  {
    title: "The Target",
    genre: "Action",
    image: "/images/poster-action.png",
    tag: "New Release",
  },
  {
    title: "The Mirror",
    genre: "Mystery",
    image: "/images/poster-mystery.png",
    tag: "4K HDR",
  },
  {
    title: "Roots",
    genre: "Drama",
    image: "/images/poster-drama.png",
    tag: "Top Rated",
  },
];

const CatalogPreview = () => {
  return (
    <section id="catalog" className="py-40 bg-background overflow-hidden">
      <div className="container mx-auto px-6">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-16 md:mb-24 gap-6">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 rounded-full border border-primary/20"
          >
            <Zap size={12} className="text-primary fill-primary" />
            <span className="text-[10px] md:text-[11px] font-black uppercase tracking-[0.2em] text-primary">Content Premiere</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-8xl font-black tracking-apple text-foreground leading-[0.9]"
          >
            Exclusive Short Films <br />
            & Web Series.
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-2xl text-muted font-medium max-w-2xl"
          >
            Discover a library of original Indian content you won't find anywhere else. <br className="hidden md:block" />
            Binge-watch and earn.
          </motion.p>
        </div>

        {/* Poster Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 lg:gap-8">
          {posters.map((poster, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="group relative flex flex-col gap-4"
            >
              <div className="relative aspect-[2/3] overflow-hidden rounded-[20px] shadow-2xl transition-all duration-700 group-hover:-translate-y-4 group-hover:shadow-[0_40px_80px_rgba(0,0,0,0.25)] border border-white/10 bg-zinc-100">
                <Image 
                  src={poster.image} 
                  alt={poster.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Overlay Glow */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
                   <div className="flex items-center gap-2 mb-2">
                     <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center">
                        <Play size={14} className="text-white fill-white ml-0.5" />
                     </div>
                     <span className="text-white font-bold text-sm">Watch Now</span>
                   </div>
                </div>

                {/* Tag Badge */}
                <div className="absolute top-4 right-4 px-3 py-1 bg-white/90 backdrop-blur-md rounded-full shadow-lg border border-black/5">
                   <span className="text-[10px] font-black uppercase tracking-widest text-foreground">{poster.tag}</span>
                </div>
              </div>

              <div className="px-2">
                <p className="text-[11px] font-black uppercase tracking-widest text-primary mb-1">{poster.genre}</p>
                <h3 className="text-lg font-black text-foreground leading-tight tracking-tight">{poster.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Catalog CTA */}
        <motion.div 
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ delay: 0.5 }}
           className="mt-24 flex flex-col items-center gap-10"
        >
          <div className="flex -space-x-4">
             {[1,2,3,4,5].map(i => (
                <div key={i} className="w-14 h-14 rounded-full border-4 border-background bg-zinc-200 shadow-xl overflow-hidden">
                   <div className="w-full h-full flex items-center justify-center bg-secondary text-muted text-xs font-black italic">
                      IMG
                   </div>
                </div>
             ))}
          </div>
          <p className="text-xl font-bold text-foreground">
             Join <span className="text-primary italic">100,000+ viewers</span> discovering new originals every day.
          </p>
          <button className="group flex items-center gap-4 bg-foreground text-background px-12 py-6 rounded-apple text-xl font-black shadow-2xl hover:scale-105 transition-transform">
            View Full Library
            <ChevronRight size={24} className="group-hover:translate-x-2 transition-transform" />
          </button>
        </motion.div>

      </div>
    </section>
  );
};

export default CatalogPreview;

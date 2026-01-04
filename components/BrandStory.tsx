"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Quote } from "lucide-react";
import { coach } from "@/data/coach";

export default function BrandStory() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding bg-gradient-to-br from-royal-indigo via-royal-indigo/95 to-royal-indigo/90 text-ivory-white relative overflow-hidden" ref={ref}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-magenta rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-golden-amber rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          {/* Quote Icon */}
          <motion.div
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
            className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-magenta to-golden-amber rounded-full mb-8"
          >
            <Quote className="w-10 h-10 text-white" />
          </motion.div>

          {/* Tagline */}
          <motion.div
            className="mb-6"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.3 }}
          >
            <p className="text-xl sm:text-2xl md:text-3xl font-bold text-bright-marigold mb-4 px-4">
              "{coach.tagline}"
            </p>
          </motion.div>

          {/* Title */}
          <motion.h2
            className="text-2xl sm:text-3xl md:text-5xl font-heading font-bold mb-6 px-4"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4 }}
          >
            Our Mission
          </motion.h2>

          {/* Main Quote */}
          <motion.p
            className="text-lg sm:text-xl md:text-2xl leading-relaxed mb-8 font-light italic px-4"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.6 }}
          >
            "To help couples and professionals reconnect, restore trust, and build relationships that thrive."
          </motion.p>

          {/* Description */}
          <motion.p
            className="text-base sm:text-lg md:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed px-4"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.8 }}
          >
            {coach.brief} We believe that every relationship has the potential for deeper connection 
            when equipped with the right tools and guidance. Our approach combines practical frameworks 
            with compassionate support to create lasting change.
          </motion.p>

          {/* Decorative Line */}
          <motion.div
            className="mt-12 flex justify-center gap-2"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 1 }}
          >
            <div className="w-2 h-2 bg-bright-marigold rounded-full" />
            <div className="w-16 h-2 bg-bright-marigold rounded-full" />
            <div className="w-2 h-2 bg-bright-marigold rounded-full" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}


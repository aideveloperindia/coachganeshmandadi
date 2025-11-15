"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Quote } from "lucide-react";

export default function BrandStory() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding bg-gradient-to-br from-primary to-primary/90 text-white relative overflow-hidden" ref={ref}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-accent rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent rounded-full blur-3xl" />
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
            className="inline-flex items-center justify-center w-20 h-20 bg-accent rounded-full mb-8"
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
            <p className="text-2xl md:text-3xl font-bold text-accent mb-4">
              "Empowering People. Transforming Organizations."
            </p>
          </motion.div>

          {/* Title */}
          <motion.h2
            className="text-3xl md:text-5xl font-heading font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4 }}
          >
            The Mission Behind the Training
          </motion.h2>

          {/* Main Quote */}
          <motion.p
            className="text-xl md:text-2xl leading-relaxed mb-8 font-light italic"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.6 }}
          >
            "To inspire, empower, and transform individuals and institutions to live, lead, and perform with excellence."
          </motion.p>

          {/* Description */}
          <motion.p
            className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.8 }}
          >
            Our approach goes beyond traditional training. We believe in creating lasting transformations 
            that empower individuals to reach their full potential, build meaningful relationships, and 
            achieve sustainable success in both their personal and professional lives.
          </motion.p>

          {/* Decorative Line */}
          <motion.div
            className="mt-12 flex justify-center gap-2"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 1 }}
          >
            <div className="w-2 h-2 bg-accent rounded-full" />
            <div className="w-16 h-2 bg-accent rounded-full" />
            <div className="w-2 h-2 bg-accent rounded-full" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}


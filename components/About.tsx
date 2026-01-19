"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import { coach } from "@/data/coach";

function Counter({ end, duration = 2 }: { end: number; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let startTime: number;
      let animationFrame: number;

      const animate = (currentTime: number) => {
        if (!startTime) startTime = currentTime;
        const progress = Math.min((currentTime - startTime) / (duration * 1000), 1);
        
        setCount(Math.floor(progress * end));

        if (progress < 1) {
          animationFrame = requestAnimationFrame(animate);
        }
      };

      animationFrame = requestAnimationFrame(animate);
      return () => cancelAnimationFrame(animationFrame);
    }
  }, [isInView, end, duration]);

  return <span ref={ref}>{count.toLocaleString()}</span>;
}

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding bg-white" ref={ref}>
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {/* Section Title */}
          <div className="text-center mb-6">
            <motion.h2
              className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-royal-indigo mb-4 px-4"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 }}
            >
              About {coach.name}
            </motion.h2>
            <motion.div
              className="w-24 h-1 bg-warm-charcoal mx-auto rounded-full"
              initial={{ width: 0 }}
              animate={isInView ? { width: 96 } : {}}
              transition={{ delay: 0.4, duration: 0.6 }}
            />
          </div>

          {/* Block 1: Photo 2 (old 3rd) left, Content A (1+2) right — 50/50, no gaps */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 items-stretch mb-4 md:mb-6">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="relative order-2 md:order-1 min-h-[280px] md:min-h-0 bg-white rounded-2xl overflow-hidden shadow-2xl"
            >
              <div className="relative h-full w-full bg-white">
                <img
                  src="/photo2.png"
                  alt={`${coach.name}`}
                  className="w-full h-full object-cover"
                  loading="eager"
                />
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="order-1 md:order-2 py-4 md:py-0"
            >
              <p className="text-base sm:text-lg text-warm-charcoal leading-relaxed">
                Ganesh Mandadi is a <strong className="text-royal-indigo">TEDx and Josh Talks speaker</strong>, author of two insightful books — <em>Your Life Graduation</em> and <em>Modern Couples, Ancient Wisdom</em> — a <strong className="text-royal-indigo">Certified Relationship & Life Balance Coach</strong>, and a <strong className="text-royal-indigo">Certified NLP Practitioner</strong>, with <strong className="text-royal-indigo">23+ years of transformational experience</strong> across 11 countries. His journey from being a school dropout to earning global credentials such as MBA, CMA, PMP, and OCS is a compelling testament to resilience, self-reinvention, and purpose-driven living.
              </p>
              <p className="text-base sm:text-lg text-warm-charcoal leading-relaxed mt-4">
                As the founder of <strong className="text-royal-indigo">SoulSync Relationships™</strong>, Ganesh helps married couples move beyond silent suffering, emotional disconnection, and repeated patterns of conflict. By integrating ancient spiritual wisdom with modern psychology, emotional intelligence, and NLP frameworks, he brings a practical, compassionate, and soulful approach to relationship healing. His work supports couples in rebuilding trust, improving communication, and creating partnerships that feel emotionally safe, conscious, and deeply connected.
              </p>
            </motion.div>
          </div>

          {/* Block 2: Content B (3) left, Photo 1 (old 1st) right — 50/50, no gaps */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 items-stretch">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="order-2 md:order-1 py-4 md:py-0"
            >
              <p className="text-base sm:text-lg text-warm-charcoal leading-relaxed">
                Drawing from his own lived marital journey, Ganesh brings empathy, depth, and clarity into every session. His retreats, workshops, and 1:1 coaching have guided countless couples toward rediscovering intimacy, resolving long-standing issues, and experiencing marriages that are not just stable but meaningful and alive. His mission remains clear: to help couples create relationships that feel sacred, supportive, and fulfilling — every single day.
              </p>
              <p className="text-base sm:text-lg text-warm-charcoal leading-relaxed mt-4">
                Beyond couples, Ganesh empowers working professionals to achieve harmony between ambition and wellbeing. Through his <strong className="text-royal-indigo">Life Balance Coaching framework</strong>, he helps individuals reduce overwhelm, strengthen emotional resilience, enhance productivity, and protect personal peace while growing in their careers.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="relative order-1 md:order-2 min-h-[280px] md:min-h-0 bg-white rounded-2xl overflow-hidden shadow-2xl"
            >
              <div className="relative h-full w-full bg-white">
                <img
                  src="/photo1.png"
                  alt={`${coach.name}`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </motion.div>
          </div>

          {/* Remaining Content Below - Mission and Stats */}
          <div className="mt-12">
            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.9, duration: 0.6 }}
              className="mb-6"
            >
              <div className="max-w-4xl mx-auto p-8 bg-gradient-to-br from-soft-blush/30 to-ivory-white rounded-xl border border-magenta/20 space-y-4">
                <div>
                  <h4 className="text-2xl font-bold text-royal-indigo mb-3">🌱 Mission</h4>
                  <p className="text-warm-charcoal italic text-lg mb-3">
                    "{coach.tagline}"
                  </p>
                  <p className="text-warm-charcoal/70">
                    To help couples create relationships that feel sacred, supportive, and fulfilling — every single day.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Stats Cards */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 1.0, duration: 0.6 }}
              className="grid grid-cols-3 gap-4 max-w-4xl mx-auto"
            >
              <div className="bg-gradient-to-br from-soft-blush/30 to-ivory-white p-6 rounded-xl text-center border border-magenta/20">
                <div className="text-2xl mb-1">🌍</div>
                <div className="text-3xl font-bold font-heading text-royal-indigo mb-1"><Counter end={23} />+</div>
                <div className="text-xs text-warm-charcoal/70 font-medium">Years Experience</div>
              </div>
              <div className="bg-gradient-to-br from-soft-blush/30 to-ivory-white p-6 rounded-xl text-center border border-magenta/20">
                <div className="text-2xl mb-1">🌎</div>
                <div className="text-3xl font-bold font-heading text-royal-indigo mb-1"><Counter end={11} /></div>
                <div className="text-xs text-warm-charcoal/70 font-medium">Countries</div>
              </div>
              <div className="bg-gradient-to-br from-soft-blush/30 to-ivory-white p-6 rounded-xl text-center border border-magenta/20">
                <div className="text-2xl mb-1">📚</div>
                <div className="text-3xl font-bold font-heading text-royal-indigo mb-1">2</div>
                <div className="text-xs text-warm-charcoal/70 font-medium">Books Published</div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}


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
          <div className="text-center mb-16">
            <motion.h2
              className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-royal-indigo mb-4 px-4"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 }}
            >
              About {coach.name}
            </motion.h2>
            <motion.div
              className="w-24 h-1 bg-gradient-to-r from-magenta to-golden-amber mx-auto rounded-full"
              initial={{ width: 0 }}
              animate={isInView ? { width: 96 } : {}}
              transition={{ delay: 0.4, duration: 0.6 }}
            />
          </div>

          {/* Photo 1 - Left, Content - Right */}
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center mb-12">
            {/* Photo 1 - Left */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="relative order-2 md:order-1"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/5]">
                <img
                  src="/photo1.png"
                  alt={`${coach.name} - Photo 1`}
                  className="w-full h-full object-cover"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-royal-indigo/20 to-transparent" />
              </div>
            </motion.div>

            {/* Content 1 - Right */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="space-y-6 order-1 md:order-2"
            >
              <p className="text-base sm:text-lg text-warm-charcoal leading-relaxed">
                Ganesh Mandadi is a <strong className="text-royal-indigo">TEDx and Josh Talks speaker</strong>, author of two insightful books — <em>Your Life Graduation</em> and <em>Modern Couples, Ancient Wisdom</em> — a <strong className="text-royal-indigo">Certified Relationship & Life Balance Coach</strong>, and a <strong className="text-royal-indigo">Certified NLP Practitioner</strong>, with <strong className="text-royal-indigo">23+ years of transformational experience</strong> across 11 countries. His journey from being a school dropout to earning global credentials such as MBA, CMA, PMP, and OCS is a compelling testament to resilience, self-reinvention, and purpose-driven living.
              </p>
            </motion.div>
          </div>

          {/* Photo 2 - Right, Content - Left */}
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center mb-12">
            {/* Content 2 - Left */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="space-y-6 order-2 md:order-1"
            >
              <p className="text-base sm:text-lg text-warm-charcoal leading-relaxed">
                As the founder of <strong className="text-royal-indigo">SoulSync Relationships™</strong>, Ganesh helps married couples move beyond silent suffering, emotional disconnection, and repeated patterns of conflict. By integrating ancient spiritual wisdom with modern psychology, emotional intelligence, and NLP frameworks, he brings a practical, compassionate, and soulful approach to relationship healing. His work supports couples in rebuilding trust, improving communication, and creating partnerships that feel emotionally safe, conscious, and deeply connected.
              </p>
            </motion.div>

            {/* Photo 2 - Right */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="relative order-1 md:order-2"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/5]">
                <img
                  src="/photo2.png"
                  alt={`${coach.name} - Photo 2`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-royal-indigo/20 to-transparent" />
              </div>
            </motion.div>
          </div>

          {/* Photo 3 - Left, Content - Right */}
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center mb-12">
            {/* Photo 3 - Left */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="relative order-2 md:order-1"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/5]">
                <img
                  src="/photo3.png"
                  alt={`${coach.name} - Photo 3`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-royal-indigo/20 to-transparent" />
              </div>
            </motion.div>

            {/* Content 3 - Right */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="space-y-6 order-1 md:order-2"
            >
              <p className="text-base sm:text-lg text-warm-charcoal leading-relaxed">
                Drawing from his own lived marital journey, Ganesh brings empathy, depth, and clarity into every session. His retreats, workshops, and 1:1 coaching have guided countless couples toward rediscovering intimacy, resolving long-standing issues, and experiencing marriages that are not just stable but meaningful and alive. His mission remains clear: to help couples create relationships that feel sacred, supportive, and fulfilling — every single day.
              </p>

              <p className="text-base sm:text-lg text-warm-charcoal leading-relaxed">
                Beyond couples, Ganesh empowers working professionals to achieve harmony between ambition and wellbeing. Through his <strong className="text-royal-indigo">Life Balance Coaching framework</strong>, he helps individuals reduce overwhelm, strengthen emotional resilience, enhance productivity, and protect personal peace while growing in their careers.
              </p>
            </motion.div>
          </div>

          {/* Remaining Content Below - Mission and Stats */}
          <div className="mt-12">
            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.9, duration: 0.6 }}
              className="mb-12"
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


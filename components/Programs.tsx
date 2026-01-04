"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  MessageSquare, 
  Heart,
  Users,
  ArrowRight
} from "lucide-react";
import { programs as programsData } from "@/data/programs";
import { coach } from "@/data/coach";

const iconMap: Record<string, any> = {
  "p1": MessageSquare,
  "p2": Heart,
  "p3": Users,
};

const colorMap: Record<string, string> = {
  "p1": "from-royal-indigo to-royal-indigo/80",
  "p2": "from-magenta to-magenta/80",
  "p3": "from-golden-amber to-bright-marigold",
};

export default function Programs() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const handleEnquire = (programTitle: string) => {
    window.open('https://rer6xajw.paperform.co/', '_blank');
  };

  return (
    <section id="programs" className="section-padding bg-gradient-to-br from-ivory-white to-soft-blush/30" ref={ref}>
      <div className="container-custom">
        {/* Section Title */}
        <motion.div
          className="text-center mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-royal-indigo mb-4 px-4">
            Programs & Workshops
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Choose the program that fits your needs. All programs are designed to create measurable change in your relationships.
          </p>
          <motion.div
            className="w-24 h-1 bg-warm-charcoal mx-auto mt-6 rounded-full"
            initial={{ width: 0 }}
            animate={isInView ? { width: 96 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
          />
        </motion.div>

        {/* Programs Grid */}
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {programsData.map((program, index) => {
            const Icon = iconMap[program.id] || MessageSquare;
            const color = colorMap[program.id] || "from-blue-500 to-blue-600";
            return (
              <motion.div
                key={program.id}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <Card className="h-full group hover:border-accent/50 cursor-pointer relative overflow-hidden">
                  {/* Duration Badge */}
                  <div className="absolute top-4 right-4 z-10 bg-gradient-to-r from-magenta to-golden-amber text-white rounded-full px-3 py-1 shadow-lg font-bold text-xs">
                    {program.duration}
                  </div>
                  {/* Accent border on hover */}
                  <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                  
                  <CardHeader>
                    <div className={`inline-flex p-4 rounded-xl bg-gradient-to-r ${color} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="font-heading group-hover:text-accent transition-colors duration-300">
                      {program.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      {program.short}
                    </p>
                    <ul className="space-y-2 mb-4">
                      {program.bullets.map((bullet, i) => (
                        <li key={i} className="flex items-start text-sm text-gray-600">
                          <span className="text-accent mr-2">•</span>
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                    <Button
                      variant="accent"
                      size="sm"
                      className="w-full group"
                      onClick={() => handleEnquire(program.title)}
                    >
                      Book / Enquire
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </CardContent>

                  {/* Hover Effect Background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

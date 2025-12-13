"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Building2, Calendar, ArrowRight } from "lucide-react";
import Image from "next/image";
import { coach } from "@/data/coach";

// TODO: Add Ganesh Mandadi's clients/partners here
const clients: Array<{ name: string; category: string; logo: string }> = [];

export default function Clients() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="clients" className="section-padding bg-white" ref={ref}>
      <div className="container-custom">
        {/* Section Title */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-primary mb-4 px-4">
            Our Clients & Partners
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Organizations and individuals who have trusted us for relationship coaching
          </p>
          <motion.div
            className="w-24 h-1 bg-accent mx-auto mt-6 rounded-full"
            initial={{ width: 0 }}
            animate={isInView ? { width: 96 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
          />
        </motion.div>

        {/* Stats Banner - TODO: Add Ganesh's stats */}
        <motion.div
          className="mb-16 bg-gradient-to-br from-primary via-primary to-slate-900 rounded-2xl p-8 md:p-12 text-white shadow-2xl"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <div className="grid md:grid-cols-6 gap-4 text-center">
            <div>
              <div className="text-3xl mb-2">🧠</div>
              <div className="text-3xl md:text-4xl font-bold font-heading mb-2">-</div>
              <div className="text-white/90 text-xs">Years Experience</div>
            </div>
            <div>
              <div className="text-3xl mb-2">👥</div>
              <div className="text-3xl md:text-4xl font-bold font-heading mb-2">-</div>
              <div className="text-white/90 text-xs">Participants</div>
            </div>
            <div>
              <div className="text-3xl mb-2">🏫</div>
              <div className="text-3xl md:text-4xl font-bold font-heading mb-2">-</div>
              <div className="text-white/90 text-xs">Sessions</div>
            </div>
            <div>
              <div className="text-3xl mb-2">🏢</div>
              <div className="text-3xl md:text-4xl font-bold font-heading mb-2">-</div>
              <div className="text-white/90 text-xs">Corporate Clients</div>
            </div>
            <div>
              <div className="text-3xl mb-2">💼</div>
              <div className="text-3xl md:text-4xl font-bold font-heading mb-2">-</div>
              <div className="text-white/90 text-xs">Sales Executives</div>
            </div>
            <div>
              <div className="text-3xl mb-2">⭐</div>
              <div className="text-3xl md:text-4xl font-bold font-heading mb-2">-</div>
              <div className="text-white/90 text-xs">Rating</div>
            </div>
          </div>
        </motion.div>

        {/* Clients Grid - Keep structure, show placeholder holders */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {clients.length > 0 ? (
            clients.map((client, index) => (
              <motion.div
                key={client.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: index * 0.05, duration: 0.4 }}
                className="group"
              >
                <div className="relative h-40 bg-gradient-to-br from-gray-50 to-white border-2 border-gray-200 rounded-2xl p-4 flex flex-col items-center justify-center text-center transition-all duration-300 hover:border-accent hover:shadow-xl hover:-translate-y-1">
                  {/* Client Logo */}
                  <div className="w-20 h-20 relative mb-3 group-hover:scale-110 transition-transform flex items-center justify-center">
                    <Image
                      src={client.logo}
                      alt={`${client.name} Logo`}
                      fill
                      className="object-contain max-w-full max-h-full"
                      sizes="(max-width: 768px) 80px, 80px"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                        const parent = target.parentElement;
                        if (parent) {
                          parent.innerHTML = '<div class="w-12 h-12 bg-gradient-to-br from-primary/10 to-accent/10 rounded-full flex items-center justify-center"><svg class="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg></div>';
                        }
                      }}
                    />
                  </div>
                  
                  {/* Client Name */}
                  <h3 className="text-sm font-semibold text-primary mb-1 group-hover:text-accent transition-colors">
                    {client.name}
                  </h3>
                  
                  {/* Category */}
                  <p className="text-xs text-gray-500">
                    {client.category}
                  </p>

                  {/* Hover Border Effect */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-accent/5 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity -z-10" />
                </div>
              </motion.div>
            ))
          ) : (
            // Show placeholder holders
            Array.from({ length: 8 }).map((_, index) => (
              <motion.div
                key={`placeholder-${index}`}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: index * 0.05, duration: 0.4 }}
                className="group"
              >
                <div className="relative h-40 bg-gradient-to-br from-gray-50 to-white border-2 border-dashed border-gray-300 rounded-2xl p-4 flex flex-col items-center justify-center text-center">
                  {/* Placeholder Logo */}
                  <div className="w-20 h-20 relative mb-3 flex items-center justify-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary/10 to-accent/10 rounded-full flex items-center justify-center">
                      <Building2 className="w-6 h-6 text-primary/40" />
                    </div>
                  </div>
                  
                  {/* Placeholder Text */}
                  <h3 className="text-sm font-semibold text-gray-400 mb-1">
                    Client {index + 1}
                  </h3>
                  
                  <p className="text-xs text-gray-300">
                    Coming soon
                  </p>
                </div>
              </motion.div>
            ))
          )}

          {/* Book Your Session Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: (clients.length || 8) * 0.05, duration: 0.4 }}
            className="group"
          >
            <a
              href={`https://wa.me/${coach.whatsapp.replace(/[^0-9]/g, '')}?text=${encodeURIComponent('Hi, I would like to book a session!')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <div className="relative h-40 bg-gradient-to-br from-accent/10 to-primary/10 border-2 border-accent rounded-2xl p-4 flex flex-col items-center justify-center text-center transition-all duration-300 hover:border-primary hover:shadow-xl hover:-translate-y-1 cursor-pointer">
                {/* Calendar Icon */}
                <div className="w-20 h-20 relative mb-3 group-hover:scale-110 transition-transform flex items-center justify-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-accent to-primary rounded-full flex items-center justify-center">
                    <Calendar className="w-8 h-8 text-white" />
                  </div>
                </div>
                
                {/* Button Text */}
                <h3 className="text-sm font-semibold text-primary mb-1 group-hover:text-accent transition-colors">
                  Book Your Session
                </h3>
                
                {/* Subtitle */}
                <p className="text-xs text-gray-600 flex items-center gap-1">
                  Click to book
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </p>

                {/* Hover Border Effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-accent/10 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity -z-10" />
              </div>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}


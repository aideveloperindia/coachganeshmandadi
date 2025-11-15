"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Award, CheckCircle2 } from "lucide-react";

const certificates = [
  {
    id: 12,
    title: "Train the Trainer",
    organization: "Training Development Institute",
    year: "2023",
    description: "Certification program for developing training skills and methodologies.",
    image: "/certificates/Train the Trainer.jpeg",
  },
  {
    id: 10,
    title: "Corporate Trainer and Coach",
    organization: "Corporate Training Association",
    year: "2023",
    description: "Specialized certification in corporate training and organizational development.",
    image: "/certificates/Corporate Trainer and Coach.jpeg",
  },
  {
    id: 2,
    title: "Certified Life and Executive Coach",
    organization: "Professional Coaching Association",
    year: "2023",
    description: "Advanced certification in executive coaching and leadership development.",
    image: "/certificates/Certified Life and Executive Coach.jpeg",
  },
  {
    id: 4,
    title: "Certified Life Coach",
    organization: "Life Coaching Academy",
    year: "2023",
    description: "Professional certification in life coaching methodologies and techniques.",
    image: "/certificates/Certified Life Coach.png",
  },
  {
    id: 8,
    title: "Certificate in Neuro Linguistic Programming",
    organization: "NLP Institute",
    year: "2023",
    description: "Master certification in Neuro Linguistic Programming techniques.",
    image: "/certificates/Certificate in neuro Linguistic Programming.png",
  },
  {
    id: 11,
    title: "Master Psychometric Counselling",
    organization: "Psychometric Institute",
    year: "2023",
    description: "Advanced certification in psychometric assessment and counseling techniques.",
    image: "/certificates/Master Psychometric Counselling.png",
  },
];

export default function Certificates() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedCert, setSelectedCert] = useState<typeof certificates[0] | null>(null);

  return (
    <section id="certificates" className="section-padding bg-gradient-to-br from-gray-50 to-white" ref={ref}>
      <div className="container-custom">
        {/* Section Title */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/10 rounded-full mb-6">
            <Award className="w-8 h-8 text-accent" />
          </div>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-4">
            Certifications & Recognitions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Backed by prestigious certifications and industry recognition
          </p>
          <motion.div
            className="w-24 h-1 bg-accent mx-auto mt-6 rounded-full"
            initial={{ width: 0 }}
            animate={isInView ? { width: 96 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
          />
        </motion.div>

        {/* Certificates Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group cursor-pointer"
              onClick={() => setSelectedCert(cert)}
            >
              <div className="relative bg-white rounded-2xl overflow-hidden border-2 border-gray-200 hover:border-accent transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
                {/* Verified Badge */}
                <div className="absolute top-4 right-4 z-10 bg-green-500 text-white rounded-full p-1.5 shadow-lg">
                  <CheckCircle2 className="w-5 h-5" />
                </div>

                {/* Certificate Image */}
                <div className="relative h-56 bg-gradient-to-br from-primary/5 to-accent/5 flex items-center justify-center group-hover:scale-105 transition-transform duration-300 overflow-hidden">
                  <Image
                    src={cert.image}
                    alt={cert.title}
                    fill
                    className="object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      const parent = target.parentElement;
                      if (parent) {
                        parent.innerHTML = '<div class="w-24 h-24 text-primary/20"><svg class="w-full h-full" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg></div>';
                      }
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <div className="text-xs font-semibold mb-1">{cert.year}</div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-lg font-serif font-bold text-primary mb-2 group-hover:text-accent transition-colors">
                    {cert.title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-3 font-medium">
                    {cert.organization}
                  </p>
                  <p className="text-sm text-gray-500 line-clamp-2">
                    {cert.description}
                  </p>
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-8">
                  <span className="text-white font-semibold">Click to View Details</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Certificate Modal */}
      <Dialog open={!!selectedCert} onOpenChange={() => setSelectedCert(null)}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <DialogTitle className="text-2xl mb-2">{selectedCert?.title}</DialogTitle>
                <DialogDescription className="text-base">
                  {selectedCert?.organization} • {selectedCert?.year}
                </DialogDescription>
              </div>
              <div className="bg-green-500 text-white rounded-full p-2">
                <CheckCircle2 className="w-6 h-6" />
              </div>
            </div>
          </DialogHeader>

          {/* Certificate Image */}
          <div className="relative h-96 bg-gradient-to-br from-primary/5 to-accent/5 rounded-xl flex items-center justify-center overflow-hidden">
            <Image
              src={selectedCert?.image || ""}
              alt={selectedCert?.title || ""}
              fill
              className="object-contain"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.style.display = 'none';
                const parent = target.parentElement;
                if (parent) {
                  parent.innerHTML = '<div class="w-32 h-32 text-primary/20"><svg class="w-full h-full" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg></div>';
                }
              }}
            />
          </div>

          {/* Description */}
          <p className="text-gray-700 leading-relaxed mt-4">
            {selectedCert?.description}
          </p>
        </DialogContent>
      </Dialog>
    </section>
  );
}


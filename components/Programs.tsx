"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Target, 
  Users, 
  TrendingUp, 
  MessageSquare, 
  Zap, 
  Building2,
  Camera,
  X,
  Shield,
  Home,
  Briefcase,
  BarChart3,
  Award,
  Calendar,
  ArrowRight
} from "lucide-react";
import {
  Dialog,
  DialogContent,
} from "@/components/ui/dialog";

const programs = [
  {
    icon: TrendingUp,
    title: "Sales Mastery & Business Growth",
    description: "Accelerate results through advanced sales and persuasion strategies, negotiation skills, and relationship building for business growth.",
    color: "from-green-500 to-green-600",
  },
  {
    icon: Users,
    title: "Leadership & Organizational Excellence",
    description: "Develop visionary leaders and high-performing teams through comprehensive leadership development and organizational transformation.",
    color: "from-purple-500 to-purple-600",
  },
  {
    icon: BarChart3,
    title: "Employee Productivity Training",
    description: "Enhance workplace efficiency, time management, and output quality to maximize individual and team productivity.",
    color: "from-pink-500 to-pink-600",
  },
  {
    icon: Target,
    title: "Personal Effectiveness & Emotional Mastery",
    description: "Strengthen focus, balance, and inner resilience through time management, goal setting, and emotional intelligence for peak performance.",
    color: "from-blue-500 to-blue-600",
  },
  {
    icon: Shield,
    title: "Life Insurance Sales Development",
    description: "Specialized training to master life insurance sales techniques, build client trust, and achieve consistent sales targets.",
    color: "from-teal-500 to-teal-600",
  },
  {
    icon: Home,
    title: "Real Estate Sales Development",
    description: "Comprehensive training for plot and flats sales, including negotiation skills, client relationship management, and closing techniques.",
    color: "from-amber-500 to-amber-600",
  },
  {
    icon: Briefcase,
    title: "Business Development Coaching",
    description: "Strategic coaching to identify opportunities, build partnerships, and accelerate business growth through proven methodologies.",
    color: "from-cyan-500 to-cyan-600",
  },
  {
    icon: MessageSquare,
    title: "Communication & Influence Skills",
    description: "Build impactful communication, executive presence, active listening, and persuasive presentation skills for influential interactions.",
    color: "from-orange-500 to-orange-600",
  },
  {
    icon: Zap,
    title: "Motivational & Mindset Transformation",
    description: "Inspire peak performance through purpose-driven sessions that ignite passion, overcome obstacles, and cultivate a winning mindset.",
    color: "from-red-500 to-red-600",
  },
  {
    icon: Building2,
    title: "Organizational Development Interventions",
    description: "Transform culture, performance, and people systems to enhance employee engagement and drive sustainable business transformation.",
    color: "from-indigo-500 to-indigo-600",
  },
  {
    icon: Award,
    title: "Change Management & Strategy Building",
    description: "Advanced leadership programs to develop strategic thinking, decision-making capabilities, and inspire high-performing teams.",
    color: "from-violet-500 to-violet-600",
  },
];

const trainingPhotos = [
  { id: 1, src: "/training-sessions/1.jpeg", alt: "Training Session 1" },
  { id: 2, src: "/training-sessions/2.jpeg", alt: "Training Session 2" },
  { id: 3, src: "/training-sessions/3.jpeg", alt: "Training Session 3" },
  { id: 4, src: "/training-sessions/4.jpeg", alt: "Training Session 4" },
  { id: 5, src: "/training-sessions/5.jpeg", alt: "Training Session 5" },
  { id: 6, src: "/training-sessions/6.jpeg", alt: "Training Session 6" },
  { id: 7, src: "/training-sessions/7.jpeg", alt: "Training Session 7" },
  { id: 8, src: "/training-sessions/8.jpeg", alt: "Training Session 8" },
  { id: 9, src: "/training-sessions/9.jpeg", alt: "Training Session 9" },
  { id: 10, src: "/training-sessions/10.jpeg", alt: "Training Session 10" },
];

export default function Programs() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedPhoto, setSelectedPhoto] = useState<string | null>(null);

  return (
    <section id="programs" className="section-padding bg-gradient-to-br from-gray-50 to-white" ref={ref}>
      <div className="container-custom">
        {/* Section Title */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-4">
            Training Programs & Workshops
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive programs designed to elevate individuals and organizations to new heights
          </p>
          <motion.div
            className="w-24 h-1 bg-accent mx-auto mt-6 rounded-full"
            initial={{ width: 0 }}
            animate={isInView ? { width: 96 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
          />
        </motion.div>

        {/* Programs Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, index) => {
            const Icon = program.icon;
            return (
              <motion.div
                key={program.title}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <Card className="h-full group hover:border-accent/50 cursor-pointer relative overflow-hidden">
                  {/* Number Badge */}
                  <div className="absolute top-4 left-4 z-10 bg-primary text-white rounded-full w-10 h-10 flex items-center justify-center shadow-lg font-bold text-sm">
                    {index + 1}
                  </div>
                  {/* Accent border on hover */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-300" 
                       style={{ backgroundImage: `linear-gradient(to right, var(--tw-gradient-stops))` }} />
                  
                  <CardHeader>
                    <div className={`inline-flex p-4 rounded-xl bg-gradient-to-r ${program.color} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="font-heading group-hover:text-accent transition-colors duration-300">
                      {program.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 leading-relaxed">
                      {program.description}
                    </p>
                  </CardContent>

                  {/* Hover Effect Background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
                </Card>
              </motion.div>
            );
          })}

          {/* Book Your Session Card */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: programs.length * 0.1, duration: 0.5 }}
          >
            <a
              href="https://wa.me/919666722233?text=Hi, I would like to book a training session!"
              target="_blank"
              rel="noopener noreferrer"
              className="block h-full"
            >
              <Card className="h-full group hover:border-accent/50 cursor-pointer relative overflow-hidden">
                {/* Number Badge */}
                <div className="absolute top-4 left-4 z-10 bg-primary text-white rounded-full w-10 h-10 flex items-center justify-center shadow-lg font-bold text-sm">
                  {programs.length + 1}
                </div>
                {/* Accent border on hover */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-accent to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <CardHeader>
                  <div className="inline-flex p-4 rounded-xl bg-gradient-to-r from-accent to-primary mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Calendar className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="font-heading group-hover:text-accent transition-colors duration-300 flex items-center gap-2">
                    Book Your Session
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 leading-relaxed">
                    Ready to transform your team? Click here to book a personalized training session and take your organization to the next level.
                  </p>
                </CardContent>

                {/* Hover Effect Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
              </Card>
            </a>
          </motion.div>
        </div>

        {/* Training Session Photos */}
        <motion.div
          className="mt-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/10 rounded-full mb-6">
              <Camera className="w-8 h-8 text-accent" />
            </div>
            <h3 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">
              Training Sessions in Action
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              See the energy and engagement in our live training sessions
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {trainingPhotos.map((photo, index) => (
              <motion.div
                key={photo.id}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.8 + index * 0.1, duration: 0.5 }}
                className="group cursor-pointer"
                onClick={() => setSelectedPhoto(photo.src)}
              >
                <div className="relative aspect-square rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                      <Camera className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
        >
          <p className="text-gray-600 mb-4">Ready to transform your team?</p>
          <button
            onClick={() => window.open("https://wa.me/919666722233?text=Hello%20Sir,%20I%20would%20like%20to%20book%20a%20training%20program.", "_blank")}
            className="inline-flex items-center px-8 py-3 bg-primary text-white rounded-xl hover:bg-primary/90 hover:scale-105 transition-all shadow-lg hover:shadow-2xl font-medium"
          >
            Discuss Custom Program
          </button>
        </motion.div>
      </div>

      {/* Photo Modal */}
      <Dialog open={!!selectedPhoto} onOpenChange={() => setSelectedPhoto(null)}>
        <DialogContent className="max-w-4xl p-0 bg-black border-0">
          <button
            onClick={() => setSelectedPhoto(null)}
            className="absolute -top-12 right-0 w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors z-50"
          >
            <X className="w-6 h-6" />
          </button>
          {selectedPhoto && (
            <div className="relative aspect-video">
              <Image
                src={selectedPhoto}
                alt="Training Session"
                fill
                className="object-contain"
              />
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}


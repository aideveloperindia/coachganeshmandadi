"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, Mail, Home, User, BookOpen, Users, Award, MessageSquare, Image as ImageIcon, FileText, Mail as MailIcon, ChevronDown } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { coach } from "@/data/coach";

const navigation = [
  { name: "Home", href: "/", icon: Home },
  { name: "About", href: "/about", icon: User },
  { name: "Programs", href: "/programs", icon: BookOpen },
  { name: "Clients", href: "/clients", icon: Users },
  { name: "Certifications", href: "/certifications", icon: Award },
  { name: "Testimonials", href: "/testimonials", icon: MessageSquare },
  { name: "Gallery", href: "/gallery", icon: ImageIcon },
  { name: "Resources", href: "/resources", icon: FileText },
  { name: "Contact", href: "/contact", icon: MailIcon },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isPagesMenuOpen, setIsPagesMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  return (
    <>
      {/* Top Navigation - Fixed Position */}
      <motion.header
        className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm overflow-visible"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="container-custom">
          <div className="flex items-center justify-between h-20 sm:h-24 md:h-28 px-4 sm:px-6">
            {/* Logo - Centered Vertically */}
            <Link href="/" className="flex items-center justify-center group h-full">
              <motion.div
                className="relative flex items-center justify-center"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400 }}
                style={{ height: '100%' }}
              >
                <div className="h-[120%] sm:h-[130%] md:h-[140%] w-auto relative flex items-center justify-center" style={{ maxHeight: '100%' }}>
                  <img
                    src="/ganesh-logo.png"
                    alt={`${coach.name} Logo`}
                    className="h-full w-auto object-contain"
                    style={{ maxHeight: '100%', width: 'auto' }}
                  />
                </div>
              </motion.div>
            </Link>

            {/* Desktop Navigation & CTA - Right Side Together */}
            <div className="hidden lg:flex items-center gap-3">
              {/* Pages Dropdown */}
              <nav className="flex items-center">
                <div 
                  className="relative"
                  onMouseEnter={() => setIsPagesMenuOpen(true)}
                  onMouseLeave={() => setIsPagesMenuOpen(false)}
                >
                  <Button
                    variant="outline"
                    size="sm"
                    className="group border-primary text-primary hover:bg-primary hover:text-white flex items-center gap-2"
                  >
                    Pages
                    <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isPagesMenuOpen ? 'rotate-180' : ''}`} />
                  </Button>

                  {/* Dropdown Menu */}
                  <AnimatePresence>
                    {isPagesMenuOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: -10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -10, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full right-0 mt-2 bg-white rounded-xl shadow-2xl border border-gray-200 py-2 min-w-[200px] z-50"
                      >
                        {navigation.map((item, index) => {
                          const Icon = item.icon;
                          const isActive = pathname === item.href;
                          return (
                            <Link
                              key={item.name}
                              href={item.href}
                              onClick={() => setIsPagesMenuOpen(false)}
                            >
                              <motion.div
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.03 }}
                                className={`flex items-center gap-3 px-4 py-3 hover:bg-primary/5 transition-colors cursor-pointer group/item ${
                                  isActive ? 'bg-primary/10 border-l-2 border-primary' : ''
                                }`}
                              >
                                <Icon className={`w-5 h-5 ${isActive ? 'text-primary' : 'text-gray-600 group-hover/item:text-primary'}`} />
                                <span className={`font-medium ${isActive ? 'text-primary' : 'text-gray-700 group-hover/item:text-primary'}`}>
                                  {item.name}
                                </span>
                              </motion.div>
                            </Link>
                          );
                        })}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </nav>

              {/* Book Session Button */}
              <Button 
                variant="accent" 
                size="sm" 
                className="group"
                onClick={() => {
                  const message = encodeURIComponent('Hello Ganesh, I\'d like to book a discovery call.');
                  window.open(`https://wa.me/${coach.whatsapp.replace(/[^0-9]/g, '')}?text=${message}`, "_blank");
                }}
              >
                Book Session
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6 text-primary" />
              ) : (
                <Menu className="w-6 h-6 text-primary" />
              )}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 bg-black/50 z-40 lg:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Menu Panel */}
            <motion.div
              className="fixed top-32 left-0 right-0 bottom-0 bg-white z-40 lg:hidden overflow-y-auto"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
            >
              <nav className="container-custom px-6 py-8">
                <div className="space-y-2">
                  {navigation.map((item, index) => {
                    const isActive = pathname === item.href;
                    return (
                      <motion.div
                        key={item.name}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05 }}
                      >
                        <Link href={item.href} onClick={() => setIsMobileMenuOpen(false)}>
                          <div className={`block px-6 py-4 rounded-xl font-medium text-lg transition-all ${
                            isActive
                              ? "bg-gradient-to-r from-primary to-accent text-white shadow-lg"
                              : "bg-gray-50 text-gray-700 hover:bg-gray-100"
                          }`}>
                            {item.name}
                          </div>
                        </Link>
                      </motion.div>
                    );
                  })}
                </div>

                {/* Mobile CTA Buttons */}
                <div className="mt-8 space-y-3">
                  <Link href="/about" onClick={() => setIsMobileMenuOpen(false)}>
                    <Button 
                      variant="outline" 
                      size="lg" 
                      className="w-full border-primary text-primary hover:bg-primary hover:text-white"
                    >
                      Know More
                    </Button>
                  </Link>
                  <Button 
                    variant="accent" 
                    size="lg" 
                    className="w-full"
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      const message = encodeURIComponent('Hello Ganesh, I\'d like to book a discovery call.');
                      window.open(`https://wa.me/${coach.whatsapp.replace(/[^0-9]/g, '')}?text=${message}`, "_blank");
                    }}
                  >
                    Book a Session
                  </Button>
                </div>

              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>

          {/* Spacer to prevent content from going under fixed header */}
          <div className="h-20 sm:h-24 md:h-28" />
    </>
  );
}


"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function LogoModal() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    // Only run on client side
    if (typeof window === 'undefined') return;

    // Only show on homepage
    if (pathname !== "/") {
      setIsOpen(false);
      return;
    }

    // Check if logo has been shown in this session
    const hasShownLogo = sessionStorage.getItem("logoShown");
    
    // If already shown, never show again
    if (hasShownLogo) {
      setIsOpen(false);
      return;
    }

    // Show modal on initial homepage load
    setIsOpen(true);
    
    // Mark as shown in session immediately
    sessionStorage.setItem("logoShown", "true");
    
    // Auto close after 3 seconds
    const timer = setTimeout(() => {
      setIsOpen(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, [pathname]); // Include pathname to check when on homepage

  // Don't render if not on homepage
  if (pathname !== "/") {
    return null;
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-white z-[100] flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
        >
          {/* Logo with Stomp/Expand Animation */}
          <motion.div
            className="w-[500px] h-[500px] md:w-[600px] md:h-[600px] relative"
            initial={{ 
              scale: 0,
              opacity: 0,
            }}
            animate={{ 
              scale: [0, 1.4, 1],
              opacity: [0, 1, 1],
              y: [0, -30, 0],
            }}
            exit={{ 
              scale: [1, 1.2, 0],
              opacity: [1, 0.5, 0],
              y: [0, 50],
            }}
            transition={{ 
              duration: 1.5,
              ease: [0.68, -0.55, 0.265, 1.55], // Custom easing for stomp/bounce effect
              times: [0, 0.5, 1], // Scale timing: start, overshoot, settle
            }}
          >
            <img
              src="/ganesh-logo.png"
              alt="Coach Ganesh Mandadi Logo"
              className="w-full h-full object-contain"
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

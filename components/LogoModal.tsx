"use client";

import { useState, useEffect } from "react";
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

    // Show logo on initial homepage load (no animation, just shown)
    setIsOpen(true);
    
    // Mark as shown in session immediately
    sessionStorage.setItem("logoShown", "true");
    
    // Hide logo and show website after 3 seconds
    const timer = setTimeout(() => {
      setIsOpen(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, [pathname]);

  // Don't render if not on homepage
  if (pathname !== "/") {
    return null;
  }

  // Logo shown static, then unmounts so website is visible — no animation
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-white z-[100] flex items-center justify-center">
      <div className="w-[500px] h-[500px] md:w-[600px] md:h-[600px] relative">
        <img
          src="/ganesh-logo.png"
          alt="Coach Ganesh Mandadi Logo"
          className="w-full h-full object-contain"
        />
      </div>
    </div>
  );
}

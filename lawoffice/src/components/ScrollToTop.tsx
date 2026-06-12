import { ArrowUp } from 'lucide-react';
import React, { useEffect, useState } from 'react'

const ScrollToTop = () => {
    const [showScrollTop, setShowScrollTop] = useState(false);
    useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY > 400) {
          setShowScrollTop(true);
        } else {
          setShowScrollTop(false);
        }
      };

      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }, []);
  return (
    <div>
      <button
        type="button"
        id="scroll-to-top"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className={`fixed bottom-6 right-6 z-50 p-2.5 sm:p-3 bg-[#1b2336] text-[#caa97e] border border-[#caa97e]/40 hover:border-[#caa97e] hover:bg-[#caa97e] hover:text-[#1b2336] shadow-2xl transition-all duration-300 cursor-pointer ${
          showScrollTop
            ? "opacity-100 translate-y-0 scale-100"
            : "opacity-0 translate-y-4 scale-90 pointer-events-none"
        }`}
        title="Scroll to Top"
        aria-label="Scroll to Top"
      >
        <ArrowUp className="w-4 h-4 sm:w-5 sm:h-5" />
      </button>
    </div>
  );
}

export default ScrollToTop

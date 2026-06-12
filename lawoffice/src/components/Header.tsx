import { ChevronDown, Scale } from "lucide-react";
import { useEffect, useState } from "react";
import logo from "../assets/logo.png"

const Header = () => {
  // Navigation active state
  const [activeNav, setActiveNav] = useState("Hero");

  // Smooth scroll handler
  const handleScrollTo = (sectionId: string, navName: string) => {
    setActiveNav(navName);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // active section
  useEffect(() => {
    const sections = [
      { id: "about-team", label: "About" },
      { id: "practice-areas", label: "Practice Areas" },
      { id: "case-studies", label: "Case Studies" },
      { id: "pricing", label: "Prices" },
      { id: "testimonials", label: "Testimonial" },
      { id: "contact", label: "Contact" },
    ];

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 150;

      sections.forEach((section) => {
        const element = document.getElementById(section.id);

        if (
          element &&
          scrollPosition >= element.offsetTop &&
          scrollPosition < element.offsetTop + element.offsetHeight
        ) {
          setActiveNav(section.label);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div>
      <header
        id="header"
        className="fixed top-0 left-0 w-full z-50 bg-[#232734d4] backdrop-blur-2xl border-b border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.3)]"
      >
        <div className="max-w-7xl mx-auto px-6 h-20 md:h-24 flex items-center justify-between sticky top-0">
          <div
            className="flex items-center gap-3 cursor-pointer animate-fade-in"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <div className="w-full h-full">
              <img src={logo} />
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-6 lg:gap-8">
            {[
              { label: "About", target: "about-team" },
              { label: "Practice Areas", target: "practice-areas" },
              { label: "Case Studies", target: "case-studies" },
              { label: "Prices", target: "pricing" },
              { label: "Testimonial", target: "testimonials" },
              { label: "Contact", target: "contact" },
            ].map((item) => (
              <button
                key={item.label}
                id={`nav-${item.target}`}
                onClick={() => handleScrollTo(item.target, item.label)}
                className={`text-xs font-semibold uppercase tracking-widest transition-all duration-300 hover:text-white cursor-pointer py-1.5 border-b-2 ${
                  activeNav === item.label
                    ? "text-[#caa97e] border-[#caa97e] font-bold"
                    : "text-slate-300 border-transparent hover:text-white"
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Mobile Consult Call-To-Action Button */}
          <div className="md:hidden">
            <button
              onClick={() => handleScrollTo("contact", "Contact")}
              className="px-4 py-2 bg-white text-[#1b2336] text-[10px] font-bold uppercase tracking-widest hover:bg-slate-100 transition-all shadow-sm"
            >
              Consult
            </button>
          </div>
        </div>
      </header>
    </div>
  );
};;

export default Header

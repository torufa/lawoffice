import { Scale, ShieldCheck, TrendingDown } from "lucide-react";
import { useState } from "react";
import heroBg from '../assets/banner/background.png'
import pattern from '../assets/pattern_background.png'


const Hero = () => {
    const [activeNav, setActiveNav] = useState("About");
    // Smooth scroll handler
  const handleScrollTo = (sectionId: string, navName: string) => {
    setActiveNav(navName);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div>
      {/* HERO SECTION */}
      <section
        id="hero"
        className="relative bg-cover bg-center min-h-[640px] md:min-h-[740px] lg:min-h-[880px] flex items-center pt-28 pb-16"
        style={{
          backgroundImage: `linear-gradient(to right, rgb(27 35 54 / 23%) 35%, rgb(27 35 54 / 27%) 70%, rgba(27, 35, 54, 0.45) 100%), url(${heroBg})`,
        }}
      >
        <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
          <div className="max-w-4xl text-left">
            <span className="text-[#caa97e] font-semibold text-xs uppercase tracking-[0.3em] mb-4 block">
              Established 1994
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-sans text-white tracking-tight leading-tight mb-6 uppercase font-bold">
              Real Unbelievable Solutions <br />
              for all Legal Cases.
            </h1>

            <p className="text-[19px] mt-6 text-white md:text-[19px] leading-relaxed tracking-tight max-w-lg font-sans font-normal">
              We strongly believe that everyone deserves equal rights. That’s
              why we put our clients first on our way to justice and truth.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <button
                id="hero-cta"
                onClick={() => handleScrollTo("contact", "Contact")}
                className="px-8 py-5 bg-[#232734] text-white rounded-2xl text-base font-medium uppercase tracking-tight hover:bg-white hover:text-[#232734] duration-500 transition-all shadow-md shadow-slate-900/10 cursor-pointer"
              >
                ASK FOR CONSULTATION
              </button>
              <button
                onClick={() =>
                  handleScrollTo("practice-areas", "Practice Areas")
                }
                className="px-8 py-5 bg-[#232734] text-white rounded-2xl text-base font-medium uppercase tracking-tight hover:bg-white hover:text-[#232734] duration-500 transition-all shadow-md shadow-slate-900/10 cursor-pointer"
              >
                Our Results
              </button>
            </div>
          </div>
        </div>

        <div className="absolute right-0 bottom-0 w-1/3 h-full bg-gradient-to-lg from-[#1b2336]/20 to-transparent pointer-events-none hidden lg:block"></div>
      </section>

      <section className="relative z-20 px-6 max-w-7xl mx-auto w-full -mt-26 md:-mt-29 rounded-3xl overflow-hidden hidden md:block">
        <div
          className="skew-banner text-white p-6 sm:p-8 md:p-10 shadow-2xl border border-slate-700/35 relative overflow-hidden bg-cover bg-no-repeat"
          style={{
            backgroundImage: `url(${pattern})`,
          }}
        >
          {" "}
          <div className="absolute -top-12 -right-12 w-64 h-64 rounded-full bg-[#caa97e]/5 blur-3xl pointer-events-none"></div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4 divide-y md:divide-y-0 md:divide-x divide-slate-600/80">
            {/* Cornerstone 1 - Security */}
            <div
              id="security-pillar"
              className="flex flex-col items-center text-center px-4 pt-4 md:pt-0"
            >
              <div className="w-12 h-12 rounded border border-[#caa97e]/25 flex items-center justify-center mb-4 text-[#caa97e] hover:bg-[#caa97e] hover:text-[#1b2336] transition-all duration-300">
                <ShieldCheck className="w-7 h-7" />
              </div>
              <h3 className="text-lg font-bold tracking-[0.2em] text-white mb-2 uppercase">
                Security
              </h3>
              <p className="text-xl text-slate-400 tracking-tight leading-relaxed max-w-xs font-light">
                Security is investment in a business. Make 1st step.
              </p>
            </div>

            {/* Cornerstone 2 - Employment */}
            <div
              id="security-pillar"
              className="flex flex-col items-center text-center px-4 pt-4 md:pt-0"
            >
              <div className="w-12 h-12 rounded border border-[#caa97e]/25 flex items-center justify-center mb-4 text-[#caa97e] hover:bg-[#caa97e] hover:text-[#1b2336] transition-all duration-300">
                <Scale className="w-7 h-7" />
              </div>
              <h3 className="text-lg font-bold tracking-[0.2em] text-white mb-2 uppercase">
                Employment
              </h3>
              <p className="text-xl text-slate-400 tracking-tight leading-relaxed max-w-xs font-light">
                Here we will take care of the rest.Know your rights.
              </p>
            </div>

            {/* Cornerstone 3 - Downfall */}
            <div
              id="security-pillar"
              className="flex flex-col items-center text-center px-4 pt-4 md:pt-0"
            >
              <div className="w-12 h-12 rounded border border-[#caa97e]/25 flex items-center justify-center mb-4 text-[#caa97e] hover:bg-[#caa97e] hover:text-[#1b2336] transition-all duration-300">
                <TrendingDown className="w-7 h-7" />
              </div>
              <h3 className="text-lg font-bold tracking-[0.2em] text-white mb-2 uppercase">
                Employment
              </h3>
              <p className="text-xl text-slate-400 tracking-tight leading-relaxed max-w-xs font-light">
                Here we will take care of the rest.Know your rights.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Hero

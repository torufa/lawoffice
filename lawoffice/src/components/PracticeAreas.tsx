import { Briefcase, Building2, Car, FileText } from "lucide-react";
import pattern from '../assets/pattern.png'
import { Link } from "react-router-dom";

const PracticeAreas = () => {
  return (
    <div>
      <section
        id="practice-areas"
        className="py-24 bg-slate-50/70 border-y border-slate-200/60 relative overflow-hidden"
      >
        <div
          className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:16px_16px] bg-cover bg-no-repeat bg-fixed opacity-40 bg-left-[100%]"
          style={{
            backgroundImage: `url(${pattern})`,
          }}
        ></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[#caa97e] font-bold text-xs uppercase tracking-[0.3em] mb-3 block">
              Comprehensive Domains
            </span>
            <h2 className="text-3xl sm:text-3xl md:text-4xl font-serif italic font-medium uppercase text-[#232734] tracking-wide leading-tight">
              Practice Areas
            </h2>
            <div className="w-12 h-[1px] bg-[#caa97e] mx-auto my-4"></div>
            <p className="text-base sm:text-base text-[#696c73] leading-relaxed tracking-wide mt-5">
              We turn sophisticated litigation strategies into dynamic defenses
              to protect your commercial interests and creative assets.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 mt-8">
            <div
              id="practice-automotive"
              className="bg-white p-15 sm:p-15 border border-slate-100 hover:border-[#232734]/20 transition-all duration-300 flex flex-col group cursor-pointer justify-between hover:bg-white/10 hover:backdrop-blur-md border border-12/20 rounded-2xl transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              <div>
                <div className="w-12 h-12 rounded-lg border border-[#232734]/20 flex items-center justify-center mb-6 group-hover:bg-[#232734] group-hover:text-white transition-all text-[#232734]">
                  <Car className="w-7 h-7" />
                </div>
                <h3 className="font-sans text-2xl font-normal text-[#232734] mb-3">
                  Automotive / Tire Defects
                </h3>
                <p className="text-xl text-slate-500 leading-relaxed font-light max-w-lg mb-6">
                  We aim to support families and commercial clients in resolving
                  complex defect liabilities. We ensure professional counsel and
                  results.
                </p>
              </div>
              <span className="text-md font-medium text-[#232734] group-hover:border-[#232734] uppercase tracking-widest border-b w-fit">
                View Details
              </span>
            </div>
            <div
              id="practice-business"
              className="bg-white p-15 sm:p-15 border border-slate-100 hover:border-[#232734]/20 transition-all duration-300 flex flex-col group cursor-pointer justify-between hover:bg-white/10 hover:backdrop-blur-md border border-12/20 rounded-2xl transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              <div>
                <div className="w-12 h-12 rounded-lg border border-[#232734]/20 flex items-center justify-center mb-6 group-hover:bg-[#232734] group-hover:text-white transition-all text-[#232734]">
                  <Briefcase className="w-7 h-7" />
                </div>
                <h3 className="font-sans text-2xl font-normal text-[#232734] mb-3">
                  Business Litigation
                </h3>
                <p className="text-xl text-slate-500 leading-relaxed font-light max-w-lg mb-6">
                  Professional legal support with financial, commercial, tax
                  disputes and other intricate multi-jurisdictional business
                  interests.
                </p>
              </div>
              <span className="text-md font-medium text-[#232734] group-hover:border-[#232734] uppercase tracking-widest border-b w-fit">
                View Details
              </span>
            </div>
            <div
              id="practice-real-estate"
              className="bg-white p-15 sm:p-15 border border-slate-100 hover:border-[#232734]/20 transition-all duration-300 flex flex-col group cursor-pointer justify-between hover:bg-white/10 hover:backdrop-blur-md border border-12/20 rounded-2xl transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              <div>
                <div className="w-12 h-12 rounded-lg border border-[#232734]/20 flex items-center justify-center mb-6 group-hover:bg-[#232734] group-hover:text-white transition-all text-[#232734]">
                  <Building2 className="w-7 h-7" />
                </div>
                <h3 className="font-sans text-2xl font-normal text-[#232734] mb-3">
                  Real Estate Law
                </h3>
                <p className="text-xl text-slate-500 leading-relaxed font-light max-w-lg mb-6">
                  Your property acquisitions, zoning regulations, and estate
                  litigation interests represented on the highest level of
                  detail.
                </p>
              </div>
              <span className="text-md font-medium text-[#232734] group-hover:border-[#232734] uppercase tracking-widest border-b w-fit">
                View Details
              </span>
            </div>
            <div
              id="practice-well-planners"
              className="bg-white p-15 sm:p-15 border border-slate-100 hover:border-[#232734]/20 transition-all duration-300 flex flex-col group cursor-pointer justify-between hover:bg-white/10 hover:backdrop-blur-md border border-12/20 rounded-2xl transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              <div>
                <div className="w-12 h-12 rounded-lg border border-[#232734]/20 flex items-center justify-center mb-6 group-hover:bg-[#232734] group-hover:text-white transition-all text-[#232734]">
                  <FileText className="w-7 h-7" />
                </div>
                <h3 className="font-sans text-2xl font-normal text-[#232734] mb-3">
                  Well Planners
                </h3>
                <p className="text-xl text-slate-500 leading-relaxed font-light max-w-lg mb-6">
                  Handling the sensitive structural statutory and contractual
                  trust mechanisms that frequently arise in complex inheritance
                  claims.
                </p>
              </div>
              <span className="text-md font-medium text-[#232734] group-hover:border-[#232734] uppercase tracking-widest border-b w-fit">
                View Details
              </span>
            </div>
          </div>
          <div className="flex justify-center mt-9">
            <Link to="/servicePage">
              <button
                type="button"
                className="px-6 py-3 border border-[#1b2336] text-[#1b2336] text-xs font-bold uppercase tracking-widest hover:bg-[#1b2336] hover:text-white transition-all cursor-pointer shadow-sm hover:shadow-md duration-300"
              >
                View All
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default PracticeAreas

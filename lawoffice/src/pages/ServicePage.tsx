import { Link } from "react-router-dom";
import ScrollToTop from "../components/ScrollToTop";
import Footer from "../components/Footer";
import { BanknoteIcon, Blocks, Briefcase, Building2, Car, FileText, Landmark, PanelBottom } from "lucide-react";

const ServicePage = () => {
  return (
    <div className="text-[#232734]">
      <section
        className={`flex flex-col mx-auto items-center text-center min-h-[60vh] bg-center bg-cover`}
        style={{
          backgroundImage: `linear-gradient(rgb(35 39 52 / 81%), #232734)`,
        }}
      >
        <div className="w-5xl flex justify-start px-6 pt-10 pb-20 gap-5">
          <Link to="/">
            <button
              type="button"
              className="text-left px-6 py-3 text-xs font-bold uppercase tracking-widest bg-[#1b2336] text-white transition-all cursor-pointer shadow-sm hover:shadow-md duration-300"
            >
              GO BACK
            </button>
          </Link>
          <Link to="/aboutPage">
            <button
              type="button"
              className="text-left px-6 py-3 text-xs font-bold uppercase tracking-widest bg-[#1b2336] text-white transition-all cursor-pointer shadow-sm hover:shadow-md duration-300"
            >
              ABOUT
            </button>
          </Link>
          <Link to="/testimonialPage">
            <button
              type="button"
              className="text-left px-6 py-3 text-xs font-bold uppercase tracking-widest bg-[#1b2336] text-white transition-all cursor-pointer shadow-sm hover:shadow-md duration-300"
            >
              TESTIMONIAL
            </button>
          </Link>
        </div>

        <div className="mx-auto">
          <span className="text-xs tracking-[0.4em] uppercase text-[#caa97e]">
            Comprehensive Domains
          </span>

          <h1 className="text-4xl md:text-5xl font-serif mt-4 leading-tight text-white">
            Our Practice Areas. Your Legal Shield.
          </h1>

          <p className="max-w-2xl mt-6 text-base text-blue-50 leading-relaxed mx-auto">
            We provide comprehensive, high-caliber legal counsel across multiple
            disciplines. From complex corporate disputes to global compliance
            and private asset protection, our dedicated practice areas are
            structured to defend your interests, minimize risks, and deliver
            decisive solutions.
          </p>
        </div>
      </section>
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-[#caa97e] text-xs tracking-widest uppercase">
            Our Practice Areas
          </span>
          <h2 className="text-3xl font-serif mt-3">Have A Look</h2>
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
                litigation interests represented on the highest level of detail.
              </p>
            </div>
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
          </div>
          <div
            id="practice-well-planners"
            className="bg-white p-15 sm:p-15 border border-slate-100 hover:border-[#232734]/20 transition-all duration-300 flex flex-col group cursor-pointer justify-between hover:bg-white/10 hover:backdrop-blur-md border border-12/20 rounded-2xl transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
          >
            <div>
              <div className="w-12 h-12 rounded-lg border border-[#232734]/20 flex items-center justify-center mb-6 group-hover:bg-[#232734] group-hover:text-white transition-all text-[#232734]">
                <Blocks className="w-7 h-7" />
              </div>
              <h3 className="font-sans text-2xl font-normal text-[#232734] mb-3">
                Employment & Labor Law
              </h3>
              <p className="text-xl text-slate-500 leading-relaxed font-light max-w-lg mb-6">
                Navigating complex workplace regulations, wage disputes,
                employment contracts, and compliance strategies for modern
                corporate environments.
              </p>
            </div>
          </div>
          <div
            id="practice-well-planners"
            className="bg-white p-15 sm:p-15 border border-slate-100 hover:border-[#232734]/20 transition-all duration-300 flex flex-col group cursor-pointer justify-between hover:bg-white/10 hover:backdrop-blur-md border border-12/20 rounded-2xl transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
          >
            <div>
              <div className="w-12 h-12 rounded-lg border border-[#232734]/20 flex items-center justify-center mb-6 group-hover:bg-[#232734] group-hover:text-white transition-all text-[#232734]">
                <Landmark className="w-7 h-7" />
              </div>
              <h3 className="font-sans text-2xl font-normal text-[#232734] mb-3">
                Banking & Financial Law
              </h3>
              <p className="text-xl text-slate-500 leading-relaxed font-light max-w-lg mb-6">
                Providing sophisticated legal counsel on complex loan
                agreements, regulatory frameworks, compliance, and structured
                asset resolutions.
              </p>
            </div>
          </div>
          <div
            id="practice-well-planners"
            className="bg-white p-15 sm:p-15 border border-slate-100 hover:border-[#232734]/20 transition-all duration-300 flex flex-col group cursor-pointer justify-between hover:bg-white/10 hover:backdrop-blur-md border border-12/20 rounded-2xl transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
          >
            <div>
              <div className="w-12 h-12 rounded-lg border border-[#232734]/20 flex items-center justify-center mb-6 group-hover:bg-[#232734] group-hover:text-white transition-all text-[#232734]">
                <PanelBottom className="w-7 h-7" />
              </div>
              <h3 className="font-sans text-2xl font-normal text-[#232734] mb-3">
                Mergers & Acquisitions
              </h3>
              <p className="text-xl text-slate-500 leading-relaxed font-light max-w-lg mb-6">
                Strategic legal oversight for corporate structuring, joint
                ventures, cross-border transactions, and comprehensive due
                diligence. Button: VIEW DETAILS
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <Footer />
      {/* Scroll to Top button */}
      <ScrollToTop />
    </div>
  );
};

export default ServicePage;

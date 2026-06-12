import React, { useState } from 'react'

const Price = () => {
      const [billingPeriod, setBillingPeriod] = useState<"monthly" | "yearly">(
        "monthly",
      );
  return (
    <div>
      <section id="pricing" className="py-24 px-6 max-w-7xl mx-auto w-full">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#caa97e] font-bold text-xs uppercase tracking-[0.3em] mb-3 block">
            Boutique Rates
          </span>
          <h2 className="italic text-3xl sm:text-4xl md:text-5xl font-serif font-normal text-[#232734] tracking-tight leading-tight">
            Clear, Accountable Pricing
          </h2>
          <div className="w-12 h-[1px] bg-[#caa97e] mx-auto my-4"></div>
          <p className="text-base sm:text-base text-slate-500 leading-relaxed tracking-wider font-light mt-4">
            We provide structured packages. Choose a sophisticated legal service
            model optimized at an industry-leading rate.
          </p>

          {/* Toggle pill button */}
          <div className="inline-flex items-center gap-1 bg-slate-100 p-1 mt-10 md:mt-12 rounded-none border border-slate-200">
            <button
              id="billing-monthly"
              onClick={() => setBillingPeriod("monthly")}
              className={`px-5 py-2 text-[10px] font-extrabold uppercase tracking-widest transition-all duration-300 cursor-pointer ${
                billingPeriod === "monthly"
                  ? "bg-[#232734] text-[#caa97e]"
                  : "text-slate-500 hover:text-[#232734]"
              }`}
            >
              Monthly
            </button>
            <button
              id="billing-yearly"
              onClick={() => setBillingPeriod("yearly")}
              className={`px-5 py-2 text-[10px] font-extrabold uppercase tracking-widest transition-all duration-300 cursor-pointer ${
                billingPeriod === "yearly"
                  ? "bg-[#232734] text-[#caa97e]"
                  : "text-slate-500 hover:text-[#232734]"
              }`}
            >
              Yearly
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch pt-2">
          {/* Card 1 - Criminal Law */}
          <div
            id="price-card-criminal"
            className="bg-white border border-slate-150 p-8 flex flex-col justify-between hover:border-slate-350 hover:shadow-lg transition-all duration-300"
          >
            <div>
              <span className="text-[10px] font-extrabold text-[#232734] uppercase tracking-[0.25em] text-center block mb-5">
                CRIMINAL TRIAL LAW
              </span>

              <div className="flex justify-center items-baseline mb-6 border-y border-slate-100 py-4">
                <span className="text-base text-slate-400 font-serif font-light">
                  $
                </span>
                <span className="text-5xl font-serif font-normal text-[#232734] tracking-tight">
                  {billingPeriod === "monthly" ? "790" : "650"}
                </span>
                <span className="text-[10px] font-sans font-medium text-slate-400 ml-1.5 uppercase">
                  /{billingPeriod === "monthly" ? "mo" : "mo billing yearly"}
                </span>
              </div>

              <ul className="space-y-4 mb-8 text-center text-xs text-slate-500 tracking-wide font-light">
                <li className="border-b border-dashed border-slate-100 pb-2">
                  Analyzing Business Affairs
                </li>
                <li className="border-b border-dashed border-slate-100 pb-2">
                  Structured Knowledge Management
                </li>
                <li className="border-b border-dashed border-slate-100 pb-2 font-medium text-slate-600">
                  24/7 Litigation Account Representative
                </li>
                <li className="text-slate-200 select-none">—</li>
                <li className="text-slate-200 select-none">—</li>
              </ul>
            </div>

            <button
              className="w-full py-4.5 bg-slate-100 hover:bg-[#232734] hover:text-[#caa97e] transition-colors duration-300 text-slate-700 text-xs font-bold uppercase tracking-widest rounded-none border border-slate-200 cursor-pointer"
              onClick={() =>
                alert(
                  `Service Criminal Law added to your checkout for $${billingPeriod === "monthly" ? "790" : "650"}/mo.`,
                )
              }
            >
              PURCHASE SERVICE
            </button>
          </div>

          {/* Card 2 - Immigration Law (Primary Highlighted card) */}
          <div
            id="price-card-immigration"
            className="bg-white border-2 border-[#caa97e] p-8 flex flex-col justify-between shadow-xl relative hover:shadow-2xl transition-all duration-300 scale-100 md:scale-105"
          >
            {/* Featured Ribbons or Tags */}
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#caa97e] text-[#232734] text-[10px] tracking-[0.2em] font-extrabold uppercase px-5 py-1.5 shadow-sm">
              RECOMMENDED
            </div>

            <div>
              <span className="text-[10px] font-extrabold text-[#caa97e] uppercase tracking-[0.25em] text-center block mb-5 mt-2">
                IMMIGRATION LAW
              </span>

              <div className="flex justify-center items-baseline mb-6 border-y border-slate-100 py-4">
                <span className="text-base text-slate-400 font-serif font-light">
                  $
                </span>
                <span className="text-5xl font-serif font-normal text-[#232734] tracking-tight">
                  {billingPeriod === "monthly" ? "690" : "550"}
                </span>
                <span className="text-[10px] font-sans font-medium text-slate-400 ml-1.5 uppercase">
                  /{billingPeriod === "monthly" ? "mo" : "mo billing yearly"}
                </span>
              </div>

              <ul className="space-y-4 mb-8 text-center text-xs text-slate-500 tracking-wide font-light">
                <li className="border-b border-dashed border-slate-100 pb-2">
                  Immediate Defect Case Analysis
                </li>
                <li className="border-b border-dashed border-slate-100 pb-2 font-medium text-slate-600">
                  24/7 Rapid Incident Support
                </li>
                <li className="border-b border-dashed border-slate-100 pb-2">
                  Full Online Regulatory Database Info
                </li>
                <li className="border-b border-dashed border-slate-100 pb-2">
                  2 Dedicated Legal Defense Advisers
                </li>
                <li className="text-slate-200 select-none">—</li>
              </ul>
            </div>

            <button
              className="w-full py-4.5 bg-[#232734] text-[#caa97e] hover:bg-[#caa97e] hover:text-white transition-all duration-300 text-xs font-bold uppercase tracking-widest rounded-none shadow cursor-pointer"
              onClick={() =>
                alert(
                  `Service Immigration Law added to your checkout for $${billingPeriod === "monthly" ? "690" : "550"}/mo.`,
                )
              }
            >
              PURCHASE SERVICE
            </button>
          </div>

          {/* Card 3 - Family Law */}
          <div
            id="price-card-family"
            className="bg-white border border-slate-150 p-8 flex flex-col justify-between hover:border-slate-350 hover:shadow-lg transition-all duration-300"
          >
            <div>
              <span className="text-[10px] font-extrabold text-[#232734] uppercase tracking-[0.25em] text-center block mb-5">
                FAMILY LAW DIRECTIVES
              </span>

              <div className="flex justify-center items-baseline mb-6 border-y border-slate-100 py-4">
                <span className="text-base text-slate-400 font-serif font-light">
                  $
                </span>
                <span className="text-5xl font-serif font-normal text-[#232734] tracking-tight">
                  {billingPeriod === "monthly" ? "1190" : "990"}
                </span>
                <span className="text-[10px] font-sans font-medium text-slate-400 ml-1.5 uppercase">
                  /{billingPeriod === "monthly" ? "mo" : "mo billing yearly"}
                </span>
              </div>

              <ul className="space-y-4 mb-8 text-center text-xs text-slate-500 tracking-wide font-light">
                <li className="border-b border-dashed border-slate-100 pb-2">
                  Strategic Asset Split Advisory
                </li>
                <li className="border-b border-dashed border-slate-100 pb-2">
                  Corporate Asset Partitioning
                </li>
                <li className="border-b border-dashed border-slate-100 pb-2 font-medium text-slate-600 font-semibold">
                  24/6 Support &amp; Arbitration Representation
                </li>
                <li className="border-b border-dashed border-slate-100 pb-2">
                  Fully Guaranteed Statutory Alignment
                </li>
                <li className="border-b border-slate-100 pb-2">
                  100% Risk Defusal Plan
                </li>
              </ul>
            </div>

            <button
              className="w-full py-4.5 bg-[#232734] text-white hover:bg-[#caa97e] hover:text-[#232734] transition-all duration-300 text-xs font-bold uppercase tracking-widest rounded-none shadow-sm cursor-pointer"
              onClick={() =>
                alert(
                  `Service Familly Law added to your checkout for $${billingPeriod === "monthly" ? "1190" : "990"}/mo.`,
                )
              }
            >
              PURCHASE SERVICE
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Price

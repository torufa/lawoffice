
import React, { useState } from 'react'
import one from '../assets/case_study/one.jpg'
import two from '../assets/case_study/two.jpg'
import three from '../assets/case_study/three.jpg'
import four from '../assets/case_study/four.jpg'
import five from '../assets/case_study/five.jpg'
import six from '../assets/case_study/six.png'

const CaseStudies = () => {
    interface CaseStudy {
      id: number;
      title: string;
      category: "Business" | "Criminal" | "Family Matters" | "Real Estate";
      subtitle: string;
      image: string;
      spanClass: string;
    }
      const [activeCategory, setActiveCategory] = useState<string>("All");
       const caseStudies: CaseStudy[] = [
         {
           id: 1,
           title: "Injury",
           category: "Family Matters",
           subtitle: "Family Injury Issues",
           image:
             one,
           spanClass: "md:col-span-1 md:row-span-2",
         },
         {
           id: 2,
           title: "Neglect Dispute",
           category: "Family Matters",
           subtitle: "Child Safe Protection",
           image:
             two,
           spanClass: "md:col-span-1 md:row-span-1",
         },
         {
           id: 3,
           title: "Custody Row",
           category: "Family Matters",
           subtitle: "Sole Parental Rights",
           image:
             three,
           spanClass: "md:col-span-1 md:row-span-2",
         },
         {
           id: 4,
           title: "Divorce Settlement",
           category: "Real Estate",
           subtitle: "Asset & Property Division",
           image:
             four,
           spanClass: "md:col-span-1 md:row-span-1",
         },
         {
           id: 5,
           title: "Corporate Breach",
           category: "Business",
           subtitle: "Litigation & Non-Disclosure",
           image:
             five,
           spanClass: "md:col-span-1 md:row-span-1",
         },
         {
           id: 6,
           title: "Criminal Offence",
           category: "Criminal",
           subtitle: "Juvenile Trial Defense",
           image:
             six,
           spanClass: "md:col-span-1 md:row-span-1",
         },
       ];
       const filteredCaseStudies =
         activeCategory === "All"
           ? caseStudies
           : caseStudies.filter((cs) => cs.category === activeCategory);
  return (
    <div>
      <section
        id="case-studies"
        className="py-24 px-6 max-w-7xl mx-auto w-full"
      >
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-[#caa97e] font-bold text-xs uppercase tracking-[0.3em] mb-3 block">
            Litigation Records
          </span>
          <h2 className="text-3xl sm:text-3xl md:text-4xl font-serif italic font-medium uppercase text-[#232734] tracking-wide leading-tight">
            Featured Case Studies
          </h2>
          <div className="w-12 h-[1px] bg-[#caa97e] mx-auto my-4"></div>
        </div>

        {/* Dynamic Category Filtering Nav Tabs menu in Premium style */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 md:gap-4 mb-12">
          {["All", "Business", "Criminal", "Family Matters", "Real Estate"].map(
            (category) => (
              <button
                key={category}
                id={`tab-cat-${category.replace(/\s+/g, "-").toLowerCase()}`}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 text-xs font-bold uppercase tracking-widest rounded-none border transition-all duration-300 cursor-pointer ${
                  activeCategory === category
                    ? "bg-[#232734] text-[#caa97e] border-[#232734] shadow-sm"
                    : "bg-white hover:bg-slate-50 border-slate-200 text-slate-500 hover:text-[#232734]"
                }`}
              >
                {category}
              </button>
            ),
          )}
        </div>

        {/* High-Density Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[250px]">
          {filteredCaseStudies.map((study) => (
            <div
              key={study.id}
              id={`case-card-${study.id}`}
              className={`relative overflow-hidden group rounded-none border border-slate-100 ${study.spanClass} h-full transition-all duration-500`}
            >
              {/* Photo */}
              <img
                src={study.image}
                alt={study.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover grayscale brightness-90 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
              />

              {/* Shaded bottom left overlay label */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#232734]/90 via-[#232734]/30 to-transparent flex flex-col justify-end p-6">
                {/* Horizontal line pattern overlay decoration */}
                <div className="absolute inset-x-0 bottom-0 top-1/2 opacity-10 pointer-events-none bg-[linear-gradient(45deg,_#555_25%,_transparent_25%,_transparent_75%,_#555_75%,_#555),_linear-gradient(45deg,_#555_25%,_transparent_25%,_transparent_75%,_#555_75%,_#555)] background-size-[4px_4px]"></div>

                <div className="relative z-10 transition-transform duration-300 group-hover:translate-x-1">
                  <h4 className="text-white text-lg font-serif tracking-wide leading-snug">
                    {study.title}
                  </h4>
                  <span className="text-[10px] text-[#caa97e] font-sans font-semibold tracking-widest uppercase block mt-1">
                    {study.subtitle}
                  </span>
                </div>
              </div>

              {/* Full overlay on hovering */}
              <div className="absolute inset-0 bg-[#caa97e]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default CaseStudies

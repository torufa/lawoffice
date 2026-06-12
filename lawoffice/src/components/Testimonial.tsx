import React, { useState } from 'react'
import one from '../assets/testimonial/one.png'
import two from '../assets/testimonial/two.png'
import three from '../assets/testimonial/three.png'
import { Link } from 'react-router-dom'

const Testimonial = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  interface Testimonial {
    name: string;
    role: string;
    image: string;
    quote: string;
  }
const testimonials: Testimonial[] = [
  {
    name: "Sarah Doe",
    role: "Director of ART Media",
    image:
      one,
    quote:
      "Lawers provide a professional and accountable Family Law practice without fear of the referrer's reputation being adversely affected. They are very friendly and hard workers. They give me full time, which I want. I am happy to work with them. I recommended them to work with them. I wanna give them 5-star rating.",
  },
  {
    name: "Jessica Vance",
    role: "Founder of Global Solutions",
    image:
      two,
    quote:
      "The team provided superb representation for our complex commerce disputes. Their communication is clear, prompt, and they handle everything efficiently. I couldn't be happier with our legal counsel and will definitely hire them again for future corporate representation.",
  },
  {
    name: "Robert Harrison",
    role: "Real Estate Investor",
    image:
      three,
    quote:
      "My property acquisition issues were handled flawlessly by the loan lawyers and real estate specialists here. Real experts who put the client first. I always felt highly supported and clear on my regulatory options. Strongly recommend this firm to other commercial clients.",
  },
];
  return (
    <div>
      <section
        id="testimonials"
        className="py-24 bg-slate-50 border-t border-slate-200"
      >
        <div className="max-w-7xl mx-auto px-6 w-full">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[#caa97e] font-bold text-xs uppercase tracking-[0.3em] mb-3 block">
              Testimonials
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-normal text-[#232734] tracking-tight leading-tight">
              Our Happy <span className="italic">Clients.</span>
            </h2>
            <div className="w-12 h-[1px] bg-[#caa97e] mx-auto my-4"></div>
            <p className="text-base sm:text-base text-slate-500 leading-relaxed tracking-wider font-light mt-4">
              Over 577+ clients turn to us for advice. Read why corporations
              recommend our diligent team counselors.
            </p>
          </div>

          <div className="max-w-5xl mx-auto bg-white rounded-none shadow-lg border border-slate-100 overflow-hidden min-h-[350px] flex flex-col md:flex-row items-stretch transition-all duration-500">
            <div className="w-full md:w-2/5 aspect-square md:aspect-auto relative shrink-0 bg-slate-100">
              <img
                src={testimonials[activeSlide].image}
                alt={testimonials[activeSlide].name}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover hover:grayscale hover:contrast-[1.05] transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#232734]/25 to-transparent pointer-events-none"></div>
            </div>

            {/* Right side quote content */}
            <div className="w-full md:w-3/5 p-8 sm:p-10 flex flex-col justify-between relative">
              <div>
                {/* Slides Indicators / Dots in TOP position as shown in layout */}
                <div className="flex gap-2 mb-6">
                  {testimonials.map((_, dotIdx) => (
                    <button
                      key={dotIdx}
                      id={`testimonial-dot-${dotIdx}`}
                      onClick={() => setActiveSlide(dotIdx)}
                      className={`w-4 h-1 rounded-none transition-all duration-300 cursor-pointer ${
                        activeSlide === dotIdx
                          ? "bg-[#232734] w-8"
                          : "bg-slate-300 hover:bg-[#caa97e]"
                      }`}
                      aria-label={`Go to slide ${dotIdx + 1}`}
                    />
                  ))}
                </div>

                {/* Quote details */}
                <div className="mb-6">
                  <p className="text-[#232734] text-sm md:text-base leading-relaxed tracking-wide italic font-serif text-slate-700">
                    "{testimonials[activeSlide].quote}"
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100">
                <h4 className="text-[#232734] text-xs font-bold tracking-[0.15em] uppercase">
                  {testimonials[activeSlide].name}
                </h4>
                <span className="text-[10px] font-semibold text-slate-400 tracking-wider block mt-1 uppercase">
                  {testimonials[activeSlide].role}
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-9">
          <Link to="/testimonialPage">
            <button
              type="button"
              className="px-6 py-3 border border-[#1b2336] text-[#1b2336] text-xs font-bold uppercase tracking-widest hover:bg-[#1b2336] hover:text-white transition-all cursor-pointer shadow-sm hover:shadow-md duration-300"
            >
              View All
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Testimonial

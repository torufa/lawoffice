import { Link } from "react-router-dom";
import ScrollToTop from "../components/ScrollToTop";
import Footer from "../components/Footer";
import one from "../assets/testimonial/one.png";
import two from "../assets/testimonial/two.png";
import three from "../assets/testimonial/three.png";
import four from "../assets/testimonial/four.jpg";
import five from "../assets/testimonial/five.jpg";
import six from "../assets/testimonial/six.jpg";
import { useState } from "react";

const TestimonialPage = () => {
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
       image: one,
       quote:
         "Lawers provide a professional and accountable Family Law practice without fear of the referrer's reputation being adversely affected. They are very friendly and hard workers. They give me full time, which I want. I am happy to work with them. I recommended them to work with them. I wanna give them 5-star rating.",
     },
     {
       name: "Jessica Vance",
       role: "Founder of Global Solutions",
       image: two,
       quote:
         "The team provided superb representation for our complex commerce disputes. Their communication is clear, prompt, and they handle everything efficiently. I couldn't be happier with our legal counsel and will definitely hire them again for future corporate representation.",
     },
     {
       name: "Robert Harrison",
       role: "Real Estate Investor",
       image: three,
       quote:
         "My property acquisition issues were handled flawlessly by the loan lawyers and real estate specialists here. Real experts who put the client first. I always felt highly supported and clear on my regulatory options. Strongly recommend this firm to other commercial clients.",
     },
     {
       name: "David & Sarah Jenkins",
       role: "Homeowners & Founders, Jenkins Family Trust",
       image: four,
       quote:
         "Managing asset distribution and setting up a secure estate plan for our children felt overwhelming, but the family law team here made the entire process incredibly smooth. They listened to our concerns as a couple, explained every statutory trust mechanism clearly, and delivered an airtight roadmap. We finally have absolute peace of mind knowing our family's legacy is protected.",
     },
     {
       name: "Dr. Eleanor Vance",
       role: "VP of Regulatory Affairs, BioMed Solutions",
       image: five,
       quote:
         "As a senior executive navigating a complex transition and employment compliance issue, I needed legal counsel that was both razor-sharp and fiercely protective. The corporate defense specialists here provided masterful strategic guidance. They treated my case with immense dignity, ensuring my professional rights and decades of achievements were fully safeguarded.",
     },
     {
       name: "Thomas Albright",
       role: "Principal Architect & Managing Partner, Albright Group",
       image: six,
       quote:
         "When my commercial firm hit an intense contractual dispute that threatened our operations, I needed trial lawyers who didn't just talk, but delivered outcomes. This team took control of the litigation with unparalleled grit and tactical precision. Their outcome-driven courtroom defense saved my business from critical exposure. Truly the best in the industry.",
     },
   ];
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
              About
            </button>
          </Link>
          <Link to="/servicePage">
            <button
              type="button"
              className="text-left px-6 py-3 text-xs font-bold uppercase tracking-widest bg-[#1b2336] text-white transition-all cursor-pointer shadow-sm hover:shadow-md duration-300"
            >
              Practice Areas
            </button>
          </Link>
        </div>

        <div className="mx-auto px-6 py-20 max-w-5xl text-center">
          <span className="text-xs tracking-[0.4em] uppercase text-[#caa97e]">
            CLIENT TESTIMONIALS
          </span>

          <h1 className="text-4xl md:text-5xl font-serif mt-4 leading-tight text-white mx-auto">
            Trusted by Leaders. Proven by Outcomes.
          </h1>

          <p className="max-w-2xl mt-6 text-base text-blue-50 leading-relaxed mx-auto">
            True validation comes from the clients we protect. From navigating
            high-stakes corporate trials to securing critical digital assets,
            see how our tailored legal solutions have empowered businesses and
            individuals to move forward with absolute confidence.
          </p>
        </div>
      </section>
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-[#caa97e] text-xs tracking-widest uppercase">
            EXPLORE OUR EXPERTISE
          </span>
          <h2 className="text-3xl font-serif mt-3">
            Our Practice Areas. Divine Justice.
          </h2>
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
      </section>

      {/* FOOTER */}
      <Footer />
      {/* Scroll to Top button */}
      <ScrollToTop />
    </div>
  );
};

export default TestimonialPage;

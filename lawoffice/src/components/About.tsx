import one from '../assets/about/one.png'
import two from '../assets/about/two.png'
import three from '../assets/about/three.jpg'
import { Link } from 'react-router-dom';

const About = () => {
    interface TeamMember {
      name: string;
      role: string;
      image: string;
      socials: { provider: string; url: string }[];
    }
  // Team Data
  const team: TeamMember[] = [
    {
      name: "ANNA TORPEY",
      role: "Finance Lawyer",
      image:
        one,
      socials: [
        { provider: "facebook", url: "#" },
        { provider: "linkedin", url: "#" },
        { provider: "instagram", url: "#" },
      ],
    },
    {
      name: "MICHAEL KANE",
      role: "Criminal Defence Lawyer",
      image:
        two,
      socials: [
        { provider: "facebook", url: "#" },
        { provider: "linkedin", url: "#" },
        { provider: "instagram", url: "#" },
      ],
    },
    {
      name: "MARK JOHNY",
      role: "Loan Lawyer",
      image:
        three,
      socials: [
        { provider: "facebook", url: "#" },
        { provider: "linkedin", url: "#" },
        { provider: "instagram", url: "#" },
      ],
    },
  ];
  return (
    <div>
      <section id="about-team" className="py-24 px-6 max-w-7xl mx-auto w-full">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#caa97e] font-bold text-xs uppercase tracking-[0.3em] mb-3 block">
            Boutique Trial Lawyers
          </span>
          <h2 className="text-3xl sm:text-3xl md:text-4xl font-serif italic font-medium uppercase text-[#1b2336] tracking-wide leading-tight">
            About Our Experts
          </h2>
          <div className="w-12 h-[1px] bg-[#caa97e] mx-auto my-4"></div>
          <p className="text-base sm:text-base text-[#696c73] leading-relaxed tracking-wide mt-5">
            Our qualified luxury-grade trial advocates represent you in
            high-stakes civil litigation cases, complex financing, statutory
            dispute resolution, and estate divisions.
          </p>
        </div>

        {/* Team profiles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {team.map((lawyer, index) => (
            <div
              key={index}
              id={`team-card-${index}`}
              className="bg-white border rounded-2xl border-slate-100 hover:border-slate-200/80 shadow-sm overflow-hidden group hover:-translate-y transition-all duration-300 flex flex-col justify-between"
            >
              {/* Photo Area with Name Label Overlay */}
              <div className="relative overflow-hidden aspect-[5/5] bg-slate-50">
                <img
                  src={lawyer.image}
                  alt={lawyer.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover grayscale brightness-95 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                />

                {/* Styled Absolute Overlay Label at the bottom center of card photo */}
                <div className="absolute bottom-0 left-0 w-full bg-[#1b2336] py-5 text-center transition-colors duration-300 group-hover:bg-[#caa97e]">
                  <h4 className="text-md font-sans font-semibold tracking-widest text-white group-hover:text-[#1b2336] uppercase">
                    {lawyer.name}
                  </h4>
                </div>
              </div>

              {/* Subtitle Info & Social Area underneath */}
              <div className="bg-white text-center py-6 px-4 border-t border-slate-100">
                <span className="text-xs font-medium text-slate-500 uppercase tracking-widest block mb-4">
                  {lawyer.role}
                </span>

                {/* Micro Social Circles */}
                <div className="flex gap-3 justify-center">
                  {lawyer.socials.map((soc, sIdx) => (
                    <a
                      key={sIdx}
                      href={soc.url}
                      aria-label={`${lawyer.name} ${soc.provider}`}
                      className="w-9 h-9 rounded-md border border-slate-200/80 bg-white hover:bg-[#232734] text-slate-500 hover:text-white flex items-center justify-center transition-colors duration-300"
                    >
                      {soc.provider === "facebook" && (
                        <span className="text-md font-bold ">
                          <i className="ri-facebook-fill"></i>
                        </span>
                      )}
                      {soc.provider === "linkedin" && (
                        <span className="text-md font-bold">
                          <i className="ri-linkedin-fill"></i>
                        </span>
                      )}
                      {soc.provider === "instagram" && (
                        <span className="text-md font-bold">
                          <i className="ri-instagram-fill"></i>
                        </span>
                      )}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-9">
          <Link to="/aboutPage">
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
};

export default About

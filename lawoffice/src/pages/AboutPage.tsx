import { History, Shield, Scale, Users } from "lucide-react";
import Footer from "../components/Footer";
import office from "../assets/about/office.png"
import one from "../assets/about/one.png";
import two from "../assets/about/two.png";
import three from "../assets/about/three.jpg";
import four from "../assets/about/four.jpg";
import five from "../assets/about/five.jpg";
import six from "../assets/about/six.jpg";
import { Link } from "react-router-dom";
import ScrollToTop from "../components/ScrollToTop";

const AboutPage = () => {
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
      image: one,
      socials: [
        { provider: "facebook", url: "#" },
        { provider: "linkedin", url: "#" },
        { provider: "instagram", url: "#" },
      ],
    },
    {
      name: "MICHAEL KANE",
      role: "Criminal Defence Lawyer",
      image: two,
      socials: [
        { provider: "facebook", url: "#" },
        { provider: "linkedin", url: "#" },
        { provider: "instagram", url: "#" },
      ],
    },
    {
      name: "MARK JOHNY",
      role: "Loan Lawyer",
      image: three,
      socials: [
        { provider: "facebook", url: "#" },
        { provider: "linkedin", url: "#" },
        { provider: "instagram", url: "#" },
      ],
    },
    {
      name: "Maria Rodriguez",
      role: "Intellectual Property Lawyer",
      image: four,
      socials: [
        { provider: "facebook", url: "#" },
        { provider: "linkedin", url: "#" },
        { provider: "instagram", url: "#" },
      ],
    },
    {
      name: "Priya Patel",
      role: "Family Lawyer",
      image: five,
      socials: [
        { provider: "facebook", url: "#" },
        { provider: "linkedin", url: "#" },
        { provider: "instagram", url: "#" },
      ],
    },
    {
      name: "Kenji Tanaka",
      role: "Immigration Lawyer",
      image: six,
      socials: [
        { provider: "facebook", url: "#" },
        { provider: "linkedin", url: "#" },
        { provider: "instagram", url: "#" },
      ],
    },
  ];
  return (
    <div className="text-[#232734]">
      <section
        className={`flex flex-col items-center text-center min-h-[60vh] bg-center bg-cover`}
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
          <Link to="/servicePage">
            <button
              type="button"
              className="text-left px-6 py-3 text-xs font-bold uppercase tracking-widest bg-[#1b2336] text-white transition-all cursor-pointer shadow-sm hover:shadow-md duration-300"
            >
              PRACTICE AREAS
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

        <div className="justify-center  mx-auto px-6 py-20 max-w-5xl">
          <span className="text-xs tracking-[0.4em] uppercase text-[#caa97e]">
            Boutique Trial Lawyers
          </span>

          <h1 className="text-4xl md:text-5xl font-serif mt-4 leading-tight text-white">
            Built on Trust. Driven by Justice.
          </h1>

          <p className="max-w-2xl mt-6 text-base text-blue-50 leading-relaxed">
            We are a boutique legal advisory firm specializing in high-stakes
            litigation, corporate defense, and financial dispute resolution. Our
            mission is simple — protect truth, structure justice, and deliver
            outcomes that matter.
          </p>
        </div>
      </section>

      {/* STORY */}
      <section className="max-w-5xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <span className="text-[#caa97e] text-xs tracking-widest uppercase">
            Our Story
          </span>

          <h2 className="text-3xl font-serif mt-3">
            Where Strategy Meets Responsibility
          </h2>

          <p className="mt-6 text-sm text-slate-600 leading-relaxed">
            Founded in 1994, Lex & Sovereign began as a small partnership
            between two trial lawyers who believed that legal representation
            should not feel mechanical. Over the years, we evolved into a
            trusted advisory firm for corporate clients, financial institutions,
            and private entities.
          </p>

          <p className="mt-4 text-sm text-slate-600 leading-relaxed">
            Every case we handle is treated as a responsibility—not just a file.
            We analyze, structure, and defend with precision, ensuring our
            clients are protected in every possible dimension.
          </p>
        </div>

        <div
          className="h-[350px] rounded-xl bg-cover bg-center"
          style={{
            backgroundImage: `url('${office}')`,
          }}
        ></div>
      </section>

      {/* VALUES */}
      <section className="bg-[#232734] text-white py-20 px-6">
        <div className="text-center mb-14">
          <span className="text-[#caa97e] text-xs tracking-widest uppercase">
            What We Stand For
          </span>
          <h2 className="text-3xl font-serif mt-3">
            Principles That Define Us
          </h2>
        </div>

        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">
          <div className="p-6 border border-slate-700 rounded-lg">
            <Shield className="text-[#caa97e]" />
            <h3 className="mt-4 font-semibold">Integrity First</h3>
            <p className="text-sm text-slate-300 mt-2">
              We maintain absolute transparency and ethical responsibility in
              every legal action we take.
            </p>
          </div>

          <div className="p-6 border border-slate-700 rounded-lg">
            <Scale className="text-[#caa97e]" />
            <h3 className="mt-4 font-semibold">Balanced Justice</h3>
            <p className="text-sm text-slate-300 mt-2">
              Every argument is built on fairness, logic, and legal precision.
            </p>
          </div>

          <div className="p-6 border border-slate-700 rounded-lg">
            <History className="text-[#caa97e]" />
            <h3 className="mt-4 font-semibold">Legacy Driven</h3>
            <p className="text-sm text-slate-300 mt-2">
              Three decades of legal experience shaping modern advocacy.
            </p>
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-[#caa97e] text-xs tracking-widest uppercase">
            Our Experts
          </span>
          <h2 className="text-3xl font-serif mt-3">Meet the Team</h2>
        </div>

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
      </section>

      {/* FOOTER */}
      <Footer />
      {/* Scroll to Top button */}
      <ScrollToTop />
    </div>
  );
};

export default AboutPage;

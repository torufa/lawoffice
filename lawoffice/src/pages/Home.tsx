import About from "../components/About";
import CaseStudies from "../components/CaseStudies";
import Counter from "../components/Counter";
import Header from "../components/Header"
import Hero from "../components/Hero";
import PracticeAreas from "../components/PracticeAreas";
import Price from "../components/Price";
import Testimonial from "../components/Testimonial";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";
const Home = () => {
  return (
    <div>
      {/* HEADER SECTION */}
      <Header />
      {/* HERO SECTION */}
      <Hero />
      {/* ABOUT OUR TEAM SECTION */}
      <About />
      {/* PRACTICE AREAS SECTION */}
      <PracticeAreas />
      {/* CASE STUDIES SECTION */}
      <CaseStudies />
      {/* METRICS & STATISTICS */}
      <Counter />
      {/* PRICING PLANS SECTION */}
      <Price />
      {/* TESTIMONIALS SECTION*/}
      <Testimonial />
      {/* CONTACT US*/}
      <Contact />
      {/* FOOTER BAR */}
      <Footer />
      {/* Scroll to Top button */}
      <ScrollToTop/>
    </div>
  );
}

export default Home

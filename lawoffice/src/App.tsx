import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import "remixicon/fonts/remixicon.css";
import AboutPage from "./pages/AboutPage";
import ServicePage from "./pages/ServicePage";
import TestimonialPage from "./pages/TestimonialPage";


export default function App() {

  return (
    <div className="min-h-screen bg-[#fcfcfd] flex flex-col selection:bg-[#1b2336] selection:text-white text-slate-800">
      {/* <Home />
      <About /> */}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutPage" element={<AboutPage/>} />
        <Route path="/servicePage" element={<ServicePage/>} />
        <Route path="/testimonialPage" element={<TestimonialPage/>} />
      </Routes>
    </div>
  );
}

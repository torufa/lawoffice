import React from 'react'
import logo from '../assets/favicon.png'

const Footer = () => {
  return (
    <div>
      <footer className="bg-[#232734] text-slate-300 p-10 md:p-12 shrink-0 border-t border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-8">
          <div className="w-full md:w-1/3">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-7 h-7 flex items-center justify-center">
                <img src={logo} alt="" />
              </div>
              <span className="font-bold text-base tracking-widest text-white">
                LawOffice
              </span>
            </div>
            <p className="text-slate-400 text-base leading-relaxed max-w-xs font-light">
              A full-service premier boutique law firm dedicated to excellence
              in legal practice and client stewardship. Founded on integrity,
              defined by results.
            </p>
          </div>

          <div className="flex flex-wrap gap-x-12 gap-y-6 md:gap-x-16">
            <div>
              <h4 className="text-[0.7rem] uppercase font-bold tracking-[0.2em] mb-4 text-[#caa97e]">
                Boston Court
              </h4>
              <p className="text-[0.8rem] text-slate-400 leading-loose font-light">
                100 Gavel Court Dr
                <br />
                Boston, MA 02108
                <br />
                T: +1 617 555 0198
              </p>
            </div>
            <div>
              <h4 className="text-[0.7rem] uppercase font-bold tracking-[0.2em] mb-4 text-[#caa97e]">
                London office
              </h4>
              <p className="text-[0.8rem] text-slate-400 leading-loose font-light">
                20 Fenchurch St
                <br />
                London EC3M 3BY
                <br />
                T: +44 20 7946 0143
              </p>
            </div>
            <div className="flex flex-col">
              <h4 className="text-[0.7rem] uppercase font-bold tracking-[0.2em] mb-4 text-[#caa97e]">
                Connect
              </h4>
              <div className="flex gap-3">
                <div className="w-6 h-6 hover:border-b p-4 flex items-center justify-center hover:border-[#caa97e] hover:text-[#caa97e] cursor-pointer transition-colors duration-500">
                  <span className="text-base font-bold">
                    <i className="ri-facebook-fill"></i>
                  </span>
                </div>
                <div className="w-6 h-6 hover:border-b p-4 flex items-center justify-center hover:border-[#caa97e] hover:text-[#caa97e] cursor-pointer transition-colors duration-300">
                  <span className="text-base font-bold">
                    <i className="ri-linkedin-fill"></i>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto mt-10 pt-6 border-t border-slate-800 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-[0.8rem] text-slate-500 tracking-widest uppercase">
            Copyrights {new Date().getFullYear()} &copy;{" "}
            <span className=" text-[#caa97e]">Law Office</span> | Crafted by{" "}
            <span className=" text-[#caa97e]">Torufa Toma</span>
          </p>
          <div className="flex gap-6 text-[0.8rem] text-slate-500 tracking-widest uppercase mb-2 sm:mb-0">
            <a href="#privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#terms" className="hover:text-white transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer

import React from 'react'
import bg from '../assets/counter/background.png'

const Counter = () => {
  return (
    <div>
      <section
        id="statistics"
        className="relative bg-cover bg-left py-30 px-6 bg-fixed"
        style={{
          backgroundImage: `linear-gradient(rgb(27 35 54 / 5%), rgba(27, 35, 54, 0.94)), url('${bg}')`,
        }}
      >
        <div className="max-w-7xl mx-auto w-full relative z-10 text-white">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            {/* Stat 1 */}
            <div id="stat1" className="flex flex-col items-center">
              <span className="text-5xl md:text-6xl font-serif font-light text-[#caa97e] tracking-tight">
                +100
              </span>
              <span className="text-[1rem] font-bold tracking-[0.2em] text-slate-300 mt-2.5 uppercase">
                Lawyers and Advisors
              </span>
            </div>

            {/* Stat 2 */}
            <div id="stat2" className="flex flex-col items-center">
              <span className="text-5xl md:text-6xll font-serif font-light text-[#caa97e] tracking-tight">
                +50
              </span>
              <span className="text-[1rem] font-bold tracking-[0.2em] text-slate-300 mt-2.5 uppercase">
                Countries where we work
              </span>
            </div>

            {/* Stat 3 */}
            <div id="stat3" className="flex flex-col items-center">
              <span className="text-5xl md:text-6xl font-serif font-light text-[#caa97e] tracking-tight">
                +125K
              </span>
              <span className="text-[1rem] font-bold tracking-[0.2em] text-slate-300 mt-2.5 uppercase">
                Annual Pro bono hours
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Counter

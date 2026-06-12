import { useState } from "react";


const Contact = () => {
    const [formData, setFormData] = useState({
      name: "",
      email: "",
      phone: "",
      message: "",
    });
    const [isSubmitted, setIsSubmitted] = useState(false);
     const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
       e.preventDefault();
       setIsSubmitted(true);
       setTimeout(() => {
         setIsSubmitted(false);
         setFormData({ name: "", email: "", phone: "", message: "" });
       }, 4000);
     };
  return (
    <div>
      <section id="contact" className="py-24 px-6 max-w-7xl mx-auto w-full">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#caa97e] font-bold text-xs uppercase tracking-[0.3em] mb-3 block">
            Get in Touch
          </span>
          <h2 className="italic text-3xl sm:text-4xl md:text-5xl font-serif font-normal text-[#232734] tracking-tight leading-tight">
            Contact Us
          </h2>
          <div className="w-12 h-[1px] bg-[#caa97e] mx-auto my-4"></div>
          <p className="text-base sm:text-base text-slate-500 leading-relaxed tracking-wider font-light mt-4">
            Are you confused and want to discuss options? Contact our lawyers to
            get clear statutory guidance.
          </p>
        </div>

        {/* Content Box Container */}
        <div className="max-w-4xl mx-auto bg-white border border-slate-200/80 p-6 md:p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
            {/* Contact Form Column */}
            <div className="flex flex-col justify-center">
              {isSubmitted ? (
                <div className="bg-slate-50 text-slate-900 p-8 text-center border border-slate-200 animate-fade-in">
                  <span className="text-base font-serif font-bold block mb-2 text-[#232734]">
                    Message Sent Successfully!
                  </span>
                  <p className="text-xs font-light text-slate-600">
                    Our expert legal advocates will review and get back to you
                    shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Name field */}
                  <div className="relative">
                    <input
                      type="text"
                      required
                      placeholder="Enter your name..."
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="w-full text-base font-light text-slate-600 bg-transparent py-3 border-b border-slate-200 focus:border-[#caa97e] outline-none transition-colors"
                    />
                  </div>

                  {/* Email field */}
                  <div className="relative">
                    <input
                      type="email"
                      required
                      placeholder="Enter your email..."
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full text-base font-light text-slate-600 bg-transparent py-3 border-b border-slate-200 focus:border-[#caa97e] outline-none transition-colors"
                    />
                  </div>

                  {/* Phone field */}
                  <div className="relative">
                    <input
                      type="tel"
                      required
                      placeholder="Enter your phone..."
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      className="w-full text-base font-light text-slate-600 bg-transparent py-3 border-b border-slate-200 focus:border-[#caa97e] outline-none transition-colors"
                    />
                  </div>

                  {/* Message textarea */}
                  <div className="relative">
                    <textarea
                      rows={3}
                      required
                      placeholder="Enter your message..."
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      className="w-full text-base font-light text-slate-600 bg-transparent py-3 border-b border-slate-200 focus:border-[#caa97e] outline-none transition-colors resize-none"
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <button
                    id="submit-contact"
                    type="submit"
                    className="mt-4 px-6 py-3.5 bg-[#232734] text-[#caa97e] hover:bg-[#caa97e] hover:text-[#232734] transition-all duration-300 font-bold text-xs tracking-widest uppercase cursor-pointer"
                  >
                    SEND MESSAGE
                  </button>
                </form>
              )}
            </div>

            {/* Custom Styled Map Column representing the map */}
            <div
              id="office-map"
              className="relative w-full aspect-square md:h-auto min-h-[290px] overflow-hidden border border-slate-200 bg-slate-50"
            >
              {/* Premium Google Map Iframe Styled to match Boston legal office district */}
              <iframe
                src="https://maps.google.com/maps?q=boston%20court%20house&t=&z=14&ie=UTF8&iwloc=&output=embed"
                title="Law Office Map"
                className="w-full h-full border-none grayscale contrast-[1.05]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>

              {/* Pin indicator banner overlay */}
              <div className="absolute top-3 left-3 bg-[#232734] text-white p-4 shadow-lg pointer-events-none max-w-[200px] border border-slate-700/50">
                <h5 className="text-[10px] font-bold tracking-widest text-[#caa97e] uppercase">
                  LAW OFFICE
                </h5>
                <p className="text-[9px] font-light text-slate-300 mt-1">
                  100 Gavel Court Dr, Boston Legislative District, MA
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact

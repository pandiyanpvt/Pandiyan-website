import { useState } from 'react';
import emailjs from '@emailjs/browser';
import Section from "./Section.jsx";

export default function Contact() {
  const [result, setResult] = useState("");

  const SERVICE_ID = "service_n6tjde8";
  const TEMPLATE_ID = "template_3dvlfzg";
  // Public Key must be from the same EmailJS account that owns this service (Dashboard → Account)
  const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "LD01bYJyJ185WrACE";

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");

    const form = event.target;
    const formData = new FormData(form);

    formData.append("time", new Date().toLocaleString());

    try {
      const response = await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        Object.fromEntries(formData),
        PUBLIC_KEY
      );

      setResult("Success!");
      form.reset();
    } catch (error) {
      console.error(error);
      setResult(error?.text || error?.message || "Error");
    }
  };

  return (
    <Section id="contact" title="Get In Touch">
      <div className="grid lg:grid-cols-2 gap-10 md:gap-14 lg:gap-20">
        <div>
          <h3 className="text-xl sm:text-2xl font-bold text-neutral-900 mb-5 sm:mb-8">Let's discuss your project</h3>
          <p className="text-neutral-600 mb-8 sm:mb-12 leading-relaxed text-base sm:text-lg">
            Have a project in mind? We'd love to hear from you. Fill out the form and our team will get back within 24 hours.
          </p>

          <div className="space-y-5 sm:space-y-8">
            <div className="flex items-center gap-3 sm:gap-4 group">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-white border border-neutral-200 flex items-center justify-center group-hover:bg-yellow-400 group-hover:text-black transition-all shadow-sm shrink-0">
                <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div className="min-w-0">
                <div className="text-xs font-bold text-gray-500 uppercase tracking-widest">Email Us</div>
                <a href="mailto:pandiyanpvt@gmail.com" className="text-neutral-900 hover:text-yellow-400 font-medium text-sm sm:text-base truncate transition-colors">pandiyanpvt@gmail.com</a>
              </div>
            </div>

            <div className="flex items-center gap-3 sm:gap-4 group">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-white border border-neutral-200 flex items-center justify-center group-hover:bg-yellow-400 group-hover:text-black transition-all shadow-sm shrink-0">
                <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div className="min-w-0">
                <div className="text-xs font-bold text-gray-500 uppercase tracking-widest">Call Us</div>
                <a href="tel:+94743150590" className="text-neutral-900 hover:text-yellow-400 font-medium text-sm sm:text-base transition-colors">+94 74 315 0590</a>
              </div>
            </div>

            <div className="flex items-center gap-3 sm:gap-4 group">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-white border border-neutral-200 flex items-center justify-center group-hover:bg-yellow-400 group-hover:text-black transition-all shadow-sm shrink-0">
                <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div className="min-w-0">
                <div className="text-xs font-bold text-gray-500 uppercase tracking-widest">Visit Us</div>
                <a href="https://www.google.com/maps/place/THE+PANDIYAN+PVT+Ltd/@9.7950922,80.0407255,17z/data=!3m1!4b1!4m6!3m5!1s0x3affab004d911319:0xeeafa0aedec3c4c8!8m2!3d9.7950922!4d80.0407255!16s%2Fg%2F11yxw88vw3" target="_blank" rel="noopener noreferrer" className="text-neutral-900 hover:text-yellow-400 font-medium text-sm sm:text-base transition-colors">THE PANDIYAN PVT Ltd, Sri Lanka</a>
              </div>
            </div>
          </div>
        </div>

        <form className="p-5 sm:p-6 md:p-8 lg:p-10 rounded-2xl sm:rounded-3xl bg-white border border-neutral-200 space-y-5 sm:space-y-7 shadow-xl shadow-neutral-100/50" onSubmit={onSubmit}>
          <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
            <div className="space-y-2">
              <label className="text-sm font-bold text-neutral-500 uppercase tracking-wider">Full Name</label>
              <input
                type="text"
                name="name"
                className="w-full bg-white border border-neutral-200 rounded-xl px-5 py-3 text-neutral-900 focus:border-yellow-400 transition-colors outline-none"
                placeholder="John Doe"
                required
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold text-neutral-500 uppercase tracking-wider">Email Address</label>
              <input
                type="email"
                name="email"
                className="w-full bg-white border border-neutral-200 rounded-xl px-5 py-3 text-neutral-900 focus:border-yellow-400 transition-colors outline-none"
                placeholder="john@example.com"
                required
              />
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-sm font-bold text-neutral-500 uppercase tracking-wider">Subject</label>
            <input
              type="text"
              name="subject"
              className="w-full bg-white border border-neutral-200 rounded-xl px-5 py-3 text-neutral-900 focus:border-yellow-400 transition-colors outline-none"
              placeholder="Project Inquiry"
              required
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-bold text-neutral-500 uppercase tracking-wider">Your Message</label>
            <textarea
              rows="4"
              name="message"
              className="w-full bg-white border border-neutral-200 rounded-xl px-5 py-3 text-neutral-900 focus:border-yellow-400 transition-colors outline-none resize-none"
              placeholder="Tell us about your project..."
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-yellow-400 hover:bg-yellow-300 text-black font-black uppercase tracking-widest py-3 sm:py-4 rounded-xl transition-all shadow-lg hover:shadow-yellow-400/20 active:scale-[0.98] text-sm sm:text-base"
          >
            Send Message
          </button>
          {result && (
            <div className={`text-center text-xs sm:text-sm font-medium ${result === "Success!" ? "text-green-600" : "text-red-600"}`}>
              {result}
            </div>
          )}
        </form>
      </div>
    </Section>
  );
}



import Section from "./Section.jsx";

export default function Contact() {
  return (
    <Section id="contact" title="Get In Touch">
      <div className="grid lg:grid-cols-2 gap-16">
        <div>
          <h3 className="text-2xl font-bold text-neutral-900 mb-6">Let's discuss your project</h3>
          <p className="text-neutral-600 mb-10 leading-relaxed text-lg">
            Have a project in mind? We'd love to hear from you. Fill out the form and our team will get back to you within 24 hours.
          </p>

          <div className="space-y-6">
            <div className="flex items-center gap-4 group">
              <div className="w-12 h-12 rounded-xl bg-white border border-neutral-200 flex items-center justify-center group-hover:bg-yellow-400 group-hover:text-black transition-all shadow-sm">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <div className="text-xs font-bold text-gray-500 uppercase tracking-widest">Email Us</div>
                <div className="text-neutral-900 font-medium">contact@pandiyan.dev</div>
              </div>
            </div>

            <div className="flex items-center gap-4 group">
              <div className="w-12 h-12 rounded-xl bg-white border border-neutral-200 flex items-center justify-center group-hover:bg-yellow-400 group-hover:text-black transition-all shadow-sm">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <div className="text-xs font-bold text-gray-500 uppercase tracking-widest">Call Us</div>
                <div className="text-neutral-900 font-medium">+91 72000 00000</div>
              </div>
            </div>

            <div className="flex items-center gap-4 group">
              <div className="w-12 h-12 rounded-xl bg-white border border-neutral-200 flex items-center justify-center group-hover:bg-yellow-400 group-hover:text-black transition-all shadow-sm">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <div className="text-xs font-bold text-gray-500 uppercase tracking-widest">Visit Us</div>
                <div className="text-neutral-900 font-medium">102, Old Bus Stand, Salem, TN</div>
              </div>
            </div>
          </div>
        </div>

        <form className="p-10 rounded-3xl bg-white border border-neutral-200 space-y-6 shadow-xl shadow-neutral-100/50">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-bold text-neutral-500 uppercase tracking-wider">Full Name</label>
              <input
                type="text"
                className="w-full bg-white border border-neutral-200 rounded-xl px-5 py-3 text-neutral-900 focus:border-yellow-400 transition-colors outline-none"
                placeholder="John Doe"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold text-neutral-500 uppercase tracking-wider">Email Address</label>
              <input
                type="email"
                className="w-full bg-white border border-neutral-200 rounded-xl px-5 py-3 text-neutral-900 focus:border-yellow-400 transition-colors outline-none"
                placeholder="john@example.com"
              />
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-sm font-bold text-neutral-500 uppercase tracking-wider">Subject</label>
            <input
              type="text"
              className="w-full bg-white border border-neutral-200 rounded-xl px-5 py-3 text-neutral-900 focus:border-yellow-400 transition-colors outline-none"
              placeholder="Project Inquiry"
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-bold text-neutral-500 uppercase tracking-wider">Your Message</label>
            <textarea
              rows="4"
              className="w-full bg-white border border-neutral-200 rounded-xl px-5 py-3 text-neutral-900 focus:border-yellow-400 transition-colors outline-none resize-none"
              placeholder="Tell us about your project..."
            />
          </div>
          <button
            type="submit"
            className="w-full bg-yellow-400 hover:bg-yellow-300 text-black font-black uppercase tracking-widest py-4 rounded-xl transition-all shadow-lg hover:shadow-yellow-400/20 active:scale-[0.98]"
          >
            Send Message
          </button>
        </form>
      </div>
    </Section>
  );
}



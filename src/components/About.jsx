import { motion } from "framer-motion";
import Section from "./Section.jsx";

export default function About() {
  const stats = [
    { label: "Projects Delivered", value: "250+" },
    { label: "Happy Clients", value: "120+" },
    { label: "Expert Engineers", value: "45+" },
    { label: "Years Experience", value: "10+" },
  ];

  return (
    <section id="about" className="relative bg-white py-24 md:py-32 overflow-hidden transition-colors duration-300">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-24 h-full hidden xl:flex flex-col items-center justify-center border-r border-neutral-100">
        <div className="rotate-180 [writing-mode:vertical-rl] text-xs font-bold tracking-[0.3em] text-neutral-300 uppercase">
          Pandiyan Software Solutions
        </div>
      </div>

      {/* Huge Watermark */}
      <div className="absolute top-20 right-0 -translate-y-1/2 translate-x-1/4 pointer-events-none select-none overflow-hidden">
        <span className="text-[12rem] md:text-[20rem] font-black text-neutral-50 opacity-50">
          ABOUT
        </span>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pl-4 xl:pl-32">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left Column: Heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="h-1 w-12 bg-yellow-400"></div>
              <span className="text-sm font-bold uppercase tracking-widest text-neutral-500">Who We Are</span>
            </div>
            <h2 className="text-4xl md:text-6xl/tight font-black text-neutral-900">
              We are product <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">development</span> <br />
              specialists.
            </h2>
          </motion.div>

          {/* Right Column: Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <p className="text-lg md:text-xl text-neutral-600 leading-relaxed font-light">
              We believe that great software is born from clear thinking and bold execution. At Pandiyan, we don't just write code; we architect digital futures.
            </p>
            <p className="text-neutral-500 leading-relaxed">
              Since 2014, we have partnered with startups and enterprises alike to transform complex challenges into elegant, high-performance solutions. Our approach blends technical rigor with creative strategy.
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-8 pt-8 border-t border-neutral-100">
              {stats.map((stat, idx) => (
                <div key={idx}>
                  <div className="text-3xl md:text-4xl font-black text-neutral-900 mb-1">{stat.value}</div>
                  <div className="text-xs uppercase tracking-wider text-neutral-500 font-bold">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <a href="#contact" className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-neutral-900 hover:text-yellow-400 transition-colors group">
                Start a conversation
                <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}




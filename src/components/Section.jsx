import { motion } from "framer-motion";

export default function Section({ id, title, subtitle, children, className = "" }) {
  return (
    <section id={id} className={`bg-white text-neutral-900 relative overflow-hidden transition-colors duration-300 ${className}`}>
      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none"
        style={{ backgroundImage: 'radial-gradient(currentColor 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

      <div className="relative z-10 mx-auto max-w-7xl 3xl:max-w-8xl 4xl:max-w-9xl px-4 xs:px-6 sm:px-8 lg:px-12 xl:px-16 2xl:px-20 3xl:px-24 4xl:px-32 py-12 sm:py-16 md:py-20 lg:py-24 xl:py-28 2xl:py-32 3xl:py-40">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-8 sm:mb-12 md:mb-16 lg:mb-20"
        >
          {subtitle ? (
            <>
              <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                <div className="w-8 sm:w-12 lg:w-16 h-[2px] bg-[#f39c12]" />
                <span className="text-[#f39c12] text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl 2xl:text-2xl font-black uppercase tracking-[0.4em]">
                  {title}
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black text-neutral-900 leading-[1.1] tracking-tighter max-w-4xl">
                {subtitle}
              </h2>
            </>
          ) : (
            <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
              <div className="w-8 sm:w-12 lg:w-16 h-[2px] bg-[#f39c12]" />
              <span className="text-[#f39c12] text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl 2xl:text-2xl font-black uppercase tracking-[0.4em]">
                {title}
              </span>
            </div>
          )}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-neutral-600 leading-relaxed"
        >
          {children}
        </motion.div>
      </div>
    </section>
  );
}

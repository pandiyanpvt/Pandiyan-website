import { motion } from "framer-motion";

export default function Section({ id, title, subtitle, children, className = "" }) {
  return (
    <section id={id} className={`bg-white text-neutral-900 relative overflow-hidden transition-colors duration-300 ${className}`}>
      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none"
        style={{ backgroundImage: 'radial-gradient(currentColor 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-[2px] bg-[#f39c12]" />
            <span className="text-[#f39c12] text-xs font-black uppercase tracking-[0.4em]">
              {title}
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-neutral-900 leading-[1.1] tracking-tighter max-w-4xl">
            {subtitle || title}
          </h2>
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

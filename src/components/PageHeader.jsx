import { motion } from "framer-motion";

export default function PageHeader({ title, subtitle }) {
    return (
        <section className="relative pt-40 pb-20 bg-[#1a1f3c] overflow-hidden">
            {/* Background Decorative Elements - Matching Hero */}
            <div className="absolute inset-0 z-0">
                <div
                    className="absolute inset-0 opacity-10"
                    style={{
                        backgroundImage: 'radial-gradient(circle at 2px 2px, #4f46e5 1px, transparent 0)',
                        backgroundSize: '40px 40px'
                    }}
                />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-12 relative z-10 text-center lg:text-left">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-4xl"
                >
                    <div className="flex items-center justify-center lg:justify-start gap-3 mb-6 text-[#f39c12]">
                        <div className="w-12 h-[2px] bg-[#f39c12]" />
                        <span className="text-xs font-black uppercase tracking-[0.4em]">Exploration</span>
                    </div>
                    <h1 className="text-5xl md:text-7xl font-black text-white leading-tight mb-8 tracking-tighter uppercase">
                        {title}
                    </h1>
                    {subtitle && (
                        <p className="text-blue-100/70 text-lg md:text-xl max-w-2xl leading-relaxed mx-auto lg:mx-0">
                            {subtitle}
                        </p>
                    )}
                </motion.div>
            </div>
        </section>
    );
}

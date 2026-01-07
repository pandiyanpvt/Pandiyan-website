import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function HomeCTA() {
    return (
        <section className="py-20 bg-[#1a1f3c] relative overflow-hidden">
            {/* Decorative Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-yellow-400/10 rounded-full blur-[120px] pointer-events-none" />

            <div className="container mx-auto px-4 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-4xl md:text-5xl font-black text-white mb-8 leading-tight">
                        Ready to <span className="text-[#f39c12]">Secure Your Next</span> Project?
                    </h2>
                    <p className="text-blue-100/70 text-lg mb-12 max-w-2xl mx-auto">
                        Whether you're looking for a full development cycle or team augmentation,
                        we're here to help you scale your digital presence.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-6 justify-center">
                        <Link
                            to="/contact"
                            className="px-10 py-5 bg-[#f39c12] hover:bg-[#e67e22] text-white font-black uppercase tracking-widest rounded-xl transition-all shadow-xl shadow-orange-500/20 active:scale-95"
                        >
                            Sign the Contract
                        </Link>
                        <Link
                            to="/services"
                            className="px-10 py-5 bg-white/10 hover:bg-white/20 text-white font-black uppercase tracking-widest rounded-xl transition-all backdrop-blur-md border border-white/10"
                        >
                            Learn More
                        </Link>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

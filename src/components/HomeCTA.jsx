import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Users } from 'lucide-react';

export default function HomeCTA() {
    return (
        <section className="py-16 sm:py-20 md:py-24 lg:py-28 2xl:py-36 bg-[#1a1f3c] relative overflow-hidden">
            {/* Enhanced Decorative Glows */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] sm:w-[500px] md:w-[600px] lg:w-[700px] 2xl:w-[800px] h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px] 2xl:h-[800px] bg-yellow-400/10 rounded-full blur-[120px] pointer-events-none" />
            <motion.div
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.1, 0.2, 0.1]
                }}
                transition={{ duration: 8, repeat: Infinity }}
                className="absolute top-1/4 left-1/4 w-64 sm:w-80 md:w-96 lg:w-[400px] h-64 sm:h-80 md:h-96 lg:h-[400px] bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20"
            />
            <motion.div
                animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.1, 0.2, 0.1]
                }}
                transition={{ duration: 10, repeat: Infinity, delay: 2 }}
                className="absolute bottom-1/4 right-1/4 w-64 sm:w-80 md:w-96 lg:w-[400px] h-64 sm:h-80 md:h-96 lg:h-[400px] bg-yellow-500 rounded-full mix-blend-multiply filter blur-xl opacity-20"
            />

            <div className="container mx-auto px-3 sm:px-4 lg:px-8 xl:px-10 2xl:px-12 3xl:px-16 4xl:px-20 relative z-10 text-center max-w-[1920px]">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="bg-gradient-to-r from-yellow-500/20 to-purple-500/20 backdrop-blur-sm border border-white/10 rounded-2xl sm:rounded-3xl p-5 sm:p-8 md:p-10 lg:p-12 xl:p-16 2xl:p-20 max-w-4xl 3xl:max-w-5xl 4xl:max-w-6xl mx-auto w-full min-w-0"
                >
                    <Users className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 2xl:w-24 2xl:h-24 text-yellow-400 mx-auto mb-5 sm:mb-8" />
                    <h2 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-black text-white mb-5 sm:mb-8 leading-tight">
                        Ready to <span className="text-[#f39c12]">Start Your Next</span> Project?
                    </h2>
                    <p className="text-blue-100/70 text-xs sm:text-sm md:text-base lg:text-base xl:text-lg 2xl:text-xl mb-8 sm:mb-10 max-w-2xl 3xl:max-w-3xl mx-auto">
                        Whether you're looking for a full development cycle or team augmentation,
                        we're here to help you scale your digital presence.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                            <Link
                                to="/contact"
                                className="inline-block px-5 sm:px-6 md:px-8 lg:px-10 xl:px-12 py-2 sm:py-2.5 md:py-3 lg:py-3.5 bg-gradient-to-r from-[#f39c12] to-[#e67e22] hover:from-[#e67e22] hover:to-[#f39c12] text-white font-black uppercase tracking-widest rounded-lg sm:rounded-xl transition-all shadow-xl shadow-orange-500/30 text-xs sm:text-sm md:text-sm lg:text-base 2xl:text-lg"
                            >
                                Get Started
                            </Link>
                        </motion.div>
                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                            <Link
                                to="/services"
                                className="inline-block px-5 sm:px-6 md:px-8 lg:px-10 xl:px-12 py-2 sm:py-2.5 md:py-3 lg:py-3.5 bg-white/10 hover:bg-white/20 text-white font-black uppercase tracking-widest rounded-lg sm:rounded-xl transition-all backdrop-blur-md border border-white/10 text-xs sm:text-sm md:text-sm lg:text-base 2xl:text-lg"
                            >
                                Learn More
                            </Link>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

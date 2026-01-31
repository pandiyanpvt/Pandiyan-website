import { motion } from "framer-motion";

export default function PageHeader({ title, subtitle }) {
    return (
        <section className="relative pt-24 pb-8 bg-white">
            <div className="container mx-auto px-3 sm:px-4 lg:px-8 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-4xl mx-auto"
                >
                    <h1 className="text-5xl md:text-7xl font-black text-neutral-900 leading-tight tracking-tighter uppercase">
                        {title}
                    </h1>
                </motion.div>
            </div>
        </section>
    );
}

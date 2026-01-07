import { motion } from "framer-motion";
import Section from "./Section.jsx";

const testimonials = [
    {
        name: "Dr. Sarah Chen",
        role: "CTO, GlobalTech Solutions",
        content: "The Pandiyan team delivered our complex SaaS platform ahead of schedule. Their technical depth and attention to UI detail are world-class."
    },
    {
        name: "James Wilson",
        role: "Founder, InnovateRetail",
        content: "Working with Pandiyan was a game-changer. They didn't just write code; they partnered with us on product strategy and scaling."
    },
    {
        name: "Priyanka Sharma",
        role: "Product Manager, FinLink",
        content: "Their expertise in security and compliance gave us the confidence to launch our fintech app in record time. Highly recommended."
    }
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.15 }
    }
};

const itemVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 20 },
    visible: {
        opacity: 1,
        scale: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" }
    }
};

export default function Testimonials() {
    return (
        <Section id="testimonials" title="Client Voices">
            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                className="grid md:grid-cols-3 gap-8"
            >
                {testimonials.map((t, idx) => (
                    <motion.div
                        key={idx}
                        variants={itemVariants}
                        className="p-8 rounded-3xl bg-white border border-neutral-100 relative group hover:-translate-y-2 transition-all duration-500 shadow-sm hover:shadow-xl"
                    >
                        <div className="text-yellow-400 mb-6 flex gap-1">
                            {[...Array(5)].map((_, i) => (
                                <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                            ))}
                        </div>
                        <p className="text-neutral-600 italic mb-8 leading-relaxed">"{t.content}"</p>
                        <div>
                            <div className="text-neutral-900 font-bold">{t.name}</div>
                            <div className="text-neutral-500 text-xs uppercase tracking-widest mt-1">{t.role}</div>
                        </div>
                        <div className="absolute top-8 right-8 text-neutral-900/5 pointer-events-none">
                            <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017V14H17.017C15.9124 14 15.017 13.1046 15.017 12V10C15.017 8.89543 15.9124 8 17.017 8H19.017V6H14.017V4H19.017C20.1216 4 21.017 4.89543 21.017 6V12C21.017 13.1046 20.1216 14 19.017 14V16C19.017 17.1046 20.1216 18 21.017 18V21H14.017ZM3.01697 21L3.01697 18C3.01697 16.8954 3.9124 16 5.01697 16H8.01697V14H6.01697C4.9124 14 4.01697 13.1046 4.01697 12V10C4.01697 8.89543 4.9124 8 6.01697 8H8.01697V6H3.01697V4H8.01697C9.12154 4 10.017 4.89543 10.017 6V12C10.017 13.1046 9.12154 14 8.01697 14V16C8.01697 17.1046 9.12154 18 10.017 18V21H3.01697Z" />
                            </svg>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </Section>
    );
}

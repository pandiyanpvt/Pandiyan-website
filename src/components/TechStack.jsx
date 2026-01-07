import { motion } from "framer-motion";
import Section from "./Section.jsx";

const techs = [
    { name: "React", category: "Frontend" },
    { name: "Node.js", category: "Backend" },
    { name: "Python", category: "AI / Data" },
    { name: "AWS", category: "Cloud" },
    { name: "Next.js", category: "Frontend" },
    { name: "PostgreSQL", category: "Database" },
    { name: "Docker", category: "DevOps" },
    { name: "TypeScript", category: "Full Stack" },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.05 }
    }
};

const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: { duration: 0.4, ease: "easeOut" }
    }
};

export default function TechStack() {
    return (
        <Section id="tech" title="Our Technology Core">
            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                className="grid grid-cols-2 md:grid-cols-4 gap-6"
            >
                {techs.map((tech, idx) => (
                    <motion.div
                        key={idx}
                        variants={itemVariants}
                        className="p-6 rounded-2xl bg-white border border-neutral-100 hover:border-yellow-400 transition-all flex flex-col items-center justify-center text-center group active:scale-95 shadow-sm hover:shadow-md"
                    >
                        <div className="text-neutral-900 font-black text-xl mb-1 group-hover:text-yellow-400 transition-colors uppercase tracking-widest">{tech.name}</div>
                        <div className="text-neutral-500 text-[10px] uppercase font-bold tracking-[0.2em]">{tech.category}</div>
                    </motion.div>
                ))}
            </motion.div>
        </Section>
    );
}


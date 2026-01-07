import { motion } from "framer-motion";
import Section from "./Section.jsx";

const steps = [
    {
        number: "01",
        title: "Discovery & Strategy",
        description: "We dive deep into your business goals, target audience, and technical requirements to build a solid roadmap."
    },
    {
        number: "02",
        title: "Design & UX",
        description: "Our designers craft intuitive, high-fidelity prototypes that balance aesthetics with seamless user journeys."
    },
    {
        number: "03",
        title: "Agile Development",
        description: "We build your product in iterative sprints, ensuring transparency and flexibility as we bring it to life."
    },
    {
        number: "04",
        title: "Deployment & Growth",
        description: "After rigorous QA, we launch your platform and provide ongoing support to scale with your success."
    }
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.2 }
    }
};

const stepVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.6, ease: "easeOut" }
    }
};

export default function Process() {
    return (
        <Section id="process" title="Our Workflow">
            <div className="relative">
                {/* Connection line for desktop */}
                <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, delay: 0.5, ease: "easeInOut" }}
                    className="hidden lg:block absolute top-[40px] left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-yellow-400/30 to-transparent origin-left"
                />

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12"
                >
                    {steps.map((step, idx) => (
                        <motion.div key={idx} variants={stepVariants} className="relative group">
                            <div className="mb-6">
                                <div className="w-16 h-16 rounded-2xl bg-neutral-100 border border-neutral-200 flex items-center justify-center text-2xl font-black text-yellow-400 group-hover:bg-yellow-400 group-hover:text-black transition-all duration-500 shadow-xl group-hover:shadow-yellow-400/20 group-hover:scale-110">
                                    {step.number}
                                </div>
                            </div>
                            <h3 className="text-xl font-bold text-neutral-900 mb-4 group-hover:text-yellow-400 transition-colors uppercase tracking-tight">
                                {step.title}
                            </h3>
                            <p className="text-neutral-600 leading-relaxed text-sm">
                                {step.description}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </Section>
    );
}


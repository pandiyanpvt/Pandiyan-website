import { motion } from "framer-motion";
import Section from "./Section.jsx";

const projects = [
    {
        title: "MedTrack Pro",
        category: "Healthcare",
        description: "A comprehensive patient management dashboard for modern clinics, featuring real-time vitals monitoring and automated appointment scheduling.",
        image: "/projects/health-dashboard.png",
        tags: ["React", "Node.js", "MongoDB", "Socket.io"],
        color: "bg-blue-500"
    },
    {
        title: "AgriSmart Connect",
        category: "Agritech",
        description: "Mobile-first solution for farmers to track crop health using satellite imagery and IoT sensor data in real-time.",
        image: "/projects/agritech-mobile.png",
        tags: ["React Native", "Python", "TensorFlow", "AWS"],
        color: "bg-green-500"
    },
    {
        title: "RetailPulse Analytics",
        category: "E-Commerce",
        description: "Advanced analytics platform for high-volume e-commerce stores, identifying trends and optimizing inventory.",
        image: "/projects/ecommerce-analytics.png",
        tags: ["Next.js", "PostgreSQL", "Data Vis", "Redis"],
        color: "bg-purple-500"
    }
];

export default function FeaturedProjects() {
    return (
        <Section id="projects" title="Featured Projects" subtitle="Building Digital Excellence">
            <div className="grid lg:grid-cols-3 gap-8">
                {projects.map((project, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.2, duration: 0.6 }}
                        className="group relative rounded-3xl overflow-hidden bg-neutral-100 border border-neutral-200 hover:shadow-2xl hover:shadow-neutral-200 transition-all duration-500"
                    >
                        {/* Image Container */}
                        <div className="relative h-64 overflow-hidden">
                            <div className={`absolute inset-0 ${project.color}/10 group-hover:bg-transparent transition-colors z-10`} />
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                            />
                            <div className="absolute top-4 left-4 z-20">
                                <span className="px-4 py-2 bg-white/90 backdrop-blur-md rounded-full text-xs font-black uppercase tracking-widest text-neutral-900 shadow-lg">
                                    {project.category}
                                </span>
                            </div>
                        </div>

                        {/* Content */}
                        <div className="p-8">
                            <h3 className="text-2xl font-black text-neutral-900 mb-3 group-hover:text-yellow-500 transition-colors">
                                {project.title}
                            </h3>
                            <p className="text-neutral-600 mb-6 text-sm leading-relaxed">
                                {project.description}
                            </p>

                            {/* Tags */}
                            <div className="flex flex-wrap gap-2">
                                {project.tags.map((tag, i) => (
                                    <span
                                        key={i}
                                        className="px-3 py-1 bg-white border border-neutral-200 rounded-lg text-xs font-bold text-neutral-500 group-hover:border-yellow-400/50 group-hover:text-neutral-900 transition-all"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </Section>
    );
}

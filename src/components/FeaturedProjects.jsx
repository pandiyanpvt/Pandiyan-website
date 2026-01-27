import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Section from "./Section.jsx";
import { Star, ChevronRight } from 'lucide-react';

const projects = [
    {
        title: "POS System",
        category: "Retail",
        description: "A comprehensive point of sale system designed to streamline retail operations with real-time inventory management and seamless payment processing.",
        image: "/projects/pos-system.png",
        color: "bg-blue-500",
        url: "#"
    },
    {
        title: "DigiMax",
        category: "Digital Solutions",
        description: "A modern digital platform delivering innovative solutions for businesses looking to transform their digital presence.",
        image: "/projects/digimax.png",
        color: "bg-green-500",
        url: "https://digimaax.com/"
    },
    
    {
        title: "JSCarWash",
        category: "Automotive",
        description: "An efficient car wash management system that helps businesses manage bookings, services, and customer relationships seamlessly.",
        image: "/projects/jscarwash.png",
        color: "bg-purple-500",
        url: "https://www.jscarwash.com/"
    },
    {
        title: "JSmart",
        category: "Smart Solutions",
        description: "An intelligent platform providing smart solutions for modern businesses, combining automation and analytics for optimal performance.",
        image: "/projects/jsmart.png",
        color: "bg-orange-500",
        url: "https://jsmart.com.au/"
    }
];

export default function FeaturedProjects() {
    const [activeProject, setActiveProject] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveProject((prev) => (prev + 1) % projects.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <Section id="projects" title="Recent Projects">
            <div className="max-w-6xl 3xl:max-w-7xl 4xl:max-w-8xl mx-auto">
                {/* Carousel View */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeProject}
                        initial={{ opacity: 0, x: 100 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -100 }}
                        transition={{ duration: 0.5 }}
                        className="bg-white border-2 border-neutral-200 rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl"
                    >
                        <div className="md:flex">
                            <div className="md:w-1/2">
                                <img
                                    src={projects[activeProject].image}
                                    alt={projects[activeProject].title}
                                    className="w-full h-48 xs:h-56 sm:h-64 md:h-full object-cover"
                                />
                            </div>
                            <div className="md:w-1/2 p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12 2xl:p-16">
                                <div className="flex items-center mb-3 sm:mb-4">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 2xl:w-8 2xl:h-8 text-yellow-400 fill-current" />
                                    ))}
                                </div>
                                <div className="mb-3 sm:mb-4">
                                    <span className="px-3 py-1 sm:px-4 sm:py-2 md:px-5 md:py-2.5 bg-yellow-400/10 text-yellow-600 rounded-full text-[10px] xs:text-xs sm:text-sm md:text-base lg:text-lg 2xl:text-xl font-black uppercase tracking-widest border border-yellow-400/20">
                                        {projects[activeProject].category}
                                    </span>
                                </div>
                                <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-black text-neutral-900 mb-3 sm:mb-4">
                                    {projects[activeProject].title}
                                </h3>
                                <p className="text-sm sm:text-base md:text-lg lg:text-xl 2xl:text-2xl text-neutral-600 mb-4 sm:mb-6 leading-relaxed">
                                    {projects[activeProject].description}
                                </p>
                                {projects[activeProject].url && (
                                    <motion.a
                                        href={projects[activeProject].url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="inline-flex items-center text-yellow-500 font-bold group"
                                    >
                                        View Project
                                        <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                                    </motion.a>
                                )}
                            </div>
                        </div>
                    </motion.div>
                </AnimatePresence>

                {/* Navigation Dots */}
                <div className="flex justify-center mt-8 space-x-2">
                    {projects.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setActiveProject(index)}
                            className={`w-3 h-3 rounded-full transition-all duration-300 ${
                                activeProject === index ? 'bg-yellow-400 w-8' : 'bg-neutral-300 hover:bg-neutral-400'
                            }`}
                        />
                    ))}
                </div>

                {/* Grid View (Alternative - commented out, can be enabled) */}
                {/* <div className="grid lg:grid-cols-3 gap-8 mt-12">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2, duration: 0.6 }}
                            className="group relative rounded-3xl overflow-hidden bg-neutral-100 border border-neutral-200 hover:shadow-2xl hover:shadow-neutral-200 transition-all duration-500"
                        >
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
                            <div className="p-8">
                                <h3 className="text-2xl font-black text-neutral-900 mb-3 group-hover:text-yellow-500 transition-colors">
                                    {project.title}
                                </h3>
                                <p className="text-neutral-600 mb-6 text-sm leading-relaxed">
                                    {project.description}
                                </p>
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
                </div> */}
            </div>
        </Section>
    );
}

import { motion } from "framer-motion";
import Section from "./Section.jsx";
import { Link } from "react-router-dom";
import { Code, Smartphone, Cloud, Palette, ShoppingCart, Wrench, Share2 } from 'lucide-react';

const services = [
    {
        title: "Custom Software Development",
        description: "Tailored solutions built with modern stacks to solve your specific business challenges.",
        icon: Code
    },
    {
        title: "Web & Mobile Apps",
        description: "Stunning, high-performance applications for web and mobile (iOS & Android) that users love.",
        icon: Smartphone
    },
    {
        title: "Cloud & DevOps",
        description: "Secure, scalable cloud infrastructures and automated CI/CD pipelines using AWS, Azure, and Google Cloud.",
        icon: Cloud
    },
    {
        title: "UI/UX Design",
        description: "User-centric design that balances beautiful aesthetics with intuitive navigation and accessibility.",
        icon: Palette
    },
    {
        title: "E-Commerce Solutions",
        description: "Robust, scalable online stores with advanced inventory management and secure payment integrations.",
        icon: ShoppingCart
    },
    {
        title: "Maintenance & Support",
        description: "24/7 technical monitoring and long-term support to ensure your product remains cutting-edge and secure.",
        icon: Wrench
    },
    {
        title: "Social Media Management",
        description: "Comprehensive social media strategies, content creation, and community management to grow your online presence.",
        icon: Share2
    }
];

export default function ServicesShort() {
    return (
        <Section title="Our Services" id="services-short">
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 mb-12">
                {services.map((service, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1, duration: 0.6 }}
                        whileHover={{ y: -10, scale: 1.02 }}
                        className="p-8 rounded-3xl bg-white border-2 border-neutral-100 hover:border-yellow-400/50 hover:shadow-xl transition-all duration-300 text-center"
                    >
                        <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                            <service.icon className="w-8 h-8 text-white" />
                        </div>
                        <h3 className="text-xl font-bold text-neutral-900">{service.title}</h3>
                    </motion.div>
                ))}
            </div>
            <div className="text-center">
                <Link to="/services" className="text-neutral-900 font-bold hover:text-yellow-500 transition-colors inline-flex items-center gap-2">
                    View All Services
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </Link>
            </div>
        </Section>
    );
}

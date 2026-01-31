import { motion } from "framer-motion";
import Section from "./Section.jsx";
import { Link } from "react-router-dom";
import { Code, Smartphone, Cloud, Palette, ShoppingCart, Wrench, Share2 } from 'lucide-react';

const services = [
    {
        title: "Custom Software Development",
        description: "Tailored solutions built with modern stacks to solve your specific business challenges.",
        image: "/Custom Software Development.png",
        icon: Code
    },
    {
        title: "Web & Mobile Apps",
        description: "Stunning, high-performance applications for web and mobile (iOS & Android) that users love.",
        image: "/Web & Mobile Apps.png",
        icon: Smartphone
    },
    {
        title: "Cloud & DevOps",
        description: "Secure, scalable cloud infrastructures and automated CI/CD pipelines using AWS, Azure, and Google Cloud.",
        image: "/Cloud & DevOps.png",
        icon: Cloud
    },
    {
        title: "UI/UX Design",
        description: "User-centric design that balances beautiful aesthetics with intuitive navigation and accessibility.",
        image: "/UI/UX Design.png",
        icon: Palette
    },
    {
        title: "E-Commerce Solutions",
        description: "Robust, scalable online stores with advanced inventory management and secure payment integrations.",
        image: "/E-Commerce Solutions.png",
        icon: ShoppingCart
    },
    {
        title: "Maintenance & Support",
        description: "24/7 technical monitoring and long-term support to ensure your product remains cutting-edge and secure.",
        image: "/Maintenance & Support.png",
        icon: Wrench
    },
    {
        title: "Social Media Management",
        description: "Comprehensive social media strategies, content creation, and community management to grow your online presence.",
        image: "/Social Media Management.png",
        icon: Share2
    }
];

export default function ServicesShort() {
    return (
        <Section title="Our Services" id="services-short">
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-6 md:gap-8 lg:gap-12 mb-12 sm:mb-16">
                {services.map((service, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1, duration: 0.6 }}
                        whileHover={{ y: -10, scale: 1.02 }}
                        className="p-3 xs:p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-3xl bg-white border-2 border-neutral-100 hover:border-yellow-400/50 hover:shadow-xl transition-all duration-300 text-center min-w-0 overflow-hidden group"
                    >
                        {/* Service Image */}
                        <div className="-mx-3 xs:-mx-4 sm:-mx-6 md:-mx-8 -mt-3 xs:-mt-4 sm:-mt-6 md:-mt-8 mb-3 xs:mb-4 sm:mb-5 md:mb-6">
                            <img
                                src={service.image}
                                alt={service.title}
                                className="w-full h-24 xs:h-28 sm:h-32 md:h-40 object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                        </div>

                        <div className="w-10 h-10 xs:w-12 xs:h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-2 xs:mb-3 sm:mb-4">
                            <service.icon className="w-5 h-5 xs:w-6 xs:h-6 sm:w-8 sm:h-8 text-white" />
                        </div>
                        <h3 className="text-xs xs:text-sm sm:text-lg md:text-xl font-bold text-neutral-900 break-words leading-tight">{service.title}</h3>
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

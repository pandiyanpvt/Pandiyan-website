import { motion } from "framer-motion";
import Section from "./Section.jsx";
import { Link } from "react-router-dom";

const services = [
    {
        title: "Custom Software",
        description: "Tailored solutions built with modern stacks to solve your specific business challenges.",
        icon: "💻"
    },
    {
        title: "Mobile Apps",
        description: "High-performance applications for iOS & Android that users love.",
        icon: "📱"
    },
    {
        title: "Cloud Solutions",
        description: "Scalable infrastructures and automated CI/CD pipelines.",
        icon: "☁️"
    }
];

export default function ServicesShort() {
    return (
        <Section title="Our Core Expertise" id="services-short" subtitle="High-impact solutions for modern businesses">
            <div className="grid md:grid-cols-3 gap-8 mb-12">
                {services.map((service, index) => (
                    <div key={index} className="p-8 rounded-3xl bg-neutral-50 border border-neutral-100 hover:shadow-xl transition-all duration-300">
                        <div className="text-4xl mb-6">{service.icon}</div>
                        <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                        <p className="text-neutral-600 mb-6">{service.description}</p>
                    </div>
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

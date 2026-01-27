import { motion } from "framer-motion";
import Section from "./Section.jsx";

const services = [
  {
    title: "Custom Software Development",
    description: "Tailored solutions built with React, Node.js, and Python to solve your specific business challenges.",
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    )
  },
  {
    title: "Web & Mobile Apps",
    description: "Stunning, high-performance applications for web and mobile (iOS & Android) that users love.",
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    )
  },
  {
    title: "Cloud & DevOps",
    description: "Secure, scalable cloud infrastructures and automated CI/CD pipelines using AWS, Azure, and Google Cloud.",
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
      </svg>
    )
  },
  {
    title: "UI/UX Design",
    description: "User-centric design that balances beautiful aesthetics with intuitive navigation and accessibility.",
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-3" />
      </svg>
    )
  },
  {
    title: "E-Commerce Solutions",
    description: "Robust, scalable online stores with advanced inventory management and secure payment integrations.",
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
      </svg>
    )
  },
  {
    title: "Maintenance & Support",
    description: "24/7 technical monitoring and long-term support to ensure your product remains cutting-edge and secure.",
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    )
  },
  {
    title: "Social Media Management",
    description: "Comprehensive social media strategies, content creation, and community management to grow your online presence and engage your audience.",
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
      </svg>
    )
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function Services() {
  return (
    <Section id="service">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4 sm:gap-6 md:gap-8 lg:gap-10 2xl:gap-12"
      >
        {services.map((service, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="p-4 sm:p-6 md:p-8 lg:p-10 2xl:p-12 rounded-xl sm:rounded-2xl bg-white border border-neutral-100 hover:border-yellow-400/50 transition-all duration-300 group hover:-translate-y-2 shadow-sm hover:shadow-xl"
          >
            <div className="mb-4 sm:mb-6 md:mb-8 p-3 sm:p-4 md:p-5 rounded-lg sm:rounded-xl bg-yellow-400/10 inline-block group-hover:bg-yellow-400 transition-colors duration-300">
              <div className="text-yellow-400 group-hover:text-black transition-colors duration-300 [&_svg]:transition-colors">
                <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 2xl:w-16 2xl:h-16">
                  {service.icon}
                </div>
              </div>
            </div>
            <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl 2xl:text-4xl font-bold text-neutral-900 mb-2 sm:mb-3 md:mb-4 transition-colors">{service.title}</h3>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl 2xl:text-2xl text-neutral-600 leading-relaxed transition-colors">
              {service.description}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
}

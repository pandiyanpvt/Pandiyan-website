import { motion } from "framer-motion";
import Section from "./Section.jsx";

const iconClass = "w-full h-full";
const services = [
  {
    title: "Custom Software Development",
    description: "Tailored solutions built with React, Node.js, and Python to solve your specific business challenges.",
    image: "/Custom Software Development.png",
    icon: (
      <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    )
  },
  {
    title: "Web & Mobile Apps",
    description: "Stunning, high-performance applications for web and mobile (iOS & Android) that users love.",
    image: "/Web & Mobile Apps.png",
    icon: (
      <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    )
  },
  {
    title: "Cloud & DevOps",
    description: "Secure, scalable cloud infrastructures and automated CI/CD pipelines using AWS, Azure, and Google Cloud.",
    image: "/Cloud & DevOps.png",
    icon: (
      <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
      </svg>
    )
  },
  {
    title: "UI/UX Design",
    description: "User-centric design that balances beautiful aesthetics with intuitive navigation and accessibility.",
    image: "/UI/UX Design.png",
    icon: (
      <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-3" />
      </svg>
    )
  },
  {
    title: "E-Commerce Solutions",
    description: "Robust, scalable online stores with advanced inventory management and secure payment integrations.",
    image: "/E-Commerce Solutions.png",
    icon: (
      <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
      </svg>
    )
  },
  {
    title: "Maintenance & Support",
    description: "24/7 technical monitoring and long-term support to ensure your product remains cutting-edge and secure.",
    image: "/Maintenance & Support.png",
    icon: (
      <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    )
  },
  {
    title: "Social Media Management",
    description: "Comprehensive social media strategies, content creation, and community management to grow your online presence and engage your audience.",
    image: "/Social Media Management.png",
    icon: (
      <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
    <Section id="service" title="Our Services">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4 gap-3 sm:gap-5 md:gap-6 lg:gap-8 xl:gap-10 2xl:gap-12"
      >
        {services.map((service, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="p-4 sm:p-5 md:p-6 lg:p-8 xl:p-10 2xl:p-12 rounded-xl sm:rounded-2xl bg-white border-2 border-neutral-100 hover:border-yellow-400/50 transition-all duration-300 group hover:shadow-xl hover:-translate-y-1 min-w-0 flex flex-col overflow-hidden"
          >
            {/* Service Image */}
            <div className="mb-4 sm:mb-5 md:mb-6 -mx-4 sm:-mx-5 md:-mx-6 lg:-mx-8 xl:-mx-10 2xl:-mx-12 -mt-4 sm:-mt-5 md:-mt-6 lg:-mt-8 xl:-mt-10 2xl:-mt-12">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-32 xs:h-36 sm:h-40 md:h-48 lg:h-56 xl:h-64 2xl:h-72 object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            <div className="mb-3 sm:mb-4 md:mb-5 lg:mb-6 p-2.5 sm:p-3 md:p-4 rounded-lg sm:rounded-xl bg-yellow-400/10 inline-block w-fit group-hover:bg-yellow-400 transition-colors duration-300">
              <div className="text-yellow-600 group-hover:text-black transition-colors duration-300 [&_svg]:transition-colors">
                <div className="w-7 h-7 xs:w-8 xs:h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 lg:w-12 lg:h-12 xl:w-14 xl:h-14 2xl:w-16 2xl:h-16">
                  {service.icon}
                </div>
              </div>
            </div>
            <h3 className="text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl font-bold text-neutral-900 mb-1.5 sm:mb-2 md:mb-3 leading-tight break-words">
              {service.title}
            </h3>
            <p className="text-xs xs:text-sm sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-xl text-neutral-600 leading-relaxed break-words flex-1">
              {service.description}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
}

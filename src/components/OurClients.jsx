import { useState } from "react";
import { motion } from "framer-motion";
import Section from "./Section.jsx";
import { Building2 } from 'lucide-react';

// Client data
const clients = [
    {
        name: "DigiMax",
        logo: "/projects/DIGIMAAX_LOGO-01 1.png",
        category: "Digital Solutions",
        url: "https://digimaax.com/"
    },
    {
        name: "JSCarWash",
        logo: "/projects/js-logo.png",
        category: "Automotive",
        url: "https://www.jscarwash.com/"
    },
    {
        name: "JSmart",
        logo: "/projects/logo.png",
        category: "Smart Solutions",
        url: "https://jsmart.com.au/"
    }
];

// Client Logo Component with error handling
function ClientLogo({ client, index }) {
    const [imageError, setImageError] = useState(false);

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.6 }}
            whileHover={{ scale: 1.05, y: -5 }}
            className="group relative"
        >
            {client.url ? (
                <a
                    href={client.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                >
                    <div className="bg-white border-2 border-neutral-100 rounded-lg sm:rounded-xl p-3 sm:p-4 md:p-5 lg:p-6 h-20 xs:h-24 sm:h-28 md:h-32 lg:h-36 2xl:h-40 flex items-center justify-center hover:border-yellow-400/50 hover:shadow-xl transition-all duration-300 cursor-pointer">
                        <div className="w-full h-full flex items-center justify-center p-1">
                            {!imageError ? (
                                <img
                                    src={client.logo}
                                    alt={client.name}
                                    className="max-w-[85%] max-h-[85%] w-auto h-auto object-contain opacity-100 group-hover:opacity-100 transition-opacity duration-300"
                                    onError={() => setImageError(true)}
                                />
                            ) : (
                                <Building2 className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 2xl:w-14 2xl:h-14 text-neutral-300 group-hover:text-yellow-400 transition-colors" />
                            )}
                        </div>
                    </div>
                </a>
            ) : (
                <div className="bg-white border-2 border-neutral-100 rounded-lg sm:rounded-xl p-3 sm:p-4 md:p-5 lg:p-6 h-20 xs:h-24 sm:h-28 md:h-32 lg:h-36 2xl:h-40 flex items-center justify-center hover:border-yellow-400/50 hover:shadow-xl transition-all duration-300">
                    <div className="w-full h-full flex items-center justify-center p-1">
                        {!imageError ? (
                            <img
                                src={client.logo}
                                alt={client.name}
                                className="max-w-[85%] max-h-[85%] w-auto h-auto object-contain opacity-100 transition-opacity duration-300"
                                onError={() => setImageError(true)}
                            />
                        ) : (
                            <Building2 className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 2xl:w-14 2xl:h-14 text-neutral-300 group-hover:text-yellow-400 transition-colors" />
                        )}
                    </div>
                </div>
            )}
            {/* Client name tooltip on hover */}
            <div className="absolute -bottom-6 sm:-bottom-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                <span className="text-[10px] xs:text-xs sm:text-sm md:text-base font-bold text-neutral-600 whitespace-nowrap">
                    {client.name}
                </span>
            </div>
        </motion.div>
    );
}

export default function OurClients() {
    return (
        <Section id="clients" title="Our Clients">
            <div className="max-w-7xl 3xl:max-w-8xl 4xl:max-w-9xl mx-auto w-full overflow-x-hidden">
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center text-neutral-600 text-sm sm:text-base md:text-lg lg:text-xl 2xl:text-2xl mb-10 sm:mb-12 md:mb-16 max-w-2xl 3xl:max-w-3xl mx-auto px-4 sm:px-6 md:px-8 leading-relaxed"
                >
                    We're proud to partner with innovative companies across various industries, delivering exceptional results that drive their success.
                </motion.p>

                {/* Client Logos Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 md:gap-10 lg:gap-12 xl:gap-14 max-w-4xl 3xl:max-w-5xl 4xl:max-w-6xl mx-auto">
                    {clients.map((client, index) => (
                        <ClientLogo key={index} client={client} index={index} />
                    ))}
                </div>

                {/* Stats Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="mt-10 sm:mt-14 md:mt-20 lg:mt-24 grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 md:gap-10 lg:gap-12"
                >
                    <div className="text-center">
                        <div className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl 2xl:text-7xl 3xl:text-8xl font-black text-yellow-500 mb-1 sm:mb-2">20+</div>
                        <div className="text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl 2xl:text-2xl text-neutral-600 font-bold">Happy Clients</div>
                    </div>
                    <div className="text-center">
                        <div className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl 2xl:text-7xl 3xl:text-8xl font-black text-yellow-500 mb-1 sm:mb-2">10+</div>
                        <div className="text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl 2xl:text-2xl text-neutral-600 font-bold">Industries</div>
                    </div>
                    <div className="text-center">
                        <div className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl 2xl:text-7xl 3xl:text-8xl font-black text-yellow-500 mb-1 sm:mb-2">95%</div>
                        <div className="text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl 2xl:text-2xl text-neutral-600 font-bold">Satisfaction</div>
                    </div>
                    <div className="text-center">
                        <div className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl 2xl:text-7xl 3xl:text-8xl font-black text-yellow-500 mb-1 sm:mb-2">3+</div>
                        <div className="text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl 2xl:text-2xl text-neutral-600 font-bold">Years Experience</div>
                    </div>
                </motion.div>
            </div>
        </Section>
    );
}


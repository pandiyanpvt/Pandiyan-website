import { Link } from 'react-router-dom';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    const links = {
        Company: [
            { label: "About Us", href: "/about" },
            { label: "Our Branches", href: "/branches" },
            { label: "Careers", href: "/careers" },
            { label: "Compliance", href: "/compliance" },
        ],
        Services: [
            { label: "Custom Software", href: "/services" },
            { label: "Web Apps", href: "/services" },
            { label: "Mobile Apps", href: "/services" },
            { label: "Cloud Solutions", href: "/services" },
        ],
        Social: [
            { label: "LinkedIn", href: "#" },
            { label: "Twitter", href: "#" },
            { label: "GitHub", href: "#" },
            { label: "Instagram", href: "#" },
        ]
    };

    return (
        <footer className="bg-neutral-50 pt-12 sm:pt-16 md:pt-20 lg:pt-24 2xl:pt-32 pb-6 sm:pb-8 md:pb-10 lg:pb-12 border-t border-neutral-200 transition-colors duration-300">
            <div className="mx-auto max-w-7xl 3xl:max-w-8xl 4xl:max-w-9xl px-4 xs:px-6 sm:px-8 lg:px-12 xl:px-16 2xl:px-20 3xl:px-24 4xl:px-32">
                <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 sm:gap-8 md:gap-10 lg:gap-12 xl:gap-16 mb-8 sm:mb-12 md:mb-16 lg:mb-20">
                    <div className="col-span-2">
                        <Link to="/" className="flex items-center gap-2 sm:gap-3 group mb-4 sm:mb-6">
                            <div className="flex items-center justify-center transform group-hover:scale-110 transition-all duration-300">
                                <img src="/Pandiyan_logo.png" alt="Pandiyan Logo" className="h-8 xs:h-10 sm:h-12 md:h-14 lg:h-16 w-auto object-contain" />
                            </div>
                            <span className="text-neutral-900 font-black tracking-tighter text-base xs:text-lg sm:text-xl md:text-2xl lg:text-2xl 2xl:text-3xl group-hover:text-yellow-400 transition-colors uppercase">
                                Pandiyan
                            </span>
                        </Link>
                        <p className="text-xs xs:text-xs sm:text-sm md:text-sm lg:text-base 2xl:text-lg text-neutral-600 max-w-sm sm:max-w-md md:max-w-lg mb-4 sm:mb-6 md:mb-8 leading-relaxed">
                            We are a premier software development agency dedicated to building high-performance digital products that drive business growth.
                        </p>
                    </div>

                    {Object.entries(links).map(([title, items]) => (
                        <div key={title} className="col-span-1">
                            <h4 className="text-neutral-900 font-bold mb-3 sm:mb-4 md:mb-6 uppercase tracking-widest text-xs xs:text-xs sm:text-sm md:text-sm lg:text-base 2xl:text-lg">{title}</h4>
                            <ul className="space-y-2 sm:space-y-3 md:space-y-4">
                                {items.map((link) => (
                                    <li key={link.label}>
                                        <Link
                                            to={link.href}
                                            className="text-neutral-500 hover:text-yellow-400 transition-colors text-xs xs:text-xs sm:text-sm md:text-sm lg:text-base 2xl:text-lg font-medium"
                                        >
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                <div className="pt-6 sm:pt-8 md:pt-10 lg:pt-12 border-t border-neutral-200 flex flex-col md:flex-row justify-between items-center gap-4 sm:gap-6">
                    <p className="text-neutral-500 text-xs xs:text-xs sm:text-sm md:text-sm lg:text-base 2xl:text-lg">
                        © {currentYear} Pandiyan Software Solutions. All rights reserved.
                    </p>
                    <div className="flex gap-4 sm:gap-6 md:gap-8">
                        <Link to="/privacy-policy" className="text-neutral-500 hover:text-neutral-900 text-[10px] xs:text-[10px] sm:text-xs md:text-xs lg:text-sm 2xl:text-base uppercase tracking-widest font-bold">Privacy Policy</Link>
                        <Link to="/terms-of-service" className="text-neutral-500 hover:text-neutral-900 text-[10px] xs:text-[10px] sm:text-xs md:text-xs lg:text-sm 2xl:text-base uppercase tracking-widest font-bold">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}

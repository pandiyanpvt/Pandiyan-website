import { Link } from 'react-router-dom';
import { useState } from 'react';
import PrivacyPolicyModal from './PrivacyPolicyModal';
import TermsOfServiceModal from './TermsOfServiceModal';

export default function Footer() {
    const currentYear = new Date().getFullYear();
    const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);
    const [isTermsOpen, setIsTermsOpen] = useState(false);

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

    const contactInfo = [
        {
            label: "pandiyanpvt@gmail.com",
            href: "mailto:pandiyanpvt@gmail.com",
            type: "email"
        },
        {
            label: "+94 74 315 0590",
            href: "tel:+94743150590",
            type: "phone"
        },
        {
            label: "View on Maps",
            href: "https://www.google.com/maps/place/THE+PANDIYAN+PVT+Ltd/@9.7950922,80.0407255,17z/data=!3m1!4b1!4m6!3m5!1s0x3affab004d911319:0xeeafa0aedec3c4c8!8m2!3d9.7950922!4d80.0407255!16s%2Fg%2F11yxw88vw3",
            type: "location"
        },
    ];

    return (
        <footer className="bg-neutral-50 pt-16 sm:pt-20 md:pt-24 lg:pt-28 2xl:pt-36 pb-8 sm:pb-10 md:pb-12 lg:pb-14 border-t border-neutral-200 transition-colors duration-300">
            <div className="mx-auto w-full max-w-[96%] sm:max-w-[97%] lg:max-w-[98%] 2xl:max-w-[99%] px-3 sm:px-4 lg:px-6 xl:px-8">
                <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 sm:gap-10 md:gap-12 lg:gap-14 xl:gap-20 mb-10 sm:mb-14 md:mb-18 lg:mb-24">
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

                    <div className="col-span-1">
                        <h4 className="text-neutral-900 font-bold mb-3 sm:mb-4 md:mb-6 uppercase tracking-widest text-xs xs:text-xs sm:text-sm md:text-sm lg:text-base 2xl:text-lg">Contact</h4>
                        <ul className="space-y-2 sm:space-y-3 md:space-y-4">
                            {contactInfo.map((contact) => (
                                <li key={contact.label}>
                                    <a
                                        href={contact.href}
                                        target={contact.type === 'location' ? '_blank' : undefined}
                                        rel={contact.type === 'location' ? 'noopener noreferrer' : undefined}
                                        className="text-neutral-500 hover:text-yellow-400 transition-colors text-xs xs:text-xs sm:text-sm md:text-sm lg:text-base 2xl:text-lg font-medium"
                                    >
                                        {contact.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="pt-6 sm:pt-8 md:pt-10 lg:pt-12 border-t border-neutral-200 flex flex-col md:flex-row justify-between items-center gap-4 sm:gap-6">
                    <p className="text-neutral-500 text-xs xs:text-xs sm:text-sm md:text-sm lg:text-base 2xl:text-lg">
                        © {currentYear} Pandiyan Software Solutions. All rights reserved.
                    </p>
                    <div className="flex gap-4 sm:gap-6 md:gap-8">
                        <button
                            onClick={() => setIsPrivacyOpen(true)}
                            className="text-neutral-500 hover:text-neutral-900 text-[10px] xs:text-[10px] sm:text-xs md:text-xs lg:text-sm 2xl:text-base uppercase tracking-widest font-bold transition-colors"
                        >
                            Privacy Policy
                        </button>
                        <button
                            onClick={() => setIsTermsOpen(true)}
                            className="text-neutral-500 hover:text-neutral-900 text-[10px] xs:text-[10px] sm:text-xs md:text-xs lg:text-sm 2xl:text-base uppercase tracking-widest font-bold transition-colors"
                        >
                            Terms of Service
                        </button>
                    </div>
                </div>
            </div>

            {/* Modals */}
            <PrivacyPolicyModal isOpen={isPrivacyOpen} onClose={() => setIsPrivacyOpen(false)} />
            <TermsOfServiceModal isOpen={isTermsOpen} onClose={() => setIsTermsOpen(false)} />
        </footer>
    );
}

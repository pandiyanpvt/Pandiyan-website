import { Link } from 'react-router-dom';
import logo from '../assets/logo.jpg';

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
        <footer className="bg-neutral-50 pt-20 pb-10 border-t border-neutral-200 transition-colors duration-300">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12 mb-16">
                    <div className="col-span-2">
                        <Link to="/" className="flex items-center gap-3 group mb-6">
                            <div className="w-12 h-12 overflow-hidden border border-neutral-200 rounded-xl flex items-center justify-center transform group-hover:scale-110 transition-all duration-300 shadow-sm">
                                <img src={logo} alt="Pandiyan Logo" className="w-full h-full object-cover" />
                            </div>
                            <span className="text-neutral-900 font-black tracking-tighter text-2xl group-hover:text-yellow-400 transition-colors uppercase">
                                Pandiyan
                            </span>
                        </Link>
                        <p className="text-neutral-600 max-w-sm mb-8 leading-relaxed">
                            We are a premier software development agency dedicated to building high-performance digital products that drive business growth.
                        </p>
                    </div>

                    {Object.entries(links).map(([title, items]) => (
                        <div key={title} className="col-span-1">
                            <h4 className="text-neutral-900 font-bold mb-6 uppercase tracking-widest text-sm">{title}</h4>
                            <ul className="space-y-4">
                                {items.map((link) => (
                                    <li key={link.label}>
                                        <Link
                                            to={link.href}
                                            className="text-neutral-500 hover:text-yellow-400 transition-colors text-sm font-medium"
                                        >
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                <div className="pt-10 border-t border-neutral-200 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-neutral-500 text-sm">
                        © {currentYear} Pandiyan Software Solutions. All rights reserved.
                    </p>
                    <div className="flex gap-8">
                        <Link to="#" className="text-neutral-500 hover:text-neutral-900 text-xs uppercase tracking-widest font-bold">Privacy Policy</Link>
                        <Link to="#" className="text-neutral-500 hover:text-neutral-900 text-xs uppercase tracking-widest font-bold">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}

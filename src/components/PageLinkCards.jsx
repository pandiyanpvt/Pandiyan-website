import { Link } from 'react-router-dom';
import Section from './Section.jsx';

const pages = [
    { title: "About Us", desc: "Learn about our vision, team, and specialized technology stack.", path: "/about", icon: "🏢" },
    { title: "Our Process", desc: "How we move from discovery to deployment with precision.", path: "/process", icon: "⚙️" },
    { title: "Branches", desc: "Our global presence and localized support centers.", path: "/branches", icon: "📍" },
    { title: "Careers", desc: "Join our team of elite developers and designers.", path: "/careers", icon: "🚀" },
    { title: "Compliance", desc: "Our commitment to security, privacy, and industry standards.", path: "/compliance", icon: "⚖️" },
];

export default function PageLinkCards() {
    return (
        <Section title="Explore Pandiyan" subtitle="Everything you need to know about our ecosystem">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {pages.map((p, i) => (
                    <Link
                        key={i}
                        to={p.path}
                        className="group p-8 rounded-3xl bg-white border border-neutral-100 hover:border-yellow-400 hover:shadow-2xl hover:shadow-yellow-400/5 transition-all duration-300"
                    >
                        <div className="text-3xl mb-4 group-hover:scale-110 transition-transform duration-300 inline-block">{p.icon}</div>
                        <h3 className="text-xl font-bold text-neutral-900 mb-2 group-hover:text-yellow-600 transition-colors uppercase tracking-tight">{p.title}</h3>
                        <p className="text-neutral-500 text-sm leading-relaxed">{p.desc}</p>
                    </Link>
                ))}
            </div>
        </Section>
    );
}

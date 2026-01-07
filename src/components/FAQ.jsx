import { useState } from 'react';
import Section from "./Section.jsx";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
    {
        question: "How long does a typical software project take?",
        answer: "Project timelines vary depending on complexity, but a typical MVP (Minimum Viable Product) usually takes between 8 to 12 weeks from design to launch."
    },
    {
        question: "Do you offer post-launch support and maintenance?",
        answer: "Yes, we provide flexible maintenance packages that include security updates, bug fixes, and feature enhancements to ensure your product grows with your business."
    },
    {
        question: "What technology stack do you specialize in?",
        answer: "We specialize in modern, high-performance stacks including React, Node.js, Python, Flutter, and AWS/Azure cloud infrastructures."
    },
    {
        question: "Can you help as an extension of our existing team?",
        answer: "Absolutely. We offer team augmentation services where our experts integrate seamlessly with your in-house developers and workflows."
    }
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState(null);

    return (
        <Section id="faq" title="Common Questions">
            <div className="max-w-3xl mx-auto space-y-4">
                {faqs.map((faq, idx) => (
                    <div key={idx} className="border border-neutral-100 rounded-2xl overflow-hidden bg-white shadow-sm">
                        <button
                            onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                            className="w-full px-6 py-5 text-left flex justify-between items-center hover:bg-neutral-50 transition-colors"
                        >
                            <span className="font-bold text-neutral-900">{faq.question}</span>
                            <span className={`transform transition-transform duration-300 text-yellow-500 ${openIndex === idx ? 'rotate-180' : ''}`}>
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                </svg>
                            </span>
                        </button>
                        <AnimatePresence>
                            {openIndex === idx && (
                                <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: "auto", opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <div className="px-6 pb-6 text-neutral-600 leading-relaxed">
                                        {faq.answer}
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                ))}
            </div>
        </Section>
    );
}

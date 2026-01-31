import { useState } from "react";
import emailjs from "@emailjs/browser";
import Section from "./Section.jsx";

// Public Key must be from the same EmailJS account that owns this service (Dashboard → Account)
const SERVICE_ID = "service_n6tjde8";
const TEMPLATE_ID = "template_4qgjreq";
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "LD01bYJyJ185WrACE";
// Template vars: {{name}}, {{email}}, {{time}}, {{message}}, {{concern_type}}

export default function ComplaintForm() {
    const [result, setResult] = useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending...");

        const form = event.target;
        const timeInput = form.querySelector('input[name="time"]');
        if (timeInput) timeInput.value = new Date().toLocaleString();

        try {
            await emailjs.sendForm(
                SERVICE_ID,
                TEMPLATE_ID,
                form,
                PUBLIC_KEY
            );
            setResult("Success!");
            form.reset();
        } catch (error) {
            console.error(error);
            setResult(error?.text || error?.message || "Error");
        }
    };

    return (
        <Section id="complaint" title="Compliance Reporting Form">
            <div className="max-w-4xl mx-auto">
                <div className="bg-neutral-50 border border-neutral-200 rounded-2xl sm:rounded-3xl p-5 sm:p-6 md:p-8 lg:p-12">
                    <div className="mb-6 sm:mb-8 md:mb-10 text-center">
                        <h3 className="text-xl sm:text-2xl font-bold text-neutral-900 mb-3 sm:mb-4">Report a Concern</h3>
                        <p className="text-neutral-500 text-sm sm:text-base px-1">
                            Please use this form to report any security vulnerabilities, data privacy concerns, or compliance violations.
                            Your submission will be reviewed by our legal and security teams.
                        </p>
                    </div>

                    <form className="space-y-5 sm:space-y-6 md:space-y-8" onSubmit={onSubmit}>
                        <input type="hidden" name="time" />
                        <div className="grid md:grid-cols-2 gap-5 sm:gap-6 md:gap-8">
                            <div className="space-y-3">
                                <label className="text-sm font-bold text-neutral-500 uppercase tracking-widest">Full Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    className="w-full bg-white border border-neutral-200 rounded-xl px-5 py-4 text-neutral-900 focus:border-yellow-400 transition-colors outline-none"
                                    placeholder="Enter your name"
                                    required
                                />
                            </div>
                            <div className="space-y-3">
                                <label className="text-sm font-bold text-neutral-500 uppercase tracking-widest">Email Address</label>
                                <input
                                    type="email"
                                    name="email"
                                    className="w-full bg-white border border-neutral-200 rounded-xl px-5 py-4 text-neutral-900 focus:border-yellow-400 transition-colors outline-none"
                                    placeholder="email@example.com"
                                    required
                                />
                            </div>
                        </div>

                        <div className="space-y-3">
                            <label className="text-sm font-bold text-neutral-500 uppercase tracking-widest">Type of Concern</label>
                            <select
                                name="concern_type"
                                className="w-full bg-white border border-neutral-200 rounded-xl px-5 py-4 text-neutral-900 focus:border-yellow-400 transition-colors outline-none appearance-none cursor-pointer"
                                required
                            >
                                <option value="">Select a category</option>
                                <option value="data-privacy">Data Privacy Issue</option>
                                <option value="security-vuln">Security Vulnerability</option>
                                <option value="ethics">Ethics & Conduct</option>
                                <option value="other">Other Compliance Matter</option>
                            </select>
                        </div>

                        <div className="space-y-3">
                            <label className="text-sm font-bold text-neutral-500 uppercase tracking-widest">Detailed Description</label>
                            <textarea
                                name="message"
                                rows="6"
                                className="w-full bg-white border border-neutral-200 rounded-xl px-5 py-4 text-neutral-900 focus:border-yellow-400 transition-colors outline-none resize-none"
                                placeholder="Please provide as much detail as possible..."
                                required
                            />
                        </div>

                        <div className="pt-2 sm:pt-4">
                            <button
                                type="submit"
                                className="w-full bg-yellow-400 hover:bg-yellow-300 text-black font-black uppercase tracking-[0.2em] py-3 sm:py-4 md:py-5 rounded-xl transition-all shadow-lg shadow-yellow-400/10 hover:shadow-yellow-400/20 active:scale-[0.99] text-sm sm:text-base"
                            >
                                Submit Secure Report
                            </button>
                            {result && (
                                <p className={`text-center text-xs sm:text-sm font-medium mt-4 ${result === "Success!" ? "text-green-600" : "text-red-600"}`}>
                                    {result}
                                </p>
                            )}
                            <p className="text-center text-gray-500 text-[10px] sm:text-xs mt-4 sm:mt-6 px-2">
                                🔒 Your data is encrypted and handled in accordance with our strict confidentiality protocols.
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </Section>
    );
}

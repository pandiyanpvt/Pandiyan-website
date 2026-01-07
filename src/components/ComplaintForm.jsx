import Section from "./Section.jsx";

export default function ComplaintForm() {
    return (
        <Section id="complaint" title="Compliance Reporting Form">
            <div className="max-w-4xl mx-auto">
                <div className="bg-neutral-50 border border-neutral-200 rounded-3xl p-8 md:p-12">
                    <div className="mb-10 text-center">
                        <h3 className="text-2xl font-bold text-neutral-900 mb-4">Report a Concern</h3>
                        <p className="text-neutral-500">
                            Please use this form to report any security vulnerabilities, data privacy concerns, or compliance violations.
                            Your submission will be reviewed by our legal and security teams.
                        </p>
                    </div>

                    <form className="space-y-8">
                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="space-y-3">
                                <label className="text-sm font-bold text-neutral-500 uppercase tracking-widest">Full Name</label>
                                <input
                                    type="text"
                                    className="w-full bg-white border border-neutral-200 rounded-xl px-5 py-4 text-neutral-900 focus:border-yellow-400 transition-colors outline-none"
                                    placeholder="Enter your name"
                                />
                            </div>
                            <div className="space-y-3">
                                <label className="text-sm font-bold text-neutral-500 uppercase tracking-widest">Email Address</label>
                                <input
                                    type="email"
                                    className="w-full bg-white border border-neutral-200 rounded-xl px-5 py-4 text-neutral-900 focus:border-yellow-400 transition-colors outline-none"
                                    placeholder="email@example.com"
                                />
                            </div>
                        </div>

                        <div className="space-y-3">
                            <label className="text-sm font-bold text-neutral-500 uppercase tracking-widest">Type of Concern</label>
                            <select className="w-full bg-white border border-neutral-200 rounded-xl px-5 py-4 text-neutral-900 focus:border-yellow-400 transition-colors outline-none appearance-none cursor-pointer">
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
                                rows="6"
                                className="w-full bg-white border border-neutral-200 rounded-xl px-5 py-4 text-neutral-900 focus:border-yellow-400 transition-colors outline-none resize-none"
                                placeholder="Please provide as much detail as possible..."
                            />
                        </div>

                        <div className="pt-4">
                            <button
                                type="submit"
                                className="w-full bg-yellow-400 hover:bg-yellow-300 text-black font-black uppercase tracking-[0.2em] py-5 rounded-xl transition-all shadow-lg shadow-yellow-400/10 hover:shadow-yellow-400/20 active:scale-[0.99]"
                            >
                                Submit Secure Report
                            </button>
                            <p className="text-center text-gray-500 text-xs mt-6">
                                🔒 Your data is encrypted and handled in accordance with our strict confidentiality protocols.
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </Section>
    );
}

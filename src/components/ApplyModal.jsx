import { useEffect } from 'react';

export default function ApplyModal({ isOpen, onClose, jobTitle }) {
    // Prevent scrolling when modal is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
                onClick={onClose}
            />

            {/* Modal Content */}
            <div className="relative w-full max-w-2xl bg-white border border-neutral-100 rounded-3xl shadow-2xl overflow-hidden transform transition-all animate-in fade-in zoom-in duration-300">
                <div className="absolute top-4 right-4">
                    <button
                        onClick={onClose}
                        className="text-neutral-400 hover:text-neutral-900 p-2 rounded-full hover:bg-neutral-100 transition-colors"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>

                <div className="p-8 md:p-12">
                    <div className="mb-8">
                        <h2 className="text-sm uppercase tracking-[0.3em] text-yellow-400 font-bold mb-2">Join the team</h2>
                        <h3 className="text-2xl md:text-3xl font-black text-neutral-900">
                            Apply for <span className="text-yellow-400 uppercase italic">{jobTitle}</span>
                        </h3>
                    </div>

                    <form className="space-y-6">
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-xs font-bold text-neutral-500 uppercase tracking-widest">Full Name</label>
                                <input
                                    type="text"
                                    required
                                    className="w-full bg-neutral-50 border border-neutral-100 rounded-xl px-5 py-3 text-neutral-900 focus:border-yellow-400 transition-colors outline-none"
                                    placeholder="John Doe"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-bold text-neutral-500 uppercase tracking-widest">Email Address</label>
                                <input
                                    type="email"
                                    required
                                    className="w-full bg-neutral-50 border border-neutral-100 rounded-xl px-5 py-3 text-neutral-900 focus:border-yellow-400 transition-colors outline-none"
                                    placeholder="john@example.com"
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-xs font-bold text-neutral-500 uppercase tracking-widest">Portfolio / LinkedIn Link</label>
                            <input
                                type="url"
                                className="w-full bg-neutral-50 border border-neutral-100 rounded-xl px-5 py-3 text-neutral-900 focus:border-yellow-400 transition-colors outline-none"
                                placeholder="https://linkedin.com/in/..."
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="text-xs font-bold text-neutral-500 uppercase tracking-widest">Tell us why you're a fit</label>
                            <textarea
                                rows="4"
                                className="w-full bg-neutral-50 border border-neutral-100 rounded-xl px-5 py-3 text-neutral-900 focus:border-yellow-400 transition-colors outline-none resize-none"
                                placeholder="Briefly describe your experience..."
                            />
                        </div>

                        <div className="pt-4 flex flex-col sm:flex-row gap-4">
                            <button
                                type="submit"
                                className="flex-1 bg-yellow-400 hover:bg-yellow-300 text-black font-black uppercase tracking-widest py-4 rounded-xl transition-all shadow-lg hover:shadow-yellow-400/20 active:scale-[0.98]"
                            >
                                Submit Application
                            </button>
                            <button
                                type="button"
                                onClick={onClose}
                                className="sm:w-32 bg-neutral-100 hover:bg-neutral-200 text-neutral-900 font-bold py-4 rounded-xl transition-all"
                            >
                                Cancel
                            </button>
                        </div>

                        <p className="text-center text-gray-500 text-[10px] uppercase tracking-wider">
                            By submitting, you agree to our privacy policy and data processing terms.
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
}

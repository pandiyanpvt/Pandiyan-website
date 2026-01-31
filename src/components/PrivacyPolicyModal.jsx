import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function PrivacyPolicyModal({ isOpen, onClose }) {
    if (!isOpen) return null;

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
                    />

                    {/* Modal */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        transition={{ duration: 0.2 }}
                        className="fixed inset-4 sm:inset-8 md:inset-16 lg:inset-20 z-50 flex items-center justify-center"
                    >
                        <div className="bg-white rounded-2xl shadow-2xl w-full h-full flex flex-col max-w-4xl">
                            {/* Header */}
                            <div className="flex items-center justify-between p-6 border-b border-neutral-200">
                                <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900">Privacy Policy</h2>
                                <button
                                    onClick={onClose}
                                    className="p-2 hover:bg-neutral-100 rounded-lg transition-colors"
                                    aria-label="Close"
                                >
                                    <X className="w-6 h-6 text-neutral-600" />
                                </button>
                            </div>

                            {/* Content */}
                            <div className="flex-1 overflow-y-auto p-6 sm:p-8 space-y-6">
                                <div>
                                    <p className="text-neutral-600 mb-4">
                                        <strong>Last Updated:</strong> January 31, 2026
                                    </p>
                                    <p className="text-neutral-600 leading-relaxed">
                                        At Pandiyan, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
                                    </p>
                                </div>

                                <div>
                                    <h3 className="text-xl font-bold text-neutral-900 mb-3">1. Information We Collect</h3>
                                    <p className="text-neutral-600 leading-relaxed mb-3">
                                        We collect information that you provide directly to us, including:
                                    </p>
                                    <ul className="list-disc list-inside space-y-2 text-neutral-600 ml-4">
                                        <li>Name, email address, and contact information</li>
                                        <li>Company name and job title</li>
                                        <li>Project requirements and preferences</li>
                                        <li>Communication history and feedback</li>
                                        <li>Payment and billing information</li>
                                    </ul>
                                </div>

                                <div>
                                    <h3 className="text-xl font-bold text-neutral-900 mb-3">2. How We Use Your Information</h3>
                                    <p className="text-neutral-600 leading-relaxed mb-3">
                                        We use the information we collect to:
                                    </p>
                                    <ul className="list-disc list-inside space-y-2 text-neutral-600 ml-4">
                                        <li>Provide, maintain, and improve our services</li>
                                        <li>Process your requests and transactions</li>
                                        <li>Send you technical notices and support messages</li>
                                        <li>Respond to your comments and questions</li>
                                        <li>Communicate about products, services, and events</li>
                                        <li>Monitor and analyze trends and usage</li>
                                    </ul>
                                </div>

                                <div>
                                    <h3 className="text-xl font-bold text-neutral-900 mb-3">3. Information Sharing and Disclosure</h3>
                                    <p className="text-neutral-600 leading-relaxed">
                                        We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:
                                    </p>
                                    <ul className="list-disc list-inside space-y-2 text-neutral-600 ml-4 mt-3">
                                        <li>With your consent or at your direction</li>
                                        <li>With service providers who assist in our operations</li>
                                        <li>To comply with legal obligations</li>
                                        <li>To protect our rights and prevent fraud</li>
                                    </ul>
                                </div>

                                <div>
                                    <h3 className="text-xl font-bold text-neutral-900 mb-3">4. Data Security</h3>
                                    <p className="text-neutral-600 leading-relaxed">
                                        We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet is 100% secure.
                                    </p>
                                </div>

                                <div>
                                    <h3 className="text-xl font-bold text-neutral-900 mb-3">5. Cookies and Tracking Technologies</h3>
                                    <p className="text-neutral-600 leading-relaxed">
                                        We use cookies and similar tracking technologies to collect information about your browsing activities. You can control cookies through your browser settings and other tools.
                                    </p>
                                </div>

                                <div>
                                    <h3 className="text-xl font-bold text-neutral-900 mb-3">6. Your Rights</h3>
                                    <p className="text-neutral-600 leading-relaxed mb-3">
                                        You have the right to:
                                    </p>
                                    <ul className="list-disc list-inside space-y-2 text-neutral-600 ml-4">
                                        <li>Access and receive a copy of your personal data</li>
                                        <li>Rectify inaccurate or incomplete data</li>
                                        <li>Request deletion of your personal data</li>
                                        <li>Object to or restrict processing of your data</li>
                                        <li>Withdraw consent at any time</li>
                                    </ul>
                                </div>

                                <div>
                                    <h3 className="text-xl font-bold text-neutral-900 mb-3">7. Children's Privacy</h3>
                                    <p className="text-neutral-600 leading-relaxed">
                                        Our services are not directed to children under 13. We do not knowingly collect personal information from children under 13. If you become aware that a child has provided us with personal information, please contact us.
                                    </p>
                                </div>

                                <div>
                                    <h3 className="text-xl font-bold text-neutral-900 mb-3">8. Changes to This Privacy Policy</h3>
                                    <p className="text-neutral-600 leading-relaxed">
                                        We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date.
                                    </p>
                                </div>

                                <div>
                                    <h3 className="text-xl font-bold text-neutral-900 mb-3">9. Contact Us</h3>
                                    <p className="text-neutral-600 leading-relaxed">
                                        If you have any questions about this Privacy Policy, please contact us at:
                                    </p>
                                    <div className="mt-3 space-y-1 text-neutral-600">
                                        <p><strong>Email:</strong> contact@pandiyan.dev</p>
                                        <p><strong>Phone:</strong> +91 72000 00000</p>
                                        <p><strong>Address:</strong> 102, Old Bus Stand, Salem, TN</p>
                                    </div>
                                </div>
                            </div>

                            {/* Footer */}
                            <div className="p-6 border-t border-neutral-200 flex justify-end">
                                <button
                                    onClick={onClose}
                                    className="px-6 py-3 bg-yellow-400 hover:bg-yellow-300 text-black font-bold rounded-xl transition-colors"
                                >
                                    Close
                                </button>
                            </div>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}

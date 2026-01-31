import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function TermsOfServiceModal({ isOpen, onClose }) {
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
                                <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900">Terms of Service</h2>
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
                                        Welcome to Pandiyan. By accessing or using our website and services, you agree to be bound by these Terms of Service. Please read these terms carefully before using our services.
                                    </p>
                                </div>

                                <div>
                                    <h3 className="text-xl font-bold text-neutral-900 mb-3">1. Acceptance of Terms</h3>
                                    <p className="text-neutral-600 leading-relaxed">
                                        By accessing and using Pandiyan's services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to these terms, please do not use our services.
                                    </p>
                                </div>

                                <div>
                                    <h3 className="text-xl font-bold text-neutral-900 mb-3">2. Services Description</h3>
                                    <p className="text-neutral-600 leading-relaxed mb-3">
                                        Pandiyan provides software development, web and mobile application development, cloud services, UI/UX design, e-commerce solutions, and related technology services. Our services include but are not limited to:
                                    </p>
                                    <ul className="list-disc list-inside space-y-2 text-neutral-600 ml-4">
                                        <li>Custom software development</li>
                                        <li>Web and mobile application development</li>
                                        <li>Cloud infrastructure and DevOps services</li>
                                        <li>UI/UX design and consulting</li>
                                        <li>E-commerce platform development</li>
                                        <li>Maintenance and technical support</li>
                                        <li>Social media management</li>
                                    </ul>
                                </div>

                                <div>
                                    <h3 className="text-xl font-bold text-neutral-900 mb-3">3. User Responsibilities</h3>
                                    <p className="text-neutral-600 leading-relaxed mb-3">
                                        As a user of our services, you agree to:
                                    </p>
                                    <ul className="list-disc list-inside space-y-2 text-neutral-600 ml-4">
                                        <li>Provide accurate and complete information</li>
                                        <li>Maintain the security of your account credentials</li>
                                        <li>Use our services in compliance with all applicable laws</li>
                                        <li>Not engage in any activity that disrupts our services</li>
                                        <li>Respect intellectual property rights</li>
                                        <li>Communicate professionally and respectfully</li>
                                    </ul>
                                </div>

                                <div>
                                    <h3 className="text-xl font-bold text-neutral-900 mb-3">4. Intellectual Property Rights</h3>
                                    <p className="text-neutral-600 leading-relaxed mb-3">
                                        All content, features, and functionality of our services are owned by Pandiyan and are protected by international copyright, trademark, and other intellectual property laws.
                                    </p>
                                    <p className="text-neutral-600 leading-relaxed">
                                        For custom development projects, intellectual property rights will be specified in individual project agreements. Unless otherwise stated, upon full payment, clients receive ownership of the deliverables created specifically for their project.
                                    </p>
                                </div>

                                <div>
                                    <h3 className="text-xl font-bold text-neutral-900 mb-3">5. Payment Terms</h3>
                                    <p className="text-neutral-600 leading-relaxed mb-3">
                                        Payment terms will be specified in individual project agreements. Generally:
                                    </p>
                                    <ul className="list-disc list-inside space-y-2 text-neutral-600 ml-4">
                                        <li>Payment schedules are outlined in project proposals</li>
                                        <li>Invoices are due within the specified timeframe</li>
                                        <li>Late payments may incur additional fees</li>
                                        <li>All prices are in the currency specified in the agreement</li>
                                        <li>Refund policies are project-specific</li>
                                    </ul>
                                </div>

                                <div>
                                    <h3 className="text-xl font-bold text-neutral-900 mb-3">6. Project Scope and Changes</h3>
                                    <p className="text-neutral-600 leading-relaxed">
                                        Project scope will be defined in individual agreements. Any changes to the agreed scope may result in additional costs and timeline adjustments. Change requests must be submitted in writing and approved by both parties.
                                    </p>
                                </div>

                                <div>
                                    <h3 className="text-xl font-bold text-neutral-900 mb-3">7. Confidentiality</h3>
                                    <p className="text-neutral-600 leading-relaxed">
                                        We respect the confidentiality of your business information. Both parties agree to maintain confidentiality of proprietary information shared during the course of our engagement. Specific confidentiality terms may be outlined in separate Non-Disclosure Agreements (NDAs).
                                    </p>
                                </div>

                                <div>
                                    <h3 className="text-xl font-bold text-neutral-900 mb-3">8. Warranties and Disclaimers</h3>
                                    <p className="text-neutral-600 leading-relaxed mb-3">
                                        We strive to provide high-quality services, but we make no warranties, expressed or implied, regarding:
                                    </p>
                                    <ul className="list-disc list-inside space-y-2 text-neutral-600 ml-4">
                                        <li>Uninterrupted or error-free service</li>
                                        <li>Results obtained from using our services</li>
                                        <li>Accuracy or reliability of information</li>
                                        <li>Third-party services or integrations</li>
                                    </ul>
                                </div>

                                <div>
                                    <h3 className="text-xl font-bold text-neutral-900 mb-3">9. Limitation of Liability</h3>
                                    <p className="text-neutral-600 leading-relaxed">
                                        To the maximum extent permitted by law, Pandiyan shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly.
                                    </p>
                                </div>

                                <div>
                                    <h3 className="text-xl font-bold text-neutral-900 mb-3">10. Termination</h3>
                                    <p className="text-neutral-600 leading-relaxed">
                                        Either party may terminate services under conditions specified in individual project agreements. Upon termination, payment for completed work will be due, and all confidential information must be returned or destroyed.
                                    </p>
                                </div>

                                <div>
                                    <h3 className="text-xl font-bold text-neutral-900 mb-3">11. Dispute Resolution</h3>
                                    <p className="text-neutral-600 leading-relaxed">
                                        Any disputes arising from these terms or our services will first be attempted to be resolved through good-faith negotiations. If unresolved, disputes will be handled according to the laws of Tamil Nadu, India.
                                    </p>
                                </div>

                                <div>
                                    <h3 className="text-xl font-bold text-neutral-900 mb-3">12. Changes to Terms</h3>
                                    <p className="text-neutral-600 leading-relaxed">
                                        We reserve the right to modify these terms at any time. We will notify users of any material changes. Continued use of our services after changes constitutes acceptance of the modified terms.
                                    </p>
                                </div>

                                <div>
                                    <h3 className="text-xl font-bold text-neutral-900 mb-3">13. Contact Information</h3>
                                    <p className="text-neutral-600 leading-relaxed">
                                        If you have any questions about these Terms of Service, please contact us at:
                                    </p>
                                    <div className="mt-3 space-y-1 text-neutral-600">
                                        <p><strong>Email:</strong> contact@pandiyan.dev</p>
                                        <p><strong>Phone:</strong> +91 72000 00000</p>
                                        <p><strong>Address:</strong> 102, Old Bus Stand, Salem, TN</p>
                                    </div>
                                </div>

                                <div className="pt-4 border-t border-neutral-200">
                                    <p className="text-sm text-neutral-500 italic">
                                        By using Pandiyan's services, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service.
                                    </p>
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

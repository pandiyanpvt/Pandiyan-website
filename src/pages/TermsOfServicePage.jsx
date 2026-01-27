import Section from '../components/Section.jsx';

export default function TermsOfServicePage() {
    return (
        <div className="pt-32 pb-20">
            <Section id="terms-of-service" title="Terms of Service" subtitle="Terms and Conditions">
                <div className="max-w-4xl mx-auto prose prose-neutral">
                    <div className="space-y-8 text-neutral-600 leading-relaxed">
                        <div>
                            <h3 className="text-2xl font-black text-neutral-900 mb-4">1. Acceptance of Terms</h3>
                            <p>
                                By accessing and using the Pandiyan Software Solutions website and services, you accept and agree to be bound by the terms and provision of this agreement.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-2xl font-black text-neutral-900 mb-4">2. Use License</h3>
                            <p>
                                Permission is granted to temporarily access the materials on Pandiyan Software Solutions' website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
                            </p>
                            <ul className="list-disc pl-6 mt-4 space-y-2">
                                <li>Modify or copy the materials</li>
                                <li>Use the materials for any commercial purpose or for any public display</li>
                                <li>Attempt to reverse engineer any software contained on the website</li>
                                <li>Remove any copyright or other proprietary notations from the materials</li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-2xl font-black text-neutral-900 mb-4">3. Service Terms</h3>
                            <p>
                                When you engage our services, you agree to:
                            </p>
                            <ul className="list-disc pl-6 mt-4 space-y-2">
                                <li>Provide accurate and complete information</li>
                                <li>Pay all fees as agreed upon in the service contract</li>
                                <li>Comply with all applicable laws and regulations</li>
                                <li>Respect intellectual property rights</li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-2xl font-black text-neutral-900 mb-4">4. Intellectual Property</h3>
                            <p>
                                All content, features, and functionality of our website and services, including but not limited to text, graphics, logos, and software, are the exclusive property of Pandiyan Software Solutions and are protected by copyright, trademark, and other intellectual property laws.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-2xl font-black text-neutral-900 mb-4">5. Limitation of Liability</h3>
                            <p>
                                In no event shall Pandiyan Software Solutions or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on our website.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-2xl font-black text-neutral-900 mb-4">6. Revisions and Errata</h3>
                            <p>
                                The materials appearing on our website could include technical, typographical, or photographic errors. We do not warrant that any of the materials on its website are accurate, complete, or current.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-2xl font-black text-neutral-900 mb-4">7. Contact Information</h3>
                            <p>
                                If you have any questions about these Terms of Service, please contact us at:
                            </p>
                            <p className="mt-4">
                                <strong>Email:</strong> legal@pandiyan.dev<br />
                                <strong>Address:</strong> Pandiyan Software Solutions
                            </p>
                        </div>

                        <div className="pt-8 border-t border-neutral-200">
                            <p className="text-sm text-neutral-500">
                                Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                            </p>
                        </div>
                    </div>
                </div>
            </Section>
        </div>
    );
}


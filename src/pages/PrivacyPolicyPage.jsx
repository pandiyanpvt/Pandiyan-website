import Section from '../components/Section.jsx';

export default function PrivacyPolicyPage() {
    return (
        <div className="pt-32 pb-20">
            <Section id="privacy-policy" title="Privacy Policy" subtitle="Your Privacy Matters">
                <div className="max-w-4xl mx-auto prose prose-neutral">
                    <div className="space-y-8 text-neutral-600 leading-relaxed">
                        <div>
                            <h3 className="text-2xl font-black text-neutral-900 mb-4">1. Introduction</h3>
                            <p>
                                At Pandiyan Software Solutions, we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-2xl font-black text-neutral-900 mb-4">2. Information We Collect</h3>
                            <p>
                                We may collect information about you in a variety of ways. The information we may collect includes:
                            </p>
                            <ul className="list-disc pl-6 mt-4 space-y-2">
                                <li>Personal information such as name, email address, and phone number</li>
                                <li>Business information provided when requesting our services</li>
                                <li>Usage data and analytics information</li>
                                <li>Cookies and tracking technologies</li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-2xl font-black text-neutral-900 mb-4">3. How We Use Your Information</h3>
                            <p>
                                We use the information we collect to:
                            </p>
                            <ul className="list-disc pl-6 mt-4 space-y-2">
                                <li>Provide, maintain, and improve our services</li>
                                <li>Process your requests and transactions</li>
                                <li>Send you updates and marketing communications (with your consent)</li>
                                <li>Respond to your inquiries and provide customer support</li>
                                <li>Monitor and analyze usage patterns</li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-2xl font-black text-neutral-900 mb-4">4. Data Security</h3>
                            <p>
                                We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-2xl font-black text-neutral-900 mb-4">5. Your Rights</h3>
                            <p>
                                You have the right to:
                            </p>
                            <ul className="list-disc pl-6 mt-4 space-y-2">
                                <li>Access your personal information</li>
                                <li>Correct inaccurate information</li>
                                <li>Request deletion of your information</li>
                                <li>Object to processing of your information</li>
                                <li>Withdraw consent at any time</li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-2xl font-black text-neutral-900 mb-4">6. Contact Us</h3>
                            <p>
                                If you have any questions about this Privacy Policy, please contact us at:
                            </p>
                            <p className="mt-4">
                                <strong>Email:</strong> privacy@pandiyan.dev<br />
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


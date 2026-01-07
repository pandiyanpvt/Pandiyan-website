import Section from "./Section.jsx";

const standards = [
  "Secure Software Development Life Cycle (S-SDLC)",
  "Regular Third-Party Security Audits",
  "ISO 27001 Data Security Guidelines",
  "SOC 2 Type II Process Alignment",
  "GDPR & Data Protection Compliance",
  "Continuous CI/CD Vulnerability Scanning"
];

export default function Compliance() {
  return (
    <Section id="compliance" title="Compliance & Security">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <p className="text-neutral-600 text-lg leading-relaxed mb-8">
            Security and compliance are at the heart of everything we build. We follow rigorous industry standards to ensure your data remains protected and your software follows global best practices.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {standards.map((item, idx) => (
              <div key={idx} className="flex items-center gap-3 p-4 rounded-lg bg-white border border-neutral-100 shadow-sm">
                <div className="w-2 h-2 rounded-full bg-yellow-400 shadow-[0_0_10px_rgba(250,204,21,0.5)]" />
                <span className="text-sm font-medium text-neutral-900">{item}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-yellow-400 p-8 rounded-2xl flex flex-col items-center justify-center text-center shadow-xl shadow-yellow-400/20">
          <svg className="w-16 h-16 text-black mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
          </svg>
          <h4 className="text-2xl font-black text-black uppercase mb-2">Zero-Trust Security</h4>
          <p className="text-black/80 font-medium">Your platform's safety is our primary mission.</p>
        </div>
      </div>
    </Section>
  );
}



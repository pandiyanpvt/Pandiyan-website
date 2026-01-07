import Section from "./Section.jsx";

function BranchCard({ title = "PANDIYAN", subtitle = "Software Excellence Center", address = "123, City, State", phone = "+91 12345 67890", email = "hello@example.com", website = "www.pandiyan.dev" }) {
  return (
    <div className="relative w-[300px] md:w-[340px] rounded-2xl shadow-2xl overflow-hidden border border-neutral-100 bg-white group hover:border-yellow-400/30 transition-all duration-500">
      <div className="h-2 bg-gradient-to-r from-yellow-500 via-yellow-400 to-yellow-500" />
      <div className="p-6">
        <div className="text-xl font-black text-neutral-900 group-hover:text-yellow-400 transition-colors mb-1">{title}</div>
        <div className="text-[10px] uppercase tracking-[0.2em] font-bold text-gray-500 mb-6">{subtitle}</div>
        <div className="space-y-4 text-sm">
          <div className="flex items-start gap-3 group/item">
            <span className="text-yellow-400 mt-1">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
            </span>
            <span className="text-neutral-500 group-hover/item:text-neutral-900 transition-colors leading-tight">{address}</span>
          </div>
          <div className="flex items-center gap-3 group/item">
            <span className="text-yellow-400">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
            </span>
            <span className="text-neutral-500 group-hover/item:text-neutral-900 transition-colors">{phone}</span>
          </div>
          <div className="flex items-center gap-3 group/item">
            <span className="text-yellow-400">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
            </span>
            <span className="text-neutral-500 group-hover/item:text-neutral-900 transition-colors">{email}</span>
          </div>
        </div>
      </div>
      <div className="absolute -right-6 -bottom-6 w-24 h-24 bg-yellow-400/5 rounded-full blur-2xl group-hover:bg-yellow-400/10 transition-all" />
    </div>
  );
}

export default function Branches() {
  return (
    <Section id="branches" title="Global Presence">
      {/* Decorative background element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-[0.03] pointer-events-none">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="0.5" fill="none" />
          <circle cx="50" cy="50" r="30" stroke="currentColor" strokeWidth="0.5" fill="none" />
          <circle cx="50" cy="50" r="20" stroke="currentColor" strokeWidth="0.5" fill="none" />
        </svg>
      </div>

      <div className="relative">
        <div className="relative grid place-items-center">
          <div className="relative">
            {/* Connection Lines (Desktop) */}
            <div className="hidden xl:block absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 pointer-events-none">
              <svg width="600" height="420" viewBox="0 0 600 420" fill="none" className="opacity-20 animate-pulse">
                <path d="M300 210 C 300 210, 200 180, 150 140" stroke="#facc15" strokeWidth="1" strokeDasharray="5 5" fill="none" />
                <path d="M300 210 C 300 210, 200 240, 150 280" stroke="#facc15" strokeWidth="1" strokeDasharray="5 5" fill="none" />
                <path d="M300 210 C 300 210, 400 180, 450 140" stroke="#facc15" strokeWidth="1" strokeDasharray="5 5" fill="none" />
                <path d="M300 210 C 300 210, 400 240, 450 280" stroke="#facc15" strokeWidth="1" strokeDasharray="5 5" fill="none" />
              </svg>
            </div>

            <div className="grid md:grid-cols-2 gap-8 md:gap-x-28 md:gap-y-16 items-center">
              <div className="md:justify-self-end transform hover:scale-[1.03] transition-transform duration-500">
                <BranchCard address="102, Old Bus Stand, Salem" phone="+91 72000 00001" email="info@pandiyan.dev" />
              </div>
              <div className="md:justify-self-start transform hover:scale-[1.03] transition-transform duration-500">
                <BranchCard address="12, OMR, IT Expressway, Chennai" phone="+91 72000 00002" email="chennai@pandiyan.dev" />
              </div>
              <div className="md:justify-self-end transform hover:scale-[1.03] transition-transform duration-500">
                <BranchCard address="221B, Gandhipuram, Coimbatore" phone="+91 72000 00003" email="cbe@pandiyan.dev" />
              </div>
              <div className="md:justify-self-start transform hover:scale-[1.03] transition-transform duration-500">
                <BranchCard address="45, Anna Nagar, Madurai" phone="+91 72000 00004" email="madurai@pandiyan.dev" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}



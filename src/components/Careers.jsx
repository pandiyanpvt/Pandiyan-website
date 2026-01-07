import { useState } from 'react';
import Section from "./Section.jsx";


const jobs = [
  { id: 1, title: "Senior React Developer", type: "Full-time", location: "Remote / Salem", department: "Engineering" },
  { id: 2, title: "Full Stack Engineer (Node.js)", type: "Full-time", location: "Chennai / Hybrid", department: "Engineering" },
  { id: 3, title: "UI/UX Designer", type: "Contract", location: "Remote", department: "Design" },
  { id: 4, title: "DevOps Engineer", type: "Full-time", location: "Remote / Salem", department: "Operations" },
  { id: 5, title: "Product Manager", type: "Full-time", location: "Remote", department: "Product" },
];

export default function Careers() {
  const [selectedJob, setSelectedJob] = useState(null);

  const handleApplyClick = (job) => {
    setSelectedJob(job);
    // Smooth scroll to application form
    setTimeout(() => {
      document.getElementById('application-form')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  return (
    <>
      <Section id="careers" title="Join Our Team">
        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-bold text-neutral-900 mb-6 md:mt-2">Why work with us?</h3>
            <ul className="space-y-4 text-neutral-600">
              <li className="flex items-start gap-3">
                <span className="text-yellow-400 font-bold">✓</span>
                Remote-first culture with flexible working hours.
              </li>
              <li className="flex items-start gap-3">
                <span className="text-yellow-400 font-bold">✓</span>
                Regular skill-building workshops and certifications.
              </li>
              <li className="flex items-start gap-3">
                <span className="text-yellow-400 font-bold">✓</span>
                Competitive health insurance and wellness benefits.
              </li>
              <li className="flex items-start gap-3">
                <span className="text-yellow-400 font-bold">✓</span>
                Opportunity to work on global projects with cutting-edge tech.
              </li>
            </ul>
            <p className="mt-10 text-neutral-700 font-semibold italic">
              Don't see a role? Send your resume anyway to <br />
              <span className="text-yellow-400">careers@pandiyan.dev</span>
            </p>
          </div>

          <div className="lg:col-span-2 space-y-4">
            {jobs.map((job) => (
              <div
                key={job.id}
                className={`group p-6 rounded-xl bg-neutral-100 border transition-all flex flex-col md:flex-row md:items-center justify-between gap-4 ${selectedJob?.id === job.id ? 'border-yellow-400 bg-yellow-50/50' : 'border-neutral-200 hover:border-yellow-400/30'}`}
              >
                <div>
                  <h4 className="text-xl font-bold text-neutral-900 group-hover:text-yellow-400 transition-colors uppercase tracking-tight">{job.title}</h4>
                  <div className="flex gap-4 mt-2 text-sm text-neutral-500">
                    <span>{job.location}</span>
                    <span>•</span>
                    <span>{job.type}</span>
                    <span className="hidden sm:inline">•</span>
                    <span className="hidden sm:inline text-yellow-600 font-medium">{job.department}</span>
                  </div>
                </div>
                <button
                  onClick={() => handleApplyClick(job)}
                  className={`px-6 py-2 rounded-full font-bold text-sm transition-all border ${selectedJob?.id === job.id
                    ? 'bg-yellow-400 text-black border-yellow-400'
                    : 'bg-neutral-200 hover:bg-yellow-400 hover:text-black text-neutral-900 border-neutral-300 hover:border-yellow-400'
                    }`}
                >
                  {selectedJob?.id === job.id ? 'Selected' : 'Apply Now'}
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Inline Application Form */}
        {selectedJob && (
          <div id="application-form" className="mt-20 border-t border-neutral-200 pt-16 animate-in fade-in slide-in-from-bottom-8 duration-700">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-12">
                <h3 className="text-3xl font-black text-neutral-900 mb-4">
                  Apply for <span className="text-yellow-500">{selectedJob.title}</span>
                </h3>
                <p className="text-neutral-500">Please fill out the form below to submit your application.</p>
              </div>

              <form className="space-y-8 bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-neutral-100">
                {/* Personal Info */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-neutral-500 uppercase tracking-widest">Full Name *</label>
                    <input type="text" required className="w-full bg-neutral-50 border border-neutral-200 rounded-xl px-5 py-4 text-neutral-900 focus:border-yellow-400 focus:ring-4 focus:ring-yellow-400/10 transition-all outline-none" placeholder="Enter your full name" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-neutral-500 uppercase tracking-widest">Email Address *</label>
                    <input type="email" required className="w-full bg-neutral-50 border border-neutral-200 rounded-xl px-5 py-4 text-neutral-900 focus:border-yellow-400 focus:ring-4 focus:ring-yellow-400/10 transition-all outline-none" placeholder="name@example.com" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-neutral-500 uppercase tracking-widest">Phone Number *</label>
                    <input type="tel" required className="w-full bg-neutral-50 border border-neutral-200 rounded-xl px-5 py-4 text-neutral-900 focus:border-yellow-400 focus:ring-4 focus:ring-yellow-400/10 transition-all outline-none" placeholder="+91 98765 43210" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-neutral-500 uppercase tracking-widest">Portfolio / LinkedIn</label>
                    <input type="url" className="w-full bg-neutral-50 border border-neutral-200 rounded-xl px-5 py-4 text-neutral-900 focus:border-yellow-400 focus:ring-4 focus:ring-yellow-400/10 transition-all outline-none" placeholder="https://linkedin.com/in/..." />
                  </div>
                </div>

                {/* Screening Questions */}
                <div className="space-y-6 pt-4 border-t border-neutral-100">
                  <h4 className="font-bold text-lg text-neutral-900 flex items-center gap-2">
                    <span className="w-1 h-6 bg-yellow-400 rounded-full"></span>
                    Screening Questions
                  </h4>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-neutral-500 uppercase tracking-widest">Total Experience (Years) *</label>
                      <input type="number" min="0" step="0.5" required className="w-full bg-neutral-50 border border-neutral-200 rounded-xl px-5 py-4 text-neutral-900 focus:border-yellow-400 focus:ring-4 focus:ring-yellow-400/10 transition-all outline-none" placeholder="e.g. 4.5" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-neutral-500 uppercase tracking-widest">Current CTC (LPA) *</label>
                      <input type="text" required className="w-full bg-neutral-50 border border-neutral-200 rounded-xl px-5 py-4 text-neutral-900 focus:border-yellow-400 focus:ring-4 focus:ring-yellow-400/10 transition-all outline-none" placeholder="e.g. 12 LPA" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-neutral-500 uppercase tracking-widest">Expected CTC (LPA) *</label>
                      <input type="text" required className="w-full bg-neutral-50 border border-neutral-200 rounded-xl px-5 py-4 text-neutral-900 focus:border-yellow-400 focus:ring-4 focus:ring-yellow-400/10 transition-all outline-none" placeholder="e.g. 15 LPA" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-neutral-500 uppercase tracking-widest">Notice Period *</label>
                      <select required className="w-full bg-neutral-50 border border-neutral-200 rounded-xl px-5 py-4 text-neutral-900 focus:border-yellow-400 focus:ring-4 focus:ring-yellow-400/10 transition-all outline-none appearance-none">
                        <option value="">Select notice period</option>
                        <option value="immediate">Immediate Joiner</option>
                        <option value="15">15 Days</option>
                        <option value="30">30 Days</option>
                        <option value="60">60 Days</option>
                        <option value="90">90 Days</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold text-neutral-500 uppercase tracking-widest">Why are you a good fit? *</label>
                    <textarea required rows="4" className="w-full bg-neutral-50 border border-neutral-200 rounded-xl px-5 py-4 text-neutral-900 focus:border-yellow-400 focus:ring-4 focus:ring-yellow-400/10 transition-all outline-none resize-none" placeholder="Tell us about your relevant experience..."></textarea>
                  </div>
                </div>

                {/* CV Upload */}
                <div className="space-y-4 pt-4 border-t border-neutral-100">
                  <h4 className="font-bold text-lg text-neutral-900 flex items-center gap-2">
                    <span className="w-1 h-6 bg-yellow-400 rounded-full"></span>
                    Resume / CV
                  </h4>
                  <div className="border-2 border-dashed border-neutral-200 rounded-2xl p-8 text-center hover:bg-neutral-50 transition-colors cursor-pointer group">
                    <input type="file" id="cv-upload" className="hidden" accept=".pdf,.doc,.docx" required />
                    <label htmlFor="cv-upload" className="cursor-pointer">
                      <div className="w-16 h-16 bg-blue-50 text-blue-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                        </svg>
                      </div>
                      <p className="text-neutral-900 font-bold mb-1">Click to upload or drag and drop</p>
                      <p className="text-neutral-500 text-sm">PDF, DOC, DOCX (Max 5MB)</p>
                    </label>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex justify-end pt-6 gap-4">
                  <button
                    type="button"
                    onClick={() => setSelectedJob(null)}
                    className="px-8 py-4 rounded-xl font-bold text-neutral-500 hover:bg-neutral-100 transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-10 py-4 bg-neutral-900 text-white rounded-xl font-black uppercase tracking-widest hover:bg-neutral-800 transition-all shadow-xl active:scale-95"
                  >
                    Submit Application
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </Section>
    </>
  );
}



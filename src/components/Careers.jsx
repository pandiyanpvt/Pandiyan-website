import Section from "./Section.jsx";


const jobs = [
  { id: 1, title: "Full Stack Developer", type: "Full-time", location: "Remote", department: "Engineering" },
  { id: 2, title: "Full Stack Developer", type: "Intern", location: "Remote", department: "Engineering" },
  { id: 3, title: "UI/UX Designer", type: "Full-time", location: "Remote", department: "Design" },
  { id: 4, title: "UI/UX Designer", type: "Intern", location: "Remote", department: "Design" },
  { id: 5, title: "Frontend Developer", type: "Full-time", location: "Remote", department: "Engineering" },
  { id: 6, title: "Frontend Developer", type: "Intern", location: "Remote", department: "Engineering" },
  { id: 7, title: "Backend Developer", type: "Full-time", location: "Remote", department: "Engineering" },
  { id: 8, title: "Backend Developer", type: "Intern", location: "Remote", department: "Engineering" },
];

export default function Careers() {
  return (
    <Section id="careers" title="Join Our Team">
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {jobs.map((job) => (
          <div
            key={job.id}
            className="group p-8 rounded-3xl bg-white border-2 border-neutral-200 transition-all flex flex-col items-center justify-center min-h-[200px] hover:border-yellow-400/50 hover:shadow-xl hover:shadow-yellow-400/5"
          >
            <h4 className="text-xl font-black text-neutral-900 text-center group-hover:text-yellow-500 transition-colors mb-2">
              {job.title}
            </h4>
            <span className="text-sm font-bold text-neutral-500 uppercase tracking-wider">
              {job.type}
            </span>
          </div>
        ))}
      </div>
    </Section>
  );
}



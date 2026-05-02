import { Briefcase, GraduationCap } from "lucide-react";

const experience = [
  { title: "Frontend Developer (React)", company: "Human Development Fund (HDF)", period: "2025 — Present", desc: "Develop responsive, accessible React frontends using component-driven architecture, hooks and context. Collaborate with designers and backend engineers to integrate APIs and ship features end-to-end." },
  { title: "Frontend Developer", company: "Big Gorilla Apps", period: "Dec 2023 — 2025", desc: "Managed and maintained company and client websites. Developed and launched new websites and landing pages tailored to client requirements. Worked with CRM platforms and customised WordPress solutions." },
  { title: "Frontend Engineer", company: "Carburrant Technology Limited", period: "Jan 2022 — Present", desc: "Partnered with UX/UI designers to implement responsive interfaces across desktop, tablet, and mobile. Leveraged HTML5, CSS3, and JavaScript to develop dynamic features and integrated RESTful APIs." },
];

const education = [
  { title: "B.Sc. Computer Science", company: "University of Benin", period: "2018 — 2023", desc: "Bachelor of Science in Computer Science, building a strong foundation in programming, problem-solving, software development, and web technologies." },
];

const Item = ({ title, company, period, desc }: { title: string; company: string; period: string; desc: string }) => (
  <div className="relative pl-8 pb-8 border-l border-border last:pb-0">
    <span className="absolute -left-[7px] top-1 w-3.5 h-3.5 rounded-full bg-gradient-primary shadow-glow" />
    <p className="text-xs text-muted-foreground">{period}</p>
    <h4 className="font-display font-semibold text-lg mt-1">{title}</h4>
    <p className="text-sm text-primary">{company}</p>
    <p className="mt-2 text-sm text-muted-foreground">{desc}</p>
  </div>
);

const Experience = () => (
  <section id="experience" className="py-20 md:py-28">
    <div className="container">
      <div className="max-w-2xl mb-12">
        <p className="text-sm font-medium text-primary uppercase tracking-wider mb-3">Journey</p>
        <h2 className="font-display text-3xl md:text-5xl font-bold leading-tight">
          Experience & <span className="text-gradient">Education</span>
        </h2>
      </div>
      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-xl glass flex items-center justify-center">
              <Briefcase className="w-5 h-5 text-primary" />
            </div>
            <h3 className="font-display font-semibold text-xl">Experience</h3>
          </div>
          {experience.map((e) => <Item key={e.title + e.company} {...e} />)}
        </div>
        <div>
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-xl glass flex items-center justify-center">
              <GraduationCap className="w-5 h-5 text-primary" />
            </div>
            <h3 className="font-display font-semibold text-xl">Education</h3>
          </div>
          {education.map((e) => <Item key={e.title} {...e} />)}
        </div>
      </div>
    </div>
  </section>
);

export default Experience;
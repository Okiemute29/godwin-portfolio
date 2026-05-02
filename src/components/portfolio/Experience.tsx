import { Briefcase, GraduationCap } from "lucide-react";

const experience = [
  { title: "Frontend Developer", company: "Human Development Fund", period: "2023 — Present", desc: "Building accessible web platforms and design systems for social impact products." },
  { title: "Frontend Developer", company: "Big Gorilla Apps", period: "2022 — 2023", desc: "Shipped React + Next.js features for client-facing apps with a focus on UX." },
  { title: "Junior Developer", company: "Carburrant Technology", period: "2021 — 2022", desc: "Built responsive marketing sites and landing pages with modern web stacks." },
];

const education = [
  { title: "B.Sc. Computer Science", company: "University of Benin", period: "2017 — 2021", desc: "Focused on CS fundamentals while building a self-taught web development practice." },
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
const skills = ["HTML5", "CSS3", "JavaScript", "TypeScript", "React", "Next.js", "Tailwind CSS", "Bootstrap", "Redux", "REST APIs", "Git", "GitHub", "Figma", "Framer Motion", "Vite"];

const Skills = () => (
  <section id="skills" className="py-20 md:py-28 bg-muted/30">
    <div className="container">
      <div className="max-w-2xl mb-12">
        <p className="text-sm font-medium text-primary uppercase tracking-wider mb-3">Toolkit</p>
        <h2 className="font-display text-3xl md:text-5xl font-bold leading-tight">
          Skills & <span className="text-gradient">Tools</span>
        </h2>
      </div>
      <div className="flex flex-wrap gap-3">
        {skills.map((s) => (
          <span key={s} className="px-4 py-2 rounded-full glass text-sm hover:border-primary hover:text-primary transition-colors cursor-default">{s}</span>
        ))}
      </div>
    </div>
  </section>
);

export default Skills;
import { Code2, Sparkles, Zap } from "lucide-react";

const features = [
  { icon: Code2, title: "Clean Code", desc: "Maintainable, well-tested components and design systems." },
  { icon: Sparkles, title: "Pixel-Perfect UI", desc: "Translating designs into responsive, polished interfaces." },
  { icon: Zap, title: "Fast & Accessible", desc: "Optimized performance with a11y baked in by default." },
];

const About = () => (
  <section id="about" className="py-20 md:py-28">
    <div className="container">
      <div className="max-w-2xl">
        <p className="text-sm font-medium text-primary uppercase tracking-wider mb-3">About Me</p>
        <h2 className="font-display text-3xl md:text-5xl font-bold leading-tight">
          Turning ideas into <span className="text-gradient">delightful interfaces</span>
        </h2>
        <p className="mt-6 text-muted-foreground text-lg">
          I'm a frontend developer with a passion for design-led engineering. I work
          with founders and teams to ship modern web products — from sleek landing pages
          to complex dashboards — using React, Next.js, TypeScript and Tailwind CSS.
        </p>
      </div>

      <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map(({ icon: Icon, title, desc }) => (
          <div
            key={title}
            className="group glass p-6 rounded-2xl hover:border-primary transition-all hover:-translate-y-1"
          >
            <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center mb-4 shadow-glow">
              <Icon className="w-6 h-6 text-primary-foreground" />
            </div>
            <h3 className="font-display font-semibold text-lg mb-2">{title}</h3>
            <p className="text-sm text-muted-foreground">{desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default About;
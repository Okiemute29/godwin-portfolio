import { Globe, Layers, PackageCheck } from "lucide-react";

const features = [
  { icon: Layers, title: "Design to Code", desc: "I read Figma files like source code — spacing, hierarchy and intent translate directly into how I structure components." },
  { icon: Globe, title: "Cross-Domain Range", desc: "Billing systems, payment flows, marketing sites — working across fintech and social impact keeps the thinking sharp and the solutions non-obvious." },
  { icon: PackageCheck, title: "Shipped, Not Staged", desc: "Every project I list has real users. I'm more interested in what happens after deployment than before." },
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
          Most frontend developers stop at "it renders correctly." I stop at — does this feel
          right when the network is slow, the screen is small, and the user is distracted?
          Three years across fintech, social impact, and agency work — React, TypeScript, and
          an unreasonable attention to detail. Currently at Human Development Fund, building
          interfaces that make complex systems feel simple.
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
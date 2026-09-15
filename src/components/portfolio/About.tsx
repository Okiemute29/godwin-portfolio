import Reveal from "@/components/portfolio/Reveal";

const features = [
  { title: "Design to Code", desc: "I read Figma files like source code — spacing, hierarchy and intent translate directly into how I structure components." },
  { title: "Cross-Domain Range", desc: "Billing systems, payment flows, marketing sites — working across fintech and social impact keeps the thinking sharp and the solutions non-obvious." },
  { title: "Shipped, Not Staged", desc: "Every project I list has real users. I'm more interested in what happens after deployment than before." },
];

const About = () => (
  <section id="about" className="py-20 md:py-28">
    <div className="container">
      <Reveal className="max-w-2xl">
        <p className="meta text-primary mb-4">About Me</p>
        <h2 className="font-display text-display-sm font-semibold leading-tight">
          Turning ideas into delightful interfaces
        </h2>
        <p className="mt-6 text-muted-foreground text-lg">
          I've spent the last few years building products for real users — from client
          websites to dashboards and larger web applications. Most of my work now involves
          taking complicated requirements and turning them into interfaces that are easier
          to understand and use.
        </p>
        <p className="mt-4 text-muted-foreground text-lg">
          I work mainly with React, Next.js, TypeScript and JavaScript. Beyond the UI itself,
          I spend a lot of time thinking about application structure, API integration,
          state management, testing, performance, and what happens when things go wrong in
          production.
        </p>
      </Reveal>

      <div className="mt-16 md:mt-20 max-w-3xl border-t border-border">
        {features.map(({ title, desc }, i) => (
          <Reveal key={title} delayMs={i * 80}>
            <div className="grid sm:grid-cols-[3rem_11rem_1fr] gap-x-6 gap-y-2 py-7 md:py-8 border-b border-border items-baseline">
              <span className="meta text-muted-foreground/60">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="font-display text-lg font-medium">{title}</h3>
              <p className="text-sm text-muted-foreground max-w-md">{desc}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

export default About;

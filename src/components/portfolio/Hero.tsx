import { ArrowRight, Download, Github, Linkedin, MapPin } from "lucide-react";
import profile from "@/assets/profile.jpg";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative pt-28 md:pt-32 pb-20 md:pb-28 overflow-hidden bg-gradient-hero"
    >
      <div className="container grid md:grid-cols-2 gap-12 md:gap-8 items-center">
        <div className="animate-fade-up">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass text-xs text-muted-foreground mb-6">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            Available for new projects
          </div>
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight">
            Frontend Developer{" "}
            <span className="text-gradient">crafting digital experiences</span>
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-xl">
            Hi, I'm <span className="text-foreground font-medium">Robert Godwin</span> — I build fast,
            accessible, and beautiful interfaces with React, Next.js & TypeScript.
          </p>

          <div className="mt-4 flex items-center gap-2 text-sm text-muted-foreground">
            <MapPin className="w-4 h-4" /> Lagos State, Nigeria
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-primary text-primary-foreground font-medium hover:shadow-glow transition-all"
            >
              View My Work <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full glass text-foreground font-medium hover:border-primary transition-all"
            >
              <Download className="w-4 h-4" /> Get in Touch
            </a>
          </div>

          <div className="mt-8 flex items-center gap-4">
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="w-10 h-10 rounded-full glass flex items-center justify-center hover:text-primary transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="w-10 h-10 rounded-full glass flex items-center justify-center hover:text-primary transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
          </div>
        </div>

        <div className="relative animate-fade-up" style={{ animationDelay: "0.15s" }}>
          <div className="absolute -inset-6 bg-gradient-primary opacity-30 blur-3xl rounded-full" />
          <div className="relative aspect-square max-w-md mx-auto rounded-[2rem] overflow-hidden glass shadow-glow animate-float">
            <img
              src={profile}
              alt="Portrait of Robert Godwin, frontend developer based in Lagos, Nigeria"
              width={1024}
              height={1024}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute -bottom-4 -left-4 glass px-4 py-3 rounded-2xl shadow-card hidden sm:block">
            <div className="text-2xl font-display font-bold text-gradient">3+</div>
            <div className="text-xs text-muted-foreground">Years experience</div>
          </div>
          <div className="absolute -top-4 -right-4 glass px-4 py-3 rounded-2xl shadow-card hidden sm:block">
            <div className="text-2xl font-display font-bold text-gradient">20+</div>
            <div className="text-xs text-muted-foreground">Projects delivered</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
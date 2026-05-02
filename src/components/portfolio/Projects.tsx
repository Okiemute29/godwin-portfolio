import { ArrowUpRight } from "lucide-react";
import p1 from "@/assets/project-1.jpg";
import p2 from "@/assets/project-2.jpg";
import p3 from "@/assets/project-3.jpg";

const projects = [
  { img: p1, title: "Analytics Dashboard", type: "Web App", tech: ["React", "TypeScript", "Tailwind"], link: "#" },
  { img: p2, title: "Modern E-commerce", type: "Storefront", tech: ["Next.js", "Stripe", "Tailwind"], link: "#" },
  { img: p3, title: "Fintech Mobile App", type: "Mobile UI", tech: ["React Native", "TypeScript"], link: "#" },
];

const Projects = () => (
  <section id="projects" className="py-20 md:py-28 bg-muted/30">
    <div className="container">
      <div className="flex items-end justify-between flex-wrap gap-4 mb-12">
        <div>
          <p className="text-sm font-medium text-primary uppercase tracking-wider mb-3">Projects</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold leading-tight">
            Selected <span className="text-gradient">work</span>
          </h2>
        </div>
        <p className="text-muted-foreground max-w-md">
          A selection of recent projects spanning dashboards, storefronts and mobile UIs.
        </p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((p) => (
          <a key={p.title} href={p.link} className="group relative glass rounded-2xl overflow-hidden hover:border-primary transition-all hover:-translate-y-1">
            <div className="aspect-[4/3] overflow-hidden bg-secondary">
              <img src={p.img} alt={`${p.title} screenshot`} loading="lazy" width={1280} height={800} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            </div>
            <div className="p-6">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="text-xs text-primary mb-1">{p.type}</p>
                  <h3 className="font-display font-semibold text-lg">{p.title}</h3>
                </div>
                <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </div>
              <div className="flex flex-wrap gap-2 mt-4">
                {p.tech.map((t) => (
                  <span key={t} className="text-xs px-2.5 py-1 rounded-full bg-secondary text-muted-foreground">{t}</span>
                ))}
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  </section>
);

export default Projects;
import { additionalClientWork } from "@/data/projects";
import Reveal from "@/components/portfolio/Reveal";

const AdditionalWork = () => (
  <section className="py-16 md:py-20 bg-secondary/20">
    <div className="container">
      <Reveal className="flex flex-col md:flex-row md:items-center gap-6 md:gap-10">
        <p className="text-sm font-medium text-primary uppercase tracking-wider whitespace-nowrap">
          Additional Client Work
        </p>
        <div className="flex flex-wrap gap-x-8 gap-y-3">
          {additionalClientWork.map((c) =>
            c.link ? (
              <a
                key={c.name}
                href={c.link}
                target="_blank"
                rel="noreferrer"
                className="font-display text-lg text-muted-foreground hover:text-foreground transition-colors"
              >
                {c.name}
              </a>
            ) : (
              <span key={c.name} className="font-display text-lg text-muted-foreground">
                {c.name}
              </span>
            )
          )}
        </div>
      </Reveal>
    </div>
  </section>
);

export default AdditionalWork;

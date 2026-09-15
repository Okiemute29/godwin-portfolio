import { ArrowUpRight } from "lucide-react";
import { secondaryProjects } from "@/data/projects";
import ScreenshotFrame from "@/components/portfolio/ScreenshotFrame";
import Reveal from "@/components/portfolio/Reveal";

/** Deliberately quieter treatment for real project work that isn't one of the four
 *  flagship case studies — smaller frames, denser layout, no case-study CTA. */
const SecondaryWork = () => (
  <div className="border-t border-border py-14 md:py-16">
    <div className="container">
      <Reveal className="mb-8 flex items-baseline gap-4">
        <p className="meta text-muted-foreground/70">Also Shipped</p>
        <span className="h-px flex-1 bg-border" />
      </Reveal>

      <div className="grid gap-8 sm:grid-cols-2 sm:gap-6">
        {secondaryProjects.map((p, i) => (
          <Reveal key={p.slug} delayMs={i * 80}>
            <a
              href={p.link}
              target="_blank"
              rel="noreferrer"
              className="group flex items-center gap-4"
            >
              <ScreenshotFrame image={p.image} className="aspect-[4/3] w-24 shrink-0 sm:w-28" />
              <div className="min-w-0">
                <p className="meta text-muted-foreground/70">
                  {p.org} · {p.type}
                </p>
                <h4 className="mt-1 truncate font-display font-medium">{p.title}</h4>
                <p className="mt-1 text-xs text-muted-foreground">{p.tech.join(" · ")}</p>
              </div>
              <ArrowUpRight className="ml-auto w-4 h-4 shrink-0 text-muted-foreground transition-colors group-hover:text-primary" />
            </a>
          </Reveal>
        ))}
      </div>
    </div>
  </div>
);

export default SecondaryWork;

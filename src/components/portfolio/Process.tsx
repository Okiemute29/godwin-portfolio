import { processSteps } from "@/data/content";
import Reveal from "@/components/portfolio/Reveal";

/**
 * Presented as a connected methodology rather than a card grid: one continuous rail
 * that fills in once revealed, running horizontally on desktop and vertically on
 * mobile, with each step as a stop along it.
 */
const Process = () => (
  <section id="process" className="py-20 md:py-28">
    <div className="container">
      <Reveal className="max-w-2xl mb-14 md:mb-20">
        <p className="meta text-primary mb-4">How I Work</p>
        <h2 className="font-display text-display-sm font-semibold leading-tight">
          Explore, plan, confirm, write tests, implement, validate, commit.
        </h2>
        <p className="mt-6 max-w-xl text-lg text-muted-foreground">
          I like understanding a problem before I start changing code. For larger tasks, I
          usually explore what's already there, work out a plan, confirm the direction,
          write the relevant tests, implement it and validate everything before committing.
        </p>
      </Reveal>

      <Reveal className="relative">
        {/* Vertical rail — mobile only */}
        <div className="absolute bottom-2 left-[5px] top-2 w-px bg-border md:hidden" aria-hidden="true" />
        <div className="process-rail-vertical absolute bottom-2 left-[5px] top-2 w-px bg-primary md:hidden" aria-hidden="true" />

        {/* Horizontal rail — desktop only */}
        <div className="absolute inset-x-0 top-[7px] hidden h-px bg-border md:block" aria-hidden="true" />
        <div className="process-rail absolute inset-x-0 top-[7px] hidden h-px bg-primary md:block" aria-hidden="true" />

        <div className="grid gap-y-10 md:grid-cols-7 md:gap-x-6">
          {processSteps.map((s) => (
            <div key={s.step} className="relative pl-8 md:pl-0 md:pt-9">
              <span
                className="absolute left-0 top-1 h-3 w-3 rounded-full border-2 border-primary bg-background md:left-1/2 md:top-0 md:-translate-x-1/2"
                aria-hidden="true"
              />
              <span className="meta text-muted-foreground/60">{s.step}</span>
              <h3 className="mt-2 font-display text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
            </div>
          ))}
        </div>
      </Reveal>
    </div>
  </section>
);

export default Process;

import { journey, experience, education } from "@/data/content";
import Reveal from "@/components/portfolio/Reveal";
import { cn } from "@/lib/utils";

const findRole = (companyIncludes: string) =>
  experience.find((e) => e.company.toLowerCase().includes(companyIncludes.toLowerCase()));

// Reuses the same real facts as the résumé data (src/data/content.ts), resequenced
// chronologically and paired with the fuller role description for the current role —
// so the timeline itself reads as a narrative of growing responsibility rather than a
// flat list of jobs.
const stages = journey.milestones.map((m, i) => {
  const isCurrent = i === journey.milestones.length - 1;
  const [role, company] = m.label.split(",").map((s) => s.trim());
  const match = findRole(company ?? "");
  return {
    period: m.period,
    role,
    company: company ?? "",
    desc: isCurrent && match ? match.desc : m.desc,
    isCurrent,
  };
});

const Journey = () => (
  <section id="experience" className="py-20 md:py-28">
    <div className="container">
      <Reveal className="max-w-2xl mb-14 md:mb-20">
        <p className="meta text-primary mb-4">Journey</p>
        <h2 className="font-display text-display-sm font-semibold leading-tight">{journey.headline}</h2>
        <p className="mt-6 max-w-xl text-lg text-muted-foreground">{journey.body}</p>
      </Reveal>

      <div className="relative max-w-2xl border-l border-border">
        {stages.map((s, i) => (
          <Reveal key={s.period} delayMs={i * 90}>
            <div className={cn("relative pl-8 md:pl-10", i === stages.length - 1 ? "pb-0" : "pb-12")}>
              <span
                className={cn(
                  "absolute top-1.5 rounded-full bg-primary",
                  s.isCurrent ? "-left-[7px] h-3.5 w-3.5" : "-left-[5px] h-2.5 w-2.5"
                )}
              />
              <p className="meta text-muted-foreground/60">{s.period}</p>
              <h3
                className={cn(
                  "mt-2 font-display font-semibold leading-tight",
                  s.isCurrent ? "text-2xl md:text-3xl" : "text-lg"
                )}
              >
                {s.role}
              </h3>
              <p className="mt-1 text-sm text-primary">{s.company}</p>
              <p className={cn("mt-3 text-muted-foreground", s.isCurrent ? "text-base max-w-lg" : "text-sm")}>
                {s.desc}
              </p>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal delayMs={200} className="mt-14 max-w-2xl border-t border-border pt-6">
        <p className="text-sm text-muted-foreground">
          <span className="meta text-muted-foreground/60 mr-3">Education</span>
          {education[0].title} — {education[0].company}, {education[0].period}
        </p>
      </Reveal>
    </div>
  </section>
);

export default Journey;

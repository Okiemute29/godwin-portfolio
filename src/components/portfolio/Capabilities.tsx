import { capabilityGroups } from "@/data/content";
import Reveal from "@/components/portfolio/Reveal";

/**
 * The one deliberate light reversal in the page — a warm ivory "chapter break" that
 * separates the project narrative from the process/journey close. Built entirely from
 * typography and rules; no bordered cards, no icons.
 */
const Capabilities = () => (
  <section className="chapter-ivory py-20 md:py-28">
    <div className="container">
      <Reveal className="max-w-2xl mb-14 md:mb-20">
        <p className="meta ivory-accent mb-4">Capabilities</p>
        <h2 className="font-display text-display-sm font-semibold leading-tight">
          I work where product design meets frontend engineering.
        </h2>
      </Reveal>

      <div className={"ivory-border border-t"}>
        {capabilityGroups.map((group, i) => (
          <Reveal key={group.title} delayMs={i * 70}>
            <div className="ivory-border grid grid-cols-1 gap-x-10 gap-y-3 border-b py-8 md:grid-cols-[3rem_14rem_1fr] md:items-baseline md:py-10">
              <span className="meta ivory-muted">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="font-display text-xl font-medium md:text-2xl">{group.title}</h3>
              <p className="ivory-muted max-w-xl leading-relaxed">{group.items.join("  ·  ")}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

export default Capabilities;

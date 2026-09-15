import { ArrowRight } from "lucide-react";
import profile from "@/assets/profile-1.png";

const HEADLINE = "I build digital products that make complex workflows feel simple.";

const RevealWords = ({ text }: { text: string }) => {
  const words = text.split(" ");
  return (
    <>
      {words.map((word, i) => (
        <span key={i}>
          <span className="inline-block overflow-hidden align-bottom">
            <span
              className="inline-block animate-word-in"
              style={{ animationDelay: `${0.06 * i + 0.1}s` }}
            >
              {word}
            </span>
          </span>
          {i < words.length - 1 ? " " : ""}
        </span>
      ))}
    </>
  );
};

const Hero = () => {
  return (
    <section id="home" className="relative overflow-hidden">
      {/* Portrait: bleeds from the right edge of the viewport and fades into the dark
          ground on its left edge (mask, not a bordered box) so it reads as part of the
          composition rather than a photo placed in a frame. Natural photograph preserved —
          only a very light unifying grade, no duotone. */}
      <div
        className="pointer-events-none absolute inset-y-0 right-0 w-[68%] sm:w-[56%] md:w-[46%] lg:w-[38%]"
        style={{
          WebkitMaskImage: "linear-gradient(to left, black 50%, transparent 92%)",
          maskImage: "linear-gradient(to left, black 50%, transparent 92%)",
        }}
        aria-hidden="true"
      >
        <img
          src={profile}
          alt=""
          className="h-full w-full object-cover object-top"
          style={{ filter: "grayscale(0.1) sepia(0.05) contrast(1.03) brightness(0.96)" }}
        />
        {/* Fades the portrait's bottom edge into the page ground instead of a hard crop line */}
        <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-background to-transparent" />
        <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-background/70 to-transparent" />
      </div>

      <div className="container relative pt-32 pb-20 md:pt-44 md:pb-28">
        <p className="meta text-primary mb-6 md:mb-8">Frontend Developer — Lagos, Nigeria</p>

        <h1 className="font-display text-display-lg md:text-display-xl font-semibold text-balance max-w-4xl">
          <RevealWords text={HEADLINE} />
        </h1>

        <div className="mt-12 md:mt-16 flex flex-col md:flex-row md:items-end md:justify-between gap-8 max-w-2xl md:max-w-none">
          <p className="text-lg text-muted-foreground max-w-sm">
            Frontend Developer focused on production-grade web applications, dashboards,
            payments, operational tools, and customer-facing experiences.
          </p>

          <div className="flex flex-wrap items-center gap-x-8 gap-y-4 md:shrink-0">
            <a
              href="#work"
              className="group inline-flex items-center gap-2 text-sm font-medium border-b border-primary/50 pb-1 transition-colors hover:border-primary"
            >
              View Selected Work
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a href="#about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              About Robert
            </a>
          </div>
        </div>

        <p className="meta text-muted-foreground/70 mt-20 md:mt-28">
          4+ Years Experience — React · Next.js · TypeScript
        </p>
      </div>
    </section>
  );
};

export default Hero;

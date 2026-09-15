import { ArrowRight } from "lucide-react";
import profile from "@/assets/profile-2.webp";

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
      <div className="container relative pt-32 pb-20 md:pt-44 md:pb-28">
        <p className="meta text-primary mb-6 md:mb-8">Frontend Engineer — Lagos, Nigeria</p>

        <h1 className="font-display text-display-lg md:text-display-xl font-semibold text-balance max-w-4xl md:max-w-sm min-[1400px]:max-w-4xl">
          <RevealWords text={HEADLINE} />
        </h1>

        <div className="mt-12 md:mt-16 flex flex-col min-[1400px]:flex-row min-[1400px]:items-end min-[1400px]:justify-between gap-8 max-w-2xl min-[1400px]:max-w-none">
          <p className="text-lg text-muted-foreground max-w-sm">
            I'm a frontend engineer based in Lagos. I build web applications with React,
            Next.js and TypeScript, with most of my work focused on dashboards and products
            with a lot going on behind the interface.
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

        <p className="meta text-muted-foreground/70 mt-20 md:mt-28 md:max-w-sm min-[1400px]:max-w-none">
          4+ Years Experience — React · Next.js · TypeScript
        </p>
      </div>

      {/* Portrait. Mobile/tablet-portrait: a normal-flow, full-bleed image below the text
          (label → headline → description → CTA → portrait), so it never fights the copy
          for space. From md up it switches to the editorial split — bleeding from the
          right edge of the viewport and fading into the dark ground on its left edge and
          lower third (mask + gradients, not a bordered box) so it reads as part of the
          composition rather than a photo placed in a frame. Natural photograph preserved —
          only a very light unifying grade, no duotone. */}
      <div
        className="pointer-events-none relative mt-14 w-full aspect-[4/5]
          md:absolute md:inset-y-0 md:right-0 md:left-auto md:mt-0 md:aspect-auto md:h-full md:w-[40%]
          lg:w-[38%]
          [mask-image:linear-gradient(to_bottom,black_78%,transparent)]
          [-webkit-mask-image:linear-gradient(to_bottom,black_78%,transparent)]
          md:[mask-image:linear-gradient(to_left,black_55%,transparent_96%)]
          md:[-webkit-mask-image:linear-gradient(to_left,black_55%,transparent_96%)]"
      >
        <img
          src={profile}
          alt="Robert Godwin, Frontend Engineer"
          width={1121}
          height={1403}
          className="h-full w-full object-cover object-top"
          style={{ filter: "grayscale(0.1) sepia(0.05) contrast(1.03) brightness(0.96)" }}
        />
        {/* Fades the portrait's bottom edge into the page ground instead of a hard crop line */}
        <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-background to-transparent" />
        <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-background/70 to-transparent hidden md:block" />
      </div>
    </section>
  );
};

export default Hero;

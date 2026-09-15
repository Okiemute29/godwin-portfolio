import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { FlagshipProject } from "@/data/projects";
import ScreenshotFrame from "@/components/portfolio/ScreenshotFrame";
import Reveal from "@/components/portfolio/Reveal";

interface ProjectFeatureProps {
  project: FlagshipProject;
  index: number;
}

/**
 * Each flagship project gets one of four distinct compositions (cycled by index) so the
 * four case studies read as a designed sequence rather than four repetitions of one card.
 * Hierarchy is consistent across all four: number → title/org → headline → problem →
 * what I built → stack (mono) → View Case Study (primary) / Visit Live Site (gated).
 */
const ProjectFeature = ({ project, index }: ProjectFeatureProps) => {
  const [primaryImage, secondaryImage, tertiaryImage] = project.images;
  const variant = index % 4;

  const numberMark = <span className="num-marker text-3xl md:text-4xl">{project.number}</span>;

  const kicker = (
    <p className="meta text-primary mb-3">
      {project.title}
      {project.org ? ` — ${project.org}` : ""}
    </p>
  );

  const copy = (
    <>
      <h3 className="font-display text-display-sm font-semibold leading-tight">
        {project.storyHeadline}
      </h3>
      <p className="mt-5 text-muted-foreground max-w-xl">{project.context}</p>

      <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 max-w-xl">
        {project.contribution.slice(0, 4).map((item) => (
          <li key={item} className="text-sm text-foreground/90 flex gap-2">
            <span className="text-primary">—</span>
            {item}
          </li>
        ))}
      </ul>

      {project.progression && (
        <div className="mt-6 flex flex-wrap gap-2 max-w-xl">
          {project.progression.map((step, i) => (
            <span
              key={step}
              className="meta rounded-full border border-border px-3 py-1 text-muted-foreground/80"
            >
              {String(i + 1).padStart(2, "0")} {step}
            </span>
          ))}
        </div>
      )}

      <p className="meta text-muted-foreground/70 mt-7">{project.stackLabel.join(" · ")}</p>

      <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-3">
        <Link
          to={`/work/${project.slug}`}
          className="inline-flex items-center gap-2 text-sm font-semibold border-b border-primary pb-0.5 transition-colors hover:text-primary"
        >
          View Case Study <ArrowRight className="w-4 h-4" />
        </Link>
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            {project.liveLabel ?? "Visit Live Site"} ↗
          </a>
        )}
      </div>
    </>
  );

  // Variant 0 — full-bleed banner image, number and copy in an asymmetric row below.
  if (variant === 0) {
    return (
      <article className="border-b border-border py-16 last:border-b-0 md:py-24">
        <Reveal scale className="bleed">
          <ScreenshotFrame
            image={primaryImage}
            className="aspect-[4/3] w-full rounded-none border-x-0 sm:aspect-[16/9] md:aspect-[21/9]"
            priority
          />
        </Reveal>
        <div className="container mt-10 md:mt-14">
          <div className="grid gap-x-8 gap-y-6 md:grid-cols-[5rem_1fr]">
            <Reveal>{numberMark}</Reveal>
            <Reveal delayMs={80}>
              {kicker}
              {copy}
            </Reveal>
          </div>
        </div>
      </article>
    );
  }

  // Variant 1 — asymmetric two-up: portrait-oriented image breaking past the container
  // edge, paired with an offset second frame; copy sits in a narrower column beside it.
  if (variant === 1) {
    return (
      <article className="border-b border-border py-16 last:border-b-0 md:py-24">
        <div className="container">
          <div className="grid items-center gap-10 md:grid-cols-[0.9fr_1.1fr] md:gap-6">
            <div className="order-1 md:order-2 md:-mr-8 lg:-mr-16">
              <Reveal scale className="grid gap-4">
                <ScreenshotFrame image={primaryImage} className="aspect-[4/5] w-full md:aspect-[3/4]" priority />
                {secondaryImage && (
                  <ScreenshotFrame
                    image={secondaryImage}
                    className="relative -mt-10 ml-auto hidden w-2/3 aspect-[4/3] shadow-lifted sm:flex"
                  />
                )}
              </Reveal>
            </div>
            <div className="order-2 md:order-1">
              <Reveal>
                {numberMark}
                <div className="mt-4">
                  {kicker}
                  {copy}
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </article>
    );
  }

  // Variant 2 — full-bleed showcase: the largest single image treatment, used to carry
  // the project with a real photograph today and set the bar for the others once real
  // screenshots land.
  if (variant === 2) {
    return (
      <article className="border-b border-border py-16 last:border-b-0 md:py-24">
        <div className="container mb-8 md:mb-10">
          <Reveal className="flex items-baseline gap-5">
            {numberMark}
            <div>{kicker}</div>
          </Reveal>
        </div>
        <Reveal scale className="bleed">
          <ScreenshotFrame
            image={primaryImage}
            className="aspect-[4/3] w-full rounded-none border-x-0 sm:aspect-[16/10] md:aspect-[2.1/1]"
            priority
          />
        </Reveal>
        <div className="container mt-10 md:mt-14">
          <Reveal className="max-w-2xl">{copy}</Reveal>
        </div>
      </article>
    );
  }

  // Variant 3 — editorial gallery for the richest project: one large frame plus two
  // stacked smaller ones, alongside the full copy column.
  return (
    <article className="border-b border-border py-16 last:border-b-0 md:py-24">
      <div className="container">
        <div className="grid items-start gap-10 md:grid-cols-2 md:gap-14">
          <div className="order-1 md:order-2">
            <Reveal scale className="grid grid-cols-2 gap-4">
              <ScreenshotFrame
                image={primaryImage}
                className="col-span-2 aspect-[4/3] w-full sm:col-span-1 sm:aspect-[3/4]"
                priority
              />
              <div className="col-span-2 grid gap-4 sm:col-span-1">
                {secondaryImage && <ScreenshotFrame image={secondaryImage} className="aspect-[4/3] w-full" />}
                {tertiaryImage && <ScreenshotFrame image={tertiaryImage} className="aspect-[4/3] w-full" />}
              </div>
            </Reveal>
          </div>
          <div className="order-2 md:order-1">
            <Reveal>
              {numberMark}
              <div className="mt-4">
                {kicker}
                {copy}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </article>
  );
};

export default ProjectFeature;

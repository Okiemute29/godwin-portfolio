import { ArrowLeft, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { FlagshipProject, flagshipProjects } from "@/data/projects";
import ScreenshotFrame from "@/components/portfolio/ScreenshotFrame";
import Navbar from "@/components/portfolio/Navbar";
import Footer from "@/components/portfolio/Footer";
import Reveal from "@/components/portfolio/Reveal";

interface ProjectCaseStudyLayoutProps {
  project: FlagshipProject;
}

const Section = ({ label, children }: { label: string; children: React.ReactNode }) => (
  <Reveal className="py-10 md:py-12 border-b border-border last:border-b-0">
    <div className="grid md:grid-cols-[200px_1fr] gap-4 md:gap-12">
      <p className="text-xs font-medium uppercase tracking-[0.15em] text-muted-foreground">{label}</p>
      <div className="max-w-2xl">{children}</div>
    </div>
  </Reveal>
);

const ProjectCaseStudyLayout = ({ project }: ProjectCaseStudyLayoutProps) => {
  const { caseStudy } = project;
  const index = flagshipProjects.findIndex((p) => p.slug === project.slug);
  const next = flagshipProjects[(index + 1) % flagshipProjects.length];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="pt-32 md:pt-40 pb-24">
        <div className="container">
          <Link
            to="/#work"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-10"
          >
            <ArrowLeft className="w-4 h-4" /> Back to work
          </Link>

          <span className="num-marker text-2xl md:text-3xl">{project.number}</span>
          <p className="mt-3 text-xs font-medium uppercase tracking-[0.15em] text-muted-foreground">
            {project.title}
            {project.org ? ` — ${project.org}` : ""}
          </p>
          <h1 className="mt-3 font-display text-display-md font-semibold leading-tight max-w-3xl">
            {project.storyHeadline}
          </h1>

          <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-3">
            <p className="text-xs uppercase tracking-wider text-muted-foreground">
              {caseStudy.stack.join(" / ")}
            </p>
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
              >
                {project.liveLabel ?? "Visit Live Site"} ↗
              </a>
            )}
          </div>

          <Reveal scale className="mt-12">
            <ScreenshotFrame image={project.images[0]} className="aspect-[16/9] w-full" priority />
          </Reveal>

          {project.progression && (
            <Reveal className="mt-10 overflow-x-auto">
              <div className="flex items-center gap-2 text-sm text-muted-foreground min-w-max pb-2">
                {project.progression.map((step, i) => (
                  <div key={step} className="flex items-center gap-2">
                    <span className="px-3 py-1.5 rounded-sm border border-border whitespace-nowrap">{step}</span>
                    {i < project.progression!.length - 1 && <ArrowRight className="w-3.5 h-3.5 shrink-0" />}
                  </div>
                ))}
              </div>
            </Reveal>
          )}

          <div className="mt-4">
            <Section label="Context">
              <p className="text-muted-foreground">{caseStudy.context}</p>
            </Section>

            <Section label="Problem">
              <p className="text-muted-foreground">{caseStudy.problem}</p>
            </Section>

            <Section label="My Role">
              <p className="text-muted-foreground">{caseStudy.myRole}</p>
            </Section>

            <Section label="What I Built">
              <ul className="space-y-2">
                {caseStudy.whatIBuilt.map((item) => (
                  <li key={item} className="text-foreground/90 flex gap-2">
                    <span className="text-primary">—</span>
                    {item}
                  </li>
                ))}
              </ul>
            </Section>

            <Section label="Key Challenges">
              <ul className="space-y-2">
                {caseStudy.keyChallenges.map((item) => (
                  <li key={item} className="text-muted-foreground flex gap-2">
                    <span className="text-primary">—</span>
                    {item}
                  </li>
                ))}
              </ul>
            </Section>

            {caseStudy.engineeringDecision && (
              <Section label="Engineering Decision">
                <h3 className="font-display font-semibold text-lg mb-3">
                  {caseStudy.engineeringDecision.heading}
                </h3>
                <p className="text-muted-foreground">{caseStudy.engineeringDecision.body}</p>
              </Section>
            )}

            <Section label="Result">
              <p className="text-muted-foreground">{caseStudy.result}</p>
            </Section>

            <Section label="Stack">
              <p className="text-foreground/90">{caseStudy.stack.join(" · ")}</p>
            </Section>
          </div>

          <Reveal className="mt-16 pt-10 border-t border-border flex items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground">Next case study</p>
            <Link
              to={`/work/${next.slug}`}
              className="inline-flex items-center gap-2 font-display text-lg font-semibold hover:text-primary transition-colors"
            >
              {next.title} <ArrowRight className="w-4 h-4" />
            </Link>
          </Reveal>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProjectCaseStudyLayout;

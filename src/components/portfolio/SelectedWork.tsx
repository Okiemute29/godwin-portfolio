import { flagshipProjects } from "@/data/projects";
import ProjectFeature from "@/components/portfolio/ProjectFeature";
import SecondaryWork from "@/components/portfolio/SecondaryWork";
import Reveal from "@/components/portfolio/Reveal";

const SelectedWork = () => (
  <section id="work" className="py-20 md:py-28 bg-secondary/20">
    <div className="container">
      <Reveal className="max-w-2xl mb-4">
        <p className="meta text-primary mb-3">Selected Work</p>
        <h2 className="font-display text-display-sm font-semibold leading-tight">
          Four systems, four different kinds of complexity.
        </h2>
      </Reveal>
    </div>

    <div className="mt-8">
      {flagshipProjects.map((project, i) => (
        <ProjectFeature key={project.slug} project={project} index={i} />
      ))}
    </div>

    <SecondaryWork />
  </section>
);

export default SelectedWork;

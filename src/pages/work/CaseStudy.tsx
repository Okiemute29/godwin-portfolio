import { useParams } from "react-router-dom";
import { flagshipProjects } from "@/data/projects";
import ProjectCaseStudyLayout from "@/components/portfolio/ProjectCaseStudyLayout";
import NotFound from "@/pages/NotFound";

const CaseStudy = () => {
  const { slug } = useParams<{ slug: string }>();
  const project = flagshipProjects.find((p) => p.slug === slug);

  if (!project) return <NotFound />;

  return <ProjectCaseStudyLayout project={project} />;
};

export default CaseStudy;

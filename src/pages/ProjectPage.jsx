import { useParams, Link } from "react-router-dom";

const projectData = {
  1: { title: "Startup Project", content: "Details about full cycle development." },
//   2: { title: "UI/UX Design", content: "Details about creative design systems." },
};

export default function ProjectPage() {
  const { id } = useParams();
  const project = projectData[id];

  if (!project) {
    return <h2>Project not found</h2>;
  }

  return (
    <div className="project-page">
      <h1>{project.title}</h1>
      <p>{project.content}</p>
      <Link to="/website-portfolio-blog" className="cta-button">Back to Home</Link>
    </div>
  );
}

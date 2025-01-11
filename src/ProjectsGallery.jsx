import React from "react";
import "./ProjectsGallery.css";

const projects = [
  { title: "Проект 1", description: "Описание проекта 1" },
  { title: "Проект 2", description: "Описание проекта 2" },
  { title: "Проект 3", description: "Описание проекта 3" },
];

const ProjectsGallery = () => {
  return (
    <section id="projects" className="projects-gallery">
      <h2 className="gallery-title">Мои проекты</h2>
      <div className="gallery-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsGallery;

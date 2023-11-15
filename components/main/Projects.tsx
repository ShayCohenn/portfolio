import React from "react";
import ProjectCard from "../sub/ProjectCard";
import { projectsData } from "@/constants/index"

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center pb-20"
      id="projects"
    >
      <h1 className="text-[40px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      <div className="flex flex-wrap gap-4 z-50">
      {projectsData.map((project, index) => (
          <ProjectCard
            key={index}
            src={project.src}
            title={project.title}
            description={project.description}
            tags={project.tags}
            website={project.website}
            github={project.github}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;

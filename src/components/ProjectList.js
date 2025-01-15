import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  const projectItems = projects.map((projObj) => {
    return <ProjectItem key={projObj.id} name={projObj.name} about={projObj.about} technologies={projObj.technologies}/>
  })

  console.log(projects);
  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">
        {projectItems}
      </div>
    </div>
  );
}

export default ProjectList;

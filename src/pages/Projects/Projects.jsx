import "./Projects.css";
import ProjectSideMenu from "./ProjectSideMenu";
import ProjectHeader from "./ProjectHeader";
import ProjectBody from "./ProjectBody";

function Projects() {
  return (
    <div className="project-container">
      <ProjectSideMenu />
      <div className="project-window">
        <ProjectHeader />
        <ProjectBody />
      </div>
    </div>
  );
}
export default Projects;

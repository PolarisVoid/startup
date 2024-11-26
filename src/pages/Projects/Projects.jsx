import "./Projects.css";
import ProjectSideMenu from "./ProjectSideMenu";
import ProjectHeader from "./ProjectHeader";
import ProjectBody from "./ProjectBody";
import { useEffect, useState } from "react";
import { getEvents, organizeByProject } from "../../javascript/getEvents";

function Projects() {
  const [projects, setProjects] = useState({});
  const [selectedProject, setSelectedProject] = useState(null);
  useEffect(() => {
    async function fetchProjects() {
      const events = await getEvents();
      const projects = organizeByProject(events);
      setProjects(projects);
      if (Object.keys(projects).length > 0) {
        setSelectedProject(Object.keys(projects)[0]);
      }
    }
    fetchProjects();
  }, []);
  let projectHeaders = projects ? Object.keys(projects) : [];
  return (
    <div className="project-container">
      <ProjectSideMenu
        selectedProject={selectedProject}
        changeSelectedProject={(project) => {
          setSelectedProject(project);
        }}
        projectHeaders={projectHeaders}
      />
      <div className="project-window">
        <ProjectHeader selectedProject={selectedProject} />
        <ProjectBody selectedProject={selectedProject} projects={projects} />
      </div>
    </div>
  );
}
export default Projects;

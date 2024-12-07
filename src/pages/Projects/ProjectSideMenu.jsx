import "./ProjectSideMenu.css";
import AccordionItem from "../../components/Accordion";
import { capitalizeFirstLetter } from "../../javascript/stringManipulators";

function ProjectSideMenu({ changeSelectedProject, projectHeaders }) {
  return (
    <div className="project-menu-container">
      <div id="accordion">
        <AccordionItem id="myProjects" title="My Projects">
          {projectHeaders.map((project, index) => (
            <button
              key={index}
              className="btn golden btn-golden project-list-item"
              onClick={() => changeSelectedProject(project)}
            >
              {capitalizeFirstLetter(project)}
            </button>
          ))}
          <button className="btn golden btn-golden project-list-item">
            Add Projects
          </button>
        </AccordionItem>
        <AccordionItem id="sharedProjects" title="Shared Projects">
          {projectHeaders.map((project, index) => (
            <button
              key={index}
              className="btn golden btn-golden project-list-item"
              onClick={() => changeSelectedProject(project)}
            >
              {capitalizeFirstLetter(project)}
            </button>
          ))}
          <button className="btn golden btn-golden project-list-item">
            Add Project
          </button>
        </AccordionItem>
      </div>
    </div>
  );
}

export default ProjectSideMenu;

import "./ProjectHeader.css";
import AccordionItem from "../../components/Accordion";
import { capitalizeFirstLetter } from "../../javascript/stringManipulators";

function MenuBurger({ changeSelectedProject, projectHeaders }) {
  return (
    <div>
      <a
        id="smaller-window-menu"
        className="btn btn-primary-1"
        data-bs-toggle="offcanvas"
        href="#project-menu"
        role="button"
        aria-controls="project-menu"
      >
        <img className="icon" src="/assets/icons/filter.svg" />
      </a>
      <div className="offcanvas offcanvas-top offcanvas-menu" id="project-menu">
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="project-menu-label">
            Projects
          </h5>
        </div>
        <div className="offcanvas-body">
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
                Add Project
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
      </div>
    </div>
  );
}

function ProjectHeader({
  selectedProject,
  changeSelectedProject,
  projectHeaders,
}) {
  let header = selectedProject ? capitalizeFirstLetter(selectedProject) : "";
  return (
    <div className="nav project-header">
      <div className="left-container">
        <MenuBurger
          changeSelectedProject={changeSelectedProject}
          projectHeaders={projectHeaders}
        />
        <h1 className="golden">{header}</h1>
      </div>
    </div>
  );
}

export default ProjectHeader;

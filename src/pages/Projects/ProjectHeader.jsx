import "./ProjectHeader.css";
import AccordionItem from "../../components/Accordion";

function MenuBurger() {
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
        <img className="icon" src="src/assets/icons/filter.svg" />
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
              <button className="btn btn-sm golden">[DataBase Pull]</button>
            </AccordionItem>
            <AccordionItem id="sharedProjects" title="Shared Projects">
              <button className="btn btn-sm golden">[DataBase Pull]</button>
            </AccordionItem>
          </div>
        </div>
      </div>
    </div>
  );
}

function ProjectHeader() {
  return (
    <div className="nav project-header">
      <div className="left-container">
        <MenuBurger />
        <h1>[project name]</h1>
      </div>
    </div>
  );
}

export default ProjectHeader;

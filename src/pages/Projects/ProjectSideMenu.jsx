import "./ProjectSideMenu.css";
import AccordionItem from "../../components/Accordion";

function ProjectSideMenu() {
  return (
    <div className="project-menu-container">
      <div id="accordion">
        <AccordionItem id="myProjects" title="My Projects">
          <button className="btn btn-sm golden btn-golden">[DataBase Pull]</button>
          <button className="btn btn-sm golden btn-golden">Add Project</button>
        </AccordionItem>
        <AccordionItem id="sharedProjects" title="Shared Projects">
          <button className="btn btn-sm golden btn-golden">[DataBase Pull]</button>
          <button className="btn btn-sm golden btn-golden">Add Project</button>
        </AccordionItem>
      </div>
    </div>
  );
}

export default ProjectSideMenu;

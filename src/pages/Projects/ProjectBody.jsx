import "./ProjectBody.css";
import { AccordionItemHeader } from "../../components/Accordion";
import { organizeBySection } from "../../javascript/getEvents";
import {
  capitalizeFirstLetter,
  toDayOfWeekAndDay,
} from "../../javascript/stringManipulators";

function TaskCell({ children }) {
  return (
    <td className="task-cell task-cell-color">
      <button className="btn p-0 text-dark btn-outline-none">{children}</button>
    </td>
  );
}

function AddTask() {
  return (
    <tr className="task-row">
      <td className="task-cell task-cell-color">
        <button className="btn p-0 text-muted btn-outline-none">
          Add Task
        </button>
      </td>
      <td className="task-cell task-cell-color"></td>
      <td className="task-cell task-cell-color"></td>
      <td className="task-cell task-cell-color"></td>
      <td className="task-cell task-cell-color"></td>
      <td className="task-cell task-cell-color"></td>
      <td className="task-cell task-cell-color"></td>
    </tr>
  );
}

function Task({ task }) {
  const name = task.name || "";
  const dueDate = toDayOfWeekAndDay(task.dueDate) || "";
  const collaborator = task.collaborator || "";
  const priority = task.priority || "";
  const startTime = toDayOfWeekAndDay(task.startTime) || "";
  const endTime = toDayOfWeekAndDay(task.endTime) || "";
  const beginSchedulingDate = task.beginSchedulingDate || "";
  return (
    <tr className="task-row">
      <TaskCell>{name}</TaskCell>
      <TaskCell>{dueDate}</TaskCell>
      <TaskCell>{collaborator}</TaskCell>
      <TaskCell>{priority}</TaskCell>
      <TaskCell>{startTime}</TaskCell>
      <TaskCell>{endTime}</TaskCell>
      <TaskCell>{beginSchedulingDate}</TaskCell>
    </tr>
  );
}

function TaskTable(events) {
  return (
    <div className="table-container">
      <table className="task-table">
        <thead>
          <tr>
            <th className="task-header task-header-color">Task Name</th>
            <th className="task-header task-header-color">Due Date</th>
            <th className="task-header task-header-color">Collaborator</th>
            <th className="task-header task-header-color">Priority</th>
            <th className="task-header task-header-color">Start Time</th>
            <th className="task-header task-header-color">End Time</th>
            <th className="task-header task-header-color">
              Begin Scheduling Date
            </th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(events).map(([key, value]) => {
            return Object.entries(value).map(([key, value]) => {
              return <Task key={key} task={value} />;
            });
          })}
          <AddTask />
        </tbody>
      </table>
    </div>
  );
}

function ProjectBody({ selectedProject, project }) {
  let sections = organizeBySection(project) || {};
  return (
    <div className="project-body">
      {Object.entries(sections).map(([key, value]) => {
        return (
          <AccordionItemHeader
            key={key}
            id={key}
            title={capitalizeFirstLetter(key)}
          >
            <TaskTable events={value} />
          </AccordionItemHeader>
        );
      })}
    </div>
  );
}

export default ProjectBody;

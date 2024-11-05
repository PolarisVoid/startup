import "./ProjectBody.css";
import { AccordionItemHeader } from "../../components/Accordion";

function AddTask() {
  return (
    <tr>
      <td>
        <button className="btn p-0 text-muted btn-outline-none">
          Add Task
        </button>
      </td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
  );
}

function Task({ task }) {
  return (
    <tr>
      <td>
        <button className="btn p-0 text-dark btn-outline-none">
          {task.name}
        </button>
      </td>
      <td>
        <button className="btn p-0 text-dark btn-outline-none">
          {task.dueDate}
        </button>
      </td>
      <td>
        <button className="btn p-0 text-dark btn-outline-none">
          {task.collaborator}
        </button>
      </td>
      <td>
        <button className="btn p-0 text-dark btn-outline-none">
          {task.priority}
        </button>
      </td>
      <td>
        <button className="btn p-0 text-dark btn-outline-none">
          {task.startTime}
        </button>
      </td>
      <td>
        <button className="btn p-0 text-dark btn-outline-none">
          {task.endTime}
        </button>
      </td>
      <td>
        <button className="btn p-0 text-dark btn-outline-none">
          {task.beginSchedulingDate}
        </button>
      </td>
    </tr>
  );
}

function TaskTable() {
  const TaskObject = new Object();
  TaskObject.name = "Example Task 1";
  TaskObject.dueDate = "Tuesday";
  TaskObject.collaborator = "Username";
  TaskObject.priority = "High";
  TaskObject.startTime = "7:00 pm";
  TaskObject.endTime = "8:00 pm";
  TaskObject.beginSchedulingDate = "Monday";

  return (
    <div className="table-container">
      <table className="table table-hover table-bordered">
        <thead>
          <tr>
            <th>Task Name</th>
            <th>Due Date</th>
            <th>Collaborator</th>
            <th>Priority</th>
            <th>Start Time</th>
            <th>End Time</th>
            <th>Begin Scheduling Date</th>
          </tr>
        </thead>
        <tbody>
          <Task task={TaskObject} />
          <Task task={TaskObject} />
          <Task task={TaskObject} />
          <Task task={TaskObject} />
          <Task task={TaskObject} />
          <Task task={TaskObject} />
          <Task task={TaskObject} />
          <Task task={TaskObject} />
          <Task task={TaskObject} />
          <Task task={TaskObject} />
          <Task task={TaskObject} />
          <Task task={TaskObject} />
          <AddTask />
        </tbody>
      </table>
    </div>
  );
}

function ProjectBody() {
  return (
    <div class="project-body">
      <AccordionItemHeader id="Section1" title="Section Heading">
        <TaskTable />
      </AccordionItemHeader>
      <AccordionItemHeader id="Section2" title="Section Heading">
        <p>Websocket For Shared Projects</p>
        <TaskTable />
      </AccordionItemHeader>
    </div>
  );
}

export default ProjectBody;

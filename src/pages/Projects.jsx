import "./Projects.css";

function Projects() {
  return (
    <div className="project-container">
      <div id="larger-window-menu" className="project-menu">
        <div className="bg-red-gradient">
          <div id="accordion">
            <div className="card-header">
              <a
                className="btn btn-sm btn-block btn-outline-none text-start border-bottom rounded-0 w-100 golden"
                data-bs-toggle="collapse"
                href="#myProjects"
              >
                My Projects
              </a>
            </div>
            <div id="myProjects" className="collapse">
              <div className="card-body">
                <button className="btn btn-sm golden">Unassigned Tasks</button>
                <button className="btn btn-sm golden">[DataBase Pull]</button>
                <button className="btn btn-sm golden">Add Project</button>
              </div>
            </div>
            <div className="card-header">
              <a
                className="btn btn-sm btn-block btn-outline-none text-start border-bottom rounded-0 w-100 golden"
                data-bs-toggle="collapse"
                href="#sharedProjects"
              >
                Shared Projects
              </a>
            </div>
            <div id="sharedProjects" className="collapse">
              <div className="card-body">
                <button className="btn btn-sm golden">[DataBase Pull]</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="project-window">
        <div className="nav">
          <a
            id="smaller-window-menu"
            className="btn btn-primary-1"
            data-bs-toggle="offcanvas"
            href="#project-menu"
            role="button"
            aria-controls="project-menu"
          >
            <img className="icon" src="/icons/filter-svgrepo-com.svg" />
          </a>
          <div className="offcanvas offcanvas-top" id="project-menu">
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="project-menu-label">
                Project List
              </h5>
            </div>
            <div className="offcanvas-body">
              <div id="accordion">
                <div className="card-header">
                  <a
                    className="btn btn-sm btn-block"
                    data-bs-toggle="collapse"
                    href="#sharedProjects"
                  >
                    Shared Projects
                  </a>
                </div>
                <div className="card-header">
                  <a
                    className="btn btn-sm btn-block"
                    data-bs-toggle="collapse"
                    href="#sharedProjects"
                  >
                    Shared Projects
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="task-table">
          <div className="col ps-3">
            <h1>Project Name</h1>
            <p>Add Task</p>
            <ul>
              <li>List</li>
              <li>Task Flows</li>
              <li>Boards</li>
            </ul>
            <h2>Section Heading</h2>
            <div>
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
                  <tr>
                    <td>
                      <button className="btn p-0 text-dark btn-outline-none">
                        Example Task 1
                      </button>
                    </td>
                    <td>
                      <button className="btn p-0 text-dark btn-outline-none">
                        [Username]
                      </button>
                    </td>
                    <td>
                      <button className="btn p-0 text-dark btn-outline-none">
                        Tuesday
                      </button>
                    </td>
                    <td>
                      <button className="btn p-0 text-dark btn-outline-none">
                        High
                      </button>
                    </td>
                    <td>
                      <button className="btn p-0 text-dark btn-outline-none">
                        7:00 pm
                      </button>
                    </td>
                    <td>
                      <button className="btn p-0 text-dark btn-outline-none">
                        8:00 pm
                      </button>
                    </td>
                    <td>
                      <button className="btn p-0 text-dark btn-outline-none">
                        Monday
                      </button>
                    </td>
                  </tr>
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
                </tbody>
              </table>
            </div>
            <h2>Section Heading</h2>
            <p>Websocket For Shared Projects</p>
            <div>
              <table className="table table-hover">
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
                  <tr>
                    <td>
                      <button className="btn p-0 text-dark btn-outline-none">
                        Example Task 1
                      </button>
                    </td>
                    <td>
                      <button className="btn p-0 text-dark btn-outline-none">
                        [Username]
                      </button>
                    </td>
                    <td>
                      <button className="btn p-0 text-dark btn-outline-none">
                        Tuesday
                      </button>
                    </td>
                    <td>
                      <button className="btn p-0 text-dark btn-outline-none">
                        High
                      </button>
                    </td>
                    <td>
                      <button className="btn p-0 text-dark btn-outline-none">
                        7:00 pm
                      </button>
                    </td>
                    <td>
                      <button className="btn p-0 text-dark btn-outline-none">
                        8:00 pm
                      </button>
                    </td>
                    <td>
                      <button className="btn p-0 text-dark btn-outline-none">
                        Monday
                      </button>
                    </td>
                  </tr>
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
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Projects;

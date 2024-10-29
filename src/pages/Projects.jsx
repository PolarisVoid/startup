import "./Projects.css";

function Projects() {
  return (
    <div class="project-container">
      <div id="larger-window-menu" class="project-menu">
        <div class="bg-red-gradient">
          <div id="accordion">
            <div class="card-header">
              <a
                class="btn btn-sm btn-block btn-outline-none text-start border-bottom rounded-0 w-100 golden"
                data-bs-toggle="collapse"
                href="#myProjects"
              >
                My Projects
              </a>
            </div>
            <div id="myProjects" class="collapse">
              <div class="card-body">
                <button class="btn btn-sm golden">Unassigned Tasks</button>
                <button class="btn btn-sm golden">[DataBase Pull]</button>
                <button class="btn btn-sm golden">Add Project</button>
              </div>
            </div>
            <div class="card-header">
              <a
                class="btn btn-sm btn-block btn-outline-none text-start border-bottom rounded-0 w-100 golden"
                data-bs-toggle="collapse"
                href="#sharedProjects"
              >
                Shared Projects
              </a>
            </div>
            <div id="sharedProjects" class="collapse">
              <div class="card-body">
                <button class="btn btn-sm golden">[DataBase Pull]</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="project-window">
        <div class="nav">
          <a
            id="smaller-window-menu"
            class="btn btn-primary-1"
            data-bs-toggle="offcanvas"
            href="#project-menu"
            role="button"
            aria-controls="project-menu"
          >
            <img class="icon" src="/icons/filter-svgrepo-com.svg" />
          </a>
          <div class="offcanvas offcanvas-top" id="project-menu">
            <div class="offcanvas-header">
              <h5 class="offcanvas-title" id="project-menu-label">
                Project List
              </h5>
            </div>
            <div class="offcanvas-body">
              <div id="accordion">
                <div class="card-header">
                  <a
                    class="btn btn-sm btn-block"
                    data-bs-toggle="collapse"
                    href="#sharedProjects"
                  >
                    Shared Projects
                  </a>
                </div>
                <div class="card-header">
                  <a
                    class="btn btn-sm btn-block"
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
        <div class="task-table">
          <div class="col ps-3">
            <h1>Project Name</h1>
            <p>Add Task</p>
            <ul>
              <li>List</li>
              <li>Task Flows</li>
              <li>Boards</li>
            </ul>
            <h2>Section Heading</h2>
            <div>
              <table class="table table-hover table-bordered">
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
                      <button class="btn p-0 text-dark btn-outline-none">
                        Example Task 1
                      </button>
                    </td>
                    <td>
                      <button class="btn p-0 text-dark btn-outline-none">
                        [Username]
                      </button>
                    </td>
                    <td>
                      <button class="btn p-0 text-dark btn-outline-none">
                        Tuesday
                      </button>
                    </td>
                    <td>
                      <button class="btn p-0 text-dark btn-outline-none">
                        High
                      </button>
                    </td>
                    <td>
                      <button class="btn p-0 text-dark btn-outline-none">
                        7:00 pm
                      </button>
                    </td>
                    <td>
                      <button class="btn p-0 text-dark btn-outline-none">
                        8:00 pm
                      </button>
                    </td>
                    <td>
                      <button class="btn p-0 text-dark btn-outline-none">
                        Monday
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <button class="btn p-0 text-muted btn-outline-none">
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
              <table class="table table-hover">
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
                      <button class="btn p-0 text-dark btn-outline-none">
                        Example Task 1
                      </button>
                    </td>
                    <td>
                      <button class="btn p-0 text-dark btn-outline-none">
                        [Username]
                      </button>
                    </td>
                    <td>
                      <button class="btn p-0 text-dark btn-outline-none">
                        Tuesday
                      </button>
                    </td>
                    <td>
                      <button class="btn p-0 text-dark btn-outline-none">
                        High
                      </button>
                    </td>
                    <td>
                      <button class="btn p-0 text-dark btn-outline-none">
                        7:00 pm
                      </button>
                    </td>
                    <td>
                      <button class="btn p-0 text-dark btn-outline-none">
                        8:00 pm
                      </button>
                    </td>
                    <td>
                      <button class="btn p-0 text-dark btn-outline-none">
                        Monday
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <button class="btn p-0 text-muted btn-outline-none">
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

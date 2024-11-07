import { useState } from "react";

function Login(props) {
  const [userName, setUserName] = useState(props.userName);
  const [password, setPassword] = useState("");
  const [displayError, setDisplayError] = useState(null);

  async function loginUser() {
    localStorage.setItem("userName", userName);
    preprocessCSS.onLogin(userName);
  }

  async function createUser() {
    localStorage.setItem("userName", userName);
    props.onLogin(userName);
  }
  return (
    <div className="row justify-content-center">
      <div className="col-md-6">
        <form method="get" action="./calendar">
          <div className="mb-3">
            <label for="username" className="form-label">
              Username
            </label>
            <input
              className="form-control"
              type="text"
              value={userName}
              id="username"
              name="username"
              placeholder="Enter username"
              onChange={(e) => setUserName(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label for="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              name="password"
              placeholder="Enter password"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="btn btn-primary-1"
            onClick={() => loginUser()}
            disabled={!userName || !password}
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
export default Login;

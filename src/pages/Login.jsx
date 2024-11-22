import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login(props) {
  const [userName, setUserName] = useState(props.userName);
  const [password, setPassword] = useState("");
  const [displayError, setDisplayError] = useState(false);
  const navigate = useNavigate();

  async function loginUser(username, password) {
    const response = await fetch("/api/user/login", {
      method: "get",
      headers: { "username": username, "password": password }
    })
    if (response.status === 200) {
      const data = await response.json();
      props.onLogin(username);
      props.setUserId(data.id);
      localStorage.setItem("userName", username);
      localStorage.setItem("userId", data.id);
      navigate("/calendar");
    } else {
      setDisplayError("Invalid username or password");
    }
  }

  async function createUser() {
    const respont = fetch("/api/user/create", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username: userName, password: password }),
    })
    if (response.status === 200) {
      const data = await response.json();
      props.onLogin(userName);
      props.setUserId(data.id);
      localStorage.setItem("userName", username);
      localStorage.setItem("userId", data.id);
      navigate("/calendar");
    } else {
      setDisplayError("Username already exists");
    }
  }

  return (
    <div className="row justify-content-center">
      <div className="col-md-6">
        <form onSubmit={(e) => e.preventDefault()}>
          <div className="mb-3">
            <label htmlFor="username" className="form-label">
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
            <label htmlFor="password" className="form-label">
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
            onClick={(e) => {
              e.preventDefault();
              loginUser(userName, password);
            }}
            disabled={!userName || !password}
          >
            Login
          </button>
          <button
            type="submit"
            className="btn btn-primary-1"
            onClick={(e) => {
              e.preventDefault();
              createUser();
            }}
            disabled={!userName || !password}
          >
            Create
          </button>
        </form>
        {displayError && <div className="alert alert-danger">{displayError}</div>}
      </div>
    </div>
  );
}
export default Login;

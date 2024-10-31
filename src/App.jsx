import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";
import { AuthState } from "./javascript/authState";
import Navbar from "./components/navbar/Navbar";
import "./App.css";
import Home from "./pages/Home";
import Calendar from "./pages/Calendar/Calendar";
import Projects from "./pages/Projects";
import Goals from "./pages/Goals";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Settings from "./pages/Settings";

function App() {
  const [userName, setUserName] = useState(
    localStorage.getItem("userName") || ""
  );
  const currentAuthState = userName
    ? AuthState.Authenticated
    : AuthState.Unauthenticated;
  const [authState, setAuthState] = useState(currentAuthState);

  function onAuthChange(newUserName, newAuthState) {
    setUserName(newUserName);
    setAuthState(newAuthState);
  }

  return (
    <BrowserRouter>
      <div className="app">
        <Navbar userName={userName} authState={authState} />
        <div className="viewport">
          <main className="h-100">
            <Routes>
              <Route path="/" element={<Home />} exact />
              <Route path="/calendar" element={<Calendar />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/goals" element={<Goals />} />
              <Route
                path="/login"
                element={
                  <Login
                    userName={userName}
                    authState={authState}
                    onLogin={(loginUserName) => {
                      onAuthChange(loginUserName, AuthState.Authenticated);
                    }}
                  />
                }
              />
              <Route path="/signup" element={<Signup />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
        </div>
      </div>
    </BrowserRouter>
  );
}

function NotFound() {
  return (
    <main className="container-fluid bg-secondary text-center">
      404: Return to sender. Address unknown.
    </main>
  );
}

export default App;

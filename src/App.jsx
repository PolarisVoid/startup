import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import "./App.css";
import Home from "./pages/Home";
import Calendar from "./pages/Calendar";
import Projects from "./pages/Projects";
import Goals from "./pages/Goals";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Settings from "./pages/Settings";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Navbar />
        <div className="viewport">
          <main className="vh-100">
            <Routes>
              <Route path="/" element={<Home />} exact />
              <Route path="/calendar" element={<Calendar />} exact />
              <Route path="/projects" element={<Projects />} exact />
              <Route path="/goals" element={<Goals />} exact />
              <Route path="/login" element={<Login />} exact />
              <Route path="/signup" element={<Signup />} exact />
              <Route path="/settings" element={<Settings />} exact />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;

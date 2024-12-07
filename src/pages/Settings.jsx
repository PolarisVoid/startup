import { useNavigate } from "react-router-dom";

function Settings(props) {
  const navigate = useNavigate();
  function logoutUser(username) {
    props.onLogout(username);
    localStorage.removeItem("userName");
    localStorage.removeItem("userId");
    navigate("/login");
  }
  return (
    <>
      <h1>Settings</h1>
      <button className="btn btn-primary-2" onClick={() => {logoutUser()}}>
        Log Out
      </button>
    </>
  );
}
export default Settings;

import "./Navbar.style.css";
import { useTheme } from "../../context/ThemeContext";
import { useUsername } from "../../context/UserContext";

const Login = () => {
  const { theme, setTheme } = useTheme();
  const { username, setUsername } = useUsername();

  const Logout = () => {
    setUsername("");
    localStorage.removeItem("username");
  };

  return (
    <div className="navbar">
      {username && (
        <button className="logoutBtn" onClick={Logout}>
          Logout
        </button>
      )}
      <div
        className="themeChangeBtn"
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      >
        {theme === "light" ? (
          <i className="fa-regular fa-sun"></i>
        ) : (
          <i className="fa-regular fa-moon"></i>
        )}
      </div>
    </div>
  );
};

export default Login;

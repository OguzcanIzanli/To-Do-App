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
    <div>
      <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
        Change Theme
      </button>
      {username && <button onClick={Logout}>Logout</button>}
    </div>
  );
};

export default Login;

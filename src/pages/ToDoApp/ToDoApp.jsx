import "./ToDoApp.style.css";
import Navbar from "../../components/Navbar";
import Login from "../../components/Login";
import List from "../../components/List";
import { useTheme } from "../../context/ThemeContext";
import { useUsername } from "../../context/UserContext";

const ToDoApp = () => {
  const { theme } = useTheme();
  const { username } = useUsername();

  return (
    <div className={`toDoAppContainer ${theme == "light" ? "dark" : "light"}`}>
      <div className="background">
        <div className={`shape ${theme == "light" ? "dark" : "light"}`}></div>
        <div className={`shape ${theme == "light" ? "dark" : "light"}`}></div>
      </div>

      <Navbar />
      {username == "" ? <Login /> : <List />}
    </div>
  );
};

export default ToDoApp;

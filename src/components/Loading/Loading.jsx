import { useTheme } from "../../context/ThemeContext";
import "./Loading.style.css";

function Loading() {
  const { theme } = useTheme();

  return (
    <>
      <br />
      <div className="loadingScreen">
        <div className="balls">
          <div className={`ball ${theme != "light" ? "" : "dark"}`}></div>
          <div className={`ball ball2 ${theme != "light" ? "" : "dark"}`}></div>
          <div className={`ball ball3 ${theme != "light" ? "" : "dark"}`}></div>
        </div>
      </div>
    </>
  );
}

export default Loading;

import "./App.css";
import ToDoApp from "./pages/ToDoApp";
import { ThemeProvider } from "./context/ThemeContext";
import { UserProvider } from "./context/UserContext";

function App() {
  return (
    <UserProvider>
      <ThemeProvider>
        <ToDoApp />
      </ThemeProvider>
    </UserProvider>
  );
}

export default App;

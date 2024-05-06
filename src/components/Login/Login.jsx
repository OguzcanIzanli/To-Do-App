import "./Login.style.css";
import { useTheme } from "../../context/ThemeContext";
import { useUsername } from "../../context/UserContext";
import { useState } from "react";
import useFetch from "../../hooks/fetchMockApi";

const userInitialValue = {
  username: "",
  password: "",
  todos: [],
};

const Login = () => {
  const { theme } = useTheme();
  const { setUsername } = useUsername();
  const [user, setUser] = useState(userInitialValue);
  const [error, setError] = useState("");

  const url = `https://6319c72e6b4c78d91b4337fb.mockapi.io/todos`;
  const { data, postData } = useFetch(url);

  const usernameError = (username) => {
    if (username.trim() === "") {
      return setError("Username cannot be left blank");
    } else if (username.toString().length < 4) {
      return setError("Username must have 4 or more characters");
    }
    return "pass";
  };

  const passwordError = (password) => {
    if (password.trim() === "") {
      return setError("Password cannot be left blank");
    } else if (password.toString().length < 8) {
      return setError("Password must have 8 or more characters");
    }
    return "pass";
  };

  const handleSignup = (e) => {
    e.preventDefault();

    const allUsernames = data.map((data) => data.username);

    if (allUsernames.includes(user.username)) {
      return setError("Username already exists");
    }

    if (
      usernameError(user.username) !== "pass" ||
      passwordError(user.password) !== "pass"
    ) {
      return;
    }

    setUsername(user.username);

    // POST
    postData(user);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const allUsernames = data.map((data) => data.username);

    if (
      usernameError(user.username) !== "pass" ||
      passwordError(user.password) !== "pass"
    ) {
      return;
    }

    if (!allUsernames.includes(user.username)) {
      return setError(`No member named "${user.username}" in users`);
    }

    const registeredUser = data.filter(
      (userObj) => userObj.username == user.username
    );

    if (registeredUser[0].password !== user.password) {
      return setError("Invalid password");
    } else {
      setUsername(user.username);
    }
  };

  return (
    <form className="loginForm" onSubmit={handleSignup}>
      <h3>Login Here</h3>

      <div className="loginSubmitError">{error != "" ? error : <br />}</div>

      <div>
        <label htmlFor="username">Username</label>
        <input
          id="username"
          className={`loginInput ${theme === "light" ? "" : "dark"}`}
          type="text"
          value={user.username}
          onChange={(e) => setUser({ ...user, username: e.target.value })}
          placeholder="Enter your username"
        />

        <label htmlFor="password">Password</label>
        <input
          id="password"
          className={`loginInput ${theme === "light" ? "" : "dark"}`}
          type="text"
          value={user.password}
          onChange={(e) => setUser({ ...user, password: e.target.value })}
          placeholder="Enter your password"
        />
      </div>

      <div className="loginBtns">
        <button
          id="signup"
          type="submit"
          className={`loginBtn ${theme === "light" ? "" : "dark"}`}
          onClick={handleLogin}
        >
          Log In
        </button>

        <button
          id="login"
          type="submit"
          className={`loginBtn ${theme === "light" ? "" : "dark"}`}
        >
          Sign Up
        </button>
      </div>
    </form>
  );
};

export default Login;

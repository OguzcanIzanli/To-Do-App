import "./Login.style.css";
import { useUsername } from "../../context/UserContext";
import { useState } from "react";

const Login = () => {
  const { setUsername } = useUsername();
  const [error, setError] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name);
    if (name.trim() === "") {
      return setError("Username cannot be left blank");
    } else if (name.toString().trim().length < 4) {
      return setError("Username must have 4 or more characters");
    }
    setUsername(name);
  };

  return (
    <form className="loginForm" onSubmit={handleSubmit}>
      <h3>Login Here</h3>

      <div className="loginSubmitError">{error != "" ? error : <br />}</div>

      <label htmlFor="username">Username</label>
      <input
        id="username"
        className="loginInput"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter your username"
      />

      <button id="signup" type="submit" className="loginBtn">
        Log In
      </button>
    </form>
  );
};

export default Login;

import { createContext, useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [username, setUsername] = useState(
    localStorage.getItem("username") ? localStorage.getItem("username") : ""
  );

  useEffect(() => {
    localStorage.setItem("username", username);
  }, [username]);

  const values = {
    username,
    setUsername,
  };

  return <UserContext.Provider value={values}>{children}</UserContext.Provider>;
};

UserProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

// eslint-disable-next-line react-refresh/only-export-components
export const useUsername = () => useContext(UserContext);

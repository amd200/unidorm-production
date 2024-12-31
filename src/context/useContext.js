import { createContext, useState } from "react";

const UserContext = createContext();

const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));

  const updateUserInLocalStorage = (newUser) => {
    setUser(newUser);
    localStorage.setItem("user", JSON.stringify(newUser));
  };

  return <UserContext.Provider value={{ user, updateUserInLocalStorage }}>{children}</UserContext.Provider>;
};

export { UserContextProvider, UserContext };

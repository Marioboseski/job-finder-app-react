import { createContext } from "react";
import { useState } from "react";

export const userContext = createContext();

const LoginUserProvider = ({children}) => {
  const [user, setUser] = useState();

  const loginUser = (data) => {
    setUser(data)
  };

  const logoutUser = () => {
    setUser(null);
  }

  return (
    <userContext.Provider value={{loginUser, logoutUser, user}}>
      {children}
    </userContext.Provider>
  );
}

export default LoginUserProvider;
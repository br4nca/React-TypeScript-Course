import React, { ReactNode, useState, useEffect } from "react";

type AuthContextProps = {
  isLoggedIn: boolean;
  loginHandler: (email: string, password: string) => void;
  logoutHandler: () => void;
};
interface AuthContextProviderProps {
  children: ReactNode;
}

export const AuthContext = React.createContext<AuthContextProps>({
  isLoggedIn: false,
  loginHandler: (email: string, password: string) => {},
  logoutHandler: () => {},
});

const AuthContextProvider: React.FC<AuthContextProviderProps> = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const loginHandler = (email: string, password: string) => {
    // We should of course check email and password
    // But it's just a dummy/ demo anyways
    localStorage.setItem("isLoggedIn", "1");
    setIsLoggedIn(true);
  };
  const logoutHandler = () => {
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
  };
  useEffect(() => {
    const storedUserLoggedInInformation = localStorage.getItem("isLoggedIn");
    if (storedUserLoggedInInformation === "1") {
      setIsLoggedIn(true);
    }
  }, []);
  const contextValue: AuthContextProps = {
    isLoggedIn: isLoggedIn,
    loginHandler: loginHandler,
    logoutHandler: logoutHandler,
  };
  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;

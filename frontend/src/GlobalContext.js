import { createContext, useEffect, useState } from "react";

export const GlobalContext = createContext();

export const GlobalProvider = (props) => {
  const [userData, setUserData] = useState({});
  const [theme, setTheme] = useState(
    localStorage.getItem("edtech-theme") === true ? true : false
  );
  return (
    <GlobalContext.Provider
      value={{
        user: [userData, setUserData],
        siteTheme: [theme, setTheme],
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};

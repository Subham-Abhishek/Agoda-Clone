import React, { useState, createContext } from "react";


export const AppContext = createContext();

function AppProvider(props) {
  const [searchedCity, setSearchedCity] = useState("");
  console.log(searchedCity);

  return (
    <AppContext.Provider value={{searchedCity, setSearchedCity}} >
      {props.children}
    </AppContext.Provider>
  );
}

export default AppProvider;
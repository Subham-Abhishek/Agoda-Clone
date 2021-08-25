import { useState } from "react";
import { Route } from "react-router-dom";
import "./App.css";
import IsAuth from "./Context/Auth";
import { Routes } from "./Routes/Routes";

function App() {
  const [isLogin, setLogin] = useState(false);
  return (
    <IsAuth.Provider
      value={{
        isAuth: isLogin,
        toggle: setLogin,
      }}
    >
      <div className="App">
        <Routes />
      </div>
    </IsAuth.Provider>
  );
}

export default App;

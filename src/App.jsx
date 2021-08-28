import { useState } from "react";
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
      <Routes />
    </IsAuth.Provider>
  );
}

export default App;

import { useState } from "react";
import "./App.css";
import { Footer } from "./Components/Landing/Footer/Footer";
import IsAuth from "./context/Auth";
import { Routes } from "./Routes/Routes";

function App() {
  const [isLogin, setLogin] = useState(false);
  return (
    <IsAuth.Provider
      value={{
        isAuth: isLogin,
        toggle: setLogin,
        user:{}
      }}
    >
      <Routes />
      <Footer/>
    </IsAuth.Provider>
  );
}

export default App;

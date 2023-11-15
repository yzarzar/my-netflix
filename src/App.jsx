import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import SignIn from "./pages/SignIn";
import Home from "./pages/Home";
import Path from "./routes/Path";

function App() {

  return (
    <div className=" cus-bg" >
      <Path/>
    </div>
  );
}

export default App;

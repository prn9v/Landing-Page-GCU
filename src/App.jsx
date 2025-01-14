import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import HeroSection from "./Components/HeroSection.jsx";
import Round1 from "./Components/Round1.jsx";
import Round2 from "./Components/Round2.jsx";
import Round3 from "./Components/Round3..jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <HeroSection />
      <Round1 />
      <Round2 />
      <Round3 />
    </>
  );
}

export default App;

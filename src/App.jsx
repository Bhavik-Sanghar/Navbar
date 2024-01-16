import { Routes, Route } from "react-router-dom";

import "./App.css";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Skills from "./Pages/Skill";
import Contact from "./Pages/Contact";
import Error from "./Pages/Error";
import Navbar from "./Pages/Navbar";

function App() {
  return (
    <>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/*" element={<Error />} />
      </Routes>
    </>
  );
}

export default App;

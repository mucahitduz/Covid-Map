import { Route, Routes } from "react-router-dom";
import React, { useState } from "react";
import ReactTooltip from "react-tooltip";
import Home from "./pages/Home";
import Country from "./pages/Country";
import "./styles/App.css";

function App() {
  const [content, setContent] = useState("");
  return (
    <>
      <Routes>
        <Route path="/" element={<Home setTooltipContent={setContent} />} />
        <Route path="/:name" element={<Country />} />
      </Routes>
      <ReactTooltip>{content}</ReactTooltip>
    </>
  );
}

export default App;

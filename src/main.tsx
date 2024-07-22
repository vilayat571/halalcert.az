import React from "react";
import ReactDOM from "react-dom/client";
import "./assets/styles/index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./pages/Main/App.tsx";
import About from "./pages/About/About.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/haqqımızda" element={<About />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

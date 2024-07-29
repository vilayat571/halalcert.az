import React from "react";
import ReactDOM from "react-dom/client";
import "./assets/styles/index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./pages/Main/App.tsx";
import About from "./pages/About/About.tsx";
import Contact from "./pages/Contact/Contact.tsx";
import Laws from "./pages/Laws/Laws.tsx";
import NotFound from "./pages/Notfound/NotFound.tsx";
import { HelmetProvider } from "react-helmet-async";
import Mainnews from "./pages/News/Mainnews.tsx";
import Singlenews from "./pages/News/Singlenews.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/haqqımızda" element={<About />} />
          <Route path="/elaqe" element={<Contact />} />
          <Route path="/qanunvericilik" element={<Laws />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/xeberler" element={<Mainnews />} />
          <Route path="/xeberler/:id" element={<Singlenews />} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  </React.StrictMode>
);

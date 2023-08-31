import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Naw from "./components/nawbar/Naw";
import About from "./sahifalar/about/About";
import Headar from "./sahifalar/headar/Headar";
import Feter from "./sahifalar/Feter/Feter";
import Offer from "./sahifalar/offer/Offer";
import Contact from "./sahifalar/contact/Contact";
// import { Naw } from "./components/nawbar/Naw";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Naw />
      <Routes>
        <Route index element={<App />} />
        <Route path="/headar" index element={<Headar />} />
        <Route path="/A" index element={<Feter />} />
        <Route path="/Ab" index element={<Offer />} />
        <Route path="/About" index element={<About />} />
        <Route path="/A" index element={<Contact />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// src/App.js
import { Analytics } from "@vercel/analytics/react"
import { gsap } from "gsap";
import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./Pages/Home/NavBar";
import Footer from "./Pages/Home/Footer";
import Home from "./Pages/Home/Homescreen";
import ContactPage from "./Pages/Home/Homescreen/ContactPage";
import Work from "./Pages/Home/Homescreen/Work";
import About from "./Pages/Home/Homescreen/About";
import ProjectPage from "./Pages/Home/[slug]";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route index element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/ContactPage" element={<ContactPage />} />
          <Route path="/Work" element={<Work />} />
          <Route path="/About" element={<About />} />
          <Route path="/work/:slug" element={<ProjectPage />} />
          <Route path="*" element={<div>404 Not Found</div>} />
        </Routes>
        <Footer />
      </Router>
      <Analytics />
    </div>
  );
}

export default App;

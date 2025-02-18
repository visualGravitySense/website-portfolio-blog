import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import ProjectPage from "./pages/ProjectPage";
import ClassPage from "./pages/ClassPage";

function App() {
  return (
    <Router>
      <Routes> 
        <Route path="/website-portfolio-blog" element={<Home />} />
        <Route path="/case/:id" element={<ProjectPage />} />
        <Route path="/class/:id" element={<ClassPage />} />
      </Routes>
    </Router>

      
    
    
  );
};

export default App;

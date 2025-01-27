import React from "react";
import Header from "./Header";
import HeroSection from "./HeroSection";
import ChaosBlock from "./ChaosBlock";
import ComplexComponent from "./ComplexComponent";
import CourseComponent from "./CourseComponent";
import LessonCards from "./LessonCards";
import ProjectsGallery from "./ProjectsGallery";
import ContactForm from "./ContactForm";
import Footer from "./Footer";
import Portfolio from "./Portfolio";
import "./App.css";
// import LandingPage from "./LandingPage"; // Импортируйте новый компонент страницы
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";



const App = () => {
  return (
    // <Router>
      <div className="app">
        <Header />
        <HeroSection />

        {/* <ComplexComponent /> */}
        {/* <Portfolio /> */}

        {/* <CourseComponent /> */}

        {/* <Routes> */}
          {/* <Route path="/" element={<ComplexComponent />} /> */}
          {/* <Route path="/landing" element={<LandingPage />} /> */}
          {/* <Route path="/website-portfolio-blog" element={<HeroSection />} /> */}
          {/* Добавьте новые страницы по мере необходимости */}
        {/* </Routes> */}
        <Footer />
      </div>
    // </Router>
    
  );
};

export default App;

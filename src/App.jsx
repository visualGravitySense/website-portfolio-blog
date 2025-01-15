import React from "react";
import Header from "./Header";
import HeroSection from "./HeroSection";
import ChaosBlock from "./ChaosBlock";
import LessonCards from "./LessonCards";
import ProjectsGallery from "./ProjectsGallery";
import ContactForm from "./ContactForm";
import Footer from "./Footer";
import "./App.css";

const App = () => {
  return (
    <div className="app">
      <Header />
      <HeroSection />
      <ChaosBlock />
      {/* <LessonCards /> */}
      {/* <ProjectsGallery /> */}
      <ContactForm />
      <Footer />
    </div>
  );
};

export default App;

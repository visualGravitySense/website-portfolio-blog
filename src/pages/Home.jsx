import React from "react";

import Header from "../Header";
import Hero from "../Hero";
import ComplexComponent from "../ComplexComponent";
import CourseComponent from "../CourseComponent";
import Footer from "../Footer";
import Portfolio from "../Portfolio";
import "../App.css";

import crypto1 from '../assets/crypto-4.jpg';

import PortfolioCard from "../components/PortfolioCard";

const projects = [
    { id: 1, title: "Victorija Driving School", description: "Branding, complete website update, modern UI/UX design, and creation of visual content.", image: crypto1 },
    // { id: 2, title: "UI/UX Design", description: "Creative design systems", image: "/img2.png" },
    // { id: 3, title: "UI/UX Design", description: "Creative design systems", image: "/img2.png" },
    // { id: 4, title: "UI/UX Design", description: "Creative design systems", image: "/img2.png" },

  ];
  
export default function Home() {
    return (

        <div className="app">
            <Header />

            {/* <HeroSection /> */}
            <Hero 
                title="I create chaos to organize the world" 
                subtitle="Design without rules is my element! Here chaos finds order." 
                ctaText="Order a project" 
                showPopup={true} 
                />

            <ComplexComponent />
            <Portfolio />

            <div className="section-header">
                <h2 style={{ textAlign: "center", marginBottom: "1.5rem" }}>
                    My <span className="highlight">Cases</span>
                </h2>
            </div>  

            <div
                style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                gap: "1.5rem",
                }}
            >
                {projects.map((project) => (
                <PortfolioCard key={project.id} project={project} />
                ))}
            </div>

            <CourseComponent />

            
            <Footer />
        </div>    
    );
}
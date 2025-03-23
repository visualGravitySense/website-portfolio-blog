import React from "react";
import { useEffect, useState } from "react";
import { db, collection, getDocs } from "../../firebaseConfig";
import { Link } from "react-router-dom";

import Header from "../Header";
import Hero from "../Hero";
import ComplexComponent from "../components/ComplexComponent";
import CourseComponent from "../CourseComponent";
import Footer from "../Footer";
import Portfolio from "../Portfolio";
import "../App.css";
import "../Component.css";

import crypto1 from '../assets/crypto-4.jpg';

import DetailsComponent from "../DetailsComponent";
import AboutMe from "../components/AboutMe";


export default function Home() {
    const [cardsData, setCardsData] = useState([]);
    const [classesData, setClassesData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const querySnapshot = await getDocs(collection(db, "cases"));
            const data = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
            
            const classesSnapshot = await getDocs(collection(db, "classes"));
            const classes = classesSnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));

            setCardsData(data);
            setClassesData(classes);
        };

        fetchData();
    }, []);

    
    
    return (

        <div className="app">
            <Header />

            {/* <HeroSection /> */}
            <Hero 
                title="Дизайн и IT-консалтинг, основанные на данных" 
                subtitle="Помогаю бизнесу расти через аналитику, UX/UI и автоматизацию процессов" 
                ctaText="Запросить консультацию" 
                showPopup={true} 
                />
            
            {/* About Me Component */}
            <AboutMe />

            {/* Block About Me */}
            <ComplexComponent />

            {/* <Competencies /> */}

            {/* Block My Portfolio Works */}
            {/* <Portfolio /> */}

            <div className="section-header" id="projects">
                <h2 style={{ textAlign: "center", marginBottom: "1.5rem" }}>
                Кейсы моих <span className="highlight">проектов</span>
                </h2>
            </div>  

            <div
                className= "block"
                style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                gap: "1.5rem",
                }}
            >
                {cardsData.map((item) => (
                    <div key={item.id}>
                        <DetailsComponent  
                            imageSrc3={item.imageSrc3}
                            title={item.title}
                            description={item.description}
                            id={item.id}
                        />
                        {/* <Link to={`/case/${item.id}`}>
                            <button className="btn-purple" style={{
                                marginTop: "10px",
                                padding: "8px 16px",
                                // background: "blue",
                                color: "white",
                                border: "none",
                                cursor: "pointer"
                            }}>
                                View Details
                            </button>
                        </Link> */}
                    </div>
                ))}
            </div>

            {/* Courses component prepare for Gamma Intellegence */}
            {/* <CourseComponent /> */}
            <div className="complex-component" id="lessons">
      
                <div className="section-header">
                        <h2 style={{ textAlign: "center", marginBottom: "1.5rem" }}>
                        Лучшие курсы - <span className="highlight">совершенствуйте свои навыки  </span>в области ИТ и дизайна! 
                        </h2>
                    </div>
            {/* <div className="section-header">
                <h2 style={{ textAlign: "center", marginBottom: "1.5rem" }}>
                IT and Design <span className="highlight">Classes</span>
                </h2>
            </div>   */}

            <div
                className= "block"
                style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                gap: "1.5rem",
                }}
            >
                {classesData.map((item) => (
                    <div key={item.id}>
                        <CourseComponent  
                            image1={item.image}
                            title={item.title}
                            description={item.description}
                            id={item.id}
                        />
                        
                    </div>
                ))}
            </div>
            
            </div>
            

            {/* Footer component */}
            <Footer />
        </div>    
    );
}
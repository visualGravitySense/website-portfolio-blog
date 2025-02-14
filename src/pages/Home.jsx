import React from "react";
import { useEffect, useState } from "react";
import { db, collection, getDocs } from "../../firebaseConfig";
import { Link } from "react-router-dom";

import Header from "../Header";
import Hero from "../Hero";
import ComplexComponent from "../ComplexComponent";
import CourseComponent from "../CourseComponent";
import Footer from "../Footer";
import Portfolio from "../Portfolio";
import "../App.css";
import "../Component.css";

import crypto1 from '../assets/crypto-4.jpg';

import PortfolioCard from "../components/PortfolioCard";
import DetailsComponent from "../DetailsComponent";


  
export default function Home() {
    const [cardsData, setCardsData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const querySnapshot = await getDocs(collection(db, "cases"));
            const data = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
            setCardsData(data);
        };

        fetchData();
    }, []);
    
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

            {/* Block About Me */}
            <ComplexComponent />

            {/* Block My Portfolio Works */}
            <Portfolio />

            <div className="section-header">
                <h2 style={{ textAlign: "center", marginBottom: "1.5rem" }}>
                Cases of my <span className="highlight">successful projects</span>
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

            {/* Footer component */}
            <Footer />
        </div>    
    );
}
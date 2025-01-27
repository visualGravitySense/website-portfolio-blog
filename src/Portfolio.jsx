import React from "react";
import "./Component.css";
import crypto1 from './assets/crypto-4.jpg';
import gamma1 from './assets/gamma-1.png';
import digo1 from './assets/digo-1.png';
import beauty1 from './assets/beauty-1.png';
import amoe1 from './assets/amoe-1.png';
import aawra1 from './assets/aawra-1.png';

const Portfolio = () => {
  const works = [
    {
      id: 1,
      title: "Gamma Intelligence Training Centre",
      description:
        "Website redesign and branding refresh. Work in progress, fresh modern interface.",
      image: gamma1, // путь к картинке
      link: "https://www.behance.net/gallery/217490965/Gamma-Intelligence-Training-Centre-Website-redesign",
    },
    {
      id: 2,
      title: "Digo Online Education Platform",
      description:
        "Modern interface and revolutionary content management system to simplify the learning process.",
      image: digo1, // путь к картинке
      link: "https://www.behance.net/gallery/86341429/Online-Course-digo",
    },
    {
      id: 3,
      title: "Crypto Wise Educational Platform",
      description:
        "Lessons that help you understand the basics and concepts of cryptocurrency.",
      image: crypto1, // путь к картинке
      link: "https://www.behance.net/gallery/211871981/Crypto-Dashboard",
    },
    {
        id: 4,
        title: "AMOE Startup Support Platform",
        description:
          "Support for startups and crowdfunding. Focused on developing ideas and goals.",
        image: amoe1, // путь к картинке
        link: "https://www.behance.net/gallery/67634993/Amoe-Your-Startup-Assistance",
      },
      {
        id: 5,
        title: "Online booking and registration system",
        description:
          "Developing a user-friendly booking system that allows clients to easily find and book services.",
        image: beauty1, // путь к картинке
        link: "https://www.behance.net/gallery/84094071/Re-Vita-Website-Redesign",
      },
      {
        id: 6,
        title: "Advertising campaigns for beauty salons",
        description:
          "Conducting promotional campaigns to attract new customers.",
        image: aawra1, // путь к картинке
        link: "https://www.behance.net/gallery/69701187/Aawraee-online-beauty-exhibition",
      },
  ];

  return (
    <section id="projects" style={{ padding: "2rem", backgroundColor: "#fff" }}>
        <div className="section-header">
            <h2 style={{ textAlign: "center", marginBottom: "1.5rem" }}>
                My <span className="highlight">Projects</span> and <span className="highlight">Works</span>
             </h2>
        </div>
      
      {/* <h2 className="">
      My Best   <span className="highlight">Works</span>
          </h2> */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "1.5rem",
        }}
      >
        {works.map((work) => (
          <div
            key={work.id}
            className="card"
            // style={{
            //   border: "1px solid #ddd",
            //   borderRadius: "12px",
            //   overflow: "hidden",
            //   boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            //   backgroundColor: "#fff",
            // }}
          >
            <img
              src={work.image}
              alt={work.title}
              style={{ width: "100%", height: "200px", objectFit: "cover" }}
            />
            <div style={{ padding: "1rem" }}>
              <h3 style={{ margin: "0 0 0.5rem", color: "#6e3aff" }}>{work.title}</h3>
              <p style={{ marginBottom: "1rem", color: "#333" }}>
                {work.description}
              </p>
              <div className="buttons">
                <a
                    href={work.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    // style={{
                    //   display: "inline-block",
                    //   padding: "0.5rem 1rem",
                    //   backgroundColor: "#007bff",
                    //   color: "#fff",
                    //   textDecoration: "none",
                    //   borderRadius: "8px",
                    //   transition: "background-color 0.3s",
                    // }}
                    onMouseEnter={(e) =>
                    (e.target.style.backgroundColor = "#4911e2")
                    }
                    onMouseLeave={(e) =>
                    (e.target.style.backgroundColor = "#6e3aff")
                    }
                ><button className="btn-purple">
                    View Details</button>
                </a>

              </div>
              
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;

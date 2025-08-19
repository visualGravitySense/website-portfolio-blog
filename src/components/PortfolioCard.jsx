import { Link } from "react-router-dom";
import "../Component.css";



export default function PortfolioCard({ project }) {
  return (
    <section id="cases" style={{ padding: "2rem", backgroundColor: "#fff" }}>
        

        <div className="card">
        <img src={project.image} alt={project.title} 
        style={{ width: "100%", height: "200px", objectFit: "cover" }}/>
        
            <div style={{ padding: "1rem" }}>
                <h3 style={{ margin: "0 0 0.5rem", color: "#6e3aff" }}>{project.title}</h3>
                <p style={{ marginBottom: "1rem", color: "#333" }}>{project.description}</p>
                <div className="buttons">
                    <Link to={`/project/${project.id}`} className=""
                        onMouseEnter={(e) =>
                        (e.target.style.backgroundColor = "#4911e2")
                        }
                        onMouseLeave={(e) =>
                        (e.target.style.backgroundColor = "#6e3aff")
                        }>
                        <button className="btn-purple">
                        View Details
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    </section>
  );
}

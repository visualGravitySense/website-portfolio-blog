import { useParams, Link } from "react-router-dom";
import Hero from "../Hero";
import IntroductionComponent from "../IntroductionComponent";
import AboutComponent from "../AboutComponent";
import photo1 from '../assets/contact-1.png';
import DetailsComponent from "../DetailsComponent";

const projectData = {
  1: { title: "Startup Project", content: "Details about full cycle development." },
//   2: { title: "UI/UX Design", content: "Details about creative design systems." },
};

export default function ProjectPage() {
  const cardsData = [
    {
      imageSrc3: photo1,
      title: "Marketing Digital Designer",
      description: "Coolbet | January 2022 - April 2024",
      secondaryTitle: "Creative Projects",
      secondaryDescription: "Conceptualized and developed compelling digital assets"
    },
    {
      imageSrc3: photo1,
      title: "Product Manager",
      description: "TechCorp | 2020 - 2022",
      secondaryTitle: "Product Development",
      secondaryDescription: "Led cross-functional teams to deliver innovative solutions"
    },
    {
      imageSrc: photo1,
      title: "1Marketing Digital Designer",
      description: "Coolbet | January 2022 - April 2024",
      secondaryTitle: "Creative Projects",
      secondaryDescription: "Conceptualized and developed compelling digital assets"
    },
    {
      imageSrc: photo1,
      title: "1Product Manager",
      description: "TechCorp | 2020 - 2022",
      secondaryTitle: "Product Development",
      secondaryDescription: "Led cross-functional teams to deliver innovative solutions"
    }
  ];

  const { id } = useParams();
  const project = projectData[id];

  if (!project) {
    return <h2>Project not found</h2>;
  }

  return (
    <>
      <Hero 
        title="Victoria Driving School" 
        subtitle="New website, fresh UI/UX, and marketing visuals for social media." 
        showPopup={false}  
        />
    
    <div className="section-header">
          <h2 style={{ textAlign: "center", marginBottom: "1.5rem" }}>
              About <span className="highlight">Project</span> 
            </h2>
      </div>

      <div className="row">
        <div className="column">
        <div>{cardsData.map((item, index) => ( // ✅ Добавляем index
          <IntroductionComponent
            key={index}
            imageSrc3={item.imageSrc3}
            title={item.title}
            description={item.description}
            secondaryTitle={item.secondaryTitle}
            secondaryDescription={item.secondaryDescription}
          />
        ))}</div>
       
      </div>
      <div className="column">
        <div>{cardsData.map((item, index) => ( // ✅ Добавляем index
          <AboutComponent
            key={index}
            imageSrc={item.imageSrc}
            title={item.title}
            description={item.description}
            secondaryTitle={item.secondaryTitle}
            secondaryDescription={item.secondaryDescription}
          />
        ))}</div>
       
      </div>

        
        <div className="row">{cardsData.map((item, index) => ( // ✅ Добавляем index
            <div className="columnBig">
            <AboutComponent
              key={index}
              imageSrc={item.imageSrc}
              title={item.title}
              description={item.description}
              secondaryTitle={item.secondaryTitle}
              secondaryDescription={item.secondaryDescription}
            /></div>
          ))}</div>
        
      </div>

      <div className="cards-container">{cardsData.map((item, index) => ( // ✅ Добавляем index
           
      <DetailsComponent 
        key={index}
        imageSrc={item.imageSrc3}
        title={item.title}
        description={item.description}
        secondaryTitle={item.secondaryTitle}
        secondaryDescription={item.secondaryDescription}
      />
     
      ))}</div>
        
      {/* <Link to="/website-portfolio-blog" className="cta-button">Back to Home</Link> */}
      
    
    </>
    
  );
}

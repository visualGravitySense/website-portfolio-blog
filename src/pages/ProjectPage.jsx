import { useEffect, useState } from "react";
import { db, collection, getDocs } from "../../firebaseConfig";
import { doc, getDoc } from "firebase/firestore";

import { useParams, Link } from "react-router-dom";
import Hero from "../Hero";
import IntroductionComponent from "../IntroductionComponent";
import AboutComponent from "../AboutComponent";
import photo1 from '../assets/contact-1.png';
import DetailsComponent from "../DetailsComponent";


const ProjectPage = () => {
  const { id } = useParams();  // Получаем ID кейса из URL
    const [caseData, setCaseData] = useState(null);

    useEffect(() => {
      const fetchCase = async () => {
          if (!id) return;

          try {
              const caseRef = doc(db, "cases", id); // Ссылка на документ
              const caseSnap = await getDoc(caseRef); // Получаем данные

              if (caseSnap.exists()) {
                  setCaseData(caseSnap.data()); // Устанавливаем объект
              } else {
                  console.log("Документ не найден!");
              }
          } catch (error) {
              console.error("Ошибка загрузки данных:", error);
          }
      };

      fetchCase();
  }, [id]);

  if (!caseData) {
      return <p>Loading...</p>;
  }

  return (
    <div>

        <Hero 
        title="Victoria Driving School" 
        subtitle="New website, fresh UI/UX, and marketing visuals for social media." 
        showPopup={false}  
        />
    
    
    
    <div className="cards-container">
      
        <DetailsComponent 
          
            imageSrc2={caseData.imageSrc2}
            title={caseData.titleShort}
            description={caseData.descrShirt}
            secondaryTitle={caseData.secondaryTitleShort}
            secondaryDescription={caseData.secDescrShirt}
        />

        

        <DetailsComponent 
                
                imageSrc3={caseData.imageSrc3}
                title={caseData.titleCustomer}
                description={caseData.descrCustomer}
                // secondaryTitle={caseData.secondaryTitle}
                // secondaryDescription={caseData.secondaryDescription}
            />

        


        <DetailsComponent 
                
                // imageSrc3={caseData.imageSrc3}
                title={caseData.titleTargets}
                description={caseData.descrTargets}
                // secondaryTitle={caseData.secondaryTitle}
                // secondaryDescription={caseData.secondaryDescription}
            />
     
    </div>

    <div className="cards-container">
      
        <DetailsComponent 
          
            // imageSrc3={caseData.imageSrc3}
            // title={caseData.titleType}
            // description={caseData.descrType}
            // secondaryTitle={caseData.secondaryTitle}
            // secondaryDescription={caseData.secondaryDescription}
        />

        {/* <DetailsComponent 
                
                imageSrc3={caseData.imageSrc3}
                title={caseData.title}
                description={caseData.description}
                secondaryTitle={caseData.secondaryTitle}
                secondaryDescription={caseData.secondaryDescription}
            /> */}

        {/* <DetailsComponent 
                
                imageSrc3={caseData.imageSrc3}
                title={caseData.title}
                description={caseData.description}
                secondaryTitle={caseData.secondaryTitle}
                secondaryDescription={caseData.secondaryDescription}
            /> */}
     
    </div>

    

    {/* <div className="row"> */}

         {/* <div className="column">
          <IntroductionComponent
            
            imageSrc3={caseData.imageSrc3}
            title={caseData.title}
            description={caseData.description}
            secondaryTitle={caseData.secondaryTitle}
            secondaryDescription={caseData.secondaryDescription}
          />
        
        <IntroductionComponent
            
            imageSrc3={caseData.imageSrc3}
            title={caseData.title}
            description={caseData.description}
            secondaryTitle={caseData.secondaryTitle}
            secondaryDescription={caseData.secondaryDescription}
          />
       
      </div> */}

      {/* <div className="column">
          <IntroductionComponent
            
            imageSrc3={caseData.imageSrc3}
            title={caseData.title}
            description={caseData.description}
            secondaryTitle={caseData.secondaryTitle}
            secondaryDescription={caseData.secondaryDescription}
          />
        
        <IntroductionComponent
            
            imageSrc3={caseData.imageSrc3}
            title={caseData.title}
            description={caseData.description}
            secondaryTitle={caseData.secondaryTitle}
            secondaryDescription={caseData.secondaryDescription}
          />
       
      </div> */}

      {/* <div className="column">
        
          <AboutComponent
            
            imageSrc={caseData.imageSrc}
            title={caseData.title}
            description={caseData.description}
            secondaryTitle={caseData.secondaryTitle}
            secondaryDescription={caseData.secondaryDescription}
          />

        <AboutComponent
            
            imageSrc={caseData.imageSrc}
            title={caseData.title}
            description={caseData.description}
            secondaryTitle={caseData.secondaryTitle}
            secondaryDescription={caseData.secondaryDescription}
          />
      </div> */}

      {/* <div className="column">
        
          <AboutComponent
            
            imageSrc={caseData.imageSrc}
            title={caseData.title}
            description={caseData.description}
            secondaryTitle={caseData.secondaryTitle}
            secondaryDescription={caseData.secondaryDescription}
          />

        <AboutComponent
            
            imageSrc={caseData.imageSrc}
            title={caseData.title}
            description={caseData.description}
            secondaryTitle={caseData.secondaryTitle}
            secondaryDescription={caseData.secondaryDescription}
          />
      </div>

    </div> */}
    </div>
  );
};

export default ProjectPage;
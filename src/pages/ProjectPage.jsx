import { useEffect, useState } from "react";
import { db, collection, getDocs } from "../../firebaseConfig";
import { doc, getDoc } from "firebase/firestore";

import { useParams, Link } from "react-router-dom";
import Hero from "../Hero";
import IntroductionComponent from "../IntroductionComponent";
import AboutComponent from "../AboutComponent";
import AboutCourse from "../AboutCourse";
import AboutPlan from "../AboutPlan";
import photo1 from '../assets/contact-1.png';
import DetailsComponent from "../DetailsComponent";
import Header from "../Header"
import Footer from "../Footer"

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
        <Header/>

        <Hero 
        title="Cases of my projects" 
        subtitle="Project cases websites, applications." 
        showPopup={false}  
        />
    
    
    
    <div className="cards-container">
        {/* <div className="row"> */}
        {/* <div className="column"> */}
            {/* <AboutCourse           
                imageSrc2={caseData.imageSrc2}
                title={caseData.titleShort}
                description={caseData.descrShirt}
                secondaryTitle={caseData.secondaryTitleShort}
                secondaryDescription={caseData.secDescrShirt}
            /> */}
            {/* </div> */}

        {/* <div className="column"> */}
            {/* <AboutPlan 
                imageSrc3={caseData.imageSrc3}
                title={caseData.titleCustomer}
                description={caseData.descrCustomer}
                secondaryTitle={caseData.secondaryTitle}
                secondaryDescription={caseData.secondaryDescription}
            /> */}
            
        {/* </div> */}
        {/* </div> */}
        
        <div className="row"> 

            <div className="column">
                <AboutComponent           
                    imageSrc2={caseData.imageSrc2}
                    title={caseData.titleShort}
                    description={caseData.descrShirt}
                    secondaryTitle={caseData.secondaryTitleShort}
                    secondaryDescription={caseData.secDescrShirt}
                />
                </div>
            <div className="column">
                <AboutComponent 
                    imageSrc3={caseData.imageSrc3}
                    title={caseData.titleCustomer}
                    description={caseData.descrCustomer}
                    // secondaryTitle={caseData.secondaryTitle}
                    // secondaryDescription={caseData.secondaryDescription}
                />
            </div>
            </div>
      
        

        
            <div className="row"> 

                <div className="column">
                    <AboutComponent 
                            imageSrc1={caseData.imageSrc1}
                            title={caseData.titleTargets}
                            description={caseData.descrTargets}
                            // secondaryTitle={caseData.secondaryTitle}
                            // secondaryDescription={caseData.secondaryDescription}
                        />
                        </div>
                        <div className="column">
                            <AboutComponent 
                            // imageSrc3={caseData.imageSrc3}
                            title={caseData.titleTargets}
                            description={caseData.descrTargets}
                            // secondaryTitle={caseData.secondaryTitle}
                            // secondaryDescription={caseData.secondaryDescription}
                        />
                        </div>
                    </div>
     
    </div>

    <div className="cards-container">
      
        {/* <DetailsComponent  */}
          
            {/* // imageSrc3={caseData.imageSrc3}
            // title={caseData.titleType}
            // description={caseData.descrType}
            // secondaryTitle={caseData.secondaryTitle}
            // secondaryDescription={caseData.secondaryDescription} */}
        {/* /> */}

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
    <Footer />
    </div>
  );
};

export default ProjectPage;
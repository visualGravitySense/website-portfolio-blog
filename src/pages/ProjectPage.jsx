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

import myPhoto from "../assets/photo-1.jpg";
import OneLineText from "../components/OneLineText"



const ProjectPage = () => {
    const [descrTargets, setDescrTargets] = useState("");    
    

    const { id } = useParams();  // Получаем ID кейса из URL

    const [caseData, setCaseData] = useState(null);

    
    useEffect(() => {
        const fetchCase = async () => {
            if (!id) return;
            try {
              const caseRef = doc(db, "cases", id);
              const caseSnap = await getDoc(caseRef);
              if (caseSnap.exists()) {
                const data = caseSnap.data();
                setCaseData(data);
                setDescrTargets(data.descrTargets); // Берем описание из документа кейса
              } else {
                console.log("Документ кейса не найден!");
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
        title={caseData.title}  
        description={caseData.description}
        subtitle={caseData.subtitle} 
        ctaText="Запросить консультацию"
        showPopup={true}  
        />


        <div className="about-me">
              {/* Левая часть - Фото */}
              <div className="about-me__image">
                <img
                  src={caseData.imageSrc1}
                  alt="Case Photo"
                  className="w-72 h-72 object-cover rounded-2xl shadow-lg border-4 border-purple-500"
                />
              </div>
              
              {/* Правая часть - Текст */}
              <div className="about-me__text">
                <h2 className="text-4xl font-bold text-purple-400">{caseData.title}</h2>
                <p className="text-lg">
                    {/* {caseData.descrTargets} */}
                </p>

                    <OneLineText text={descrTargets} />

              </div>
            </div>
    
    <div className="cards-container">
        
            <div className="section-header">
                <h2 style={{ textAlign: "center" }}>
                Как я <span className="highlight">могу помочь</span>
                </h2>
            </div> 
            

        <div className="row"> 

            <div className="column3">
                <AboutComponent           
                    imageSrc2={caseData.imageSrc2}
                    title={caseData.titleShort}
                    description={caseData.descrCustomer}
                    secondaryTitle={caseData.secondaryTitle}
                    secondaryDescription={caseData.secondaryDescription}
                />
                </div>
            <div className="column3">
                <AboutComponent 
                    imageSrc3={caseData.imageSrc3}
                    title={caseData.titleShort}
                    description={caseData.descrCustomer}
                    secondaryTitle={caseData.secondaryTitle}
                    secondaryDescription={caseData.secondaryDescription}
                />
            </div>

            <div className="column3">
                <AboutComponent 
                    imageSrc3={caseData.imageSrc3}
                    title={caseData.titleShort}
                    description={caseData.descrCustomer}
                    secondaryTitle={caseData.secondaryTitle}
                    secondaryDescription={caseData.secondaryDescription}
                />
            </div>

        </div>
      
        

        <div className="about-me">
              {/* Левая часть - Фото */}

              <div className="about-me__text">
                <h2 className="text-4xl font-bold text-purple-400">{caseData.titleCustomer}</h2>
                <p className="text-lg">
                    {/* {caseData.descrTargets} */}
                </p>

                    <OneLineText text={descrTargets} />

              </div>

            {/* Правая часть - Текст */}
              <div className="about-me__image">
                <img
                  src={caseData.imageSrc1}
                  alt="Case Photo"
                  className="w-72 h-72 object-cover rounded-2xl shadow-lg border-4 border-purple-500"
                />
              </div>
            </div>

        

            <h2 className="text-4xl font-bold text-purple-400">📌 Что входит в наш digital-комплекс?</h2>

            <div className="row"> 

                <div className="column">
                    <AboutComponent 
                            // imageSrc1={caseData.imageSrc1}
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

    

    
    <Footer />
    </div>
  );
};

export default ProjectPage;
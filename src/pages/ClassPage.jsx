import { useEffect, useState } from "react";
import { db, collection, getDocs } from "../../firebaseConfig";
import { doc, getDoc } from "firebase/firestore";

import { useParams, Link } from "react-router-dom";
import Hero from "../Hero";
import IntroductionComponent from "../IntroductionComponent";
import AboutComponent from "../AboutComponent";
import CompaniesComponent from "../CompaniesComponent";
import AboutCourse from "../AboutCourse";
import AboutCertificate from "../AboutCertificate";
import AboutCourseCards from "../AboutCourseCards";
import AboutPlan from "../AboutPlan";
import AboutSkills from "../AboutSkills";
import AboutIndustry from "../AboutIndustry";
import ReviewCard from "../components/ReviewCard"
import CompanyLogos from "../components/CompanyLogos"
import TeacherComponent from "../components/TeacherComponent"
import ProfessionAbout from "../components/ProfessionAbout"
import VideoSection from "../components/VideoSection"
import Faq from "../components/Faq"
import BgImageSection from "../components/BgImageSection"

import note from '../assets/note1.png';
import photo1 from '../assets/contact-1.png';
import DetailsComponent from "../DetailsComponent";
import Header from "../Header"
import Footer from "../Footer"

import emailjs from "emailjs-com";
import "../Popup.css";

import ReactMarkdown from "react-markdown";
import "../Component.css";


const ClassPage = ({ showPopup }) => {

    const [markdownText, setMarkdownText] = useState("");

    useEffect(() => {
        const fetchMarkdown = async () => {
            const querySnapshot = await getDocs(collection(db, "markdownData"));
            if (!querySnapshot.empty) {
                setMarkdownText(querySnapshot.docs[0].data().content);
            }
        };

        fetchMarkdown();
    }, []);

    const [isOpen, setIsOpen] = useState(false);
      const [formData, setFormData] = useState({
        name: "",
        company: "",
        email: "",
        message: "",
      }); 

      const togglePopup = () => setIsOpen(!isOpen);

      const handleInputChange = (e) => {
            const { name, value } = e.target;
            setFormData({ ...formData, [name]: value });
          };
        
          const handleSubmit = (e) => {
            e.preventDefault();
        
            if (!formData.name || !formData.email) {
              alert("Please fill in the required fields.");
              return;
            }
        
            emailjs
              .send(
                "service_qqu3vd9",
                "template_3w6nbgc",
                formData,
                "OOkYd6kaV2PnokJfd"
              )
              .then(
                () => {
                  alert("Message sent successfully!");
                  setFormData({
                    name: "",
                    phone: "",
                    email: "",
                    message: "",
                  });
                  setIsOpen(false);
                },
                (error) => {
                  alert("Error sending message. Try again.");
                  console.error(error);
                }
              );
          };


    
  const { id } = useParams();  // Получаем ID кейса из URL
    const [caseData, setCaseData] = useState(null);

    useEffect(() => {
      const fetchCase = async () => {
          if (!id) return;

          try {
              const caseRef = doc(db, "classes", id); // Ссылка на документ
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
            title={caseData.title} 
            description={caseData.description}
            ctaText={caseData.ctaText} 
            showPopup={true}  
            bgImage={caseData.heroImage}
            // subtitle={caseData.subtitle} 
            // ctaText="Зарегистрироваться"
        />
    
        <div className="section-header" >
            <h2 style={{ textAlign: "center", marginBottom: "1.5rem" }}>
                Про этот <span className="highlight">курс</span>
            </h2>
        </div> 

    <div className="cards-container">
        <div className="row">
            <div className="column">
                <AboutCourse 
                    secTitle1={caseData.secTitle1}
                    secTitle2={caseData.secTitle2}
                    secDescr1={caseData.secDescr1}
                    secDescr2={caseData.secDescr2}
                
                />
            </div>

            <div className="column">
                <div className="reviews-container">
                    <div className="review-wrapper">    
                        <ReviewCard 
                            reviewText={caseData.caseDescr1}
                            linkName={caseData.linkName}
                            caseLink={caseData.caseLink1}
                            // bgImage={note}
                            />
                        </div>
                    <div className="review-wrapper">
                        <ReviewCard 
                            reviewText={caseData.caseDescr2}
                            linkName={caseData.linkName}
                            caseLink={caseData.caseLink2}
                            // bgImage={note}
                            
                            />
                    </div>
                </div>
            </div>  

        </div>
    </div>

    <CompanyLogos />

    <TeacherComponent />

    {/* Кнопка для открытия Popup */}
    <div className="buttons">
            <button className="cta-button" onClick={togglePopup}>
            Забронируйте курс
            </button>
        
        </div>

    {/* <CertificateComponent /> */}
    <div className="row">
        <div className="column">
            <AboutCourse
                image1={caseData.certificateImage}
                secTitle1={caseData.certificateTitle}
                secDescr1={caseData.certificateDescription}
                 />
        </div>

        <div className="column">
            <AboutCertificate
                classImage={caseData.classImage}
                classTitle={caseData.classTitle}
                classDescription={caseData.classDescription}
                // secTitle2={caseData.secTitle1}
                // secDescr2={caseData.secDescr1}
                 />

            
        </div>
    </div>
        

    <div className="row">
        
        <div className="column">
            <ProfessionAbout 
                title={caseData.professionTitle}
                description={caseData.professionDescription}
                image1={caseData.image1}
                descr1={caseData.professionTitle1}
                image2={caseData.image2}
                descr2={caseData.professionTitle2}
                image3={caseData.image3}
                descr3={caseData.professionTitle3}
                image4={caseData.image4}
                descr4={caseData.professionTitle4}
                image5={caseData.image5}
                descr5={caseData.professionTitle5}
                image6={caseData.image6}
                descr6={caseData.professionTitle6}
                image7={caseData.image7}
                descr7={caseData.professionTitle7}
                image8={caseData.image8}
                descr8={caseData.professionTitle8}
            />
        </div> 
    
    <div className="column">
        
        <Faq 
            question1={caseData.question4}
            answer1={caseData.answer4}
            question2={caseData.question1}
            answer2={caseData.answer1}
            question3={caseData.question2}
            answer3={caseData.answer2}
            question4={caseData.question3}
            answer4={caseData.answer3}
        />
        </div>
            
    </div>

        <div className="row">
            <div className="column">
               <VideoSection 
                title={caseData.secTitle1} 
                videoUrl={caseData.videoLink} 
                />
            </div>

            <div className="column">

                <div className="section-header" id="projects">
                    <h2 style={{ textAlign: "center", marginBottom: "1.5rem" }}>
                    Бонусы при записи – <span className="highlight">дополнительные курсы, менторство или стажировка</span>
                    </h2>
                </div> 

                <BgImageSection 
                    imgBG={caseData.bonusImage}
                    title={caseData.bonusTitle}
                    description={caseData.descrBonus}
                    />
                
            </div>
        </div>
    

    

        <IntroductionComponent

            pricingDetails1={caseData.pricingDetails1}
            // pricingDetails2={caseData.pricingDetails2}
            
            price1={caseData.price1}
            // price2={caseData.price2}

            pricing1={caseData.pricing1}
            // pricing2={caseData.pricing2}
            
        />
        
        
    {/* Кнопка для открытия Popup */}
        <div className="buttons">
            <button className="cta-button" onClick={togglePopup}>
            Забронируйте курс
            </button>
        
        </div>

        <div>
            <p>   </p>
        </div>


        {/* {showPopup && (
          <button className="cta-button" onClick={togglePopup}>
            {ctaText || "Order a project"}
          </button> 
        )}  */}

        {isOpen && (
        <div className="popup-overlay">
        <div className="popup-content">
            <button className="close-button" onClick={togglePopup}>✖</button>
            <h2>Leave a request for a course</h2>
            <p>We gather a group of 10-15 people and launch the course immediately. You can register for a course by leaving a request and a manager will contact you within 24 hours.</p>
            
            <form id="request-form" onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="Your name (required)" onChange={handleInputChange} value={formData.name} required />
            {/* <input type="text" name="company" placeholder="Название компании" /> */}
            {/* <input type="text" name="industry" placeholder="Сфера деятельности" /> */}
            <input type="tel" name="phone" placeholder="Phone (optional)" onChange={handleInputChange} value={formData.phone} />
            <input type="email" name="email" placeholder="E-mail (required)" onChange={handleInputChange} value={formData.email} required />
            <textarea name="message" placeholder="Comments (optional)" value={formData.message} onChange={handleInputChange} ></textarea>
            {/* <label>
                Если нужно, прикрепите файл:
                <input type="file" name="attachment" />
            </label> */}
            <button type="submit" className="submit-button">Send a request</button>
            </form>
            <p className="privacy-note">
            By clicking the "Send a request" button, you agree to the 
            <a href="" target="_blank"> processing of your personal data</a>.
            </p>
        </div>
        
        </div>
        )}

    <Footer />
    </div>
  );
};

export default ClassPage;
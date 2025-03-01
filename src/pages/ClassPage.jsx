import { useEffect, useState } from "react";
import { db, collection, getDocs } from "../../firebaseConfig";
import { doc, getDoc } from "firebase/firestore";

import { useParams, Link } from "react-router-dom";
import Hero from "../Hero";
import IntroductionComponent from "../IntroductionComponent";
import AboutComponent from "../AboutComponent";
import CompaniesComponent from "../CompaniesComponent";
import AboutCourse from "../AboutCourse";
import AboutCourseCards from "../AboutCourseCards";
import AboutPlan from "../AboutPlan";
import AboutSkills from "../AboutSkills";
import AboutIndustry from "../AboutIndustry";
import ReviewCard from "../components/ReviewCard"
import CompanyLogos from "../components/CompanyLogos"
import TeacherComponent from "../components/TeacherComponent"

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
            subtitle={caseData.subtitle} 
            ctaText="Зарегистрироваться"
            showPopup={true}  
            bgImage={caseData.image1}
        />
    
    {/* <div className="markdown-container">
        <ReactMarkdown>{caseData.descrAbout}</ReactMarkdown>
    </div> */}
    
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
                    bgImage={note}
                    reviewText={caseData.secDescr1}
                    caseLink={caseData.secLink}
                
                />
                </div>
                <div className="review-wrapper">
                    <ReviewCard 
                            bgImage={note}
                            reviewText={caseData.secDescr1}
                            caseLink={caseData.secLink}
                        
                        />
                </div>
            </div>

            </div>
        </div>
    </div>

    <CompanyLogos />

    <TeacherComponent />
        

    <div className="row">
        
        <div className="column">
            <AboutCourse           
                image1={caseData.image1}
                
                secTitle1={caseData.secTitle1}
                secTitle2={caseData.secTitle2}
                secDescr1={caseData.secDescr1}
                secDescr2={caseData.secDescr2}
                
            />
        </div> 
    
    <div className="column">
        
        <AboutCourseCards           
            image1={caseData.image1}
            image2={caseData.image1}
            image3={caseData.image1}
            title={caseData.titleAbout}
            description={caseData.descrAbout}
            aboutTitle1={caseData.aboutTitle1}
            aboutTitle2={caseData.aboutTitle2}
            aboutTitle3={caseData.aboutTitle3}
            // aboutTitle4={caseData.aboutTitle4}
            aboutDescr1={caseData.aboutDescr1}
            aboutDescr2={caseData.aboutDescr2}
            aboutDescr3={caseData.aboutDescr3}
            // aboutDescr4={caseData.aboutDescr4}
            />
            
            <AboutCourse           
                // image1={caseData.image1}
                
                secTitle1={caseData.aboutTitle4}
                secDescr1={caseData.aboutDescr4}
                secDescr2={caseData.aboutDescr5}
                secDescr3={caseData.aboutDescr6}
                secDescr4={caseData.aboutDescr7}
                
            />

        </div>
            
    </div>

            {/* Кнопка для открытия Popup */}
        <div className="buttons">
            <button className="cta-button" onClick={togglePopup}>
            Забронируйте курс
            </button>
        
        </div>

        <div className="row">
            <div className="column">
                <AboutSkills 
                    // image1={caseData.image1}

                    title={caseData.titleSkills}
                    titleSkills1={caseData.titleSkills1}
                    titleSkills2={caseData.titleSkills2}
                    titleSkills3={caseData.titleSkills3}
                    titleSkills4={caseData.titleSkills4}
                    titleSkills5={caseData.titleSkills5}
                    titleSkills6={caseData.titleSkills6}
                   
                    description={caseData.descriptionSkills}
                    secDescr1={caseData.descrSkills1}
                    secDescr2={caseData.descrSkills2}
                    secDescr3={caseData.descrSkills3}
                    secDescr4={caseData.descrSkills4}
                    secDescr5={caseData.descrSkills5}
                    secDescr6={caseData.descrSkills6}
                    />
            </div>

            <div className="column">
                <AboutIndustry 
                    // image1={caseData.image1}

                    title={caseData.titleIndustry}
                    titleIndustry1={caseData.titleIndustry1}
                    titleIndustry2={caseData.titleIndustry2}
                    titleIndustry3={caseData.titleIndustry3}
                    titleIndustry4={caseData.titleIndustry4}
                    titleIndustry5={caseData.titleIndustry5}
                    titleIndustry6={caseData.titleIndustry6}
                   
                    description={caseData.descrIndustry} 
                    secDescr1={caseData.descrIndustry1}
                    secDescr2={caseData.descrIndustry2}
                    secDescr3={caseData.descrIndustry3}
                    secDescr4={caseData.descrIndustry4}
                    secDescr5={caseData.descrIndustry5}
                    secDescr6={caseData.descrIndustry6}
                    />
            </div>
        </div>
    

    <div className="row">
        <div className="column">

            {/* <AboutComponent           
                imageSrc1={caseData.image1}
                title={caseData.titleAbout}
                description={caseData.descrAbout}
                /> */}

                <IntroductionComponent

                pricingDetails1={caseData.pricingDetails1}
                pricingDetails2={caseData.pricingDetails2}
                // pricingDetails3={caseData.pricingDetails3}

                price1={caseData.price1}
                price2={caseData.price2}

                pricing1={caseData.pricing1}
                pricing2={caseData.pricing2}
                // pricing3={caseData.pricing3}

                // imageSrc3={caseData.imageSrc3}
                // title={caseData.title}
                // description={caseData.description}
                // secondaryTitle={caseData.secondaryTitle}
                // secondaryDescription={caseData.secondaryDescription}
            />
        </div>

        <div className="column">
            <CompaniesComponent           
                // imageSrc1={caseData.image1}
                imageBrand1={caseData.imageBrand1}
                imageBrand2={caseData.imageBrand2}
                imageBrand3={caseData.imageBrand3}

                title={caseData.titleAbout}
                description={caseData.descrAbout}
                secondaryTitle={caseData.secondarySubtitle}
                secondaryDescription={caseData.secDescr1}
                />
        </div>
    </div>


        

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
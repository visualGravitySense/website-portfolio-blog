import React, { useEffect, useState } from "react";
import { db } from "../../firebaseConfig";
import { collection, getDocs } from "firebase/firestore";
import "./ProfessionAbout.css";

const ProfessionAbout = ({
  title,
  description,
  image1,
  descr1,
  image2,
  descr2,
  image3,
  descr3,
  image4,
  descr4,
  image5,
  descr5,
  image6,
  descr6,
  image7,
  descr7,
  image8,
  descr8,
}) => {
  const [competencies, setCompetencies] = useState([]);

  useEffect(() => {
    const fetchCompetencies = async () => {
      const querySnapshot = await getDocs(collection(db, "classes"));
      const data = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        image: doc.data().image,
        description: doc.data().competency,
      }));
      setCompetencies(data);
    };

    fetchCompetencies();
  }, []);

  return (
    <div className="profession-container">
      <h2 className="profession-title">{title}</h2>
      <p className="profession-description">{description}</p>

      <div className="profession-grid">
        {[{ image: image1, descr: descr1 },
          { image: image2, descr: descr2 },
          { image: image3, descr: descr3 },
          { image: image4, descr: descr4 },
          { image: image5, descr: descr5 },
          { image: image6, descr: descr6 },
          { image: image7, descr: descr7 },
          { image: image8, descr: descr8 }].map((item, index) => (
          <div key={index} className="profession-item">
            <img src={item.image} alt={`Competency ${index + 1}`} className="profession-image" />
            <p className="competency-text">{item.descr}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProfessionAbout;

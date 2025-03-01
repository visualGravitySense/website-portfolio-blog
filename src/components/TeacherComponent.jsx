import React, { useEffect, useState } from "react";
import { db } from "../../firebaseConfig"; // Убедись, что путь правильный
import { collection, getDocs } from "firebase/firestore";
import "./TeacherComponent.css";
import '../Component.css';

const TeacherComponent = () => {
    const [classes, setClasses] = useState([]);

    useEffect(() => {
        const fetchClasses = async () => {
        const querySnapshot = await getDocs(collection(db, "classes"));
        const classData = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        setClasses(classData);
        };

        fetchClasses();
    }, []);

    return (
        <>

        <div className="section-header">  
            <h2 className="">
            Преподаватели и <span className="highlight">их опыт</span>
            </h2>
        </div>

        <div className="row">

            <div className="column3">

                <div className="teachers-container">
                    {classes.map((classItem) => (
                        <div className="teacher-card" key={classItem.id}>
                            <img src={classItem.teacherImage} alt={classItem.teacherTitle} className="teacher-image" />
                            <h3 className="teacher-title">{classItem.teacherTitle}</h3>
                            <p className="teacher-description">{classItem.teacherDescription}</p>
                            <a href={classItem.teacherLink} className="teacher-link">LinkedIn</a>
                        </div>
                    ))}
                </div>

            </div>

            <div className="column3">

                <div className="teachers-container">
                    {classes.map((classItem) => (
                        <div className="teacher-card" key={classItem.id}>
                            <img src={classItem.teacherImage1} alt={classItem.teacherTitle1} className="teacher-image" />
                            <h3 className="teacher-title">{classItem.teacherTitle1}</h3>
                            <p className="teacher-description">{classItem.teacherDescription1}</p>
                            <a href={classItem.teacherLink1} className="teacher-link">LinkedIn</a>
                        </div>
                    ))}
                </div>

            </div>

            <div className="column3">

                <div className="teachers-container">
                    {classes.map((classItem) => (
                        <div className="teacher-card" key={classItem.id}>
                            <img src={classItem.teacherImage2} alt={classItem.teacherTitle2} className="teacher-image" />
                            <h3 className="teacher-title">{classItem.teacherTitle2}</h3>
                            <p className="teacher-description">{classItem.teacherDescription2}</p>
                            <a href={classItem.teacherLink2} className="teacher-link">LinkedIn</a>
                        </div>
                    ))}
                </div>

            </div>

        </div>


        </>
    );
};

export default TeacherComponent;

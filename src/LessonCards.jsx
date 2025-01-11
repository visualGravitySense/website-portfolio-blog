import React from "react";
import "./LessonCards.css";

const lessons = [
  { title: "Основы React", description: "Создай свой первый компонент!" },
  { title: "Анимации", description: "Добавь жизнь в интерфейсы." },
  { title: "ANTI DESIGN", description: "Разрушь стереотипы!" },
];

const LessonCards = () => {
  return (
    <section id="lessons" className="lesson-cards">
      {lessons.map((lesson, index) => (
        <div className="lesson-card" key={index}>
          <h3>{lesson.title}</h3>
          <p>{lesson.description}</p>
        </div>
      ))}
    </section>
  );
};

export default LessonCards;

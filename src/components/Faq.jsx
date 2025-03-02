import React, { useState } from "react";
import "./Faq.css";

const FAQ = ({ question1, answer1, question2, answer2, question3, answer3, question4, answer4 }) => {
    const questions = [
      { question: question1, answer: answer1 },
      { question: question2, answer: answer2 },
      { question: question3, answer: answer3 },
      { question: question4, answer: answer4 },
    ].filter(q => q.question && q.answer); // Убираем пустые вопросы
  
    return (
      <div className="faq-container">
        <h2 className="faq-title">Часто задаваемые вопросы</h2>
        <div className="faq-list">
          {questions.map((q, index) => (
            <FAQItem key={index} question={q.question} answer={q.answer} />
          ))}
        </div>
      </div>
    );
  };
  
  const FAQItem = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);
  
    return (
      <div className={`faq-item ${isOpen ? "open" : ""}`}>
        <button className="faq-question" onClick={() => setIsOpen(!isOpen)}>
          {question}
          <span className="faq-arrow">{isOpen ? "▲" : "▼"}</span>
        </button>
        {isOpen && <p className="faq-answer">{answer}</p>}
      </div>
    );
  };

export default FAQ;

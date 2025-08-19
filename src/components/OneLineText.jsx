import React from "react";
import ReactMarkdown from "react-markdown";

const OneLineText = ({ text }) => {
  // Разбиваем текст по символу переноса строки
//   const items = text.split("\n").filter(item => item.trim() !== "");
const formattedText = text.replace(/\\n/g, "\n");
const items = formattedText.split("\n").filter(item => item.trim() !== "");

  return (
      <ul className="list-none">
        {items.map((item, index) => (
          <li key={index} className="mb-2">
            
            <ReactMarkdown>{item}</ReactMarkdown>
      
          </li>
      ))}
    </ul>
  );
};

export default OneLineText;

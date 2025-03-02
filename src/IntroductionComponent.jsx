import { useEffect, useState } from "react";
import './Component.css';

import { motion } from "framer-motion";

export default function IntroductionComponent({ pricingDetails1, pricingDetails2, price1, price2, pricing1, pricing2 }) {
  
  const pricingData = [
    { name: pricing1, details: pricingDetails1, price: price1 },
    { name: pricing2, details: pricingDetails2, price: price2 }
  ];

  return (
    <div className="complex-component">

      <div className="content-wrapper">
        <div className="intro-text">
          <div className="card">

          <div className="CARD flex justify-center items-center min-h-screen bg-gray-900 p-5">
            <motion.div 
              initial={{ rotate: -3 }} 
              animate={{ rotate: 0 }} 
              transition={{ duration: 0.5 }}
              className="w-full max-w-3xl border-4 border-gray-700 bg-gray-800 p-5 shadow-xl relative overflow-hidden"
            >
              <motion.div
                className="absolute top-0 left-0 w-full h-full bg-gray-700 opacity-10"
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              />
              <h2 className="titlePurple text-4xl font-bold text-[#6e3aff] text-center mb-6 font-mono uppercase tracking-widest">
                💥 Выберите свой план 💥
              </h2>
              <table className="w-full text-left text-white border-collapse relative z-10">
                <thead>
                  <tr className="text-xl border-b-4 border-gray-700">
                    <th className="titlePurple p-4">💎 Пакет</th>
                    <th className="titlePurple p-4">🚀 Что включено?</th>
                    <th className="titlePurple p-4">💰 Цена</th>
                  </tr>
                </thead>
                <tbody>
                  {pricingData.map((plan, index) => (
                    <motion.tr
                      key={index}
                      className={`border-b border-gray-700 hover:bg-gray-700 transition-all cursor-pointer`}
                      whileHover={{ scale: 1.15 }}
                    >
                      <td className={`descrBlack p-4 font-bold text-lg ${plan.color}`}>◆ {plan.price}</td>
                      <td className="descrBlack p-4 italic text-gray-300">{plan.details}</td>
                      <td className="descrBlack p-4 text-xl font-bold text-yellow-400">{plan.name}</td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </motion.div>
          </div>

        </div>  
    
        </div>
        
      </div>
    </div>
  );
};

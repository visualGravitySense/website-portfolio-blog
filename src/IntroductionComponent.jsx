import { useEffect, useState } from "react";
import './Component.css';
import photo1 from './assets/photo-1.jpg';
// import dgcv1 from './assets/dmitri-gornakov-cv.pdf'

import { motion } from "framer-motion";


const pricingData = [
  { name: "Free module", details: "3 lesson, introduction to React", price: "0$", color: "text-red-500" },
  { name: "Standard", details: "Full course, 3 months access", price: "2013.93 EUR", color: "text-green-500" },
  // { name: "Premium", details: "Course + mentor support", price: "399$", color: "text-blue-500" }
];


export default function IntroductionComponent({ imageSrc, imageSrc3, title, description, secondaryTitle, secondaryDescription }) {
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
                💥 Choose Your Plan 💥
              </h2>
              <table className="w-full text-left text-white border-collapse relative z-10">
                <thead>
                  <tr className="text-xl border-b-4 border-gray-700">
                    <th className="titlePurple p-4">💰 Price</th>
                    <th className="titlePurple p-4">🚀 What's Included?</th>
                    <th className="titlePurple p-4">💎 Cost</th>
                  </tr>
                </thead>
                <tbody>
                  {pricingData.map((plan, index) => (
                    <motion.tr
                      key={index}
                      className={`border-b border-gray-700 hover:bg-gray-700 transition-all cursor-pointer`}
                      whileHover={{ scale: 1.05 }}
                    >
                      <td className={`descrBlack p-4 font-bold text-lg ${plan.color}`}>◆ {plan.name}</td>
                      <td className="descrBlack p-4 italic text-gray-300">{plan.details}</td>
                      <td className="descrBlack p-4 text-xl font-bold text-yellow-400">{plan.price}</td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </motion.div>
          </div>

            {/* <div className="flex justify-center">
              <table className="border border-gray-700 w-full max-w-lg text-white bg-black">
                  <thead>
                  <tr className="border-b border-gray-700">
                      <th className="title p-3 text-left">Price</th>
                      <th className="title p-3 text-left">What's included?</th>
                      <th className="title p-3 text-left">Price</th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr className="border-b border-gray-700">
                      <td className="title p-3 text-blue-400">◆ Free module</td>
                      <td className="description p-3">1 lesson, introduction to React</td>
                      <td className="description p-3">0$</td>
                  </tr>
                  <tr className="border-b border-gray-700">
                      <td className="title p-3 text-blue-400">◆ Standard</td>
                      <td className="description p-3">Full course, 6 months access</td>
                      <td className="description p-3">199$</td>
                  </tr>
                  <tr>
                      <td className="title p-3 text-blue-400">◆ Premium</td>
                      <td className="description p-3">Course + mentor support</td>
                      <td className="description p-3">399$</td>
                  </tr>
                  </tbody>
              </table>
          </div> */}

          {/* {imageSrc3 && <img src={imageSrc3} alt={title} className="card-image" />}
          {imageSrc && <img src={imageSrc} alt={title} className="card-image" />}
          <h3 className="title">{title}</h3>
          <p className="description">{description}</p>
          {secondaryTitle && <h4 className="title">{secondaryTitle}</h4>}
          {secondaryDescription && <p className="description">{secondaryDescription}</p>} */}
        
        </div>  
    
        </div>
        
      </div>
    </div>
  );
};

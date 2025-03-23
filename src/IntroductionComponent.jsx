import { motion } from "framer-motion";
import "./Component.css";

export default function PricingCards({ pricingDetails1, pricingDetails2, price1, price2, pricing1, pricing2 }) {
  const pricingData = [
    { name: pricing1, details: pricingDetails1, price: price1 },
    { name: pricing2, details: pricingDetails2, price: price2 }
  ];

  return (
    <div className="relative flex justify-center items-center min-h-screen bg-gray-900 p-10 flex-wrap gap-8">
      {pricingData.map((plan, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          // whileHover={{ scale: 1.05, boxShadow: "0px 0px 20px rgba(110, 58, 255, 0.8)" }}
          // transition={{ duration: 0.3 }}
          className="relative w-80 border-[3px] border-purple-700 bg-gray-800 p-6 shadow-xl rounded-xl overflow-hidden card"
        >
          {/* Декоративные линии */}
          <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-purple-700 to-transparent"></div>
          <div className="absolute bottom-0 right-0 w-full h-[3px] bg-gradient-to-l from-purple-700 to-transparent"></div>

          {/* Заголовок */}
          <h2 className="text-2xl font-extrabold text-[#6e3aff] text-center mb-4 uppercase font-exo">
            {plan.name}
          </h2>

          {/* Описание */}
          <p className="text-gray-300 text-sm italic mb-6 font-russo">
            {plan.details}
          </p>

          {/* Цена */}
          <div className="flex justify-center items-center">
            <span className="text-3xl font-bold text-yellow-400 font-exo">
              {plan.price} 
            </span>
          </div>

          {/* Кнопка */}
          {/* <motion.button
            className="w-full mt-6 py-3 px-5 text-lg font-bold bg-purple-700 hover:bg-yellow-500 transition-all rounded-md text-white shadow-md font-exo"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            Купить 💳
          </motion.button> */}
        </motion.div>
      ))}
    </div>
  );
}

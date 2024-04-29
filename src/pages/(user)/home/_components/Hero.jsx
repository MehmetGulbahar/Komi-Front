import React, { useState } from "react";
import specialfood from "@/assets/img/specialfood.jpg";
import { motion } from "framer-motion";

export default function Hero() {
  const [isZoomed, setIsZoomed] = useState(false);

  const toggleZoom = () => {
    setIsZoomed(!isZoomed);
  };

  return (
    <div className="hero min-h-screen bg-base-200 bg-gray-300">
      <div className="hero-content flex-col lg:flex-row-reverse items-center justify-center">
        <motion.img
          src={specialfood}
          className={`max-w-full rounded-lg transition-transform duration-300 cursor-pointer ${
            isZoomed ? "transform scale-150" : ""
          }`}
          onClick={toggleZoom}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          style={{
            boxShadow:
              "5px 5px rgba(0, 173, 181, 1), 10px 10px rgba(57, 62, 70, 1), 15px 15px rgba(34, 40, 49, 1), 20px 20px rgba(0, 98, 90, 0.1), 25px 25px rgba(0, 98, 90, 0.05)",
            width: "80%",
            maxHeight: "600px",
          }}
        />
        <div className="mt-6 lg:mt-0 lg:ml-6 text-center lg:text-left">
          <div className="space-y-2">
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1.5 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-black"
            >
              <span className="sm:text-5xl"></span> Experience Excellence in{" "}
              <br />
              Dining with{""}
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 1 }}
                className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-pink-600"
                whileHover={{ scale: 1.1 }}
              >
                <span> KOMI</span>
              </motion.span>
              <br />
              Where Flavor Meets Innovation!
            </motion.h1>
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1.5 }}
            className="text-base sm:text-lg lg:text-base text-black sm:mt-3 md:mt-5"
          >
            Welcome to{" "}
            <motion.span
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1, duration: 1 }}
              className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-pink-600"
              whileHover={{ scale: 1.1 }}
            >
              KOMI
            </motion.span>{" "}
            – revolutionizing your dining experience! Our system simplifies
            order management, optimizes table organization, and enhances
            communication for a seamless and enjoyable restaurant experience.
          </motion.p>
        </div>
      </div>
    </div>
  );
}

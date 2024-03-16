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
      <div className="hero-content flex-col lg:flex-row-reverse">
        <motion.img
          src={specialfood}
          className={`max-w-sm rounded-lg transition-transform duration-300 cursor-pointer ${
            isZoomed ? "transform scale-150" : ""
          }`}
          onClick={toggleZoom}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          style={{
            boxShadow:
              "5px 5px rgba(0, 173, 181, 1), 10px 10px rgba(57, 62, 70, 1), 15px 15px rgba(34, 40, 49, 1), 20px 20px rgba(0, 98, 90, 0.1), 25px 25px rgba(0, 98, 90, 0.05)",
          }}
        />
        <div>
          <div className="space-y-2">
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1.5 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-black"
            >
              <span className="sm:text-5xl"></span> Experience Excellence in{" "}
              <br />
              Dining with
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 1 }}
                className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-pink-600"
                whileHover={{ scale: 1.1 }}
              >
                KOMI
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
              whileHover={{ scale: 1.1 }} // Hover efekti
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

/*
const Hero = () => {
  return (
    <div className="h-screen w-screen bg-black">
      <div className="mx-auto max-w-7xl pt-16 sm:pt-24">
        <div className="space-y-8 sm:space-y-6 lg:space-y-0 lg:grid lg:grid-cols-12 lg:gap-8">
          <div className="px-6 sm:text-left md:mx-auto md:max-w-2xl lg:col-span-6 lg:flex lg:items-center lg:text-left">
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white">
                    <span className="sm:text-5xl"></span> Experience Excellence
                    in <br />
                    Dining with
                    <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-pink-600">
                      KOMI
                    </span>
                    <br />
                    Where Flavor Meets Innovation!
                  </h1>
                </div>
                <p className="text-base sm:text-lg lg:text-base text-gray-200 sm:mt-3 md:mt-5">
                  Welcome to KOMI – revolutionizing your dining experience! Our
                  system simplifies order management, optimizes table
                  organization, and enhances communication for a seamless and
                  enjoyable restaurant experience.
                </p>
              </div>
              <div className="border-t border-gray-700" />
            </div>
          </div>
          <div className="flex items-center w-full col-span-12 sm:col-span-6">
            <div className="px-6 sm:h-72 lg:h-96 w-full sm:max-w-md lg:max-w-2xl col-span-6 flex items-center mx-auto">
              <div style={{ width: "100%", height: "100%" }}>
                <div style={{ width: "100%", height: "100%" }}>
                  <img
                    loading="lazy"
                    width="85%"
                    height="80%"
                    decoding="async"
                    className="rounded-lg"
                    src={specialfood}
                    alt="Placeholder"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;*/

/*export default function Hero() {
  return (
    <div className="hero min-h-screen  " style={{backgroundImage:`url('/src/assets/logo/restaurantbackground.jpg')`}}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">KOMI</h1>
      <p className="mb-5">Welcome to KOMI – revolutionizing your dining experience! Our system simplifies order management, optimizes table organization, and enhances communication for a seamless and enjoyable restaurant experience.</p>
      <NavLink to="/menu"> <button className="btn bg-white">Get Order</button></NavLink>
    </div>
  </div>
</div>
  )
}
*/

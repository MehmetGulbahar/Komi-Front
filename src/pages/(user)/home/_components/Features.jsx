import React from "react";
import { motion } from "framer-motion";
import chicken from "@/assets/img/chicken.jpg";
import mixfood from "@/assets/img/mixfood.jpg";
import pizza from "@/assets/img/pizza.jpg";

export default function Features() {
  const fontStyle = {
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundAttachment: "fixed",
    fontFamily: "Pacifico, cursive",
    opacity: 0.9,
  };
  const pasifico = {
    fontFamily: "Pacifico, cursive",
  };

  const containerVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        type: "spring",
        stiffness: 120,
      },
    },
  };

  return (
    <div>
      <motion.div
        className="relative overflow-hidden bg-zinc-300 pt-16 pb-32 space-y-24"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="relative">
          <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8 ">
            <div className="mx-auto max-w-xl px-6 lg:mx-0 lg:max-w-none lg:py-16 lg:px-0 ">
              <div>
                <div></div>
                <div className="mt-6">
                  <h2
                    className="text-3xl font-bold tracking-tight text-white"
                    style={pasifico}
                  >
                    Duck Grill Korean:
                  </h2>
                  <p className="mt-4 text-lg text-black" style={fontStyle}>
                    The AI product utilizes advanced NLP algorithms to
                    understand and interpret human language, enabling it to
                    accurately process and analyze text-based inputs.
                  </p>
                  <div className="mt-6">
                    <a
                      className="inline-flex rounded-lg bg-purple-800 px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-purple-800 hover:bg-purple-900 hover:ring-purple-900"
                      href="/login"
                      style={{ backgroundColor: "#430A5D" }}
                    >
                      Learn More
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-12 sm:mt-16 lg:mt-0">
              <div className="-mr-48 pl-6 md:-mr-16 lg:relative lg:m-0 lg:h-full lg:px-0">
                <motion.img
                  loading="lazy"
                  width={647}
                  height={486}
                  className="w-full rounded-xl shadow-2xl ring-1 ring-black ring lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                  style={{ color: "transparent" }}
                  src={chicken}
                  whileHover={{ scale: 1.1 }}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8 ">
            <div className="mx-auto max-w-xl px-6 lg:mx-0 lg:max-w-none lg:py-16 lg:px-0 lg:col-start-2">
              <div>
                <div></div>
                <div className="mt-6">
                  <h2
                    className="text-3xl font-bold tracking-tight text-white"
                    style={pasifico}
                  >
                    Platter Starter :
                  </h2>
                  <p className="mt-4 text-lg text-black" style={fontStyle}>
                    The product has built-in sentiment analysis capabilities,
                    allowing it to determine the sentiment (positive, negative,
                    or neutral) expressed in text or customer feedback.
                  </p>
                  <div className="mt-6">
                    <a
                      className="inline-flex rounded-lg bg-purple-800 px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-purple-800 hover:bg-purple-900 hover:ring-purple-900"
                      href="/login"
                      style={{ backgroundColor: "#430A5D" }}
                    >
                      Learn More
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-12 sm:mt-16 lg:mt-0">
              <div className="-ml-48 pr-6 md:-ml-16 lg:relative lg:m-0 lg:h-full lg:px-0">
                <motion.img
                  alt="Inbox user interface"
                  loading="lazy"
                  width={647}
                  height={486}
                  className="w-full rounded-xl shadow-2xl ring-1 ring-black ring lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                  style={{ color: "transparent" }}
                  src={mixfood}
                  whileHover={{ scale: 1.1 }}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8 ">
            <div className="mx-auto max-w-xl px-6 lg:mx-0 lg:max-w-none lg:py-16 lg:px-0 ">
              <div>
                <div></div>
                <div className="mt-6">
                  <h2
                    className="text-3xl font-bold tracking-tight text-white"
                    style={pasifico}
                  >
                    Plate Pizza :
                  </h2>
                  <p className="mt-4 text-lg text-black" style={fontStyle}>
                    The AI product can generate human-like written content,
                    summaries, or reports based on structured data or analysis
                    results.
                  </p>
                  <div className="mt-6">
                    <a
                      className="inline-flex rounded-lg bg-purple-800 px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-purple-800 hover:bg-purple-900 hover:ring-purple-900"
                      href="/login"
                      style={{ backgroundColor: "#430A5D" }}
                    >
                      Learn More
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-12 sm:mt-16 lg:mt-0">
              <div className="-mr-48 pl-6 md:-mr-16 lg:relative lg:m-0 lg:h-full lg:px-0">
                <motion.img
                  loading="lazy"
                  width={646}
                  height={485}
                  className="w-full rounded-xl shadow-2xl ring-1 ring-black ring lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                  style={{ color: "transparent" }}
                  src={pizza}
                  whileHover={{ scale: 1.1 }}
                />
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

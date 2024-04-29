import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";
import fish from "@/assets/img/fish.jpg";
import beef from "@/assets/img/beef.jpg";
import plateFood from "@/assets/img/plateFood.jpg";

export default function Features() {
  return (
    <div className="mt-5 md:mt-20">
      <h1 className="text-4xl lg:text-5xl xl:text-6xl text-center underline decoration-amber-400 mb-4">
        <Typewriter text="The Secret of Flavor, The Choice of Quality!" />
      </h1>
      <div className="h-20"></div>
      <div className="bg-white">
        <TextParallaxContent
          imgUrl={fish}
          subheading="Collaborate"
          heading="Built for all of us."
        >
          <ExampleContent />
        </TextParallaxContent>
        <TextParallaxContent
          imgUrl={beef}
          subheading="Quality"
          heading="Never compromise."
        >
          <ExampleContent />
        </TextParallaxContent>
        <TextParallaxContent
          imgUrl={plateFood}
          subheading="Modern"
          heading="Savor the Superior!."
        >
          <ExampleContent />
        </TextParallaxContent>
      </div>
    </div>
  );
}

const Typewriter = ({ text }) => {
  const [displayText, setDisplayText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (index < text.length) {
        setDisplayText((prevText) => prevText + text[index]);
        setIndex((prevIndex) => prevIndex + 1);
      } else {
        clearInterval(interval);
      }
    }, 50);
    return () => clearInterval(interval);
  }, [index, text]);

  return <span>{displayText}</span>;
};

const IMG_PADDING = 12;

const TextParallaxContent = ({ imgUrl, subheading, heading, children }) => {
  return (
    <div
      style={{
        paddingLeft: IMG_PADDING,
        paddingRight: IMG_PADDING,
      }}
    >
      <div className="relative h-[150vh]">
        <StickyImage imgUrl={imgUrl} />
        <OverlayCopy heading={heading} subheading={subheading} />
      </div>
      {children}
    </div>
  );
};

const StickyImage = ({ imgUrl }) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["end end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.85]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <motion.div
      style={{
        backgroundImage: `url(${imgUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: `calc(100vh - ${IMG_PADDING * 2}px)`,
        top: IMG_PADDING,
        scale,
      }}
      ref={targetRef}
      className="sticky z-0 overflow-hidden rounded-3xl"
    >
      <motion.div
        className="absolute inset-0 bg-neutral-950/70"
        style={{
          opacity,
        }}
      />
    </motion.div>
  );
};

const OverlayCopy = ({ subheading, heading }) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [250, -250]);
  const opacity = useTransform(scrollYProgress, [0.25, 0.5, 0.75], [0, 1, 0]);

  return (
    <motion.div
      style={{
        y,
        opacity,
      }}
      ref={targetRef}
      className="absolute left-0 top-0 flex h-screen w-full flex-col items-center justify-center text-white"
    >
      <p className="mb-2 text-center text-xl md:mb-4 md:text-3xl">
        {subheading}
      </p>
      <p className="text-center text-4xl font-bold md:text-7xl">{heading}</p>
    </motion.div>
  );
};

const ExampleContent = () => (
  <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 px-4 pb-24 pt-12 md:grid-cols-12">
    <h2 className="col-span-1 text-3xl font-bold md:col-span-4">
      Additional content explaining the above card here
    </h2>
    <div className="col-span-1 md:col-span-8">
      <p className="mb-4 text-xl text-neutral-600 md:text-2xl">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi,
        blanditiis soluta eius quam modi aliquam quaerat odit deleniti minima
        maiores voluptate est ut saepe accusantium maxime doloremque nulla
        consectetur possimus.
      </p>
      <p className="mb-8 text-xl text-neutral-600 md:text-2xl">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
        reiciendis blanditiis aliquam aut fugit sint.
      </p>
      <button className="w-full rounded bg-neutral-900 px-9 py-4 text-xl text-white transition-colors hover:bg-neutral-700 md:w-fit">
        Learn more <FiArrowUpRight className="inline" />
      </button>
    </div>
  </div>
);

/*import React from "react";
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
    <motion.div
      className="relative overflow-hidden bg-cyan-400 pt-16 pb-32 space-y-24"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div
        className="flex text-center justify-center h-30 bg-red-600 rounded-2xl"
        style={{ ...pasifico, fontSize: "50px" }}
      >
        Special Cuisine
      </div>

      <div className="container mx-auto px-4 lg:px-0">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24">
          <div>
            <motion.img
              loading="lazy"
              className="w-full rounded-xl shadow-2xl ring-1 ring-black ring"
              src={chicken}
              whileHover={{ scale: 1.1 }}
            />
            <div className="mt-6">
              <h2
                className="text-3xl font-bold tracking-tight text-white"
                style={pasifico}
              >
                Duck Grill Korean:
              </h2>
              <p className="mt-4 text-lg text-black" style={fontStyle}>
                The AI product utilizes advanced NLP algorithms to understand
                and interpret human language, enabling it to accurately process
                and analyze text-based inputs.
              </p>
            </div>
          </div>
          <div>
            <motion.img
              loading="lazy"
              className="w-full rounded-xl shadow-2xl ring-1 ring-black ring"
              src={mixfood}
              whileHover={{ scale: 1.1 }}
            />
            <div className="mt-6">
              <h2
                className="text-3xl font-bold tracking-tight text-white"
                style={pasifico}
              >
                Platter Starter:
              </h2>
              <p className="mt-4 text-lg text-black" style={fontStyle}>
                The product has built-in sentiment analysis capabilities,
                allowing it to determine the sentiment (positive, negative, or
                neutral) expressed in text or customer feedback.
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
*/

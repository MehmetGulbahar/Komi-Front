import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import TimePicker from "react-time-picker";
import { FaUsers, FaCalendar, FaClock } from "react-icons/fa";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "./variants";
import 'react-time-picker/dist/TimePicker.css';
import 'react-clock/dist/Clock.css';

const Reservation = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [value, setValue] = useState("10:00");
   const [time, setTime] = useState("12:00"); 
  const pasifico = {
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundAttachment: "fixed",
    fontFamily: "Pacifico, cursive",
    fontSize: "20px",
    opacity: 0.9,
  };
  const reservationData = {
    title: "Booking Form",
    subtitle:
      "Call (800) 123-4567 from 5 am - 11 pm daily, or book online with OpenTable.",
    subtitle2: "Reservations required for parties of 6 or more.",
    modelImg: "ModelBlackImg",
    btnText: "Make a Reservation",
  };

  return (
    <div
      className="reservation-wrapper rounded-xl"
      style={{ backgroundColor: "#F7F7F7" }}
    >
      <section id="book" className="relative z-30 pb-20 lg:py-[100px]">
        <div className="container mx-auto px-4 lg:px-0">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView={"show"}
            className="text-center"
          >
            <motion.h2
              variants={fadeIn("up", "tween", 0.2, 1.6)}
              className="h2 capitalize "
              style={{ ...pasifico, fontSize: "40px" }}
            >
              {reservationData.title}
            </motion.h2>
            <motion.p
              variants={fadeIn("up", "tween", 0.4, 1.6)}
              className="mb-1 text-dark"
              style={{ ...pasifico, fontSize: "22px" }}
            >
              {reservationData.subtitle}
            </motion.p>
            <motion.p
              variants={fadeIn("up", "tween", 0.4, 1.6)}
              className="mb-8 text-dark"
              style={{ ...pasifico, fontSize: "22px" }}
            >
              {reservationData.subtitle2}
            </motion.p>
            <motion.div
              variants={fadeIn("up", "tween", 0.6, 1.6)}
              className="flex justify-center mb-8"
            >
              <img src={reservationData.modelImg} alt="" />
            </motion.div>
          </motion.div>
          <motion.form
            variants={fadeIn("up", "tween", 0.7, 1.6)}
            initial="hidden"
            whileInView={"show"}
            className="grid gap-6 lg:flex lg:justify-center"
          >
            <div className="flex flex-col lg:flex-row gap-4 items-center">
              <div className="flex items-center gap-x-2 font-semibold text-dark text-base mb-3">
                <FaCalendar />
              </div>
              <DatePicker
                className="input"
                selected={startDate}
                onChange={(date) => setStartDate(date)}
              />
            </div>
            <div className="flex flex-col lg:flex-row gap-4 items-center">
              <div className="flex items-center gap-x-2 font-semibold text-dark text-base mb-3">
                <FaClock />
              </div>

              <TimePicker
                className="input"
                type="input"
                clearIcon={false}
                clockIcon={false}
                onChange={(newValue) => {
                  setValue(newValue);
                  setTime(newValue);
                }}
                hourInputClassName="w-30"
                minuteInputClassName="w-30"
                value={time}
              />
            </div>
            <div className="flex flex-col lg:flex-row gap-4 items-center">
              <div className="flex items-center gap-x-2 font-semibold text-dark text-base mb-3">
                <FaUsers />
              </div>
              <input className="input" type="text" placeholder="1" />
            </div>
            <div className="flex flex-col lg:flex-row gap-4 items-center">
              <a
                href="https://websitecost.today/"
                target="_blank"
                className="group relative overflow-hidden focus:ring-4 focus:ring-blue-300 inline-flex items-center px-7 py-2.5 rounded-lg text-white justify-center"
                style={{ backgroundColor: "#76ABAE" }}
              >
                <span className="z-40" style={{ backgroundColor: "1B1A55" }}>
                  Make a Reservation
                </span>
                <svg
                  className="z-40 ml-2 -mr-1 w-3 h-3 transition-all duration-300 group-hover:translate-x-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <div className="absolute inset-0 h-[200%] w-[200%] rotate-45 translate-x-[-70%] transition-all group-hover:scale-100 bg-white/30 group-hover:translate-x-[50%] z-20 duration-1000"></div>
              </a>
            </div>
          </motion.form>
        </div>
      </section>
    </div>
  );
};

export default Reservation;

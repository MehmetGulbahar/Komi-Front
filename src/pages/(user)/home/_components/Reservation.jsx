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
    <div className="reservation-wrapper bg-gray-400">
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
              style={{ ...pasifico, fontSize: "30px" }}
            >
              {reservationData.title}
            </motion.h2>
            <motion.p
              variants={fadeIn("up", "tween", 0.4, 1.6)}
              className="mb-1 text-dark"
              style={pasifico}
            >
              {reservationData.subtitle}
            </motion.p>
            <motion.p
              variants={fadeIn("up", "tween", 0.4, 1.6)}
              className="mb-8 text-dark"
              style={pasifico}
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
                onChange={setValue}
                hourInputClassName="w-30"
                minuteInputClassName="w-30"
              />
              
              
            </div>
            <div className="flex flex-col lg:flex-row gap-4 items-center">
              <div className="flex items-center gap-x-2 font-semibold text-dark text-base mb-3">
                <FaUsers />
                
              </div>
              <input className="input" type="text" placeholder="1" />
            </div>
            <div className="flex flex-col lg:flex-row gap-4 items-center">
              <button className="relative inline-flex h-12 overflow-hidden rounded-full p-1 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                  {reservationData.btnText}
                </span>
              </button>
            </div>
          </motion.form>
        </div>
      </section>
    </div>
  );
};

export default Reservation;

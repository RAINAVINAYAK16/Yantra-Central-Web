import React from "react";
import person1 from "../assets/person1.png"; 
import person2 from "../assets/person2.png";
import person3 from "../assets/person3.png";

export default function WhatWeDo() {
  return (
    <div className="bg-[#d3eafc] min-h-screen py-12 px-6 flex flex-col items-center">
      {/* Title */}
      <h1 className="text-black text-2xl md:text-3xl lg:text-4xl font-serif mb-8">
        Aqua Twin
      </h1>
      <h2 className="text-black text-xl md:text-2xl font-semibold mb-12">
        What we do?
      </h2>

      {/* Cards Container */}
      <div className="flex flex-col md:flex-row gap-8 md:gap-6 lg:gap-8 justify-center items-center">
        {/* Card 1 */}
        <div className="bg-white rounded-lg shadow-lg p-6 w-[90%] md:w-[25%] lg:w-[20%] flex flex-col items-center">
          <img
            src={person1}
            alt="Person 1"
            className="h-[120px] w-[120px] mb-4"
          />
          <p className="text-black text-center text-sm md:text-base">
            EASY, real-time control of water distribution.
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-white rounded-lg shadow-lg p-6 w-[90%] md:w-[25%] lg:w-[20%] flex flex-col items-center">
          <img
            src={person2}
            alt="Person 2"
            className="h-[120px] w-[120px] mb-4"
          />
          <p className="text-black text-center text-sm md:text-base">
            Enhancing water resource management using predictive maintenance.
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-white rounded-lg shadow-lg p-6 w-[90%] md:w-[25%] lg:w-[20%] flex flex-col items-center">
          <img
            src={person3}
            alt="Person 3"
            className="h-[120px] w-[120px] mb-4"
          />
          <p className="text-black text-center text-sm md:text-base">
            Stress testing to ensure reliability.
          </p>
        </div>
      </div>
    </div>
  );
}

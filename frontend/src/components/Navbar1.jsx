import React from 'react';
import final from '../assets/images/finallogo2.svg';

export default function Navbar1() {
  return (
    <div className="flex bg-gradient-to-r from-[#F2F9F0] via-[#E4F0F6] to-[#D3EAFD] w-[90vw] md:w-[80vw] lg:w-[70vw] h-[10vh] lg:h-[12vh] rounded-full absolute top-[5vh] left-[50%] transform -translate-x-1/2 items-center px-6 shadow-lg">
      {/* Logo */}
      <div className="flex items-center">
        <img
          className="cursor-pointer h-[5vh] lg:h-[6vh] md:h-[5.5vh] mr-2"
          src={final}
          alt="Aquatwin Logo"
        />
        <span className="text-[#1A1A1A] text-[1.5rem] font-bold">Aquatwin</span>
      </div>

      {/* Navbar Links */}
      <div className="flex ml-auto items-center space-x-6">
        <button className="text-[#1A1A1A] text-[1rem] md:text-[1.2rem] lg:text-[1.4rem] font-medium hover:underline">
          Home
        </button>
        <button className="text-[#1A1A1A] text-[1rem] md:text-[1.2rem] lg:text-[1.4rem] font-medium hover:underline">
          Contact Us
        </button>
        <button className="text-[#407933] text-[1rem] md:text-[1.2rem] lg:text-[1.4rem] font-medium px-4 py-2 border-2 border-[#407933] rounded-full hover:bg-[#407933] hover:text-white">
          Login
        </button>
        <button className="bg-[#FF6D00] hover:bg-[#e05e00] text-white font-bold rounded-full px-6 py-2 text-[1rem] md:text-[1.2rem] lg:text-[1.4rem]">
          Sign Up
        </button>
      </div>
    </div>
  );
}

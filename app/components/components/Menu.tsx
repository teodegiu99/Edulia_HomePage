import React from "react";
import Image from "next/image";
import { FaChalkboardTeacher } from "react-icons/fa";
import { FaPersonChalkboard } from "react-icons/fa6";
import { FaUsersBetweenLines } from "react-icons/fa6";
import { FaGraduationCap } from "react-icons/fa";

const Menu = () => {
  return (
    <div className="bg-white rounded-b-2xl flex flex-col items-center justify-center z-[100] max-w-lg">
      <Image src="logo.svg" width={200} height={140} alt="logo" className="py-4"/>
      <hr className=" w-full border-b border-b-slate-200 my-4" />
      <div className="grid grid-cols-2 justify-center items-center py-4 gap-12 uppercase">
        <p  className="col-span-1 flex flex-col  items-center text-[#0091da] font-bold text-[12px]"><FaChalkboardTeacher className="bg-[#0091da] rounded-full p-3 text-5xl text-white"/>Community</p>
        <p className="col-span-1 flex flex-col  items-center text-[#0091da] font-bold text-[12px]"><FaPersonChalkboard className="bg-[#0091da] rounded-full p-3 text-5xl text-white"/>Formazione</p>
      <p className="col-span-1 flex flex-col  items-center text-[#0091da] font-bold text-[12px]"><FaUsersBetweenLines className="bg-[#0091da] rounded-full p-3 text-5xl text-white"/>Treccani Scuola</p>
      <p className="col-span-1  flex flex-col  items-center text-[#f8485e] font-bold text-[12px]"><FaGraduationCap className="bg-[#f8485e] rounded-full p-3 text-5xl text-white"/>Masterclass</p>
      </div>
    </div>
  );
};

export default Menu;

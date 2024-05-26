"use client"
import React, { useEffect, useRef } from "react";
import Badge from "../components/Badge";
import { HiOutlineLightBulb } from "react-icons/hi";
import { coursesList } from "@/data/courses";

const CoursesList = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollLeft = 0;
    }
  }, []);
  
  return (
    <section>
      <div className="bg-[#f2f2f2] w-full lg:min-h-[400px] flex justify-center items-center">
        <div className="max-w-6xl flex flex-col items-center">
          <h4 className="text-[#1d1d1f] text-[24px] mb-8 mt-12 hidden lg:block">
            Scopri i nostri corsi certificati Treccani
          </h4>
          <div className="hidden lg:flex flex-wrap gap-x-4 justify-center gap-y-2">
            {coursesList.map((course, index) => (
              <Badge key={index} text={course} />
            ))}
          </div>
       
   

          <div
      ref={containerRef}
      className=" lg:hidden w-full max-w-[98vw] overflow-x-auto scrollbar-hide whitespace-nowrap bg-white flex flex-row items-center px-4 scroll-smooth py-6 font-bold text-[14px]"
    >
      <p className="text-[#f8485e] mr-4">Categorie &gt;</p>
      {coursesList.map((course, index) => (
        <p
          key={index}
          className="inline-block text-black  mx-3"
        >
          {course}
        </p>
      ))}
    </div>

          <div className="flex justify-center items-center my-8 lg:my-16 px-8">
            <HiOutlineLightBulb className="text-[50px] mr-2 text-[#f8485e]" />
            <p className="text-[#1d1d1f] lg:text-[16px] text-[14px]">
              <span className="text-[#f8485e] font-semibold text-[16px]">
                LO SAPEVI CHE...{" "}
              </span>{" "}
              per tutti i corsi la prima lezione è <strong>gratuita</strong>{" "}
              senza registrazione?
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoursesList;

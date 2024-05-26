import React from "react";
import { Review } from "@/data/courses";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import { MdOutlineStarOutline, MdOutlineStarPurple500 } from "react-icons/md";

const ReviewCard = ({ name, job, stars, desc }: Review) => {
  return (
    <div className="bg-white flex p-4 shadow-md  min-w-[400px]  m-2">
      <div className="flex flex-col items-start">
        <h3 className="text-xl font-bold">{name}</h3>
        <p className="text-gray-500">{job}</p>
        <div className="flex items-center mt-2 mb-4">
          {Array.from({ length: 5 }, (_, i) =>
            i < stars ? (
              <MdOutlineStarPurple500 key={i} className="text-yellow-400" />
            ) : (
              <MdOutlineStarOutline key={i} className="text-yellow-400" />
            )
          )}
        </div>
        <div className="flex flex-col mt-2 relative">
          <FaQuoteLeft className="text-red-500 text-lg " />
          <p className="text-sm leading-relaxed pl-10 pr-10">{desc}</p>
          <FaQuoteRight className="text-red-500 text-lg self-end mt-2" />
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;

"use client"
import { Course } from "@/data/courses";
import { useState } from "react";
import { IoIosHeartEmpty } from "react-icons/io";
import { IoIosHeart } from "react-icons/io";
import Image from "next/image";
const CARD_WIDTH = 400;
const MARGIN = 40;

const Card = ({ imgUrl, author, title, desc }: Course) => {
  const [favorite, setFavorite] = useState<boolean>(false)
  return (
    <div
      className="relative flex flex-col shrink-0 cursor-pointer transition-transform "
      style={{
        width: CARD_WIDTH,
        marginRight: MARGIN,
      }}
    >
        <div className="relative">
      <Image
        src={imgUrl}
        className="mb-3 h-[200px] w-full rounded-2xl object-cover hover:contrast-75"
        alt={`A cover image for ${title} course`}
        width={270}
        height={150}
      />
      <button className="absolute top-4 right-4 text-white text-2xl" onClick={() => setFavorite(!favorite)}>{!favorite ? <IoIosHeartEmpty /> : <IoIosHeart /> }</button>
</div>
      <div className="flex flex-col flex-grow">
        <p className="text-lg font-bold">{title}</p>
        <p className="text-[16px] text-[#f8485e] font-semibold">{author}</p>
        <p className="text-[12px] text-black uppercase mt-auto">{desc}</p>
      </div>
    </div>
  );
};

export default Card;

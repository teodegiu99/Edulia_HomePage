"use client";
import React, { useState } from "react";
import { IoCloseOutline } from "react-icons/io5";

const PromoBanner: React.FC = () => {
  const [show, setShow] = useState<boolean>(true);

  return (
    <>
      {show && (
        <div className="bg-gradient-to-r from-[#ffb549] to-[#f8485e] w-full flex flex-row items-center justify-between px-8 py-3">
          <p className="text-sm">
            ✅ QUEST&apos;ANNO INVESTI SU DI TE: IL PIANO ANNUALE È IN OFFERTA
            LIMITATA
          </p>
          <div className="flex flex-row items-center gap-x-2">
            <button className="rounded-xl text-[14px] bg-white px-3 py-1 font-bold">SCOPRI DI PIÙ</button>
            <button onClick={() => setShow(false)}>
              <IoCloseOutline className="text-[40px] "/>
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default PromoBanner;

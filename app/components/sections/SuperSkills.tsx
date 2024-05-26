import React from "react";
import Image from "next/image";
import { FaStar } from "react-icons/fa6";
import Button from "../components/Button";

const SuperSkills = () => {
  return (
    <section>
      <div className="flex justify-center max-w-[80%] lg:max-w-6xl mx-auto my-12">
        <div className="grid lg:grid-cols-2">
          <div className="col-span-1 flex justify-center items-center">
            <Image
              src="/SuperSkills.png"
              alt="Super Skill"
              width="600"
              height="600"
              className="hidden lg:block"
            />
             <Image
              src="/SuperSkills.png"
              alt="Super Skill"
              width="400"
              height="400"
              className="block lg:hidden"
            />
          </div>
          <div className="col-span-1 flex flex-col justify-center lg:items-start items-center lg:ml-10 lg:text-left text-center">
            <p className="mt-14 bg-gradient-to-r from-[#991728] to-[#14084b] px-4 py-2 text-[12pt] text-[#bfbfbf] font-semibold rounded-md flex flex-row items-center">
              <FaStar className="mr-1" />
              Esclusiva
            </p>
            <h2 className="text-white font-bold text-[20px] lg:text-[32px] pt-[30px] mb-4">
              <span className="text-[#f8485e]">Edulia</span> Masterclass
              presenta
              <br />
              SuperSkill
            </h2>
            <p className="text-white text-[14px] lg:text-[16px]">
              Abbiamo incontrato <strong>Luis Sal</strong>,
              <strong> M¥SS KETA</strong>, <strong>Valerio Lundini</strong>,{" "}
              <strong>Sofia Goggia</strong> e altri personaggi del mondo dello
              sport, dello spettacolo, del giornalismo e della musica.
            </p>
            <p className="text-white mt-4 text-[16px] mb-6">
              Ci hanno svelato il loro segreto, la loro{" "}
              <strong>super-competenza</strong>.
            </p>
            <div className="max-w-150 ">
              <Button text="Scopri tutti gli episodi" link="/" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuperSkills;

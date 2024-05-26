import React from "react";
import Image from "next/image";
import { FaStar } from "react-icons/fa6";
import Button from "../components/Button";

const Masterclass = () => {
  return (
    <section>
      <div className="bg-[#f2f2f2]  h-full">
        <div className="flex justify-center max-w-[80vw] xl:max-w-6xl mx-auto py-12 ">
          <div className="grid lg:grid-cols-2">
            <div className="col-span-1 flex justify-center items-center">
            <Image
              src="/masterclass.png"
              alt="Super Skill"
              width="600"
              height="600"
              className="hidden lg:block"
            />
             <Image
              src="/masterclass.png"
              alt="Super Skill"
              width="400"
              height="400"
              className="block lg:hidden"
            />
            </div>
            <div className="col-span-1 flex flex-col justify-center lg:items-start items-center lg:ml-10 text-center lg:text-left">
              <h2 className="text-black font-bold text-[20px] lg:text-[32px] pt-[30px] mb-4">
                <span className="italic">Edulia</span> Masterclass è il portale
                dedicato a chi vuole imparare sempre qualcosa di nuovo.
              </h2>
              <p className="text-black text-[14px] lg:text-[16px]">
                I nostri corsi sono pensati per i neofiti, i curiosi, gli
                studiosi, gli appassionati, i sognatori.
              </p>
              <p className="text-black mt-4 text-[14px] lg:text-[16px] mb-6">
                Gli argomenti spaziano dalla A alla Z: dal business alla
                scrittura, dal marketing alla crescita personale, passando per
                l’arte, lo sport, la musica, la fotografia.
              </p>
              <div className="max-w-150">
                <Button text="TUTTI I CORSI" link="/" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Masterclass;

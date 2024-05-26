import React from "react";
import Button from "../components/Button";

const Hero = () => {
  return (
    <div
      className="relative flex min-h-[600px] justify-center items-center bg-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url(bg-overlay.jpg)`,
      }}
    >
      <div className="absolute inset-0 bg-black/40"></div>
      <div className="relative flex flex-col justify-center items-center text-center h-full text-white">
        <h1 className="text-[35px] lg:text-[55px] font-bold">
          Impara qualcosa di nuovo ogni giorno
        </h1>
        <p className="mt-4 mb-8 text-[15px] lg:text-[32px]">
          Accedi senza limiti ad oltre 330 corsi dal Sapere Treccani
          <br />
          Trova i corsi per te e scegli il tuo piano a partire da 8,40€ al mese
        </p>
        <Button text="Scopri i piani" link="/" />
      </div>
    </div>
  );
};

export default Hero;

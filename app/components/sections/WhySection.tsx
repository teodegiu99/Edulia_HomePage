import React from "react";
import WhyItem from "../components/WhyItem";

const WhySection = () => {
  return (
    <section>
      <div className="w-full bg-white flex justify-center text-[#1d1d1f]">
        <div className="xl:max-w-5xl max-w-[90vw] flex flex-col justify-center mb-20">
          <h2 className="lg:text-3xl text-[20px] font-bold text-center lg:my-20 my-10">
            Perchè scegliere Edulia Masterclass
          </h2>
          <div className="grid  lg:grid-rows-3 w-full lg:gap-10 gap-5">
            <div className="row-span-1 grid lg:grid-cols-2 lg:gap-x-8 gap-y-5 lg:gap-y-0">
              <WhyItem
                imgUrl="/svg/pc.svg"
                text="Accedi a un'ampia offerta di corsi flessibili, modulari, innovativi, sperimentali, contemporanei"
              />
              <WhyItem
                imgUrl="/svg/phone.svg"
                text="Impari in modo facile e divertente grazie a una piattaforma interattiva e intuitiva"
              />
            </div>
            <div className="row-span-1 grid lg:grid-cols-2 lg:gap-x-8 gap-y-5 lg:gap-y-0">
              <WhyItem
                imgUrl="/svg/clock.svg"
                text="I corsi sono registrati e puoi frequentarli quando, come e dove vuoi"
              />
              <WhyItem
                imgUrl="/svg/smile.svg"
                text="Grazie alla qualità dell’immagine e dei contenuti non puoi smettere di seguire i tuoi corsi"
              />
            </div>
            <div className="row-span-1 grid lg:grid-cols-2 lg:gap-x-8 gap-y-5 lg:gap-y-0">
              <WhyItem
                imgUrl="/svg/book.svg"
                text="Con la formula ad abbonamento puoi vedere tutti i corsi che vuoi"
              />
              <WhyItem
                imgUrl="/svg/student.svg"
                text="Ottieni attestati e certificati, da condividere sui social e con la tua community"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhySection;

import React from "react";

const StatsBanner = () => {
  return (
    <section>
      <div className="flex justify-center items-center  w-full bg-black text-white py-6 mt-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 max-w-7xl text-balance text-center px-2">
          <div className="col-span-1 flex flex-col items-center justify-center">
            <p className="text-[50px] font-bold">350+</p>
            <p className="text-[16px] text-wrap">
              corsi, in continuo aggiornamento
            </p>
          </div>
          <div className="col-span-1 flex flex-col items-center justify-center">
            <p className="text-[50px] font-bold">450+</p>
            <p className="text-[16px] text-wrap">ore di lezione</p>
          </div>
          <div className="col-span-1 flex flex-col items-center justify-center">
            <p className="text-[50px] font-bold">40%</p>
            <p className="text-[16px]">di docenti donne</p>
          </div>
          <div className="col-span-1 flex flex-col items-center justify-center">
            <p className="text-[50px] font-bold">270+</p>
            <p className="text-[16px]">
              tra docenti, esperti, eccellenze culturali
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsBanner;

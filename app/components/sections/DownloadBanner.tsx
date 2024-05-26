import React from "react";
import Image from "next/image";
const DownloadBanner = () => {
  return (
    <section>
      <div className="bg-[#111111] flex justify-center items-center py-12">
        <div className="max-w-7xl lg:grid grid-cols-2 items-center">
          <div className="lg:text-start text-center text-white">
            <h2 className="lg:text-[24px] text-[18px] font-semibold mb-2">
              Scarica ora l&apos;App di Edulia Masterclass
            </h2>
            <p className="lg:text-[16px] text-[14px] font-regular">
              L&apos;App ti permette di sefuire tutti i corsi che vuoi, quando e
              dove vuoi!
              <br />
              Facile, divertente e intuitiva è disponibile su questi store.
            </p>
          </div>
          <div className="flex flex-row gap-10 lg:justify-end justify-center mt-8 lg:mt-0">
            <div className="w-[160px] h-[50px]">
              <Image
                src="/app-store.svg"
                width={160}
                height={50}
                alt="App store link"
              />
            </div>
            <div className="w-[160px] h-[50px]">
              <Image
                src="/play-store.png"
                width={160}
                height={50}
                alt="Play store link"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DownloadBanner;

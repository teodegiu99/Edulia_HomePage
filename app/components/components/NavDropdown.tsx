import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { FaArrowRight } from "react-icons/fa6";

const NavDropdown = () => {
  return (
    <div className="w-[99vw] grid grid-cols-2 overflow-hidden">
    <div className="col-span-1 bg-white grid grid-cols-3 w-full p-10  text-[15px]">
      <div className="col-span-1" />
      <div className="col-span-1 flex flex-col items-start">
        <Link
          href="/"
          className="flex flex-row items-center text-base text-[#f8485e] font-semibold gap-x-2 mb-2"
        >
          Scoprili tutti <FaArrowRight />
        </Link>
        <Link href="/" className="text-sm">I nostri percorsi</Link>
      </div>
      <div className="col-span-1 flex flex-col border-l border-slate-300 pl-10 ">
        <Link href="/" className="mb-1">I nostri docenti</Link>
        <Link href="/" className="mb-1">Webinar gratuiti - Open</Link>
        <Link href="/" className="mb-1">Superskill - scopri il tuo superpotere</Link>
        <Link href="/" className="mb-1">Animenta</Link>
        <Link href="/" className="mb-1">Komen Italia</Link>
        <Link href="/" className="mb-1">Le nostre pillole con TikTok</Link>
      </div>
    </div>
    <div className="col-span-1 ">
      <div className="grid grid-cols-3 p-10">
        <div className="col-span-1 flex justify-center items-center">
        <Image
          src="/dropdown.png"
          width={300}
          height={150}
          alt="App store link"
          className="rounded-2xl"
        />
        </div>
        <div className="col-span-1 flex flex-col text-white ml-10">
          <Link href="/" className="font-bold text-[13px] mb-2">NUOVO CORSO</Link>
          <Link href="/" className="text-[16px] font-bold mb-2">
            Scrivere con l&apos;IA: cosa puoi fare con ChatGPT
          </Link>
          <Link href="/" className="text-[13px]">Pier Luigi Pisa</Link>
        </div>
        <div className="col-span-1" />
      </div>
    </div>
  </div>
  )
}

export default NavDropdown

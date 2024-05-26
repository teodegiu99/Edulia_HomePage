"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { IoSearchOutline } from "react-icons/io5";
import { IoCartOutline } from "react-icons/io5";
import { IoMdHeartEmpty } from "react-icons/io";
import Button from "./components/Button";
import { CgMenuGridR } from "react-icons/cg";
import { useState } from "react";
import NavDropdown from "./components/NavDropdown";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import { CiUser } from "react-icons/ci";
import { FiMenu } from "react-icons/fi";
import Menu from "./components/Menu";

const Nav = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [mobileMenu, setMobileMenu] = useState<boolean>(false);
  const [formazione, setFormazione] = useState<boolean>(false);

  const toggleScroll = (state: boolean) => {
    if (state) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  };

  const toggleMobileMenu = () => {
    setMobileMenu(!mobileMenu);
    toggleScroll(!mobileMenu);
  };

  return (
    <>
      <nav className="hidden w-full lg:grid grid-cols-3 items-center">
        <div className="col-span-1 flex justify-start p-5">
          <Image src="/logo-small.svg" width={120} height={40} alt="Logo" />
        </div>
        <div className="col-span-1 flex flex-row justify-center text-white font-semibold gap-x-4 text-[14px]">
          <button
            className="flex flex-row items-center gap-x-1"
            onClick={() => setIsOpen(!isOpen)}
          >
            Corsi e Webinar{" "}
            {isOpen ? (
              <IoIosArrowUp width={20} height={20} />
            ) : (
              <IoIosArrowDown width={20} height={20} />
            )}
          </button>
          <Link href="/">Gift Card</Link>
          <Link href="/">Aziende</Link>
          <Link href="/">Abbonamenti</Link>
          <Link href="/">Blog</Link>
        </div>
        <div className="col-span-1 flex flex-row justify-end items-center text-white gap-x-3 p-5">
          <Link href="/" className="text-2xl">
            <IoSearchOutline />
          </Link>
          <Link href="/" className="text-2xl">
            <IoMdHeartEmpty />
          </Link>
          <Link href="/" className="text-2xl">
            <IoCartOutline />
          </Link>
          <Link href="/" className="text-base font-semibold">
            ACCEDI
          </Link>
          <div className="inline">
            <Button text="REGISTRATI" link="/" />
          </div>
          <button onClick={() => {setFormazione(!formazione)}}>
            <CgMenuGridR className="text-2xl" />
          </button>
        </div>
        {isOpen && <NavDropdown />}
      </nav>
      {formazione && <div className="lg:block hidden fixed top-[60px] right-0 w-[300px] bg-white z-50"><Menu /></div>}

      <nav className="flex flex-row items-center justify-between w-full text-white p-5 relative lg:hidden">
        <div className="flex flex-row gap-x-4">
        <button onClick={() => {setFormazione(!formazione)}}>
            <CgMenuGridR className="text-3xl" />
          </button>
          <Image src="/logo-small.svg" width={120} height={40} alt="Logo" />
        </div>
        <div className="flex flex-row gap-x-4">
          <Link href="/" className="text-2xl">
            <IoSearchOutline />
          </Link>
          <Link href="/" className="text-2xl">
            <CiUser />
          </Link>
          <Link href="/" className="text-2xl">
            <IoCartOutline />
          </Link>
          <button onClick={toggleMobileMenu} className="text-2xl">
            <FiMenu />
          </button>
        </div>
        {mobileMenu && (
          <div className="fixed top-[60px] left-0 w-full h-[calc(100vh-60px)] bg-black z-50 px-8 py-20 overflow-y-auto">
            <div className="flex flex-col items-start font-bold gap-y-3 text-white">
              <button
                className="flex flex-row items-center gap-x-1"
                onClick={() => setIsOpen(!isOpen)}
              >
                Corsi e Webinar{" "}
                {isOpen ? (
                  <IoIosArrowUp width={20} height={20} />
                ) : (
                  <IoIosArrowDown width={20} height={20} />
                )}
              </button>
              {isOpen && (
                <div className="flex flex-col items-start gap-y-3 text-sm px-4 font-thin">
                  <Link href="/">Vedi tutti i corsi</Link>
                  <Link href="/">I nostri percorsi</Link>
                  <hr className="border-b border-slate-800 w-[85vw] my-4" />
                  <Link href="/">I nostri docenti</Link>
                  <Link href="/">Webinar gratuiti - Open</Link>
                  <Link href="/">Superskill - Scopri il tuo superpotere</Link>
                  <Link href="/">Animenta</Link>
                  <Link href="/">Komen Italia</Link>
                  <Link href="/">Le nostre pillole con TikTok</Link>
                </div>
              )}
              <Link href="/">Gift Card</Link>
              <Link href="/">Aziende</Link>
              <Link href="/">Abbonamenti</Link>
              <Link href="/">Blog</Link>
            </div>
          </div>
        )}
      </nav>
      {formazione && <div className="lg:hidden fixed top-[60px] left-0 w-[300px] bg-white z-50"><Menu /></div>}
    </>
  );
};

export default Nav;
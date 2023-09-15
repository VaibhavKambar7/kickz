'use client'

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { BiChevronDown, BiCart, BiHeart } from "react-icons/bi";
import DropdownMenu from "./Categories";

const Navbar: React.FC = () => {
  const [prevScrollPos, setPrevScrollPos] = useState<number>(0);
  const [visible, setVisible] = useState<boolean>(true);

  const handleScroll = () => {
    const currentScrollPos = window.scrollY;
    if(window.scrollY > 100){

      if (prevScrollPos > currentScrollPos) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    }
    setPrevScrollPos(currentScrollPos);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos, visible]);

  return (
    <div
      className={`flex text-black fixed top-0 bg-slate-100 left-0 w-full transition-transform duration-2000 ${
        visible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="container w-[180px] h-[55px]">
        <Link href="/">
          <img
            src="/kickz_logo.jpg"
            className="w-[90px] h-full object-contain ml-[10px] pt-[22px] transition-transform duration-500 sm:ml-[140px] "
            alt="Kickz Logo"
          />
        </Link>
      </div>
      <div className="ml-start">
        <ul className="flex justify-center items-center ml-[25px] md:ml-[250px] gap-1">
          <li className="px-4 py-5 mr-3">
            <Link href="/">Home</Link>
          </li>
          <li className="px-4 py-5">
            <Link href="/about">About</Link>
          </li>
          <li className="px-4 py-5">
            <Link href="/"><DropdownMenu/></Link>
          </li>
          <li className="px-4 py-5 mr-[5px] md:mr-[125px]">
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </div>
      <div>
        <div className="px-4 py-6 pt-[21px] pl-[15px] flex gap-6">
          <Link href="/">
            <BiHeart className="text-[40px] hover:bg-gray-200 rounded-full p-2" />
          </Link>
          <Link href="/">
            <BiCart className="text-[40px] hover:bg-gray-200 rounded-full p-2" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
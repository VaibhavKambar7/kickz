"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { BiCart, BiHeart } from "react-icons/bi";
import DropdownMenu from "./Categories";
import { useAppSelector } from "../redux/store";

interface NavbarProps {}

const Navbar: React.FC<NavbarProps> = () => {
  const [prevScrollPos, setPrevScrollPos] = useState<number>(0);
  const [visible, setVisible] = useState<boolean>(true);

  const cartx = useAppSelector((state) => state.cartReducer.cart);
  const handleScroll = () => {
    const currentScrollPos = window.scrollY;
    if (window.scrollY > 50) {
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
      className={`flex items-center h-[60px] text-black fixed top-0 bg-white left-0 w-full transition-transform duration-2000 shadow-sm ${
        visible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="container w-[180px] h-[55px]">
        <Link href="/">
          <img
            src="/kickz_logo.jpg"
            className="w-[90px] h-full object-contain ml-[10px] pt-[3px] transition-transform duration-2000 sm:ml-[140px] "
            alt="Kickz Logo"
          />
        </Link>
      </div>
      <div className="ml-start mt-[8px]">
        <ul className="flex justify-center items-center ml-[25px] md:ml-[250px] gap-1">
          <li className="px-4 py-5 mr-3">
            <Link href="/">Home</Link>
          </li>
          <li className="px-4 py-5">
            <Link href="/about">About</Link>
          </li>
          <li className="px-4 py-5">
            <DropdownMenu />
          </li>
          <li className="px-4 py-5 mr-[5px] md:mr-[125px]">
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </div>
      <div>
        <div className="px-4 py-6 mt-[7px] pl-[30px] flex gap-6">
          <Link href="/">
            <BiHeart className="text-[40px] hover:bg-gray-200 rounded-full p-2" />
          </Link>
          <Link href="/cart">
            <BiCart className="text-[40px] hover:bg-gray-200 rounded-full p-2" />
            {cartx.length > 0 && (
              <div className="h-[14px] md:h-[18px] min-w-[14px] md:min-w-[18px] rounded-full bg-red-600 absolute top-1 left-5 md:left-7 text-white text-[10px] md:text-[12px] flex justify-center items-center px-[2px] md:px-[5px]">
                {cartx.length}
              </div>
            )}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="flex text-black">
      <div className="container w-[180px] h-[55px]">
        <Link href='/'>
        <img
          src="/kickz_logo.jpg"
          className="w-[80px] h-full object-contain ml-[10px] mt-[3px] transition-transform duration-500 sm:ml-[40px]"
          alt="Kickz Logo"
          />
          </Link>
      </div>
      <div className="ml-start">
        <ul className="flex justify-center items-center ml-[25px] md:ml-[250px]">
          <li className="px-4 py-5">
            <Link href="/">Home</Link>
          </li>
          <li className="px-4 py-5">
            <Link href="/about">About</Link>
          </li>
          <li className="px-4 py-5">
            <Link href="/categories">Categories</Link>
          </li>
          <li className="px-4 py-5">
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;

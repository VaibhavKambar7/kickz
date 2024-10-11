"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { BiCart } from "react-icons/bi";
import DropdownMenu from "./Categories";
import { FiUser } from "react-icons/fi";
import { useSession } from "next-auth/react";
import { signOut } from "next-auth/react";
import { useCart } from "../context/cartProvider";

const Navbar: React.FC = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const { cartItems, setCartItems } = useCart() ?? {
    cartItems: [],
    setCartItems: () => {},
  };

  const apiURL = process.env.NEXT_PUBLIC_API_URL;

  const handleLogout = async () => {
    await signOut({ redirect: false });
    setDropdownOpen(false);
  };
  const [prevScrollPos, setPrevScrollPos] = useState<number>(0);
  const [visible, setVisible] = useState<boolean>(true);
  const { data: session, status } = useSession();
  const userEmail = session?.user?.email;

  useEffect(() => {
    const userEmail = session?.user?.email;

    const fetchCartItems = async () => {
      try {
        if (userEmail) {
          const response = await fetch(
            `${apiURL}/api/cart/getCartItemsForUser`,
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({ userEmail: userEmail }),
            },
          );
          if (!response.ok) {
            throw new Error("Failed to fetch cart items");
          }
          const data = await response.json();
          setCartItems(data);
        }
      } catch (error) {
        console.error("Error fetching cart items:", error);
      }
    };

    fetchCartItems();
  }, [session]);

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
        <img
          src="/kickz_logo.jpg"
          className="w-[90px] h-full object-contain ml-[10px] transition-transform duration-4000 sm:ml-[140px] "
          alt="Kickz Logo"
        />
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
          <Link href="/cart" style={{ display: "flex", flexDirection: "row" }}>
            <BiCart className="cart text-[40px] hover:bg-gray-200 rounded-full p-2" />
            {session && cartItems.length > 0 && (
              <div className="cartnumber h-[14px] md:h-[18px] min-w-[14px] md:min-w-[18px] rounded-full bg-red-600 text-white text-[10px] md:text-[12px] flex justify-center items-center">
                {cartItems.length}
              </div>
            )}
          </Link>
          {session ? (
            <div className="relative">
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="flex items-center underline"
              >
                <span className="text-[17px] mt-[7px]">
                  Hi , <span className="font-bold">{session?.user?.name}</span>
                </span>
              </button>
              {dropdownOpen && (
                <div className="origin-top-right absolute right-0 mt-2 w-40 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <div
                    className="py-1"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="options-menu"
                  >
                    <button
                      onClick={handleLogout}
                      className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-200"
                      role="menuitem"
                    >
                      Logout
                    </button>
                  </div>
                </div>
              )}
            </div>
          ) : (
            <Link href="/login">
              <FiUser className="text-[38px] mt-[2px] hover:bg-gray-200 rounded-full p-2" />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;

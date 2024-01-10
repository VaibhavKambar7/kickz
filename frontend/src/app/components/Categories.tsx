"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { BiChevronDown } from "react-icons/bi";
import { FrontendCategory } from "../interfaces/productCategoryInterface";
import { fetchCategories } from "../api/getCategories";

const DropdownMenu = () => {
  const [open, setOpen] = useState(false);
  const [categories, setCategories] = useState<FrontendCategory[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedCategories = await fetchCategories();
        setCategories(fetchedCategories);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  const handleMouseEnter = () => {
    setOpen(true);
  };

  const handleMouseLeave = () => {
    setOpen(false);
  };

  return (
    <div
      className="dropdown relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button className="dropbtn flex items-center">
        Categories
        <BiChevronDown
          className={`center ml-7 transition-transform duration-300 ${
            open ? "transform rotate-180" : ""
          }`}
        />
      </button>
      <ul className={`dropdown-content ${open ? "open" : ""}`}>
        {categories.map((category) => (
          <li key={category.id}>
            <Link href={`/category/${category.slug}`}>{category.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DropdownMenu;

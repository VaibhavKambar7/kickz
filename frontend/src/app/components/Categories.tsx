import React, { useState } from "react";
import Link from "next/link";
import { BiChevronDown } from "react-icons/bi";
import { FrontendCategory } from "../utils/productUtils";

export const fetchCategories = async () => {
  const response = await fetch("http://localhost:5000/api/categories");

  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }

  return response.json();
};

const DropdownMenu = async () => {
  const [open, setOpen] = useState(false);

  const categories: FrontendCategory[] = await fetchCategories();

  // const categories = [
  //   { id: 1, name: "Jordan", doc_count: 11 },
  //   { id: 2, name: "Sneakers", doc_count: 8 },
  //   { id: 3, name: "Running shoes", doc_count: 64 },
  //   { id: 4, name: "Football shoes", doc_count: 107 },
  // ];

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
          className={`ml-7 transition-transform duration-300 ${
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

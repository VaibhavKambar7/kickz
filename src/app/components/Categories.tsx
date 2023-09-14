import React, { useState } from "react";
import Link from "next/link";
import { BiChevronDown } from "react-icons/bi"; 

const DropdownMenu = () => {
  const [open, setOpen] = useState(false);

  const categories = [
    { id: 1, name: "Jordan", doc_count: 11 },
    { id: 2, name: "Sneakers", doc_count: 8 },
    { id: 3, name: "Running shoes", doc_count: 64 },
    { id: 4, name: "Football shoes", doc_count: 107 },
  ];

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
          className={`ml-1 transition-transform duration-300 ${
            open ? "transform rotate-180" : ""
          }`}
        />
      </button>
      <ul className={`dropdown-content ${open ? "open" : ""}`}>
        {categories.map((category) => (
          <li key={category.id}>
            <Link href={`/categories/${category.id}`}>{category.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DropdownMenu;

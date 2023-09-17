import Link from "next/link";
import React from "react";

const ProductCard: React.FC = () => {
  return (
    <Link href="/product/1">
      <img
        className="w-[280px] h-[280px] pt-[30px] transform overflow-hidden bg-white duration-200 hover:scale-105 cursor-pointer"
        src="/product-1.webp"
        alt="Product Image"
      />
      <div className="p-4  text-black/[0.9] ">
        <h2 className="mr-2 text-lg font-medium">Product Name</h2>
        <div className="flex items-center text-black/[0.5]">
          <p className="mr-2 text-1g font-semibold">$20.00</p>
          <p className="text-base font-medium line-through">$25.00</p>
          <p className="mr-[80px] ml-auto text-base font-medium text-green-500">
            20% off
          </p>
          <h2 className="text-lg font-medium"></h2>
        </div>
        <div className="flex items-center text-black/[0.9]"></div>
      </div>
    </Link>
  );
};

export default ProductCard;

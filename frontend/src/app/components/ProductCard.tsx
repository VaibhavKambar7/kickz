import React from "react";
import Link from "next/link";
import Image from "next/image";

export interface ProductCardProps {
  name: string;
  price: number;
  original_price: number;
  imageUrl: string;
  slug: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
  name,
  price,
  original_price,
  imageUrl,
  slug,
}) => {
  return (
    <Link href={`/product/${slug}`}>
      <Image
        className="w-[280px] h-[280px] pt-[30px] transform overflow-hidden bg-white duration-200 hover:scale-105 cursor-pointer"
        src={imageUrl}
        alt="Product Image"
        width={280}
        height={280}
      />
      <div className="p-4  text-black/[0.9] ">
        <h2 className="mr-2 text-lg font-medium">{name}</h2>
        <div className="flex items-center text-black/[0.5]">
          <p className="mr-2 text-1g font-semibold">&#8377;{price}</p>
          <p className="text-base font-medium line-through">
            &#8377;{original_price}
          </p>
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

import Image from "next/image";
import React from "react";
import { RiDeleteBin6Line } from "react-icons/ri";

const CartItem = ({}) => {
  return (
    <div className="flex py-5 gap-3 md:gap-5 border-b">
      <div className="shrink-0 aspect-square w-[50px] md:w-[120px]">
        <Image
          src="https://res.cloudinary.com/dotxtkk4n/image/upload/v1702914336/kickz/p2/9cb30549-fe13-4998-ad7d-6c2876be3b5b_d0c6ql.webp"
          alt="Product Image"
          width={120}
          height={120}
        />
      </div>

      <div className="w-full flex flex-col">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="text-lg md:text-2xl font-semibold text-black/[0.8]">
            Jordan Retro 6 G
          </div>

          <div className="text-sm md:text-md font-medium text-black/[0.5] block md:hidden">
            Mens Golf Shoes
          </div>

          <div className="text-sm md:text-md font-bold text-black/[0.5] mt-2">
            MRP 19000
          </div>
        </div>

        <div className="text-md font-medium text-black/[0.5] hidden md:block">
          Mens Golf Shoes
        </div>

        <div className="flex items-center justify-between mt-4">
          <div className="flex items-center gap-2 md:gap-10 text-black/[0.5] text-sm md:text-md">
            <div className="flex items-center gap-1">
              <div className="font-semibold">Size:</div>
              <select
                className="hover:text-black"
              >
                <option value="1">UK 6</option>
                <option value="1">UK 6</option>
                <option value="1">UK 6</option>
                <option value="1">UK 6</option>
                <option value="1">UK 6</option>
                <option value="1">UK 6</option>
                <option value="1">UK 6</option>
                <option value="1">UK 6</option>
              </select>
            </div>

            <div className="flex items-center gap-1">
              <div className="font-semibold">Quantity:</div>
              <select
                className="hover:text-black"
                // onChange={(e) => updateCartItem(e, "quantity")}
              >
                <option value="1">1</option>
                <option value="1">1</option>
                <option value="1">1</option>
                <option value="1">1</option>
                <option value="1">1</option>
                <option value="1">1</option>
                <option value="1">1</option>
                <option value="1">1</option>
                <option value="1">1</option>
                <option value="1">1</option>
              </select>
            </div>
          </div>
          <RiDeleteBin6Line
            // onClick={() =>
            //     dispatch(removeFromCart({ id: data.id }))
            // }
            className="cursor-pointer text-black/[0.5] hover:text-black text-[16px] md:text-[20px]"
          />
        </div>
      </div>
    </div>
  );
};

export default CartItem;

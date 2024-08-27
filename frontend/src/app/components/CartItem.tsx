import Image from "next/image";
import React from "react";
import { RiDeleteBin6Line } from "react-icons/ri";

type CartItemProps = {
  data: any;
  removeFromCart: (id: any) => Promise<void>;
};

const CartItem: React.FC<CartItemProps> = ({ data, removeFromCart }) => {
  const handleDelete = async () => {
    await removeFromCart(data.id);
  };

  const updateCartItem = (
    e: React.ChangeEvent<HTMLSelectElement>,
    key: string
  ) => {
    const payload = {
      key,
      val: key === "quantity" ? parseInt(e.target.value) : e.target.value,
      id: data.id,
    };
  };

  return (
    <div className="flex py-5 gap-3 md:gap-5 border-b">
      <div className="shrink-0 aspect-square w-[50px] md:w-[120px]">
        <Image
          src={data.thumbnail}
          alt="Product Image"
          width={120}
          height={120}
        />
      </div>

      <div className="w-full flex flex-col">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="text-lg md:text-2xl font-semibold text-black/[0.8]">
            {data.name}
          </div>

          <div className="text-sm md:text-md font-medium text-black/[0.5] block md:hidden">
            Mens Golf Shoes
          </div>

          <div className="text-sm md:text-md font-bold text-black/[0.5] mt-2">
            MRP: &#8377;{data.price}
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
                onChange={(e) => updateCartItem(e, "selectedSize")}
              >
                {data.size.data.map((item: any, i: any) => {
                  return (
                    <option
                      key={i}
                      disabled={!item.enabled ? true : false}
                      value={item.size}
                      selected={data.selectedSize === item.size}
                    >
                      {item.size}
                    </option>
                  );
                })}
              </select>
            </div>

            <div className="flex items-center gap-1">
              <div className="font-semibold">Quantity:</div>
              <select
                className="hover:text-black"
                onChange={(e) => updateCartItem(e, "quantity")}
                value={data.quantity}
              >
                {Array.from({ length: 10 }, (_, i) => i + 1).map((q, i) => (
                  <option key={i} value={q}>
                    {q}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <RiDeleteBin6Line
            onClick={handleDelete}
            className="cursor-pointer text-black/[0.5] hover:text-black text-[16px] md:text-[20px]"
          />
        </div>
      </div>
    </div>
  );
};

export default CartItem;

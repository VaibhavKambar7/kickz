import React from "react";
import Wrapper from "../components/Wrapper";
import Image from "next/image";
import Link from "next/link";
import CartItem from "../components/CartItem";

const Cart: React.FC = () => {
  return (
    <div className="w-full md:py-20">
      <Wrapper>
        <div className="text-center max-w-[800px] mx-auto mt-8 md;mt-0">
          <div className="text-[20px] md:text-[25px] mb-5 font-semibold leading-tight">
            Shopping Cart
          </div>
        </div>

        <div className="flex flex-col lg:flex-row py-10 md:ml-[130px]">
          <div className="flex-[2]">
            <div className="text-lg font-bold">Cart Items
            <CartItem/>
            <CartItem/>
            <CartItem/>
            </div>
          </div>

          <div className="flex-[1]">
            <div className="text-lg font-bold">Summary</div>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default Cart;

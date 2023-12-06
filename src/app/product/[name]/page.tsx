import React from "react";
import ProductDetailsCarousel from "@/app/components/ProductDetailsCarousel";
import Wrapper from "@/app/components/Wrapper";

import { BiHeart } from "react-icons/bi";

const ProductDetails: React.FC = () => {
  return (
    <div className="py-[100px] my-[100px] w-full md:pg-20">
      <Wrapper>
        <div className="ml-[70px] flex flex-col lg:flex-row md:px-10 gap-[50px] lg:gap:[100px]">
          <div className="mx-[50px] w-full md:w-auto flex-[1.5] max-w-[500px] lg:max-w-full mx-auto lg:mx-0">
            <ProductDetailsCarousel />
          </div>
          <div className="flex-[1]">
            <div className="text-[28px] font-semibold mb-2">
              Jordan Retro 6 G
            </div>
            <div className="text-1g font-semibold mb-5">
              Men&apos;s Golf Shoes
            </div>
            <div className="text-1g font-semibold">
              MRP : ₹ 19 695.00
              <div className="text-md font-medium text-black/[0.5]">
                incl. of taxes
              </div>
              <div className="text-md font-medium text-black/[0.5] mb-20">
                {`(Also includes all applicable duties)`}
              </div>
              <div className="mb-10">
                <div className="flex justify-between mb-2">
                  <div className="text-md font-semibold">Select Size</div>
                  <div className="text-md font-medium text-black/[0.5] cursor-pointer">
                    Select Guide
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-2">
                  <div className="border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer">
                    UK 6
                  </div>
                  <div className="border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer">
                    UK 6
                  </div>
                  <div className="border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer">
                    UK 6
                  </div>
                  <div className="border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer">
                    UK 6
                  </div>
                  <div className="border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer">
                    UK 6
                  </div>
                  <div className="border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer">
                    UK 6
                  </div>
                  <div className="border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer">
                    UK 6
                  </div>
                  <div className="border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer">
                    UK 6
                  </div>
                  <div className="border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer">
                    UK 6
                  </div>
                  <div className="border rounded-md text-center py-3 font-medium  cursor-not-allowed bg-black/[0.1] opacity-50">
                    UK 6
                  </div>
                  <div className="border rounded-md text-center py-3 font-medium  cursor-not-allowed bg-black/[0.1] opacity-50">
                    UK 6
                  </div>
                </div>

                <div className="text-red-600 mt-3 font-thin">
                  Size selection is required
                </div>
              </div>
              <button className="w-full py-4 rounded-full bg-black text-white text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75">
                Add to Cart
              </button>
              <button
                className="w-full py-4 rounded-full border border-black text-lg font-medium transition-transform active:scale-95 flex items-center gap-2 justify-center    
              hover:opacity-75 mb-[60px]"
              >
                Wishlist
                <BiHeart size={20} />
              </button>
            </div>
            <div className="text-lg font-bold mb-5 mt-1">Product Details</div>
            <div className="text-md">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat
              magnam ab sint esse qui sunt, unde molestiae fuga rem aliquam
              suscipit maxime in nihil non voluptas, voluptatibus, consequatur
              reiciendis ducimus?Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Consequatur a architecto laboriosam, voluptatem
              minima, eligendi voluptatibus quisquam, optio omnis quas voluptate
              eos consequuntur magni unde eaque inventore delectus aut dicta.
            </div>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default ProductDetails;

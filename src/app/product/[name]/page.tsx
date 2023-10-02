import React from "react";
import ProductDetailsCarousel from "@/app/components/ProductDetailsCarousel";
import Wrapper from "@/app/components/Wrapper";

const ProductDetails: React.FC = () => {
  return (
    <div className="w-full md:pg-20">
      <Wrapper>
        <div className="ml-[70px] flex flex-col lg:flex-row md:px-10 gap-[50px] lg:gap:[100px]">
          <div className="w-full md:w-auto flex-[1.5] max-w-[500px] lg:max-w-full mx-auto lg:mx-0">
            <ProductDetailsCarousel />
          </div>  
          <div className="flex-[1] py-3">right</div>
        </div>
      </Wrapper>
    </div>
  );
};

export default ProductDetails;

import React from "react";
import Wrapper from "../../components/Wrapper";
import ProductCard from "../../components/ProductCard";

const Category: React.FC = () => {
  return (
    <Wrapper>
      <div className="text-center pt-[30px] max-w-[800px] mx-auto md:mt-[80px]">
        <div className="text-[20px] md:text-[28px] mb-5 font-bold leading-tight text-gray-900">
          Sneakers
        </div>
      </div>

      <div className="w-[1250px]"></div>
      <div className="grid gap-x-[2px] ml-[80px] gird-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 my-14 px-[55px] mb-[40px] md:px-0;">
        <ProductCard
          productName="Product Name"
          price={50.0}
          salePrice={40.0}
          imageUrl="/product-1.webp"
        />

        <ProductCard
          productName="Product Name"
          price={50.0}
          salePrice={40.0}
          imageUrl="/product-1.webp"
        />

        <ProductCard
          productName="Product Name"
          price={50.0}
          salePrice={40.0}
          imageUrl="/product-1.webp"
        />

        <ProductCard
          productName="Product Name"
          price={50.0}
          salePrice={40.0}
          imageUrl="/product-1.webp"
        />

        <ProductCard
          productName="Product Name"
          price={50.0}
          salePrice={40.0}
          imageUrl="/product-1.webp"
        />

        <ProductCard
          productName="Product Name"
          price={50.0}
          salePrice={40.0}
          imageUrl="/product-1.webp"
        />

        <ProductCard
          productName="Product Name"
          price={50.0}
          salePrice={40.0}
          imageUrl="/product-1.webp"
        />

        <ProductCard
          productName="Product Name"
          price={50.0}
          salePrice={40.0}
          imageUrl="/product-1.webp"
        />

        <ProductCard
          productName="Product Name"
          price={50.0}
          salePrice={40.0}
          imageUrl="/product-1.webp"
        />
      </div>
    </Wrapper>
  );
};

export default Category;

import React from "react";
import Carousel from "../utils/multiCarousel";
import ProductCard from "./ProductCard";

const RelatedProducts: React.FC = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 767, min: 0 },
      items: 1,
    },
  };
  return (
    <div className="mt-[50px] md:mt-[100px] mb-[100px] md:mb-0">
      <div className="md:ml-[145px] text-[20px] font-bold mb-2">
        You Might Also Like
      </div>
      <div>
        <Carousel
          responsive={responsive}
          containerClass="mx-[140px]"
          itemClass="px-[5px]"
        >
          <div>
            <ProductCard
              name="Product Name"
              price={50.0}
              original_price={40.0}
              imageUrl="/product-1.webp"
              slug="/products"
            />
          </div>
          <div>
            <ProductCard
              name="Product Name"
              price={50.0}
              original_price={40.0}
              imageUrl="/product-1.webp"
              slug="/products"
            />
          </div>
          <div>
            <ProductCard
              name="Product Name"
              price={50.0}
              original_price={40.0}
              imageUrl="/product-1.webp"
              slug="/products"
            />
          </div>
          <div>
            <ProductCard
              name="Product Name"
              price={50.0}
              original_price={40.0}
              imageUrl="/product-1.webp"
              slug="/products"
            />
          </div>
          <div>
            <ProductCard
              name="Product Name"
              price={50.0}
              original_price={40.0}
              imageUrl="/product-1.webp"
              slug="/products"
            />
          </div>
          <div>
            <ProductCard
              name="Product Name"
              price={50.0}
              original_price={40.0}
              imageUrl="/product-1.webp"
              slug="/products"
            />
          </div>
          <div>
            <ProductCard
              name="Product Name"
              price={50.0}
              original_price={40.0}
              imageUrl="/product-1.webp"
              slug="/products"
            />
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default RelatedProducts;

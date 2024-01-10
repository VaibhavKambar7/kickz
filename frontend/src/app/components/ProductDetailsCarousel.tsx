import React from "react";
import Carousel from "../utils/responsiveCarousel";

interface ProductDetailsCarouselProps {
  images: string[];
}

const ProductDetailsCarousel: React.FC<ProductDetailsCarouselProps> = ({
  images,
}) => {
  return (
    <div className="py-[100px] my-[100px] text-white text-[20px] w-full max-w-[1360px] mx-auto sticky top-[50px]">
      <Carousel
        infiniteLoop={true}
        showIndicators={false}
        showStatus={false}
        thumbWidth={60}
        className="productCarousel"
      >
        {/* <img src="/p2.png" />
        <img src="/p3.png" />
        <img src="/p4.png" />
        <img src="/p5.png" />
        <img src="/p6.png" />
        <img src="/p7.png" /> */}

        {images?.map((imageUrl) => (
          <img key={imageUrl} src={imageUrl} />
        ))}
      </Carousel>
    </div>
  );
};

export default ProductDetailsCarousel;

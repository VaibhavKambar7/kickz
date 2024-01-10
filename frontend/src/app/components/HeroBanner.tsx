import React from "react";
import Carousel from "../utils/responsiveCarousel";

const HeroBanner: React.FC = () => {
  return (
    <div className="relative text-white text-[20px] h-[550px] w-[800px] max-w-[1360px] mx-auto">
      <Carousel
        autoPlay={true}
        infiniteLoop={true}
        showThumbs={false}
        showIndicators={true}
        showStatus={false}
      >
        <div>
          <img
            src="/n1.jpeg"
            className="w-[200px] h-[300px] md:h-[500px] object-cover"
            alt="Image 1"
          />
          <div className="overlay-text text-black-800">Shop now</div>
        </div>

        <div>
          <img
            src="/n2.jpeg"
            className="h-[400px] w-[200px] md:h-[500px] object-cover"
            alt="Image 2"
          />
          <div className="overlay-text">Shop now</div>
        </div>

        <div>
          <img
            src="/n3.jpeg"
            className="w-[100px] h-[400px] md:h-[500px] object-cover"
            alt="Image 3"
          />
          <div className="overlay-text">Shop now</div>
        </div>
      </Carousel>
    </div>
  );
};

export default HeroBanner;

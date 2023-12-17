"use client";

import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { BiArrowBack } from "react-icons/bi";

type HeroBannerProps = {};

const HeroBanner: React.FC<HeroBannerProps> = () => {
  return (
    <div className="relative text-white text-[20px] h-[550px] w-[800px] max-w-[1360px] mx-auto">
      <Carousel
        autoPlay={true}
        infiniteLoop={true}
        showThumbs={false}
        showIndicators={false}
        showStatus={false}
        renderArrowPrev={(clickHandler, hasPrev) => (
          <div
            onClick={clickHandler}
            className="absolute right-[31px] md:right-[51px] bottom-0 w-[30px] md:w-[50px] h-[30px] md:h-[50px] bg-black z-10 flex items-center justify-center cursor-pointer hover:opacity-90"
          >
            <BiArrowBack className="text-sm md:text-lg" />
          </div>
        )}
        renderArrowNext={(clickHandler, hasNext) => (
          <div
            onClick={clickHandler}
            className="absolute right-0 bottom-0 w-[30px] md:w-[50px] h-[30px] md:h-[50px] bg-black z-10 flex items-center justify-center cursor-pointer hover:opacity-90"
          >
            <BiArrowBack className="rotate-180 text-sm md:text-lg" />
          </div>
        )}
      >
        <div>
          <img
            src="/n1.jpeg"
            className="w-[200px] h-[300px] md:h-[500px] object-cover"
            alt="Image 1"
          />
          <div className="overlay-text">Shop now</div>
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

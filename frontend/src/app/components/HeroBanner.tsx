import React from "react";
import Carousel from "../utils/responsiveCarousel";

const HeroBanner: React.FC = () => {
  return (
    <div className="relative text-white text-[20px] h-[550px] w-[800px] max-w-[1360px] mx-auto">
      <Carousel
        autoPlay={true}
        infiniteLoop={true}
        showThumbs={false}
        showIndicators={false}
        showStatus={false}
        showArrows={false}
      >
        <div>
          <img
            src="https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/9cfd9c6d-59cb-4dac-af4f-1552ddc58d36/dunk-low-retro-shoe-66RGqF.png"
            className="max-w-full h-[550px] object-cover"
            alt="Image 1"
          />
          <div className="overlay-text text-black-800">Shop now</div>
        </div>

        <div>
          <img
            src="https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/0f557b1f-ba79-419c-a814-f7b5d117fbb2/dunk-low-retro-shoes-bCzchX.png"
            className="max-w-full h-[550px] object-cover"
            alt="Image 2"
          />
          <div className="overlay-text">Shop now</div>
        </div>

        <div>
          <img
            src="https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/ac88ab75-d4bf-4be4-a654-498d9d42f196/dunk-low-retro-se-shoes-RSrHtr.png"
            className="max-w-full h-[550px] object-cover"
            alt="Image 3"
          />
          <div className="overlay-text">Shop now</div>
        </div>
      </Carousel>
    </div>
  );
};

export default HeroBanner;

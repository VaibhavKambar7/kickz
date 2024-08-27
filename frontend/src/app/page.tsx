import HeroBanner from "./components/HeroBanner";
import ProductCard from "./components/ProductCard";
import Wrapper from "./components/Wrapper";

import { FrontendProduct } from "./interfaces/productCategoryInterface";

const Home: React.FC = async ({}) => {
  const apiURL = process.env.NEXT_PUBLIC_API_URL;

  const response = await fetch(`${apiURL}/api/products`, {
    cache: "force-cache",
  });

  const products: FrontendProduct[] = await response.json();

  return (
    <div>
      <div
        className="bg-cover h-558 w-full"
        style={{
          backgroundImage:
            "url('https://res.cloudinary.com/dotxtkk4n/image/upload/v1708936579/kickz/herobanner_bg/bg_nvgxfv.jpg')",
        }}
      >
        <HeroBanner />
      </div>

      <Wrapper>
        <div className="text-center pt-[50px] max-w-[800px] mx-auto my-[50px] md:my-[80px]">
          <div className="text-[20px] md:text-[28px] mb-5 font-bold leading-tight text-gray-900">
            Discover Your Perfect Pair
          </div>
          <div className="text-sm md:text-lg text-gray-700">
            Explore a wide range of shoes designed for every stride. From sleek
            runners to sturdy hiking boots, find the ideal footwear for your
            journey.
          </div>
        </div>

        <div className="w-[1250px]"></div>
        <div className="grid pt-[50px] gap-x-[2px] ml-[80px] grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 my-14 px-[55px] mb-[40px] md:px-0;">
          {products?.map((product) => (
            <ProductCard
              key={product.id}
              name={product.name}
              price={product.price}
              original_price={product.original_price}
              imageUrl={product.thumbnail}
              slug={product.slug}
            />
          ))}
        </div>
      </Wrapper>
    </div>
  );
};

export default Home;

import HeroBanner from "./components/HeroBanner";
import ProductCard from "./components/ProductCard";
import Wrapper from "./components/Wrapper";

const Home: React.FC = () => {
  return (
    <main>
      <HeroBanner />
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
        <div className="grid pt-[50px] gap-x-[2px] ml-[80px] gird-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 my-14 px-[55px] mb-[40px] md:px-0;">
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
    </main>
  );
};

export default Home;

import React from "react";
import Wrapper from "../../components/Wrapper";
import ProductCard from "../../components/ProductCard";
import { FrontendCategory } from "@/app/utils/productUtils";
import { FrontendProduct } from "@/app/utils/productUtils";

interface CategoryParams {
  slug: string;
}

async function getCatProducts() {
  const response = await fetch(`http://localhost:5000/api/categories`);

  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }

  return response.json();
}

export default async function Category({ params }: { params: CategoryParams }) {
  const categories = await getCatProducts();
  const { slug } = params;

  //console.log(slugs)

  return (
    <Wrapper>
      <div className="text-center pt-[30px] max-w-[800px] mx-auto md:mt-[80px]">
        <div className="text-[20px] md:text-[28px] mb-5 font-bold leading-tight text-gray-900">
          {categories.find(
            (category: FrontendCategory) => category.slug === slug
          )?.name ?? "Category Name"}
        </div>
      </div>

      <div className="w-[1250px]"></div>
      {categories.map(
        (category: FrontendCategory) =>
          category.slug === slug && (
            <div
              key={category.id}
              className="grid gap-x-[2px] ml-[80px] gird-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 my-14 px-[55px] mb-[40px] md:px-0;"
            >
              {category.products.map((product: FrontendProduct) => (
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
          )
      )}
    </Wrapper>
  );
}

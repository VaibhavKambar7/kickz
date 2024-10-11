import React from "react";
import Wrapper from "../../components/Wrapper";
import ProductCard from "../../components/ProductCard";
import { FrontendCategory } from "@/app/interfaces/productCategoryInterface";
import { FrontendProduct } from "@/app/interfaces/productCategoryInterface";
import { fetchCategories } from "@/app/utils/getCategories";

interface CategoryParams {
  slug: string;
}

export default async function Category({ params }: { params: CategoryParams }) {
  const categories = await fetchCategories();
  const { slug } = params;

  const matchingCategory = categories.find(
    (category: FrontendCategory) => category.slug === slug,
  );

  return (
    <Wrapper>
      <div className="text-center pt-[30px] max-w-[800px] mx-auto md:mt-[80px]">
        <div className="text-[20px] md:text-[28px] mb-5 font-bold leading-tight text-gray-900">
          {matchingCategory?.name ?? "Category Name"}
        </div>
      </div>

      <div className="w-[1250px]"></div>

      {matchingCategory && (
        <div className="grid gap-x-[2px] ml-[80px] grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 my-14 px-[55px] mb-[40px] md:px-0;">
          {matchingCategory?.products?.map((product: FrontendProduct) => (
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
      )}
    </Wrapper>
  );
}

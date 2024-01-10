"use client";

import {
  FrontendProduct,
  SizeData,
} from "@/app/interfaces/productCategoryInterface";
import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { useParams } from "next/navigation";
import Wrapper from "@/app/components/Wrapper";
import { BiHeart } from "react-icons/bi";
import ProductDetailsCarousel from "@/app/components/ProductDetailsCarousel";
import getProducts from "@/app/api/getProducts";
import ReactMarkdown from "react-markdown";

export default function ProductDetails() {
  const params = useParams();

  const [selectedSize, setSelectedSize] = useState("");
  const [showError, setShowError] = useState(false);

  const { slug } = params;

  const { isLoading, error, data } = useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
  });

  if (isLoading) {
    return <div>Loading product details...</div>;
  }

  if (error) {
    return <div>Error fetching product details: {error.message}</div>;
  }

  const matchedProduct = data.find((p: FrontendProduct) => p.slug === slug)!;

  return (
    <div className="w-full md:pg-20">
      <Wrapper>
        <div className="flex flex-col lg:flex-row md:px-10 gap-[50px] lg:gap-[100px]">
          <div className="w-full md:w-auto flex-[1.5] max-w-[500px] lg:max-w-full mx-auto lg:mx-0">
            {<ProductDetailsCarousel images={matchedProduct?.images} />}
          </div>
          <div className="flex-[1] py-3">
            <div className="text-[34px] font-semibold mb-2 leading-tight">
              {matchedProduct?.name}
            </div>
            <div className="text-lg font-semibold mb-5">
              {matchedProduct?.subtitle}
            </div>
            <div className="flex items-center">
              <p className="mr-2 text-lg font-semibold">
                MRP : &#8377;{matchedProduct?.price}
              </p>
              <p className="text-base  font-medium line-through">
                &#8377;{matchedProduct?.original_price}
              </p>
              <p className="ml-auto text-base font-medium text-green-500">
                20% off
              </p>
            </div>
            <div className="text-md font-medium text-black/[0.5]">
              incl. of taxes
            </div>
            <div className="text-md font-medium text-black/[0.5] mb-20">
              {`(Also includes all applicable duties)`}
            </div>
            <div className="mb-10">
              <div className="flex justify-between mb-2">
                <div className="text-md font-semibold">Select Size</div>
                <div className="text-md font-medium text-black/[0.5] cursor-pointer">
                  Select Guide
                </div>
              </div>
              <div id="sizesGrid" className="grid grid-cols-3 gap-2">
                {matchedProduct?.size.data.map((s: SizeData) => (
                  <div
                    key={s.size}
                    className={`border rounded-md text-center py-3 font-medium ${
                      s.enabled
                        ? "hover:border-black cursor-pointer"
                        : "cursor-not-allowed bg-black/[0.1] opacity-50"
                    } ${selectedSize === s.size ? "border-black" : ""}`}
                    onClick={() => {
                      setSelectedSize(s.size);
                      setShowError(false);
                    }}
                  >
                    {s.size}
                  </div>
                ))}
              </div>

              {showError && (
                <div className="text-red-600 mt-1">
                  Size selection is required *
                </div>
              )}
            </div>
            <button
              className="w-full py-4 rounded-full bg-black text-white text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75"
              onClick={() => {
                if (!selectedSize) {
                  setShowError(true);
                  document.getElementById("sizesGrid")?.scrollIntoView({
                    block: "center",
                    behavior: "smooth",
                  });
                }
              }}
            >
              Add to Cart
            </button>

            <button className="w-full py-4 rounded-full border border-black text-lg font-medium transition-transform active:scale-95 flex items-center justify-center gap-2 hover:opacity-75 mb-10">
              Wishlist
              <BiHeart size={20} />
            </button>
            <div className="text-lg font-bold mb-5">Product Details</div>
            <div className="markdown text-md mb-5">
              <ReactMarkdown>{matchedProduct?.description}</ReactMarkdown>
            </div>
          </div>
        </div>
      </Wrapper>
    </div>
  );
}

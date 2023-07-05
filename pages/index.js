import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
// components dynimic import
import { productData } from "../components/config";
import Link from "next/link";
import Image from "next/image";

const Wrapper = dynamic(() => import("@/components/Wrapper"));
const HeroBanner = dynamic(() => import("@/components/HeroBanner"));
const ProductCard = dynamic(() => import("@/components/ProductCard"));
const NewsLetter = dynamic(() => import("@/components/NewsLetter"));
const Support = dynamic(() => import("@/components/Support"));
const RelatedProductCrousel = dynamic(() =>
  import("@/components/RelatedProductCrousel")
);
import { fetchDataFromApi } from "@/utils/api";
// import await from "await";

export default function Home() {
  return (
    <main>
      <HeroBanner />

      <Wrapper>
        {/* main heading and pergraphe start */}
        <div className="text-center max-w-[800px] mx-auto my-[50px] md:my-[80px]">
          <h3 className="text-[28px] md:text-5xl mb-5 font-bold leading-tight">
            Top Collections
          </h3>
          <p>
            A lightweight Nike ZoomX midsole is combined with increased stack
            heights to help provide cushioning during extended stretches of
            running.
          </p>
        </div>
        {/* main heading and pergraphe start */}
        {/* product card grid start*/}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 my-14 px-5 md:px-0">
          {productData.map((value) => (
            <Link
              href="/product/1"
              className="transform overflow-hidden bg-white duration-200 hover:scale-105 cursor-pointer shadow-slate-200   "
            >
              <div className="border rounded-sm ">
                <Image
                  width={500}
                  height={500}
                  src={value.img}
                  alt={value.title}
                />

                <div className="p-4 text-black/[0.9]">
                  <h2 className="text-lg font-bold whitespace-nowrap overflow-hidden text-ellipsis">
                    {value.title}
                  </h2>
                  <p className="mr-2 text-lg font-medium whitespace-nowrap overflow-hidden text-ellipsis">
                    {value.cetagory}
                  </p>
                  <div className="flex items-center text-black/[0.5]">
                    <p className="mr-2 text-lg font-semibold"> {value.price}</p>

                    <>
                      <p className="text-base  font-medium line-through">
                        {value.lessPrice}
                      </p>
                      <p className="ml-auto text-base font-medium text-white px-2 rounded-[2px] absolute top-5 right-5 bg-yellow-500">
                        {value.offPrice}
                      </p>
                    </>
                  </div>
                </div>
              </div>
            </Link>
          ))}
          {/* <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard /> */}
        </div>
        {/* product card grid end*/}
        {/* news letter start*/}
        <NewsLetter />
        {/* related product crousel*/}
        <RelatedProductCrousel />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-14 px-5 md:px-0">
          <Support />
          <Support />
          <Support />
        </div>
      </Wrapper>
    </main>
  );
}

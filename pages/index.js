import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
// components dynimic import
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

export default function Home({ products }) {
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
          {products?.data?.map((product) => (
            <ProductCard key={product?.id} data={product} />
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

export async function getStaticProps() {
  const products = await fetchDataFromApi("/api/products?populate=*");

  return {
    props: { products },
  };
}

import React from "react";
import dynamic from "next/dynamic";
// components dynimic import
const Wrapper = dynamic(() => import("@/components/Wrapper"));
const ProductCard = dynamic(() => import("@/components/ProductCard"));

const Category = () => {
  return (
    <div className="w-full md:py-20 relative">
      <Wrapper>
        {/* top heading start hear  */}
        <div className="text-center max-w-[800px] mx-auto mt-8 md:mt-0">
          <h3 className="text-[28px] md:text-5xl mb-5 font-bold leading-tight">
            Runing Shoes
          </h3>
        </div>
        {/* top heading end hear*/}
        {/* product card grid start*/}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 my-14 px-5 md:px-0">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
        {/* product card grid end*/}
      </Wrapper>
    </div>
  );
};

export default Category;

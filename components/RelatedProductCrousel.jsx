import React from "react";
import dynamic from "next/dynamic";
// components dynimic import
const ProductCard = dynamic(() => import("@/components/ProductCard"));

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const RelatedProductCrousel = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 780 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <div className="mt-[50px] md:mt-[100px] mb-[100px] md:mb-10">
      <h3 class="text-[28px] md:text-5xl mb-10 font-bold leading-tight text-center">
        Related Products
      </h3>
      <Carousel
        responsive={responsive}
        containerClass="mx-[10px]"
        itemClass="px-[10px]"
      >
        {[1, 2, 3, 4, 5, 6, 7, 8].map((v) => {
          return <ProductCard />;
        })}
      </Carousel>
    </div>
  );
};

export default RelatedProductCrousel;

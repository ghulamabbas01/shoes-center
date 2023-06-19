import React from "react";
import dynamic from "next/dynamic";
// components dynimic import
const Wrapper = dynamic(() => import("@/components/Wrapper"));
const ProductDetailsCrousel = dynamic(() =>
  import("@/components/ProductDetailsCrousel")
);
const RelatedProductCrousel = dynamic(() =>
  import("@/components/RelatedProductCrousel")
);
// components dynimic import

// icon
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

const ProductDetails = () => {
  return (
    <div className="w-full md:py-20">
      <Wrapper>
        <div className="flex flex-col lg:flex-row md:px-10 gap-[50px] lg:gap-[100px]">
          {/* left side colm start  */}
          <div className="w-full md:w-auto flex-[1.5] max-w-[500px] lg:max-w-full mx-auto lg:mx-0">
            <ProductDetailsCrousel />
          </div>
          {/* left side colm end  */}
          {/* right side colm start  */}
          <div className="flex-[1] py-3">
            {/* PRODUCT TITLE */}
            <h2 className="text-2xl font-semibold">Nike Air Max Pulse</h2>

            {/* PRODUCT SUBTITLE */}
            <p className="mr-2 text-lg font-medium">Man Shoes</p>

            {/* PRODUCT PRICE */}
            <div className="flex items-center">
              <p className="mr-2 text-lg font-medium">MRP : &#8377;100$</p>
              <p className="text-base  font-medium line-through">&#8377;200$</p>
              <p className="ml-auto text-base font-semibold bg-yellow-500 px-2 rounded-sm py-1">
                30% off
              </p>
            </div>
            <div className="text-md font-medium text-black/[0.5]">
              incl. of taxes
            </div>
            <div className="text-md font-medium text-black/[0.5] mb-20">
              {`(Also includes all applicable duties)`}
            </div>
            {/* PRODUCT SIZE RANGE START */}
            <div className="mb-10">
              {/* HEADING START */}
              <div className="flex justify-between mb-2">
                <h3 className="text-lg font-semibold">Select Size</h3>
                <h3 className="text-lg font-medium text-black/[0.5] cursor-pointer">
                  Select Guide
                </h3>
              </div>
              {/* HEADING END */}
              {/* size start  */}
              <div className="grid grid-cols-3 gap-2">
                <div
                  className={
                    "border rounded-md text-center py-3 hover:text-yellow-500 font-medium hover:border-yellow-500 cursor-pointer"
                  }
                >
                  Uk 6
                </div>
                <div
                  className={
                    "border rounded-md text-center py-3 hover:text-yellow-500 font-medium hover:border-yellow-500 cursor-pointer"
                  }
                >
                  Uk 6
                </div>
                <div
                  className={
                    "border rounded-md text-center py-3 hover:text-yellow-500 font-medium hover:border-yellow-500 cursor-pointer"
                  }
                >
                  Uk 6
                </div>
                <div
                  className={
                    "border rounded-md text-center py-3 hover:text-yellow-500 font-medium hover:border-yellow-500 cursor-pointer"
                  }
                >
                  Uk 6
                </div>
                <div
                  className={
                    "border rounded-md text-center py-3 hover:text-yellow-500 font-medium hover:border-yellow-500 cursor-pointer"
                  }
                >
                  Uk 6
                </div>
                <div
                  className={
                    "border rounded-md text-center py-3 hover:text-yellow-500 font-medium hover:border-yellow-500 cursor-pointer"
                  }
                >
                  Uk 6
                </div>
                <div
                  className={
                    "border rounded-md text-center py-3 hover:text-yellow-500 font-medium hover:border-yellow-500 cursor-pointer"
                  }
                >
                  Uk 6
                </div>
                {/* size not sellected  */}
                <div
                  className={
                    "border rounded-md text-center py-3 font-medium hover:bg-black/[0.1] cursor-not-allowed opacity-50"
                  }
                >
                  Uk 6
                </div>
                <div
                  className={
                    "border rounded-md text-center py-3 font-medium hover:bg-black/[0.1] cursor-not-allowed opacity-50"
                  }
                >
                  Uk 6
                </div>
                <div
                  className={
                    "border rounded-md text-center py-3 font-medium hover:bg-black/[0.1] cursor-not-allowed opacity-50"
                  }
                >
                  Uk 6
                </div>
              </div>
              {/* Size selection is required  */}
              <p className="text-red-600 mt-3">Size Selection Is Required</p>
            </div>
            {/* ADD TO CART BUTTON START */}
            <button className="w-full py-4 rounded-full bg-yellow-500 text-black text-lg font-bold transition-transform active:scale-95 mb-3 hover:opacity-75">
              Add to Cart
            </button>
            {/* ADD TO CART BUTTON END */}
            <button className="w-full py-4 rounded-full border border-black text-lg font-bold transition-transform active:scale-95 flex items-center justify-center gap-2 hover:opacity-75 mb-10">
              Whishlist
              <FavoriteBorderIcon size={20} />
            </button>
            {/* WHISHLIST BUTTON END */}
            <div>
              <div className="text-lg font-bold mb-5">Product Details</div>
              <div className="markdown text-md mb-5">
                Keeping it real, the Air Max Pulse pulls inspiration from the
                London music scene, bringing an underground touch to the iconic
                Air Max line. Its textile-wrapped midsole and vacuum-sealed
                accents keep ‘em looking fresh and clean, while colors inspired
                by the London music scene give your look the edge. Point-loaded
                Air cushioning—revamped from the incredibly plush Air Max
                270—delivers better bounce, helping you push past your limits.
              </div>
            </div>
          </div>
          {/* right side colm end  */}
        </div>
        <RelatedProductCrousel />
      </Wrapper>
    </div>
  );
};

export default ProductDetails;

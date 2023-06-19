import React from "react";
import dynamic from "next/dynamic";
// components dynimic import
const Wrapper = dynamic(() => import("@/components/Wrapper"));
const CheckOutCart = dynamic(() => import("@/components/CheckOutCart"));
// import Image from "next/image";
// import Link from "next/link";

const checkout = () => {
  return (
    <div className="w-full md:py-20">
      <Wrapper>
        {/* HEADING AND PARAGRAPH START */}
        <div className="text-center max-w-[800px] mx-auto mt-8 md:mt-0">
          <h3 class="text-[28px] md:text-5xl mb-5 font-bold leading-tight">
            Shopping Cart
          </h3>
        </div>
        {/* HEADING AND PARAGRAPH END */}
        {/* CART CONTENT START */}
        <div className="flex flex-col lg:flex-row gap-12 py-10">
          {/* CART ITEMS START */}
          <div className="flex-[2]">
            <h4 className="text-lg font-bold">
              Cart Items
              <div className="w-[70px] rounded h-1 text-yellow-500 bg-yellow-500" />
            </h4>
            <CheckOutCart />
          </div>
          {/* CART ITEMS END */}

          {/* SUMMARY START */}
          <div className="flex-[1]">
            <h4 className="text-lg font-bold">
              Summary
              <div className="w-[50px] rounded h-1 text-yellow-500 bg-yellow-500" />
            </h4>

            <div className="p-5 my-5 bg-black/[0.05] rounded-xl">
              <div className="flex justify-between">
                <div className="uppercase text-md md:text-lg font-medium text-black">
                  Subtotal
                </div>
                <div className="text-md md:text-lg font-medium text-black">
                  &#8377;50
                </div>
              </div>
              <div className="text-sm md:text-md py-5 border-t mt-5">
                The subtotal reflects the total price of your order, including
                duties and taxes, before any applicable discounts. It does not
                include delivery costs and international transaction fees.
              </div>
            </div>

            {/* BUTTON START */}
            <button className="w-full py-4 rounded-full bg-yellow-500 text-white text-lg font-bold transition-transform active:scale-95 mb-3 hover:opacity-75 flex items-center gap-2 justify-center">
              Checkout
            </button>
            {/* BUTTON END */}
          </div>
          {/* SUMMARY END */}
        </div>
        {/* CART CONTENT END */}
        {/* <div className="flex-[2] flex flex-col items-center pb-[50px] md:-mt-14">
          <Image
            src="/empty-cart.jpg"
            width={300}
            height={300}
            className="w-[300px] md:w-[400px]"
          />
          <span className="text-xl font-bold">Your cart is empty</span>
          <span className="text-center mt-4">
            Looks like you have not added anything in your cart.
            <br />
            Go ahead and explore top categories.
          </span>
          <Link
            href="/"
            className="py-4 px-8 rounded-full bg-yellow-500 text-black text-lg font-bold transition-transform active:scale-95 mb-3 hover:opacity-75 mt-8"
          >
            Continue Shopping
          </Link>
        </div> */}
      </Wrapper>
    </div>
  );
};

export default checkout;

import React from "react";
import Image from "next/image";
import Link from "next/link";

import { getDiscountedPricePercentage } from "@/utils/helper";

const ProductCard = ({ data: { attributes: pro, id } }) => {
  // console.log(pro.thumbnil.data[0].attributes.formats.thumbnail.url, "test");
  return (
    <Link
      href={`/products/${pro.slug}`}
      className="transform overflow-hidden bg-white duration-200 hover:scale-105 cursor-pointer shadow-slate-200   "
    >
      <div className="border rounded-sm ">
        <Image
          width={500}
          height={500}
          src={pro.thumbnail.data.attributes.url}
          alt={pro.name}
        />

        <div className="p-4 text-black/[0.9]">
          <h2 className="text-lg font-bold whitespace-nowrap overflow-hidden text-ellipsis">
            {pro.name}
          </h2>
          <p className="mr-2 text-lg font-medium whitespace-nowrap overflow-hidden text-ellipsis">
            {pro.subtitle}
          </p>
          <div className="flex items-center text-black/[0.5]">
            <p className="mr-2 text-lg font-semibold">&#8377;{pro.price}</p>

            <>
              {pro.original_price && (
                <>
                  <p className="text-base  font-medium line-through">
                    &#8377;{pro.original_price}
                  </p>
                  <p className="ml-auto text-base font-medium text-white px-2 rounded-[2px] absolute top-5 right-5 bg-yellow-500">
                    {getDiscountedPricePercentage(
                      pro.original_price,
                      pro.price
                    )}
                    % off
                  </p>
                </>
              )}
            </>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;

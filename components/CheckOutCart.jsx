import React from "react";

// icon
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

const CheckOutCart = () => {
  return (
    <div className="flex py-5 gap-3 md:gap-5 border-b">
      {/* IMAGE START */}
      <div className="shrink-0 aspect-square w-[50px] md:w-[120px] border rounded-sm">
        <img src="product-1.webp" alt="product1" width={120} height={120} />
      </div>
      {/* IMAGE END */}
      <div className="w-full flex flex-col">
        <div className="flex flex-col md:flex-row justify-between">
          {/* PRODUCT TITLE */}

          <h4 className="text-2xl font-semibold">Nike Air Max Pulse</h4>
          {/* PRODUCT SUBTITLE */}
          <p className="text-sm md:text-md font-medium text-black/[0.5] block md:hidden">
            Man Shoes
          </p>
          {/* PRODUCT PRICE */}
          <p className="text-sm md:text-md font-bold text-black/[0.5] mt-2">
            Mr : 19.000
          </p>
        </div>
        {/* sizes  */}
        <div className="flex items-center justify-between mt-4">
          <div className="flex items-center gap-2 md:gap-10 text-black/[0.5] text-sm md:text-md">
            <div className="flex items-center gap-1">
              <div className="font-semibold">Size:</div>
              <select className="hover:text-black">
                <option>Uk 9</option>
                <option>Uk 9</option>
                <option>Uk 9</option>
                <option>Uk 9</option>
                <option>Uk 9</option>
                <option>Uk 9</option>
                <option>Uk 9</option>
                <option>Uk 9</option>
              </select>
            </div>
            <div className="flex items-center gap-1">
              <div className="font-semibold ">Quantity:</div>
              <select className="hover:text-black">
                <option>1</option>
                <option>1</option>
                <option>1</option>
                <option>1</option>
                <option>1</option>
                <option>1</option>
                <option>1</option>
                <option>1</option>
              </select>
            </div>
          </div>
          {/* delet icon  */}
          <DeleteForeverIcon className="cursor-pointer text-black/[0.5] hover:text-yellow-500 text-[24px] md:text-[28px]" />
        </div>
      </div>
    </div>
  );
};

export default CheckOutCart;

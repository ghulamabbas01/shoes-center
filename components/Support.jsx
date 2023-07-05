import React from "react";
import dynamic from "next/dynamic";
// components dynimic import
const Wrapper = dynamic(() => import("@/components/Wrapper"));
// icons
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";

const Support = () => {
  return (
    <>
      <div className="box flex items-center rounded px-3 py-5 border">
        <div className="icon-box flex justify-center items-center">
          <img src="/delivery.png" alt="delivery" width={150} />
        </div>
        <div className="text-box overflow-hidden pl-3">
          <h3 className="font-bold text-lg ">Free Shipping</h3>
          <p className=" text-[12px] mb-3">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta
            voluptate
          </p>
        </div>
      </div>
    </>
  );
};

export default Support;

import React from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
// icons import hear
import { FaFacebookF, FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import MarkunreadOutlinedIcon from "@mui/icons-material/MarkunreadOutlined";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
// components dynimic import
const Wrapper = dynamic(() => import("@/components/Wrapper"));

const Footer = () => {
  return (
    <footer className="footer-sec bg-[#F0F0F0] text-black   pb-3 bg ">
      <Wrapper className="flex justify-between flex-col md:flex-row gap-[50px] md:gap-0">
        {/* LEFT START */}
        <div className="flex gap-[50px] md:gap-[75px] lg:gap-[100px] flex-col md:flex-row">
          {/* MENU START */}
          <div className="flex flex-col gap-3 shrink-0 mt-20">
            <Link href="/" className="font-bold text-[24px] transition-all">
              Shoes Center
              <div className="w-[70px] rounded h-1 text-yellow-500 bg-yellow-500" />
            </Link>
            {/* image logo  */}
            {/* <Link href="/">
                <img src="logo.svg" alt="logo" width={80} />
              </Link> */}
            {/* image logo  */}
            <div>
              <div className="flex mt-7 items-center">
                <LocationOnOutlinedIcon className="mr-3 text-[18px] text-black/[0.5]" />
                <p className=" font-medium hover:translate-x-2 capitalize text-sm transition-all  hover:text-yellow-500 text-black/[0.5]">
                  Phularwan, Sargodha, Paksitan
                </p>
              </div>
              <Link
                href="mailto:info@businessname.com"
                target="blank"
                className="flex mt-4 items-center"
              >
                <MarkunreadOutlinedIcon className="mr-3 text-[18px] text-black/[0.5] " />
                <p className=" font-medium hover:translate-x-2 capitalize text-sm transition-all  hover:text-yellow-500 text-black/[0.5]">
                  mrghulamabbas10@gmail.com
                </p>
              </Link>
              <Link
                href="https://wa.me/+923081001503"
                target="blank"
                className="flex mt-4 items-center"
              >
                <WhatsAppIcon className="mr-3 text-[18px] text-black/[0.5] " />
                <p className=" font-medium capitalize text-sm hover:translate-x-2 transition-transform   hover:text-yellow-500  text-black/[0.5]">
                  +92-308-1001503
                </p>
              </Link>
            </div>
          </div>
          {/* MENU END */}

          {/* NORMAL MENU START */}
          <div className="flex gap-[50px] md:gap-[75px] lg:gap-[100px] shrink-0 mt-20">
            {/* MENU START */}
            <div className="flex flex-col gap-3">
              <div className="font-oswald font-medium uppercase text-sm transition-all ">
                get help
                <div className="w-[20px] rounded h-[3px] text-yellow-500 bg-yellow-500" />
              </div>
              <div className="text-sm transition-all text-black/[0.5] hover:translate-x-2 hover:text-yellow-500 font-medium cursor-pointer ">
                Order Status
              </div>
              <div className="text-sm transition-all text-black/[0.5] hover:translate-x-2 hover:text-yellow-500 font-medium cursor-pointer">
                Delivery
              </div>
              <div className="text-sm transition-all text-black/[0.5] hover:translate-x-2 hover:text-yellow-500 font-medium cursor-pointer">
                Returns
              </div>
              <div className="text-sm transition-all text-black/[0.5] hover:translate-x-2 hover:text-yellow-500 font-medium cursor-pointer">
                Payment Options
              </div>
              <div className="text-sm transition-all text-black/[0.5] hover:translate-x-2 hover:text-yellow-500 font-medium cursor-pointer">
                Contact Us
              </div>
            </div>
            {/* MENU END */}

            {/* MENU START */}
            <div className="flex flex-col gap-3">
              <div className="font-oswald font-medium uppercase text-sm transition-all">
                About nike
                <div className="w-[40px] rounded h-[3px] text-yellow-500 bg-yellow-500" />
              </div>
              <div className="text-sm transition-all text-black/[0.5] hover:translate-x-2 hover:text-yellow-500 font-medium cursor-pointer">
                News
              </div>
              <div className="text-sm transition-all text-black/[0.5] hover:translate-x-2 hover:text-yellow-500 font-medium cursor-pointer">
                Careers
              </div>
              <div className="text-sm transition-all text-black/[0.5] hover:translate-x-2 hover:text-yellow-500 font-medium cursor-pointer">
                Investors
              </div>
              <div className="text-sm transition-all text-black/[0.5] hover:translate-x-2 hover:text-yellow-500 font-medium cursor-pointer">
                Sustainability
              </div>
            </div>
            {/* MENU END */}
          </div>
          {/* NORMAL MENU END */}
        </div>
        {/* LEFT END */}

        {/* RIGHT START */}
        <div className="flex gap-4 justify-center md:justify-start mt-20">
          <div
            onClick={() => window.open("https://facebook.com", "_blank")}
            className="w-10 h-10 hover:translate-y-2 rounded-full bg-black/[0.25] flex items-center justify-center transition-all text-black hover:bg-[#175ddf] hover:text-white cursor-pointer"
          >
            <FaFacebookF size={20} />
          </div>
          <div
            onClick={() => window.open("https://twitter.com", "_blank")}
            className="w-10 h-10 hover:translate-y-2 rounded-full bg-black/[0.25] flex items-center justify-center transition-all text-black hover:bg-[#17A9FD] hover:text-white cursor-pointer"
          >
            <FaTwitter size={20} />
          </div>
          <div
            onClick={() => window.open("https://youtube.com", "_blank")}
            className="w-10 h-10 hover:translate-y-2 rounded-full bg-black/[0.25] flex items-center justify-center transition-all text-black hover:bg-[#FF0000] hover:text-white cursor-pointer"
          >
            <FaYoutube size={20} />
          </div>
          <div
            onClick={() => window.open("https://instagram.com", "_blank")}
            className="w-10 h-10 hover:translate-y-2 rounded-full bg-black/[0.25] flex items-center justify-center transition-all text-black hover:bg-[#E1306C] hover:text-white  cursor-pointer"
          >
            <FaInstagram size={20} />
          </div>
        </div>
        {/* RIGHT END */}
      </Wrapper>
      <Wrapper className="flex justify-between mt-20 flex-col md:flex-row gap-[10px] md:gap-0">
        {/* LEFT START */}
        <div className="text-[12px] transition-all text-black/[0.5] hover:text-yellow-500 cursor-pointer text-center md:text-left">
          © 2023 Shoes Center All Rights Reserved
        </div>
        {/* LEFT END */}

        {/* RIGHT START */}
        <div className="flex gap-2 md:gap-5 text-center md:text-left flex-wrap justify-center">
          <div className="text-[12px] transition-all text-black/[0.5] hover:text-yellow-500 cursor-pointer">
            Guides
          </div>
          <div className="text-[12px] transition-all text-black/[0.5] hover:text-yellow-500 cursor-pointer">
            Terms of Sale
          </div>
          <div className="text-[12px] transition-all text-black/[0.5] hover:text-yellow-500 cursor-pointer">
            Terms of Use
          </div>
          <div className="text-[12px] transition-all text-black/[0.5] hover:text-yellow-500 cursor-pointer">
            Privacy Policy
          </div>
        </div>
        {/* RIGHT END */}
      </Wrapper>
    </footer>
  );
};

export default Footer;

import { React, useEffect, useState } from "react";

import dynamic from "next/dynamic";
// components dynimic import
const Wrapper = dynamic(() => import("@/components/Wrapper"));
const MobileManu = dynamic(() => import("./MobileManu"));
const Manu = dynamic(() => import("./Manu"));
// components dynimic import
import Link from "next/link";

// icons
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingBasketOutlinedIcon from "@mui/icons-material/ShoppingBasketOutlined";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import DensityMediumRoundedIcon from "@mui/icons-material/DensityMediumRounded";

const Header = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [showCatMenu, setShowCatMenu] = useState(false);
  const [show, setShow] = useState("translate-y-0");
  const [lastScrollY, setLastScrollY] = useState(0);
  const [categories, setCategories] = useState(null);

  const controlNavbar = () => {
    if (window.scrollY > 200) {
      if (window.scrollY > lastScrollY && !mobileMenu) {
        setShow("-translate-y-[80px]");
      } else {
        setShow("shadow-sm");
      }
    } else {
      setShow("translate-y-0");
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [lastScrollY]);
  return (
    <header
      className={`w-full h-[60px] md:h-[80px] bg-white flex items-center justify-between z-20 sticky top-0 transition-transform duration-300 ${show} `}
    >
      <Wrapper className="h-[60px] flex justify-between items-center">
        {/* text logo  */}
        <Link href="/">
          <h3 className="font-bold text-[24px] transition-all">Shoes Center</h3>
          <div className="w-[70px] rounded h-1 text-yellow-500 bg-yellow-500" />
        </Link>
        {/* text logo  */}
        {/* image logo  */}
        {/* <Link href="/">
          <img src="logo.svg" alt="logo" width={80} />
        </Link> */}
        {/* image logo  */}
        <Manu showCatMenu={showCatMenu} setShowCatMenu={setShowCatMenu} />
        {/* mobile manu start */}
        {mobileMenu && (
          <MobileManu
            showCatMenu={showCatMenu}
            setShowCatMenu={setShowCatMenu}
            setMobileMenu={setMobileMenu}
          />
        )}
        {/* mobile manu end */}

        {/* right icons  */}
        <div className="flex items-center gap-2 text-black">
          {/* start icon  */}
          <div className="w-8 md:w-12 h-8 md:h-12 rounded-full flex justify-center items-center hover:bg-black/[0.05] hover:text-yellow-500 transition-all cursor-pointer relative">
            <FavoriteBorderIcon className="text-[19px] md:text-[24px]" />
            <span className="h-[14px] md:h-[18px] min-w-[14px] md:min-w-[18px] rounded-full bg-yellow-500 absolute top-1 left-5 md:left-7 text-black text-[10px] md:text-[12px] flex justify-center items-center px-[2px] md:px-[5px]">
              5
            </span>
          </div>
          {/* end icon  */}
          {/* start icon  */}
          <Link href="/checkout">
            <div className="w-8 md:w-12 h-8 md:h-12 rounded-full flex justify-center items-center hover:bg-black/[0.05] hover:text-yellow-500 transition-all cursor-pointer relative">
              <ShoppingBasketOutlinedIcon className="text-[19px] md:text-[24px] " />
              <span className="h-[14px] md:h-[18px] min-w-[14px] md:min-w-[18px] rounded-full bg-yellow-500 absolute top-1 left-5 md:left-7 text-black text-[10px] md:text-[12px] flex justify-center items-center px-[2px] md:px-[5px]">
                5
              </span>
            </div>
          </Link>
          {/* end icon  */}
          {/* mobile icon  */}
          <div className="w-8 md:w-12 h-8 md:h-12 rounded-full flex justify-center items-center hover:bg-black/[0.05] hover:text-yellow-500 cursor-pointer relative md:hidden">
            {mobileMenu ? (
              <CloseRoundedIcon
                className="text-[18px] hover:text-yellow-500"
                onClick={() => setMobileMenu(false)}
              />
            ) : (
              <DensityMediumRoundedIcon
                className="text-[18px]"
                onClick={() => setMobileMenu(true)}
              />
            )}
          </div>
        </div>
      </Wrapper>
    </header>
  );
};

export default Header;

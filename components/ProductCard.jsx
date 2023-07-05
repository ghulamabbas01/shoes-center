import Image from "next/image";
import Link from "next/link";
const ProductCard = () => {
  return (
    <Link
      href="/product/1"
      className="transform overflow-hidden bg-white duration-200 hover:scale-105 cursor-pointer shadow-slate-200   "
    >
      <div className="border rounded-sm ">
        <Image width={500} height={500} src="/p1.png" alt="p1" />

        <div className="p-4 text-black/[0.9]">
          <h2 className="text-lg font-bold whitespace-nowrap overflow-hidden text-ellipsis">
            Air Jordan 5 Retro SE Craft
          </h2>
          <p className="mr-2 text-lg font-medium whitespace-nowrap overflow-hidden text-ellipsis">
            Men's Shoes
          </p>
          <div className="flex items-center text-black/[0.5]">
            <p className="mr-2 text-lg font-semibold">&#8377;15000</p>

            <>
              <p className="text-base  font-medium line-through">&#8377;2000</p>
              <p className="ml-auto text-base font-medium text-white px-2 rounded-[2px] absolute top-5 right-5 bg-yellow-500">
                20 % off
              </p>
            </>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;

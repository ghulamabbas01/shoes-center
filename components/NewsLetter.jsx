import React from "react";

const NewsLetter = () => {
  return (
    <div className="newslatter flex flex-col justify-center items-center bg-yellow-500 mt-12 mb-12 border-[1px] rounded-[4px] pt-10 pb-10 after:">
      <h1 className="text-[28px] md:text-5xl font-bold  ">NEWSLETTER</h1>
      <p className="md:text-lg text-[10px]">
        Sign up to our newsletter to receive the latest updates
      </p>
      <div className="bg-white rounded p-2 md:w-[550px] w-[330px] md:mt-5 mt-2">
        <input
          type="text"
          placeholder="Enter You Email"
          required
          className="p-1 md:w-[430px] outline-none w-[210px]"
        />
        <button className="bg-yellow-500 md:p-2 px-2 py-1 text-white font-semibold rounded-[4px]">
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default NewsLetter;

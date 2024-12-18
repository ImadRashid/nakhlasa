import Image from "next/image";
import React from "react";

export const Header = () => {
  return (
    <header className="h-[48px] md:h-[56px] mt-6 flex items-center justify-between px-[8px] md:px-[60px] ">
      <button className="flex justify-center items-center w-[76px] h-[38px] md:w-[180px] md:h-[56px] font-semibold text-[14px] md:text-[20px]  bg-[#2445CD] text-white rounded-[50px] transition-all duration-300 linear hover:scale-105 ">
        English
      </button>
      <div className="hidden lg:flex text-[18px]  font-[400] gap-7 ">
        <div className="cursor-pointer"> الاسئلة</div>
        <div className="cursor-pointer">خدماتنا </div>
        <div className="cursor-pointer">من نحن </div>
        <div className="cursor-pointer">الرئيسية </div>
      </div>
      <div>
        <Image
          className="w-[125px] md:w-[156px] cursor-pointer"
          src="/assets/images/logo.svg"
          width={156}
          height={59}
          alt="logo"
        />
      </div>
    </header>
  );
};

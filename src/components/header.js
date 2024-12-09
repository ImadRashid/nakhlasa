import Image from "next/image";
import React from "react";

export const Header = () => {
  return (
    <header className="h-[48px] md:h-[56px] mt-6 flex items-center justify-between px-[8px] md:px-[60px] ">
      <button className="flex justify-center items-center w-[76px] h-[38px] md:w-[180px] md:h-[56px] font-semibold text-[14px] md:text-[20px]  bg-[#2445CD] text-white rounded-[50px]">
        English
      </button>
      <div className="hidden md:flex text-[18px]  font-[400] gap-7 ">
        <div> الاسئلة</div>
        <div>خدماتنا </div>
        <div>من نحن </div>
        <div>الرئيسية </div>
      </div>
      <div>
        <Image
          className="w-[125px] md:w-[156px]"
          src="/assets/images/logo.png"
          width={156}
          height={59}
          alt="logo"
        />
      </div>
    </header>
  );
};

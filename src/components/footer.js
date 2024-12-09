import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <footer className="mt-100 bg-[#2445CD] flex flex-col gap-[100px] pt-20 text-white px-[15px] md:px-40">
      <div className="w-[100%] h-[246px] 2xl:h-[280px] rounded-[30px] bg-white flex flex-col justify-center items-end md:flex md:flex-row-reverse md:items-center md:justify-between px-16">
        <h3 className="font-semibold text-[28px] md:text-[40px] text-black  my-5 text-end">
          معاملات تمويل عقاري
          <br className="hidden md:flex" />، شخصي، سيارات
        </h3>
        <button className="  flex justify-center items-center w-[180px] h-[56px] font-semibold text-[20px]  bg-[#2445CD] text-white rounded-[50px]">
          تواصل{" "}
        </button>
      </div>

      <div className="w-[100%]  rounded-[30px] flex flex-col items-end  md:flex md:flex-row-reverse md:items-start md:justify-between ">
        <div className="flex w-[242px] flex-col gap-[15px] items-end">
          <Image
            src="/assets/images/whitelogo.png"
            alt="whitelogo"
            width={240}
            height={65}
          />
          <p className="text-[14px] md:text-[18px] text-end font-semibold  mt-2">
            المملكة العربية السعودية، طريق الملك عبدالله، حي الورود 12253
          </p>
        </div>
        <div className="flex flex-row-reverse gap-24 ">
          <div className="text-end">
            <p className="text-[18px] opacity-50 text-end font-semibold  mt-5">
              تابعنا
            </p>
            <p className="text-[18px] text-end font-semibold  mt-5">اكس</p>
            <p className="text-[18px] text-end font-semibold  mt-5">انستجرام</p>
            <p className="text-[18px] text-end font-semibold  mt-5">تيك توك</p>
            <p className="text-[18px] text-end font-semibold  mt-5">لينكد إن</p>
          </div>
          <div className="text-end">
            <p className="text-[18px] opacity-50 text-end font-semibold  mt-5">
              القائمة
            </p>
            <p className="text-[18px] text-end font-semibold  mt-5">الرئيسية</p>
            <p className="text-[18px] text-end font-semibold  mt-5">من نحن</p>
            <p className="text-[18px] text-end font-semibold  mt-5"> خدماتنا</p>
            <p className="text-[18px] text-end font-semibold  mt-5"> الاسئلة</p>
          </div>
          <div className="text-end">
            <p className="text-[18px] opacity-50 text-end font-semibold  mt-5">
              العملاء
            </p>
            <p className="text-[18px] text-end font-semibold  mt-5">الدعم</p>
            {/* <p className="text-[18px] text-end font-semibold  mt-5">انستجرام</p>
            <p className="text-[18px] text-end font-semibold  mt-5">تيك توك</p>
            <p className="text-[18px] text-end font-semibold  mt-5">لينكد إن</p> */}
          </div>
        </div>
      </div>

      <div className=" flex flex-col items-center gap-2 md:flex justify-center md:flex-row-reverse md:justify-between mt-20 py-5 border-t border-white">
        <p className="text-[13px] md:text-[18px] text-center md:text-end md:font-semibold  mt-2">
          منصة نخلصها. صُنع بواسطة شركة الأفعى. جميع الحقوق محفوظة 2024
        </p>
        <div className="flex  gap-4">
          <p className="text-[18px] text-end font-semibold  ">الشروط</p>
          <p className="text-[18px] text-end font-semibold  ">الخصوصية</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

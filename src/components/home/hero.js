import Image from "next/image";
import React from "react";

const Hero = () => {
  const heroImgArray = [
    {
      img: "/assets/images/hero1.svg",
    },
    {
      img: "/assets/images/hero2.svg",
    },
    {
      img: "/assets/images/hero3.svg",
    },
    {
      img: "/assets/images/hero4.svg",
    },
    {
      img: "/assets/images/hero5.svg",
    },
    {
      img: "/assets/images/hero6.svg",
    },
    {
      img: "/assets/images/hero7.svg",
    },
    {
      img: "/assets/images/hero8.svg",
    },
  ];

  return (
    <section>
      <div className="flex flex-col items-center justify-center">
        <div className="px-[15px] md:min-w-[900px] mt-[42px] md:mt-[138px] font-bold flex flex-col items-center gap-[30px] md:gap-[25px] ">
          <h1 className="text-[56px] text-[#2445CD] md:text-[182px] md:text-[#000] font-bold">
            منصة نخلصها
          </h1>
          <p className="text-[20px] md:text-[36px] text-[#979797]  font-[800] ">
            لمعاملات التمويل العقاري والشخصي والسيارات !
          </p>
          <div className="flex gap-[8px] md:gap-[20px]">
            {heroImgArray.map((item, ind) => {
              return (
                <Image
                  className="h-[22px] w-[22px] md:w-[55px] md:h-[55px]"
                  key={ind}
                  src={item.img}
                  width={55}
                  height={55}
                  alt="img"
                />
              );
            })}
          </div>
          <button className="flex justify-center items-center w-[180px] h-[50px] md:w-[200px] md:h-[56px] font-semibold text-[20px]  bg-[#2445CD] text-white rounded-[50px] transition-all duration-300 ease-in-out hover:bg-[#1A3BAF] hover:scale-105 hover:shadow-lg">
            قدم طلبك الآن
          </button>
        </div>

        <Image
          className="hidden md:flex mt-[50px] md:mt-[57px] mb-[50px] md:mb-[80px]"
          src="/assets/images/heroImg.svg"
          width={1040}
          height={780}
          alt="heroImg"
        />

        <Image
          className="flex md:hidden mt-[50px] md:mt-[57px] mb-[50px] px-[15px] "
          src="/assets/images/heroImg2.svg"
          width={1040}
          height={780}
          alt="heroImg"
        />
      </div>

      <div className="bg-[#2445CD] h-[140px] items-center flex overflow-hidden text-white mb-[80px] relative">
        <div className="flex items-center gap-[20px] animate-marquee">
          <div className="flex items-center shrink-0 gap-4">
            <Image
              src="/assets/images/halflogo.png"
              width={54}
              height={54}
              alt="halglogoimg"
            />
            <h3 className="text-[30px] font-semibold">تمويل شخصي</h3>
          </div>
          <div className="flex items-center shrink-0 gap-4">
            <Image
              src="/assets/images/halflogo.png"
              width={54}
              height={54}
              alt="halglogoimg"
            />
            <h3 className="text-[30px] font-semibold">تمويل شخصي</h3>
          </div>
          <div className="flex items-center shrink-0 gap-4">
            <Image
              src="/assets/images/halflogo.png"
              width={54}
              height={54}
              alt="halglogoimg"
            />
            <h3 className="text-[30px] font-semibold">تمويل شخصي</h3>
          </div>
          <div className="flex items-center shrink-0 gap-4">
            <Image
              src="/assets/images/halflogo.png"
              width={54}
              height={54}
              alt="halglogoimg"
            />
            <h3 className="text-[30px] font-semibold">تمويل شخصي</h3>
          </div>
          <div className="flex items-center shrink-0 gap-4">
            <Image
              src="/assets/images/halflogo.png"
              width={54}
              height={54}
              alt="halglogoimg"
            />
            <h3 className="text-[30px] font-semibold">تمويل شخصي</h3>
          </div>
          <div className="flex items-center shrink-0 gap-4">
            <Image
              src="/assets/images/halflogo.png"
              width={54}
              height={54}
              alt="halglogoimg"
            />
            <h3 className="text-[30px] font-semibold">تمويل شخصي</h3>
          </div>
          <div className="flex items-center shrink-0 gap-4">
            <Image
              src="/assets/images/halflogo.png"
              width={54}
              height={54}
              alt="halglogoimg"
            />
            <h3 className="text-[30px] font-semibold">تمويل شخصي</h3>
          </div>
          <div className="flex items-center shrink-0 gap-4">
            <Image
              src="/assets/images/halflogo.png"
              width={54}
              height={54}
              alt="halglogoimg"
            />
            <h3 className="text-[30px] font-semibold">تمويل شخصي</h3>
          </div>
        </div>
      </div>

      {/* <div className='bg-[#2445CD] h-[140px] items-center flex gap-[30px] text-white overflow-hidden mb-[80px]'>
    {Array.from({ length: 5 }).map((_, index) => (
        <div key={index} className="flex items-center gap-[10px]">
            <Image src='/assets/images/halflogo.png' width={54} height={54} alt='' />
            <h3 className='text-[30px] font-semibold'>
                {index % 2 === 0 ? 'تمويل' : 'شخصي'}
            </h3>
        </div>
    ))}
</div> */}
    </section>
  );
};

export default Hero;

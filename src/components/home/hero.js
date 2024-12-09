import Image from 'next/image'
import React from 'react'

const Hero = () => {

    const heroImgArray = [
        {
            
            img: "/assets/images/hero1.png" ,
        },
        {
            
            img: "/assets/images/hero2.png" ,
        },
        {
            
            img: "/assets/images/hero3.png" ,
        },
        {
            
            img: "/assets/images/hero4.png" ,
        },
        {
            
            img: "/assets/images/hero5.png" ,
        },
        {
            
            img: "/assets/images/hero6.png" ,
        },
        {
            
            img: "/assets/images/hero7.png" ,
        },
    ]

  return (
    <section>
        <div className='flex flex-col items-center justify-center'>
        <div className='min-w-[900px] mt-[138px] font-bold flex flex-col items-center gap-[25px] '>
            <h1 className='text-[132px] flex'>منصة نخلصها</h1>
            <p className='text-[26px] text-[#979797]  font-bold '>لمعاملات التمويل العقاري والشخصي والسيارات !</p>
            <div className='flex gap-[20px]'>

                {heroImgArray.map((item , ind)=> {
                    return (

                        <Image key={ind} src={item.img} width={55} height= {55} />
                    )
                })}
            </div>
        <button className=' mt- flex justify-center items-center w-[200px] h-[56px] font-semibold text-[20px]  bg-[#2445CD] text-white rounded-[50px]'>قدم طلبك الآن</button>

        </div>

        <Image className='mt-[57px] mb-[80px]' src="/assets/images/heroImg.png" width={1040} height={780} alt='heroImg' />
    </div>

    <div className='bg-[#2445CD] h-[140px] items-center flex gap-[20px] text-white overflow-x-hidden mb-[80px]'>
       <div className='flex items-center shrink-0 gap-4'>
       <Image src='/assets/images/halflogo.png' width={54} height={54} alt='' />
       <h3 className='text-[30px] font-semibold'>تمويل شخصي</h3>
       </div>
       <div className='flex items-center shrink-0 gap-4'>
       <Image src='/assets/images/halflogo.png' width={54} height={54} alt='' />
       <h3 className='text-[30px] font-semibold'>تمويل شخصي</h3>
       </div>
       <div className='flex items-center shrink-0 gap-4'>
       <Image src='/assets/images/halflogo.png' width={54} height={54} alt='' />
       <h3 className='text-[30px] font-semibold'>تمويل شخصي</h3>
       </div>
       <div className='flex items-center shrink-0 gap-4'>
       <Image src='/assets/images/halflogo.png' width={54} height={54} alt='' />
       <h3 className='text-[30px] font-semibold'>تمويل شخصي</h3>
       </div>
       <div className='flex items-center shrink-0 gap-4'>
       <Image src='/assets/images/halflogo.png' width={54} height={54} alt='' />
       <h3 className='text-[30px] font-semibold'>تمويل شخصي</h3>
       </div>
       <div className='flex items-center shrink-0 gap-4'>
       <Image src='/assets/images/halflogo.png' width={54} height={54} alt='' />
       <h3 className='text-[30px] font-semibold'>تمويل شخصي</h3>
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
  )
}

export default Hero
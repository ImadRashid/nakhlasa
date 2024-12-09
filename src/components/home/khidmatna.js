import Image from 'next/image'
import React from 'react'

const Khidmatna = () => {

    const servicesData = [
        {
            img: '/assets/images/service1.png',
            heading: 'تمويل عقاري',
            desc: 'نوفر لك تمويلك، نحقق لك طموحك ! من خلال العمل مع مجموعة واسعة من الشركاء، قادرين على تزويد عملائنا بإمكانية الوصول إلى أفضل الخيارات الممكنة لتلبية احتياجاتهم المالية.',
            link: 'اطلب تمويلك'
        },

        {
            img: '/assets/images/service2.png',
            heading: 'تمويل سيارات',
            desc: 'نوفر لك تمويلك، نحقق لك طموحك ! من خلال العمل مع مجموعة واسعة من الشركاء، قادرين على تزويد عملائنا بإمكانية الوصول إلى أفضل الخيارات الممكنة لتلبية احتياجاتهم المالية',
            link: 'اطلب تمويلك '
        },

        {
            img: '/assets/images/service3.png',
            heading: 'تمويل شخصي ',
            desc: 'ملتزمون بتوفير أفضل خيارات القروض الممكنة والمصممة خصيصًا لتلبية احتياجاتك. تضمن عمليتنا المبسطة السهولة والكفاءة، مما يوفر لك إمكانية الوصول السريع إلى الأموال التي تحتاجها',
            link: ' اطلب تمويلك '
        },

    ]
  return (
    <section className='px-[227px] 2xl:px-[327px] mb-20  '>
       <div className='flex justify-end'>
       <div className='max-w-[373px] gap-5 flex flex-col justify-end'>
            <h2 className='text-[56px] text-end'>خدماتنا</h2>
            <p className=' text-[18px] text-[#979797] font-semibold '>تسهيلات تمويلية لحياتك اليومية، مع منصة نخلصها
            نعمل منذ عام 2018 في قطاع التمويل وسداد الديون</p>
        </div>
       </div>
        <div className='flex 2xl:justify-between gap-[70px]  flex-wrap flex-row-reverse  mt-24  '>


            {servicesData.map((item, ind)=> {
                return (

            <div key={ind} style={{marginTop: ind ==2 ? '50px': ''}} className='flex flex-col items-end w-[450px]'>
                <Image src={item.img} alt='servicesimg' width={450} height={550} />
                <h3 className='font-semibold text-[30px] my-5'>{item.heading} </h3>
                <p className='text-[18px] text-end text-[#979797] font-semibold '>{item.desc}</p>
                <button className=' mt-7 flex justify-center items-center w-[142px] h-[34px] font-semibold text-[20px]  bg-[#2445CD] text-white rounded-[50px]'>{item.link}  </button>

            </div>
                )
            })}
            
        </div>
    </section>
  )
}

export default Khidmatna
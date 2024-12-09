import Image from 'next/image'
import React from 'react'

export const Header = () => {
  return (
    <header className=' h-[56px] mt-6 flex items-center justify-between px-[60px] '>
        <button className='flex justify-center items-center w-[180px] h-[56px] font-semibold text-[20px]  bg-[#2445CD] text-white rounded-[50px]'>English</button>
        <div className='flex text-[16px]  font-thin gap-3'>
            <div>منصة نخلصها</div>
            <div>منصة نخلصها</div>
            <div>منصة نخلصها</div>
            <div>منصة نخلصها</div>
            
        </div>
        <div>
            <Image 
                 src="/assets/images/logo.png" 
                width={156}
                height={59}
                alt='logo'
            />
        </div>
    </header>
  )
}

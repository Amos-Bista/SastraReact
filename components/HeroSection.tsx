import React from 'react'

const HeroSection = () => {
  return (
    <div className='w-[100%] h-[500px] flex items-center rounded-xl l bg-[url("http://sastranetwork.com/wp-content/uploads/2021/05/communication-4871245_1920.jpg")] '>
        <div className='m-auto'>
            <div className='text-slate-300 text-5xl font-semibold'>
                Powering you for tomorrow
            </div>
            <div className='p-6 flex'>
                <div className='m-auto'>
                    <button className='py-2 px-5 bg-[#0A4085] text-white font-thin rounded-sm text-sm uppercase mx-2 hover:bg-[#0070FF] transition-all duration-500'>our services</button>
                    <button className='py-2 px-5 bg-[#0A4085] text-white font-thin rounded-sm text-sm uppercase mx-2 hover:bg-[#0070FF] transition-all duration-500'>get quote</button>
                </div>     
            </div>  
        </div>
    </div>
  )
}

export default HeroSection
    
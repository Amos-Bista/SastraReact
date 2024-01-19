import React from 'react'

const HeroSection = () => {
  return (
    <div className='w-[100%] h-[500px] flex items-center rounded-xl l bg-[url("http://sastranetwork.com/wp-content/uploads/2021/05/communication-4871245_1920.jpg")]'>
        <div className='m-auto'>
            <div className='text-slate-300 text-5xl font-semibold'>
                Powering you for tomorrow
            </div>
            <div className='p-6 flex'>
                <div className='flex gap-5 w-[100%]'>
                    <div className='w-[50%] flex justify-end pr-2'>
                        <button className="bg-[#0A4085] text-white border border-neutral-400 border-b-4 font-medium overflow-hidden relative px-4 py-2 rounded-md hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group">
                        <span className="bg-neutral-400 shadow-neutral-400 absolute -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
                        Our Services
                        </button>
                    </div>
                    <div className='w-[50%]'>
                        <button className="bg-[#0A4085] text-white border border-neutral-400 border-b-4 font-medium overflow-hidden relative px-4 py-2 rounded-md hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group">
                        <span className="bg-neutral-400 shadow-neutral-400 absolute -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
                        Get quote
                        </button>
                    </div>  
                </div>     
            </div>  
        </div>
    </div>
  )
}

export default HeroSection
    
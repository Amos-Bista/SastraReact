import React from 'react'

const Navbar = () => {
  return (
    <div className='h-24 flex justify-between'>
        <div className='w-36 flex items-center'>
            <img src="https://sastranetwork.com/storage/2021/05/sastra-logo-2048x1220.png" alt="sastra" />
        </div>
        <div className='flex items-center'>
            <ul className='flex justify-between gap-5 text-[#244a5f] text-2xl cursor-pointer'>
                <li className='transition duration-300 border-b-2 border-solid border-transparent hover:border-black hover:brightness-150'>Home</li>
                <li className='transition duration-300 border-b-2 border-solid border-transparent hover:border-black hover:brightness-150'>About</li>
                <li className='transition duration-300 border-b-2 border-solid border-transparent hover:border-black hover:brightness-150'>Career</li>
                <li className='transition duration-300 border-b-2 border-solid border-transparent hover:border-black hover:brightness-150'>Contact</li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar

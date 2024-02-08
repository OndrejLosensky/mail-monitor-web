import React from 'react'
import logo from "../assets/logo.png"

const Header = () => {
  return (
    <div className='flex flex-row justify-between w-[60%] mx-auto pt-6 border-b-2 border-black py-2 '>
        {/* Left side */}
        <div className='flex flex-row'>
            <img src={logo} alt='Icon' className='w-[44px] h-[36px] mt-1 mr-1'></img>
            <h1 className='text-4xl font-semibold'> MailMonitor </h1>
        </div>

        {/* Right side */}
        <div className=''>
        <button className='bg-buttonBg border border-black rounded-xl py-2 px-6 text-xl text-TextColor hover:-translate-y-1 duration-300'>
            <a href='https://github.com/OndrejLosensky' target='_blank' rel='noopener noreferrer'>
                Contact me
            </a>
        </button>
        </div>
    </div>
  )
}

export default Header
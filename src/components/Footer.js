import React from 'react'

const Footer = () => {
  return (
    <div className=' w-[100%] absolute left-[0%] opacity-95'>
         <div className=" h-[60px] py-4 bg-footerBg"style={{borderTopLeftRadius: '35px', borderTopRightRadius: '35px'}}>
            <h3 className='text-lg text-TextColor text-center'>
                Created by Losenský Ondřej ❤️ | Source code <a className='font-semibold text-redLink underline' href='https://github.com/OndrejLosensky' target='_blank' rel='noopener noreferrer'>here</a>
            </h3>
        </div>
    </div>
  )
}

export default Footer
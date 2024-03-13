import React from 'react'
import Bg from '../assets/img3.png'

const MiniHeader = () => {
  return (
    <div className='py-10 md:py-20 bg-cover bg-center bg-fixed relative' style={{backgroundImage: `url(${Bg})`}}>
        <div className='absolute top-0 left-0 w-full h-full bg-[#000000b9]' />
        <div className='relative'>
            <h1 className='text-white text-center text-[2.5rem] font-semibold'>About Us</h1>
            <span className='flex justify-center gap-2 mt-2'>
                <a href="/" className='text-amber-400'>Home</a>
                <div className='w-[1.5px] h-full bg-slate-900' />
                <h5 className='text-white'>About Us</h5>
            </span>
        </div>
    </div>
  )
}

export default MiniHeader
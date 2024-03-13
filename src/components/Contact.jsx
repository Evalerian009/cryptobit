import React from 'react'
import Bg from '../assets/img4.png'
import { styles } from './constants'
import { IoMdMail } from "react-icons/io";

const Contact = () => {
  return (
    <div className={`${styles.paddingX} ${styles.paddingY} bg-black relative bg-center`} style={{backgroundImage: `url(${Bg})`}}>
        <div className='absolute top-0 left-0 w-full h-full bg-[#000000b9]' />
        <div className='max-w-7xl mx-auto relative flex flex-col lg:flex-row items-center justify-between gap-y-5 text-center lg:text-start'>
            <div className='lg:w-[75%]'>
                <h2 className='text-stone-200 font-semibold text-[2rem] lg:text-[2.5rem]'>Looking for a Crypto Expert?</h2>
                <p className='mt-3 text-stone-200'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem alias expedita ipsa, autem eligendi molestias laborum odit vero amet ullam vel neque numquam nesciunt illo quasi dicta cum inventore voluptate?</p>
            </div>
            <button className='bg-stone-900 w-fit px-7 rounded-[50px] flex items-center gap-3 py-3 border border-stone-400'>
                <span className='w-[30px] h-[30px] flex justify-center items-center bg-white rounded-full text-xl text-amber-300'>
                    <IoMdMail />
                </span>
                <span className='text-stone-200'>Contact Us</span>
            </button>
        </div>
    </div>
  )
}

export default Contact
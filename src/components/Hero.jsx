import React, { useState } from 'react'
import SmBlob1 from '../assets/sm-blob-1.svg';
import { styles } from './constants';
import { Button } from './MiniComps';
const Hero = () => {
  
  return (
    <div className={`${styles.paddingX} ${styles.paddingY}`}>
        <div className={`${styles.maxWidth} h-[400px] ${styles.flex}`}>
            <img src={SmBlob1} alt="" className='w-[180px] absolute top-0 -left-24' />
            <div className='md:w-1/2 h-full flex flex-col justify-center'>
                <h1 className='text-white text-[2rem] md:text-[3rem] font-bold leading-tight'>Experience of Digital Transaction</h1>

                <svg className='txt' viewBox="0 0 10 1.25">
                    <text x="0" y="1" fontSize="0.95" fill="none" strokeWidth=".025" stroke="#fcd34d" fontFamily="sans-serif">Blockchain</text>
                </svg>

                <p className='mt-3 font-light text-stone-100'>Cryptography, encryption process of transforming information referred to as plain text.</p>
                <Button text= 'Get Started Now' />
            </div>
            <div></div>
        </div>
    </div>
  )
}

export default Hero
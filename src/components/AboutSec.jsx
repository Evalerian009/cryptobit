import React from 'react'
import { FaCircleCheck } from "react-icons/fa6";
import { styles } from './constants';

const AboutSec = () => {
  return (
    <div className={`${styles.paddingX} ${styles.paddingY}`}>
      <div className={`${styles.maxWidth} ${styles.flex}`}>
        <div className='md:w-1/2'></div>
        <div className='md:w-1/2'>
          <h2 className='text-amber-300 uppercase text-lg'>About CryptoBit?</h2>
          <h3 className='text-[1.8rem] md:text-[2.3rem] font-bold lg:w-[450px] leading-tight mt-1 text-stone-300'>The most trusted way to trade cryptocurrencies</h3>
          <p className='text-stone-400 mt-4'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur, voluptatum iusto impedit enim quo, iure commodi illo molestiae facere rem itaque ut expedita dolores nisi repudiandae unde vel eaque obcaecati.</p>

          <ul className='text-stone-400 mt-7'>
            <li className='flex items-center gap-3'>
              <FaCircleCheck className='text-amber-400 text-[1.5rem]' />
              <span>Prioritize the features your customers need.</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default AboutSec
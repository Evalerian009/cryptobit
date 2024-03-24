import React from 'react'
import { FaCircleCheck } from "react-icons/fa6";
import { animationVariants, styles } from '../../../components/constants';
import { motion } from 'framer-motion';
import AboutSvg from '../../../assets/illustrations/about.svg?react'

const AboutSec = () => {
  return (
    <div className={`${styles.paddingX} ${styles.paddingY}`}>
      <div className={`${styles.maxWidth} flex flex-col lg:flex-row gap-8 items-center`}>
        <div className='md:w-1/2'>
          <AboutSvg className={`${styles.img}`} />
        </div>
        <motion.div 
          className='md:w-3/4 lg:w-1/2 lg:pl-10'
          variants={animationVariants.slideInRight}
          initial='initial'
          whileInView='animate'
          viewport={{once:true}}
        >
          <h2 className='text-amber-300 uppercase text-lg'>About CryptoBit?</h2>
          <h3 className='text-[1.8rem] md:text-[2.3rem] font-bold lg:w-[450px] leading-tight mt-1 text-stone-300'>The most trusted way to trade cryptocurrencies</h3>
          <p className='text-stone-400 mt-4'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur, voluptatum iusto impedit enim quo, iure commodi illo molestiae facere rem itaque ut expedita dolores nisi repudiandae unde vel eaque obcaecati.</p>

          <ul className='text-stone-400 mt-7 flex flex-col gap-5'>
            <li className='flex items-center gap-3'>
              <FaCircleCheck className='text-amber-400 text-[1.5rem]' />
              <span>Prioritize the features your customers need.</span>
            </li>
            <li className='flex items-center gap-3'>
              <FaCircleCheck className='text-amber-400 text-[1.5rem]' />
              <span>Prioritize the features your customers need.</span>
            </li>
            <li className='flex items-center gap-3'>
              <FaCircleCheck className='text-amber-400 text-[1.5rem]' />
              <span>Prioritize the features your customers need.</span>
            </li>
          </ul>
        </motion.div>
      </div>
    </div>
  )
}

export default AboutSec
import React from 'react'
import { animationVariants, styles } from '../../../components/constants'
import { Button } from '../../../components/MiniComps'
import  { motion } from 'framer-motion'
import RecordsSvg from '../../../assets/illustrations/records.svg?react'

const Service = () => {
  return (
    <div className={`${styles.paddingX} ${styles.paddingY} bg-black`}>
        <div className={`${styles.maxWidth}`}>
            <div className=''>
                <h2 className='text-amber-300 text-center  uppercase text-lg'>CryptoBit services</h2>
                <h3 className='text-center text-[1.8rem] md:text-[2.2rem] font-bold md:w-[500px] mx-auto leading-tight mt-1 text-white capitalize'>The heart of the blockchain of value chain</h3>
                <p className='font-light text-stone-200 md:w-[500px] mt-4 mx-auto text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. In et illum voluptatibus dignissimos.</p>
            </div>

            <div className='bg-stone-950 mt-10 flex flex-col md:flex-row gap-y-7'
            >
                <motion.div 
                    className='md:w-1/2 md:p-7 lg:p-16 mt-10 md:mt-0'
                    variants={animationVariants.slideInLeft}
                    initial="initial"
                    whileInView='animate'
                    viewport={{ once: true}}
                >
                    <h3 className='text-[1.3rem] md:text-[2rem] font-bold leading-tight mt-1 text-white capitalize'>Blockchain have recoreds of all coin transanctions</h3>
                    <p className='font-light text-stone-200 lg:w-[500px] mt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. In et illum voluptatibus dignissimos. Lorem ipsum dolor sit amet consectetur adipisicing elit. In et illum voluptatibus dignissimos.</p>
                    <Button text='More Details' />
                </motion.div>
                <div className='md:w-1/2'>
                    <RecordsSvg />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Service
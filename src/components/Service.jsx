import React from 'react'
import { styles } from './constants'
import { Button } from './MiniComps'

const Service = () => {
  return (
    <div className={`${styles.paddingX} ${styles.paddingY} bg-black`}>
        <div className={`${styles.maxWidth}`}>
            <div className=''>
                <h2 className='text-amber-300 text-center  uppercase text-lg'>CryptoBit services</h2>
                <h3 className='text-center text-[1.8rem] md:text-[2.2rem] font-bold md:w-[500px] mx-auto leading-tight mt-1 text-white capitalize'>The heart of the blockchain of value chain</h3>
                <p className='font-light text-stone-200 md:w-[500px] mt-4 mx-auto text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. In et illum voluptatibus dignissimos.</p>
            </div>
            <div className='bg-stone-950 mt-10'>
                <div className='md:w-1/2 md:p-7 lg:p-16 mt-10 md:mt-0'>
                    <h3 className='text-[1.3rem] md:text-[2rem] font-bold leading-tight mt-1 text-white capitalize'>Blockchain have recoreds of all coin transanctions</h3>
                    <p className='font-light text-stone-200 lg:w-[500px] mt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. In et illum voluptatibus dignissimos. Lorem ipsum dolor sit amet consectetur adipisicing elit. In et illum voluptatibus dignissimos.</p>
                    <Button text='More Details' />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Service
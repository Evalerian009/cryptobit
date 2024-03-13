import React from 'react'
import { GoGift } from "react-icons/go";
import { styles } from './constants';

const FeaturesAbtSec = () => {
  return (
    <div className={`${styles.paddingX} ${styles.paddingY} bg-black`}>
        <div className={`${styles.maxWidth} text-white`}>
            <div className='md:w-[450px] mx-auto text-center'>
                <h2 className='text-amber-300 text-center  uppercase text-lg'>CryptoBit features</h2>
                <h3 className='text-[1.8rem] md:text-[2.3rem] font-boldleading-tight mt-1 capitalize'>Crypto best features</h3>
                <p className='mt-4 text-stone-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta deleniti earum perferendis mollitia! Ex atque facilis! Dicta deleniti earum perferendis!</p>
            </div>

            <div className='mt-16'>
                <div className='md:w-1/2 lg:w-1/3 text-center lg:text-start'>
                    <span className='w-[85px] h-[85px] bg-stone-900 rounded-full flex justify-center items-center text-4xl text-sky-500 mx-auto lg:mx-0'>
                        <GoGift />
                    </span>
                    <h3 className='text-[1.4rem] mt-2 font-semibold capitalize'>early bonus cash</h3>
                    <p className='mt-4 text-stone-400'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur, sint voluptas! Eligendi sit officia atque nemo hic! Voluptatibus, maxime officia! Nesciunt, iusto corporis! Ea hic quo libero blanditiis inventore voluptatem!</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default FeaturesAbtSec
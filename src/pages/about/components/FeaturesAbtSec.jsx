import React from 'react'
import { animationVariants, bestFeatures, styles } from '../../../components/constants';
import { motion } from 'framer-motion';

const FeaturesAbtSec = () => {
  return (
    <div className={`${styles.paddingX} ${styles.paddingY} bg-black`}>
        <div className={`${styles.maxWidth} text-white`}>
            <div className='md:w-[450px] mx-auto text-center'>
                <h2 className='text-amber-300 text-center  uppercase text-lg'>CryptoBit features</h2>
                <h3 className='text-[1.8rem] md:text-[2.3rem] font-boldleading-tight mt-1 capitalize'>Crypto best features</h3>
                <p className='mt-4 text-stone-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta deleniti earum perferendis mollitia! Ex atque facilis! Dicta deleniti earum perferendis!</p>
            </div>

            <div className='mt-16 flex flex-wrap gap-y-7 justify-center lg:flex-nowrap'>
                {bestFeatures.map((item,index) => {
                    const Icon = item.icon
                    return(
                    <motion.div 
                        key={item.id} 
                        className='md:w-1/2 lg:w-1/3 text-center lg:text-start px-5'
                        variants={animationVariants.slideLeftList}
                        initial='initial'
                        whileInView='animate'
                        viewport={{once:true}}
                        custom={index}
                    >
                        <span className='w-[85px] h-[85px] bg-stone-900 rounded-full flex justify-center items-center text-4xl mx-auto lg:mx-0' style={{color: `${item.iconCol}`}}>
                            <Icon />
                        </span>
                        <h3 className='text-[1.4rem] mt-3 font-semibold capitalize'>{item.header}</h3>
                        <p className='mt-1 text-stone-400'>{item.text}</p>
                    </motion.div>
                    )
                })}
            </div>
        </div>
    </div>
  )
}

export default FeaturesAbtSec
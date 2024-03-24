import { animationVariants, styles } from '../../../components/constants';
import { Button } from '../../../components/MiniComps';
import { motion } from 'framer-motion';
import HeroSvg from '../../../assets/illustrations/hero.svg?react'

const Hero = () => {
  
  return (
    <div className={`${styles.paddingX} ${styles.paddingY}`}>
        <div className={`${styles.maxWidth} md:h-[400px] ${styles.flex}`}>
          <motion.div 
            className='md:w-1/2 h-full flex flex-col justify-center'
            variants={animationVariants.slideInLeft}
            initial="initial"
            whileInView='animate'
            viewport={{ once: true}}
          >
              <h1 className='text-white text-[2rem] md:text-[3rem] font-bold leading-tight'>Experience of Digital Transaction</h1>

              <svg className='txt' viewBox="0 0 10 1.25">
                  <text x="0" y="1" fontSize="0.95" fill="none" strokeWidth=".025" stroke="#fcd34d" fontFamily="sans-serif">Blockchain</text>
              </svg>

              <p className='mt-3 font-light text-stone-100'>Cryptography, encryption process of transforming information referred to as plain text.</p>
              <Button text= 'Get Started Now' />
          </motion.div>
          <div className='md:w-1/2'>
            <HeroSvg className='w-full h-full'/>
          </div>
        </div>
    </div>
  )
}

export default Hero
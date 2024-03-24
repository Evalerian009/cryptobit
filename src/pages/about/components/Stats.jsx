import React from 'react'
import { animationVariants, stats, styles } from '../../../components/constants'
import { motion } from 'framer-motion'

const Stats = () => {
  return (
    <div className={`${styles.paddingX} ${styles.paddingY} bg-center bg-cover relative`} style={{backgroundImage: 'url(./img8.png)'}}>
        <span className='absolute top-0 left-0 w-full h-full bg-[#000000d1]' />
        <ul className='relative flex flex-wrap gap-y-8 flex-col md:flex-row'>
          {stats.map((item,index) => ((
            <motion.li 
              key={item.id} 
              className='md:w-1/2 lg:w-1/4 text-center'
              variants={animationVariants.slideUpList}
              initial='initial'
              whileInView='animate'
              viewport={{once:true}}
              custom={index}
            >
              <h5 className='text-amber-400 font-bold text-[2.5rem]'>{item.num}</h5>
              <h6 className='text-stone-300 mt-2 text-lg font-semibold'>{item.title}</h6>
            </motion.li>
          )))}
        </ul>
    </div>
  )
}

export default Stats
import React, { useState } from 'react'
import { animationVariants, servList, styles } from '../../../components/constants'
import { AnimatedText } from '../../../components/MiniComps'
import { motion } from 'framer-motion'

const ServiceItem = ({ item }) => {
  const [ isHovered, setIsHovered ] = useState(false)
  const handlerHover = () => ((
    setIsHovered(true)
  ))
  const handlerNotHover = () => ((
    setIsHovered(false)
  ))
  return(
    <div key={item.id} id={item.id} onMouseEnter={handlerHover} onMouseLeave={handlerNotHover} className="p-5 lg:px-7 xl:px-10 py-10 bg-stone-900 flex flex-col lg:flex-row gap-7">
      <span className={`w-[100px] h-[100px] bg-stone-800 flex rounded-full mx-auto lg:mx-0 relative overflow-hidden before:bg-amber-400 justify-center items-center ${isHovered ? 'before:w-full before:h-full' : 'before:w-0 before:h-0'} before:rounded-full before:duration-[0.5s]`} />
      <div className='lg:w-[270px] xl:w-[300px] text-center lg:text-start'>
          <h3 className='text-stone-100 font-bold text-xl capitalize'>{item.header}</h3>
          <p className='mt-3 text-stone-400 leading-8'>{item.text}</p>
          <a href="" className='text-amber-400 text-lg font-light mt-2 block'>Read more</a>
      </div>
    </div>
  )
}

const ServicesList = () => {
  return (
    <div className={`${styles.paddingX} ${styles.paddingY} bg-black`}>
        <div className={`${styles.maxWidth} flex flex-wrap justify-between gap-y-2`}>
          {servList.map((item, index) => ((
            <motion.div 
              key={item.id} 
              className='md:w-[49.5%]'
              variants={animationVariants.zoomIn}
              initial='initial'
              whileInView='animate'
              viewport={{once:true}}
              custom={index}
            >
              <ServiceItem item={item} />
            </motion.div>
          )))}
        </div>
    </div>
  )
}

export default ServicesList
import React, { useState } from 'react'
import { animationVariants, styles, works } from '../../../components/constants'
import { motion } from 'framer-motion'

const Process = ({ item }) => {
  const [ isHovered, setIsHovered ] = useState(false)
  const handleHover = () => (
    setIsHovered(true)
  )
  const handleNotHover = () => (
    setIsHovered(false)
  )
  const Svg = item.svg
  return(
    <div key={item.id} className="text-white relative" onMouseEnter={handleHover} onMouseLeave={handleNotHover} >
      <span className='block relative bg-stone-800 top-5 w-fit mx-auto py-2 px-[10px] font-bold'>{item.num}</span>
      <div className='bg-stone-900 w-[200px] h-[240px] mx-auto'>
          <Svg />
      </div>
      <h4 className='font-semibold mt-3 text-center text-lg'>{item.header}</h4>
      <p className='font-light text-stone-300 mt-2 mx-auto text-center'>{item.text}</p>
    </div>
  )
}

const WorkProcess = () => {
  return (
    <div className={`${styles.paddingX} ${styles.paddingY} bg-stone-950`}>
        <div  className={`${styles.maxWidth}`}>
        <h2 className='text-amber-300 text-center  uppercase text-lg'>Work processs</h2>
                <h3 className='text-center text-[1.8rem] md:text-[2.3rem] font-bold md:w-[500px] mx-auto leading-tight mt-1 text-white capitalize'>Blockchain work process</h3>
                <p className='font-light text-stone-200 md:w-[500px] mt-4 mx-auto text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. In et illum voluptatibus dignissimos.</p>
                <div className='mt-7 flex flex-wrap gap-y-7'>
                  {works.map((item,index) => {
                    return(
                      <motion.div
                        key={item.id}
                        className='w-full md:w-1/2 lg:w-1/4'
                        variants={animationVariants.slideLeftList}
                        initial="initial"
                        whileInView='animate'
                        viewport={{ once: true}}
                        custom={index}
                      >
                        <Process item={item} />
                      </motion.div>
                    )
                  })}
                </div>
        </div>
    </div>
  )
}

export default WorkProcess
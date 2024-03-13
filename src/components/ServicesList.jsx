import React, { useState } from 'react'
import { styles } from './constants'
import { AnimatedText } from './MiniComps'

const ServicesList = () => {
  const [ hovered, setHovered ] = useState(null)
  const handlerHover = () => ((
    setHovered(true)
  ))
  const handlerNotHover = () => ((
    setHovered(false)
  ))
  return (
    <div className={`${styles.paddingX} ${styles.paddingY} bg-black`}>
        <div className={`${styles.maxWidth} flex flex-wrap justify-between gap-y-2`}>
            <div onMouseEnter={handlerHover} onMouseLeave={handlerNotHover} className="md:w-[49.5%] p-5 lg:px-7 xl:px-10 py-10 bg-stone-900 flex flex-col lg:flex-row gap-7">
                <span className={`w-[100px] h-[100px] bg-stone-800 flex rounded-full mx-auto lg:mx-0 relative overflow-hidden before:bg-amber-400 justify-center items-end before:w-full before:h-full ${hovered ? 'before:translate-y-0' : 'before:translate-y-[100%]'} before:duration-[0.7s]`} />
                <div className='lg:w-[270px] xl:w-[300px] text-center lg:text-start'>
                    <h3 className='text-stone-100 font-bold text-xl capitalize'>
                      <AnimatedText hovered={hovered} text='NFT development' />
                    </h3>
                    <p className='mt-3 text-stone-400 leading-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias quod quis temporibus in? Iure sunt quod officiis esse laborum, quidem magnam voluptatibus.</p>
                    <a href="" className='text-amber-400 text-lg font-light mt-2 block'>Read more</a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ServicesList
import React from 'react'
import { styles } from './constants'

const WorkProcess = () => {
  return (
    <div className={`${styles.paddingX} ${styles.paddingY} bg-stone-950`}>
        <div  className={`${styles.maxWidth}`}>
        <h2 className='text-amber-300 text-center  uppercase text-lg'>Work processs</h2>
                <h3 className='text-center text-[1.8rem] md:text-[2.3rem] font-bold md:w-[500px] mx-auto leading-tight mt-1 text-white capitalize'>Blockchain work process</h3>
                <p className='font-light text-stone-200 md:w-[500px] mt-4 mx-auto text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. In et illum voluptatibus dignissimos.</p>
                <div className='mt-7'>
                  <div className="w-full md:w-1/2 lg:w-1/4 text-white relative">
                      <span className='block relative bg-stone-800 top-5 w-fit mx-auto py-2 px-[10px] font-bold'>01</span>
                      <div className='bg-stone-900 w-[200px] h-[200px] mx-auto'>
                          <div />
                      </div>
                      <h4 className='font-semibold mt-3 text-center text-lg'>Join Crypto</h4>
                      <p className='font-light text-stone-300 mt-2 mx-auto text-center'>Lorem ipsum dolor sit amet consectetur consectetur adipisicing.</p>
                  </div>
                </div>
        </div>
    </div>
  )
}

export default WorkProcess
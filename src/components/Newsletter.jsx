import React from 'react'
import { styles } from './constants'

const Newsletter = () => {
  return (
    <div className={`${styles.paddingX} ${styles.paddingY} bg-stone-950`}>
        <div className={`${styles.maxWidth}`}>
            <h3 className='text-center text-[1.8rem] md:text-[2.3rem] font-bold md:w-[500px] mx-auto leading-tight mt-1 text-white capitalize'>Subscribe to stay up to date</h3>
            <p className='font-light text-stone-200 md:w-[550px] mt-4 mx-auto text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. In et illum voluptatibus dignissimos.</p>
            <form>
                <div className='w-fit mx-auto flex items-center mt-7 bg-stone-100 py-2 px-2 rounded-3xl'>
                    <input type="text" placeholder='Enter Your Email' className='w-full md:w-[300px] indent-3 outline-none font-semibold text-[13px] bg-transparent h-full' />
                    <button className='bg-amber-400 py-2 px-3 md:px-7 uppercase font-semibold text-[13px] rounded-3xl'>subscribe</button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Newsletter
import React from 'react'
import Bg from '../assets/img8.png'
import { styles } from './constants'

const Stats = () => {
  return (
    <div className={`${styles.paddingX} ${styles.paddingY} bg-center bg-cover relative`} style={{backgroundImage: `url(${Bg})`}}>
        <span className='absolute top-0 left-0 w-full h-full bg-[#000000d1]' />
        <ul className='relative flex flex-col md:flex-row'>
            <li className='md:w-1/2 lg:w-1/4 text-center'>
                <h5 className='text-amber-400 font-bold text-[2.5rem]'>$38.98M+</h5>
                <h6 className='text-stone-200 mt-3'>Digital Products</h6>
            </li>
        </ul>
    </div>
  )
}

export default Stats
import React from 'react'
import { styles } from './constants'

const Skills = () => {
  return (
    <div className={`${styles.paddingX} ${styles.paddingY}`}>
        <div className={`${styles.maxWidth} ${styles.flex}`}>
            <div className="md:w-1/2">
                <h2 className='text-amber-300  uppercase text-lg'>CryptoBit features</h2>
                <h3 className='text-[1.8rem] md:text-[2.3rem] font-boldleading-tight mt-1 capitalize text-stone-100'>Crypto best features</h3>
                <p className='mt-4 text-stone-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta deleniti earum perferendis mollitia! Ex atque facilis! Dicta deleniti earum perferendis!  Dicta deleniti earum perferendis mollitia! Ex atque facilis! Dicta deleniti earum perferendis!</p>
                <br />
                <p className='mt-4 text-stone-400'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat nulla temporibus, quia soluta saepe veniam sapiente! Magnam nulla laudantium provident exercitationem magni tenetur illo, ratione dolores est alias, aut omnis!</p>
            </div>

            <ul className="md:w-1/2">
               <li className='max-w-[400px] md:max-w-[400px] md:ml-auto'>
                    <span className='text-stone-200 flex font-semibold'>
                        <h5 className='w-[85%]'>Digital Art</h5>
                        <h5 className=''>85%</h5>
                    </span>
                    <span className='h-[8px] bg-stone-700 block rounded-2xl mt-4 overflow-hidden relative z-[1]'>
                        <span className='block h-full w-[85%] bg-amber-400 shadow-[3px] absolute z-[2]' />
                    </span>
                </li> 
            </ul>
        </div>
    </div>
  )
}

export default Skills
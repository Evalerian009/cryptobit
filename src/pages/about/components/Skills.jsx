import React from 'react'
import { animationVariants, skills, styles } from '../../../components/constants'
import { motion } from 'framer-motion'

const Skills = () => {
  return (
    <div className={`${styles.paddingX} ${styles.paddingY}`}>
        <div className={`${styles.maxWidth} flex flex-col lg:flex-row gap-y-7`}>
            <motion.div
                className="md:w-3/4 mx-auto lg:w-1/2"
                variants={animationVariants.slideUp}
                initial='initial'
                whileInView='animate'
                viewport={{once:true}}
            >
                <h2 className='text-amber-300  uppercase text-lg'>CryptoBit features</h2>
                <h3 className='text-[1.8rem] md:text-[2.3rem] font-boldleading-tight mt-1 capitalize text-stone-100'>Crypto best features</h3>
                <p className='mt-4 text-stone-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta deleniti earum perferendis mollitia! Ex atque facilis! Dicta deleniti earum perferendis!  Dicta deleniti earum perferendis mollitia! Ex atque facilis! Dicta deleniti earum perferendis!</p>
                <br />
                <p className='mt-4 text-stone-400'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat nulla temporibus, quia soluta saepe veniam sapiente! Magnam nulla laudantium provident exercitationem magni tenetur illo, ratione dolores est alias, aut omnis!</p>
            </motion.div>

            <ul className="lg:w-1/2">
                {skills.map(item => ((
                <li key={item.id} className='max-w-[400px] mx-auto md:ml-auto py-3'>
                        <span className='text-stone-200 flex font-semibold'>
                            <motion.h5 
                              initial={{width: `40%`}}
                              whileInView={{width: `${item.percent}`}}
                              transition={{duration: 5}}
                              viewport={{once:true}}
                            >
                                {item.title}
                            </motion.h5>
                            <h5 className=''>{item.percent}</h5>
                        </span>
                        <span 
                          className='h-[8px] bg-stone-700 block rounded-2xl mt-4 overflow-hidden relative z-[1]'
                        >
                            <motion.span 
                                initial={{width: 0}}
                                whileInView={{width: `${item.percent}`}}
                                transition={{duration: 5}}
                                viewport={{once:true}}
                                className='block h-full bg-amber-400 shadow-[3px] absolute z-[2]' 
                            />
                        </span>
                    </li> 
                )))}
            </ul>
        </div>
    </div>
  )
}

export default Skills
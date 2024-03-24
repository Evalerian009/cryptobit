import React, { useState } from 'react'
import { FaMinus, FaPlus } from "react-icons/fa6";
import { animationVariants, styles } from '../../../components/constants';
import { motion } from 'framer-motion';
import FaqsSvg from '../../../assets/illustrations/faqs.svg?react' 

const Tab = ({ question, answer}) => {
    const [ openTab, setOpenTab ] = useState(false)
    const handleTab = () => ((
        setOpenTab(prev => !prev)
    ))
    return(
        <div className={`border-[0.5px] border-stone-700  duration-500 rounded-lg overflow-hidden`}>
            <div className=' bg-stone-900 py-4 px-7 flex justify-between'>
                <h5 className='font-bold text-amber-400 text-lg'>What is Blockchain?</h5>
                <button onClick={handleTab} className='flex items-center text-stone-100 bg-amber-400 px-2 rounded'>
                    {openTab ? <FaMinus className='opacity-100 duration-1000' /> : <FaPlus />}
                </button>
            </div>
            <p className={`px-7 text-stone-400 ${openTab ? 'h-[150px] py-4 opacity-100' : 'h-0 overflow-hidden opacity-0'} duration-1000`}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim impedit voluptatem nisi, repudiandae, odio quaerat eos blanditiis et atque sunt recusandae architecto omnis.</p>
        </div>
    )
}

const FAQs = () => {
  return (
    <div className={`${styles.paddingX} ${styles.paddingY} bg-black`}>
        <div className={`${styles.maxWidth} ${styles.flex}`}>
            <motion.div 
                className='md:w-1/2'
                variants={animationVariants.slideInLeft}
                initial="initial"
                whileInView='animate'
                viewport={{ once: true}}
            >
                <h2 className='text-amber-300 uppercase text-lg'>Faq</h2>
                <h3 className='text-[1.8rem] md:text-[2.3rem] font-bold leading-tight mt-1 text-white capitalize'>Frequent Q/A</h3>
                <p className='font-light text-stone-400 lg:w-[500px] mt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. In et illum voluptatibus dignissimos.</p>

                <div className='mt-8 flex flex-col gap-4'>
                    <Tab 
                        question = ''
                        answer = ''
                    />
                    <Tab 
                        question = ''
                        answer = ''
                    />
                </div>
            </motion.div>
            <div className='md:w-1/2 relative'>
                <FaqsSvg />
            </div>
        </div>
    </div>
  )
}

export default FAQs
import { TbBulbFilled } from "react-icons/tb";
import { features, styles } from '../../../components/constants';
import { motion } from "framer-motion";
import { animationVariants } from "../../../components/constants";

const Features = () => {
  return (
    <div className={`${styles.paddingX} ${styles.paddingY} bg-black`}>
        <div className={`${styles.maxWidth} text-white`}>
            <h2 className='text-amber-300 text-center  uppercase text-lg'>CryptoBit features</h2>
            <h3 className='text-center text-[1.8rem] md:text-[2.3rem] font-bold md:w-[450px] mx-auto leading-tight mt-1'>The most trusted way to trade cryptocurrencies</h3>
            <div className='mt-14 flex flex-col md:flex-row gap-6'>
                {features.map(( item, index ) => {
                    const Icon = item.icon
                    return(
                        <motion.div 
                            key={item.id} 
                            className='lg:w-1/3 bg-stone-900 py-7 lg:px-10 px-5 text-center rounded-md shadow-lg'
                            variants={animationVariants.slideUpList}
                            initial="initial"
                            whileInView='animate'
                            viewport={{ once: true}}
                            custom={index}
                        >
                            <span className='text-3xl text-amber-300 bg-stone-900 w-[75px] h-[75px] flex items-center justify-center rounded-full mx-auto'>
                                <Icon />
                            </span>
                            <h4 className='text-xl font-semibold mt-2 text-transparent bg-gradient-to-r from-amber-400 from-50% to-stone-300 to-50% bg-[100%] bg-[length:201%_100%] bg-clip-text duration-1000 hover:bg-[0%]'>{item.header}</h4>
                            <p className='font-light mt-2 text-stone-300'>{item.text}</p>
                        </motion.div>
                    )
                })}
            </div>
            <div className='mt-5 flex w-fit mx-auto items-center gap-2'>
                 <span className='text-2xl text-amber-300 bg-stone-900 w-[50px] h-[50px] flex items-center justify-center rounded-full mx-auto'>
                    <TbBulbFilled />
                </span>
                <span className='font-light'>Interested?</span>
                <a href="" className='underline text-amber-300'>Learn More</a>
            </div>
        </div>
    </div>
  )
}

export default Features
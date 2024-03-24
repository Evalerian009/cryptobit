import { FaStar } from "react-icons/fa6";
import { FaQuoteRight } from "react-icons/fa";
import Slider from "react-slick";
import { animationVariants, styles } from "../../../components/constants";
import { Button } from "../../../components/MiniComps";
import { motion } from "framer-motion";

const Reviews = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        speed: 200,
        autoplaySpeed: 5000,
      };
  return (
    <div className={`${styles.paddingX} ${styles.paddingY} bg-stone-950`}>
        <motion.div 
            className={`${styles.maxWidth}`}
            variants={animationVariants.fadeIn}
            initial="initial"
            whileInView='animate'
            viewport={{ once: true}}
        >
            <div className='flex flex-col md:flex-row justify-between md:items-center'>
                <div>
                    <h2 className='text-amber-300 uppercase text-lg'>CryptoBit services</h2>
                    <h3 className='text-[1.8rem] md:text-[2.2rem] font-bold md:w-[450px] leading-tight mt-1 text-white capitalize'>Cryptobit clients testimonials</h3>
                </div>
                <Button text='Drop a review' />
            </div>
            <div className='mt-7 flex flex-col md:flex-row gap-6 justify-between'>
                <div className='md:w-[30%] py-7 bg-stone-900 text-center flex flex-col justify-center gap-4'>
                    <h5 className='text-slate-200 text-5xl font-bold'>3120 +</h5>
                    <p className='text-stone-400 text-lg font-light leading-snug lg:w-[250px] mx-auto'>All customer reviews and satsifactions.</p>
                </div>
                
                <div className="md:w-[70%] mt-7 md:mt-0">
                    
                    <Slider {...settings}>
                        <div className=''>
                            <div className="flex justify-between items-center">
                                <div className='flex items-center gap-4 w-fit'>
                                    <img src='./avatar-m.png' alt="" className='w-[75px] h-[75px] rounded-full object-cover' />
                                    <div className="">
                                        <div className="flex flex-col md:flex-row md:items-center  gap-3">
                                            <h5 className='text-slate-200 font-semibold text-lg'>David Alexon</h5>
                                            <div className="w-[1px] h-[20px] bg-stone-500 hidden md:block" />
                                            <span className="text-amber-500 flex gap-1">
                                                <FaStar />
                                                <FaStar />
                                                <FaStar />
                                                <FaStar />
                                            </span>
                                        </div>
                                        <h6 className='text-stone-400 mt-2'>CryptoBit App User</h6>
                                    </div>
                                </div>
                                <span className="hidden text-4xl text-amber-500">
                                    <FaQuoteRight />
                                </span>
                            </div>
                            <p className="mt-6 italic text-stone-400 font-light">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis architecto laudantium et corrupti, saepe minus! Voluptates, repellat nisi praesentium eos nulla sed dolore quaerat. Reprehenderit modi ipsum aliquid libero enim? Voluptates, repellat nisi praesentium eos nulla sed dolore quaerat. Reprehenderit modi ipsum aliquid libero enim?</p>
                        </div>
                        <div className=''>
                            <div className="flex justify-between items-center">
                                <div className='flex items-center gap-4 w-fit'>
                                    <img src='./avatar-f.png' alt="" className='w-[75px] h-[75px] rounded-full object-cover' />
                                    <div className="">
                                        <div className="flex flex-col md:flex-row md:items-center  gap-3">
                                            <h5 className='text-slate-200 font-semibold text-lg'>David Alexon</h5>
                                            <div className="w-[1px] h-[20px] bg-stone-500 hidden md:block" />
                                            <span className="text-amber-500 flex gap-1">
                                                <FaStar />
                                                <FaStar />
                                                <FaStar />
                                                <FaStar />
                                            </span>
                                        </div>
                                        <h6 className='text-stone-400 mt-2'>CryptoBit App User</h6>
                                    </div>
                                </div>
                                <span className="hidden text-4xl text-amber-500">
                                    <FaQuoteRight />
                                </span>
                            </div>
                            <p className="mt-6 italic text-stone-400 font-light">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis architecto laudantium et corrupti, saepe minus! Voluptates, repellat nisi praesentium eos nulla sed dolore quaerat. Reprehenderit modi ipsum aliquid libero enim? Voluptates, repellat nisi praesentium eos nulla sed dolore quaerat. Reprehenderit modi ipsum aliquid libero enim?</p>
                        </div>
                        <div className=''>
                            <div className="flex justify-between items-center">
                                <div className='flex items-center gap-4 w-fit'>
                                    <img src='./avatar-m.png' alt="" className='w-[75px] h-[75px] rounded-full object-cover' />
                                    <div className="">
                                        <div className="flex flex-col md:flex-row md:items-center  gap-3">
                                            <h5 className='text-slate-200 font-semibold text-lg'>David Alexon</h5>
                                            <div className="w-[1px] h-[20px] bg-stone-500 hidden md:block" />
                                            <span className="text-amber-500 flex gap-1">
                                                <FaStar />
                                                <FaStar />
                                                <FaStar />
                                                <FaStar />
                                            </span>
                                        </div>
                                        <h6 className='text-stone-400 mt-2'>CryptoBit App User</h6>
                                    </div>
                                </div>
                                <span className="hidden text-4xl text-amber-500">
                                    <FaQuoteRight />
                                </span>
                            </div>
                            <p className="mt-6 italic text-stone-400 font-light">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis architecto laudantium et corrupti, saepe minus! Voluptates, repellat nisi praesentium eos nulla sed dolore quaerat. Reprehenderit modi ipsum aliquid libero enim? Voluptates, repellat nisi praesentium eos nulla sed dolore quaerat. Reprehenderit modi ipsum aliquid libero enim?</p>
                        </div>
                        
                    </Slider>
                </div>
                
            </div>
        </motion.div>
    </div>
  )
}

export default Reviews
import React from 'react'
import { styles } from '../../../components/constants'
import { FaCheckCircle } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { AnimatedText } from '../../../components/MiniComps';
import ConnectSvg from '../../../assets/illustrations/connect.svg?react'
import SecuritySvg from '../../../assets/illustrations/security.svg?react'
import AnalysisSvg from '../../../assets/illustrations/analysis.svg?react'

const Connection = () => {
  return (
    <div className={`${styles.paddingX} ${styles.paddingY}`}>
        <div className={`${styles.maxWidth} `}>
            <div className='flex flex-col lg:flex-row items-center gap-y-6'>
                <div className='w-1/2'>
                    <ConnectSvg />
                </div>

                <div className='md:w-1/2'>
                    <h2 className='text-amber-300 uppercase text-lg'>Connection</h2>
                    <h3 className='text-[1.8rem] md:text-[2.2rem] font-bold md:w-[450px] leading-tight mt-1 text-white capitalize'>Wallet Connection</h3>
                    <p className='text-stone-400 leading-7 mt-2'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi corporis tempora laudantium fuga incidunt. Tenetur beatae, dolor quis corrupti eveniet numquam ullam reprehenderit qui ex quisquam, vel expedita consequatur sint.
                    </p>
                    <ul className="mt-8 flex flex-col gap-y-3">
                        <li className='flex gap-3 items-center'>
                            <FaCheckCircle className='text-amber-400 text-2xl bg-white rounded-full' />
                            <span className='text-stone-400 leading-7'>Prioritize the features your users value.</span>
                        </li>
                    </ul>
                    <button className='bg-stone-900 w-fit px-6 rounded-[50px] flex items-center gap-3 py-[9px] border border-stone-400 mt-7'>
                        <span className='w-[30px] h-[30px] flex justify-center items-center bg-white rounded-full text-xl text-amber-300'>
                            <IoMdMail />
                        </span>
                        <span className='text-stone-200'>Contact Us</span>
                    </button>
                </div>
            </div>

            <div className={`${styles.paddingY}`}>
                <div className='md:w-[450px] mx-auto'>
                    <h2 className='text-amber-300 uppercase text-lg text-center'>Connection</h2>
                    <h3 className='text-[1.8rem] md:text-[2.2rem] font-bold leading-tight mt-1 text-white capitalize text-center'>Wallet Connection</h3>
                    <p className='text-stone-400 leading-7 mt-2 text-center'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi corporis tempora laudantium fuga incidunt.
                    </p>
                </div>

                <div className='mt-14 flex flex-col md:flex-row flex-wrap'>
                    <div className="md:w-1/2 lg:w-1/3 text-center flex flex-col gap-4 p-7">
                        <span className='w-[100px] h-[100px] rounded-full bg-stone-900 block mx-auto' />
                        <h4 className='text-xl text-stone-100 font-bold'>
                            <AnimatedText text='Collect currency' />
                        </h4>
                        <p className='text-slate-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, atque deleniti nesciunt voluptates quo pariatur.</p>
                    </div>
                    <div className="md:w-1/2 lg:w-1/3 text-center flex flex-col gap-4 p-7">
                        <span className='w-[100px] h-[100px] rounded-full bg-stone-900 block mx-auto' />
                        <h4 className='text-xl text-stone-100 font-bold'>
                            <AnimatedText text='Collect currency' />
                        </h4>
                        <p className='text-slate-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, atque deleniti nesciunt voluptates quo pariatur.</p>
                    </div>
                    <div className="md:w-1/2 lg:w-1/3 text-center flex flex-col gap-4 p-7">
                        <span className='w-[100px] h-[100px] rounded-full bg-stone-900 block mx-auto' />
                        <h4 className='text-xl text-stone-100 font-bold'>
                            <AnimatedText text='Collect currency' />
                        </h4>
                        <p className='text-slate-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, atque deleniti nesciunt voluptates quo pariatur.</p>
                    </div>
                </div>
            </div>

            <div className={`${styles.paddingY}`}>
                <div className='md:w-[450px] mx-auto'>
                    <h2 className='text-amber-300 uppercase text-lg text-center'>Connection</h2>
                    <h3 className='text-[1.8rem] md:text-[2.2rem] font-bold leading-tight mt-1 text-white capitalize text-center'>Wallet Connection</h3>
                </div>

                <div className='mt-10 flex flex-col lg:flex-row lg:flex-nowrap gap-10'>
                    <div className='lg:w-1/2'>
                        <h4 className='text-2xl text-stone-100 font-semibold'>Benefits of Token Holders</h4>
                        <div className='w-full h-[300px] mt-5 rounded-2xl bg-stone-900'>
                            <AnalysisSvg className='w-full h-full scale-[120%]' />
                        </div>
                        <div className='p-2'>
                            <p className='text-stone-400 mt-3 leading-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla asperiores qui enim? Aspernatur eius excepturi.</p>
                            <ul className="mt-6 flex flex-col gap-y-3 text-stone-200 leading-7">
                                <li className='flex gap-3 items-center '>
                                    <FaCheckCircle className='text-amber-400 text-2xl bg-white rounded-full' />
                                    <span className=''>Prioritize the features your users value.</span>
                                </li>
                                <li className='flex gap-3 items-center'>
                                    <FaCheckCircle className='text-amber-400 text-2xl bg-white rounded-full' />
                                    <span className=''>Prioritize the features your users value.</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className='lg:w-1/2'>
                        <h4 className='text-2xl text-stone-100 font-semibold'>Benefits of Token Holders</h4>
                        <div className='w-full h-[300px] mt-5 rounded-2xl bg-stone-900'>
                            <SecuritySvg className='w-full h-full scale-[120%]' />
                        </div>
                        <div className='p-2'>
                            <p className='text-stone-400 mt-3 leading-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla asperiores qui enim? Aspernatur eius excepturi.</p>
                            <ul className="mt-6 flex flex-col gap-y-3 text-stone-200 leading-7">
                                <li className='flex gap-3 items-center '>
                                    <FaCheckCircle className='text-amber-400 text-2xl bg-white rounded-full' />
                                    <span className=''>Prioritize the features your users value.</span>
                                </li>
                                <li className='flex gap-3 items-center'>
                                    <FaCheckCircle className='text-amber-400 text-2xl bg-white rounded-full' />
                                    <span className=''>Prioritize the features your users value.</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Connection
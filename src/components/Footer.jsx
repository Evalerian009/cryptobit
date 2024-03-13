import React from 'react'
import { TiSocialFacebook } from "react-icons/ti";
import { BiLogoTelegram } from "react-icons/bi";
import { VscDash } from "react-icons/vsc";
import SponsorsLogo from '../assets/sponsors-logo.png'
import { styles } from './constants';
import { AnimatedText } from './MiniComps';

const Footer = () => {
  return (
    <div className={`${styles.paddingX} ${styles.paddingY} bg-black`}>
        <div className={`${styles.maxWidth} mx-auto`}>
            <div className='flex flex-col md:flex-row flex-wrap lg:justify-between gap-y-10'>
                <div className='md:w-1/2 lg:w-1/3 md:pr-10'>
                    <a href="/" className='text-[1.9rem]'>
                        <span className='font-bold text-white'>Crypto</span>
                        <span className='font-[300]  text-orange-500'>BIT</span>
                    </a>
                    <p className='text-stone-400 mt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, culpa? Perferendis temporibus perspiciatis, eveniet accusamus excepturi sunt doloremque, tempore officiis accusantium.</p>
                    <div className='mt-5'>
                        <span className='text-white w-[35px] h-[35px] bg-stone-800 rounded-full flex justify-center items-center text-2xl'>
                            <TiSocialFacebook />
                        </span>
                    </div>
                </div>

                <div className="md:w-1/2lg:w-1/3 md:pr-10">
                    <h2 className='text-stone-100 font-bold text-lg'>Useful Links</h2>
                    <div className='mt-3'>
                        <a href="" className='flex items-center text-stone-400'>
                            <VscDash className='text-amber-500 text-4xl' />
                            <AnimatedText text='What is ICO?' />
                        </a>
                    </div>
                </div>

                <div className='md:w-1/2 lg:w-1/3 md:pr-10'>
                    <h2 className='text-stone-100 font-bold text-lg'>Newsletter</h2>
                    <p className='text-stone-400 mt-3'>Get now free 20% discount for all productsa on your first order. Don&apos;t miss out!</p>
                    <form>
                        <div className='max-w-[400px] flex items-center mt-7 bg-stone-900 py-1 rounded-3xl'>
                            <input type="text" placeholder='Enter Your Email' className='w-full indent-5 outline-none font-semibold text-[13px] bg-transparent h-full text-white'  />
                            <button className='bg-amber-400 uppercase font-semibold text-2xl  text-white w-[45px] h-[40px] flex justify-center items-center rounded-full'>
                                <BiLogoTelegram />
                            </button>
                        </div>
                    </form>
                </div>

                <div className='hidden lg:hidden text-sm md:flex flex-col gap-5 justify-between'>
                    <div className=' bg-stone-400 w-full h-[1px]' />
                    <div className='flex flex-col gap-4'>
                        <h6 className='text-stone-300'>&copy; Cryptobit All rights Reserved 2024</h6>
                        
                        <span className='text-stone-300 font-semibold flex gap-10'>
                            <a href="">Privacy Policy</a>
                            <a href="">Terms & Conditions</a>
                        </span>
                        
                        <div className='flex'>
                            <img src={SponsorsLogo} alt="" />
                        </div>
                    </div>
                </div>
            </div>

            <div className='md:hidden lg:block my-10 bg-stone-400 w-full h-[1px]' />

            <div className='flex flex-col items-center md:hidden text-sm lg:flex lg:flex-row gap-5 lg:justify-between'>
                <h6 className='text-stone-300'>&copy; Cryptobit All rights Reserved 2024</h6>
                
                <span className='text-stone-300 font-semibold flex gap-10'>
                    <a href="">Privacy Policy</a>
                    <a href="">Terms & Conditions</a>
                </span>
                
                <div className='flex'>
                    <img src={SponsorsLogo} alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer
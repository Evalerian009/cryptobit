import React from 'react'
import { TbBulbFilled } from "react-icons/tb";
import { styles } from './constants';
import { Button } from './MiniComps';

const Transactions = () => {
  return (
    <div className={`${styles.paddingX} ${styles.paddingY} bg-stone-950`}>
        <div className={`${styles.maxWidth} flex`}>
            <div className='md:w-1/2 lg:w-2/5'></div>

            <div className='md:w-1/2 lg::w-3/5'>
                <h2 className='text-amber-300 uppercase text-lg'>Transactions</h2>
                <h3 className='text-[1.8rem] md:text-[2.3rem] font-bold lg:w-[450px] leading-tight mt-1 capitalize text-white'>Blockchain will record all transactions</h3>
                <p className='font-light mt-2 text-stone-300'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores necessitatibus tenetur delectus nemo accusantium voluptatem sunt modi quasi vel non, tempora quod quia atque impedit inventore qui numquam nesciunt earum.</p>

                <div className='flex flex-wrap gap-y-4 mt-7'>            
                    <div className='w-full lg:w-1/2 pr-4'>
                        <span className='text-amber-400 bg-stone-900 flex py-3 px-4 gap-2'>
                            <TbBulbFilled className='text-2xl'/>
                            <span className='text-stone-300'>Exchange Value</span>
                        </span>
                    </div>
                </div>
                <Button text= 'Contact More' />
            </div>
        </div>
    </div>
  )
}

export default Transactions
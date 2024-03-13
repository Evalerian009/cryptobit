import { useState } from 'react'

export const Button = ({ text }) => {
  const [ hovered, setHovered ] = useState(null)
  const hoveredHandler = () => ((
    setHovered(true)
  ))
  const hoveredNotHandler = () => ((
    setHovered(false)
  ))
  return (
    <button className='bg-amber-400 w-fit mt-7 py-3 px-6 rounded relative overflow-hidden capitaliza' onMouseEnter={hoveredHandler} onMouseLeave={hoveredNotHandler}>
      <span className={`${hovered ? 'w-[200%] h-[200%]' : 'w-7 h-7'} absolute bottom-0 right-0 rounded-tl-full bg-amber-300 duration-1000`} />
      <span className='relative'>
        {text}
      </span>
    </button>
  )
}

export const AnimatedText = ({text, hovered }) => {
  return(
    <span className={`text-transparent bg-gradient-to-r from-amber-400 from-50% to-stone-200 to-50% bg-[100%] bg-[length:201%_100%] bg-clip-text duration-[0.7s] ${hovered ? 'bg-[0%]' : ''} hover:bg-[0%]`}>
        {text}
    </span>
  )
}
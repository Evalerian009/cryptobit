import { AiOutlineMenuFold } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";
import { navLinks, styles } from './constants';
import { Link, NavLink } from "react-router-dom";

const Navbar = ({ menu, handleMenu}) => {
  return (
    <nav className={`${styles.paddingX} bg-black py-4 relative text-white`}>
        <div className='flex justify-between items-center max-w-7xl mx-auto'>
            {/* Logo */}
            <Link href="/" className='text-[1.9rem]'>
                <span className='font-bold text-white'>Crypto</span>
                <span className='font-[300]  text-orange-500'>BIT</span>
            </Link>

            {/* Desktop nav links */}
            <ul className='hidden lg:flex items-center gap-6 font-light'>
                {navLinks.map(item => ((
                    <li key={item.id} className='hover:text-orange-500 duration-300'>
                        <NavLink to={item.link}>{item.title}</NavLink>
                    </li>   
                )))}
                <button className="bg-yellow-600 text-black py-2 px-5 rounded">Regisiter</button>
            </ul>

            {/* mobile menubar */}
            <button className='lg:hidden' onClick={handleMenu}>
                <AiOutlineMenuFold className='text-[1.6rem]' />
            </button>

            {/* Mobile menu links */}
            <ul className={`flex flex-col lg:hidden gap-6 fixed z-[11] ${menu ? 'right-0' : 'right-[-200px]'} top-0 w-[200px] bg-black h-screen pt-12 pl-8 font-semibold duration-500`}>

                {/* Mobile menu close button */}
                <li>
                    <button>
                        <AiOutlineClose className='text-[1.6rem]' onClick={handleMenu} />
                    </button>
                </li>

                {/* Mobile menu links */}
                {navLinks.map(item => ((
                    <li key={item.id} className='hover:text-orange-500 duration-300'>
                        <NavLink to={item.link}>{item.title}</NavLink>
                    </li>   
                )))}
            </ul>
        </div>
    </nav>
  )
}

export default Navbar
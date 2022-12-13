import React, {useState} from 'react'
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'

export const Navbar = () => {
    const [nav, setNav] = useState(false)

    const handleNav = () => {
        setNav(!nav)
    }

  return (
    <div className='flex justify-between items-center h-24 mx-auto px-4 bg-black text-white'>
        <h1 className='w-full text-3xl font-bold'>PcRec</h1>
        <ul className='hidden md:flex'>
            <a href='/' className='p-4 hover:scale-105 duration-300'>Home</a>
            <a href='/Vga' className='p-4 hover:scale-105 duration-300'>VGA</a>
            <a href='/Prosesor' className='p-4 hover:scale-105 duration-300'>Processor</a>
            <a href='/Motherboard' className='p-4 hover:scale-105 duration-300'>Motherboard</a>
            {/* <li className='p-4'>Home</li>
            <li className='p-4'>VGA</li>
            <li className='p-4'>Processor</li>
            <li className='p-4'>Motherboard</li> */}
        </ul>
        <div onClick={handleNav} className='block md:hidden'>
            {!nav ? <AiOutlineMenu size={30}/> : <AiOutlineClose size={30}/>}
        </div>
        <div className={!nav ? 'fixed left-[-100%]' : 'fixed left-0 top-0 w-[40%] h-full border-r border-r-gray-900 bg-[#676767] ease-in-out duration-500' }>
            <h1 className='w-full text-3xl font-bold m-4'>PcRec</h1>
            <ul className=' uppercase p-4'>
                <li className='p-4 border-b border-gray-600'><a href='/'>Home</a></li>
                <li className='p-4 border-b border-gray-600'><a href='/Vga'>VGA</a></li>
                <li className='p-4 border-b border-gray-600'><a href='/Prosesor'>Processor</a></li>
                <li className='p-4'><a href='/Motherboard'>Motherboard</a></li>  
            </ul>
        </div>
    </div>
  )
}

export default Navbar
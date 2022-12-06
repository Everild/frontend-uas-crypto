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
            <li className='p-4'>Home</li>
            <li className='p-4'>Home</li>
            <li className='p-4'>Home</li>
            <li className='p-4'>Home</li>
        </ul>
        <div onClick={handleNav} className='block md:hidden'>
            {!nav ? <AiOutlineClose size={30}/> : <AiOutlineMenu size={30}/>}
        </div>
        <div className={!nav ? 'fixed left-0 top-0 w-[40%] h-full border-r border-r-gray-900 bg-[#676767] ease-in-out duration-500' : 'fixed left-[-100%]'}>
            <h1 className='w-full text-3xl font-bold m-4'>PcRec</h1>
            <ul className=' uppercase p-4'>
                <li className='p-4 border-b border-gray-600'>Home</li>
                <li className='p-4 border-b border-gray-600'>Home</li>
                <li className='p-4 border-b border-gray-600'>Home</li>
                <li className='p-4'>Home</li>  
            </ul>
        </div>
    </div>
  )
}

export default Navbar
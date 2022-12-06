import React from 'react'

export const Navbar = () => {
  return (
    <div className='flex justify-between items-center h-24 mx-auto px-4 bg-black text-white'>
        <h1 className='w-full text-3xl font-bold'>PcRec</h1>
        <ul className='flex'>
            <li className='p-4'>Home</li>
            <li className='p-4'>Home</li>
            <li className='p-4'>Home</li>
            <li className='p-4'>Home</li>
        </ul>
    </div>
  )
}

export default Navbar
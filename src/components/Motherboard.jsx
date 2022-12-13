import React from 'react'
import Vga1 from '../assets/1.svg'

const Vga = () => {
  return (
    <div className='w-full py-[10rem] px-4 '>
        <div className='max-w-[1240px] mx-auto flex flex-col md:flex-row gap-8'>
            <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
                <img className='w-30 mx-auto mt-[-3rem]' src={Vga1} alt="/" />
                <h2 className='text-2xl font-bold text-center py-8'>Motherboard</h2>
                <button className='bg-[#B7B7B7] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Detail</button>
            </div>
            <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
                <img className='w-30 mx-auto mt-[-3rem]' src={Vga1} alt="/" />
                <h2 className='text-2xl font-bold text-center py-8'>Motherboard</h2>
                <button className='bg-[#B7B7B7] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Detail</button>
            </div>
            <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
                <img className='w-30 mx-auto mt-[-3rem]' src={Vga1} alt="/" />
                <h2 className='text-2xl font-bold text-center py-8'>Motherboard</h2>
                <button className='bg-[#B7B7B7] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Detail</button>
            </div>
        </div>
    </div>
  )
}

export default Vga
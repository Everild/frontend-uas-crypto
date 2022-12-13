import React, { useState, useEffect} from 'react';
import axios from 'axios'
import picmenu from '../assets/picmenu.svg'

export const Menu = () => {
  return (
    <div className='flex flex-col pt-10 pb-10 lg:flex-row lg:space-y-0 lg:items-center lg:content-center lg:pl-10 lg:pr-10 lg:mx-auto lg:space-x-5 xl:w-full xl:justify-center bg-[#0B1D37]'>
        <div class="mx-auto">
            <img src={picmenu} alt="" />
        </div>
        <div className="flex flex-col space-y-3 px-10">
                <h1 class="text-white font-bold text-[26px] text-left sm:text-[26px] xl:text-[20px] lg:text-left lg:">
                ketahui lebih lengkap mengenai komponen pc <br></br> yang akan di beli
                </h1>
            </div>
    </div>
  )
}


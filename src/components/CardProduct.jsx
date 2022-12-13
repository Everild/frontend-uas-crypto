import React from "react";
import { Link } from "react-router-dom";

const CardProduct = ({ id, nama, deskripsi, harga, img }) => {
  return (
    <>
      <div className='max-w-[1240px] mx-auto flex flex-col md:flex-row gap-8'>
        <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
            <img className='w-30 mx-auto mt-[-3rem]' src={img} alt="" />
            <h1 className='relative text-2xl font-bold text-center py-8'>{nama}</h1>
            <h1 className="font-semibold">{deskripsi}</h1>
            <h1 className="font-bold">{harga}</h1>
            <Link to={`/menu/${id}`} className='bg-[#B7B7B7] w-[200px] text-center rounded-md font-medium my-6 mx-auto px-6 py-3 '>
            Detail
            </Link>
        </div>
      </div>
    </>
  );
};

export default CardProduct;
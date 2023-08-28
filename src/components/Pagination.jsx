import { list } from 'postcss'
import React from 'react'

const Pagination = ({ pages, setCurrentPage, currentPage }) => {


  return (
    <ul className='py-[10px] mt-[50px] flex justify-center items-center gap-8'>
        {pages.map((page) => (
         <li className={`p-2 h-[45px] w-[45px] rounded-full flex justify-center items-center bg-[#fffd87] border-[5px] border-[#893446] font-bold text-[#893446] cursor-pointer ${currentPage === page && "bg-pink-900 border-[#fffd87] text-[#fffd87]"}`} onClick={() => setCurrentPage(page)} key={page}>{page}</li>
         ))}
    </ul>
  )
}

export default Pagination
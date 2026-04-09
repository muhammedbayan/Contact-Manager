import React, { useState } from 'react';
import { FaSearch } from "react-icons/fa";
import { BsThreeDots } from "react-icons/bs";

export const SearchBar = ({ setSearchTerm , visible }) => {
  const [searchInput,setSearchInput] = useState("");
  return (
    <div className= {`bg-neutral-950  w-full rounded-2xl px-4 py-4 md:py-7 md:px-10 transition-all duration-1000 ease-in ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-7"} `}>
      <div className='flex items-center justify-between'>
        <h1 className='text-white text-2xl sm:text-3xl font-sans font-extrabold'>Contact Manager</h1>
        <BsThreeDots className='text-white text-2xl md:text-4xl cursor-pointer'/>
      </div>
        <div className='mt-5 sm:mt-8 w-full relative flex items-center'>
            <input onChange={(e)=>setSearchInput(e.target.value)} value={searchInput} className='w-full sm:flex-1 bg-neutral-950 border-2 border-neutral-600 rounded-full text-white py-2 pl-4 sm:py-3 sm:pl-5 md:text-xl pr-8 md:pr-12' placeholder='Search' type="text"/>
            {searchInput && <div onClick={()=>{setSearchTerm("");setSearchInput("")}} className='md:text-3xl text-2xl absolute text-white cursor-pointer top-2 md:top-2 right-18  md:right-25'>×</div>}
            <FaSearch onClick={()=>setSearchTerm(searchInput)} className='text-neutral-700 border-2 rounded-full w-13 h-13 md:w-14 md:h-14 p-3 md:p-3 ml-3 sm:ml-6 cursor-pointer  transition duration-200 ease-in-out hover:text-white active:text-white'/>
        </div>
    </div>
  )
}

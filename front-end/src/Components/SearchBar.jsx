import React, { useState } from 'react';
import { FaSearch } from "react-icons/fa";
import { BsThreeDots } from "react-icons/bs";

export const SearchBar = ({ setSearchTerm , visible }) => {
  const [searchInput,setSearchInput] = useState("");
  return (
    <div className= {`bg-neutral-950 w-full rounded-2xl px-4 py-4 md:py-7 md:px-10 transition-all duration-1000 ease-in ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-7"} `}>
      <div className='flex items-center justify-between'>
        <h1 className='text-white text-2xl sm:text-3xl font-sans font-extrabold'>Contact Manager</h1>
        <BsThreeDots className='text-white text-2xl md:text-4xl cursor-pointer'/>
      </div>
        <div className='mt-5 sm:mt-8 w-full flex items-center'>
            <input onChange={(e)=>setSearchInput(e.target.value)} value={searchInput} className='w-full sm:flex-1 bg-neutral-950 border-2 border-neutral-700 rounded-full text-white py-2 px-4 sm:py-3 sm:px-5 md:text-xl' placeholder='Search' type="text"/>
            {searchInput && <div onClick={()=>{setSearchTerm("");setSearchInput("")}} className='text-3xl absolute text-white top-36 cursor-pointer right-50'>×</div>}
            <FaSearch onClick={()=>setSearchTerm(searchInput)} className='text-neutral-700 border-2 rounded-full w-13 h-13 md:w-14 md:h-14 p-3 md:p-3 ml-3 sm:ml-6 cursor-pointer hover:text-white transition duration-200 ease-in-out'/>
        </div>
    </div>
  )
}

import React from 'react'
import { IoIosContact } from "react-icons/io";

export const ContactCard = ({cnt , setContactViewOpen , setSelectedContact , selectedContact}) => {
  const handleClick = () =>{
    setContactViewOpen(true);
    setSelectedContact(cnt);
  }
  return (
    <div onClick={handleClick} className='flex items-center gap-4 border-2 rounded-2xl cursor-pointer transition-all transform duration-300
                  bg-neutral-900 border-neutral-700 md:p-5 p-3 w-full hover:border-blue-600 hover:border-2 hover:scale-102'>
        <div>
            <IoIosContact className='text-white text-4xl md:text-8xl' />
        </div>
        <div className='space-y-2 w-full md:flex-1'>
            <div className='border border-neutral-700 rounded-xl px-4 py-2 text-white select-none' disabled>Name: {cnt.name}</div>
            <div className='border border-neutral-700 rounded-xl px-4 py-2 text-white select-none' disabled>Phone: {cnt.phone}</div>
            <div className='border border-neutral-700 rounded-xl px-4 py-2 text-white select-none' disabled>Email: {cnt.email}</div>
        </div>
    </div>
  )
}

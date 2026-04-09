import React from 'react'
import { IoIosContact } from "react-icons/io";
import { MdArrowBackIos } from "react-icons/md";
import { MdDelete } from "react-icons/md";

export const ContactView = ({setContactViewOpen , selectedContact , setUpdateForm , onDelete , contactViewOpen , updateForm}) => {

  return (
    <div className= {`z-50 w-85 md:w-140 p-5 border-2 border-white rounded-2xl bg-neutral-900 fixed left-1/2 transform -translate-x-1/2 md:top-30 top-10 md:left-170 transition-all ease-out duration-300 ${contactViewOpen ? "visible opacity-100 scale-105" : "invisible opacity-0 scale-100"}`}>
        < MdArrowBackIos onClick={()=>setContactViewOpen(false)} className='text-white text-5xl absolute top-5 cursor-pointer bg-neutral-600 pl-3 left-5 rounded'/>
        <div className='md:flex items-center'>
            < IoIosContact className='text-white text-9xl m-auto'/>
            <div className='flex flex-col gap-3 '>
                <input className='border border-white rounded-xl text-white text-xl px-3 py-2' disabled value={selectedContact?.name || ""} name='name'  type="text" placeholder='Name'/>
                <input className='border border-white rounded-xl text-white text-xl px-3 py-2' disabled value={selectedContact?.phone || ""} name='phone' type="number" placeholder='Phone'/>
                <input className='border border-white rounded-xl text-white text-xl px-3 py-2' disabled value={selectedContact?.email || ""} name='email'  type="email" placeholder='Email'/>
                <input className='border border-white rounded-xl text-white text-xl px-3 py-2' disabled value={selectedContact?.company || ""} name='company'  type="text" placeholder='Company or institution'/>
                <input className='border border-white rounded-xl text-white text-xl px-3 py-2' disabled value={selectedContact?.title || ""} name='title' type="text" placeholder='Title'/>
            </div>
        </div> 
        <div className='md:flex items-center justify-around mt-7'>
            <button onClick={()=>{setUpdateForm(true);setContactViewOpen(false);}} className= "text-xl text-white bg-green-600 py-3 px-4 rounded-full m-auto cursor-pointer md:w-auto w-45 md:mb-0 mb-3 block ">Update Contact</button>
            <button onClick={()=>onDelete(selectedContact.id)} className='flex justify-center items-center gap-3 text-xl text-white bg-red-600 py-3 px-6 rounded-full w-45 md:w-auto m-auto cursor-pointer  '><MdDelete/>Delete</button>
        </div>
        
    </div>
  )
}

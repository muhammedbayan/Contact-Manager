import React, { useEffect, useState } from 'react'
import { IoIosContact } from "react-icons/io";
import { MdArrowBackIos } from "react-icons/md";


export const UpdateContact = ({setUpdateForm , selectedContact ,onUpdate , setSelectedContact , setContactViewOpen ,updateForm}) => {
        const [updatedContact,setUpdatedContact] = useState({
            id: selectedContact?.id || "",
            name: selectedContact?.name || "",
            phone: selectedContact?.phone || "",
            email: selectedContact?.email || "",
            company: selectedContact?.company || "",
            title: selectedContact?.title || ""
        })

        useEffect(()=>{
            if(selectedContact){
                setUpdatedContact({
                    id: selectedContact?.id || "",
                    name: selectedContact?.name || "",
                    phone: selectedContact?.phone || "",
                    email: selectedContact?.email || "",
                    company: selectedContact?.company || "",
                    title: selectedContact?.title || ""
                })
            }
        },[selectedContact]);

        const handleChange = (e) =>{
            const {name , value} = e.target;
            setUpdatedContact((prev)=>({...prev,[name]:value}))
        }

        const handleUpdate = () =>{
            if(updatedContact.name.slice() === ""){
                alert("Enter a valid name!");
                return;
            }else if(updatedContact.phone.slice() === ""){
                alert("Enter a valid phone number!");
                return;
            }else if(updatedContact.email.slice() === ""){
                alert("Enter a valid email!");
                return;
            }
            onUpdate(updatedContact);
            setSelectedContact(updatedContact);
            setUpdateForm(false);
            setContactViewOpen(true);
        }
  return (
    <div>
          return (
            <div className={`z-50 w-85 md:w-140 p-5 border-2 border-white rounded-2xl bg-neutral-900 fixed 
                            left-1/2 transform -translate-x-1/2 md:top-30 top-10 md:left-170 ${updateForm ? "visible opacity-100" : "invisible opacity-0"}`}>
                < MdArrowBackIos onClick={()=>{setUpdateForm(false);setContactViewOpen(true)}} className='text-white text-5xl absolute top-5 cursor-pointer bg-neutral-600 pl-3 left-5 rounded'/>
                <div className='md:flex items-center'>
                    < IoIosContact className='text-white text-9xl m-auto '/>
                    <div className='flex flex-col gap-3 '>
                        <input onChange={handleChange} className='border border-white rounded-xl text-white text-xl px-3 py-2' value={updatedContact.name} name='name'  type="text" placeholder='Name'/>
                        <input onChange={handleChange} className='border border-white rounded-xl text-white text-xl px-3 py-2' value={updatedContact.phone} name='phone'  type="number" placeholder='Phone'/>
                        <input onChange={handleChange} className='border border-white rounded-xl text-white text-xl px-3 py-2' value={updatedContact.email} name='email'  type="email" placeholder='Email'/>
                        <input onChange={handleChange} className='border border-white rounded-xl text-white text-xl px-3 py-2' value={updatedContact.company} name='company'  type="text" placeholder='Company or institution'/>
                        <input onChange={handleChange} className='border border-white rounded-xl text-white text-xl px-3 py-2' value={updatedContact.title} name='title'  type="text" placeholder='Title'/>
                    </div>
                </div> 
                <button onClick={handleUpdate} className={`text-xl text-white bg-blue-600 py-3 px-8 rounded-full m-auto cursor-pointer block mt-7 active:opacity-50 
                                                            transform transition-all ease-linear duration-300 ${updateForm ? "translate-x-0 " : "md:-translate-x-30 "}`}>Save</button>
            </div>
          )
    </div>
  )
}

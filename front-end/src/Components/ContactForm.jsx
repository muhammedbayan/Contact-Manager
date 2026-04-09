import React, { useState } from 'react'
import { IoIosContact } from "react-icons/io";
import { MdArrowBackIos } from "react-icons/md";

export const ContactForm = ({setContactFormOpen , setContacts , contactFormOpen}) => {
    const [newContact,setNewContact] = useState({
        id: Date.now(),
        name:"",
        phone:"",
        email:"",
        company:"",
        title:""
    })

    const handleChange = (e) =>{
        const {name,value} = e.target;
        setNewContact((prev)=>({...prev,[name]:value}));
    }

    const handleAddContact = () =>{
        if(newContact.name.slice() === ""){
            alert("Enter a valid name!");
            return;
        }else if(newContact.phone.slice() === ""){
            alert("Enter a valid phone number!");
            return;
        }else if(newContact.email.slice() === ""){
            alert("Enter a valid email!");
            return;
        }
        setContacts((prev) =>([...prev,newContact]));
        setNewContact({
            id: Date.now(),
            name:"",
            phone:"",
            email:"",
            company:"",
            title:""
        })
        setContactFormOpen(false);
    }
  return (
    
    <div className={`z-50 w-85 md:w-140 p-5 border-2 border-white rounded-2xl bg-neutral-900 fixed 
                    left-1/2 transform -translate-x-1/2  md:top-30 top-20 md:left-1/2 transition-all duration-300 ease-out origin-bottom-right
                    ${contactFormOpen ? "opacity-100 scale-100 translate-y-0 " : "opacity-0 scale-50 translate-y-6 "}`}>
        < MdArrowBackIos onClick={()=>setContactFormOpen(false)} className='text-white text-5xl absolute top-5 cursor-pointer bg-neutral-600 pl-3 left-5 rounded'/>
        <div className='md:flex items-center'>
            < IoIosContact className='text-white text-9xl m-auto'/>
            <div className='flex flex-col gap-3 '>
                <input onChange={handleChange} className='border border-white rounded-xl text-white text-xl px-3 py-2' name='name' value={newContact.name} type="text" placeholder='Name'/>
                <input onChange={handleChange} className='border border-white rounded-xl text-white text-xl px-3 py-2' name='phone' value={newContact.phone} type="number" placeholder='Phone'/>
                <input onChange={handleChange} className='border border-white rounded-xl text-white text-xl px-3 py-2' name='email' value={newContact.email} type="email" placeholder='Email'/>
                <input onChange={handleChange} className='border border-white rounded-xl text-white text-xl px-3 py-2' name='company' value={newContact.company} type="text" placeholder='Company or institution'/>
                <input onChange={handleChange} className='border border-white rounded-xl text-white text-xl px-3 py-2' name='title' value={newContact.title} type="text" placeholder='Title'/>
            </div>
        </div> 
        <button onClick={handleAddContact} className='text-xl text-white bg-blue-600 py-3 px-4 rounded-full m-auto cursor-pointer block mt-7'>Create Contact</button>
    </div>
  )
}

import React from 'react'
import { ContactCard } from './ContactCard'

export const ContactList = ({ selectedContact , contacts , setContactViewOpen , setSelectedContact , visible}) => {
  return (
    <div className={`grid grid-cols-1 md:grid-cols-2 gap-5 bg-none md:bg-neutral-950 w-full rounded-2xl md:py-7 md:px-10 mt-10 transition-all delay-500 duration-1000 ease-in ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-7"}`}>
        {contacts.length != 0 ? contacts.map((cnt) => (
            <ContactCard key={cnt.id} cnt={cnt} selectedContact={selectedContact} setContactViewOpen={setContactViewOpen} setSelectedContact={setSelectedContact}/>
        )):<p className='text-center relative md:left-60 text-neutral-500 text-xl md:text-2xl'>No contacts yet.</p>}
        
    </div>
  )
}

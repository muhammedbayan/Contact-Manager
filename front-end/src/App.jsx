import React, { useEffect, useState } from 'react'
import { SearchBar } from './Components/SearchBar'
import { ContactList } from './Components/ContactList'
import { ContactForm } from './Components/ContactForm'
import { ContactView } from './Components/ContactView'
import { UpdateContact } from './Components/UpdateContact'
import { IoPersonAddSharp } from "react-icons/io5";

const App = () => {

  const [contacts,setContacts] = useState(()=>{
    const savedContacts = localStorage.getItem("contacts");
    return savedContacts ? JSON.parse(savedContacts) : [];
  });

  const [visible,setVisible] = useState(false);
  const [contactFormOpen,setContactFormOpen] = useState(false);
  const [contactViewOpen,setContactViewOpen] = useState(false);
  const [updateForm , setUpdateForm] = useState(false);

  const [selectedContact,setSelectedContact] = useState(null);
  const [searchTerm,setSearchTerm] = useState("")

  const filterSearchContacts = contacts.filter((contact)=>(
    contact.name.toLowerCase().includes(searchTerm.toLowerCase())
  ));

  const handleDelContact = (id) =>{
    const filteredContact = contacts.filter((contact)=>(contact.id !== id));
    setContacts(filteredContact);
    setContactViewOpen(false);
  }

  const handleUpdate = (updatedContact) =>{
    const updatedList = contacts.map((contact) => (
      updatedContact.id == contact.id ? updatedContact : contact
    ))
    setSelectedContact(updatedList);
    setContacts(updatedList);
  }

  useEffect(()=>{
    setVisible(true)
  },[])

  useEffect(()=>{
    localStorage.setItem("contacts",JSON.stringify(contacts));
  },[contacts])

  return (
    <div className='min-h-screen w-full bg-black px-5 py-4 md:px-15 md:py-10'>
      <SearchBar  visible={visible} setSearchTerm={setSearchTerm}/>
      <ContactList visible={visible} selectedContact={selectedContact} setSelectedContact={setSelectedContact} setContactFormOpen={setContactFormOpen} contacts={filterSearchContacts} setContactViewOpen={setContactViewOpen}/>
      <IoPersonAddSharp onClick={()=>setContactFormOpen(true)} 
                  className='text-white w-15 h-15 bottom-0 right-7 md:right-27 mb-7 bg-blue-600 p-3 
                              rounded-full cursor-pointer fixed transition-all duration-300 hover:scale-120'/>

      {contactFormOpen && <div className='fixed inset-0 backdrop-blur-sm bg-black/40 z-40'></div>}
      {contactViewOpen  && <div className='fixed inset-0 backdrop-blur-sm bg-black/40 z-40'></div>}
      {updateForm  && <div className='fixed inset-0 backdrop-blur-sm bg-black/40 z-40'></div>}

      <ContactForm contactFormOpen={contactFormOpen} setContactFormOpen={setContactFormOpen} setContacts={setContacts}/>
      <ContactView contactViewOpen={contactViewOpen} updateForm={updateForm} onDelete={handleDelContact} selectedContact={selectedContact} setContactViewOpen={setContactViewOpen} setSelectedContact={setSelectedContact} setUpdateForm={setUpdateForm}/>
      <UpdateContact updateForm={updateForm} setContactViewOpen={setContactViewOpen} setSelectedContact={setSelectedContact} onUpdate={handleUpdate} selectedContact={selectedContact} setUpdateForm={setUpdateForm}/>   
    </div>
  )
}

export default App
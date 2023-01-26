import React,{useState} from 'react'
import {AiOutlineClose,AiOutlineMenu} from 'react-icons/ai'

const Navbar=()=> {
    const[nav,setNav]=useState(false);

    const handleNav = () =>{
        setNav(!nav);
    }

  return (
    <div className=  'flex justify-between items-center h-24 mx-auto max-w-[1240px] px-4 text-white '> 
        <h1 className='w-full text-3xl font-bold text-[#00df9a]'>REACT.</h1>
        <ul className='hidden  md:flex'>
            <l1 className="p-4">Home</l1>
            <l1 className="p-4">Company</l1>
            <l1 className="p-4"> Resources</l1>
            <l1 className="p-4">About</l1>
            <l1 className="p-4">Contacts</l1>
        </ul>
        <div onClick={handleNav} className="block md:hidden">  
            {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20}/>}
            
        </div>
        <div className={nav ? "fixed left-0 top-0 w-[60%]  h-full border-r border-r-gray-900  bg-[#000300] ease-in-out duration-500": 'fixed left-[-100%]'}>
        <h1 className='w-full text-3xl font-bold text-[#00df9a] m-4'>REACT.</h1>
            <ul className='pt-4 uppercase flex flex-col' >
            <l1 className="p-4 border-b border-gray-600">Home</l1>
            <l1 className="p-4 border-b border-gray-600">Company</l1>
            <l1 className="p-4 border-b border-gray-600"> Resources</l1>
            <l1 className="p-4 border-b border-gray-600">About</l1>
            <l1 className="p-4 ">Contacts</l1>

            </ul>
        </div>
    </div>
  )
}

export default Navbar
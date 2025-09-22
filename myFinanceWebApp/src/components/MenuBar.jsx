import React, { useContext, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../Context/AppContext';
import { Menu, X } from 'lucide-react';

function MenuBar() {
    const[openSidebar,setOpenSidebar]=useState(false)
    const[showDropdown,setShowDropdown]=useState(false)
    const dropdownRef = useRef(null) // This is the corrected line
    const navigate = useNavigate();
    const {user} = useContext(AppContext)

    return (
        <div className='flex itam-center justify-between gap-5 bg-white border border-b border-graey-200/5'>
            {/* Left Section -Menu button and tittle  */}
            <div className="flex item-center gap-5">
                <button 
                onClick={()=>setOpenSidebar(!openSidebar)}
                className='block lg:hidden text-2xl p-2 hover:bg-gray-100  rounded-md'>
                    {openSidebar ? <X className='text-black text-2xl'/> : <Menu className='text-black text-2xl'/>}
                </button>
            </div>
            {/*Right side -Avatar photo*/}
            <span> right side -Menu button and tittle</span>
            {/*Mobile side Menu*/}
            <span> Left side -Menu button and tittle</span>
        </div>
    )
}

export default MenuBar
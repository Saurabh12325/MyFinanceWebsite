import React, { useContext, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../Context/AppContext';

function MenuBar() {
    const[openSidebar,setOpenSidebar]=useState(false)
    const[showDropdown,setShowDropdown]=useState(false)
    const dropdownRef = useRef(null) // This is the corrected line
    const navigate = useNavigate();
    const {user} = useContext(AppContext)

    return (
        <div className='flex itam-center justify-between gap-5 bg-white border border-b border-graey-200/5'>
            {/* Left Section -Menu button and tittle  */}
            <span> Left side -Menu button and tittle</span>
            {/*Right side -Avatar photo*/}
            <span> right side -Menu button and tittle</span>
            {/*Mobile side Menu*/}
            <span> Left side -Menu button and tittle</span>
        </div>
    )
}

export default MenuBar
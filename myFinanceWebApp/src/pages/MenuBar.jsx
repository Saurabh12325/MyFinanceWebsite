import { User } from 'lucide-react';
import React, { useContext, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../Context/AppContext';

function MenuBar() {
    const[showDropdown,setShowDropdown]=useState(false)
    const[dropdownRef] = useRef(null)
     const navigate = useNavigate();
    //  {User} = useContext(AppContext)
    return (
        <div></div>
    )
}

export default MenuBar

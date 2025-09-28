import React, { useContext, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../Context/AppContext';
import { LogOutIcon, Menu, Sidebar, User, User2, User2Icon, X } from 'lucide-react';
import { assets } from '../assets/asset';
import SideBar from './SideBar';

function MenuBar() {
    const[openSidebar,setOpenSidebar]=useState(false)
    const[showDropdown,setShowDropdown]=useState(false)
    const dropdownRef = useRef(null) // 
    const navigate = useNavigate();
    const {user ,clearUser} = useContext(AppContext)

    const handleLogout = () => {
         localStorage.clear();
         clearUser;
         setShowDropdown(false)
        navigate("/login")
     
        
    }

    return (
        <div className='flex item-center justify-between gap-5  bg-gradient-to-r from-black/5 via-black/5 to-emerald-500 border border-b border-graey-200/5'>
            {/* Left Section -Menu button and tittle  */}
            <div className="flex item-center gap-5">
                <button 
                onClick={()=>setOpenSidebar(!openSidebar)}
                className='block lg:hidden text-2xl p-2 hover:bg-gray-100  rounded-md'>
                    {openSidebar ? <X className='text-black text-2xl'/> 
                    : <Menu className='text-black text-2xl'/>}
                </button>
                <div className='flex items-center gap-2'>
                    <img src={assets.ss} alt="logo"  className='h-10 w-10'/>
                    <span className='text-xl font-medium text-black'>MyFinance</span>
                </div>
            </div>
            {/*Right side -Avatar photo*/}
           <div className='relative' ref={dropdownRef}>
              <button
              onMouseEnter={()=>setShowDropdown(!showDropdown)}
               className='flex item-center justify-center w-10 cursor-pointer h-10 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-purple-500  focus:ring-offset-2'>
               <User className='text-purple-500'/>
         </button>
            {showDropdown && (
                  <div>
                <div className='absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border-gray-200 py-1 z-50'>
                   <div className='px-4 py-3 border-b border-gray-100'>
                    <div className='flex items-center gap-3'>
                        <div className='flex items-center justify-center w-8 h-8 bg-gray-100 rounded-full'>
                            <User className='w-4 h-4 text-purple-600' />

                        </div>
                        
                       <div className='flex-1 min-w-0'>
                        <p className='text-sm font-medium text-gray-800 truncate'>{user.fullName}</p>
                        <p className='text-sm font-medium text-gray-800 truncate'>{user.email}</p>
                       </div> 
                    </div>
                   </div>
                     
                       {/* drop down options */}
                  <div className='py-1'>
                     <button 
                    onClick={handleLogout}
                     className='flex items-center gap-3 w-half p-4 cursor-pointer '>
                        <LogOutIcon className='text-red-600 hover:text-black'/>
                        <span>Logout</span>
                     </button>
                    
                  </div>
                </div>
                 
                </div>
               
         
               
            )}

           </div>
            {openSidebar && (
               <div className="fixed left-0  bg-white border-b border-gray-200 lg:hidden  top-[48px] z-30">
                 <SideBar/>
               </div>
              
            )}
        </div>
    )
}

export default MenuBar
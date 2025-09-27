import React, { useContext } from 'react'
import { AppContext } from '../Context/AppContext'
import { User } from 'lucide-react'

function SideBar() {
    const {user} = useContext(AppContext)
    return (
        <div className='w-64 h-[calc(100vh-64px)] backdrop-blur-2xl bg-black/7 border-gray-200 sticky p-5 top-[64px]'> 
           <div className='flex flex-col items-center justify-center gap-3 mt-3 mb-7  '>
               {user?.ProfileImageUrl ? (
                <img src={user?.ProfileImageUrl || ""} alt="profileimage" className='w-15 h-15 '/>
               ):(
                <User className=' w-15 h-15 text-purple-500 '/>
               )}
               <h5 className='font-stretch-40%'>Welcome {user.fullName || ""}</h5>
           </div>
        </div>
    )
}

export default SideBar

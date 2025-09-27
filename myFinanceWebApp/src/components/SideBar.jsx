import React, { useContext } from 'react'
import { AppContext } from '../Context/AppContext'
import { User } from 'lucide-react'
import { SIDE_BAR_DATA } from '../assets/SideBar'
import { useNavigate } from 'react-router-dom'

function SideBar() {
    const {user} = useContext(AppContext)
    const navigate = useNavigate()
    return (
        <div className='w-64 h-[calc(100vh-64px)] backdrop-blur-xl bg-black/2 border-gray-200 sticky p-5 top-[64px]'> 
           <div className='flex flex-col items-center justify-center gap-3 mt-3 mb-7  '>
               {user?.ProfileImageUrl ? (
                <img src={user?.ProfileImageUrl || ""} alt="profileimage" className='w-15 h-15 '/>
               ):(
                <User className=' w-15 h-15 text-purple-500 '/>
               )}
               <h5 className='font-stretch-40%'>Welcome {user.fullName || ""}</h5>
           </div>
           {SIDE_BAR_DATA.map((item,index)=>(
             <button
             onClick={()=>navigate(item.path)}
               key={`menu_${index}`}
               className='w-full flex items-center gap-4 text-[15px] py-3 px-6 rounded-lg mb-3 cursor-pointer '>
                 <item.icon className='text-xl'/>
                 {item.label}
               
             </button>
           ))}
        </div>
    )
}

export default SideBar

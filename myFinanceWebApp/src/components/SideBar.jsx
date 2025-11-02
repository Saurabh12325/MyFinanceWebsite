import React, { useContext } from 'react'
import { AppContext } from '../Context/AppContext'
import { User } from 'lucide-react'
import { SIDE_BAR_DATA } from '../assets/SideBar'
import { useNavigate } from 'react-router-dom'

function SideBar({activeMenu}) {
    const {user} = useContext(AppContext)
    const navigate = useNavigate()
    return (
        <div className='w-64 max-md:w-50 h-[calc(100vh-90px)] backdrop-blur-xl bg-gradient-to-b from-white  via-black/5 to-emerald-400 border-gray-200 sticky p-5 top-[64px]'> 
           <div className='flex flex-col items-center justify-center gap-3 mt-3 mb-7  '>
               {user?.ProfileImageUrl ? (
                <img src={user?.ProfileImageUrl || ""} alt="profileimage" className='w-15 h-15 '/>
               ):(
                <User className=' w-15 h-15 text-emerald-500 '/>
               )}
               <h5 className='font-sans font-extrabold'>Welcome {user.fullName || ""}</h5>
           </div>
           {SIDE_BAR_DATA.map((item,index)=>(
             <button
             onClick={()=>navigate(item.path)}
               key={`menu_${index}`}
               className={`w-full flex items-center gap-4 text-[15px] py-3 px-6 rounded-lg mb-3 cursor-pointer font-bold ${activeMenu == item.label? "text-white bg-emerald-500 ": ""}`}>
                 <item.icon className='text-xl font-bold'/>
                 {item.label}
               
             </button>
           ))}
        </div>
    )
}

export default SideBar

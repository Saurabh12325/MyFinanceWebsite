import React from 'react'
import { assets } from '../assets/asset'
import {motion} from 'framer-motion'
function SplashScreen() {
    return (
        <div className='min-h-screen w-full  bg-gradient-to-t from-emerald-400 via-black to-black flex justify-center items-center '>
            <motion.img 
             className=' object-contain '
             src={assets.Splash} 
             alt="Splash"
             initial={{ scale: 0 }}
             animate={{ rotate: 360, scale: 1.5 }}
             transition={{duration: 4, ease: 'easeInOut'}}

             />
        
           
        </div>

// fgd

    )
}

export default SplashScreen

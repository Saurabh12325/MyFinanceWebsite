import React from 'react'
import { assets } from '../assets/asset.js'
import {motion} from 'framer-motion'
function SplashScreen() {
    return (
        <div className='min-h-screen w-full  bg-gradient-to-t from-emerald-400 via-black to-black flex justify-center items-center '>
            <motion.img 
             className=' object-contain '
             src={assets.ss}
             alt="Splash"
             initial={{ scale: 0 }}
             animate={{ rotate: 360, scale: 2 }}
             transition={{duration: 2, ease: 'easeInOut'}}

             />
        
           
        </div>



    )
}

export default SplashScreen

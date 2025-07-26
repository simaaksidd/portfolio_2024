"use client"

import Navbar from "./navbar"
import { AnimatePresence, motion } from "framer-motion"
import { usePathname } from "next/navigation"
import { useState, useEffect } from "react"

const TransitionProvider = ({ children }) => {
    const OriginalPathName = usePathname()
    const [showText, setShowText] = useState(true)
    
    let pathName;
    if (OriginalPathName === '/') {
        pathName = 'Welcome';
      } else {
        pathName = OriginalPathName.substring(1)
        pathName = pathName.charAt(0).toUpperCase() + pathName.substring(1)
    }

    useEffect(() => {
        setShowText(true)
    }, [OriginalPathName])

    return (
        <AnimatePresence mode="wait" >
            <div key={pathName} className='w-full h-full bg-gradient-to-b from-gray-100 to-white'>
                <motion.div 
                    className="h-screen w-screen fixed bg-black rounded-b-[100px] z-30"
                    animate={{height: "0vh" }}
                    exit={{height: "140vh" }}
                    transition={{duration:0.5, ease:"easeOut"}}
                />
                {showText && (
                    <motion.div 
                        className="fixed m-auto top-0 bottom-0 left-0 right-0 text-white text-8xl cursor-default z-30 w-fit h-fit"
                        initial={{opacity: 1}}
                        animate={{opacity: 0 }}
                        exit={{ opacity: 0 }}
                        transition={{duration:0.8, ease:"easeOut"}}
                        onAnimationComplete={() => setShowText(false)}
                    >
                        {pathName}
                    </motion.div>
                )}
                <motion.div 
                    className="h-screen w-screen fixed bg-black rounded-t-[100px] bottom-0 z-20"
                    initial={{height:"140vh"}}
                    animate={{height:"0vh", transition:{delay:0.5}}}
                />
                <header className="fixed left-0 right-0 z-50 py-5">
                    <Navbar />
                </header>
                <div className="h-[calc(100vh-6rem)]">{children}</div>
            </div>
        </AnimatePresence>
    )
}

export default TransitionProvider
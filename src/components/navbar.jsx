"use client"
import Link from "next/link";
import { useState, useEffect } from "react";
import NavLink from "./navLink";
import { motion, AnimatePresence } from "framer-motion";

const links = [
    {url: "#home", title: "Home", id: "home"},
    {url: "#portfolio", title: "Portfolio", id: "portfolio"},
    {url: "#contact", title: "Contact", id: "contact"},
];

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const [isNavVisible, setIsNavVisible] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            setIsNavVisible(false);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const topVariants={
        closed:{
            rotate:0,
        },
        opened:{
            rotate:45,
            backgroundColor:"rgb(255,255,255)"
        },
    };

    const centerVariants={
        closed:{
            opacity:1,
        },
        opened:{
            opacity:0,
        },
    };

    const bottomVariants={
        closed:{
            rotate:0,
        },
        opened: {
            rotate:-45,
            backgroundColor:"rgb(255,255,255)",
        },
    };

    const listVariants={
        closed:{
            x:"100vw"
        },
        opened:{
            x: 0,
            transition:{
                when:"beforeChildren",
                staggerChildren:0.2,
            },
        },
    };
    
    const listitemvariants={
        closed:{
            x:-10,
            opacity:0,
        },
        opened: {
            x:0,
            opacity:1,
            z:40
        },
    };

    const navbarVariants = {
        hidden: {
            y: -100,
            opacity: 0,
        },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                type: "spring",
                stiffness: 300,
                damping: 30,
            }
        }
    };
    
    return (
        <>
            {/* Hover detection area */}
            <div 
                className="fixed top-0 left-0 right-0 h-10 z-10"
                onMouseEnter={() => setIsNavVisible(true)}
            />

            {/* Navbar */}
            <AnimatePresence>
                {isNavVisible && (
                    <motion.nav
                        variants={navbarVariants}
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                        className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-md shadow-md z-10"
                        onMouseLeave={() => setIsNavVisible(false)}
                    >
                        <div className='h-20 flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 text-xl'>
                            {/* LINKS */}
                            <div className="hidden md:flex gap-4 w-1/3">
                                {links.map(link=>(
                                    <motion.div 
                                        className="text-black hover:bg-black hover:text-white rounded-md" 
                                        key={link.title}
                                        whileHover={{scale: 1.05}}
                                        transition={{type: "spring", stiffness: 500, damping: 20}}
                                    >
                                        <NavLink link={link} key={link.title}/>
                                    </motion.div>
                                ))}
                            </div>
                            
                            {/* LOGO */}
                            <motion.div 
                                className='md:hidden lg:flex xl:w-1/3 xl:justify-center' 
                                whileHover={{scale: 1.1}} 
                                transition={{type: "spring", stiffness: 400, damping: 10}}
                            >
                                <Link href='/' className='text-sm rounded-md p-1 font-semibold flex items-center justify-center'>
                                    <motion.img src="./favicon.ico" alt="" width={24} height={24} />
                                </Link>
                            </motion.div>
                            
                            {/* SOCIAL */}
                            <div className="hidden md:flex gap-10 w-1/3 justify-end">
                                <Link href='https://github.com/simaaksidd' target="_blank">
                                    <motion.img 
                                        src='./github.png' 
                                        alt='' 
                                        width={24} 
                                        height={24} 
                                        whileHover={{scale: 1.1}} 
                                        transition={{type: "spring", stiffness: 400, damping: 10}}
                                    />
                                </Link>
                                <Link href='https://leetcode.com/u/SSiddiqi/' target="_blank">
                                    <motion.img 
                                        src='./leetcode.png' 
                                        alt='' 
                                        width={24} 
                                        height={24} 
                                        whileHover={{scale: 1.1}} 
                                        transition={{type: "spring", stiffness: 400, damping: 10}}
                                    />
                                </Link>
                                <Link href='https://www.linkedin.com/in/simaak-siddiqi/' target="_blank">
                                    <motion.img 
                                        src='./linkedin.png' 
                                        alt='' 
                                        width={24} 
                                        height={24} 
                                        whileHover={{scale: 1.1}} 
                                        transition={{type: "spring", stiffness: 400, damping: 10}}
                                    />
                                </Link>
                                <Link href='https://utaustin.joinhandshake.com/profiles/33478953' target="_blank">
                                    <motion.img 
                                        src='./handshake.png' 
                                        alt='' 
                                        width={24} 
                                        height={24} 
                                        whileHover={{scale: 1.1}} 
                                        transition={{type: "spring", stiffness: 400, damping: 10}}
                                    />
                                </Link>
                            </div>
                            
                            {/* RESPONSIVE MENU */}
                            <div className='md:hidden'>
                                {/*MENU BUTTON */}
                                <button 
                                    className="w-10 h-8 flex flex-col justify-between z-50 relative" 
                                    onClick={() => setOpen((prev) => !prev)}
                                >
                                    <motion.div 
                                        variants={topVariants} 
                                        animate={open ? "opened" : "closed"} 
                                        className="w-10 h-1 bg-black rounded origin-left"
                                    />
                                    <motion.div 
                                        variants={centerVariants} 
                                        animate={open ? "opened" : "closed"} 
                                        className="w-10 h-1 bg-black rounded"
                                    />
                                    <motion.div 
                                        variants={bottomVariants} 
                                        animate={open ? "opened" : "closed"} 
                                        className="w-10 h-1 bg-black rounded origin-left"
                                    />
                                </button>
                            </div>
                        </div>
                    </motion.nav>
                )}
            </AnimatePresence>

            {/* RESPONSIVE MENU LIST */}
            {open && (
                <motion.div 
                    variants={listVariants} 
                    initial="closed" 
                    animate="opened" 
                    className="fixed top-0 left-0 w-screen h-screen bg-black text-white flex flex-col items-center justify-center gap-8 text-4xl z-40"
                >
                    {links.map((link) => (
                        <motion.div 
                            variants={listitemvariants} 
                            className=""  
                            key={link.title} 
                            onClick={() => setOpen(false)}
                        >
                            <NavLink link={link}>
                                {link.title}
                            </NavLink>
                        </motion.div>
                    ))}
                </motion.div>
            )}
        </>
    )
}

export default Navbar
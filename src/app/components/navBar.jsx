"use client";
import React, {useState} from 'react'
import Link from 'next/link'
import NavLinks from './navLinks'
import {Bars3Icon, XMarkIcon} from "@heroicons/react/24/solid"
import MenuOverlay from './menuOverlay';

const navListOfLinks = [
    {
        title: "About",
        path: "#about"
    },
    {
        title: "Projects",
        path: "#projects"
    },
    {
        title: "Contact",
        path: "#path"
    }
]

const NavBar = () => {
    const [navBarOpen, setNavBarOpen] = useState(false)
    return (
        <nav className='fixed top-0 left-0 mx-auto border border-primary-700 right-0 z-10 bg-[#121212] bg-opacity-100'>
            <div className='flex container lg:py-4 flex-wrap items-center justify-between mx-auto px-4 py-2'>
                <Link href={"/"} className='text-white text-2xl md:text-3xl font-semibold'>LOGO</Link>
                <div className='mobile-menu block md:hidden'>
                    {
                        !navBarOpen ? (<button onClick={() => setNavBarOpen(true)} className='flex items-center px-3 py-2 border rounded border-x-slate-200 text-slate-200 hover:text-white hover: border-white'><Bars3Icon className='w-5 h-5'/></button>) : 
                        (<button onClick={() => setNavBarOpen(false)} className='flex items-center px-3 py-2 border rounded border-x-slate-200 text-slate-200 hover:text-white hover: border-white'> <XMarkIcon className='w-5 h-5'/> </button>)
                    }
                </div>
                <div className='menu hidden md:block md:w-auto id=navbar'>
                    <ul className='flex p-4 md:flex-row md:space-x-8 mt-0'>
                        {
                            navListOfLinks.map((link, index) =>(
                                <li key={index}>
                                    <NavLinks title={link.title} href={link.path}/>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
            {
                navBarOpen ? <MenuOverlay links={navListOfLinks}/> : null
            }
        </nav>
    )
}

export default NavBar
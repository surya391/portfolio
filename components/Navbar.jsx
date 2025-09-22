"use client"
import Image from 'next/image'
import Link from 'next/link'
import { assets } from '@/assets/assets'
import React,{ useRef } from 'react'
{/*39:16*/}

const Navbar = () => {
  const sizeMenuRef = useRef();
  const openMenu = () =>{
    sizeMenuRef.current.style.transform = "translateX(-16rem)";
  }
   const closeMenu = () =>{
    sizeMenuRef.current.style.transform = "translateX(16rem)";
  }
  return (
    <>
    <div className='fixed top-0 right-0 w-11/2 -z-10 translate-y-[-80%]'>
      <Image src={assets.header_bg_color} alt='' className='w-full'/>
    </div>
    <nav className='w-full fixed top-0 left-0 px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50  '>
      <Link href="#top">
        <Image 
          src={assets.logo} 
          className='w-28 cursor-pointer mr-14' 
          alt="Website Logo" 
        />
      </Link>

      <ul className='hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 text-gray-700 font-medium bg-white shadow-md bg-opacity-50'>
        <li><Link className='font-Ovo' href="#top">Home</Link></li>
        <li><Link className='font-Ovo' href="#about">About me</Link></li>
        <li><Link  className='font-Ovo' href="#services">Services</Link></li>
        <li><Link  className='font-Ovo' href="#work">My Work</Link></li>
        <li><Link className='font-Ovo' href="#contact">Contact me</Link></li>
      </ul>

      <div className='flex items-center gap-4'>
        <button><Image src={assets.moon_icon} alt='' className='w-6'/></button>
        <Link 
          href="#contact" 
          className='hidden lg:flex items-center py-2.5 border border-gray-500 rounded-full ml-4 gap-3 px-10 hover:bg-gray-100 transition font-Ovo'
        >
          Contact 
          <Image 
            src={assets.arrow_icon} 
            alt="Arrow icon" 
            className='w-3' 
          />
        </Link>
        <button className='block md:hidden ml-3' onClick={openMenu}>
          <Image src={assets.menu_black} alt='' className='w-6'/>
        </button>
      </div>
      {/* Mobile Menu - to be implemented */}
      <ul ref={sizeMenuRef} className='flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 transition duration-500'>
        <div className='absolute top-6 right-6' onClick={closeMenu}>
          <Image src={assets.close_black} alt='' className='w-5 cursore-pointer'/>
        </div>
        <li><Link className='font-Ovo' onClick={closeMenu} href="#top">Home</Link></li>
        <li><Link className='font-Ovo' onClick={closeMenu} href="#about">About me</Link></li>
        <li><Link  className='font-Ovo'onClick={closeMenu} href="#services">Services</Link></li>
        <li><Link  className='font-Ovo'onClick={closeMenu} href="#work">My Work</Link></li>
        <li><Link className='font-Ovo'onClick={closeMenu}  href="#contact">Contact me</Link></li>
      </ul>
    </nav></>
    
  )
}

export default Navbar

"use client";
import React,{useState} from 'react'
import GridContainer from './grid'
import { CgGym } from "react-icons/cg";
import { IoMenuSharp } from "react-icons/io5";
import BannerContat from './banner-header';
import Logo from '../../../public/logo_01.jpg'
import Image from 'next/image';


function Header() {
    let Links =[
        {name:"INÍCIO",link:"#start"},
        {name:"QUEM SOMOS",link:"#about"},
        {name:"SERVIÇOS",link:"#services"},
        {name:"DIFERENCIAIS",link:"#differential"},
      ];
      let [open,setOpen]=useState(false);
    return ( 
      <header className='shadow-md w-full fixed top-0 left-0 z-10'>
      {/* <BannerContat /> */}
      <div className='md:flex items-center justify-between  py-4 md:px-10 px-7'>
      <div className='font-bold text-2xl cursor-pointer flex items-center 
      text-gray-800'>
        <span className='text-3xl  mr-1 '>
        <Image 
        src={Logo}
        alt='logo'
        className='w-16'
        />
        
        </span>
      </div>
      
      <div onClick={()=>setOpen(!open)} className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden'>
      <IoMenuSharp name={open ? 'close':'menu'}></IoMenuSharp>
      </div>
      
      <ul className={`md:flex bg-white  md:items-center gap-5 md:pb-0 pb-12 absolute md:static md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-20 ':'top-[-490px]'}`}>

        {
          Links.map((link)=>(
            <li key={link.name} className='md:ml-8 text-sm font-bold md:my-0 my-7'>
              <a href={link.link} className=' duration-500'>{link.name}</a>
            </li>
          ))
        }
        <button className='py-2 px-2 rounded'>
          <a href='#form'>CONTATO</a>
        </button>
      </ul>
      </div>
      
    </header>
     );
}

export default Header;
"use client";
import React,{useState,useEffect} from 'react'
import GridContainer from './grid'
import { CgGym } from "react-icons/cg";
import { IoMenuSharp } from "react-icons/io5";
import BannerContat from './banner-header';
import Logo from '../../../public/Logo_RC.png'
import Image from 'next/image';


function Header() {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNavbar = () => {
      if (typeof window !== 'undefined') {
          if (window.scrollY > lastScrollY) {
              // se o scroll for para baixo
              setShow(false);
          } else {
              // se o scroll for para cima
              setShow(true);
          }
          // atualiza a posição do scroll
          setLastScrollY(window.scrollY);
      }
  };

  useEffect(() => {
      if (typeof window !== 'undefined') {
          window.addEventListener('scroll', controlNavbar);

          // Limpeza da subscription ao evento
          return () => {
              window.removeEventListener('scroll', controlNavbar);
          };
      }
  }, [lastScrollY]);
    let Links =[
        {name:"Início",link:"#start"},
        {name:"Quem Somos",link:"#about"},
        {name:"Serviços",link:"#services"},
      ];
      let [open,setOpen]=useState(false);
    return ( 
      <header className={' w-full fixed top-0 left-0 z-10 bg-whitergb saturate-150 backdrop-blur-xl transition-all duration-500 ease-in text-[rgba(26, 26, 12, 0.8)]'} >
      <BannerContat />
      <div className='md:flex items-center justify-between  md:px-10 px-7'>
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
      
      <ul className={`md:flex bg-transparent max-md:bg-whitergb md:items-center gap-5 md:pb-0 pb-12 absolute md:static md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-20 ':'top-[-490px]'}`} >

        {
          Links.map((link)=>(
            <li key={link.name} className='md:ml-8 text-sm font-bold md:my-0 my-7'>
              <a onClick={()=>setOpen(!open)} href={link.link} className='hover:bg-secondary-400  hover:text-white py-4 px-4 rounded-full duration-500'>{link.name}</a>
            </li>
          ))
        }
        <button className='font-semibold hover:bg-secondary-400 hover:text-white py-4 px-4 rounded-full duration-500'>
          <a href='#form'>Contato</a>
        </button>
      </ul>
      </div>
      
    </header>
     );
}

export default Header;
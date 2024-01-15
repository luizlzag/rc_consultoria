import React from 'react'
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { TbBrandGoogleMaps } from "react-icons/tb";
import { PiInstagramLogoBold, PiFacebookLogoBold, PiLinkedinLogoBold } from "react-icons/pi";

function Footer() {
    return (
         <footer className='bottom-0 py-4 px-4 bg-primary-100 text-center h-[160%] '>
            <div className=' flex justify-between  cursor-pointer '>
               <div className='grid gap-4 mb-6'>
                  <h1 className='text-white text-left text-2xl'>Contatos</h1>
                  <div className='text-left'>
                        <a className='text-white text-sm flex items-centert  gap-1'> <BsFillTelephoneFill />(17) 99171-7370</a>
                     </div>
                     <div >
                        <a className='text-white text-sm flex items-center  gap-1'><MdEmail />contato@rcconsultoriatributaria.com.br</a>
                     </div>
                     <div>
                        <a className='text-white text-sm flex items-center  gap-1'><TbBrandGoogleMaps />Av. Anísio Haddad, 6.900 | Sala 05 | S. J. Rio Preto - SP</a>
                     </div>
               </div>
               <div className=' gap-4'>
                        <p className='hover:bg-blue-900 py-2 px-2 rounded-full'><PiInstagramLogoBold size={36} color={'white'}/></p>
                        <p className='hover:bg-blue-900 py-2 px-2 rounded-full'><PiFacebookLogoBold size={36} color={'white'}/></p>
                        <p className='hover:bg-blue-900 py-2 px-2 rounded-full'><PiLinkedinLogoBold size={36} color={'white'}/></p>
               </div>
            </div>
            <div className='pt-2 flex justify-around items-center gap-6'>
            <button className='rounded text-secondary-400 py-2 px-2 font-semibold opacity-50 hover:opacity-100  hover:-mt-2 transition-all duration-200'>Entre em contato</button>
               <h1 className='text-secondary-400'>Copyright © 2023 RC Consultoria. Todos os direitos reservados.</h1>
               <button className='py-2 px-2 rounded text-white opacity-30 hover:opacity-100 hover:-mt-2 transition-all duration-200'>Desenvolvido por Luiz Sanches</button>
            </div>
         </footer>
        );
}

export default Footer;
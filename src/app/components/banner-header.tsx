import React,{useState} from 'react'
import { PiInstagramLogoBold,PiFacebookLogoBold,PiLinkedinLogoBold } from "react-icons/pi";
import GridContainer from './grid';

function BannerContat() {

    
    return (
         <section className='cursor-pointer relative bg-blue-900  max-md:hidden '>
            <GridContainer className='flex justify-around items-center '>
                <div>
                    <a className='text-white'>(17) 99171-7370</a>
                </div>
                <div >
                    <a className='text-white'>contato@rcconsultoriatributaria.com.br</a>
                </div>
                <div>
                    <a className='text-white'>Av. Anísio Haddad, 6.900 | Sala 05 | S. J. Rio Preto - SP</a>
                </div>
                <div className='flex gap-2'>
                    <PiInstagramLogoBold size={18} color={'white'}/>
                    <PiFacebookLogoBold size={18} color={'white'}/>
                    <PiLinkedinLogoBold size={18} color={'white'}/>
                </div>
                <div>
                    
                </div>
            </GridContainer>
         </section> 

         );
}

export default BannerContat;
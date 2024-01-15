import React, { useEffect, useState } from 'react';
import { PiInstagramLogoBold, PiFacebookLogoBold, PiLinkedinLogoBold } from "react-icons/pi";
import GridContainer from './grid';
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { TbBrandGoogleMaps } from "react-icons/tb";

function BannerContat() {
    const [show, setShow] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    const controlNavbar = () => {
        if (typeof window !== 'undefined') {
            // Check if the user is at the top of the page
            if (window.scrollY === 0) {
                setShow(true);
            } else {
                setShow(false);
            }
    
            // Update the last scroll position
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

    return (
        <section className={`cursor-pointer relative p-2 bg-primary-100 max-md:hidden transition-all ease-in duration-75 ${show ? 'visible' : 'hidden' }`}>
            <GridContainer className='flex justify-around items-center'>
                <div>
                     <a className='text-white text-sm flex items-center justify-center gap-1'> <BsFillTelephoneFill />(17) 99171-7370</a>
                </div>
                <div >
                    <a className='text-white text-sm flex items-center justify-center gap-1'><MdEmail />contato@rcconsultoriatributaria.com.br</a>
                </div>
                <div>
                    <a className='text-white text-sm flex items-center justify-center gap-1'><TbBrandGoogleMaps />Av. Anísio Haddad, 6.900 | Sala 05 | S. J. Rio Preto - SP</a>
                </div>
                <div className='flex gap-4'>
                    <p className='hover:bg-blue-900 py-2 px-2 rounded-full'><PiInstagramLogoBold size={18} color={'white'}/></p>
                    <p className='hover:bg-blue-900 py-2 px-2 rounded-full'><PiFacebookLogoBold size={18} color={'white'}/></p>
                    <p className='hover:bg-blue-900 py-2 px-2 rounded-full'><PiLinkedinLogoBold size={18} color={'white'}/></p>
                </div>
                <div>
                    
                </div>
            </GridContainer>
         </section> 

         );
}

export default BannerContat;
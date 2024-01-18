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
                     <a href='https://api.whatsapp.com/send?phone=5517991717370&text=Ol%C3%A1,%20gostaria%20de%20entender%20melhor%20' target='_blank' className='text-white text-sm flex items-center justify-center gap-1'> <BsFillTelephoneFill />(17) 99171-7370</a>
                </div>
                <div >
                    <a href='mailto:contato@rcconsultoriatributaria.com.br' target='_blank' className='text-white text-sm flex items-center justify-center gap-1'><MdEmail />contato@rcconsultoriatributaria.com.br</a>
                </div>
                <div>
                    <a href='https://maps.app.goo.gl/7xxt2a4ykWH5ehEAA' target='_blank' className='text-white text-sm flex items-center justify-center gap-1'><TbBrandGoogleMaps />Av. Anísio Haddad, 6.900 | Sala 05 | S. J. Rio Preto - SP</a>
                </div>
                <div className='flex gap-4'>
                    <a href='https://www.instagram.com/rctributaria/?hl=fr' target='_blank' className='hover:bg-blue-900 py-2 px-2 rounded-full'><PiInstagramLogoBold size={18} color={'white'}/></a>
                    <a href='https://www.facebook.com/profile.php?id=61550853845754' target='_blank' className='hover:bg-blue-900 py-2 px-2 rounded-full'><PiFacebookLogoBold size={18} color={'white'}/></a>
                    <a href='https://www.linkedin.com/company/rc-consultoria-tribut%C3%A1ria/' target='_blank' className='hover:bg-blue-900 py-2 px-2 rounded-full'><PiLinkedinLogoBold size={18} color={'white'}/></a>
                </div>
                <div>
                    
                </div>
            </GridContainer>
         </section> 

         );
}

export default BannerContat;
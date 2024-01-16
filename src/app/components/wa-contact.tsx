"use client";
import React from 'react'
import { FaWhatsapp } from "react-icons/fa";
import wpp from '../../../public/whatsapp.gif'
import Image from 'next/image';

function WaContact() {
    return ( 
        <footer className='fixed bottom-3 right-4 cursor-pointer z-10'>
            <a href='https://api.whatsapp.com/send?phone=5517991717370&text=Ol%C3%A1,%20gostaria%20de%20entender%20melhor%20' target='_blank'>
            <Image src={require('../../../public/whatsapp.gif')} alt="loading..." width={48} />
            </a>
        </footer>
     );
}

export default WaContact;
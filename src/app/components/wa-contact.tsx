"use client";
import React from 'react'
import { FaWhatsapp } from "react-icons/fa";
import wpp from '../../../public/whatsapp.gif'
import Image from 'next/image';

function WaContact() {
    return ( 
        <footer className='fixed bottom-3 right-4 cursor-pointer z-10'>
            <Image src={require('../../../public/whatsapp.gif')} alt="loading..." />
        </footer>
     );
}

export default WaContact;
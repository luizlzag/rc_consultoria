import React from 'react'
import { FaWhatsapp } from "react-icons/fa";
import wpp from '../../../public/whatsapp.svg'
import Image from 'next/image';

function WaContact() {
    return ( 
        <footer className='fixed bottom-3 right-5 cursor-pointer z-10'>
            <Image 
            src={wpp}
            alt='wpp'/>
        </footer>
     );
}

export default WaContact;
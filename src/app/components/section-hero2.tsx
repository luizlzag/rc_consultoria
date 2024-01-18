"use client";
import React from 'react'
import GridContainer from './grid';


const sectionStyle = {
    width: '100%',
    marginTop: '10px',
    backgroundImage: 'url(/banner-logo-04.jpg)', // Caminho direto a partir da pasta public
    backgroundSize: 'cover',
    backgroundPosition: 'center',
};

function SectionHero2() {


    return ( 
        <section className='pt-20 h-screen bg-fixed bg-banner2 bg-cover ' id='start'>
            <GridContainer>
                    <div className='pt-32  text-white'>
                        <h1 className='text-5xl font-extrabold w-[60%] max-sm:w-[85%] mb-5 text-white max-md:text-xl'>Somos a solução financeira para sua empresa crescer</h1>
                        <div className='bg-secondary-400 rounded-full py-2 px-4 w-32 mb-10'/>
                        <p className='mb-5 text-3xl max-md:text-lg w-[46%] max-md:w-[70%]'>Nós somos especialistas em Recuperação Tributária</p>
                        <div className='flex gap-4'>
                            <button className='rounded px-8 py-4 bg-primary-100 hover:brightness-90'>Fale Conosco</button>
                        </div>
                    </div>
            </GridContainer>
        </section>
     );
}

export default SectionHero2;
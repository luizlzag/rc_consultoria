/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import GridContainer from './grid';
import Image from 'next/image';
import about from '../../../public/file.png'


function SectionAbout() {
    return ( 
        <section id="about" className='pt-20 w-full my-4'>
            <GridContainer className='flex max-md:grid items-center '>
                <div className=' rounded py-4 px-4 flex justify-around max-md:grid'>
                    <div>
                        <h1 className='text-primary-100 font-semibold mb-4 text-2xl'>QUEM SOMOS<div className='bg-secondary-400 rounded-full py-1 px-4 w-24'/></h1>
                        <div className=' grid grid-cols-1 gap-8 font-semibold text-primary-100'>
                            <p>Somos uma empresa de inteligência tributária, com objetivo de trazer aos nossos parceiros resultados eficientes e ser referência em todo Brasil.</p>
                            <p>Focamos em resultados que podem ajudar sua empresa a crescer.</p>
                            <p>Trabalhamos para identificar e criar soluções legais de recuperação de crédios e soluções eficientes para redução de custos tributários</p>
                        </div>
                    </div>
                    <Image
                        src={about}
                        alt='about'
                        width={495}
                        className='max-md:w-[400]'
                        />
                </div>
            </GridContainer>
        </section>
     );
}

export default SectionAbout;
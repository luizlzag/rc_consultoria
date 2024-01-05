import React from 'react'
import GridContainer from './grid';
import Image from 'next/image';
import About from '../../../public/whoAreWe.jpg'


function SectionAbout() {
    return ( 
        <section id="about" className='pt-6 w-full my-4'>
            <GridContainer className='flex gap-6 max-md:grid items-center '>
                <div className='w-[80%] max-md:w-[100%]'>
                    <p className='text-xl max-md:text-base'>Somos uma empresa de <span className='font-semibold'>inteligência tributária</span>, com objetivo de trazer aos nossos parceiros resultados eficientes e ser referência em todo Brasil. <br/>
                        <br/> <span className='font-semibold'>Focamos em resultados</span> que podem ajudar sua empresa a crescer. 
                        <br/><br/>Trabalhamos para identificar e criar soluções legais de recuperação de créditos e soluções eficientes para <span className='font-semibold'>redução de custos tributários.</span></p>
                </div>
                <div className='w-[50%] '>
                    <Image
                    src={About}
                    alt='logo'
                    className='rounded-md '
                    />
                </div>
            </GridContainer>
        </section>
     );
}

export default SectionAbout;
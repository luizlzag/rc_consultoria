import React from 'react'
import GridContainer from './grid';
import consultor from '../../../public/consultor.png'
import Image from 'next/image';

function SectionHelp() {
    return ( 
    <section className='bg-secondary-400'>
        <GridContainer className='flex justify-between items-center max-md:p-1 p-4  gap-6'>
           <div className='flex items-center gap-4'>
                <Image 
                src={consultor}
                alt='consultor'
                className='rounded-full flex  w-20 max-md:h-16'
                />
                <div>
                    <h2 className='text-white text-2xl max-md:text-base'>PRECISA DE AJUDA?</h2>
                    <h1 className='text-blue-950 text-4xl font-bold max-md:text-base'>Fale com nossos especialistas</h1>
                </div>
          </div>
            <div >
                <button className='rounded-md py-6 px-4 max-md:py-2 max-md:px-4 bg-white hover:animate-pulse hover:bg-white'>Chamar agora</button>
            </div>
        </GridContainer>
    </section> 
    );
}

export default SectionHelp;
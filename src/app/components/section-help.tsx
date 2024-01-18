import React from 'react'
import GridContainer from './grid';
import consultor from '../../../public/consultor.png'
import Image from 'next/image';

function SectionHelp() {
    return ( 
    <section>
        <GridContainer>
            <div className='bg-primary-100 max-md:grid py-10 px-10 max-md:py-2 max-md:px-2 rounded shadow-lg flex items-center  justify-evenly'>
                <div className='flex gap-10 max-sm:gap-1 items-center max-md:mb-2'>
                    <Image
                    src={consultor}
                    alt='consultor'
                    width={100}
                    className='max-md:w-[50px]'
                    />
                    <div className='text-white text-2xl max-md:text-sm'>
                        <h1 className='font-bold'>PRECISA DE AJUDA ? </h1>
                        <h2 className='font-light'>Fale com nossos especialistas</h2>
                    </div>
                </div>
                <div>
                    <a href='https://api.whatsapp.com/send?phone=5517991717370&text=Ol%C3%A1,%20gostaria%20de%20entender%20melhor%20' target='_blank' className='rounded bg-secondary-400 py-6 px-6 max-md:py-1 max-md:ml-[3.75rem] max-md:px-1 max-md:font-semibold font-semibold animate-pulse'>CHAMAR AGORA !</a>
                </div>
            </div>
        </GridContainer>
    </section> 
    );
}

export default SectionHelp;
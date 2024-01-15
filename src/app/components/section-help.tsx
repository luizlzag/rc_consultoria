import React from 'react'
import GridContainer from './grid';
import consultor from '../../../public/consultor.png'
import Image from 'next/image';

function SectionHelp() {
    return ( 
    <section>
        <GridContainer>
            <div className='bg-primary-100 py-10 px-10 rounded shadow-lg flex items-center  justify-evenly'>
                <div className='flex gap-10 items-center'>
                    <Image
                    src={consultor}
                    alt='consultor'
                    width={100}
                    />
                    <div className='text-white text-2xl'>
                        <h1 className='font-bold'>PRECISA DE AJUDA ? </h1>
                        <h2 className='font-light'>Fale com nossos especialistas</h2>
                    </div>
                </div>
                <div>
                    <button className='rounded bg-secondary-400 py-6 px-6 font-semibold animate-pulse'>CHAMAR AGORA !</button>
                </div>
            </div>
        </GridContainer>
    </section> 
    );
}

export default SectionHelp;
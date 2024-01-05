import React from 'react'
import GridContainer from './grid';
import Image from 'next/image';

import FASE01 from '../../../public/FASE01.png'
import FASE02 from '../../../public/FASE02.png'
import FASE03 from '../../../public/FASE03.png'
import FASE04 from '../../../public/FASE04.png'
import FASE05 from '../../../public/FASE05.png'
import FASE06 from '../../../public/FASE06.png'


function SectionSteps() {
    return ( 
        <section className='bg-white'>
            <GridContainer className='pt-20'>
                <div className='mb-4'>
                    <span className='text-2xl font-bold'>ENTENDA COMO FUNCIONA</span>
                    <h1 className='text-2xl font-semibold'>As etapas do projeto</h1>
                </div>
                <div className='grid grid-cols-3 gap-4 text-center max-md:grid-cols-2'>
                        <Image
                        src={FASE01}
                        alt='fase01'/>
                        <Image
                        src={FASE02}
                        alt='fase01'/>
                        <Image
                        src={FASE03}
                        alt='fase01'/>
                        <Image
                        src={FASE04}
                        alt='fase01'/>
                        <Image
                        src={FASE05}
                        alt='fase01'/>
                        <Image
                        src={FASE06}
                        alt='fase01'/>
                </div>
            </GridContainer>
        </section>
     );
}

export default SectionSteps;
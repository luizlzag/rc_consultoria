import React from 'react'
import GridContainer from './grid';
import LogoRc from '../../../public/logo-rc.png'
import Image from 'next/image';

function SectionDiferential() {
    const sectionStyle = {
        width: '100%',
        marginTop: '10px',
        backgroundImage: 'url(/banner-logo-04.jpg)', // Caminho direto a partir da pasta public
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    };
    return ( 
        <section id='differential' className='mb-2 pt-20' style={sectionStyle}>
            <GridContainer>
                <div>
                    <h1 className='text-4xl'>Nossos</h1>
                    <h2 className='text-5xl'>diferenciais</h2>
                </div>
                <div className='flex items-center gap-8 mt-2'>
                    <div className='bg-white rounded-md w-[50%] px-2 pb-1 '>
                        <Image
                        src={LogoRc}
                        alt='LogoRc'/>
                        <h1 className='text-3xl text-primary-500 mb-12'>Trabalhamos para que nossos parceiros obtenham</h1>
                        <h1 className='text-4xl font-semibold'>maior liquidez e uma melhor gestão das questões tributárias.</h1>
                    </div>
                    <div className='text-2xl'>
                        <p className='mb-4'>Contribuindo com a geração de RESULTADOS</p>
                        <p className='mb-4'>Melhorando e gerando fluxo de caixa</p>
                        <p className='mb-4'>Buscando o compliance fiscal</p>
                        <p className='mb-4'>Atuando juntamente com a contabilidade da sua empresa</p>
                        <p className='mb-4'>Transparência</p>
                        <p className='mb-4'>Sigilo nos Dados</p>
                        <p className='mb-4'>Com foco contínuo na Redução da Carga Tributária e Planejamento Tributário para tomadas de decisões</p>
                    </div>
                </div>
            </GridContainer>
        </section>
     );
}

export default SectionDiferential;
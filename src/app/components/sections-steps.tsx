import React from 'react'
import GridContainer from './grid';
import Image from 'next/image';
import { FaFileContract } from "react-icons/fa6";
import steps from '../../../public/steps.jpg'
import { DiGoogleAnalytics } from "react-icons/di";
import { RiGpsFill,RiSlideshowFill   } from "react-icons/ri";
import { HiDocumentCheck } from "react-icons/hi2";
import { FaMoneyBillTrendUp } from "react-icons/fa6";
import { MdNotStarted } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";

function SectionSteps() {
    return ( 
        <section>
            <GridContainer className='pt-20 '>
                <div className='mb-4'>
                    <h1 className='text-2xl font-bold text-primary-100'>ETAPAS DO PROJETO</h1>
                    <div className='bg-secondary-400 rounded-full py-1 px-4 w-32 '/>
                </div>
                <div className='flex gap-6 mb-1'> 
                    <div className='grid grid-cols-2 gap-4 text-center max-md:grid-cols-2 text-primary-100 font-semibold'>
                        <div className='bg-secondary-400 rounded shadow-md py-4 px-4 flex gap-6 items-center'>
                            <FaFileContract size={56} />
                            <div className='text-start'>
                                <h1>Fase 01</h1>
                                <p>Assinatura do contrato e acesso aos dados.</p>
                            </div>
                        </div>
                        <div className='bg-secondary-400 rounded shadow-md py-4 px-4 flex gap-6 items-center'>
                            <DiGoogleAnalytics size={56} />
                            <div className='text-start'>
                                <h1>Fase 02</h1>
                                <p>Análise minunciosa da documentação.</p>
                            </div>
                        </div>
                        <div className='bg-secondary-400 rounded shadow-md py-4 px-4 flex gap-6 items-center'>
                            <RiGpsFill size={56} />
                            <div className='text-start'>
                                <h1>Fase 03</h1>
                                <p>Mapeamento de oportunidades.</p>
                            </div>
                        </div>
                        <div className='bg-secondary-400 rounded shadow-md py-4 px-4 flex gap-6 items-center'>
                            <RiSlideshowFill   size={56} />
                            <div className='text-start'>
                                <h1>Fase 04</h1>
                                <p>Apresentação e aprovação do trabalho pelo cliente.</p>
                            </div>
                        </div>
                        <div className='bg-secondary-400 rounded shadow-md py-4 px-4 flex gap-6 items-center'>
                            <HiDocumentCheck   size={56} />
                            <div className='text-start w-[80%]'>
                                <h1>Fase 05</h1>
                                <p>Retificação dos documentos e envio para os órgãos competentes.</p>
                            </div>
                        </div>
                        <div className='bg-secondary-400 rounded shadow-md py-4 px-4 flex gap-6 items-center'>
                            <FaMoneyBillTrendUp   size={56} />
                            <div className='text-start'>
                                <h1>Fase 06</h1>
                                <p>Restituição/compensação de valores.</p>
                            </div>
                        </div>
                    </div>
                    <Image
                    src={steps}
                    alt='steps'
                    height={500}
                    width={495}
                    />       
                </div>
                    <div className='bg-primary-100  justify-center shadow-md py-2 px-2 flex gap-6 items-center text-secondary-400 cursor-pointer font-bold
                    brightness-75
                    hover:brightness-105
                    transition-all
                    duration-300
                    ease-in
                    '>
                        <FaWhatsapp   size={40} />
                           <div className='text-start'>
                                <a href='https://api.whatsapp.com/send?phone=5517991717370&text=Ol%C3%A1,%20gostaria%20de%20entender%20melhor%20' target='_blank' >Fale agora com nossos especialistas</a>
                             </div>
                    </div>
            </GridContainer>
        </section>
     );
}

export default SectionSteps;
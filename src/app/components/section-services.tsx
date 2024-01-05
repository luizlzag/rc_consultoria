/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import GridContainer from './grid';
import Image from 'next/image';
import services from '../../../public/serviços.png'
import { CiCircleCheck } from "react-icons/ci";

function SectionServices() {
    return ( 
    <section id="services" className='pt-20 bg-white'>
        <GridContainer>
            <div className='text-center mb-10'>
                <h2 className='text-2xl'>"Amamos o que fazemos e executamos com disciplina, determinação e comprometimento. Trabalhamos com prazer e acreditamos na gestão tributária inteligente"</h2>
            </div>
            <div className='flex justify-center items-center gap-5 max-md:grid '>
                <Image
                src={services}
                alt='servicos'
                />
                <ul className='text-2xl max-md:text-lg font-base text-black'>
                    <li className='flex items-center  gap-2 mb-6'><CiCircleCheck size={28} color={'#d4af37'} /> Recuperação Tributária para Pessoas Físicas </li>
                    <li className='flex items-center  gap-2 mb-4'><CiCircleCheck size={28}  color={'#d4af37'}/> Consultoria Tributária e Previdenciária</li>
                    <li className='flex items-center  gap-2 mb-4'><CiCircleCheck size={28}  color={'#d4af37'}/> Recuperação de Créditos Tributários</li>
                    <li className='flex items-center  gap-2 mb-4'><CiCircleCheck size={28}  color={'#d4af37'}/> Resoluções de Problemas Tributários</li>
                    <li className='flex items-center  gap-2 mb-4'><CiCircleCheck size={28}   color={'#d4af37'}/> Revisão de Obrigações Acessórias</li>
                    <li className='flex items-center  gap-2 mb-4'><CiCircleCheck size={28}  color={'#d4af37'}/> Cálculos de Teses Judiciais</li>
                    <li className='flex items-center  gap-2 mb-4'><CiCircleCheck size={28}  color={'#d4af37'}/> Planejamento Tributário</li>
                    <li className='flex items-center gap-2 mb-4'><CiCircleCheck size={28}  color={'#d4af37'}/> Cálculos Trabalhistas</li>
                    <li className='flex items-center  gap-2 mb-4'><CiCircleCheck size={28}  color={'#d4af37'}/> Auditoria Digital</li>
                </ul>
            </div>
        </GridContainer>
    </section> 
    );
}

export default SectionServices;
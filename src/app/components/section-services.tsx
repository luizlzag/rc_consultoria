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
            <div className='text-left mb-10'>
                <h1 className='text-2xl font-bold text-primary-100'>SERVIÇOS</h1>
                <div className='bg-secondary-400 rounded-full py-1 px-4 w-32 '/>
            </div>
            <div className='grid grid-cols-3 justify-center items-center gap-5 max-md:grid text-white '>
                    <div className='flex gap-2 items-center bg-primary-100 py-4 px-4 h-[80] rounded shadow'><CiCircleCheck size={28} color={'#d4af37'} /> Recuperação Tributária</div>
                    <div className='flex gap-2 items-center bg-primary-100 py-4 px-4 h-[80] rounded shadow'><CiCircleCheck size={28}  color={'#d4af37'}/> Consultoria Tributária e Previdenciária</div>
                    <div className='flex gap-2 items-center bg-primary-100 py-4 px-4 rounded shadow'><CiCircleCheck size={28}  color={'#d4af37'}/> Recuperação de Créditos Tributários</div>
                    <div className='flex gap-2 items-center bg-primary-100 py-4 px-4 rounded shadow'><CiCircleCheck size={28}  color={'#d4af37'}/> Resoluções de Problemas Tributários</div>
                    <div className='flex gap-2 items-center bg-primary-100 py-4 px-4 rounded shadow'><CiCircleCheck size={28}   color={'#d4af37'}/> Revisão de Obrigações Acessórias</div>
                    <div className='flex gap-2 items-center bg-primary-100 py-4 px-4 rounded shadow'><CiCircleCheck size={28}  color={'#d4af37'}/> Cálculos de Teses Judiciais</div>
                    <div className='flex gap-2 items-center bg-primary-100 py-4 px-4 rounded shadow'><CiCircleCheck size={28}  color={'#d4af37'}/> Planejamento Tributário</div>
                    <div className='flex gap-2 items-center bg-primary-100 py-4 px-4 rounded shadow'><CiCircleCheck size={28}  color={'#d4af37'}/> Cálculos Trabalhistas</div>
                    <div className='flex gap-2 items-center bg-primary-100 py-4 px-4 rounded shadow'><CiCircleCheck size={28}  color={'#d4af37'}/> Auditoria Digital</div>
            </div>
        </GridContainer>
    </section> 
    );
}

export default SectionServices;
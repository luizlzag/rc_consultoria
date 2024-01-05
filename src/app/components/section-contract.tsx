import React from 'react'
import GridContainer from './grid';
import { FaBook } from "react-icons/fa";
import { CgDanger } from "react-icons/cg";
import { RiFundsBoxLine } from "react-icons/ri";

function SectionWhyContract() {
    return (  
        <section className='bg-white p-2'>
            <GridContainer>
                <div className='pt-20 text-center mb-16'>
                    <h1 className='text-4xl font-bold text-black'>POR QUE VOCÊ DEVE CONTRATAR A <span>RC CONSULTORIA ?</span></h1>
                </div>
                <div className='grid grid-cols-3 gap-4 max-md:grid-cols-1 cursor-default'>
                    <div className='rounded-md bg-blue-900 px-4 py-4 transition-all hover:outline outline-primary-300'>
                        <div className='absolute -mt-14 -ml-7 bg-secondary-500 rounded-full shadow px-4 py-4 -z-0'>
                            <FaBook size={28} color={'white'}/>
                        </div>
                        <h1 className='font-bold'>Conhecimento Técnico</h1>
                        <p>Cada projeto, combinando capacidade técnica e expertise permitindo reduzir significativamente os custos tributários dos nossos clientes. Utilizamos uma metodologia de trabalho e ferramentas de suporte para organizar e dar efetividade ao desenvolvimento dos projetos.</p>
                    </div>
                    <div className='rounded-md bg-blue-900 px-4 py-4 transition-all hover:outline hover:outline-primary-300'>
                        <div className='absolute -mt-14 -ml-7 bg-secondary-500 rounded-full shadow px-4 py-4'>
                            <CgDanger size={28} color={'white'}/>
                        </div>
                        <h1 className='font-bold'>Transparência sobre os créditos levantados e riscos envolvidos</h1>
                        <p>Deixamos claro se há algum risco envolvido na operação, por menor que ele seja. Todo o trabalho executado segue a legislação vigente sempre em conformidade com as normas federais, estaduais e municipais.</p>
                    </div>
                    <div className='rounded-md bg-blue-900 px-4 py-4 transition-all hover:outline hover:outline-primary-300'>
                        <div className='absolute -mt-14 -ml-7 bg-secondary-500 rounded-full shadow px-4 py-4'>
                            <RiFundsBoxLine  size={28} color={'white'}/>
                        </div>
                        <h1 className='font-bold'>Central de resultados</h1>
                        <p>Dependendo do perfil do cliente e do benefício aplicado, é possível disponibilizar administrativamente recursos no caixa da empresa em até 30 dias.</p>
                    </div>
                </div>
            </GridContainer>
        </section>
    );
}

export default SectionWhyContract;
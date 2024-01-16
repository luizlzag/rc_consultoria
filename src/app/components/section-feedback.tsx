import React from 'react'
import GridContainer from './grid';
import ciclano from '../../../public/ciclano.jpg'
import Image from 'next/image';
import { RiChatQuoteFill } from "react-icons/ri";
import { IoIosAddCircleOutline } from "react-icons/io";

function SectionFeedback() {
    return ( 
        <section className='pt-20'>
            <GridContainer className=''>
                <h1 className='text-2xl font-bold text-primary-100'>DEPOIMENTO DOS NOSSOS CLIENTES</h1>
                <div className='bg-secondary-400 rounded-full py-1 px-4 w-32 mb-10'/>
                <div className='grid grid-cols-3 text-white gap-3'>

                   <div className=' bg-primary-100 py-4 px-4 shadow-lg flex  items-center rounded justify-around gap-3'>
                            <div>
                                <div className='absolute -mt-10 -ml-4 bg-primary-100 py-2 px-2 rounded-lg'>
                                    <RiChatQuoteFill size={48} color={'#d4af37'}/>
                               </div>
                                <p className='mb-2 pt-5 text-sm'>Gostaria de expressar minha profunda gratidão e apreço pelos serviços excepcionais prestados pela sua empresa. Desde o início do nosso projeto, a expertise e o profissionalismo demonstrados por toda a equipe da RC Consultoria têm sido fundamentais para o sucesso e o desenvolvimento do nosso negócio.

                                                        A orientação precisa e os conselhos estratégicos em questões tributárias não só nos ajudaram a navegar com segurança pelo complexo sistema tributário brasileiro, mas também contribuíram significativamente para a otimização de nossos recursos financeiros. Sua habilidade em traduzir questões fiscais complexas em estratégias práticas e eficientes foi um diferencial que valorizamos imensamente.

                                                        Além disso, a agilidade e a disponibilidade da equipe em responder às nossas dúvidas e preocupações demonstraram um comprometimento e uma dedicação que excederam nossas expectativas. 

                                </p>
                                <div className='flex justify-around items-center'>
                                    <div>
                                        <h1 className='text-lg font-semibold'>Ciclano de tal</h1>
                                        <h2 className='text-sm '>Diretor executivo / Empredimentos Eirele</h2>
                                        <p>São José do Rio Preto</p>
                                    </div>
                                    <div className='bg-gradient-to-tr from-secondary-400 to-primary-100 p-1 rounded-full '>
                                        <a className='block bg-white p-1 rounded-full transition-all '>
                                            <Image
                                            src={ciclano}
                                            alt='ciclano'
                                            className='w-16 h-16 rounded-full'
                                            />
                                            </a>
                                    </div>
                                </div>                           
                            </div>
                            <div>
                            </div>
                   </div>

                   <div className=' bg-primary-100 py-4 px-4 shadow-lg flex items-center rounded justify-center gap-3 cursor-pointer hover:-m-2 
                   transition-all
                   duration-500
                   ease-out
                   brightness-75
                   hover:brightness-100
                   '>
                            <IoIosAddCircleOutline size={50} />
                            <a href='https://api.whatsapp.com/send?phone=5517991717370&text=Ol%C3%A1,%20gostaria%20de%20entender%20melhor%20' target='_blank'>Este espaço espera por você !</a>
                   </div>
                </div>
            </GridContainer>
        </section>
     );
}

export default SectionFeedback;
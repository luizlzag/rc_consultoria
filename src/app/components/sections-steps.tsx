
"use client";
import React,{useRef,useEffect} from 'react'
import GridContainer from './grid';
import Image from 'next/image';
import { FaFileContract } from "react-icons/fa6";
import steps from '../../../public/steps.jpg'
import { DiGoogleAnalytics } from "react-icons/di";
import { RiGpsFill,RiSlideshowFill   } from "react-icons/ri";
import { HiDocumentCheck } from "react-icons/hi2";
import { FaMoneyBillTrendUp } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import gsap from 'gsap';




function SectionSteps() {
    const card01Ref = useRef(null)
    const card02Ref = useRef(null)
    const card03Ref = useRef(null)
    const card04Ref = useRef(null)
    const card05Ref = useRef(null)
    const card06Ref = useRef(null)
    const sectionRef = useRef(null)
    const section = sectionRef.current;
    
    function animateCards(images:null[] ,position:number){
        gsap.fromTo(images,{
            opacity:0,
            x:position
        },{
            opacity:1,
            x:0,
            duration: 1.0,
            stagger: 0.2,
            ease:'power4.out',
            scrollTrigger:{
                trigger:section,
                start:'54% center'
            }
        })
    }
    useEffect(()=>{
        const section = sectionRef.current;
        const card01 = card01Ref.current;
        const card02 = card02Ref.current;
        const card03 = card03Ref.current;
        const card04 = card04Ref.current;
        const card05 = card05Ref.current;
        const card06 = card06Ref.current;
        const cardleft = [card01,card03,card05]
        const cardright = [card02,card04,card06]

        animateCards(cardleft,-100)
        animateCards(cardright,-100)
    },[])




    return ( 
        <section id='steps' ref={sectionRef}>
            <GridContainer className='pt-20 '>
                <div className='mb-4'>
                    <h1 className='text-2xl font-bold text-primary-100'>ETAPAS DO PROJETO</h1>
                    <div className='bg-secondary-400 rounded-full py-1 px-4 w-32 '/>
                </div>
                <div className='flex gap-6 mb-1 max-md:grid'> 
                    <div className='grid grid-cols-2  gap-4 text-center max-md:grid-cols-1 text-primary-100 font-semibold'>
                        <div className='bg-secondary-400 rounded shadow-md py-4 px-4 flex gap-6 items-center hover:-m-1 transition-all duration-200 ease-in-out opacity-0' ref={card01Ref}>
                            <FaFileContract size={56} />
                            <div className='text-start'>
                                <h1>Fase 01</h1>
                                <p>Assinatura do contrato e acesso aos dados.</p>
                            </div>
                        </div>
                        <div className='bg-secondary-400 rounded shadow-md py-4 px-4 flex gap-6 items-center hover:-m-1 transition-all duration-200 ease-in-out opacity-0' ref={card02Ref}>
                            <DiGoogleAnalytics size={56} />
                            <div className='text-start'>
                                <h1>Fase 02</h1>
                                <p>Análise minunciosa da documentação.</p>
                            </div>
                        </div>
                        <div className='bg-secondary-400 rounded shadow-md py-4 px-4 flex gap-6 items-center hover:-m-1 transition-all duration-200 ease-in-out opacity-0' ref={card03Ref}>
                            <RiGpsFill size={56} />
                            <div className='text-start'>
                                <h1>Fase 03</h1>
                                <p>Mapeamento de oportunidades.</p>
                            </div>
                        </div>
                        <div className='bg-secondary-400 rounded shadow-md py-4 px-4 flex gap-6 items-center hover:-m-1 transition-all duration-200 ease-in-out opacity-0' ref={card04Ref}>
                            <RiSlideshowFill   size={56} />
                            <div className='text-start'>
                                <h1>Fase 04</h1>
                                <p>Apresentação e aprovação do trabalho pelo cliente.</p>
                            </div>
                        </div>
                        <div className='bg-secondary-400 rounded shadow-md py-4 px-4 flex gap-6 items-center hover:-m-1 transition-all duration-200 ease-in-out opacity-0' ref={card05Ref}>
                            <HiDocumentCheck   size={56} />
                            <div className='text-start w-[80%]'>
                                <h1>Fase 05</h1>
                                <p>Retificação dos documentos e envio para os órgãos competentes.</p>
                            </div>
                        </div>
                        <div className='bg-secondary-400 rounded shadow-md py-4 px-4 flex gap-6 items-center hover:-m-1 transition-all duration-200 ease-in-out opacity-0' ref={card06Ref}>
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
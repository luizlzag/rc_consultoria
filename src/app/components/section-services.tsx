/* eslint-disable react/no-unescaped-entities */
"use client";
import React,{useRef,useEffect} from 'react'
import GridContainer from './grid';
import Image from 'next/image';
import services from '../../../public/serviços.png'
import { CiCircleCheck } from "react-icons/ci";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';


function SectionServices() {
    const card01Ref = useRef(null)
    const card02Ref = useRef(null)
    const card03Ref = useRef(null)
    const card04Ref = useRef(null)
    const card05Ref = useRef(null)
    const card06Ref = useRef(null)
    const card07Ref = useRef(null)
    const card08Ref = useRef(null)
    const card09Ref = useRef(null)
    const sectionRef = useRef(null)
    const section = sectionRef.current;

    function animateCards(images:null[],position:number){
        gsap.fromTo(images,{
            opacity:0,
            x:position
        },{
            opacity:1,
            x:0,
            duration: 0.8,
            stagger:0.3,
            scrollTrigger:{
                trigger:section,
                start:'45% center'
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
        const card07 = card07Ref.current;
        const card08 = card08Ref.current;
        const card09 = card09Ref.current;
        const cardleft = [card01,card02,card03,card04]
        const cardright = [card05,card06,card07,card08,card09]

        animateCards(cardleft,50)
        animateCards(cardright,50)
    },[])


    return ( 
    <section id="services" className='pt-20 bg-white' ref={sectionRef}>
        <GridContainer>
            <div className='text-left mb-10'>
                <h1 className='text-2xl font-bold text-primary-100'>SERVIÇOS</h1>
                <div className='bg-secondary-400 rounded-full py-1 px-4 w-32 '/>
            </div>
            <div className='grid grid-cols-3 max-md:grid-cols-1 justify-center items-center gap-5 max-md:grid text-white '>
                    <div ref={card01Ref} className='opacity-0 flex gap-2 items-center bg-primary-100 py-4 px-4 h-[80] rounded shadow'><CiCircleCheck size={28} color={'#d4af37'} /> Recuperação Tributária</div>
                    <div ref={card02Ref} className='opacity-0  flex gap-2 items-center bg-primary-100 py-4 px-4 h-[80] rounded shadow'><CiCircleCheck size={28}  color={'#d4af37'}/> Consultoria Tributária e Previdenciária</div>
                    <div  ref={card03Ref} className='opacity-0 flex gap-2 items-center bg-primary-100 py-4 px-4 rounded shadow'><CiCircleCheck size={28}  color={'#d4af37'}/> Recuperação de Créditos Tributários</div>
                    <div  ref={card04Ref} className='opacity-0 flex gap-2 items-center bg-primary-100 py-4 px-4 rounded shadow'><CiCircleCheck size={28}  color={'#d4af37'}/> Resoluções de Problemas Tributários</div>
                    <div ref={card05Ref} className='opacity-0 flex gap-2 items-center bg-primary-100 py-4 px-4 rounded shadow'><CiCircleCheck size={28}   color={'#d4af37'}/> Revisão de Obrigações Acessórias</div>
                    <div ref={card06Ref} className='opacity-0 flex gap-2 items-center bg-primary-100 py-4 px-4 rounded shadow'><CiCircleCheck size={28}  color={'#d4af37'}/> Cálculos de Teses Judiciais</div>
                    <div ref={card07Ref} className='opacity-0 flex gap-2 items-center bg-primary-100 py-4 px-4 rounded shadow'><CiCircleCheck size={28}  color={'#d4af37'}/> Planejamento Tributário</div>
                    <div ref={card08Ref} className='opacity-0 flex gap-2 items-center bg-primary-100 py-4 px-4 rounded shadow'><CiCircleCheck size={28}  color={'#d4af37'}/> Cálculos Trabalhistas</div>
                    <div ref={card09Ref} className='opacity-0 flex gap-2 items-center bg-primary-100 py-4 px-4 rounded shadow'><CiCircleCheck size={28}  color={'#d4af37'}/> Auditoria Digital</div>
            </div>
        </GridContainer>
    </section> 
    );
}

export default SectionServices;
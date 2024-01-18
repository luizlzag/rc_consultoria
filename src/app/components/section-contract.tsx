"use client";
import React,{useEffect, useRef} from 'react'
import GridContainer from './grid';
import { FaBook } from "react-icons/fa";
import { CgDanger } from "react-icons/cg";
import { RiFundsBoxLine } from "react-icons/ri";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { text } from 'stream/consumers';

gsap.registerPlugin(ScrollTrigger)

function SectionWhyContract() {
    const cardMainRef = useRef(null)
    const titleRef = useRef(null)
    const card01Ref = useRef(null)
    const card02Ref = useRef(null)
    const card03Ref = useRef(null)
    const sectionRef = useRef(null)
    const text01Ref = useRef(null)
    const text02Ref = useRef(null)
    const text03Ref = useRef(null)
    const text04Ref = useRef(null)
    const text05Ref = useRef(null)
    const text06Ref = useRef(null)
    const text07Ref = useRef(null)
    const section = sectionRef.current;

    function animateCards(images:null[],position:number){
        gsap.fromTo(images,{
            opacity:0,
            x:position
        },{
            opacity:1,
            x:0,
            duration: 1.5,
            stagger:0.5,
            scrollTrigger:{
                trigger:section,
                start:'3% center'
            }
        })
    }
    function animateText(images:null[],position:number){
        gsap.fromTo(images,{
            opacity:0,
            x:position
        },{
            opacity:1,
            x:0,
            duration: 1.3,

            scrollTrigger:{
                trigger:section,
                start:'3% center'
            }
        })
    }
    useEffect(()=>{
        const section = sectionRef.current;
        const cardMain = cardMainRef.current;
        const img01 = card01Ref.current;
        const img02 = card02Ref.current;
        const img03 = card03Ref.current;
        const title = titleRef.current;
        const text1 = text01Ref.current;
        const text2 = text02Ref.current;
        const text3 = text03Ref.current;
        const text4 = text04Ref.current;
        const text5 = text05Ref.current;
        const text6 = text06Ref.current;
        const text7 = text07Ref.current;
        const textLeft = [text1,text2,text3,text4,text5,text6,text7]

        const leftImages = [img01,img02,img03]
        const rightImages = [img03]
        animateCards(leftImages,100)
        animateText(textLeft,-100)
        animateCards(rightImages,-100)

        gsap.fromTo(title,{
            opacity:0,
            y:100
        },{
            opacity:1,
            y:0,
            ease:'power4.out',
            duration:1,
            scrollTrigger:{
                trigger: section,
                start: '10% center',
                end: '',
                
            }
        })
        gsap.fromTo(cardMain,{
            opacity:0,
            y:100
        },{
            opacity:1,
            y:0,
            ease:'power4.out',
            duration:1,
            scrollTrigger:{
                trigger: section,
                start: '9% center',
                end: '',
                
            }
        })
    },[])
    return (  
        <section className='bg-white p-2 pt-4 sticky' ref={sectionRef}>
            <GridContainer>
                <div className='flex gap-10 max-md:grid'>
                 <div className='bg-primary-100 outline outline-secondary-400  shadow-md py-6 px-6 text-white w-[250%] max-md:w-[100%]' ref={cardMainRef}>
                    <h1 className='font-bold text-4xl mb-4' ref={titleRef}>Somos a solução financeira para sua empresa</h1>
                    <div>
                    <p className='mb-4' ref={text01Ref}>Contribuindo com a geração de RESULTADOS</p>
                        <p className='mb-4' ref={text02Ref}>Melhorando e gerando fluxo de caixa</p>
                        <p className='mb-4'ref={text03Ref}>Buscando o compliance fiscal</p>
                        <p className='mb-4'ref={text04Ref}>Atuando juntamente com a contabilidade da sua empresa</p>
                        <p className='mb-4'ref={text05Ref}>Transparência</p>
                        <p className='mb-4'ref={text06Ref}>Sigilo nos Dados</p>
                        <p className='mb-4'ref={text07Ref}>Com foco contínuo na Redução da Carga Tributária e Planejamento Tributário para tomadas de decisões</p>
                    </div>
                 </div>
                <div className='grid grid-cols-2 gap-4 max-md:grid-cols-1 cursor-default text-black'>
                    <div className='rounded-md bg-white shadow-xl px-4 py-4 transition-all 'ref={card01Ref}>
                        <div className='rounded-full flex justify-center mb-10' >
                            <FaBook size={28} color={'#0A1130'}/>
                        </div>
                        <h1 className='font-bold'>Conhecimento Técnico</h1>
                        <p>Cada projeto, combinando capacidade técnica e expertise permitindo reduzir significativamente os custos tributários dos nossos clientes. Utilizamos uma metodologia de trabalho e ferramentas de suporte para organizar e dar efetividade ao desenvolvimento dos projetos.</p>
                    </div>
                    <div className='rounded-md bg-white shadow-xl  px-4 py-4 transition-all ' ref={card02Ref}>
                        <div className='rounded-full flex justify-center mb-10'>
                            <CgDanger size={28} ccolor={'#0A1130'}/>
                        </div>
                        <h1 className='font-bold'>Transparência sobre os créditos levantados e riscos envolvidos</h1>
                        <p>Deixamos claro se há algum risco envolvido na operação, por menor que ele seja. Todo o trabalho executado segue a legislação vigente sempre em conformidade com as normas federais, estaduais e municipais.</p>
                    </div>
                    <div className='rounded-md bg-white shadow-xl  px-4 py-4 transition-all ' ref={card03Ref}>
                        <div className='rounded-full flex justify-center mb-10'>
                            <RiFundsBoxLine  size={28} color={'#0A1130'}/>
                        </div>
                        <h1 className='font-bold'>Central de resultados</h1>
                        <p>Dependendo do perfil do cliente e do benefício aplicado, é possível disponibilizar administrativamente recursos no caixa da empresa em até 30 dias.</p>
                    </div>
                </div>
            </div>
            </GridContainer>
        </section>
    );
}

export default SectionWhyContract;
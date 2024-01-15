"use client";
import React,{useRef,useEffect} from 'react'
import GridContainer from './grid';
import gsap from 'gsap';


const sectionStyle = {
    width: '100%',
    marginTop: '10px',
    backgroundImage: 'url(/banner-logo-04.jpg)', // Caminho direto a partir da pasta public
    backgroundSize: 'cover',
    backgroundPosition: 'center',
};

function SectionHero2() {
    const textHeroRef = useRef(null)
    const mockupLeftRef = useRef(null)
    const mockupRightRef= useRef(null)
    useEffect(()=>{
        const textHero = textHeroRef.current
        const mLeft = mockupLeftRef.current
        const mRight = mockupRightRef.current

        gsap.fromTo(textHero,{
            opacity:0,
            y:25,
            duration:1,
        },{
            opacity:1,
            y:0,
            duration:1,
            ease:'power4.out'
        })
    },[]);

    return ( 
        <section className='pt-20 h-screen bg-fixed bg-banner2 bg-cover ' id='start'>
            <GridContainer>
                    <div className='pt-32 opacity-0 text-white' ref={textHeroRef}>
                        <h1 className='text-5xl font-extrabold w-[60%] mb-5 text-white'>Somos a solução financeira para sua empresa crescer</h1>
                        <div className='bg-secondary-400 rounded-full py-2 px-4 w-32 mb-10'/>
                        <p className='mb-5 text-3xl  w-[46%]'>Nós somos especialistas em Recuperação Tributária</p>
                        <div className='flex gap-4'>
                            <button className='rounded px-8 py-4 bg-primary-100 hover:brightness-90'>Fale Conosco</button>
                        </div>
                    </div>
            </GridContainer>
        </section>
     );
}

export default SectionHero2;
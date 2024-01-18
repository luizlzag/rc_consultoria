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

function SectionHero3() {
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
        <section className='pt-20 h-screen bg-fixed bg-banner3 bg-cover sticky' id='start'>
            <GridContainer>
                    <div className='pt-28 opacity-0 text-white' ref={textHeroRef}>
                        <h1 className='text-5xl font-bold w-[50%] mb-5 max-md:text-3xl '>Compilance</h1>
                        <div className='bg-secondary-400 rounded-full py-2 px-4 w-32 mb-10'/>
                        <p className='mb-5 text-3xl w-[53%] max-md:text-lg max-md:w-[80%] '>Se você busca compilance tributário para o seu negócio 
                        <span className='font-semibold'> somos a escolha certa !</span></p>
                        <div className='flex gap-4'>
                            <button className='rounded px-8 py-4 bg-primary-100 hover:brightness-90'>Fale Conosco</button>
                        </div>
                    </div>
            </GridContainer>
        </section>
     );
}

export default SectionHero3;
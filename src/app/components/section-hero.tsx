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

function SectionHero() {
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
        <section className='pt-20 h-screen bg-fixed bg-parallax bg-cover sticky' id='start'>
            <GridContainer>
                <div className='pt-24 opacity-0' ref={textHeroRef}>
                    <h1 className='text-4xl mb-4 font-semibold'>Somo especialistas em</h1>
                    <h1 className='text-6xl max-md:text-5xl mb-16 font-bold'>Inteligência tributária</h1>
                    <button className='rounded px-6 py-6'>Fale Conosco</button>
                </div>
            </GridContainer>
        </section>
     );
}

export default SectionHero;
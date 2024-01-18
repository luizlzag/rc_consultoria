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
    const textHero01Ref = useRef(null)
    useEffect(()=>{
        const textHero = textHeroRef.current
        const textHero01 = textHero01Ref.current

        gsap.fromTo(textHero,{
            opacity:0,
            y:100,
            stagger:1.1,
            duration:1,
        },{
            opacity:1,
            y:0,
            duration:1,
        })
        gsap.fromTo(textHero01,{
            opacity:0,
            y:100,
            stagger:1.1,
            duration:1,
        },{
            opacity:1,
            y:0,
            duration:1,
        })
    },[]);
    

    return ( 
        <section className='pt-20 h-screen bg-fixed bg-parallax bg-cover sticky' id='start'>
            <GridContainer>
                    <div className='pt-36 opacity-0 text-white' ref={textHeroRef}>
                        <h1 className='text-4xl mb-4 font-semibold max-md:text-xl' >Somo especialistas em</h1>
                        <h1 className='text-6xl mb-4 max-md:text-4xl font-bold'>Inteligência tributária</h1>
                        <p className='mb-14'>Oferecemos soluções eficientes para redução de custos tributários</p>
                        <div className='flex gap-4 max-md:gap-2 opacity-0' ref={textHero01Ref}>
                            <a href='#steps' className='rounded outline outline-white px-8 py-4 max-md:px-4 max-md:py-2 hover:shadow-md hover:shadow-white'>Metodo de Trabalho</a>
                            <a href='https://api.whatsapp.com/send?phone=5517991717370&text=Ol%C3%A1,%20gostaria%20de%20entender%20melhor%20' target='_blank' className='rounded px-8 py-4 max-md:px-4 max-md:py-2 bg-primary-100 hover:brightness-90'>Fale Conosco</a>
                        </div>
                    </div>
            </GridContainer>
        </section>
     );
}

export default SectionHero;
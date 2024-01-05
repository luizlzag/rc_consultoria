import React from 'react'
import GridContainer from './grid';
import BannerLogo from '../../../public/banner-logo-04.jpg'

const sectionStyle = {
    width: '100%',
    marginTop: '10px',
    backgroundImage: 'url(/banner-logo-04.jpg)', // Caminho direto a partir da pasta public
    backgroundSize: 'cover',
    backgroundPosition: 'center',
};

function SectionHero() {
    return ( 
        <section className='pt-20 h-screen' id='start' style={sectionStyle}>
            <GridContainer>
                <div className='pt-24'>
                    <h2 className='text-4xl mb-4'>Somo especialistas em</h2>
                    <h1 className='text-6xl mb-16'>Inteligência tributária</h1>
                    <button className='rounded px-2 py-2'>Fale Conosco</button>
                </div>
            </GridContainer>
        </section>
     );
}

export default SectionHero;
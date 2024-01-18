"use client";
import React,{useRef,useEffect} from 'react'
import GridContainer from './grid';
import gsap from 'gsap';
import SectionHero from './section-hero';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


// import required modules
import { Autoplay,Parallax ,Pagination, Navigation } from 'swiper/modules';
import SectionHero2 from './section-hero2';
import SectionHero3 from './section-hero3';

function SectionSwiper() {
    return ( 
        <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 6000,
          disableOnInteraction: false,
        }}
        speed={600}
        parallax={true}
        pagination={{
          clickable: true,
        }}
        navigation={false}
        modules={[Parallax,Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><SectionHero/></SwiperSlide>
        <SwiperSlide><SectionHero2/></SwiperSlide>
        <SwiperSlide><SectionHero3/></SwiperSlide>
      </Swiper>
    </>
     );
}

export default SectionSwiper;



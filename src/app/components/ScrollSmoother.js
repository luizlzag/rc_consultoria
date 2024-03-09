"use client";
import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ScrollSmoother = () => {
  useEffect(() => {
    // Configurar animações suaves de rolagem usando GSAP
    gsap.registerPlugin(ScrollTrigger);

    gsap.utils.toArray('.scroll-smooth').forEach((section) => {
      ScrollTrigger.create({
        trigger: section,
        start: 'top top',
        end: 'bottom bottom',
        markers: false,
        scrub: 1, // Para um efeito de rolagem suave
      });
    });
  }, []);

  return null;
};

export default ScrollSmoother;

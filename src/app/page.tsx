import Image from 'next/image'
import SectionAbout from './components/section-about'
import SectionHero from './components/section-hero'
import SectionHelp from './components/section-help'
import SectionServices from './components/section-services'
import SectionDiferential from './components/section-differential'
import SectionWhyContract from './components/section-contract'
import SectionSteps from './components/sections-steps'
import SectionForm from './components/section-form'

export default function Home() {
  return (
    <>
    <SectionHero/>
     <SectionAbout/>
     <SectionHelp/>
     <SectionServices/>
     <SectionDiferential/>
     <SectionWhyContract/>
     <SectionSteps/>
     <SectionForm/>
    </>
  )
}

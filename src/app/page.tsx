import Image from 'next/image'
import SectionAbout from './components/section-about'
import SectionSwiper from './components/section-swiper'
import SectionHelp from './components/section-help'
import SectionServices from './components/section-services'
import SectionDiferential from './components/section-differential'
import SectionWhyContract from './components/section-contract'
import SectionSteps from './components/sections-steps'
import SectionForm from './components/section-form'
import SectionFeedback from './components/section-feedback'

export default function Home() {
  return (
    <>
    <SectionSwiper/>
    <SectionWhyContract/>
     <SectionAbout/>
     <SectionHelp/>
     <SectionServices/>
     <SectionSteps/>
     <SectionFeedback/>
     <SectionForm/>
    </>
  )
}

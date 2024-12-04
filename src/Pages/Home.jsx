import React from 'react'
import NavBar from '../Components/NavBar'
import HeroSection from '../Components/HeroSection'
import FeatureSection from '../Components/FeatureSection'
import BenefitSection from '../Components/BenefitSection'
import TeamSection from '../Components/TeamSection'
import ConvincingSection from '../Components/ConvincingSection'
import ContactSection from '../Components/ContactSection'

const Home = () => {
  return (
    <>
      <NavBar title="AdAffords" />
      <main>
        <HeroSection />
        <FeatureSection />
        <BenefitSection/>
        <TeamSection />
        <ConvincingSection />
        <ContactSection />
      </main>
    </>
  )
}

export default Home
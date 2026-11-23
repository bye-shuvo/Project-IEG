import React from 'react'
import { HeroSection } from '@/components/sections/HeroSection'
import { ApproachSection } from '@/components/sections/ApproachSection'
import { AmbitionsSection } from '@/components/sections/AmbitionsSection'
import { BrandsSection } from '@/components/sections/BrandsSection'
import { JourneySection } from '@/components/sections/JourneySection'
import { InsightsSection } from '@/components/sections/InsightsSection'
import { CtaBannerSection } from '@/components/sections/CtaBannerSection'

export const LandingPage: React.FC = () => {
  return (
    <div className="w-full">
      <HeroSection />
      <ApproachSection />
      <AmbitionsSection />
      <BrandsSection />
      <JourneySection />
      <InsightsSection />
      <CtaBannerSection />
    </div>
  )
}

export default LandingPage


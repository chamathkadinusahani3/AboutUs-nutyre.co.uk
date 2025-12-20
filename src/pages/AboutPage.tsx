import React from 'react';
import { Hero } from '../components/about/Hero';
import { WhoWeAre } from '../components/about/WhoWeAre';
import { Journey } from '../components/about/Journey';
import { VisionMission } from '../components/about/VisionMission';
import { ServicesGrid } from '../components/about/ServicesGrid';
import { Team } from '../components/about/Team';
import { WhyChoose } from '../components/about/WhyChoose';

export function AboutPage() {
  return <main className="min-h-screen bg-white text-black font-sans selection:bg-[#FDB913] selection:text-black">
      <Hero />
      <WhoWeAre />
      <Journey />
      <VisionMission />
      <ServicesGrid />
      <Team />
      <WhyChoose />
   

      
    </main>;
}
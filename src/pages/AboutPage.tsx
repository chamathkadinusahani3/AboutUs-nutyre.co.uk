import { Hero } from '../components/about/Hero';
import { WhoWeAre } from '../components/about/WhoWeAre';
import { VisionMission } from '../components/about/VisionMission';
import { ServicesGrid } from '../components/about/ServicesGrid';
import { WhyChoose } from '../components/about/WhyChoose';

export function AboutPage() {
  return (
    <main className="min-h-screen bg-white text-black font-sans selection:bg-[#FDB913] selection:text-black">
      <Hero />
      <WhoWeAre />
      <VisionMission />
      <ServicesGrid />
      <WhyChoose />
    </main>
  );
}
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { VisionMissionValues } from './components/VisionMissionValues';
import { Services } from './components/Services';
import { Industries } from './components/Industries';
import { CTA } from './components/CTA';
import { Footer } from './components/Footer';
import { allImages } from './assets/img';



export default function App() {
  return (
    <div className="min-h-screen">
      <Header logo={allImages.logo} />
      <main>
        <Hero backgroundImage={allImages.heroImage} />
        <About />
        <VisionMissionValues />
        <Services fabricationImage={allImages.fabricationImage} ndtImage={allImages.ndtImage} />
        <Industries industriesImage={allImages.industriesImage} />
        <CTA />
      </main>
      <Footer logo={allImages.logo} />
    </div>
  );
}
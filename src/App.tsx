import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { VisionMissionValues } from './components/VisionMissionValues';
import { Services } from './components/Services';
import { Industries } from './components/Industries';
import { CTA } from './components/CTA';
import { Footer } from './components/Footer';
// import logo from './assets/logo.png';

// Industrial images
const heroImage = 'https://images.unsplash.com/photo-1564182999070-744933bbe318?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwd2VsZGluZyUyMHNwYXJrc3xlbnwxfHx8fDE3NjUyNjM0MjJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral';

// New industrial section images
const fabricationImage = 'https://images.unsplash.com/photo-1587414716088-8480df231c10?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWxkaW5nJTIwc3BhcmtzJTIwQ05DJTIwbWFjaGluaW5nfGVufDF8fHx8MTc2NTI5NDI0Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral';
const ndtImage = 'https://images.unsplash.com/photo-1627704671340-0969d7dbac25?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bHRyYXNvbmljJTIwdGVzdGluZyUyMGluZHVzdHJpYWwlMjBpbnNwZWN0aW9ufGVufDF8fHx8MTc2NTI5NDI0Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral';
const industriesImage = 'https://images.unsplash.com/photo-1749549437525-3b5aa46fa1db?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvaWwlMjBnYXMlMjBwZXRyb2NoZW1pY2FsJTIwcGxhbnR8ZW58MXx8fHwxNzY1Mjk0MjQyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral';

export default function App() {
  return (
    <div className="min-h-screen">
      <Header logo={'images/logo.png'} />
      <main>
        <Hero backgroundImage={heroImage} />
        <About />
        <VisionMissionValues />
        <Services fabricationImage={fabricationImage} ndtImage={ndtImage} />
        <Industries industriesImage={industriesImage} />
        <CTA />
      </main>
      <Footer logo={'images/logo.png'} />
    </div>
  );
}
import { BriefingModalProvider } from './context/BriefingModalContext';
import TopBar from './components/landing/TopBar';
import Navbar from './components/landing/Navbar';
import Hero from './components/landing/Hero';
import StatsStrip from './components/landing/StatsStrip';
import ThreePillars from './components/landing/ThreePillars';
import IntelligenceCategories from './components/landing/IntelligenceCategories';
import IntelligenceLayerSplit from './components/landing/IntelligenceLayerSplit';
import FinancialIntelligenceSplit from './components/landing/FinancialIntelligenceSplit';
import GlobalReach from './components/landing/GlobalReach';
import WhoCCIServes from './components/landing/WhoCCIServes';
import WhyCCI from './components/landing/WhyCCI';
import FinalCTA from './components/landing/FinalCTA';
import Footer from './components/landing/Footer';
import BriefingModal from './components/landing/BriefingModal';

export default function App() {
  return (
    <BriefingModalProvider>
      <TopBar />
      <Navbar />
      <main>
        <Hero />
        <StatsStrip />
        <ThreePillars />
        <IntelligenceCategories />
        <IntelligenceLayerSplit />
        <FinancialIntelligenceSplit />
        <GlobalReach />
        <WhoCCIServes />
        <WhyCCI />
        <FinalCTA />
      </main>
      <Footer />
      <BriefingModal />
    </BriefingModalProvider>
  );
}

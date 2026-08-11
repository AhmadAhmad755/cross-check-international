import { BriefingModalProvider } from './context/BriefingModalContext';
import { useScrollReveal } from './hooks/useScrollReveal';
import TopBar from './components/landing/TopBar';
import Navbar from './components/landing/Navbar';
import Hero from './components/landing/Hero';
import StatsStrip from './components/landing/StatsStrip';
import ThreePillars from './components/landing/ThreePillars';
import IntelligenceCategories from './components/landing/IntelligenceCategories';
import IntelligenceLayerSplit from './components/landing/IntelligenceLayerSplit';
import FinancialIntelligenceSplit from './components/landing/FinancialIntelligenceSplit';
import PublicLoanRecovery from './components/landing/PublicLoanRecovery';
import HumanitarianSplit from './components/landing/HumanitarianSplit';
import RequestFlow from './components/landing/RequestFlow';
import Scenarios from './components/landing/Scenarios';
import GlobalReach from './components/landing/GlobalReach';
import WhoCCIServes from './components/landing/WhoCCIServes';
import WhatCCIIsNot from './components/landing/WhatCCIIsNot';
import WhyCCI from './components/landing/WhyCCI';
import JoiningCCI from './components/landing/JoiningCCI';
import FinalCTA from './components/landing/FinalCTA';
import Footer from './components/landing/Footer';
import BriefingModal from './components/landing/BriefingModal';

export default function App() {
  useScrollReveal();

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
        <PublicLoanRecovery />
        <HumanitarianSplit />
        <RequestFlow />
        <Scenarios />
        <GlobalReach />
        <WhoCCIServes />
        <WhatCCIIsNot />
        <WhyCCI />
        <JoiningCCI />
        <FinalCTA />
      </main>
      <Footer />
      <BriefingModal />
    </BriefingModalProvider>
  );
}

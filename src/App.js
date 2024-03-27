
import './App.css';
import Navbar from './components/navbar/navbar';
import IntroSection from './components/intro-section/IntroSection';
import FeatureSection from './components/feature-section/featureSections';
import NetworkOverview from './components/network-overview/NetworkOverview';
import PricingSection from './components/pricing-section/PricingSection';
let App = () => {
  return (
    <div className="App">
      <Navbar/>
      <IntroSection/>
      <FeatureSection/>
      <NetworkOverview/>
      <PricingSection/>
    </div>
  );
}

export default App;

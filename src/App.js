
import './App.css';
import Navbar from './components/navbar/navbar';
import IntroSection from './components/intro-section/IntroSection';
import FeatureSection from './components/feature-section/FeatureSection';
import NetworkOverview from './components/network-overview/NetworkOverview';
import PricingSection from './components/pricing-section/PricingSection';
import CallToActionSection from './components/call-to-action-section/CallToActionSection';
import Footer from './components/footer/Footer';
import './components/feature-section/FeatureSection.css';

let App = () => {
  return (
    <div className="App">
      <Navbar/>
      <IntroSection/>
      <FeatureSection/>
      <NetworkOverview/>
      <PricingSection/>
      <CallToActionSection/>
      <Footer/>
    </div>
  );
}

export default App;


import './App.css';
import Navbar from './components/navbar/navbar';
import IntroSection from './components/IntroSection/IntroSection';
import FeaturesSection from './components/featureSection/featureSections';

let App = () => {
  return (
    <div className="App">
      <Navbar/>
      <IntroSection/>
      <FeatureSection/>
    </div>
  );
}

export default App;

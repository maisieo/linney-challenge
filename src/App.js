
import './App.css';
import Navbar from './components/navbar/navbar';
import IntroSection from './components/IntroSection/IntroSection';
import FeaturesSection from './components/featuresSection/featuresSections';

let App = () => {
  return (
    <div className="App">
      <Navbar/>
      <IntroSection/>
      <FeaturesSection/>
    </div>
  );
}

export default App;

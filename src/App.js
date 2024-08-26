import './App.css';
import About from './components/About/About';
import Home from './components/Home/Home';
import NavBar from './components/NavBar/NavBar';
import { Service } from './components/Service/Service';
import Value from './components/VALEURS/Value';
import Partner from './components/Partner/Partner';
import Target from './components/Target/Target';
import ConsultantSlider from './components/MemberCard/ConsultantSlider';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer'
import StatsBanner from './components/Banner/StatsBanner';
function App() {
  return (
    <div className="App">
      <NavBar />
      <Home/>
     <About/>
     <Value/>
     <Service />
     <StatsBanner/>
     <ConsultantSlider />
     <Partner/>
     <Target/>
     <Contact/>
     <Footer/>
    </div>
  );
}

export default App;

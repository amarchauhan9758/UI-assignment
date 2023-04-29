import logo from './logo.svg';
import './App.css';
import Header from './components/header-section/headerfiles/Header';
import Navbar from './components/header-section/headerfiles/Navbar';
import Banner from './components/banner-section/Banner';
import HeroSection from './components/main-section/HeroSection';
import About from './components/about-us-section/About';
import Garllery from './components/gallery/Garllery';
import Testcomponents from './components/Testcomponents';
import Event from './components/events/Event';
import Excellences from './components/excellences/Excellences';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="App">
      <Header/>
      <Navbar/>
      <Banner/>
      <HeroSection/>
      <About/>
      <Garllery/>
      <Event/>
      <Excellences/>
      <Footer/>



    </div>
  );
}

export default App;

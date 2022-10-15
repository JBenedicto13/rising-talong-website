
import './App.css';
import Header from './components/Header';
import About from './components/About';
import RoadMap from './components/RoadMap';
import Faqs from './components/Faqs';
import Team from './components/Team';
import Partners from './components/Partners';
import Footer from './components/Footer';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar';

function App() {
  return (
    <BrowserRouter>
      <div className="App ff-bristol">
        <Navbar />
        
        <Header />
        <About />
        <RoadMap />
        <Faqs />
        <Team />
        <Partners />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;


import './App.css';
import Header from './components/Header';
import About from './components/About';
import RoadMap from './components/RoadMap';
import Faqs from './components/Faqs';
import Team from './components/Team';
import Partners from './components/Partners'
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App ff-bristol">
        <Header />
        <About />
        <RoadMap />
        <Faqs />
        <Team />
        <Partners />
      </div>
    </BrowserRouter>
  );
}

export default App;

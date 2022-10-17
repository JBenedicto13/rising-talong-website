import './App.css';

import Footer from './components/Footer';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Mint from './components/Mint';
import Home from './components/Home';

function App() {
  return (
      <div className="App ff-bristol">
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/mint' element={<Mint />} />
        </Routes>
        <Footer />
      </div>
  );
}

export default App;

import './App.css';
import { Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './components/Home';
import MintPage from './components/MintPage';
import Footer from './components/Footer';

function App() {
  return (
      <div className="App ff-bristol">
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/mint' element={<MintPage />} />
        </Routes>
        <Footer />
      </div>
  );
}

export default App;

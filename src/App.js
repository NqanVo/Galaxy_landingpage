import React from 'react';
import { Routes, Route } from 'react-router-dom'
import Contact from './pages/Contact';
import Home from './pages/Home';
import Pricing from './pages/Pricing';
import Training from './pages/Training';

function App() {
  return (
    <Routes className='container mx-auto overflow-hidden'>
      <Route path='/' element={<Home />} />
      <Route path='/Pricing' element={<Pricing />} />
      <Route path='/Training' element={<Training />} />
      <Route path='/Contact' element={<Contact />} />
    </Routes>
  );
}

export default App;

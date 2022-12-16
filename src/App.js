import React from 'react';
import Home from './pages/Home';
import About from './pages/About';
import Product from './pages/Product';
import Nav from './Nav';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Nav />
        <Routes>
          <Route path='/' element={ <Home />} />
          <Route path='/product' element={ <Product />} />
          <Route path='/about' element={ <About />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
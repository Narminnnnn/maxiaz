import React from 'react';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Detail from './pages/Detail/Detail';
import Wishlist from './pages/WishList/Wishlist';

const App = () => {
  return (
  
      <BrowserRouter>
      <Header />
      <Routes>   
        <Route path='/' element={<Home/>}/>
        <Route path='/detail' element={<Detail />} />
        <Route path='/wishlist' element={<Wishlist />} />

      </Routes>
        <Footer />
      </BrowserRouter>
    
  );
};

export default App;


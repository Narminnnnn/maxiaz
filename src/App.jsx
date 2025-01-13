import React from "react";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Detail from "./pages/Detail/Detail";
import Wishlist from "./pages/WishList/Wishlist";
import Deliver from "./pages/catdirilma/Deliver";
import About from "./pages/About/About";
import Search from "./pages/Search/Search";
import FormRegister from './pages/FormRegister/FormRegister';

const App = () => {

  
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail" element={<Detail />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/deliver" element={<Deliver />} />
        <Route path="/about" element={<About />} />
        <Route path="/search" element={<Search />} />
        <Route path='/FormRegister' element={<FormRegister />} />

      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;

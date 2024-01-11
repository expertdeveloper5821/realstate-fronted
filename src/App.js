import React from 'react';
import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Home from './pages/Home';
import AddProperties from './pages/AddProperties';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
function App() {
  return (
    <>
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Home' element={<Home/>}/>
        <Route path='/AddProperties' element={<AddProperties/>}/>
        <Route path='/AboutUs' element={<AboutUs/>}/>
        <Route path='/ContactUs' element={<ContactUs/>}/>
      </Routes>
    <Footer/>
    </BrowserRouter>
    </>
  );
}

export default App;

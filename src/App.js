import React from 'react';
import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Home from './pages/Home';
import AddProperties from './pages/AddProperties';
import Properties from './pages/Properties'
function App() {
  return (
    <>
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Home' element={<Home/>}/>
        <Route path='/AddProperties' element={<AddProperties/>}/>
        <Route path='/Properties' />
        <Route />
      </Routes>
    <Footer/>
    </BrowserRouter>
    </>
  );
}

export default App;

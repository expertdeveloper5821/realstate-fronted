import React from 'react';
import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Home from './pages/Home';
import AddProperties from './pages/AddProperties';
import ShowDetails from './components/showDetails/ShowDetails';
import Properties from './pages/Properties';
// import Properties from './pages/Properties'
function App() {
  return (
    <>
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/AddProperties' element={<AddProperties/>}/>
        <Route path='/product/:id' element={<ShowDetails/>}/>
        <Route path='/properties' element={<Properties/>} />
      </Routes>
    <Footer/>
    </BrowserRouter>
    </>
  );
}

export default App;

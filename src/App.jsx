import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.css'; // Importa los estilos de Font Awesome
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import About from './Components/About';
import Products from './Components/Products';
import Features from './Components/Features';
import './App.css'

import 'bootstrap/dist/js/bootstrap.bundle.min.js';


function App() {
  return (
    <>
     <Navbar/>
     <Hero/>  
     <About/>
     <Products/>
     <Features/>
    </>
  )
}

export default App

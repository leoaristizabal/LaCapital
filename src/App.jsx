import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.css'; // Importa los estilos de Font Awesome
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import About from './Components/About';
import Products from './Components/Products';

import Features from './Components/Features';
import Posts from './Components/Posts';
import Form from './Components/Form';
import Blog from './Components/Blog';
import './App.css'

import AvatarWa from './assets/Hero/svgNegroRedondo.svg'

import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Footer from './Components/Footer';
import Scrollup from './Components/Scrollup';

import { FloatingWhatsApp } from 'react-floating-whatsapp';

function App() {
  return (
    <>
     <Navbar/>
     <Hero/>  
     <About/>
     <Products/>
     <Features/>
     <Form/>
     <Posts/>
     <Blog/>
     <Footer/>
     <Scrollup/>
     <FloatingWhatsApp accountName='La Capital Carniceria' phoneNumber='34640998748' avatar={AvatarWa} statusMessage='Online' chatMessage='Hola! Bienvenido a La Capital Carniceria ¿Cómo podemos ayudarte?' placeholder='Mensaje' messageDelay={1} />
    </>
  )
}

export default App

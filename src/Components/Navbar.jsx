import React from 'react'
import Logo from '../assets/CapLogo.svg'
import '../App.css'



const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-white shadow sticky-top">
        <div class="container">
            <a class="navbar-brand" href="#">
                <img className="logonav" src={Logo} alt="Logo La Capital"/>
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav mx-auto">

                    <li class="nav-item">
                        <a class="nav-link" href="#heroSlider">Inicio</a>
                    </li>

                    <li class="nav-item">
                        <a class="nav-link" href="#about">Nosotros</a>
                    </li>

                    <li class="nav-item">
                        <a class="nav-link" href="#menu">Productos</a>
                    </li>

                    <li class="nav-item">
                        <a class="nav-link" href="#team">Team</a>
                    </li>

                    <li class="nav-item">
                        <a class="nav-link" href="#reservation">Pedidos</a>
                    </li>

                    <li class="nav-item">
                        <a class="nav-link" href="#blog">Cortes Mas Vendidos</a>
                    </li>

                </ul>
                <a href="#" class="btn btn-brand">Hacer Pedido</a>
            </div>
        </div>
    </nav>
  )
}

export default Navbar
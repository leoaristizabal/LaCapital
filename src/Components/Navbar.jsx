import React, { useState } from 'react';
import Logo from '../assets/Hero/svgNegroRedondo.svg';
import '../App.css';

const Navbar = () => {
  const [activeTab, setActiveTab] = useState('Inicio'); // Estado para la pestaña activa

  // Función para cambiar la pestaña activa
  const handleSetActiveTab = (tab) => {
    setActiveTab(tab);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow sticky-top">
      <div className="container">
        <a className="navbar-brand" href="#">
          <img className="logonav" src={Logo} alt="Logo La Capital" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto">
            <li className={`nav-item ${activeTab === 'Inicio' ? 'active' : ''}`}>
              <a className="nav-link" href="#heroSlider" onClick={() => handleSetActiveTab('Inicio')}>
                Inicio
              </a>
            </li>
            <li className={`nav-item ${activeTab === 'Nosotros' ? 'active' : ''}`}>
              <a className="nav-link" href="#about" onClick={() => handleSetActiveTab('Nosotros')}>
                Nosotros
              </a>
            </li>
            <li className={`nav-item ${activeTab === 'Productos' ? 'active' : ''}`}>
              <a className="nav-link" href="#menu" onClick={() => handleSetActiveTab('Productos')}>
                Productos
              </a>
            </li>
            <li className={`nav-item ${activeTab === 'Pedidos' ? 'active' : ''}`}>
              <a className="nav-link" href="#reservation" onClick={() => handleSetActiveTab('Pedidos')}>
                Pedidos
              </a>
            </li>
            <li className={`nav-item ${activeTab === 'Recetas' ? 'active' : ''}`}>
              <a className="nav-link" href="#blog" onClick={() => handleSetActiveTab('Recetas')}>
                Recetas
              </a>
            </li>
          </ul>
          <a href="#" className="btn btn-brand">Hacer Pedido</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

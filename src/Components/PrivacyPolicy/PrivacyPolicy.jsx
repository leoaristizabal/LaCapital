import React, { useState } from 'react';
import './PrivacyPolicy.css';

const PrivacyPolicy = ({ onAccept, onReject }) => {
  return (
    <div className="popup-container">
      <div className="popup-content">
        <h1 className="title_popup">Política de Privacidad</h1>
        <p className="p-popup">
          En La Capital Carnicería, respetamos su privacidad y estamos comprometidos a proteger sus datos personales. Recopilamos información como su nombre, correo electrónico y datos de navegación para mejorar nuestros servicios, procesar pedidos y comunicarnos con usted. No compartimos su información con terceros, salvo cuando es necesario para el funcionamiento de nuestro negocio o requerido por ley. Usamos cookies para optimizar su experiencia en nuestro sitio web. Usted tiene derechos sobre sus datos, incluyendo el acceso, rectificación y eliminación. <br/>Para más información, contáctenos en info@lacapitalcarniceria.com.
        </p>
        <div className="popup-buttons">
          <button onClick={onAccept} className="btn btn-brand">Aceptar</button>
          <button onClick={onReject} className="btn btn-rechazar">Rechazar</button>
        </div>
        
      </div>
    </div>
  );
};

export default PrivacyPolicy;

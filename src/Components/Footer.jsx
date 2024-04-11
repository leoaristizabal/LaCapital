import React from 'react'
import Logo from '../assets/CapLogo.svg'

const Footer = () => {
  return (
    <footer class="bg-cover">
        <div class="footer-top">
            <div class="container">
                <div class="row">
                    <div class="col-lg-4">
                        <img src={Logo} class="mb-4" alt=""/>
                        <p>C/ Pont del Treball Digne 5. 08020</p>
                        <div class="footer-social-links">
                            <a href="#"><i class="fa-brands fa-instagram"></i></a>
                            <a href="#"><i class="fa-brands fa-facebook"></i></a>
                            <a href="#"><i class="fa-brands fa-twitter"></i></a>
                            <a href="#"><i class="fa-brands fa-whatsapp"></i></a>
                        </div>
                    </div>
                    <div class="col-lg-3 ms-auto">
                        <h6 class="text-white mb-4">CONTACT</h6>
                        <p class="mb-1">+34 604919354</p>
                        <p class="mb-1">+34 658564444</p>
                        <p class="mb-1">pedidos@lacapitalcarniceria.com</p>
                        <p class="mb-1"><a class="footer-link" href="https://github.com/leoaristizabal">@lacapitalcarniceria</a></p>
                        <p class="mb-0">Barcelona, España.</p>
                    </div>
                    <div class="col-lg-3">
                        <h6 class="text-white mb-4">HORARIO</h6>
                        <p class="mb-1">Lunes - Viernes : 08:00 - 22:00</p>
                        <p>Sabado - Domingo : 08:00 - 22:00</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="footer-bottom">
            <div class="container">
                <div class="row gy-3 justify-content-between">
                    <div class="col-auto">
                        <p class="mb-0">Copyright  2024 © Designed by <a class="footer-link" href="https://github.com/leoaristizabal">AvocoDesign.</a>All rights reserved.</p>
                    </div>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer
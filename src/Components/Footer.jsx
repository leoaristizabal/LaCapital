import React from 'react'
import Logo from '../assets/Hero/svgNoFondoLogo3.png'

const Footer = () => {
  return (
    <footer class="bg-cover">
        <div class="footer-top">
            <div class="container">
                <div class="row">
                    <div class="col-lg-4">
                        <img src={Logo} class="mb-4" alt=""/>
                        <p>C/ Pont del Treball Digne 5. 08020. Barcelona, España.</p>
                        <div class="footer-social-links">
                            <a href="https://www.instagram.com/lacapitalcarniceria/"><i class="fa-brands fa-instagram"></i></a>
                            <a href="#"><i class="fa-brands fa-facebook"></i></a>
                            <a href="#"><i class="fa-brands fa-tiktok"></i></a>
                            <a href="https://wa.link/250pv0"><i class="fa-brands fa-whatsapp"></i></a>
                        </div>
                    </div>
                    <div class="col-lg-3 ms-auto">
                        <h6 class="text-white mt-4 mb-2">CONTACTO</h6>
                        <a href="https://wa.link/250pv0" class="footer-link22 mb-1"><i class="fa-brands fa-whatsapp"></i> +34 640 99 87 48</a>
                        <a class="footer-link22 mb-1"><i class="fa fa-phone"></i> +34 936 278 007</a>
                        <a href="mailto:pedidos@lacapitalcarniceria.com" class="footer-link22 mb-1"><i class="fa fa-envelope" aria-hidden="true"></i>  pedidos@lacapitalcarniceria.com</a>
                        <p class="footer-link2 mb-1"><a class="footer-link" href="https://www.instagram.com/lacapitalcarniceria/"><i class="fa-brands fa-instagram"></i> LaCapitalCarniceria</a></p>
                        <p class="mb-0">Barcelona, España.</p>
                    </div>
                    <div class="col-lg-3">
                        <h6 class="text-white mt-3 mb-2">HORARIO</h6>
                        <p class="mb-1">Lunes: 9:00am - 4:00pm</p>
                        <p class="mb-1">Martes - Viernes: 9:00am - 2:00pm / 5:00pm - 9:00pm</p>
                        <p class="mb-1">Sábados: 9:00am - 4:00pm</p>
                        <p>Domingo : Cerrado</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="footer-bottom">
            <div class="container">
                <div class="row gy-3 justify-content-between">
                    <div class="col-auto">
                        <p class="mb-0">Copyright  2024 © Designed by <a class="footer-link" href="https://github.com/leoaristizabal">AvocoDesign.</a> </p>
                    </div>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer
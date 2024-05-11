import React from 'react'
import AboutImg from '../assets/About/About.svg'
import Rrss from './Rrss'
import BannerAbout from './BannerAbout'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css'

const About = () => {
    return (
        <section id="about">
            <div class="container">
                <div class="row gy-4 align-items-center">
                    <div class="col-lg-5">
                        <LazyLoadImage effect='blur' className="img_about" src={AboutImg} alt="" />
                    </div>
                    <div class="col-lg-5">
                        <h1>Nuestra Historia</h1>
                        <div className='d-flex my-4'>
                            <div class="divider1"></div>
                            <div class="divider2"></div>
                            <div class="divider3"></div>

                        </div>
                        <p>En La Capital Carniceria, llevamos más de 2 años ofreciendo los cortes más frescos y de la más alta calidad. Nuestra pasión por la carne nos impulsa a seleccionar solo lo mejor para nuestros clientes, garantizando siempre un sabor y una frescura inigualables.</p>
                        <p>Nos comprometemos a mantener los estándares más altos en cada paso del proceso, desde la selección rigurosa de proveedores hasta el meticuloso manejo de la carne en nuestras instalaciones. Porque para nosotros, la calidad no es solo una promesa, es nuestra firma.</p>

                        <Rrss />


                    </div>



                </div>
            </div>
                <BannerAbout/>
        </section>
    )
}

export default About
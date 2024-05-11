import React from "react";
import "../App.css";
import Logo1 from '../assets/Hero/banner.svg'
import Logo2 from '../assets/Hero/svgNoFondoLogo3.png'
import { LazyLoadImage } from "react-lazy-load-image-component";
import 'react-lazy-load-image-component/src/effects/blur.css'

const Hero = () => {
  return (
    <div id="heroSlider" class="carousel slide" data-bs-ride="carousel">
    <div class="carousel-indicators">
        <button type="button" data-bs-target="#heroSlider" data-bs-slide-to="0" class="active" aria-current="true"
            aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#heroSlider" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#heroSlider" data-bs-slide-to="2" aria-label="Slide 3"></button>
    </div>
    <div class="carousel-inner">
        <div class="carousel-item text-center bg-cover vh-100 active slide-1">
            <div class="container h-100 d-flex align-items-center justify-content-center">
                <div class="row justify-content-center">
                    <div class="col-lg-12">
                        <h6 class="text-white mb-4">BIENVENIDOS A</h6>
                        <LazyLoadImage effect="blur" className='logobanner1' src={Logo1} alt="Logo Banner La Capital"/>
                        <LazyLoadImage effect="blur" className='logobanner2' src={Logo2} alt="Logo Banner La Capital"/>
                    </div>
                </div>
            </div>
        </div>

        <div class="carousel-item text-center bg-cover vh-100 slide-2">
            <div class="container h-100 d-flex align-items-center justify-content-center">
                <div class="row justify-content-center">
                    <div class="col-lg-12">
                        <h6 class="text-white mb-4">BIENVENIDOS A</h6>
                        <LazyLoadImage effect="blur" className='logobanner1' src={Logo1} alt="Logo Banner La Capital"/>
                        <LazyLoadImage effect="blur" className='logobanner2' src={Logo2} alt="Logo Banner La Capital"/>
                    </div>
                </div>
            </div>
        </div>

        <div class="carousel-item text-center bg-cover vh-100 slide-3">
            <div class="container h-100 d-flex align-items-center justify-content-center">
                <div class="row justify-content-center">
                    <div class="col-lg-12">
                        <h6 class="text-white mb-4">BIENVENIDOS A</h6>
                        <LazyLoadImage effect="blur" className='logobanner1' src={Logo1} alt="Logo Banner La Capital"/>
                        <LazyLoadImage effect="blur" className='logobanner2' src={Logo2} alt="Logo Banner La Capital"/>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#heroSlider" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#heroSlider" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
    </button>
</div>
  );
};

export default Hero;

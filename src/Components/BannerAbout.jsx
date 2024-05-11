import React from 'react'
import AboutBanner from '../assets/About/BannerAboutLaCapital.svg'
import Imgig1 from '../assets/Posts/post3.svg'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css'

const BannerAbout = () => {
  return (
    <>
    <LazyLoadImage effect='blur' className="banner_about" src={AboutBanner} />
    <div class="row g-0">
            <div class="col-lg-3 col-sm-6">
                <div class="insta-post">
                  <div className="imagen-bannerAbout">

                    <LazyLoadImage effect='blur' src={Imgig1} alt="" />
                  </div>
                    <a href="https://www.instagram.com/p/CwVIDbDoN_Q/?igsh=MXdvaHB4OXV3dnU0aw%3D%3D" class="insta-btn">
                        <i class="fa-brands fa-instagram"></i>
                    </a>
                </div>
            </div>
           
        </div>
    
    </>
  )
}

export default BannerAbout
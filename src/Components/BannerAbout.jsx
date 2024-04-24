import React from 'react'
import AboutBanner from '../assets/About/BannerAboutLaCapital.svg'
import Imgig1 from '../assets/Posts/post3.svg'

const BannerAbout = () => {
  return (
    <>
    <img className="banner_about" src={AboutBanner} />
    <div class="row g-0">
            <div class="col-lg-3 col-sm-6">
                <div class="insta-post">
                    <img className='imagen-bannerAbout' src={Imgig1} alt="" />
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
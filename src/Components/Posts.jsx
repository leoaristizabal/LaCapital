import React from "react"
import Imgig1 from '../assets/Hero/CUADRADO@0,5x.jpg'
import Imgig2 from '../assets/Hero/MAMUT@0,5x.jpg'
import Imgig3 from '../assets/Hero/CUADRADO@0,5x.jpg'
import Imgig4 from '../assets/Hero/MAMUT@0,5x.jpg'

const Posts = () => {
    return (
        <div class="row g-0">
            <div class="col-lg-3 col-sm-6">
                <div class="insta-post">
                    <img src={Imgig1} alt="" />
                    <a href="#" class="insta-btn">
                        <i class="fa-brands fa-instagram"></i>
                    </a>
                </div>
            </div>
            <div class="col-lg-3 col-sm-6">
                <div class="insta-post">
                    <img src={Imgig2} alt="" />
                    <a href="#" class="insta-btn">
                        <i class="fa-brands fa-instagram"></i>
                    </a>
                </div>
            </div>
            <div class="col-lg-3 col-sm-6">
                <div class="insta-post">
                    <img src={Imgig3} alt="" />
                    <a href="#" class="insta-btn">
                        <i class="fa-brands fa-instagram"></i>
                    </a>
                </div>
            </div>
            <div class="col-lg-3 col-sm-6">
                <div class="insta-post">
                    <img src={Imgig4} alt="" />
                    <a href="#" class="insta-btn">
                        <i class="fa-brands fa-instagram"></i>
                    </a>
                </div>
            </div>
        </div>

    )

}

export default Posts 
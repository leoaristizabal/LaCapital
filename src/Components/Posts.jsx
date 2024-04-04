import React from "react"
import Imgig from '../assets/Hero/CUADRADO@0,5x.jpg'

const Posts = () => {
    return (
        <div class="row g-0">
            <div class="col-lg-3 col-sm-6">
                <div class="insta-post">
                    <img src={Imgig} alt="" />
                    <a href="#" class="insta-btn">
                        <i class="fa-brands fa-instagram"></i>
                    </a>
                </div>
            </div>
            <div class="col-lg-3 col-sm-6">
                <div class="insta-post">
                    <img src={Imgig} alt="" />
                    <a href="#" class="insta-btn">
                        <i class="fa-brands fa-instagram"></i>
                    </a>
                </div>
            </div>
            <div class="col-lg-3 col-sm-6">
                <div class="insta-post">
                    <img src={Imgig} alt="" />
                    <a href="#" class="insta-btn">
                        <i class="fa-brands fa-instagram"></i>
                    </a>
                </div>
            </div>
            <div class="col-lg-3 col-sm-6">
                <div class="insta-post">
                    <img src={Imgig} alt="" />
                    <a href="#" class="insta-btn">
                        <i class="fa-brands fa-instagram"></i>
                    </a>
                </div>
            </div>
        </div>

    )

}

export default Posts 
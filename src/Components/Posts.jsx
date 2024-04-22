import React from "react"
import Imgig2 from '../assets/Posts/post1.svg'
import Imgig1 from '../assets/Posts/post2.svg'
import Imgig3 from '../assets/Posts/post3.svg'
import Imgig4 from '../assets/Posts/post4.svg'

const Posts = () => {
    return (
        <div class="row g-0">
            <div class="col-lg-3 col-sm-6">
                <div class="insta-post">
                    <img src={Imgig1} alt="" />
                    <a href="https://www.instagram.com/p/CwVIDbDoN_Q/?igsh=MXdvaHB4OXV3dnU0aw%3D%3D" class="insta-btn">
                        <i class="fa-brands fa-instagram"></i>
                    </a>
                </div>
            </div>
            <div class="col-lg-3 col-sm-6">
                <div class="insta-post">
                    <img src={Imgig2} alt="" />
                    <a href="https://www.instagram.com/p/C48f_qoiB1c/?igsh=ZjYyOWR5bDhqc2Jv" class="insta-btn">
                        <i class="fa-brands fa-instagram"></i>
                    </a>
                </div>
            </div>
            <div class="col-lg-3 col-sm-6">
                <div class="insta-post">
                    <img src={Imgig3} alt="" />
                    <a href="https://www.instagram.com/p/C20BGRbohKB/?igsh=dHY1aXowaGZpdzNk" class="insta-btn">
                        <i class="fa-brands fa-instagram"></i>
                    </a>
                </div>
            </div>
            <div class="col-lg-3 col-sm-6">
                <div class="insta-post">
                    <img src={Imgig4} alt="" />
                    <a href="https://www.instagram.com/p/C3U_47XCtq3/?igsh=MWJyYzU3ejF3OWNhbA==" class="insta-btn">
                        <i class="fa-brands fa-instagram"></i>
                    </a>
                </div>
            </div>
        </div>

    )

}

export default Posts 
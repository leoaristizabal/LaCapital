import React from 'react'
import AboutImg from '../assets/About/LACapitalAbout.png'
import Rrss from './Rrss'
import BannerAbout from './BannerAbout'

const About = () => {
    return (
        <section id="about">
            <div class="container">
                <div class="row gy-4 align-items-center">
                    <div class="col-lg-5">
                        <img className="img_about" src={AboutImg} alt="" />
                    </div>
                    <div class="col-lg-5">
                        <h1>Nuestra Historia</h1>
                        <div className='d-flex my-4'>
                            <div class="divider1"></div>
                            <div class="divider2"></div>
                            <div class="divider3"></div>

                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, consequatur cum? Soluta
                            optio laborum minus fugit.</p>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis amet provident autem eaque
                            praesentium illum dolorum repellendus rerum, consequuntur at cumque voluptatem!</p>

                        <Rrss />


                    </div>



                </div>
            </div>
                <BannerAbout/>
        </section>
    )
}

export default About
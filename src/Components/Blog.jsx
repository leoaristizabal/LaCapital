import React from "react";
import ImgBlog3 from '../assets/Blog/blog1.svg'
import ImgBlog1 from '../assets/Blog/blog2.svg'
import ImgBlog2 from '../assets/Blog/blog3.svg'
import ImgBlog4 from '../assets/Blog/blog4.svg'

const Blog = () => {
    return (
        <section id="blog">
            <div class="container">
                <div class="row">
                    <div class="col-12 intro-text">
                        <h1>Nuestras Recetas</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita quo eius
                            totam officiis eum ratione distinctio?</p>
                    </div>
                </div>
                <div class="row gy-4">
                    <div class="col-sm-6">
                        <div class="blog-post d-flex shadow-on-hover">
                            <img src={ImgBlog1} alt=""/>
                                <div class="blog-post-content p-4">
                                    <p>Posted: 18 Febrero, 2024</p>
                                    <h4><a href="https://www.instagram.com/reel/C3fTIsfCenr/?igsh=c3pmem1oNWZ4M3By">Smash Burger</a></h4>
                                    <p>La receta perfecta para este nivel de crunchy</p>
                                    <a href="https://www.instagram.com/reel/C3fTIsfCenr/?igsh=c3pmem1oNWZ4M3By">Leer Mas</a>
                                </div>
                        </div>
                    </div>
                    <div class="col-sm-6">
                        <div class="blog-post d-flex shadow-on-hover">
                        <img src={ImgBlog2} alt=""/>
                            <div class="blog-post-content  p-4">
                                <p>Posted: 28 Enero, 2024</p>
                                <h4><a href="https://www.instagram.com/reel/C2p6VM8rEXd/?igsh=MTQ0bjA4a3VoM2g1ZQ%3D%3D">Costillas al Kimche </a></h4>
                                <p>Costillas de Cerdo en BBQ en salsa Kimche</p>
                                <a href="https://www.instagram.com/reel/C2p6VM8rEXd/?igsh=MTQ0bjA4a3VoM2g1ZQ%3D%3D">Leer Mas</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-6">
                        <div class="blog-post d-flex shadow-on-hover">
                        <img src={ImgBlog3} alt=""/>
                            <div class="blog-post-content  p-4">
                                <p>Posted: 07 Sept, 2023</p>
                                <h4><a href="https://www.instagram.com/p/Cw5Mn7QoTn-/?igsh=MXh3Ynl5cnVhYWZ2Zw==">Un Asado Perfecto</a></h4>
                                <p>Fin de semana largo + la mejor compañia/parrilla</p>
                                <a href="https://www.instagram.com/p/Cw5Mn7QoTn-/?igsh=MXh3Ynl5cnVhYWZ2Zw==">Leer Mas</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-6">
                        <div class="blog-post d-flex shadow-sm shadow-on-hover">
                        <img src={ImgBlog4} alt=""/>
                            <div class="blog-post-content  p-4">
                                <p>Posted: 23 Enero, 2024</p>
                                <h4><a href="https://www.instagram.com/p/C2c2g7xI_t7/?igsh=dGFpam9jZmNrbHRp">Día mundial del Chorizo</a></h4>
                                <p>¿Que mejor que celebrar este dia a la parrilla?</p>
                                <a href="https://www.instagram.com/p/C2c2g7xI_t7/?igsh=dGFpam9jZmNrbHRp">Leer Mas</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}


export default Blog
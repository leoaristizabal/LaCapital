import React from "react";
import ImgBlog1 from '../assets/Hero/CUADRADO@0,5x.jpg'
import ImgBlog2 from '../assets/Hero/MAMUT@0,5x.jpg'
import ImgBlog3 from '../assets/Hero/CUADRADO@0,5x.jpg'
import ImgBlog4 from '../assets/Hero/MAMUT@0,5x.jpg'

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
                                    <h4><a href="#">Smash Burger</a></h4>
                                    <p>La receta perfecta para este nivel de crunchy</p>
                                    <a href="#">Leer Mas</a>
                                </div>
                        </div>
                    </div>
                    <div class="col-sm-6">
                        <div class="blog-post d-flex shadow-on-hover">
                        <img src={ImgBlog2} alt=""/>
                            <div class="blog-post-content  p-4">
                                <p>Posted: 28 Enero, 2024</p>
                                <h4><a href="#">Costillas de Cerdo en BBQ </a></h4>
                                <p>Costillas de Cerdo en BBQ en salsa Kimche</p>
                                <a href="#">Leer Mas</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-6">
                        <div class="blog-post d-flex shadow-on-hover">
                        <img src={ImgBlog3} alt=""/>
                            <div class="blog-post-content  p-4">
                                <p>Posted: 07 Sept, 2023</p>
                                <h4><a href="#">Un Asado Perfecto</a></h4>
                                <p>Fin de semana largo + la mejor parrilla</p>
                                <a href="#">Leer Mas</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-6">
                        <div class="blog-post d-flex shadow-sm shadow-on-hover">
                        <img src={ImgBlog4} alt=""/>
                            <div class="blog-post-content  p-4">
                                <p>Posted: 23 Enero, 2024</p>
                                <h4><a href="#">Día internacional del Chorizo</a></h4>
                                <p>¿Que mejor que celebrar este dia a la parrilla?</p>
                                <a href="#">Leer Mas</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}


export default Blog
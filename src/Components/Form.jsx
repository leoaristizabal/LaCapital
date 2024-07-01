import React from "react";
import emailjs from 'emailjs-com';

const Form = () => {
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_j5gsehh', 'template_ym6ywef', e.target, 'cLgYA8En2L7izRjl7')
            .then((result) => {
                console.log(result.text);
                alert('Mensaje enviado con éxito!');
            }, (error) => {
                console.log(error.text);
                alert('Hubo un error al enviar el mensaje:', error.text);
            });

        e.target.reset();
    };
    return (
        <section id="reservation">
            <div class="container">
                <div class="row">
                    <div class="col-12 intro-text">
                        <h1>Contáctanos</h1>
                        <p>¿Algún comentario o sugerencia?<br /> No dudes en escribirnos, estamos aquí para servirte y asegurarnos de que tu experiencia con La Capital Carniceria sea excepcional.</p>
                    </div>
                </div>
                <form onSubmit={sendEmail} class="row justify-content-center">
                    <div class="col-lg-8">
                        <div class="row g-2">
                            <div class="col-md-6">
                                <div class="form-group">
                                    <input type="text" class="form-control" placeholder="Nombre" name="from_name" />
                                </div>
                                <div class="form-group mt-2">
                                    <input type="email" class="form-control" placeholder="Email" name="email" />
                                </div>
                                <div class="form-group mt-2">
                                    <input type="tel" class="form-control" placeholder="Número Telefónico" name="tel" />
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group h-100 ml-3">
                                    <textarea name="message" id="" cols="30" rows="6" class="form-control" placeholder="Mensaje"></textarea>
                                </div>
                            </div>
                            <div class="form-group col-md-12 text-center mt-2">
                                <button type="submit" class="btn btn-brand">Enviar Mensaje</button>
                            </div>
                        </div>
                    </div>
                </form>

            </div>
        </section>


    );
}

export default Form
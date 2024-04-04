import React from "react";

const Form = () => {
    return (
        <section id="reservation">
        <div class="container">
            <div class="row">
                <div class="col-12 intro-text">
                    <h1>Haz tu pedido!</h1>
                    <p>Llena los datos del formulario y te contactaremos confirmando tu pedido!</p>
                </div>
            </div>
            <form action="#" class="row justify-content-center">
                <div class="col-lg-8">
                    <div class="row g-3">
                        <div class="form-group col-md-6">
                            <input type="text" class="form-control" placeholder="Nombre"/>
                        </div>
                        <div class="form-group col-md-6">
                            <input type="email" class="form-control" placeholder="Email"/>
                        </div>
                        <div class="form-group col-md-6">
                            <input type="text" class="form-control" placeholder="Fecha"/>
                        </div>
                        <div class="form-group col-md-6">
                            <input type="text" class="form-control" placeholder="Numero Telefónico"/>
                        </div>
                        <div class="form-group col-md-12">
                            <textarea name="" id="" cols="30" rows="4" class="form-control"
                                placeholder="Mensaje Ejemplo:  3kg Mechar,  1.5 Kg Pulpa Negra,  1 Caja de Flips de Chocolate."></textarea>
                        </div>
                        <div class="form-group col-md-12 text-center">
                            <a href="#" class="btn btn-brand">Enviar Mensaje</a>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    </section>


    );
}

export default Form
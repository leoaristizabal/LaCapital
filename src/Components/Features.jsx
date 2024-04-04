import React from 'react'

const Features = () => {
  return (
    
    <section id="features" class="bg-cover">
        <div class="container">
            <div class="row">
                <div class="col-12 intro-text">
                    <h1 class="text-white">¿Por qué escoger La Capital Carniceria?</h1>
                    <p class="text-white">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita quo eius
                        totam officiis eum ratione distinctio?</p>
                </div>
            </div>

            <div class="row gy-4">
                <div class="col-lg-3 col-sm-6">
                    <div class="feature p-4 text-center">
                        <div class="feature-icon">
                            <i class="fa-solid fa-wifi"></i>
                        </div>
                        <h4 class="text-white mt-4 mb-2">Acento Venezolano</h4>
                        <p class="text-white">Te hacemos sentir como en casa!</p>
                    </div>
                </div>
                <div class="col-lg-3 col-sm-6">
                    <div class="feature p-4 text-center">
                        <div class="feature-icon">
                            <i class="fa-solid fa-clock"></i>
                        </div>
                        <h4 class="text-white mt-4 mb-2">Delivery Gratis</h4>
                        <p class="text-white">Te hacemos sentir como en casa!</p>
                    </div>
                </div>
                <div class="col-lg-3 col-sm-6">
                    <div class="feature p-4 text-center">
                        <div class="feature-icon">
                            <i class="fa-solid fa-dog"></i>
                        </div>
                        <h4 class="text-white mt-4 mb-2">Pet Friendly</h4>
                        <p class="text-white">Te hacemos sentir como en casa!</p>
                    </div>
                </div>
                <div class="col-lg-3 col-sm-6">
                    <div class="feature p-4 text-center">
                        <div class="feature-icon">
                            <i class="fa-solid fa-star"></i>
                        </div>
                        <h4 class="text-white mt-4 mb-2">Cortes de Primera</h4>
                        <p class="text-white">Te hacemos sentir como en casa!</p>
                    </div>
                </div>
            </div>

            {/**AGREGAR ACA IMAGEN DE BANNER DE PAGINA 23 DEL BRANDING */}
        </div>
    </section>
  )
}

export default Features
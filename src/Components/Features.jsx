import React from 'react'

const Features = () => {
  return (
    
    <section id="features" class="bg-cover">
        <div class="container">
            <div class="row">
                <div class="col-12 intro-text">
                    <h1 class="text-white">¿Por qué escoger La Capital Carniceria?</h1>
                    <p class="text-white">¡Descubre nuestra diferencia!<br/> Calidad excepcional, sabores puros, delivery gratis y un servicio que te hace sentir como en casa. Cada corte, una promesa de excelencia.</p>
                </div>
            </div>

            <div class="row gy-4">
                <div class="col-lg-3 col-sm-6">
                    <div class="feature p-4 text-center">
                        <div class="feature-icon">
                            <i class="fa-solid fa-flag"></i>
                        </div>
                        <h4 class="text-white mt-4 mb-2">Acento Venezolano</h4>
                        <p class="text-white">¡Te hacemos sentir como en casa</p>
                    </div>
                </div>
                <div class="col-lg-3 col-sm-6">
                    <div class="feature p-4 text-center">
                        <div class="feature-icon">
                            <i class="fa-solid fa-motorcycle"></i>
                        </div>
                        <h4 class="text-white mt-4 mb-2">Nuestro Delivery Gratis</h4>
                        <p class="text-white">¡Hasta la puerta de tu hogar!</p>
                    </div>
                </div>
                <div class="col-lg-3 col-sm-6">
                    <div class="feature p-4 text-center">
                        <div class="feature-icon">
                            <i class="fa-solid fa-person"></i>
                        </div>
                        <h4 class="text-white mt-4 mb-2">Atención Personalizada</h4>
                        <p class="text-white">¡A tu gusto, como te gusta!</p>
                    </div>
                </div>
                <div class="col-lg-3 col-sm-6">
                    <div class="feature p-4 text-center">
                        <div class="feature-icon">
                            <i class="fa-solid fa-star"></i>
                        </div>
                        <h4 class="text-white mt-4 mb-2">Cortes de Primera</h4>
                        <p class="text-white">¡Los mejores cortes a tu gusto!</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Features
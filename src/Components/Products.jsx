import React from "react";
import ImagenPrueba from "../assets/Products/MAMUT@0,25x.jpg";
import ImagenPrueba2 from "../assets/Products/MAMUT@0,25x.jpg";
import ImagenPruebaCerdo from "../assets/Products/CERDOPRUEBA.jpg"
import ImagenPruebaEmbutidos from "../assets/Products/Chorizos.png"

const Products = () => {
  return (
    <section id="menu" class="bg-black">
      <div class="container">
        <div class="row">
          <div class="col-12 intro-text">
            <h1>Nuestros Productos</h1>
            <p>
            Desde jugosos filetes hasta los mejores embutidos, nuestra amplia variedad satisface todos los paladares. Cada corte es preparado con el cuidado y la precisión que solo los expertos carniceros de La Capital pueden ofrecer.
            </p>
          </div>
        </div>
      </div>

      {/*<!--menu tab-->*/}
      <div class="container">
        <ul
          class="nav nav-pills mb-4 justify-content-center"
          id="pills-tab"
          role="tablist"
        >
          <li class="nav-item mb-2" role="presentation">
            <button
              class="nav-link active"
              id="pills-all-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills-all"
              type="button"
              role="tab"
              aria-controls="pills-all"
              aria-selected="true"
            >
              Los Más Vendidos
            </button>
          </li>

          <li class="nav-item mb-2" role="presentation">
            <button
              class="nav-link"
              id="pills-carnes-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills-carnes"
              type="button"
              role="tab"
              aria-controls="pills-carnes"
              aria-selected="true"
            >
              Carnes
            </button>
          </li>

          <li class="nav-item mb-2" role="presentation">
            <button
              class="nav-link"
              id="pills-pollo-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills-pollo"
              type="button"
              role="tab"
              aria-controls="pills-pollo"
              aria-selected="true"
            >
              Pollo
            </button>
          </li>

          <li class=" nav-item mb-2" role="presentation">
            <button
              class="nav-link"
              id="pills-cerdo-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills-cerdo"
              type="button"
              role="tab"
              aria-controls="pills-cerdo"
              aria-selected="true"
            >
              Cerdo
            </button>
          </li>
          <li class=" nav-item mb-2" role="presentation">
            <button
              class="nav-link"
              id="pills-embutido-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills-embutido"
              type="button"
              role="tab"
              aria-controls="pills-embutido"
              aria-selected="true"
            >
              Embutidos
            </button>
          </li>
          <li class=" nav-item mb-2" role="presentation">
            <button
              class="nav-link"
              id="pills-quesos-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills-quesos"
              type="button"
              role="tab"
              aria-controls="pills-quesos"
              aria-selected="true"
            >
              Quesos
            </button>
          </li>
          <li class=" nav-item mb-2" role="presentation">
            <button
              class="nav-link"
              id="pills-viveres-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills-viveres"
              type="button"
              role="tab"
              aria-controls="pills-viveres"
              aria-selected="true"
            >
              Viveres Varios
            </button>
          </li>
        </ul>

        <div class="tab-content" id="pills-tabContent">
          {/*<!--Todos los items-->*/}
          <div
            class="tab-pane fade show active"
            id="pills-all"
            role="tabpanel"
            aria-labelledby="pills-all-tab"
            tabindex="0"
          >
            
            {/*POLLOS */}
            <div class="row gy-4">
              <div class="col-lg-3 col-sm-6">
                <div class="menu-item bg-black shadow-on-hover">
                  <img src={ImagenPrueba} alt="" />
                  <div class="menu-item-content p-4">
                    <div>
                      <span>Rated (4.4)</span>
                      <span class="stars">
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star-half-stroke"></i>
                      </span>
                    </div>
                    <h5 class="mt-1 mb-2">
                      <a href="#">Pollo Entero</a>
                    </h5>
                    <p class="small">
                      Carne de res acompañada con una fusión de queso muster y
                      mozzarella ahumada de la casa.
                    </p>
                    <h6 className="tagprice">4,90 €/Kg</h6>
                  </div>
                </div>
              </div>
              <div class="col-lg-3 col-sm-6">
                <div class="menu-item bg-black shadow-on-hover">
                  <img   src={ImagenPrueba} alt="" />
                  <div class="menu-item-content p-4">
                    <div>
                      <span>Rated (5.4)</span>
                      <span class="stars">
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star-half-stroke"></i>
                      </span>
                    </div>
                    <h5 class="mt-1 mb-2">
                      <a href="#">Pechuga</a>
                    </h5>
                    <p class="small">
                      Carne de res acompañada con una fusión de queso muster y
                      mozzarella ahumada de la casa.
                    </p>
                    <h6 className="tagprice">8,90 €/Kg</h6>
                  </div>
                </div>
              </div>
              <div class="col-lg-3 col-sm-6">
                <div class="menu-item bg-black shadow-on-hover">
                  <img   src={ImagenPrueba} alt="" />
                  <div class="menu-item-content p-4">
                    <div>
                      <span>Rated (4.8)</span>
                      <span class="stars">
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star-half-stroke"></i>
                      </span>
                    </div>
                    <h5 class="mt-1 mb-2">
                      <a href="#">Milanesa</a>
                    </h5>
                    <p class="small">
                      Carne de res acompañada con una fusión de queso muster y
                      mozzarella ahumada de la casa.
                    </p>
                    <h6 className="tagprice">8,90 €/Kg</h6>
                  </div>
                </div>
              </div>
              <div class="col-lg-3 col-sm-6">
                <div class="menu-item bg-black shadow-on-hover">
                  <img src={ImagenPrueba} alt="" />
                  <div class="menu-item-content p-4">
                    <div>
                      <span>Rated (5.4)</span>
                      <span class="stars">
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star-half-stroke"></i>
                      </span>
                    </div>
                    <h5 class="mt-1 mb-2">
                      <a href="#">Muslo Entero</a>
                    </h5>
                    <p class="small">
                      Carne de res acompañada con una fusión de queso muster y
                      mozzarella ahumada de la casa.
                    </p>
                    <h6 className="tagprice">5,50 €/Kg</h6>
                  </div>
                </div>
              </div>
              <div class="col-lg-3 col-sm-6">
                <div class="menu-item bg-black shadow-on-hover">
                  <img   src={ImagenPrueba} alt="" />
                  <div class="menu-item-content p-4">
                    <div>
                      <span>Rated (4.9)</span>
                      <span class="stars">
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star-half-stroke"></i>
                      </span>
                    </div>
                    <h5 class="mt-1 mb-2">
                      <a href="#">Contramuslo Deshuesado</a>
                    </h5>
                    <p class="small">
                      Carne de res acompañada con una fusión de queso muster y
                      mozzarella ahumada de la casa.
                    </p>
                    <h6 className="tagprice">5,90 €/Kg</h6>
                  </div>
                </div>
              </div>
              <div class="col-lg-3 col-sm-6">
                <div class="menu-item bg-black shadow-on-hover">
                  <img   src={ImagenPrueba} alt="" />
                  <div class="menu-item-content p-4">
                    <div>
                      <span>Rated (5.4)</span>
                      <span class="stars">
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star-half-stroke"></i>
                      </span>
                    </div>
                    <h5 class="mt-1 mb-2">
                      <a href="#">Alitas</a>
                    </h5>
                    <p class="small">
                      Carne de res acompañada con una fusión de queso muster y
                      mozzarella ahumada de la casa.
                    </p>
                    <h6 className="tagprice">4,90 €/Kg</h6>
                  </div>
                </div>
              </div>
              <div class="col-lg-3 col-sm-6">
                <div class="menu-item bg-black shadow-on-hover">
                  <img   src={ImagenPrueba} alt="" />
                  <div class="menu-item-content p-4">
                    <div>
                      <span>Rated (5.5)</span>
                      <span class="stars">
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star-half-stroke"></i>
                      </span>
                    </div>
                    <h5 class="mt-1 mb-2">
                      <a href="#">Pincho de Pollo</a>
                    </h5>
                    <p class="small">
                      Carne de res acompañada con una fusión de queso muster y
                      mozzarella ahumada de la casa.
                    </p>
                    <h6 className="tagprice">1,50 €/Unidad</h6>
                  </div>
                </div>
              </div>
              <div class="col-lg-3 col-sm-6">
                <div class="menu-item bg-black shadow-on-hover">
                  <img src={ImagenPrueba} alt="" />
                  <div class="menu-item-content p-4">
                    <div>
                      <span>Rated (5.4)</span>
                      <span class="stars">
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star-half-stroke"></i>
                      </span>
                    </div>
                    <h5 class="mt-1 mb-2">
                      <a href="#">Carapacho</a>
                    </h5>
                    <p class="small">
                      Carne de res acompañada con una fusión de queso muster y
                      mozzarella ahumada de la casa.
                    </p>
                    <h6 className="tagprice">0,50 €/Kg</h6>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/*<!--Only carnes-->*/}
          <div
            class="tab-pane fade show"
            id="pills-carnes"
            role="tabpanel"
            aria-labelledby="pills-carnes-tab"
            tabindex="0"
          >
            <div class="row gy-4">
              <div class="col-lg-3 col-sm-6">
                <div class="menu-item bg-black shadow-on-hover">
                  <img   src={ImagenPrueba} alt="" />
                  <div class="menu-item-content p-4">
                    <div>
                      <span>Rated (4.4)</span>
                      <span class="stars">
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star-half-stroke"></i>
                      </span>
                    </div>
                    <h5 class="mt-1 mb-2">
                      <a href="#">Bistec</a>
                    </h5>
                    <p class="small">
                      Carne de res acompañada con una fusión de queso muster y
                      mozzarella ahumada de la casa.
                    </p>
                    <h6 className="tagprice">11,90 €/Kg</h6>
                  </div>
                </div>
              </div>
              <div class="col-lg-3 col-sm-6">
                <div class="menu-item bg-black shadow-on-hover">
                  <img   src={ImagenPrueba2} alt="" />
                  <div class="menu-item-content p-4">
                    <div>
                      <span>Rated (4.9)</span>
                      <span class="stars">
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star-half-stroke"></i>
                      </span>
                    </div>
                    <h5 class="mt-1 mb-2">
                      <a href="#">Bistec de Primera</a>
                    </h5>
                    <p class="small">
                      Carne de res acompañada con una fusión de queso muster y
                      mozzarella ahumada de la casa.
                    </p>
                    <h6 className="tagprice">14,90 €/Kg</h6>
                  </div>
                </div>
              </div>
              <div class="col-lg-3 col-sm-6">
                <div class="menu-item bg-black shadow-on-hover">
                  <img   src={ImagenPrueba} alt="" />
                  <div class="menu-item-content p-4">
                    <div>
                      <span>Rated (4.4)</span>
                      <span class="stars">
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star-half-stroke"></i>
                      </span>
                    </div>
                    <h5 class="mt-1 mb-2">
                      <a href="#">Molida</a>
                    </h5>
                    <p class="small">
                      Carne de res acompañada con una fusión de queso muster y
                      mozzarella ahumada de la casa.
                    </p>
                    <h6 className="tagprice">10,90 €/Kg</h6>
                  </div>
                </div>
              </div>
              <div class="col-lg-3 col-sm-6">
                <div class="menu-item bg-black shadow-on-hover">
                  <img   src={ImagenPrueba2} alt="" />
                  <div class="menu-item-content p-4">
                    <div>
                      <span>Rated (4.5)</span>
                      <span class="stars">
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star-half-stroke"></i>
                      </span>
                    </div>
                    <h5 class="mt-1 mb-2">
                      <a href="#">Molida Magra</a>
                    </h5>
                    <p class="small">
                      Carne de res acompañada con una fusión de queso muster y
                      mozzarella ahumada de la casa.
                    </p>
                    <h6 className="tagprice">14,90 €/Kg</h6>
                  </div>
                </div>
              </div>
              <div class="col-lg-3 col-sm-6">
                <div class="menu-item bg-black shadow-on-hover">
                  <img   src={ImagenPrueba} alt="" />
                  <div class="menu-item-content p-4">
                    <div>
                      <span>Rated (4.8)</span>
                      <span class="stars">
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star-half-stroke"></i>
                      </span>
                    </div>
                    <h5 class="mt-1 mb-2">
                      <a href="#">Mechar</a>
                    </h5>
                    <p class="small">
                      Carne de res acompañada con una fusión de queso muster y
                      mozzarella ahumada de la casa.
                    </p>
                    <h6 className="tagprice">10,90 €/Kg</h6>
                  </div>
                </div>
              </div>
              <div class="col-lg-3 col-sm-6">
                <div class="menu-item bg-black shadow-on-hover">
                  <img   src={ImagenPrueba2} alt="" />
                  <div class="menu-item-content p-4">
                    <div>
                      <span>Rated (4.9)</span>
                      <span class="stars">
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star-half-stroke"></i>
                      </span>
                    </div>
                    <h5 class="mt-1 mb-2">
                      <a href="#">Guisar</a>
                    </h5>
                    <p class="small">
                      Carne de res acompañada con una fusión de queso muster y
                      mozzarella ahumada de la casa.
                    </p>
                    <h6 className="tagprice">10,90 €/Kg</h6>
                  </div>
                </div>
              </div>
              <div class="col-lg-3 col-sm-6">
                <div class="menu-item bg-black shadow-on-hover">
                  <img   src={ImagenPrueba} alt="" />
                  <div class="menu-item-content p-4">
                    <div>
                      <span>Rated (4.4)</span>
                      <span class="stars">
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star-half-stroke"></i>
                      </span>
                    </div>
                    <h5 class="mt-1 mb-2">
                      <a href="#">Milanesa de Ternera</a>
                    </h5>
                    <p class="small">
                      {" "}
                      (Empanizada) Carne de res acompañada con una fusión de
                      queso muster y mozzarella
                    </p>
                    <h6 className="tagprice">12,90 €/Kg</h6>
                  </div>
                </div>
              </div>
              <div class="col-lg-3 col-sm-6">
                <div class="menu-item bg-black shadow-on-hover">
                  <img   src={ImagenPrueba2} alt="" />
                  <div class="menu-item-content p-4">
                    <div>
                      <span>Rated (4.8)</span>
                      <span class="stars">
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star-half-stroke"></i>
                      </span>
                    </div>
                    <h5 class="mt-1 mb-2">
                      <a href="#">Hamburguesa</a>
                    </h5>
                    <p class="small">
                      {" "}
                      (150g) Carne de res acompañada con una fusión de queso
                      mozzarella ahumada de la casa.
                    </p>
                    <h6 className="tagprice">2,25 €</h6>
                  </div>
                </div>
              </div>
              <div class="col-lg-3 col-sm-6">
                <div class="menu-item bg-black shadow-on-hover">
                  <img   src={ImagenPrueba} alt="" />
                  <div class="menu-item-content p-4">
                    <div>
                      <span>Rated (4.4)</span>
                      <span class="stars">
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star-half-stroke"></i>
                      </span>
                    </div>
                    <h5 class="mt-1 mb-2">
                      <a href="#">Largarto con Hueso</a>
                    </h5>
                    <p class="small">
                      Carne de res acompañada con una fusión de queso muster y
                      mozzarella ahumada de la casa.
                    </p>
                    <h6 className="tagprice">10,90 €/Kg</h6>
                  </div>
                </div>
              </div>
              <div class="col-lg-3 col-sm-6">
                <div class="menu-item bg-black shadow-on-hover">
                  <img   src={ImagenPrueba2} alt="" />
                  <div class="menu-item-content p-4">
                    <div>
                      <span>Rated (4.4)</span>
                      <span class="stars">
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star-half-stroke"></i>
                      </span>
                    </div>
                    <h5 class="mt-1 mb-2">
                      <a href="#">Largarto sin Hueso</a>
                    </h5>
                    <p class="small">
                      Carne de res acompañada con una fusión de queso muster y
                      mozzarella ahumada de la casa.
                    </p>
                    <h6 className="tagprice">10,90 €/Kg</h6>
                  </div>
                </div>
              </div>
              <div class="col-lg-3 col-sm-6">
                <div class="menu-item bg-black shadow-on-hover">
                  <img   src={ImagenPrueba} alt="" />
                  <div class="menu-item-content p-4">
                    <div>
                      <span>Rated (5.0)</span>
                      <span class="stars">
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star-half-stroke"></i>
                      </span>
                    </div>
                    <h5 class="mt-1 mb-2">
                      <a href="#">Lomito</a>
                    </h5>
                    <p class="small">
                      Carne de res acompañada con una fusión de queso muster y
                      mozzarella ahumada de la casa.
                    </p>
                    <h6 className="tagprice">28,50 €/Kg</h6>
                  </div>
                </div>
              </div>
              <div class="col-lg-3 col-sm-6">
                <div class="menu-item bg-black shadow-on-hover">
                  <img   src={ImagenPrueba2} alt="" />
                  <div class="menu-item-content p-4">
                    <div>
                      <span>Rated (5.0)</span>
                      <span class="stars">
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star-half-stroke"></i>
                      </span>
                    </div>
                    <h5 class="mt-1 mb-2">
                      <a href="#">Solomo de Cuerito</a>
                    </h5>
                    <p class="small">
                      Carne de res acompañada con una fusión de queso muster y
                      mozzarella ahumada de la casa.
                    </p>
                    <h6 className="tagprice">25,50 €/Kg</h6>
                  </div>
                </div>
              </div>
              <div class="col-lg-3 col-sm-6">
                <div class="menu-item bg-black shadow-on-hover">
                  <img   src={ImagenPrueba} alt="" />
                  <div class="menu-item-content p-4">
                    <div>
                      <span>Rated (4.4)</span>
                      <span class="stars">
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star-half-stroke"></i>
                      </span>
                    </div>
                    <h5 class="mt-1 mb-2">
                      <a href="#">Muchacho Redondo</a>
                    </h5>
                    <p class="small">
                      Carne de res acompañada con una fusión de queso muster y
                      mozzarella ahumada de la casa.
                    </p>
                    <h6 className="tagprice">16,90 €/Kg</h6>
                  </div>
                </div>
              </div>
              <div class="col-lg-3 col-sm-6">
                <div class="menu-item bg-black shadow-on-hover">
                  <img   src={ImagenPrueba2} alt="" />
                  <div class="menu-item-content p-4">
                    <div>
                      <span>Rated (4.4)</span>
                      <span class="stars">
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star-half-stroke"></i>
                      </span>
                    </div>
                    <h5 class="mt-1 mb-2">
                      <a href="#">Punta Trasera</a>
                    </h5>
                    <p class="small">
                      Carne de res acompañada con una fusión de queso muster y
                      mozzarella ahumada de la casa.
                    </p>
                    <h6 className="tagprice">16,90 €/Kg</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*<!--Only pollo-->*/}
          <div
            class="tab-pane fade show"
            id="pills-pollo"
            role="tabpanel"
            aria-labelledby="pills-pollo-tab"
            tabindex="0"
          >
            <div class="row gy-4">
              <div class="col-lg-3 col-sm-6">
                <div class="menu-item bg-black shadow-on-hover">
                  <img   src={ImagenPrueba} alt="" />
                  <div class="menu-item-content p-4">
                    <div>
                      <span>Rated (4.4)</span>
                      <span class="stars">
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star-half-stroke"></i>
                      </span>
                    </div>
                    <h5 class="mt-1 mb-2">
                      <a href="#">Pollo Entero</a>
                    </h5>
                    <p class="small">
                      Carne de res acompañada con una fusión de queso muster y
                      mozzarella ahumada de la casa.
                    </p>
                    <h6 className="tagprice">4,90 €/Kg</h6>
                  </div>
                </div>
              </div>
              <div class="col-lg-3 col-sm-6">
                <div class="menu-item bg-black shadow-on-hover">
                  <img   src={ImagenPrueba} alt="" />
                  <div class="menu-item-content p-4">
                    <div>
                      <span>Rated (5.4)</span>
                      <span class="stars">
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star-half-stroke"></i>
                      </span>
                    </div>
                    <h5 class="mt-1 mb-2">
                      <a href="#">Pechuga</a>
                    </h5>
                    <p class="small">
                      Carne de res acompañada con una fusión de queso muster y
                      mozzarella ahumada de la casa.
                    </p>
                    <h6 className="tagprice">8,90 €/Kg</h6>
                  </div>
                </div>
              </div>
              <div class="col-lg-3 col-sm-6">
                <div class="menu-item bg-black shadow-on-hover">
                  <img   src={ImagenPrueba} alt="" />
                  <div class="menu-item-content p-4">
                    <div>
                      <span>Rated (4.8)</span>
                      <span class="stars">
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star-half-stroke"></i>
                      </span>
                    </div>
                    <h5 class="mt-1 mb-2">
                      <a href="#">Milanesa</a>
                    </h5>
                    <p class="small">
                      Carne de res acompañada con una fusión de queso muster y
                      mozzarella ahumada de la casa.
                    </p>
                    <h6 className="tagprice">8,90 €/Kg</h6>
                  </div>
                </div>
              </div>
              <div class="col-lg-3 col-sm-6">
                <div class="menu-item bg-black shadow-on-hover">
                  <img src={ImagenPrueba} alt="" />
                  <div class="menu-item-content p-4">
                    <div>
                      <span>Rated (5.4)</span>
                      <span class="stars">
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star-half-stroke"></i>
                      </span>
                    </div>
                    <h5 class="mt-1 mb-2">
                      <a href="#">Muslo Entero</a>
                    </h5>
                    <p class="small">
                      Carne de res acompañada con una fusión de queso muster y
                      mozzarella ahumada de la casa.
                    </p>
                    <h6 className="tagprice">5,50 €/Kg</h6>
                  </div>
                </div>
              </div>
              <div class="col-lg-3 col-sm-6">
                <div class="menu-item bg-black shadow-on-hover">
                  <img   src={ImagenPrueba} alt="" />
                  <div class="menu-item-content p-4">
                    <div>
                      <span>Rated (4.9)</span>
                      <span class="stars">
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star-half-stroke"></i>
                      </span>
                    </div>
                    <h5 class="mt-1 mb-2">
                      <a href="#">Contramuslo Deshuesado</a>
                    </h5>
                    <p class="small">
                      Carne de res acompañada con una fusión de queso muster y
                      mozzarella ahumada de la casa.
                    </p>
                    <h6 className="tagprice">5,90 €/Kg</h6>
                  </div>
                </div>
              </div>
              <div class="col-lg-3 col-sm-6">
                <div class="menu-item bg-black shadow-on-hover">
                  <img   src={ImagenPrueba} alt="" />
                  <div class="menu-item-content p-4">
                    <div>
                      <span>Rated (5.4)</span>
                      <span class="stars">
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star-half-stroke"></i>
                      </span>
                    </div>
                    <h5 class="mt-1 mb-2">
                      <a href="#">Alitas</a>
                    </h5>
                    <p class="small">
                      Carne de res acompañada con una fusión de queso muster y
                      mozzarella ahumada de la casa.
                    </p>
                    <h6 className="tagprice">4,90 €/Kg</h6>
                  </div>
                </div>
              </div>
              <div class="col-lg-3 col-sm-6">
                <div class="menu-item bg-black shadow-on-hover">
                  <img   src={ImagenPrueba} alt="" />
                  <div class="menu-item-content p-4">
                    <div>
                      <span>Rated (5.5)</span>
                      <span class="stars">
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star-half-stroke"></i>
                      </span>
                    </div>
                    <h5 class="mt-1 mb-2">
                      <a href="#">Pincho de Pollo</a>
                    </h5>
                    <p class="small">
                      Carne de res acompañada con una fusión de queso muster y
                      mozzarella ahumada de la casa.
                    </p>
                    <h6 className="tagprice">1,50 €/Unidad</h6>
                  </div>
                </div>
              </div>
              <div class="col-lg-3 col-sm-6">
                <div class="menu-item bg-black shadow-on-hover">
                  <img src={ImagenPrueba} alt="" />
                  <div class="menu-item-content p-4">
                    <div>
                      <span>Rated (5.4)</span>
                      <span class="stars">
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star-half-stroke"></i>
                      </span>
                    </div>
                    <h5 class="mt-1 mb-2">
                      <a href="#">Carapacho</a>
                    </h5>
                    <p class="small">
                      Carne de res acompañada con una fusión de queso muster y
                      mozzarella ahumada de la casa.
                    </p>
                    <h6 className="tagprice">0,50 €/Kg</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*<!--Only cerdo-->*/}
          <div
            class="tab-pane fade show"
            id="pills-cerdo"
            role="tabpanel"
            aria-labelledby="pills-cerdo-tab"
            tabindex="0"
          >
            <div class="row gy-4">
              <div class="col-lg-3 col-sm-6">
                <div class="menu-item bg-black shadow-on-hover">
                  <img   src={ImagenPruebaCerdo} alt="" />
                  <div class="menu-item-content p-4">
                    <div>
                      <span>Rated (5.4)</span>
                      <span class="stars">
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star-half-stroke"></i>
                      </span>
                    </div>
                    <h5 class="mt-1 mb-2">
                      <a href="#">Lomo de Cerdo</a>
                    </h5>
                    <p class="small">
                      Carne de res acompañada con una fusión de queso muster y
                      mozzarella ahumada de la casa.
                    </p>
                    <h6 className="tagprice">8,90€/Kg</h6>
                  </div>
                </div>
              </div>
              <div class="col-lg-3 col-sm-6">
                <div class="menu-item bg-black shadow-on-hover">
                  <img   src={ImagenPruebaCerdo} alt="" />
                  <div class="menu-item-content p-4">
                    <div>
                      <span>Rated (4.8)</span>
                      <span class="stars">
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star-half-stroke"></i>
                      </span>
                    </div>
                    <h5 class="mt-1 mb-2">
                      <a href="#">Chuleta Fresca</a>
                    </h5>
                    <p class="small">
                      Carne de res acompañada con una fusión de queso muster y
                      mozzarella ahumada de la casa.
                    </p>
                    <h6 className="tagprice">10,50€/Kg</h6>
                  </div>
                </div>
              </div>
              <div class="col-lg-3 col-sm-6">
                <div class="menu-item bg-black shadow-on-hover">
                  <img   src={ImagenPruebaCerdo} alt="" />
                  <div class="menu-item-content p-4">
                    <div>
                      <span>Rated (4.5)</span>
                      <span class="stars">
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star-half-stroke"></i>
                      </span>
                    </div>
                    <h5 class="mt-1 mb-2">
                      <a href="#">Chuleta Ahumada</a>
                    </h5>
                    <p class="small">
                      Carne de res acompañada con una fusión de queso muster y
                      mozzarella ahumada de la casa.
                    </p>
                    <h6 className="tagprice">12,90€/Kg</h6>
                  </div>
                </div>
              </div>
              <div class="col-lg-3 col-sm-6">
                <div class="menu-item bg-black shadow-on-hover">
                  <img   src={ImagenPruebaCerdo} alt="" />
                  <div class="menu-item-content p-4">
                    <div>
                      <span>Rated (5.4)</span>
                      <span class="stars">
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star-half-stroke"></i>
                      </span>
                    </div>
                    <h5 class="mt-1 mb-2">
                      <a href="#">Cuello</a>
                    </h5>
                    <p class="small">
                      Carne de res acompañada con una fusión de queso muster y
                      mozzarella ahumada de la casa.
                    </p>
                    <h6 className="tagprice">11,50€/Kg</h6>
                  </div>
                </div>
              </div>
              <div class="col-lg-3 col-sm-6">
                <div class="menu-item bg-black shadow-on-hover">
                  <img   src={ImagenPruebaCerdo} alt="" />
                  <div class="menu-item-content p-4">
                    <div>
                      <span>Rated (4.6)</span>
                      <span class="stars">
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star-half-stroke"></i>
                      </span>
                    </div>
                    <h5 class="mt-1 mb-2">
                      <a href="#">Costilla</a>
                    </h5>
                    <p class="small">
                      Carne de res acompañada con una fusión de queso muster y
                      mozzarella ahumada de la casa.
                    </p>
                    <h6 className="tagprice">10,50€/Kg</h6>
                  </div>
                </div>
              </div>
              <div class="col-lg-3 col-sm-6">
                <div class="menu-item bg-black shadow-on-hover">
                  <img   src={ImagenPruebaCerdo} alt="" />
                  <div class="menu-item-content p-4">
                    <div>
                      <span>Rated (5.1)</span>
                      <span class="stars">
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star-half-stroke"></i>
                      </span>
                    </div>
                    <h5 class="mt-1 mb-2">
                      <a href="#">Paleta Deshuesada</a>
                    </h5>
                    <p class="small">
                      Carne de res acompañada con una fusión de queso muster y
                      mozzarella ahumada de la casa.
                    </p>
                    <h6 className="tagprice">10,50€/Kg</h6>
                  </div>
                </div>
              </div>
              <div class="col-lg-3 col-sm-6">
                <div class="menu-item bg-black shadow-on-hover">
                  <img   src={ImagenPruebaCerdo} alt="" />
                  <div class="menu-item-content p-4">
                    <div>
                      <span>Rated (5.4)</span>
                      <span class="stars">
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star-half-stroke"></i>
                      </span>
                    </div>
                    <h5 class="mt-1 mb-2">
                      <a href="#">Pernil (Encargo)</a>
                    </h5>
                    <p class="small">
                      Carne de res acompañada con una fusión de queso muster y
                      mozzarella ahumada de la casa.
                    </p>
                    <h6 className="tagprice">6,47€/Kg</h6>
                  </div>
                </div>
              </div>
              <div class="col-lg-3 col-sm-6">
                <div class="menu-item bg-black shadow-on-hover">
                  <img   src={ImagenPruebaCerdo} alt="" />
                  <div class="menu-item-content p-4">
                    <div>
                      <span>Rated (4.8)</span>
                      <span class="stars">
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star-half-stroke"></i>
                      </span>
                    </div>
                    <h5 class="mt-1 mb-2">
                      <a href="#">Lomito</a>
                    </h5>
                    <p class="small">
                      Carne de res acompañada con una fusión de queso muster y
                      mozzarella ahumada de la casa.
                    </p>
                    <h6 className="tagprice">12,50€/Kg</h6>
                  </div>
                </div>
              </div>
              <div class="col-lg-3 col-sm-6">
                <div class="menu-item bg-black shadow-on-hover">
                  <img   src={ImagenPruebaCerdo} alt="" />
                  <div class="menu-item-content p-4">
                    <div>
                      <span>Rated (5.4)</span>
                      <span class="stars">
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star-half-stroke"></i>
                      </span>
                    </div>
                    <h5 class="mt-1 mb-2">
                      <a href="#">Pincho de Cerdo</a>
                    </h5>
                    <p class="small">
                      Carne de res acompañada con una fusión de queso muster y
                      mozzarella ahumada de la casa.
                    </p>
                    <h6 className="tagprice">1,50€/Unidad</h6>
                  </div>
                </div>
              </div>
              
            </div>
          </div>
          {/*<!--Only Embutidos-->*/}
          <div
            class="tab-pane fade show"
            id="pills-embutido"
            role="tabpanel"
            aria-labelledby="pills-embutido-tab"
            tabindex="0"
          >
            <div class="row gy-4">
              <div class="col-lg-3 col-sm-6">
                <div class="menu-item bg-black shadow-on-hover">
                  <img src={ImagenPruebaEmbutidos} alt="" />
                  <div class="menu-item-content p-4">
                    <div>
                      <span>Rated (4.4)</span>
                      <span class="stars">
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star-half-stroke"></i>
                      </span>
                    </div>
                    <h5 class="mt-1 mb-2">
                      <a href="#">Chorizo Criollo</a>
                    </h5>
                    <p class="small">
                      Carne de res acompañada con una fusión de queso muster y
                      mozzarella ahumada de la casa.
                    </p>
                    <h6 className="tagprice">10,78€/Kg</h6>
                  </div>
                </div>
              </div>
              <div class="col-lg-3 col-sm-6">
                <div class="menu-item bg-black shadow-on-hover">
                  <img src={ImagenPruebaEmbutidos} alt="" />
                  <div class="menu-item-content p-4">
                    <div>
                      <span>Rated (4.9)</span>
                      <span class="stars">
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star-half-stroke"></i>
                      </span>
                    </div>
                    <h5 class="mt-1 mb-2">
                      <a href="#">Chorizo Fresco</a>
                    </h5>
                    <p class="small">
                      Carne de res acompañada con una fusión de queso muster y
                      mozzarella ahumada de la casa.
                    </p>
                    <h6 className="tagprice">10,53€/Kg</h6>
                  </div>
                </div>
              </div>
              <div class="col-lg-3 col-sm-6">
                <div class="menu-item bg-black shadow-on-hover">
                  <img src={ImagenPruebaEmbutidos} alt="" />
                  <div class="menu-item-content p-4">
                    <div>
                      <span>Rated (4.4)</span>
                      <span class="stars">
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star-half-stroke"></i>
                      </span>
                    </div>
                    <h5 class="mt-1 mb-2">
                      <a href="#">Chorizo Parrillero</a>
                    </h5>
                    <p class="small">
                      Carne de res acompañada con una fusión de queso muster y
                      mozzarella ahumada de la casa.
                    </p>
                    <h6 className="tagprice">10,50€/Kg</h6>
                  </div>
                </div>
              </div>
              <div class="col-lg-3 col-sm-6">
                <div class="menu-item bg-black shadow-on-hover">
                  <img src={ImagenPruebaEmbutidos} alt="" />
                  <div class="menu-item-content p-4">
                    <div>
                      <span>Rated (4.4)</span>
                      <span class="stars">
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star-half-stroke"></i>
                      </span>
                    </div>
                    <h5 class="mt-1 mb-2">
                      <a href="#">Morcilla</a>
                    </h5>
                    <p class="small">
                      Carne de res acompañada con una fusión de queso muster y
                      mozzarella ahumada de la casa.
                    </p>
                    <h6 className="tagprice">12,90€/Kg</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*<!--Only Quesos-->*/}
          <div
            class="tab-pane fade show"
            id="pills-quesos"
            role="tabpanel"
            aria-labelledby="pills-quesos-tab"
            tabindex="0"
          >
            <div class="row gy-4">
              <div class="col-lg-3 col-sm-6">
                <div class="menu-item bg-black shadow-on-hover">
                  <img   src={ImagenPrueba2} alt="" />
                  <div class="menu-item-content p-4">
                    <div>
                      <span>Rated (5.4)</span>
                      <span class="stars">
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star-half-stroke"></i>
                      </span>
                    </div>
                    <h5 class="mt-1 mb-2">
                      <a href="#">Queso Llanero</a>
                    </h5>
                    <p class="small">
                      Carne de res acompañada con una fusión de queso muster y
                      mozzarella ahumada de la casa.
                    </p>
                    <h6 className="tagprice">12,00€/kg</h6>
                  </div>
                </div>
              </div>
              <div class="col-lg-3 col-sm-6">
                <div class="menu-item bg-black shadow-on-hover">
                  <img   src={ImagenPrueba2} alt="" />
                  <div class="menu-item-content p-4">
                    <div>
                      <span>Rated (5.4)</span>
                      <span class="stars">
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star-half-stroke"></i>
                      </span>
                    </div>
                    <h5 class="mt-1 mb-2">
                      <a href="#">Semiduro</a>
                    </h5>
                    <p class="small">
                      Carne de res acompañada con una fusión de queso muster y
                      mozzarella ahumada de la casa.
                    </p>
                    <h6 className="tagprice">12,90€/kg</h6>
                  </div>
                </div>
              </div>
              <div class="col-lg-3 col-sm-6">
                <div class="menu-item bg-black shadow-on-hover">
                  <img   src={ImagenPrueba2} alt="" />
                  <div class="menu-item-content p-4">
                    <div>
                      <span>Rated (5.4)</span>
                      <span class="stars">
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star-half-stroke"></i>
                      </span>
                    </div>
                    <h5 class="mt-1 mb-2">
                      <a href="#">Duro 500gr</a>
                    </h5>
                    <p class="small">
                      Carne de res acompañada con una fusión de queso muster y
                      mozzarella ahumada de la casa.
                    </p>
                    <h6 className="tagprice">8,00€</h6>
                  </div>
                </div>
              </div>
              <div class="col-lg-3 col-sm-6">
                <div class="menu-item bg-black shadow-on-hover">
                  <img   src={ImagenPrueba2} alt="" />
                  <div class="menu-item-content p-4">
                    <div>
                      <span>Rated (5.4)</span>
                      <span class="stars">
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star-half-stroke"></i>
                      </span>
                    </div>
                    <h5 class="mt-1 mb-2">
                      <a href="#">De Mano 500gr</a>
                    </h5>
                    <p class="small">
                      Carne de res acompañada con una fusión de queso muster y
                      mozzarella ahumada de la casa.
                    </p>
                    <h6 className="tagprice">8,00€</h6>
                  </div>
                </div>
              </div>
              <div class="col-lg-3 col-sm-6">
                <div class="menu-item bg-black shadow-on-hover">
                  <img   src={ImagenPrueba2} alt="" />
                  <div class="menu-item-content p-4">
                    <div>
                      <span>Rated (5.4)</span>
                      <span class="stars">
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star-half-stroke"></i>
                      </span>
                    </div>
                    <h5 class="mt-1 mb-2">
                      <a href="#">Guayanes 250gr</a>
                    </h5>
                    <p class="small">
                      Carne de res acompañada con una fusión de queso muster y
                      mozzarella ahumada de la casa.
                    </p>
                    <h6 className="tagprice">4,50€</h6>
                  </div>
                </div>
              </div>
              <div class="col-lg-3 col-sm-6">
                <div class="menu-item bg-black shadow-on-hover">
                  <img   src={ImagenPrueba2} alt="" />
                  <div class="menu-item-content p-4">
                    <div>
                      <span>Rated (5.4)</span>
                      <span class="stars">
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star-half-stroke"></i>
                      </span>
                    </div>
                    <h5 class="mt-1 mb-2">
                      <a href="#">Palmita 450gr</a>
                    </h5>
                    <p class="small">
                      Carne de res acompañada con una fusión de queso muster y
                      mozzarella ahumada de la casa.
                    </p>
                    <h6 className="tagprice">7,50€</h6>
                  </div>
                </div>
              </div>
              <div class="col-lg-3 col-sm-6">
                <div class="menu-item bg-black shadow-on-hover">
                  <img   src={ImagenPrueba2} alt="" />
                  <div class="menu-item-content p-4">
                    <div>
                      <span>Rated (5.4)</span>
                      <span class="stars">
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star-half-stroke"></i>
                      </span>
                    </div>
                    <h5 class="mt-1 mb-2">
                      <a href="#">Seco 500gr</a>
                    </h5>
                    <p class="small">
                      Carne de res acompañada con una fusión de queso muster y
                      mozzarella ahumada de la casa.
                    </p>
                    <h6 className="tagprice">9,45€</h6>
                  </div>
                </div>
              </div>
              <div class="col-lg-3 col-sm-6">
                <div class="menu-item bg-black shadow-on-hover">
                  <img   src={ImagenPrueba2} alt="" />
                  <div class="menu-item-content p-4">
                    <div>
                      <span>Rated (5.4)</span>
                      <span class="stars">
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star-half-stroke"></i>
                      </span>
                    </div>
                    <h5 class="mt-1 mb-2">
                      <a href="#">Nata Criolla 250gr</a>
                    </h5>
                    <p class="small">
                      Carne de res acompañada con una fusión de queso muster y
                      mozzarella ahumada de la casa.
                    </p>
                    <h6 className="tagprice">3,50€</h6>
                  </div>
                </div>
              </div>
              <div class="col-lg-3 col-sm-6">
                <div class="menu-item bg-black shadow-on-hover">
                  <img   src={ImagenPrueba2} alt="" />
                  <div class="menu-item-content p-4">
                    <div>
                      <span>Rated (5.4)</span>
                      <span class="stars">
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star-half-stroke"></i>
                      </span>
                    </div>
                    <h5 class="mt-1 mb-2">
                      <a href="#">Guasacaca</a>
                    </h5>
                    <p class="small">
                      Carne de res acompañada con una fusión de queso muster y
                      mozzarella ahumada de la casa.
                    </p>
                    <h6 className="tagprice">3,90€</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*<!--Only Viveres-->*/}
          <div
            class="tab-pane fade show"
            id="pills-viveres"
            role="tabpanel"
            aria-labelledby="pills-viveres-tab"
            tabindex="0"
          >
            <div class="row gy-4">
              <div class="col-lg-3 col-sm-6">
                <div class="menu-item bg-black shadow-on-hover">
                  <img   src="./assets/images/item_4.jpg" alt="" />
                  <div class="menu-item-content p-4">
                    <div>
                      <span>Rated (5.4)</span>
                      <span class="stars">
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star-half-stroke"></i>
                      </span>
                    </div>
                    <h5 class="mt-1 mb-2">
                      <a href="#">Smash Cheese Burger</a>
                    </h5>
                    <p class="small">
                      Carne de res acompañada con una fusión de queso muster y
                      mozzarella ahumada de la casa.
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-lg-3 col-sm-6">
                <div class="menu-item bg-black shadow-on-hover">
                  <img   src="./assets/images/item_3.jpg" alt="" />
                  <div class="menu-item-content p-4">
                    <div>
                      <span>Rated (5.4)</span>
                      <span class="stars">
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star-half-stroke"></i>
                      </span>
                    </div>
                    <h5 class="mt-1 mb-2">
                      <a href="#">Smash Cheese Burger</a>
                    </h5>
                    <p class="small">
                      Carne de res acompañada con una fusión de queso muster y
                      mozzarella ahumada de la casa.
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-lg-3 col-sm-6">
                <div class="menu-item bg-black shadow-on-hover">
                  <img   src="./assets/images/item_2.jpg" alt="" />
                  <div class="menu-item-content p-4">
                    <div>
                      <span>Rated (5.4)</span>
                      <span class="stars">
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star-half-stroke"></i>
                      </span>
                    </div>
                    <h5 class="mt-1 mb-2">
                      <a href="#">Smash Cheese Burger</a>
                    </h5>
                    <p class="small">
                      Carne de res acompañada con una fusión de queso muster y
                      mozzarella ahumada de la casa.
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-lg-3 col-sm-6">
                <div class="menu-item bg-black shadow-on-hover">
                  <img   src="./assets/images/item_1.jpg" alt="" />
                  <div class="menu-item-content p-4">
                    <div>
                      <span>Rated (5.4)</span>
                      <span class="stars">
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star-half-stroke"></i>
                      </span>
                    </div>
                    <h5 class="mt-1 mb-2">
                      <a href="#">Smash Cheese Burger</a>
                    </h5>
                    <p class="small">
                      Carne de res acompañada con una fusión de queso muster y
                      mozzarella ahumada de la casa.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;

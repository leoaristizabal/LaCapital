import React from 'react'

const Combos = () => {
  return (
    <section id="menu" class="bg-light">
      <div class="container">
        <div class="row">
          <div class="col-12 intro-text">
            <h1>Combos</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Laudantium amet autem iusto possimus sint, doloribus nisi.
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
              Todos
            </button>
          </li>

          <li class="nav-item mb-2" role="presentation">
            <button
              class="nav-link"
              id="pills-semanales-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills-semanales"
              type="button"
              role="tab"
              aria-controls="pills-semanales"
              aria-selected="true"
            >
              Semanales
            </button>
          </li>
          <li class="nav-item mb-2" role="presentation">
            <button
              class="nav-link"
              id="pills-mensuales-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills-mensuales"
              type="button"
              role="tab"
              aria-controls="pills-mensuales"
              aria-selected="true"
            >
              Mensuales
            </button>
          </li>
          </ul>

          </div>

          </section>
  )
}

export default Combos
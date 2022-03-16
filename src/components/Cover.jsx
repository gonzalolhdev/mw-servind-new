import Hero1 from '/src/assets/Hero-1-obras-electricas.jpg'
import Hero2 from '/src/assets/Hero-2-proyectos-electricos.jpg'
import Hero3 from '/src/assets/Hero-3-sistemas-de-control.jpg'
import Hero4 from '/src/assets/Hero-4-soluciones-em-y-electroinstrumentales.jpg'

const Cover = () => {
  return (
    <div className="bg-orange-200 mt-20">
      {/*<div className="titulo">
      <h1>Soluciones para cada necesidad de tu empresa</h1>
      </div> */}

      <div className="flex">
        <ol className="flex">
          <li
            data-target="#portada"
            data-slide-to="0"
            className="active cursor-pointer"
          ></li>
          <li
            data-target="#portada"
            data-slide-to="1"
            className="cursor-pointer"
          ></li>
          <li
            data-target="#portada"
            data-slide-to="2"
            className="cursor-pointer"
          ></li>
          <li
            data-target="#portada"
            data-slide-to="3"
            className="cursor-pointer"
          ></li>
        </ol>
        <div className="flex">
          <div className="carousel-item active">
            <img className="bg-cover" src={Hero1} />
            <div className="carousel-caption">
              <h1 className="titulo">Proyectos Eléctricos</h1>
            </div>
          </div>
          <div className="carousel-item">
            <img className="bg-cover" src={Hero2} alt="Hola" />
            <div className="carousel-caption">
              <h1 className="titulo">Obras Eléctricas</h1>
            </div>
          </div>
          <div className="carousel-item">
            <img className="bg-cover" src={Hero3} />
            <div className="carousel-caption">
              <h1 className="titulo">Sistemas de Control</h1>
            </div>
          </div>
          <div className="carousel-item">
            <img className="bg-cover" src={Hero4} />
            <div className="carousel-caption">
              <h1 className="titulo-largo">
                Soluciones EM y Electroinstrumentales
              </h1>
            </div>
          </div>
        </div>
        <a
          className="carousel-control-prev"
          href="#portada"
          role="button"
          data-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#portada"
          role="button"
          data-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    </div>
  )
}

export default Cover

const About = () => {
  return (
    <div className="bg-red-200">
      {/* <div className="container-fluid"> */}
      {/* <div className="" id="dis-atras">
<img src="Images/diseño-superior-1.svg" alt=""/>
</div> */}
      <div className="container">
        <div className="container-fluid">
          <h1>Soluciones en ingenieria para tu empresa</h1>
          <br />
          <br />
          <div className="row">
            <div className="col card-flex">
              <div className="card">
                <img
                  src="Images/nuestros-valores.svg"
                  className="card-img-top"
                  alt=""
                />
                <div className="card-body">
                  <h4 className="card-title">Nuestros valores</h4>
                  <p className="card-text">
                    Se basan en el compromiso, honestidad y profesionalismo
                    aplicados al objetivo de brindar soluciones que acompañen y
                    potencien el desarrollo de nuestros clientes.
                  </p>
                </div>
              </div>
            </div>
            <div className="col card-flex">
              <div className="card">
                <img
                  src="Images/nuestros-conocimientos.svg"
                  className="card-img-top"
                  alt=""
                />
                <div className="card-body">
                  <h4 className="card-title">Nuestros conocimientos</h4>
                  <p className="card-text">
                    Contamos con especialistas en Ingeniería Eléctrica,
                    Electrónica, Instrumentación, Automatización y Control, lo
                    que nos permite brindar una asesoría integral en las etapas
                    de diseño, ejecución y post puesta en marcha de su proyecto.
                  </p>
                  {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
                </div>
              </div>
            </div>
          </div>
          <br />
          {/* <hr/>
<h2>Nuestros valores</h2>
<p>Se basan en el compromiso, honestidad y profesionalismo aplicados al objetivo de brindar soluciones que
acompañen y potencien el desarrollo de nuestros clientes.</p>
<hr/>
<h2>Nuestros conocimientos</h2>
<p>Contamos con especialistas en Ingeniería Eléctrica, Electrónica, Instrumentación, Automatización y Control,
lo que nos permite brindar una asesoría integral en las etapas de diseño, ejecución y post puesta en marcha de
su proyecto.</p> */}
        </div>
        {/* </div> */}
      </div>
    </div>
  )
}

export default About
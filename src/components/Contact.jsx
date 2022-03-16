const Contact = () => {
  return (
    <div className="bg-green-200">
      <div className="container-fluid fondo-contacto">
        <div className="container">
          {/* <div className="container-fluid"> */}

          <h1>Contacto</h1>
          <div className="row justify-center">
            <div className="col-lg-6 col-md-12">
              <div className="info-wrap">
                <div
                  className="dbox d-flex align-items-start justify-content-center"
                  id="logo-contacto"
                >
                  <img src="Images/Logo-MW-logotipo.svg" alt="" />
                </div>
                <div className="dbox d-flex align-items-start">
                  <div className="icon d-flex align-items-center justify-content-center">
                    <span className="fa fa-phone"></span>
                  </div>
                  <div className="text pl-4">
                    <span>Tel/WhatsApp:</span>
                    <p className="break-word">
                      <a href="https://wa.me/+543875185202" target="_blank">
                        387-5185202
                      </a>
                    </p>
                  </div>
                </div>
                <div className="dbox d-flex align-items-start">
                  <div className="icon d-flex align-items-center justify-content-center">
                    <span className="fa fa-paper-plane"></span>
                  </div>
                  <div className="text pl-4">
                    <span>E-mail:</span>
                    <p className="break-word">
                      <a href="mailto:administracion@mw-servind.com.ar">
                        administracion@mw-servind.com.ar
                      </a>
                    </p>
                  </div>
                </div>
                <div className="dbox d-flex align-items-start">
                  <div className="icon d-flex align-items-center justify-content-center">
                    <span className="fa fa-globe"></span>
                  </div>
                  <div className="text pl-4">
                    <span>Sitio Web:</span>
                    <p className="break-word">
                      <a href="#">www.mw-servind.com.ar</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              {/* ======================================================================================================================== */}
              {/* <div className="card">
                  <form
                    id="contact-form"
                    method="post"
                    action="php\contacto.php"
                    role="form"
                  >
                    <div className="messages"></div>

                    <div className="controls">
                      <div className="form-group">
                        <label htmlFor="form_name">Nombre *</label>
                        <input
                          id="form_name"
                          type="text"
                          name="name"
                          className="form-control"
                          placeholder="Ingrese su nombre..."
                          required="required"
                          data-error="Nombre requerido."
                        />
                        <div className="help-block with-errors"></div>
                      </div>
                      {/* <div className="form-group">
              <label htmlFor="form_lastname">Apellido *</label>
              <input id="form_lastname" type="text" name="surname" className="form-control" placeholder="Ingrese su apellido..." required="required" data-error="Apellido requerido.">
              <div className="help-block with-errors"></div>
            </div> 
                      <div className="form-group">
                        <label htmlFor="form_email">E-mail *</label>
                        <input
                          id="form_email"
                          type="email"
                          name="email"
                          className="form-control"
                          placeholder="E-mail..."
                          required="required"
                          data-error="E-mail no válido."
                        />
                        <div className="help-block with-errors"></div>
                      </div>
                      <div className="form-group">
                        <label htmlFor="form_need">Asunto *</label>
                        <input
                          id="form_need"
                          type="need"
                          name="need"
                          className="form-control"
                          placeholder="Asunto..."
                          required="required"
                          data-error="Ingrese asunto."
                        />
                        <div className="help-block with-errors"></div>
                      </div>
                      <div className="form-group">
                        <label htmlFor="form_message">Mensaje *</label>
                        <textarea
                          id="form_message"
                          name="message"
                          className="form-control"
                          placeholder="Mensaje..."
                          rows="4"
                          required="required"
                          data-error="Por favor, escriba su mensaje"
                        ></textarea>
                        <div className="help-block with-errors"></div>
                      </div>
                      <div className="form-group">
                        <button
                          type="submit"
                          name="submit"
                          className="btn btn-success btn-send form-control"
                          value="Enviar"
                        >
                          Enviar
                          {/* <input type="submit" name="submit" className="btn btn-success btn-send" value="Enviar" >
                        </button>
                      </div>
                    </div>
                  </form>
                </div> */}
              <div className="col">
                <p className="text-muted">
                  <strong>*</strong>Campos requeridos.
                </p>
              </div>
              {/* ======================================================================================================================== */}
            </div>
          </div>
        </div>
        {/* </div> */}
      </div>
    </div>
  )
}

export default Contact

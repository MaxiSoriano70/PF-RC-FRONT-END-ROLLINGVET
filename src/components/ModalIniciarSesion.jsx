import { Link } from "react-router-dom";

function ModalIniciarSesion({ show, handleClose }) {
  return (
    <div
      className={`modal fade ${show ? "show d-block" : "d-none"}`}
      tabIndex="-1"
      style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
      role="dialog"
    >
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
          <div className="modal-header bgColorPrincipal text-white">
            <h5 className="modal-title">Iniciar Sesión</h5>
            <button
              type="button"
              className="btn-close btn-close-white"
              aria-label="Close"
              onClick={handleClose}
            ></button>
          </div>

          <div className="modal-body bgColorFondo">
            <form id="form-iniciar-sesion">
              <div className="mb-3">
                <label htmlFor="email-iniciar-sesion" className="form-label fw-bolder">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control bgInput"
                  id="email-iniciar-sesion"
                  placeholder="Ingrese su email"
                  minLength="5"
                  maxLength="254"
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="password-iniciar-sesion" className="form-label fw-bolder">
                  Contraseña
                </label>
                <input
                  type="password"
                  className="form-control bgInput"
                  id="password-iniciar-sesion"
                  placeholder="Ingrese su contraseña"
                  minLength="6"
                  maxLength="16"
                  required
                />
              </div>

              <div className="mb-2">
                <Link
                  to="/reset-password"
                  className="link-dark link-offset-2 link-underline link-underline-opacity-0"
                >
                  Olvidé mi contraseña
                </Link>
              </div>

              <div className="d-flex justify-content-center">
                <button
                  type="submit"
                  className="btn btnPersonalized2 fw-bold mx-1"
                >
                  Ingresar
                </button>
                <button
                  type="button"
                  className="btn btnPersonalized1 fw-bold mx-1"
                  onClick={handleClose}
                >
                  Cancelar
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModalIniciarSesion;

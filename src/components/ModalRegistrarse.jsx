import { useState } from "react";
import styles from "../css/modalRegistrarse.module.css";

function ModalRegistrarse({ show, handleClose }) {
  const [showPassword, setShowPassword] = useState(false);
  const [showRepeatPassword, setShowRepeatPassword] = useState(false);

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
            <h5 className="modal-title">Registrarse</h5>
            <button
              type="button"
              className="btn-close btn-close-white"
              aria-label="Close"
              onClick={handleClose}
            ></button>
          </div>

          <div className="modal-body bgColorFondo">
            <form id="form-registro">
              <div className="d-flex gap-3">
                <div className="mb-3 w-100">
                  <label htmlFor="nombreRegistro" className="form-label fw-bold">
                    Nombre
                  </label>
                  <input
                    type="text"
                    className="form-control bgInput"
                    id="nombreRegistro"
                    placeholder="Ingrese su nombre"
                    minLength="3"
                    maxLength="25"
                    required
                  />
                </div>

                <div className="mb-3 w-100">
                  <label htmlFor="apellidoRegistro" className="form-label fw-bold">
                    Apellido
                  </label>
                  <input
                    type="text"
                    className="form-control bgInput"
                    id="apellidoRegistro"
                    placeholder="Ingrese su apellido"
                    maxLength="25"
                    required
                  />
                </div>
              </div>

              <div className="mb-3">
                <label htmlFor="emailRegistro" className="form-label fw-bold">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control bgInput"
                  id="emailRegistro"
                  placeholder="Ingrese su email"
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="telefonoRegistro" className="form-label fw-bold">
                  Teléfono
                </label>
                <input
                  type="tel"
                  className="form-control bgInput"
                  id="telefonoRegistro"
                  placeholder="Ingrese su teléfono"
                  maxLength="10"
                  required
                />
              </div>

              <div className="d-flex gap-3">
                <div className="mb-3 w-100">
                  <label htmlFor="passwordRegistro" className="form-label fw-bold">
                    Contraseña
                  </label>
                  <div className="position-relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      className="form-control bgInput pe-5"
                      id="passwordRegistro"
                      placeholder="Ingrese su contraseña"
                      minLength="8"
                      maxLength="20"
                      required
                    />
                    <i
                      className={`fa-solid ${showPassword ? "fa-eye" : "fa-eye-slash"} ${styles.buttonEye}`}
                      onClick={() => setShowPassword(!showPassword)}
                    ></i>
                  </div>
                </div>

                <div className="mb-3 w-100">
                  <label htmlFor="passwordRegistroRepetir" className="form-label fw-bold">
                    Repetir contraseña
                  </label>
                  <div className="position-relative">
                    <input
                      type={showRepeatPassword ? "text" : "password"}
                      className="form-control bgInput pe-5"
                      id="passwordRegistroRepetir"
                      placeholder="Repita su contraseña"
                      minLength="8"
                      maxLength="20"
                      required
                    />
                    <i
                      className={`fa-solid ${showRepeatPassword ? "fa-eye" : "fa-eye-slash"} ${styles.buttonEye}`}
                      onClick={() => setShowRepeatPassword(!showRepeatPassword)}
                    ></i>
                  </div>
                </div>
              </div>

              <div className="d-flex justify-content-center mt-3">
                <button
                  type="submit"
                  className="btn btnPersonalized2 fw-bold mx-2"
                >
                  Registrarse
                </button>
                <button
                  type="button"
                  className="btn btnPersonalized1 fw-bold mx-2"
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

export default ModalRegistrarse;

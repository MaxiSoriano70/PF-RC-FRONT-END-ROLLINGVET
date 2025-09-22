import { useState } from "react";
import styles from "../css/modalRegistrarse.module.css";

function ModalRegistrarse({ show, handleClose }) {
  const [showPassword, setShowPassword] = useState(false);
  const [showRepeatPassword, setShowRepeatPassword] = useState(false);

  const regex = {
    nombre: /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]{2,}$/,
    apellido: /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]{2,}$/,
    domicilio: /^[A-Za-zÁÉÍÓÚáéíóúÑñ0-9\s.,]{3,}$/,
    email: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
    password: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{6,}$/,
    telefono: /^\+?[0-9]{8,15}$/,
  };

  const [formValues, setFormValues] = useState({
    nombre: "",
    apellido: "",
    domicilio: "",
    telefono: "",
    email: "",
    password: "",
    passwordRepeat: "",
  });

  const [validity, setValidity] = useState({
    nombre: null,
    apellido: null,
    domicilio: null,
    telefono: null,
    email: null,
    password: null,
    passwordRepeat: null,
  });

  const handleChange = (field, value) => {
    setFormValues({ ...formValues, [field]: value });

    if (field === "passwordRepeat") {
      setValidity({
        ...validity,
        passwordRepeat: value === formValues.password,
      });
    } else {
      setValidity({
        ...validity,
        [field]: regex[field].test(value),
      });
    }
  };

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
                  <label
                    htmlFor="nombreRegistro"
                    className="form-label fw-bold"
                  >
                    Nombre
                  </label>
                  <input
                    type="text"
                    id="nombreRegistro"
                    placeholder="Ingrese su nombre"
                    className={`form-control bgInput ${validity.nombre === null
                        ? ""
                        : validity.nombre
                          ? "is-valid"
                          : "is-invalid"
                      }`}
                    value={formValues.nombre}
                    onChange={(e) => handleChange("nombre", e.target.value)}
                    required
                  />

                </div>

                <div className="mb-3 w-100">
                  <label
                    htmlFor="apellidoRegistro"
                    className="form-label fw-bold"
                  >
                    Apellido
                  </label>
                  <input
                    type="text"
                    id="apellidoRegistro"
                    placeholder="Ingrese su apellido"
                    maxLength="25"
                    className={`form-control bgInput ${validity.apellido === null
                        ? ""
                        : validity.apellido
                          ? "is-valid"
                          : "is-invalid"
                      }`}
                    value={formValues.apellido}
                    onChange={(e) => handleChange("apellido", e.target.value)}
                    required
                  />
                </div>
              </div>

              <div className="mb-3 w-100">
                <label
                  htmlFor="domicilioRegistro"
                  className="form-label fw-bold"
                >
                  Domicilio
                </label>
                <input
                  type="text"
                  id="domicilioRegistro"
                  placeholder="Ingrese su domicilio"
                  maxLength="25"
                  className={`form-control bgInput ${validity.domicilio === null
                        ? ""
                        : validity.domicilio
                          ? "is-valid"
                          : "is-invalid"
                      }`}
                    value={formValues.domicilio}
                    onChange={(e) => handleChange("domicilio", e.target.value)}
                  required
                />
              </div>

              <div className="mb-3">
                <label
                  htmlFor="telefonoRegistro"
                  className="form-label fw-bold"
                >
                  Teléfono
                </label>
                <input
                  type="tel"
                  id="telefonoRegistro"
                  placeholder="Ingrese su teléfono"
                  maxLength="10"
                  className={`form-control bgInput ${validity.telefono === null
                        ? ""
                        : validity.telefono
                          ? "is-valid"
                          : "is-invalid"
                      }`}
                    value={formValues.telefono}
                    onChange={(e) => handleChange("telefono", e.target.value)}
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="emailRegistro" className="form-label fw-bold">
                  Email
                </label>
                <input
                  type="email"
                  id="emailRegistro"
                  placeholder="Ingrese su email"
                  className={`form-control bgInput ${validity.email === null
                        ? ""
                        : validity.email
                          ? "is-valid"
                          : "is-invalid"
                      }`}
                    value={formValues.email}
                    onChange={(e) => handleChange("email", e.target.value)}
                  required
                />
              </div>

              <div className="d-flex gap-3">
                <div className="mb-3 w-100">
                  <label
                    htmlFor="passwordRegistro"
                    className="form-label fw-bold"
                  >
                    Contraseña
                  </label>
                  <div className="position-relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      id="passwordRegistro"
                      placeholder="Ingrese su contraseña"
                      minLength="8"
                      maxLength="20"
                      className={`form-control bgInput pe-5 ${validity.password === null
                        ? ""
                        : validity.password
                          ? "is-valid"
                          : "is-invalid"
                      }`}
                      value={formValues.password}
                      onChange={(e) => handleChange("password", e.target.value)}
                      required
                    />
                    <i
                      className={`fa-solid ${showPassword ? "fa-eye" : "fa-eye-slash"
                        } ${styles.buttonEye}`}
                      onClick={() => setShowPassword(!showPassword)}
                    ></i>
                  </div>
                </div>

                <div className="mb-3 w-100">
                  <label
                    htmlFor="passwordRegistroRepetir"
                    className="form-label fw-bold"
                  >
                    Repetir contraseña
                  </label>
                  <div className="position-relative">
                    <input
                      type={showRepeatPassword ? "text" : "password"}
                      id="passwordRegistroRepetir"
                      placeholder="Repita su contraseña"
                      minLength="8"
                      maxLength="20"
                      className={`form-control bgInput pe-5 ${validity.passwordRepeat === null
                        ? ""
                        : validity.passwordRepeat
                          ? "is-valid"
                          : "is-invalid"
                      }`}
                      value={formValues.passwordRepeat}
                      onChange={(e) => handleChange("passwordRepeat", e.target.value)}
                      required
                    />
                    <i
                      className={`fa-solid ${showRepeatPassword ? "fa-eye" : "fa-eye-slash"
                        } ${styles.buttonEye}`}
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

import { useState } from 'react';
import styles from '../css/panelAdministracion.module.css';
import TablaTurnos from './TablaTurnos';
import TablaDuenos from './TablaDuenos';
import TablaMascotas from './TablaMascotas';
import TablaVeterinarios from './TablaVeterinarios';

const PanelAdministracion = () => {
    const [tablaVisible, setTablaVisible] = useState(null);

    const mostrarTabla = (tabla) => {
        setTablaVisible(tabla);
    };

    return (
        <section className={styles.secAdministracion}>
            <article className={styles.admTitulo}>
                <h2>ADMINISTRACIÓN</h2>
            </article>

            <article className={styles.opciones}>
                <div className={styles.opcion}>
                    <div className={styles.logo}>
                        <i className="fa-solid fa-calendar-day"></i>
                    </div>
                    <div className={styles.descripcion}>
                        <div className={styles.headerDes}>
                            <h3 className={styles.tituloDes}>Turnos</h3>
                        </div>
                        <div className={styles.bodyDes}>
                            <span className={styles.subTitulo}>Hoy:</span>
                            <span>35 turnos.</span>
                        </div>
                        <div className={styles.footerDes}>
                            <button
                                className={styles.buttonAdmin}
                                onClick={() => mostrarTabla('turnos')}
                            >
                                Adm. Turnos
                            </button>
                        </div>
                    </div>
                </div>

                <div className={styles.opcion}>
                    <div className={styles.logo}>
                        <i className="fa-solid fa-address-card"></i>
                    </div>
                    <div className={styles.descripcion}>
                        <div className={styles.headerDes}>
                            <h3 className={styles.tituloDes}>Dueños</h3>
                        </div>
                        <div className={styles.bodyDes}>
                            <span className={styles.subTitulo}>Dueños:</span>
                            <span>30 total.</span>
                        </div>
                        <div className={styles.footerDes}>
                            <button
                                className={styles.buttonAdmin}
                                onClick={() => mostrarTabla('duenos')}
                            >
                                Adm. Dueños
                            </button>
                        </div>
                    </div>
                </div>

                <div className={styles.opcion}>
                    <div className={styles.logo}>
                        <i className="fa-solid fa-paw"></i>
                    </div>
                    <div className={styles.descripcion}>
                        <div className={styles.headerDes}>
                            <h3 className={styles.tituloDes}>Mascotas</h3>
                        </div>
                        <div className={styles.bodyDes}>
                            <span className={styles.subTitulo}>Mascotas:</span>
                            <span>42 total.</span>
                        </div>
                        <div className={styles.footerDes}>
                            <button
                                className={styles.buttonAdmin}
                                onClick={() => mostrarTabla('mascotas')}
                            >
                                Adm. Mascotas
                            </button>
                        </div>
                    </div>
                </div>

                <div className={styles.opcion}>
                    <div className={styles.logo}>
                        <i className="fa-solid fa-user-doctor"></i>
                    </div>
                    <div className={styles.descripcion}>
                        <div className={styles.headerDes}>
                            <h3 className={styles.tituloDes}>Veterinarios</h3>
                        </div>
                        <div className={styles.bodyDes}>
                            <span className={styles.subTitulo}>Veterinarios:</span>
                            <span>4 total.</span>
                        </div>
                        <div className={styles.footerDes}>
                            <button
                                className={styles.buttonAdmin}
                                onClick={() => mostrarTabla('veterinarios')}
                            >
                                Adm. Veterinarios
                            </button>
                        </div>
                    </div>
                </div>
            </article>

            {tablaVisible === null && (
                <div className={styles.mensajeAdmin}>
                    <h3>Seleccione una opción de administración</h3>
                </div>
            )}
            {tablaVisible === 'turnos' && <TablaTurnos />}
            {tablaVisible === 'duenos' && <TablaDuenos />}
            {tablaVisible === 'mascotas' && <TablaMascotas />}
            {tablaVisible === 'veterinarios' && <TablaVeterinarios />}
        </section>
    );
};

export default PanelAdministracion;

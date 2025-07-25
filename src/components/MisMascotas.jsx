import styles from '../css/misMascotas.module.css';
import imgCanino from '../assets/img/perro.png';
import imgFelino from '../assets/img/gato.png';

const CardFelino = () => {
    return (
        <div className={styles.card} data-aos="zoom-in">
            <div className={styles.contenido}>
                <span className={styles.gato}></span>
                <div className={styles.imgPet}>
                    <img className={styles.imgMascota} src={imgFelino} alt="gato" />
                </div>
                <h4 className={styles.nombreMascota}>Cloe</h4>
                <h5 className={styles.sinTurnos}>Sin turnos</h5>
                <div className={styles.botonesMascotas}>
                    <button className={styles.btnEditarMascota} aria-label="Editar Mascota">
                        <i className="fa-solid fa-pen-to-square"></i> Editar
                    </button>
                </div>
            </div>
            <button className={styles.btnEliminarMascota} type="button">
                <i className="fa-solid fa-circle-xmark"></i>
            </button>
        </div>
    );
};

const CardCanino = () => {
    return (
        <div className={styles.card} data-aos="zoom-in">
            <div className={styles.contenido}>
                <span className={styles.perro}></span>
                <div className={styles.imgPet}>
                    <img className={styles.imgMascota} src={imgCanino} alt="perro" />
                </div>
                <h4 className={styles.nombreMascota}>Roco</h4>
                <h5 className={styles.conTurno}>Turno el día 14/06/2025</h5>
                <div className={styles.botonesMascotas}>
                    <button className={styles.btnEditarMascota} aria-label="Editar Mascota">
                        <i className="fa-solid fa-pen-to-square"></i> Editar
                    </button>
                </div>
            </div>
            <button className={styles.btnEliminarMascota} type="button">
                <i className="fa-solid fa-circle-xmark"></i>
            </button>
        </div>
    );
};

const MisMascotas = () => {
    return (
        <section className={styles.tusMascotas}>
            <article className={styles.tusMascotasTitulo}>
                <h2 className={styles.tmTitulo}>Tus mascotas</h2>
            </article>

            <article className={styles.agregarMascota}>
                <button
                type="button"
                className="btn btn-success fw-bolder fs-6"
                data-bs-toggle="modal"
                data-bs-target="#agregarMascotaModal"
                >
                <i className="fa-solid fa-circle-plus" aria-label="Agregar Mascota"></i> Agregar Mascota
                </button>
            </article>

            <article className={styles.contenedorMascotas}>
                <CardCanino />
                <CardFelino />
                <CardCanino />
                <CardFelino />
                <CardCanino />
                <CardFelino />
                <CardCanino />
                <CardFelino />
            </article>
        </section>
    );
};

export default MisMascotas;

import styles from '../css/bienvenidaAdm.module.css';

const BienvenidaAdm = () => {
    return (
        <section className={styles.bienvenidaAdm}>
            <div className={styles.contenedorAdm}>
                <h3 className={styles.tituloBienvenida}>Bienvenid@</h3>
                <h3 className={styles.tituloBienvenida}><span className={styles.usuarioAdm}>Celeste Severich</span> <i className="fa-solid fa-id-card-clip"></i></h3>
                <p className={styles.selectBienvenida}>Seleccione una opción de administración</p>
            </div>
        </section>
    )
}

export default BienvenidaAdm;

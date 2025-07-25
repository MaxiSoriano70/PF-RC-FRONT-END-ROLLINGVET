import styles from '../css/clinica.module.css';
import imgCli1 from '../assets/img/clinica-1.jpg';
import imgCli2 from '../assets/img/clinica-2.jpg';

const PubliClinica = () => {
    return (
        <section className={styles.clinica}>
            <a className={styles.linkClinica} href="#" target="_blank" aria-label="Clinica Veterinaria">
                <img className={styles.imgClinica1} src={imgCli1} alt="clinica-veterinaria-1" />
                <img className={styles.imgClinica2} src={imgCli2} alt="clinica-veterinaria-2" />
            </a>
        </section>
    );
};

export default PubliClinica;

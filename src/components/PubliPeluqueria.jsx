import styles from '../css/peluqueria.module.css';
import imgPelu1 from '../assets/img/peluqueria-1.jpg';
import imgPelu2 from '../assets/img/peluqueria-2.jpg';

const PubliPeluqueria = () => {
    return (
        <section className={styles.peluqueria}>
            <a className={styles.linkPeluqueria} href="#" target="_blank" data-aos="flip-up" aria-label="Peluqueria de mascotas">
                <img className={styles.imgPeluqueria1} src={imgPelu1} alt="peluqueria-1"/>
                <img className={styles.imgPeluqueria2} src={imgPelu2} alt="peluqueria-2"/>
            </a>
        </section>
    );
}

export default PubliPeluqueria;

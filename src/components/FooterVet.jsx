import styles from '../css/footer.module.css';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer>
            <section className={styles.section1}>
                <article className={styles.boxLogo}>
                <Link href="index.html" aria-label="Logo y nombre">
                    <div>
                    <img src="img/Logo.png" alt="Logo-pie-de-pagina" />
                    </div>
                    <p>RollingVet</p>
                </Link>
                </article>
                <article className={styles.boxNosotros}>
                    <h3>Sobre nosotros</h3>
                    <p>
                        En RollingVet nos dedicamos al cuidado integral de tus mascotas. Contamos con un equipo profesional y comprometido que brinda atención médica personalizada, siempre con calidez y responsabilidad. Nuestro objetivo es garantizar el bienestar de cada animal que llega a nuestra clínica.
                    </p>
                </article>
                <article className={styles.boxRedes}>
                    <a href="#" aria-label="Email"><i className="fa-solid fa-envelope"></i></a>
                    <a href="#" aria-label="Instagram"><i className="fa-brands fa-instagram"></i></a>
                    <a href="#" aria-label="Facebook"><i className="fa-brands fa-facebook"></i></a>
                    <a href="#" aria-label="Twitter"><i className="fa-brands fa-x-twitter"></i></a>
                </article>
            </section>
            <section className={styles.section2}>
                <small>
                &copy; 2025 <b>Maximiliano Soriano</b> - Todos los derechos reservados.
                </small>
            </section>
        </footer>
    );
}

export default Footer;

import styles from '../css/header.module.css';
import logo from '../assets/img/Logo.png';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const toggleMenu = () => {
        setMenuOpen(prev => !prev);
    };

    return (
        <header className={styles.header}>
            <nav className={styles.nav}>
                <div className={styles.logo}>
                    <Link to="/" className={styles.linkLogo}>
                        <div className={styles.logoPrincipal}>
                        <img src={logo} alt="logo" />
                        </div>
                        Veterinaria
                    </Link>
                </div>

                <input
                    className={styles.checkHamburguesa}
                    type="checkbox"
                    id="menuBar"
                    checked={menuOpen}
                    onChange={toggleMenu}
                />

                <ul className={`${styles.navLink} ${menuOpen ? styles.showMenu : ''}`}>
                    <li><Link to="/" className={styles.link}><i className="fa-solid fa-house"></i> Home</Link></li>
                    <li><Link to="/servicios" className={styles.link}><i className="fa-solid fa-shield-dog"></i> Servicios</Link></li>
                    <li><Link to="/tips" className={styles.link}><i className="fa-solid fa-circle-info"></i> Tips</Link></li>
                    <button className={styles.iniciarSesion}><i class="fa-solid fa-cart-shopping"></i> Carrito</button>
                    <button className={styles.iniciarSesion}>Iniciar Sesión</button>
                </ul>

                <div className={styles.toggleBtn}>
                    <div className={styles.hamburguesa} onClick={toggleMenu}>
                        <i className="fa-solid fa-bars"></i>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Header;
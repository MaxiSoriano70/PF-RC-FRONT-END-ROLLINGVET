import styles from '../css/header.module.css';
import logo from '../assets/img/Logo.png';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import ModalIniciarSesion from './ModalIniciarSesion';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [showModalLogin, setShowModalLogin] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(prev => !prev);
    };

    const handleOpenLogin = () => {
        setShowModalLogin(true);
    };

    const handleCloseLogin = () => {
        setShowModalLogin(false);
    };

    return (
        <>
            <header className={styles.header}>
                <nav className={styles.nav}>
                    <div className={styles.logo}>
                        <Link to="/" className={styles.linkLogo}>
                            <div className={styles.logoPrincipal}>
                                <img src={logo} alt="logo" />
                            </div>
                            RollingVet
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
                        <li><Link to="/nosotros" className={styles.link}><i className="fa-solid fa-circle-info"></i> Nosotros</Link></li>
                        <li><Link to="/Contacto" className={styles.link}><i className="fa-solid fa-phone"></i> Contacto</Link></li>
                        <button className={styles.iniciarSesion} onClick={handleOpenLogin}>Iniciar Sesión</button>
                        <button className={styles.iniciarSesion}>Registrarse</button>
                    </ul>

                    <div className={styles.toggleBtn}>
                        <div className={styles.hamburguesa} onClick={toggleMenu}>
                            <i className="fa-solid fa-bars"></i>
                        </div>
                    </div>
                </nav>
            </header>
            <ModalIniciarSesion show={showModalLogin} handleClose={handleCloseLogin} />
        </>
    );
}

export default Header;

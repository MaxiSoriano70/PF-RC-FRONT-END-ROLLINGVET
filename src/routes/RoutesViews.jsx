import { Route, Routes } from 'react-router-dom';
import Header from '../components/Header'
import FooterVet from '../components/FooterVet'
import HomePage from '../pages/HomePage'
import NosotrosPage from '../pages/NosotrosPage';
import ContactoPage from '../pages/ContactoPage';
import Error404Page from '../pages/Error404Page';
import AdministracionPage from '../pages/AdministracionPage';
import MisMascotasPage from '../pages/MisMascotasPage';
import { routes } from '../assets/routes/routes';
import styles from '../css/app.module.css';

const RoutesViews = () => {
    return (
        <div className={styles.bodyPrincipal}>
        <Header/>
                <Routes>
                    <Route path={routes.home} element={<HomePage/>}/>
                    <Route path={routes.nosotros} element={<NosotrosPage/>}/>
                    <Route path={routes.contacto} element={<ContactoPage/>}/>
                    <Route path={routes.administracion} element={<AdministracionPage/>}/>
                    <Route path={routes.misMascotas} element={<MisMascotasPage/>}/>
                    <Route path={routes.notFound} element={<Error404Page/>}/>
                </Routes>
        <FooterVet/>
        </div>
    )
}

export default RoutesViews;

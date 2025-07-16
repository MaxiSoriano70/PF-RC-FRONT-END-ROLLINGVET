import NuestrasMarcas from '../components/NuestrasMarcas';
import NuestrosProfesionales from '../components/NuestrosProfesionales';
import NuestrosServicios from '../components/NuestrosServicios';
import PubliPeluqeria from '../components/PubliPeluqueria';
import Slider from '../components/Slider'
import TableTurnos from '../components/TableTurnos';

const HomePage = () => {
    return (
        <>
            <Slider/>
            <NuestrosServicios/>
            <NuestrasMarcas/>
            <NuestrosProfesionales/>
            <PubliPeluqeria/>
            <TableTurnos/>
        </>
    )
}

export default HomePage;

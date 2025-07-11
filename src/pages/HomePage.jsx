import NuestrasMarcas from '../components/NuestrasMarcas';
import NuestrosProfesionales from '../components/NuestrosProfesionales';
import NuestrosServicios from '../components/NuestrosServicios';
import Slider from '../components/Slider'

const HomePage = () => {
    return (
        <>
            <Slider/>
            <NuestrosServicios/>
            <NuestrasMarcas/>
            <NuestrosProfesionales/>
        </>
    )
}

export default HomePage;

import PanelAdministracion from "../components/PanelAdministracion";
import TablaDuenos from "../components/TablaDuenos";
import TablaMascotas from "../components/TablaMascotas";
import TablaTurnos from "../components/TablaTurnos";

const AdministracionPage = () => {
    return (
        <>
            <PanelAdministracion/>
            <TablaTurnos/>
            <TablaDuenos/>
            <TablaMascotas/>
        </>
    );
}

export default AdministracionPage;

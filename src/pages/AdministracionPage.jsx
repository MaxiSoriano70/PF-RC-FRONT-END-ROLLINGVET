import PanelAdministracion from "../components/PanelAdministracion";
import TablaDuenos from "../components/TablaDuenos";
import TablaMascotas from "../components/TablaMascotas";
import TablaTurnos from "../components/TablaTurnos";
import TablaVeterinarios from "../components/TablaVeterinarios";

const AdministracionPage = () => {
    return (
        <>
            <PanelAdministracion/>
            <TablaTurnos/>
            <TablaDuenos/>
            <TablaMascotas/>
            <TablaVeterinarios/>
        </>
    );
}

export default AdministracionPage;

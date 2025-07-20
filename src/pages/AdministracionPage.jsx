import PanelAdministracion from "../components/PanelAdministracion";
import TablaDuenos from "../components/TablaDuenos";
import TablaTurnos from "../components/TablaTurnos";

const AdministracionPage = () => {
    return (
        <>
            <PanelAdministracion/>
            <TablaTurnos/>
            <TablaDuenos/>
        </>
    );
}

export default AdministracionPage;

import styles from '../css/tablaVeterinarios.module.css';
import MUIDataTable from "mui-datatables";

const columns = [
    { name: "name", label: "Name", options: { filter: true, sort: true } },
    { name: "company", label: "Company", options: { filter: true, sort: false } },
    { name: "city", label: "City", options: { filter: true, sort: false } },
    { name: "state", label: "State", options: { filter: true, sort: false } },
];

const data = [
    { name: "Joe James", company: "Test Corp", city: "Yonkers", state: "NY" },
    { name: "John Walsh", company: "Test Corp", city: "Hartford", state: "CT" },
    { name: "Bob Herm", company: "Test Corp", city: "Tampa", state: "FL" },
    { name: "James Houston", company: "Test Corp", city: "Dallas", state: "TX" },
];

const options = {
    filterType: "checkbox",
    responsive: "standard", // o "vertical", "simple", "stacked"
};

const TablaVeterinarios = () => {
    return (
        <section className={styles.sectionTablaVeterinarios}>
            <div className={styles.tablaVeterinarios}>
                <MUIDataTable
                    title={"Veterinarios"}
                    data={data}
                    columns={columns}
                    options={options}
                />
            </div>
        </section>
    )
}

export default TablaVeterinarios;

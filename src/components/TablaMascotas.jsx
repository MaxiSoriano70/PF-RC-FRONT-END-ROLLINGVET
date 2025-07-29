import styles from '../css/tablaMascotas.module.css';
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

const TablaMascotas = () => {
    return (
        <section className={styles.sectionTabla}>
            <button type="button" className="btn btn-success fw-bold"><i className="fa-solid fa-plus"></i> Agregar mascota</button>
            <article className={styles.sectionTablaMascotas}>
                <div className={styles.tablaMascotas}>
                    <MUIDataTable
                        title={"Mascotas"}
                        data={data}
                        columns={columns}
                        options={options}
                    />
                </div>
            </article>
        </section>
    )
}

export default TablaMascotas;

import styles from '../css/nuestroProfesionales.module.css';
import vet1 from '../assets/img/AndresGarcia.png';
import vet2 from '../assets/img/MariaSanchez.png';
import vet3 from '../assets/img/VeraRodriguez.png';

const TituloProfesionales = () => {
    return (
        <article className={styles.contenedorTitulo}>
            <h2 className={styles.tituloProfe}>Nuestros Profesionales</h2>
        </article>
    );
}

const CardProfesional = (props) => {
    return (
        <div className={styles.cardVeterinario}>
            <div className={styles.contenedorImagen}>
                <img className={styles.imagenVet} src={props.imagen} alt={props.nombre}/>
            </div>
            <h4 className={styles.nombreVeterinario}>{props.nombre}</h4>
            <p className={styles.matriculaVet}>M.P {props.matricula}</p>
            <button className='btn btnPersonalized1 fw-bolder' >Contacto</button>
        </div>
    );
}

const NuestrosProfesionales = () => {
    return (
        <section className={styles.nuestrosProfesionales}>
            <TituloProfesionales/>
            <article className={styles.contenedorCardsVet}>
                <CardProfesional key={1} imagen={vet1} nombre="Andres Garcia" matricula="696969"/>
                <CardProfesional key={2} imagen={vet2} nombre="Maria Sanchez" matricula="696969"/>
                <CardProfesional key={3} imagen={vet3} nombre="Vera Rodriguez" matricula="696969"/>
            </article>
        </section>
    );
}

export default NuestrosProfesionales;

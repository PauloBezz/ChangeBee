import HandPoint from '../Partner/assets/img/svg/Hand';
import styles from './styles.module.css'

export const Info = ({ data, current }) => {
    // será transferido para o componente Partner um item por vez
    const { id, message, time, link, brandName } = data[current];

    return (
        <section className={styles.container}>
            <a href={link} className={styles.link}>
                {/* Apenas com a brandName o icone será visível*/}
                {!brandName == "" && <HandPoint />} 
            {brandName} </a>
            <h4 key={id} className={styles.message}>{message}</h4>
            <p className={styles.time}>{time}</p>
        </section>
    )
}
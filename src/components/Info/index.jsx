import styles from './styles.module.css'

export const Info = ({ data, current }) => {
    // será transferido para o componente Partner um item por vez
    const { id, message, time, link, brandName } = data[current];

    return (
        <section className={styles.container}>
            <h1 key={id} className={styles.message}>{message}</h1>
            <p className={styles.time}>{time}</p>
            <a href={link}>{brandName}</a>
        </section>
    )
}